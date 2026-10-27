import { describe, expect, it } from "vitest";
import type { Area, Floor } from "./areas";
import {
  NO_FLOOR,
  areasOnFloor,
  autoLayout,
  clampToRoom,
  floorKind,
  groupAreasByFloor,
  openingSegment,
  rectsOverlap,
  resolveLayout,
  roomWalls,
  type PlanRect,
  type WallSegment,
} from "./floor-plan";
import type { StoredFloor } from "./plan-store";

const area = (area_id: string, floor_id: string | null = null, name = area_id): Area => ({
  area_id,
  name,
  icon: null,
  picture: null,
  floor_id,
});
const floor = (floor_id: string, name = floor_id): Floor => ({ floor_id, name, level: null, icon: null });
const stored = (rooms: StoredFloor["rooms"], extra: Partial<StoredFloor> = {}): StoredFloor => ({
  rooms,
  openings: {},
  devices: {},
  surfaces: {},
  ...extra,
});

/** Longueur totale des murs, par type, pour comparer des contours sans dépendre
 *  de la façon dont ils sont découpés. */
function wallTotals(walls: WallSegment[]) {
  let exterior = 0;
  let interior = 0;
  for (const w of walls) {
    if (w.exterior) exterior += w.length;
    else interior += w.length;
  }
  return { exterior, interior };
}

describe("groupAreasByFloor", () => {
  it("range les pièces par étage et met les pièces sans étage dans « Autres pièces »", () => {
    const floors = [floor("rdc", "Rez-de-chaussée"), floor("etage", "Étage")];
    const areas = [area("salon", "rdc"), area("chambre", "etage"), area("garage")];
    const out = groupAreasByFloor(areas, floors);
    expect(out.map((f) => [f.key, f.label, f.areas.map((a) => a.area_id)])).toEqual([
      ["rdc", "Rez-de-chaussée", ["salon"]],
      ["etage", "Étage", ["chambre"]],
      [NO_FLOOR, "Autres pièces", ["garage"]],
    ]);
  });

  it("appelle « Maison » l'unique plan quand HA n'a aucun étage", () => {
    const out = groupAreasByFloor([area("salon"), area("cuisine")], []);
    expect(out).toHaveLength(1);
    expect(out[0]).toMatchObject({ key: NO_FLOOR, label: "Maison" });
  });

  it("omet un étage vide et récupère les pièces d'un étage supprimé", () => {
    const out = groupAreasByFloor([area("salon", "rdc"), area("grenier", "supprime")], [floor("rdc"), floor("cave")]);
    expect(out.map((f) => f.key)).toEqual(["rdc", NO_FLOOR]);
    expect(out[1].areas.map((a) => a.area_id)).toEqual(["grenier"]);
  });
});

describe("areasOnFloor", () => {
  const all = [area("salon", "rdc"), area("escalier", "etage")];
  const rdc = { key: "rdc", label: "RDC", areas: [all[0]] };

  it("ajoute une pièce d'un autre étage dessinée sur celui-ci", () => {
    const s = stored({ escalier: [{ x: 0, y: 0, w: 2, h: 2 }] });
    expect(areasOnFloor(rdc, all, s).map((a) => a.area_id)).toEqual(["salon", "escalier"]);
  });

  it("garde la liste de HA sans plan dessiné", () => {
    expect(areasOnFloor(rdc, all, undefined)).toBe(rdc.areas);
  });
});

describe("autoLayout", () => {
  it("remplit chaque rangée sur 18 cases sans chevauchement", () => {
    const areas = ["a", "b", "c", "d", "e", "f", "g"].map((id) => area(id));
    const layout = autoLayout(areas, (a) => a.area_id.charCodeAt(0) % 5);
    expect(layout.custom).toBe(false);
    expect(layout.rooms).toHaveLength(areas.length);

    const rows = new Map<number, PlanRect[]>();
    for (const r of layout.rooms) {
      expect(r.rects).toHaveLength(1);
      const rect = r.rects[0];
      expect(rect.w).toBeGreaterThanOrEqual(3);
      rows.set(rect.y, [...(rows.get(rect.y) ?? []), rect]);
    }
    for (const row of rows.values()) {
      expect(row.reduce((s, r) => s + r.w, 0)).toBe(layout.cols);
    }
    const rects = layout.rooms.map((r) => r.rects[0]);
    for (let i = 0; i < rects.length; i++)
      for (let j = i + 1; j < rects.length; j++) expect(rectsOverlap(rects[i], rects[j])).toBe(false);
  });

  it("donne plus de place aux pièces qui ont plus d'appareils", () => {
    const layout = autoLayout([area("petite"), area("grande")], (a) => (a.area_id === "grande" ? 6 : 1));
    const [petite, grande] = layout.rooms.map((r) => r.rects[0].w);
    expect(grande).toBeGreaterThan(petite);
  });

  it("renvoie un plan vide sans pièce", () => {
    expect(autoLayout([], () => 1).rooms).toEqual([]);
  });
});

