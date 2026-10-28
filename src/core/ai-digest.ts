import type { HassEntity, HassObject } from "../types";
import { parseNextEventFromAttrs } from "./calendar-events";
import { extractRoomStats, isEntityActive, type ResolvedEntity } from "./entities";
import type { Stamped } from "./mqtt-sync";
import { durationLabel } from "./time-ago";

/** Résumé partagé par tous les écrans : un seul appel à l'IA toutes les 2 h
 *  pour toute la maison, quel que soit le nombre de tablettes. */
export interface AiDigest extends Stamped {
  text: string;
  generatedAt: string;
}

export const AI_DIGEST_TTL_MS = 2 * 60 * 60_000;
export const AI_DIGEST_RETRY_MS = 15 * 60_000;

export const EMPTY_AI_DIGEST: AiDigest = { text: "", generatedAt: "", updatedAt: "" };

export function parseAiDigest(raw: unknown): AiDigest | null {
  if (!raw || typeof raw !== "object") return null;
  const d = raw as Partial<AiDigest>;
  if (typeof d.text !== "string" || typeof d.generatedAt !== "string" || typeof d.updatedAt !== "string") return null;
  return { text: d.text, generatedAt: d.generatedAt, updatedAt: d.updatedAt };
}

export function isDigestStale(d: AiDigest, now: Date): boolean {
  const t = Date.parse(d.generatedAt);
  if (!d.text || Number.isNaN(t)) return true;
  return now.getTime() - t >= AI_DIGEST_TTL_MS;
}

const OPENING_LABEL: Record<string, string> = {
  window: "fenêtre ouverte",
  door: "porte ouverte",
  garage_door: "garage ouvert",
  opening: "ouvrant ouvert",
};

const ALERT_LABEL: Record<string, string> = {
  smoke: "ALERTE fumée",
  gas: "ALERTE gaz",
  carbon_monoxide: "ALERTE monoxyde de carbone",
  moisture: "ALERTE fuite d'eau",
};

const CLIMATE_MODE: Record<string, string> = {
  heat: "chauffage en marche",
  cool: "climatisation en marche",
  heat_cool: "thermostat en automatique",
  auto: "thermostat en automatique",
  dry: "déshumidification en marche",
  fan_only: "ventilation en marche",
};

function deviceClassOf(e: ResolvedEntity): string {
  return (e.state.attributes.device_class as string | undefined) ?? "";
}

function since(iso: string, now: Date): string {
  const min = Math.floor((now.getTime() - Date.parse(iso)) / 60_000);
  return Number.isFinite(min) && min >= 1 ? ` depuis ${durationLabel(min)}` : "";
}

function measure(value: string, unit: string): string {
  return `${value.replace(".", ",")}${unit === "%" ? " %" : unit ? ` ${unit}` : ""}`;
}

function roomLine(name: string, list: ResolvedEntity[], now: Date): string | null {
  const parts: string[] = [];
  const stats = extractRoomStats(list);
  if (stats.temperature) parts.push(measure(stats.temperature.value, stats.temperature.unit));
  if (stats.humidity) parts.push(`humidité ${measure(stats.humidity.value, stats.humidity.unit)}`);
  for (const e of list) {
    if (e.domain !== "binary_sensor" || e.state.state !== "on") continue;
    const dc = deviceClassOf(e);
    if (ALERT_LABEL[dc]) parts.push(ALERT_LABEL[dc]);
    else if (OPENING_LABEL[dc]) parts.push(OPENING_LABEL[dc] + since(e.state.last_changed, now));
  }
  const lights = list.filter((e) => e.domain === "light" && isEntityActive(e)).length;
  if (lights > 0) parts.push(lights === 1 ? "lumière allumée" : `${lights} lumières allumées`);
  for (const e of list) {
    const mode = e.domain === "climate" ? CLIMATE_MODE[e.state.state] : undefined;
    if (mode) {
      const target = e.state.attributes.temperature;
      parts.push(`${mode}${target != null ? ` (consigne ${target} °C)` : ""}`);
    }
    if (e.domain === "media_player" && e.state.state === "playing") parts.push("média en lecture");
    if (e.domain === "sensor" && deviceClassOf(e) === "power" && Number(e.state.state) >= 500) {
      parts.push(`${e.friendly_name} consomme ${measure(e.state.state, String(e.state.attributes.unit_of_measurement ?? "W"))}`);
    }
  }
  return parts.length > 0 ? `- ${name} : ${parts.join(", ")}.` : null;
}

function weatherLine(states: Record<string, HassEntity>, entities: ResolvedEntity[]): string | null {
  const w = entities.find((e) => e.domain === "weather")?.state ?? Object.values(states).find((s) => s.entity_id.startsWith("weather."));
  if (!w || w.state === "unavailable") return null;
  const a = w.attributes;
  const parts = [`temps ${w.state}`];
  if (a.temperature != null) parts.push(`${String(a.temperature).replace(".", ",")} °C`);
  if (a.humidity != null) parts.push(`humidité ${a.humidity} %`);
  if (a.wind_speed != null) parts.push(`vent ${a.wind_speed} ${a.wind_speed_unit ?? "km/h"}`);
  return `Dehors : ${parts.join(", ")}.`;
}

