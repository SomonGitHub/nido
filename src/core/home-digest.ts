import type { HassObject } from "../types";
import { parseNextEventFromAttrs } from "./calendar-events";
import { isEntityActive, type ResolvedEntity } from "./entities";
import { durationLabel } from "./time-ago";

export type DigestTone = "alert" | "notice" | "active" | "calm";

/** `room` est rendu à part, en incise : évite d'avoir à accorder une préposition
 *  ("au salon" / "à la cuisine" / "à l'entrée") sur un nom de pièce libre. */
export interface DigestFact {
  id: string;
  text: string;
  room?: string;
  tone: DigestTone;
}

export interface DigestInput {
  hass: HassObject;
  entities: ResolvedEntity[];
  areaNameById: Map<string, string>;
  now: Date;
}

const MAX_FACTS = 3;
const ARRIVAL_WINDOW_MIN = 120;
const EVENT_SOON_MIN = 180;

const ALERT_TEXT: Record<string, string> = {
  smoke: "Fumée détectée",
  gas: "Gaz détecté",
  carbon_monoxide: "Monoxyde détecté",
  moisture: "Fuite d'eau",
};

const OPENING_TEXT: Record<string, { one: string; many: string }> = {
  window: { one: "Fenêtre ouverte", many: "fenêtres ouvertes" },
  door: { one: "Porte ouverte", many: "portes ouvertes" },
  garage_door: { one: "Garage ouvert", many: "garages ouverts" },
};

const MEDIA_TEXT: Record<string, string> = {
  music: "Musique en cours",
  tvshow: "Vidéo en cours",
  movie: "Vidéo en cours",
  video: "Vidéo en cours",
};

function minutesSince(iso: string | undefined, now: Date): number | null {
  if (!iso) return null;
  const t = new Date(iso).getTime();
  if (Number.isNaN(t)) return null;
  return Math.floor((now.getTime() - t) / 60_000);
}

function sinceLabel(minutes: number): string {
  return `depuis ${durationLabel(minutes)}`;
}

function untilLabel(minutes: number): string {
  if (minutes <= 1) return "maintenant";
  if (minutes < 60) return `dans ${minutes} min`;
  return `dans ${Math.round(minutes / 60)} h`;
}

function deviceClassOf(e: ResolvedEntity): string | undefined {
  return e.state.attributes.device_class as string | undefined;
}

interface NextEvent {
  title: string;
  minutes: number;
  time?: string;
  allDay: boolean;
  dayOffset: number;
}

function findNextEvent(entities: ResolvedEntity[], now: Date): NextEvent | null {
  let best: NextEvent | null = null;

  for (const e of entities) {
    if (e.domain !== "calendar") continue;
    const parsed = parseNextEventFromAttrs(e.state.attributes, now);
    if (!parsed || parsed.dayOffset < 0 || parsed.dayOffset > 1) continue;

    let minutes = parsed.dayOffset * 1440;
    if (parsed.time) {
      const [h, m] = parsed.time.split(":").map(Number);
      const at = new Date(now);
      at.setDate(at.getDate() + parsed.dayOffset);
      at.setHours(h, m, 0, 0);
      minutes = Math.round((at.getTime() - now.getTime()) / 60_000);
      if (minutes < 0) continue;
    }

    if (!best || minutes < best.minutes) {
      best = { title: parsed.title, minutes, time: parsed.time, allDay: parsed.allDay, dayOffset: parsed.dayOffset };
    }
  }

  return best;
}

/** Deux ou trois faits réels tirés de l'état courant, par ordre d'importance.
 *  Vide = maison calme : l'appelant retombe alors sur la phrase d'ambiance. */
