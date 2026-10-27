import { describe, expect, it } from "vitest";
import {
  detectOccupancy,
  extractRoomStats,
  isEntityActive,
  lastActivity,
  resolveEntities,
  summarizeRoom,
  type ResolvedEntity,
} from "./entities";
import type { HassObject } from "../types";

const NOW = new Date("2026-10-27T12:00:00Z");
const minutesAgo = (m: number) => new Date(NOW.getTime() - m * 60_000).toISOString();

function ent(entity_id: string, state: string, attributes: Record<string, unknown> = {}, changedMinAgo = 0): ResolvedEntity {
  const changed = minutesAgo(changedMinAgo);
  return {
    entity_id,
    domain: entity_id.split(".")[0],
    area_id: "salon",
    friendly_name: entity_id,
    state: { entity_id, state, attributes, last_changed: changed, last_updated: changed },
  };
}

describe("isEntityActive", () => {
  it.each([
    [ent("light.a", "on"), true],
    [ent("light.a", "off"), false],
    [ent("media_player.a", "playing"), true],
    [ent("media_player.a", "paused"), false],
    [ent("cover.a", "open", { current_position: 0 }), false],
    [ent("cover.a", "closed", { current_position: 30 }), true],
    [ent("cover.a", "opening"), true],
    [ent("lock.a", "unlocked"), true],
    [ent("alarm_control_panel.a", "armed_away"), true],
    [ent("alarm_control_panel.a", "disarmed"), false],
    [ent("vacuum.a", "returning"), true],
    [ent("climate.a", "heat"), true],
    [ent("light.a", "unavailable"), false],
    [ent("sensor.a", "on"), false],
  ])("%o → %s", (e, active) => {
    expect(isEntityActive(e)).toBe(active);
  });
});

describe("summarizeRoom", () => {
  it("compte lumières et volets, repère le média et dédoublonne les alertes", () => {
    const s = summarizeRoom([
      ent("light.a", "on"),
      ent("light.b", "off"),
      ent("cover.a", "open", { current_position: 40 }),
      ent("media_player.a", "playing"),
      ent("binary_sensor.f1", "on", { device_class: "window" }),
      ent("binary_sensor.f2", "on", { device_class: "window" }),
      ent("binary_sensor.eau", "on", { device_class: "moisture" }),
      ent("binary_sensor.porte", "off", { device_class: "door" }),
    ]);
    expect(s).toMatchObject({
      lightsOn: 1,
      lightIds: ["light.a", "light.b"],
      coversOpen: 1,
      coverPositions: [40],
      mediaPlaying: true,
    });
    expect(s.alerts.map((a) => a.kind)).toEqual(["window", "moisture"]);
  });
});

describe("detectOccupancy", () => {
  it("préfère la présence au mouvement", () => {
    expect(
      detectOccupancy([
        ent("binary_sensor.pir", "on", { device_class: "motion" }),
        ent("binary_sensor.radar", "on", { device_class: "occupancy" }),
      ])?.kind,
    ).toBe("presence");
  });

  it("se contente du mouvement à défaut, et ignore les capteurs au repos", () => {
    expect(detectOccupancy([ent("binary_sensor.pir", "on", { device_class: "motion" })])?.kind).toBe("motion");
    expect(detectOccupancy([ent("binary_sensor.radar", "off", { device_class: "presence" })])).toBeNull();
  });
});

describe("lastActivity", () => {
  it("prend l'événement le plus récent parmi les domaines suivis", () => {
    const minutes = lastActivity(
      [
        ent("light.a", "off", {}, 30),
        ent("binary_sensor.porte", "off", { device_class: "door" }, 12),
        ent("sensor.temp", "21", { device_class: "temperature" }, 1),
      ],
      NOW,
    );
    expect(minutes).toBe(12);
  });

  it("ne dit rien au-delà de 24 h ou sans événement", () => {
    expect(lastActivity([ent("light.a", "off", {}, 1500)], NOW)).toBeNull();
    expect(lastActivity([], NOW)).toBeNull();
  });
});

describe("extractRoomStats", () => {
  it("prend la première mesure disponible de chaque type", () => {
    const stats = extractRoomStats([
      ent("sensor.t_hs", "unavailable", { device_class: "temperature", unit_of_measurement: "°C" }),
      ent("sensor.t1", "21.5", { device_class: "temperature", unit_of_measurement: "°C" }),
      ent("sensor.t2", "19", { device_class: "temperature", unit_of_measurement: "°C" }),
      ent("sensor.h", "48", { device_class: "humidity", unit_of_measurement: "%" }),
    ]);
    expect(stats).toEqual({
      temperature: { value: "21.5", unit: "°C", entityId: "sensor.t1" },
      humidity: { value: "48", unit: "%", entityId: "sensor.h" },
    });
  });
});

describe("resolveEntities", () => {
  it("prend la pièce de l'entité, sinon celle de son appareil, et masque les entités désactivées", () => {
    const hass = {
      states: {
        "light.a": { entity_id: "light.a", state: "on", attributes: { friendly_name: "Lampe" }, last_changed: "", last_updated: "" },
        "light.b": { entity_id: "light.b", state: "on", attributes: {}, last_changed: "", last_updated: "" },
        "light.c": { entity_id: "light.c", state: "on", attributes: {}, last_changed: "", last_updated: "" },
      },
    } as unknown as HassObject;
    const registry = [
      { entity_id: "light.a", area_id: "salon", device_id: "dev1", name: null, original_name: null, disabled_by: null, hidden_by: null },
      { entity_id: "light.b", area_id: null, device_id: "dev1", name: "Plafond", original_name: null, disabled_by: null, hidden_by: null },
      { entity_id: "light.c", area_id: null, device_id: null, name: null, original_name: null, disabled_by: "user", hidden_by: null },
    ];
    const devices = [{ id: "dev1", area_id: "cuisine", name: null, name_by_user: null }];
    const out = resolveEntities(hass, registry as never, devices);
    expect(out.map((e) => [e.entity_id, e.area_id, e.friendly_name])).toEqual([
      ["light.a", "salon", "Lampe"],
      ["light.b", "cuisine", "Plafond"],
    ]);
  });
});
