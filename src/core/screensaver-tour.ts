import type { Area, Floor } from "./areas";
import { coverPosition, extractRoomStats, type ResolvedEntity } from "./entities";
import { NO_FLOOR, areasOnFloor, groupAreasByFloor, resolveLayout, type FloorLayout, type PlacedRoom } from "./floor-plan";
import type { HousePlan } from "./plan-store";
import { durationLabel } from "./time-ago";

/* Veille « Visite » et « Cartes » : on passe de pièce en pièce sur le vrai plan,
   avec l'état des appareils exposés de chacune. */

export type ScreensaverStyle = "tour" | "cards";
export const SCREENSAVER_STYLES: ScreensaverStyle[] = ["tour", "cards"];
export const TOUR_STEP_MS = 5000;

export function parseScreensaverStyle(raw: string | null | undefined): ScreensaverStyle {
  return raw === "cards" ? "cards" : "tour";
}

export interface TourStop {
  floorKey: string;
  floorLabel: string;
  layout: FloorLayout;
  room: PlacedRoom;
}

/** Les pièces du plan qui ont au moins un appareil exposé, étage par étage. */
export function tourStops(
  areas: Area[],
  floors: Floor[],
  plan: HousePlan,
  byArea: Map<string | null, ResolvedEntity[]>,
): TourStop[] {
  const grouped = groupAreasByFloor(areas, floors);
  const planFloors = grouped.length > 1 ? grouped.filter((f) => f.key !== NO_FLOOR) : grouped;
  const stops: TourStop[] = [];
  for (const floor of planFloors) {
    const stored = plan.floors[floor.key];
    const layout = resolveLayout(areasOnFloor(floor, areas, stored), stored, (a) => byArea.get(a.area_id)?.length ?? 1);
    const order = new Map(areas.map((a, i) => [a.area_id, i]));
    const rooms = layout.rooms
      .filter((r) => (byArea.get(r.area.area_id) ?? []).length > 0)
      .sort((a, b) => (order.get(a.area.area_id) ?? 0) - (order.get(b.area.area_id) ?? 0));
    for (const room of rooms) stops.push({ floorKey: floor.key, floorLabel: floor.label, layout, room });
  }
  return stops;
}

export type StatusTone = "alert" | "on" | "off";
export type StatusIcon = "light" | "cover" | "media" | "climate" | "window" | "door" | "alert" | "motion" | "power" | "switch" | "lock";

export interface StatusRow {
  id: string;
  icon: StatusIcon;
  text: string;
  tone: StatusTone;
}

export interface RoomStatus {
  temperature: string | null;
  humidity: string | null;
  rows: StatusRow[];
}

const OPENING = new Set(["window", "door", "garage_door", "opening"]);
const CRITICAL: Record<string, string> = {
  smoke: "Fumée détectée",
  gas: "Gaz détecté",
  carbon_monoxide: "Monoxyde de carbone",
  moisture: "Fuite d'eau",
};
const MOTION = new Set(["motion", "occupancy", "presence"]);
const MAX_ROWS = 6;

const num = (v: string) => v.replace(".", ",");

function since(iso: string, now: Date): string {
  const min = Math.floor((now.getTime() - Date.parse(iso)) / 60_000);
  return Number.isFinite(min) && min >= 1 ? ` · ${durationLabel(min)}` : "";
}

function openingLabel(dc: string, open: boolean): string {
  const door = dc === "door" || dc === "garage_door";
  if (dc === "garage_door") return open ? "Garage ouvert" : "Garage fermé";
  if (door) return open ? "Porte ouverte" : "Porte fermée";
  return open ? "Fenêtre ouverte" : "Fenêtre fermée";
}

/** Mesures et lignes d'état d'une pièce : alertes d'abord, puis ce qui est
 *  allumé ou ouvert, puis le reste, dans la limite de six lignes. */