export function buildDigest({ hass, entities, areaNameById, now }: DigestInput): DigestFact[] {
  const facts: DigestFact[] = [];
  const roomOf = (areaId: string | null) => (areaId ? areaNameById.get(areaId) : undefined);
  const enough = () => facts.length >= MAX_FACTS;

  for (const e of entities) {
    if (e.domain !== "binary_sensor" || !isEntityActive(e)) continue;
    const text = ALERT_TEXT[deviceClassOf(e) ?? ""];
    if (!text) continue;
    facts.push({ id: `alert:${e.entity_id}`, text, room: roomOf(e.area_id), tone: "alert" });
  }
  if (enough()) return facts.slice(0, MAX_FACTS);

  const openings = entities.filter(
    (e) => e.domain === "binary_sensor" && isEntityActive(e) && OPENING_TEXT[deviceClassOf(e) ?? ""],
  );
  if (openings.length === 1) {
    const only = openings[0];
    facts.push({
      id: `opening:${only.entity_id}`,
      text: OPENING_TEXT[deviceClassOf(only) ?? ""].one,
      room: roomOf(only.area_id),
      tone: "notice",
    });
  } else if (openings.length > 1) {
    const classes = new Set(openings.map((e) => deviceClassOf(e)));
    const text =
      classes.size === 1
        ? `${openings.length} ${OPENING_TEXT[deviceClassOf(openings[0]) ?? ""].many}`
        : `${openings.length} ouvrants ouverts`;
    facts.push({ id: `openings:${openings.length}`, text, tone: "notice" });
  }
  if (enough()) return facts.slice(0, MAX_FACTS);

  for (const p of Object.values(hass.states)) {
    if (!p.entity_id.startsWith("person.") || p.state !== "home") continue;
    const mins = minutesSince(p.last_changed, now);
    if (mins === null || mins < 0 || mins > ARRIVAL_WINDOW_MIN) continue;
    const name = (p.attributes.friendly_name as string | undefined) ?? p.entity_id.slice(7);
    facts.push({
      id: `arrival:${p.entity_id}`,
      text: mins < 2 ? `${name} vient d'arriver` : `${name} est là ${sinceLabel(mins)}`,
      tone: "active",
    });
    if (enough()) break;
  }
  if (enough()) return facts.slice(0, MAX_FACTS);

  const lightsOn = entities.filter((e) => e.domain === "light" && isEntityActive(e));
  if (lightsOn.length === 1) {
    facts.push({
      id: `lights:${lightsOn[0].entity_id}`,
      text: "Lumière allumée",
      room: roomOf(lightsOn[0].area_id),
      tone: "active",
    });
  } else if (lightsOn.length > 1) {
    facts.push({ id: `lights:${lightsOn.length}`, text: `${lightsOn.length} lumières allumées`, tone: "active" });
  }
  if (enough()) return facts.slice(0, MAX_FACTS);

  const playing = entities.find((e) => e.domain === "media_player" && isEntityActive(e));
  if (playing) {
    const kind = playing.state.attributes.media_content_type as string | undefined;
    facts.push({
      id: `media:${playing.entity_id}`,
      text: MEDIA_TEXT[kind ?? ""] ?? "Lecture en cours",
      room: roomOf(playing.area_id),
      tone: "active",
    });
  }
  if (enough()) return facts.slice(0, MAX_FACTS);

  const event = findNextEvent(entities, now);
  if (event) {
    let text: string;
    if (event.dayOffset === 1) text = `${event.title} demain${event.time ? ` à ${event.time}` : ""}`;
    else if (event.allDay) text = `${event.title} aujourd'hui`;
    else if (event.minutes <= EVENT_SOON_MIN) text = `${event.title} ${untilLabel(event.minutes)}`;
    else text = `${event.title} à ${event.time}`;
    facts.push({ id: `event:${text}`, text, tone: "calm" });
  }
  if (enough()) return facts.slice(0, MAX_FACTS);

  const persons = Object.values(hass.states).filter((s) => s.entity_id.startsWith("person."));
  if (persons.length > 0 && persons.every((p) => p.state !== "home")) {
    facts.push({ id: "empty", text: "Personne à la maison", tone: "calm" });
  }
  if (enough()) return facts.slice(0, MAX_FACTS);

  const heating = entities.find((e) => e.domain === "climate" && e.state.state === "heat");
  if (heating) {
    facts.push({
      id: `heating:${heating.entity_id}`,
      text: "Chauffage en marche",
      room: roomOf(heating.area_id),
      tone: "calm",
    });
  }

  return facts.slice(0, MAX_FACTS);
}
