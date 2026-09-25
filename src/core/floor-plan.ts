import type { Area, Floor } from "./areas";

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
}

export interface FloorLayout {
  rooms: PlacedRoom[];
  cols: number;
  rows: number;
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
  if (areas.length === 0) return { rooms: [], cols: ROW_UNITS, rows: ROW_HEIGHT };
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
  return { rooms, cols: ROW_UNITS, rows: counts.length * ROW_HEIGHT };
}
