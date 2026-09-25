import type { Area, Floor } from "./areas";
import type { PlanDevice, PlanOpening, StoredFloor } from "./plan-store";

/** Rectangle en cases de grille (pas en pixels) : le même plan sert tous les écrans. */
export interface PlanRect {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface PlanFloor {
  key: string;
  label: string;
  areas: Area[];
}

export interface PlacedRoom {
  area: Area;
  /** Plusieurs rectangles = pièce en L. Le premier porte le libellé. */
  rects: PlanRect[];
  /** Sol choisi dans l'éditeur, sinon deviné (`floorKind`). */
  surface?: FloorKind;
}

export interface PlacedOpening extends PlanOpening {
  area_id: string;
}

export interface PlacedDevice extends PlanDevice {
  area_id: string;
  /** Centre de l'icône en cases, dans le repère du plan affiché. */
  x: number;
  y: number;
}

/** Domaines qu'on peut poser sur le plan : un toucher les bascule. Serrures et
 *  alarmes en sont exclues — un doigt qui frôle la tablette n'ouvre pas la porte. */
export const PLACEABLE_DOMAINS = new Set(["light", "switch", "fan", "cover", "media_player"]);

export interface FloorLayout {
  rooms: PlacedRoom[];
  cols: number;
  rows: number;
  openings: PlacedOpening[];
  devices: PlacedDevice[];
  /** Faux tant que l'étage n'a jamais été dessiné : placement automatique. */
  custom: boolean;
}

export const NO_FLOOR = "__none";

const ROW_UNITS = 18;
const ROW_HEIGHT = 5;
const MIN_ROOM_WIDTH = 3;
const MAX_PER_ROW = 4;

/* Les pièces sans étage (ou rattachées à un étage supprimé) forment un dernier
   onglet ; s'il n'y a aucun étage dans HA, c'est l'unique plan : « Maison ». */
export function groupAreasByFloor(areas: Area[], floors: Floor[]): PlanFloor[] {
  const known = new Set(floors.map((f) => f.floor_id));
  const out: PlanFloor[] = floors
    .map((f) => ({ key: f.floor_id, label: f.name, areas: areas.filter((a) => a.floor_id === f.floor_id) }))
    .filter((f) => f.areas.length > 0);
  const loose = areas.filter((a) => !a.floor_id || !known.has(a.floor_id));
  if (loose.length > 0) {
    out.push({ key: NO_FLOOR, label: out.length > 0 ? "Autres pièces" : "Maison", areas: loose });
  }
  return out;
}

function splitRows(n: number): number[] {
  const perRow = Math.max(1, Math.min(MAX_PER_ROW, Math.ceil(Math.sqrt(n * 1.3))));
  const rows = Math.ceil(n / perRow);
  const base = Math.floor(n / rows);
  const extra = n % rows;
  return Array.from({ length: rows }, (_, i) => base + (i < extra ? 1 : 0));
}

/* Répartition au plus fort reste : la somme tombe pile sur la largeur de la
   rangée, sans pièce plus étroite que MIN_ROOM_WIDTH. */
function rowWidths(weights: number[]): number[] {
  const free = ROW_UNITS - MIN_ROOM_WIDTH * weights.length;
  const total = weights.reduce((s, w) => s + w, 0);
  const raw = weights.map((w) => (free * w) / total);
  const widths = raw.map((r) => MIN_ROOM_WIDTH + Math.floor(r));
  let left = ROW_UNITS - widths.reduce((s, w) => s + w, 0);
  const byRemainder = raw
    .map((r, i) => ({ i, rem: r - Math.floor(r) }))
    .sort((a, b) => b.rem - a.rem);
  for (let k = 0; left > 0; k = (k + 1) % byRemainder.length, left--) widths[byRemainder[k].i]++;
  return widths;
}

/** Plan généré sans intervention : rangées de pièces dont la largeur suit le
 *  nombre d'appareils. Point de départ tant que le plan n'a pas été dessiné. */
export function autoLayout(areas: Area[], weightOf: (a: Area) => number): FloorLayout {
  if (areas.length === 0) return { rooms: [], cols: ROW_UNITS, rows: ROW_HEIGHT, openings: [], devices: [], custom: false };
  const rooms: PlacedRoom[] = [];
  let index = 0;
  const counts = splitRows(areas.length);
  counts.forEach((count, row) => {
    const slice = areas.slice(index, index + count);
    index += count;
    const widths = rowWidths(slice.map((a) => Math.min(6, Math.max(1, weightOf(a)))));
    let x = 0;
    slice.forEach((area, i) => {
      rooms.push({ area, rects: [{ x, y: row * ROW_HEIGHT, w: widths[i], h: ROW_HEIGHT }] });
      x += widths[i];
    });
  });
  return { rooms, cols: ROW_UNITS, rows: counts.length * ROW_HEIGHT, openings: [], devices: [], custom: false };
}

const NEW_ROOM = { w: 4, h: 3 };

/** Plan dessiné s'il existe, sinon placement automatique. Une pièce apparue
 *  depuis le dernier dessin est posée sous le plan, pour rester visible
 *  jusqu'à ce qu'on la place. Le plan est recalé en (0, 0) pour l'affichage. */
export function resolveLayout(
  areas: Area[],
  stored: StoredFloor | undefined,
  weightOf: (a: Area) => number,
): FloorLayout {
  const drawn = stored ? areas.filter((a) => stored.rooms[a.area_id]) : [];
  if (!stored || drawn.length === 0) return autoLayout(areas, weightOf);

  const all = drawn.flatMap((a) => stored.rooms[a.area_id]);
  const minX = Math.min(...all.map((r) => r.x));
  const minY = Math.min(...all.map((r) => r.y));
  const rooms: PlacedRoom[] = drawn.map((area) => ({
    area,
    rects: stored.rooms[area.area_id].map((r) => ({ x: r.x - minX, y: r.y - minY, w: r.w, h: r.h })),
    surface: stored.surfaces?.[area.area_id],
  }));
  let cols = Math.max(...all.map((r) => r.x + r.w)) - minX;
  let rows = Math.max(...all.map((r) => r.y + r.h)) - minY;

  const missing = areas.filter((a) => !stored.rooms[a.area_id]);
  if (missing.length > 0) {
    cols = Math.max(cols, NEW_ROOM.w * Math.min(3, missing.length));
    let x = 0;
    let y = rows;
    for (const area of missing) {
      if (x + NEW_ROOM.w > cols) {
        x = 0;
        y += NEW_ROOM.h;
      }
      rooms.push({ area, rects: [{ x, y, w: NEW_ROOM.w, h: NEW_ROOM.h }] });
      x += NEW_ROOM.w;
    }
    rows = y + NEW_ROOM.h;
  }

  const openings = drawn.flatMap((a) =>
    (stored.openings[a.area_id] ?? []).map((o) => ({ ...o, area_id: a.area_id })),
  );
  const devices = drawn.flatMap((a) => {
    const rects = rooms.find((r) => r.area.area_id === a.area_id)!.rects;
    return (stored.devices?.[a.area_id] ?? []).map((d) => ({
      ...d,
      area_id: a.area_id,
      ...clampToRoom(rects, rects[0].x + d.dx, rects[0].y + d.dy),
    }));
  });
  return { rooms, cols, rows, openings, devices, custom: true };
}

/** Ramène un point dans l'emprise de la pièce (après un redimensionnement). */
export function clampToRoom(rects: PlanRect[], x: number, y: number): { x: number; y: number } {
  if (rects.some((r) => x >= r.x && x <= r.x + r.w && y >= r.y && y <= r.y + r.h)) return { x, y };
  const r = rects[0];
  return {
    x: Math.min(r.x + r.w - 0.5, Math.max(r.x + 0.5, x)),
    y: Math.min(r.y + r.h - 0.5, Math.max(r.y + 0.5, y)),
  };
}

export interface WallSegment {
  x: number;
  y: number;
  length: number;
  horizontal: boolean;
  /** Mur de façade : aucune autre pièce de l'autre côté. */
  exterior: boolean;
}

export type FloorKind = "wood" | "tile" | "concrete";

/** Revêtement de sol deviné d'après le nom de la pièce, comme `pickAreaIcon`. */
export function floorKind(name: string): FloorKind {
  const n = name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  if (/garage|cellier|cave|buanderie|atelier|chaufferie|local|terrasse|balcon|abri/.test(n)) return "concrete";
  if (/cuisine|bain|sdb|douche|wc|toilette|entree|hall|lingerie/.test(n)) return "tile";
  return "wood";
}

function subtract(intervals: [number, number][], cut: [number, number]): [number, number][] {
  const out: [number, number][] = [];
  for (const [a, b] of intervals) {
    if (cut[1] <= a || cut[0] >= b) {
      out.push([a, b]);
      continue;
    }
    if (cut[0] > a) out.push([a, cut[0]]);
    if (cut[1] < b) out.push([cut[1], b]);
  }
  return out;
}

/** Contour d'une pièce, en cases. Un côté de rectangle n'est un mur que là où
 *  la case voisine, hors du rectangle, n'appartient pas à la même pièce : deux
 *  rectangles d'une pièce en L ne sont séparés par aucun trait. */
export function roomWalls(rects: PlanRect[], neighbours: PlanRect[] = []): WallSegment[] {
  const walls: WallSegment[] = [];
  rects.forEach((r, i) => {
    const others = rects.filter((_, j) => j !== i);
    const sides: { horizontal: boolean; at: number; from: number; to: number; covers: (o: PlanRect) => boolean }[] = [
      { horizontal: true, at: r.y, from: r.x, to: r.x + r.w, covers: (o) => o.y < r.y && o.y + o.h >= r.y },
      { horizontal: true, at: r.y + r.h, from: r.x, to: r.x + r.w, covers: (o) => o.y <= r.y + r.h && o.y + o.h > r.y + r.h },
      { horizontal: false, at: r.x, from: r.y, to: r.y + r.h, covers: (o) => o.x < r.x && o.x + o.w >= r.x },
      { horizontal: false, at: r.x + r.w, from: r.y, to: r.y + r.h, covers: (o) => o.x <= r.x + r.w && o.x + o.w > r.x + r.w },
    ];
    for (const side of sides) {
      let parts: [number, number][] = [[side.from, side.to]];
      for (const o of others) {
        if (!side.covers(o)) continue;
        parts = subtract(parts, side.horizontal ? [o.x, o.x + o.w] : [o.y, o.y + o.h]);
      }
      /* Ce qui reste est un mur ; il est intérieur là où une pièce voisine
         occupe l'autre côté, de façade ailleurs. */
      const emit = (a: number, b: number, exterior: boolean) =>
        walls.push(
          side.horizontal
            ? { x: a, y: side.at, length: b - a, horizontal: true, exterior }
            : { x: side.at, y: a, length: b - a, horizontal: false, exterior },
        );
      for (const part of parts) {
        let outside: [number, number][] = [part];
        for (const o of neighbours) {
          if (!side.covers(o)) continue;
          outside = subtract(outside, side.horizontal ? [o.x, o.x + o.w] : [o.y, o.y + o.h]);
        }
        let inside: [number, number][] = [part];
        for (const e of outside) inside = subtract(inside, e);
        for (const [a, b] of outside) emit(a, b, true);
        for (const [a, b] of inside) emit(a, b, false);
      }
    }
  });
  return walls;
}

/** Style d'un segment de mur centré sur sa ligne, prolongé d'une demi-épaisseur
 *  à chaque bout pour que les angles se rejoignent. */
export function wallStyle(w: WallSegment, cell: number, thick: number): Record<string, string> {
  const half = thick / 2;
  return w.horizontal
    ? { left: `${w.x * cell - half}px`, top: `${w.y * cell - half}px`, width: `${w.length * cell + thick}px`, height: `${thick}px` }
    : { left: `${w.x * cell - half}px`, top: `${w.y * cell - half}px`, width: `${thick}px`, height: `${w.length * cell + thick}px` };
}

export function rectsOverlap(a: PlanRect, b: PlanRect): boolean {
  return a.x < b.x + b.w && b.x < a.x + a.w && a.y < b.y + b.h && b.y < a.y + a.h;
}

/** Longueur du mur `side` d'un rectangle, en cases. */
export function wallLength(rect: PlanRect, side: PlanOpening["side"]): number {
  return side === "top" || side === "bottom" ? rect.w : rect.h;
}

/** Segment occupé par un ouvrant, en cases, recadré si la pièce a rétréci. */
export function openingSegment(
  rect: PlanRect,
  o: Pick<PlanOpening, "side" | "offset" | "length">,
): { x: number; y: number; horizontal: boolean; length: number } {
  const wall = wallLength(rect, o.side);
  const length = Math.min(o.length, wall);
  const offset = Math.max(0, Math.min(o.offset, wall - length));
  switch (o.side) {
    case "top":
      return { x: rect.x + offset, y: rect.y, horizontal: true, length };
    case "bottom":
      return { x: rect.x + offset, y: rect.y + rect.h, horizontal: true, length };
    case "left":
      return { x: rect.x, y: rect.y + offset, horizontal: false, length };
    default:
      return { x: rect.x + rect.w, y: rect.y + offset, horizontal: false, length };
  }
}