describe("resolveLayout", () => {
  it("recale le plan dessiné en (0, 0) et pose sous le plan une pièce pas encore dessinée", () => {
    const areas = [area("salon"), area("cuisine"), area("nouvelle")];
    const s = stored({
      salon: [{ x: 10, y: 5, w: 6, h: 4 }],
      cuisine: [{ x: 16, y: 5, w: 4, h: 4 }],
    });
    const layout = resolveLayout(areas, s, () => 1);
    expect(layout.custom).toBe(true);
    const byId = Object.fromEntries(layout.rooms.map((r) => [r.area.area_id, r.rects]));
    expect(byId.salon).toEqual([{ x: 0, y: 0, w: 6, h: 4 }]);
    expect(byId.cuisine).toEqual([{ x: 6, y: 0, w: 4, h: 4 }]);
    expect(byId.nouvelle[0].y).toBe(4);
    expect(layout.rows).toBe(4 + byId.nouvelle[0].h);
  });

  it("place un appareil relativement au premier rectangle, ramené dans la pièce si elle a rétréci", () => {
    const s = stored(
      { salon: [{ x: 2, y: 2, w: 4, h: 4 }] },
      {
        devices: {
          salon: [
            { id: "d1", entity_id: "light.a", dx: 1, dy: 1 },
            { id: "d2", entity_id: "light.b", dx: 9, dy: 1 },
          ],
        },
      },
    );
    const layout = resolveLayout([area("salon")], s, () => 1);
    expect(layout.devices.map((d) => [d.entity_id, d.x, d.y])).toEqual([
      ["light.a", 1, 1],
      ["light.b", 3.5, 1],
    ]);
  });

  it("revient au placement automatique tant que rien n'est dessiné", () => {
    expect(resolveLayout([area("salon")], stored({}), () => 1).custom).toBe(false);
    expect(resolveLayout([area("salon")], undefined, () => 1).custom).toBe(false);
  });
});

describe("roomWalls", () => {
  it("entoure une pièce seule de quatre murs de façade", () => {
    const totals = wallTotals(roomWalls([{ x: 0, y: 0, w: 4, h: 3 }]));
    expect(totals).toEqual({ exterior: 14, interior: 0 });
  });

  it("ne trace aucun trait entre les deux rectangles d'une pièce en L", () => {
    const L: PlanRect[] = [
      { x: 0, y: 0, w: 4, h: 2 },
      { x: 0, y: 2, w: 2, h: 2 },
    ];
    const walls = roomWalls(L);
    // Le contour d'un L de 4×4 amputé d'un carré 2×2 mesure 16 cases.
    expect(wallTotals(walls).exterior).toBe(16);
    const seam = walls.filter((w) => w.horizontal && w.y === 2 && w.x < 2);
    expect(seam).toEqual([]);
  });

  it("classe en cloison la partie de mur qui touche une pièce voisine", () => {
    const salon: PlanRect = { x: 0, y: 0, w: 4, h: 4 };
    const cuisine: PlanRect = { x: 4, y: 1, w: 3, h: 2 };
    const right = roomWalls([salon], [cuisine]).filter((w) => !w.horizontal && w.x === 4);
    const interior = right.filter((w) => !w.exterior);
    const exterior = right.filter((w) => w.exterior);
    expect(interior.map((w) => [w.y, w.length])).toEqual([[1, 2]]);
    expect(exterior.reduce((s, w) => s + w.length, 0)).toBe(2);
  });
});

describe("openingSegment", () => {
  const rect: PlanRect = { x: 2, y: 3, w: 5, h: 4 };

  it("place l'ouvrant sur le bon mur", () => {
    expect(openingSegment(rect, { side: "top", offset: 1, length: 2 })).toEqual({ x: 3, y: 3, horizontal: true, length: 2 });
    expect(openingSegment(rect, { side: "bottom", offset: 1, length: 2 })).toEqual({ x: 3, y: 7, horizontal: true, length: 2 });
    expect(openingSegment(rect, { side: "left", offset: 1, length: 2 })).toEqual({ x: 2, y: 4, horizontal: false, length: 2 });
    expect(openingSegment(rect, { side: "right", offset: 1, length: 2 })).toEqual({ x: 7, y: 4, horizontal: false, length: 2 });
  });

  it("recadre un ouvrant qui dépasse d'une pièce rétrécie", () => {
    expect(openingSegment(rect, { side: "left", offset: 3, length: 2 })).toEqual({ x: 2, y: 5, horizontal: false, length: 2 });
    expect(openingSegment(rect, { side: "top", offset: 0, length: 9 })).toEqual({ x: 2, y: 3, horizontal: true, length: 5 });
  });
});

describe("clampToRoom", () => {
  const L: PlanRect[] = [
    { x: 0, y: 0, w: 4, h: 2 },
    { x: 0, y: 2, w: 2, h: 2 },
  ];

  it("laisse un point déjà dans un des rectangles", () => {
    expect(clampToRoom(L, 1, 3)).toEqual({ x: 1, y: 3 });
  });

  it("ramène un point extérieur dans le premier rectangle, à une demi-case du bord", () => {
    expect(clampToRoom(L, 10, -5)).toEqual({ x: 3.5, y: 0.5 });
  });
});

describe("floorKind", () => {
  it.each([
    ["Salle de bain", "tile"],
    ["Entrée", "tile"],
    ["Cuisine", "tile"],
    ["Garage", "concrete"],
    ["Buanderie", "concrete"],
    ["Salon", "wood"],
    ["Chambre d'Émile", "wood"],
  ])("%s → %s", (name, kind) => {
    expect(floorKind(name)).toBe(kind);
  });
});