function peopleLine(states: Record<string, HassEntity>): string | null {
  const persons = Object.values(states).filter((s) => s.entity_id.startsWith("person."));
  if (persons.length === 0) return null;
  const name = (p: HassEntity) => p.attributes.friendly_name ?? p.entity_id.slice(7);
  const home = persons.filter((p) => p.state === "home").map(name);
  const away = persons.filter((p) => p.state !== "home").map(name);
  return [home.length ? `À la maison : ${home.join(", ")}.` : "Personne à la maison.", away.length ? `Absents : ${away.join(", ")}.` : ""]
    .filter(Boolean)
    .join(" ");
}

function agendaLine(entities: ResolvedEntity[], now: Date): string | null {
  const events: string[] = [];
  for (const e of entities) {
    if (e.domain !== "calendar") continue;
    const ev = parseNextEventFromAttrs(e.state.attributes, now);
    if (!ev || ev.dayOffset < 0 || ev.dayOffset > 1) continue;
    const day = ev.dayOffset === 0 ? "aujourd'hui" : "demain";
    events.push(`${ev.title} ${day}${ev.time && !ev.allDay ? ` à ${ev.time}` : ""}`);
  }
  return events.length > 0 ? `Agenda : ${events.join(" ; ")}.` : null;
}

export interface HouseInput {
  hass: Pick<HassObject, "states">;
  entities: ResolvedEntity[];
  areaNameById: Map<string, string>;
  now: Date;
}

/** État de la maison en texte, tiré des seules entités exposées dans Nido. */
export function describeHouse({ hass, entities, areaNameById, now }: HouseInput): string {
  const when = now.toLocaleString("fr-FR", { weekday: "long", day: "numeric", month: "long", hour: "2-digit", minute: "2-digit" });
  const lines = [`Nous sommes le ${when}.`];
  const weather = weatherLine(hass.states, entities);
  if (weather) lines.push(weather);
  const people = peopleLine(hass.states);
  if (people) lines.push(people);

  const byRoom = new Map<string, ResolvedEntity[]>();
  for (const e of entities) {
    const room = (e.area_id && areaNameById.get(e.area_id)) || "Sans pièce";
    byRoom.set(room, [...(byRoom.get(room) ?? []), e]);
  }
  const rooms = [...byRoom].map(([name, list]) => roomLine(name, list, now)).filter((l): l is string => l !== null);
  if (rooms.length > 0) lines.push("Pièces :", ...rooms);

  const agenda = agendaLine(entities, now);
  if (agenda) lines.push(agenda);
  return lines.join("\n");
}

export function digestInstructions(house: string): string {
  return [
    "Tu es Nido, le tableau de bord de la maison. À partir de l'état ci-dessous, écris pour la famille un court bilan en français :",
    "2 ou 3 phrases, moins de 400 caractères, sans titre, sans liste ni mise en forme.",
    "Ne recopie pas les mesures une à une : retiens ce qui mérite l'attention (alertes, confort, humidité, ouvertures, consommation, agenda)",
    "et donne un conseil utile s'il y en a un. Si tout va bien, dis-le simplement. Le texte restera affiché deux heures.",
    "",
    "État de la maison :",
    house,
  ].join("\n");
}

/** `ai_task.generate_data` renvoie `{ response: { data } }` via `call_service`. */
export function digestTextOf(res: unknown): string | null {
  const r = res as { response?: { data?: unknown }; data?: unknown } | null;
  const data = r?.response?.data ?? r?.data;
  if (typeof data !== "string") return null;
  const clean = data
    .replace(/\*\*|__|^#+\s*/gm, "")
    .replace(/^["«\s]+|["»\s]+$/g, "")
    .trim();
  return clean || null;
}

export function aiTaskEntities(states: Record<string, HassEntity>): string[] {
  return Object.keys(states).filter((id) => id.startsWith("ai_task.") && states[id].state !== "unavailable");
}

/** Essaie l'entité IA par défaut de HA (Paramètres → Général), puis la première disponible. */
export async function generateDigest(hass: HassObject, instructions: string): Promise<string> {
  const call = (entityId?: string) =>
    hass.callWS({
      type: "call_service",
      domain: "ai_task",
      service: "generate_data",
      service_data: { task_name: "Nido — résumé de la maison", instructions, ...(entityId ? { entity_id: entityId } : {}) },
      return_response: true,
    });
  let res: unknown;
  try {
    res = await call();
  } catch (err) {
    const fallback = aiTaskEntities(hass.states)[0];
    if (!fallback) throw err;
    res = await call(fallback);
  }
  const text = digestTextOf(res);
  if (!text) throw new Error("Réponse vide de l'IA");
  return text;
}