export function roomStatus(entities: ResolvedEntity[], now: Date): RoomStatus {
  const stats = extractRoomStats(entities);
  const rows: StatusRow[] = [];
  for (const e of entities) {
    const s = e.state.state;
    if (s === "unavailable" || s === "unknown") continue;
    const a = e.state.attributes;
    const dc = (a.device_class as string | undefined) ?? "";
    const name = e.friendly_name;
    const push = (icon: StatusIcon, text: string, tone: StatusTone) => rows.push({ id: e.entity_id, icon, text, tone });
    switch (e.domain) {
      case "light": {
        const pct = typeof a.brightness === "number" ? Math.round((a.brightness / 255) * 100) : null;
        if (s === "on") push("light", `${name}${pct !== null ? ` · ${pct} %` : ""}`, "on");
        else push("light", `${name} · éteint`, "off");
        break;
      }
      case "switch":
      case "fan":
        push(e.domain === "fan" ? "switch" : "power", `${name} · ${s === "on" ? "en marche" : "arrêté"}`, s === "on" ? "on" : "off");
        break;
      case "cover": {
        const p = coverPosition(e);
        push("cover", `${name} · ${p <= 0 ? "fermé" : p >= 100 ? "ouvert" : `ouvert à ${p} %`}`, p > 0 ? "on" : "off");
        break;
      }
      case "media_player": {
        if (s !== "playing" && s !== "paused") break;
        const title = [a.media_title, a.media_artist].filter(Boolean).join(" · ");
        push("media", title || `${name} · ${s === "playing" ? "en lecture" : "en pause"}`, s === "playing" ? "on" : "off");
        break;
      }
      case "climate": {
        if (s === "off") {
          push("climate", `${name} · arrêté`, "off");
          break;
        }
        const target = a.temperature != null ? ` · ${num(String(a.temperature))}° visé` : "";
        push("climate", `${name}${target}`, a.hvac_action === "heating" || a.hvac_action === "cooling" ? "on" : "off");
        break;
      }
      case "lock":
        push("lock", `${name} · ${s === "locked" ? "verrouillée" : "déverrouillée"}`, s === "locked" ? "off" : "alert");
        break;
      case "binary_sensor":
        if (CRITICAL[dc]) {
          if (s === "on") push("alert", CRITICAL[dc], "alert");
        } else if (OPENING.has(dc)) {
          push(dc === "window" || dc === "opening" ? "window" : "door", openingLabel(dc, s === "on") + (s === "on" ? since(e.state.last_changed, now) : ""), s === "on" ? "alert" : "off");
        } else if (MOTION.has(dc) && s === "on") {
          push("motion", "Mouvement en cours", "on");
        }
        break;
      case "sensor":
        if (dc === "power" && Number(s) >= 50) {
          const w = Number(s);
          push("power", `${name} · ${w >= 1000 ? `${num((w / 1000).toFixed(1))} kW` : `${Math.round(w)} W`}`, "on");
        }
        break;
    }
  }
  const rank: Record<StatusTone, number> = { alert: 0, on: 1, off: 2 };
  rows.sort((x, y) => rank[x.tone] - rank[y.tone]);
  const fmt = (v?: { value: string; unit: string }) => (v ? `${num(v.value)}${v.unit === "%" ? " %" : "°"}` : null);
  return { temperature: fmt(stats.temperature), humidity: fmt(stats.humidity), rows: rows.slice(0, MAX_ROWS) };
}

/** Caméra de la visite : zoom et décalage (px) pour amener une pièce au centre
 *  de la zone libre de l'écran. */
export function cameraFor(
  room: PlacedRoom,
  cell: number,
  view: { w: number; h: number },
): { x: number; y: number; zoom: number } {
  const xs = room.rects.map((r) => r.x);
  const ys = room.rects.map((r) => r.y);
  const x0 = Math.min(...xs);
  const y0 = Math.min(...ys);
  const x1 = Math.max(...room.rects.map((r) => r.x + r.w));
  const y1 = Math.max(...room.rects.map((r) => r.y + r.h));
  /* Paysage : la pièce à gauche de la carte d'état (en bas à droite).
     Portrait : la pièce en haut, la carte occupe le bas de l'écran. */
  const portrait = view.h > view.w;
  const frame = portrait ? { w: 0.88, h: 0.4, x: 0.5, y: 0.4 } : { w: 0.5, h: 0.66, x: 0.42, y: 0.55 };
  const zoom = Math.max(1, Math.min(4, (view.w * frame.w) / ((x1 - x0) * cell), (view.h * frame.h) / ((y1 - y0) * cell)));
  const cx = ((x0 + x1) / 2) * cell;
  const cy = ((y0 + y1) / 2) * cell;
  return { x: view.w * frame.x - cx * zoom, y: view.h * frame.y - cy * zoom, zoom };
}
