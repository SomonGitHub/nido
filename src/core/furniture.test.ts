import { describe, expect, it } from "vitest";
import { defaultFurnitureSize, footprint, furnitureSpot, parseFurniture, resizeFurniture, rotateQuarter } from "./furniture";
import { parseHousePlan } from "./plan-store";

describe("defaultFurnitureSize", () => {
  it("prend la vraie taille, une case = 50 cm", () => {
    expect(defaultFurnitureSize("bed_double", { x: 0, y: 0, w: 10, h: 10 })).toEqual({ w: 3.2, h: 4 });
  });
  it("réduit sans déformer un meuble trop grand pour la pièce", () => {
    const s = defaultFurnitureSize("sofa", { x: 0, y: 0, w: 4, h: 4 });
    expect(s.w).toBeLessThanOrEqual(2.8);
    expect(s.w / s.h).toBeCloseTo(2.1 / 0.9, 0);
  });
});

describe("rotation et taille", () => {
  it("échange largeur et profondeur sur un quart de tour", () => {
    expect(footprint({ w: 4, h: 2, rot: 90 })).toEqual({ w: 2, h: 4 });
    expect(footprint({ w: 4, h: 2, rot: 180 })).toEqual({ w: 4, h: 2 });
    expect(rotateQuarter(270)).toBe(0);
  });
  it("garde une taille minimale", () => {
    expect(resizeFurniture(0.75, -1)).toBe(0.4);
    expect(resizeFurniture(2, 0.2)).toBe(2.2);
  });
});

describe("parseFurniture", () => {
  it("écarte un type inconnu ou des nombres invalides", () => {
    expect(parseFurniture({ id: "a", kind: "piano", dx: 0, dy: 0, w: 1, h: 1, rot: 0 })).toBeNull();
    expect(parseFurniture({ id: "a", kind: "tv", dx: 0, dy: 0, w: 0, h: 1, rot: 0 })).toBeNull();
    expect(parseFurniture({ id: "a", kind: "tv", dx: 0, dy: 0, w: 2, h: 1, rot: 45 })?.rot).toBe(0);
  });
  it("un plan d'avant les meubles se relit sans erreur", () => {
    const plan = parseHousePlan({ version: 1, floors: { rdc: { rooms: { a: [{ x: 0, y: 0, w: 2, h: 2 }] } } } });
    expect(plan?.floors.rdc.furniture).toEqual({});
  });
});

describe("furnitureSpot", () => {
  it("pose le premier meuble dans le coin, le suivant à côté sans chevaucher", () => {
    const room = { x: 0, y: 0, w: 10, h: 6 };
    const a = furnitureSpot(room, { w: 2, h: 2 }, []);
    expect(a).toEqual({ x: 1.25, y: 2 });
    const b = furnitureSpot(room, { w: 2, h: 2 }, [{ ...a, w: 2, h: 2 }]);
    expect(b.x - 1).toBeGreaterThanOrEqual(a.x + 1);
    expect(b.y).toBe(2);
  });
  it("revient au centre si la pièce est pleine", () => {
    expect(furnitureSpot({ x: 0, y: 0, w: 2, h: 2 }, { w: 3, h: 3 }, [])).toEqual({ x: 1, y: 1 });
  });
});
