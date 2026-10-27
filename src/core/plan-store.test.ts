import { describe, expect, it } from "vitest";
import { parseHousePlan } from "./plan-store";

const valid = {
  version: 1,
  updatedAt: "2026-10-01T10:00:00.000Z",
  floors: {
    rdc: {
      rooms: { salon: [{ x: 0, y: 0, w: 6, h: 4 }] },
      openings: {
        salon: [{ id: "o1", kind: "french", rect: 0, side: "bottom", offset: 1, length: 2, entity_id: "binary_sensor.baie" }],
      },
      devices: { salon: [{ id: "d1", entity_id: "light.plafond", dx: 3, dy: 2 }] },
      surfaces: { salon: "tile" },
    },
  },
};

describe("parseHousePlan", () => {
  it("garde un plan valide tel quel", () => {
    expect(parseHousePlan(valid)).toEqual(valid);
  });

  it("refuse ce qui n'est pas un plan", () => {
    for (const raw of [null, undefined, "plan", 42, [], {}, { version: 2, floors: {} }, { version: 1 }]) {
      expect(parseHousePlan(raw)).toBeNull();
    }
  });

  it("écarte les éléments mal formés sans perdre le reste", () => {
    const plan = parseHousePlan({
      version: 1,
      floors: {
        rdc: {
          rooms: {
            salon: [{ x: 0, y: 0, w: 6, h: 4 }, { x: "0", y: 0, w: 1, h: 1 }, { x: 0, y: 0, w: 0, h: 1 }, null],
            vide: [{ x: -1, y: 0, w: 2, h: 2 }],
            pasUnTableau: { x: 0, y: 0, w: 1, h: 1 },
          },
          openings: {
            salon: [
              { id: "o1", kind: "porte-blindée", rect: 0, side: "top", offset: 0, length: 1 },
              { id: "o2", rect: 0, side: "diagonale", offset: 0, length: 1 },
              { rect: 0, side: "top", offset: 0, length: 1 },
            ],
          },
          devices: { salon: [{ id: "d1", entity_id: "light.a", dx: Infinity, dy: 0 }, { id: "d2", entity_id: "light.b", dx: 1, dy: 1 }] },
          surfaces: { salon: "moquette", cuisine: "tile" },
        },
        cassé: "pas un étage",
      },
    });
    expect(plan).not.toBeNull();
    const rdc = plan!.floors.rdc;
    expect(Object.keys(plan!.floors)).toEqual(["rdc"]);
    expect(rdc.rooms).toEqual({ salon: [{ x: 0, y: 0, w: 6, h: 4 }] });
    // Un type d'ouvrant inconnu devient une fenêtre, sans capteur s'il n'en a pas.
    expect(rdc.openings.salon).toEqual([
      { id: "o1", kind: "window", rect: 0, side: "top", offset: 0, length: 1, entity_id: null },
    ]);
    expect(rdc.devices.salon.map((d) => d.id)).toEqual(["d2"]);
    expect(rdc.surfaces).toEqual({ cuisine: "tile" });
  });

  it("arrondit les rectangles à la case et refuse les plans démesurés", () => {
    const plan = parseHousePlan({
      version: 1,
      floors: { rdc: { rooms: { salon: [{ x: 0.4, y: 1.6, w: 3.5, h: 2 }], hangar: [{ x: 0, y: 0, w: 5000, h: 2 }] } } },
    });
    expect(plan!.floors.rdc.rooms).toEqual({ salon: [{ x: 0, y: 2, w: 4, h: 2 }] });
  });

  it("date un plan sans updatedAt au 1er janvier 1970, pour que tout autre plan l'emporte", () => {
    expect(parseHousePlan({ version: 1, floors: {} })!.updatedAt).toBe(new Date(0).toISOString());
  });
});
