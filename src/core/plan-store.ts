import type { HassObject } from "../types";
import type { PlanRect } from "./floor-plan";
import { useRetainedSync } from "./mqtt-sync";

export type WallSide = "top" | "right" | "bottom" | "left";
export type OpeningKind = "window" | "door";

/** Fenêtre ou porte posée sur un mur d'un rectangle de pièce. `offset` et
 *  `length` sont en cases, comptées depuis le début du mur (gauche ou haut). */
export interface PlanOpening {
  id: string;
  kind: OpeningKind;
  rect: number;
  side: WallSide;
  offset: number;
  length: number;
  /** binary_sensor qui dit si l'ouvrant est ouvert ; null = dessin seul. */
  entity_id: string | null;
}

export interface StoredFloor {
  rooms: Record<string, PlanRect[]>;
  openings: Record<string, PlanOpening[]>;
}

export interface HousePlan {
  version: 1;
  floors: Record<string, StoredFloor>;
  updatedAt: string;
}

const KEY = "nido.floorPlan";
const SIDES: readonly WallSide[] = ["top", "right", "bottom", "left"];
const MAX_CELLS = 200;

export function emptyPlan(): HousePlan {
  return { version: 1, floors: {}, updatedAt: new Date(0).toISOString() };
}

function num(v: unknown, min: number, max: number): number | null {
  return typeof v === "number" && Number.isFinite(v) && v >= min && v <= max ? v : null;
}

function parseRect(raw: unknown): PlanRect | null {
  if (!raw || typeof raw !== "object") return null;
  const r = raw as Record<string, unknown>;
  const x = num(r.x, 0, MAX_CELLS);
  const y = num(r.y, 0, MAX_CELLS);
  const w = num(r.w, 1, MAX_CELLS);
  const h = num(r.h, 1, MAX_CELLS);
  if (x === null || y === null || w === null || h === null) return null;
  return { x: Math.round(x), y: Math.round(y), w: Math.round(w), h: Math.round(h) };
}

function parseOpening(raw: unknown): PlanOpening | null {
  if (!raw || typeof raw !== "object") return null;
  const o = raw as Record<string, unknown>;
  const rect = num(o.rect, 0, 50);
  const offset = num(o.offset, 0, MAX_CELLS);
  const length = num(o.length, 0.5, MAX_CELLS);
  if (typeof o.id !== "string" || rect === null || offset === null || length === null) return null;
  if (!SIDES.includes(o.side as WallSide)) return null;
  return {
    id: o.id,
    kind: o.kind === "door" ? "door" : "window",
    rect: Math.round(rect),
    side: o.side as WallSide,
    offset,
    length,
    entity_id: typeof o.entity_id === "string" ? o.entity_id : null,
  };
}

/* Le plan arrive d'un topic MQTT que n'importe quel client peut écrire : tout
   ce qui n'a pas la bonne forme est écarté plutôt que de casser l'affichage. */
export function parseHousePlan(raw: unknown): HousePlan | null {
  if (!raw || typeof raw !== "object") return null;
  const p = raw as Record<string, unknown>;
  if (p.version !== 1 || !p.floors || typeof p.floors !== "object") return null;
  const floors: Record<string, StoredFloor> = {};
  for (const [key, value] of Object.entries(p.floors as Record<string, unknown>)) {
    if (!value || typeof value !== "object") continue;
    const f = value as Record<string, unknown>;
    const rooms: Record<string, PlanRect[]> = {};
    for (const [areaId, rects] of Object.entries((f.rooms as Record<string, unknown>) ?? {})) {
      if (!Array.isArray(rects)) continue;
      const parsed = rects.map(parseRect).filter((r): r is PlanRect => r !== null);
      if (parsed.length > 0) rooms[areaId] = parsed;
    }
    const openings: Record<string, PlanOpening[]> = {};
    for (const [areaId, list] of Object.entries((f.openings as Record<string, unknown>) ?? {})) {
      if (!Array.isArray(list)) continue;
      const parsed = list.map(parseOpening).filter((o): o is PlanOpening => o !== null);
      if (parsed.length > 0) openings[areaId] = parsed;
    }
    floors[key] = { rooms, openings };
  }
  return {
    version: 1,
    floors,
    updatedAt: typeof p.updatedAt === "string" ? p.updatedAt : new Date(0).toISOString(),
  };
}

function safeStorage(): Storage | null {
  try {
    return typeof localStorage !== "undefined" ? localStorage : null;
  } catch {
    return null;
  }
}

export function loadHousePlan(): HousePlan {
  const raw = safeStorage()?.getItem(KEY);
  if (!raw) return emptyPlan();
  try {
    return parseHousePlan(JSON.parse(raw)) ?? emptyPlan();
  } catch {
    return emptyPlan();
  }
}

export function saveHousePlan(plan: HousePlan): void {
  safeStorage()?.setItem(KEY, JSON.stringify(plan));
}

const OPTIONS = {
  topic: "nido/floorplan/state",
  tag: "plan",
  load: loadHousePlan,
  save: saveHousePlan,
  parse: parseHousePlan,
};

export function usePlanSync(hass: HassObject | null): [HousePlan, (next: HousePlan) => void, boolean] {
  return useRetainedSync<HousePlan>(hass, OPTIONS);
}
