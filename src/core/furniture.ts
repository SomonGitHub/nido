import type { PlanRect } from "./floor-plan";

/* Meubles du plan : de simples dessins, sans entité HA. Les tailles sont en
   mètres ; le plan n'a pas d'échelle, on suppose une case = 50 cm et le meuble
   est réduit s'il ne tient pas dans la pièce. Chaque taille se règle ensuite. */

export const FURNITURE_KINDS = [
  "bed_single",
  "bed_double",
  "crib",
  "wardrobe",
  "sofa",
  "armchair",
  "tv",
  "dining_table",
  "coffee_table",
  "desk",
  "sink",
  "cooktop",
  "fridge",
  "washer",
  "bathtub",
  "shower",
  "washbasin",
  "toilet",
  "plant",
] as const;

export type FurnitureKind = (typeof FURNITURE_KINDS)[number];
/** Quart de tour : 0, 90, 180 ou 270 degrés. */
export type FurnitureRotation = 0 | 90 | 180 | 270;

export interface FurnitureMeta {
  label: string;
  group: string;
  /** Largeur × profondeur en mètres, sans rotation. */
  size: [number, number];
}

export const FURNITURE: Record<FurnitureKind, FurnitureMeta> = {
  bed_single: { label: "Lit simple", group: "Chambre", size: [0.9, 1.9] },
  bed_double: { label: "Lit double", group: "Chambre", size: [1.6, 2] },
  crib: { label: "Lit bébé", group: "Chambre", size: [0.7, 1.4] },
  wardrobe: { label: "Armoire", group: "Chambre", size: [1.2, 0.6] },
  sofa: { label: "Canapé", group: "Salon", size: [2.1, 0.9] },
  armchair: { label: "Fauteuil", group: "Salon", size: [0.85, 0.85] },
  tv: { label: "Télé", group: "Salon", size: [1.4, 0.4] },
  dining_table: { label: "Table à manger", group: "Salon", size: [1.6, 0.9] },
  coffee_table: { label: "Table basse", group: "Salon", size: [1, 0.6] },
  desk: { label: "Bureau", group: "Salon", size: [1.2, 0.6] },
  sink: { label: "Évier", group: "Cuisine", size: [1.2, 0.6] },
  cooktop: { label: "Plaques de cuisson", group: "Cuisine", size: [0.6, 0.6] },
  fridge: { label: "Réfrigérateur", group: "Cuisine", size: [0.6, 0.65] },
  washer: { label: "Lave-linge", group: "Cuisine", size: [0.6, 0.6] },
  bathtub: { label: "Baignoire", group: "Salle de bain", size: [1.7, 0.75] },
  shower: { label: "Douche", group: "Salle de bain", size: [0.9, 0.9] },
  washbasin: { label: "Lavabo", group: "Salle de bain", size: [0.6, 0.45] },
  toilet: { label: "WC", group: "Salle de bain", size: [0.4, 0.65] },
  plant: { label: "Plante", group: "Salon", size: [0.5, 0.5] },
};

export const FURNITURE_GROUPS = ["Chambre", "Salon", "Cuisine", "Salle de bain"] as const;

export const METERS_PER_CELL = 0.5;
/** Pas de déplacement, en cases. */
export const FURNITURE_STEP = 0.25;
/** Pas de taille : 0,2 case = 10 cm. */
export const FURNITURE_SIZE_STEP = 0.2;
const MIN_SIZE = 0.4;

/** Meuble posé dans une pièce. `dx`/`dy` : centre, en cases, depuis le coin
 *  haut-gauche du premier rectangle (il suit la pièce, comme les appareils).
 *  `w`/`h` : taille en cases avant rotation. */
export interface PlanFurniture {
  id: string;
  kind: FurnitureKind;
  dx: number;
  dy: number;
  w: number;
  h: number;
  rot: FurnitureRotation;
}

const snap = (v: number) => +(Math.round(v / FURNITURE_SIZE_STEP) * FURNITURE_SIZE_STEP).toFixed(2);

/** Taille de départ : la vraie taille à 50 cm la case, réduite (proportions
 *  gardées) pour ne pas dépasser 70 % de la pièce. */
export function defaultFurnitureSize(kind: FurnitureKind, room: PlanRect): { w: number; h: number } {
  const [mw, mh] = FURNITURE[kind].size;
  const w = mw / METERS_PER_CELL;
  const h = mh / METERS_PER_CELL;
  const k = Math.min(1, (room.w * 0.7) / w, (room.h * 0.7) / h);
  return { w: Math.max(MIN_SIZE, snap(w * k)), h: Math.max(MIN_SIZE, snap(h * k)) };
}

/** Emprise à l'écran : largeur et hauteur échangées pour un quart de tour. */
export function footprint(f: Pick<PlanFurniture, "w" | "h" | "rot">): { w: number; h: number } {
  return f.rot % 180 === 0 ? { w: f.w, h: f.h } : { w: f.h, h: f.w };
}

export function rotateQuarter(rot: FurnitureRotation): FurnitureRotation {
  return ((rot + 90) % 360) as FurnitureRotation;
}

/** Première place libre de la pièce, en partant du coin haut-gauche (sous la
 *  bande du nom), pour ne pas empiler les meubles ajoutés. Centre de la pièce
 *  s'il n'y en a aucune. */
export function furnitureSpot(
  room: PlanRect,
  size: { w: number; h: number },
  taken: { x: number; y: number; w: number; h: number }[],
): { x: number; y: number } {
  const margin = 0.25;
  /* Bande du haut laissée au nom de la pièce. */
  const top = room.h >= 4 ? 1 : margin;
  const overlaps = (x: number, y: number) =>
    taken.some((t) => x - size.w / 2 < t.x + t.w / 2 && x + size.w / 2 > t.x - t.w / 2 && y - size.h / 2 < t.y + t.h / 2 && y + size.h / 2 > t.y - t.h / 2);
  for (let y = room.y + top + size.h / 2; y + size.h / 2 <= room.y + room.h - margin; y += 0.5) {
    for (let x = room.x + margin + size.w / 2; x + size.w / 2 <= room.x + room.w - margin; x += 0.5) {
      if (!overlaps(x, y)) return { x, y };
    }
  }
  return { x: room.x + room.w / 2, y: room.y + room.h / 2 };
}

export function resizeFurniture(size: number, delta: number): number {
  return Math.max(MIN_SIZE, Math.min(40, snap(size + delta)));
}

export function parseFurniture(raw: unknown): PlanFurniture | null {
  if (!raw || typeof raw !== "object") return null;
  const f = raw as Record<string, unknown>;
  const n = (v: unknown, min: number, max: number) =>
    typeof v === "number" && Number.isFinite(v) && v >= min && v <= max ? v : null;
  const dx = n(f.dx, -200, 200);
  const dy = n(f.dy, -200, 200);
  const w = n(f.w, MIN_SIZE, 40);
  const h = n(f.h, MIN_SIZE, 40);
  const rot = [0, 90, 180, 270].includes(f.rot as number) ? (f.rot as FurnitureRotation) : 0;
  if (typeof f.id !== "string" || !FURNITURE_KINDS.includes(f.kind as FurnitureKind)) return null;
  if (dx === null || dy === null || w === null || h === null) return null;
  return { id: f.id, kind: f.kind as FurnitureKind, dx, dy, w, h, rot };
}
