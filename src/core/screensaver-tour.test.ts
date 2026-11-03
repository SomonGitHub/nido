import { describe, expect, it } from "vitest";
import type { HassEntity } from "../types";
import type { Area } from "./areas";
import type { ResolvedEntity } from "./entities";
import { emptyPlan } from "./plan-store";
import { cameraFor, parseScreensaverStyle, roomStatus, tourStops } from "./screensaver-tour";

const NOW = new Date("2026-11-03T15:42:00");
const ago = (min: number) => new Date(NOW.getTime() - min * 60_000).toISOString();
const st = (entity_id: string, state: string, attributes: Record<string, unknown> = {}, changed = ago(0)): HassEntity => ({
  entity_id,
  state,
  attributes,
  last_changed: changed,
  last_updated: changed,
});
const ent = (s: HassEntity, area_id = "salon", name = s.entity_id): ResolvedEntity => ({
  entity_id: s.entity_id,
  domain: s.entity_id.split(".")[0],
  area_id,
  friendly_name: name,
  state: s,
});
const area = (area_id: string, floor_id: string | null): Area => ({ area_id, name: area_id, floor_id } as Area);

describe("parseScreensaverStyle", () => {
  it("Visite par défaut", () => {
    expect(parseScreensaverStyle(null)).toBe("tour");
    expect(parseScreensaverStyle("n'importe quoi")).toBe("tour");
    expect(parseScreensaverStyle("cards")).toBe("cards");
  });
});

describe("roomStatus", () => {
  it("met les alertes en tête, puis ce qui est allumé ou ouvert", () => {
    const status = roomStatus(
      [
        ent(st("light.lampe", "off"), "salon", "Lampadaire"),
        ent(st("light.plafond", "on", { brightness: 199 }), "salon", "Plafonnier"),
        ent(st("binary_sensor.fenetre", "on", { device_class: "window" }, ago(25))),
        ent(st("cover.volet", "open", { current_position: 70 }), "salon", "Volet"),
        ent(st("media_player.tv", "playing", { media_title: "Bloom", media_artist: "Beach House" })),
        ent(st("sensor.t", "21.4", { device_class: "temperature", unit_of_measurement: "°C" })),
        ent(st("sensor.h", "47", { device_class: "humidity", unit_of_measurement: "%" })),
      ],
      NOW,
    );
    expect(status.temperature).toBe("21,4°");
    expect(status.humidity).toBe("47 %");
    expect(status.rows.map((r) => `${r.tone}:${r.text}`)).toEqual([
      "alert:Fenêtre ouverte · 25 min",
      "on:Plafonnier · 78 %",
      "on:Volet · ouvert à 70 %",
      "on:Bloom · Beach House",
      "off:Lampadaire · éteint",
    ]);
  });

  it("ignore l'indisponible et le média éteint, garde au plus six lignes", () => {
    const many = Array.from({ length: 9 }, (_, i) => ent(st(`light.l${i}`, "on"), "salon", `Lampe ${i}`));
    const status = roomStatus([ent(st("media_player.tv", "off")), ent(st("light.x", "unavailable")), ...many], NOW);
    expect(status.rows).toHaveLength(6);
    expect(status.rows.every((r) => r.icon === "light")).toBe(true);
  });
});

describe("tourStops", () => {
  it("visite les pièces qui ont des appareils exposés, étage par étage, dans l'ordre des pièces", () => {
    const areas = [area("cuisine", "rdc"), area("salon", "rdc"), area("vide", "rdc"), area("chambre", "etage")];
    const floors = [
      { floor_id: "rdc", name: "Rez-de-chaussée", level: 0 },
      { floor_id: "etage", name: "Étage", level: 1 },
    ] as never;
    const byArea = new Map<string | null, ResolvedEntity[]>([
      ["salon", [ent(st("light.a", "on"))]],
      ["cuisine", [ent(st("light.b", "on"), "cuisine")]],
      ["chambre", [ent(st("light.c", "on"), "chambre")]],
    ]);
    const stops = tourStops(areas, floors, emptyPlan(), byArea);
    expect(stops.map((s) => `${s.floorLabel}/${s.room.area.area_id}`)).toEqual([
      "Rez-de-chaussée/cuisine",
      "Rez-de-chaussée/salon",
      "Étage/chambre",
    ]);
  });
});

describe("cameraFor", () => {
  const room = { area: area("a", null), rects: [{ x: 10, y: 2, w: 4, h: 2 }] };
  it("paysage : la pièce vers la gauche, zoomée, sans dépasser ×4", () => {
    const cam = cameraFor(room, 40, { w: 1280, h: 800 });
    expect(cam.zoom).toBe(4);
    expect(cam.x + 12 * 40 * cam.zoom).toBeCloseTo(1280 * 0.42);
  });
  it("portrait : la pièce centrée dans le haut de l'écran", () => {
    const cam = cameraFor(room, 20, { w: 390, h: 844 });
    expect(cam.x + 12 * 20 * cam.zoom).toBeCloseTo(195);
    expect(cam.y + 3 * 20 * cam.zoom).toBeCloseTo(844 * 0.4);
  });
});
