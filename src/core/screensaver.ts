import type { HassEntity } from "../types";
import { parseNextEventFromAttrs } from "./calendar-events";
import type { ResolvedEntity } from "./entities";
import type { RoomLayout } from "./use-room-layout";

/** Minutes sans toucher l'écran avant la veille ; 0 = jamais. */
export type ScreensaverDelay = 0 | 2 | 5 | 10;
export const SCREENSAVER_DELAYS: ScreensaverDelay[] = [0, 2, 5, 10];

export function parseScreensaverDelay(raw: string | null | undefined): ScreensaverDelay | null {
  const n = Number(raw);
  return raw != null && SCREENSAVER_DELAYS.includes(n as ScreensaverDelay) ? (n as ScreensaverDelay) : null;
}

/** Sans choix sur l'appareil : la tablette murale passe en veille, pas le téléphone ni l'ordinateur. */
export function effectiveDelay(stored: ScreensaverDelay | null, layout: RoomLayout): ScreensaverDelay {
  return stored ?? (layout === "touch" ? 5 : 0);
}

/** Décalage de quelques pixels qui change chaque minute : un affichage figé des
 *  heures durant finit par marquer les écrans. */
export function burnInOffset(now: Date): { x: number; y: number } {
  const m = now.getHours() * 60 + now.getMinutes();
  return { x: ((m * 7) % 13) - 6, y: ((m * 5) % 11) - 5 };
}

const CRITICAL: Record<string, string> = {
  smoke: "Fumée détectée",
  gas: "Gaz détecté",
  carbon_monoxide: "Monoxyde de carbone",
  moisture: "Fuite d'eau",
};

export interface ScreensaverAlert {
  entityId: string;
  kind: string;
  label: string;
  areaId: string | null;
  since: string;
}

export function activeAlerts(entities: ResolvedEntity[]): ScreensaverAlert[] {
  const out: ScreensaverAlert[] = [];
  for (const e of entities) {
    if (e.domain !== "binary_sensor" || e.state.state !== "on") continue;
    const kind = (e.state.attributes.device_class as string | undefined) ?? "";
    if (!CRITICAL[kind]) continue;
    out.push({ entityId: e.entity_id, kind, label: CRITICAL[kind], areaId: e.area_id, since: e.state.last_changed });
  }
  return out;
}

const OPENINGS = new Set(["window", "door", "garage_door", "opening"]);

/** La ligne unique de la veille de nuit : dehors, ouvertures, alarme. */
export function nightLine(entities: ResolvedEntity[], states: Record<string, HassEntity>): string[] {
  const parts: string[] = [];
  const weather =
    entities.find((e) => e.domain === "weather")?.state ??
    Object.values(states).find((s) => s.entity_id.startsWith("weather."));
  const temp = weather?.attributes.temperature;
  if (temp != null) parts.push(`${String(temp).replace(".", ",")}° dehors`);

  const open = entities.filter(
    (e) =>
      e.domain === "binary_sensor" &&
      e.state.state === "on" &&
      OPENINGS.has((e.state.attributes.device_class as string | undefined) ?? ""),
  ).length;
  const covers = entities.some((e) => e.domain === "binary_sensor" && OPENINGS.has((e.state.attributes.device_class as string | undefined) ?? ""));
  if (open > 0) parts.push(open === 1 ? "1 ouverture" : `${open} ouvertures`);
  else if (covers) parts.push("Tout est fermé");

  const alarm = entities.find((e) => e.domain === "alarm_control_panel")?.state.state;
  if (alarm?.startsWith("armed")) parts.push("Alarme activée");
  else if (alarm === "disarmed") parts.push("Alarme désactivée");
  else if (alarm === "triggered") parts.push("Alarme déclenchée");
  return parts;
}

export interface UpcomingEvent {
  title: string;
  time?: string;
  when: string;
}

export function upcomingEvent(entities: ResolvedEntity[], now: Date): UpcomingEvent | null {
  let best: (UpcomingEvent & { order: number }) | null = null;
  for (const e of entities) {
    if (e.domain !== "calendar") continue;
    const ev = parseNextEventFromAttrs(e.state.attributes, now);
    if (!ev || ev.dayOffset < 0 || ev.dayOffset > 1) continue;
    let order = ev.dayOffset * 1440;
    let when = ev.dayOffset === 0 ? "aujourd'hui" : "demain";
    if (ev.time && !ev.allDay) {
      const [h, m] = ev.time.split(":").map(Number);
      const at = new Date(now);
      at.setDate(at.getDate() + ev.dayOffset);
      at.setHours(h, m, 0, 0);
      order = Math.round((at.getTime() - now.getTime()) / 60_000);
      if (order < 0) continue;
      if (ev.dayOffset === 0) when = order < 60 ? `dans ${Math.max(order, 1)} min` : `dans ${Math.round(order / 60)} h`;
    }
    if (!best || order < best.order) best = { title: ev.title, time: ev.allDay ? undefined : ev.time, when, order };
  }
  return best ? { title: best.title, time: best.time, when: best.when } : null;
}

export interface Presence {
  name: string;
  picture?: string;
  home: boolean;
  /** Zone HA quand la personne est dans une zone nommée (« Travail »…). */
  zone?: string;
}

export function presences(states: Record<string, HassEntity>): Presence[] {
  return Object.values(states)
    .filter((s) => s.entity_id.startsWith("person."))
    .map((p) => ({
      name: (p.attributes.friendly_name as string | undefined) ?? p.entity_id.slice(7),
      picture: p.attributes.entity_picture as string | undefined,
      home: p.state === "home",
      zone: p.state !== "home" && p.state !== "not_home" && p.state !== "unknown" && p.state !== "unavailable" ? p.state : undefined,
    }));
}

export function presenceText(list: Presence[]): string {
  const home = list.filter((p) => p.home).map((p) => p.name);
  const away = list.filter((p) => !p.home);
  if (list.length === 0) return "";
  if (home.length === 0) return "Personne à la maison";
  const zoned = away.find((p) => p.zone);
  if (zoned) return `${zoned.name} · ${zoned.zone}`;
  if (away.length === 0) return home.length === 1 ? `${home[0]} est à la maison` : "Tout le monde est là";
  return home.length === 1 ? `${home[0]} est à la maison` : `${home.join(" et ")} à la maison`;
}
