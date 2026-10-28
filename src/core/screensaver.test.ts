import { describe, expect, it } from "vitest";
import type { HassEntity } from "../types";
import type { ResolvedEntity } from "./entities";
import {
  activeAlerts,
  burnInOffset,
  effectiveDelay,
  nightLine,
  parseScreensaverDelay,
  presenceText,
  presences,
} from "./screensaver";

const st = (entity_id: string, state: string, attributes: Record<string, unknown> = {}): HassEntity => ({
  entity_id,
  state,
  attributes,
  last_changed: "2026-10-28T15:44:00",
  last_updated: "",
});
const ent = (s: HassEntity, area_id: string | null = "sdb"): ResolvedEntity => ({
  entity_id: s.entity_id,
  domain: s.entity_id.split(".")[0],
  area_id,
  friendly_name: s.entity_id,
  state: s,
});

describe("délai de veille", () => {
  it("lit uniquement les valeurs proposées", () => {
    expect(parseScreensaverDelay("5")).toBe(5);
    expect(parseScreensaverDelay("0")).toBe(0);
    expect(parseScreensaverDelay("7")).toBeNull();
    expect(parseScreensaverDelay(null)).toBeNull();
  });
  it("sans choix, seule la tablette passe en veille", () => {
    expect(effectiveDelay(null, "touch")).toBe(5);
    expect(effectiveDelay(null, "phone")).toBe(0);
    expect(effectiveDelay(null, "desktop")).toBe(0);
    expect(effectiveDelay(0, "touch")).toBe(0);
    expect(effectiveDelay(10, "desktop")).toBe(10);
  });
});

describe("burnInOffset", () => {
  it("reste dans ±6 px et bouge d'une minute à l'autre", () => {
    const a = burnInOffset(new Date("2026-10-28T15:42:00"));
    const b = burnInOffset(new Date("2026-10-28T15:43:00"));
    for (const o of [a, b]) {
      expect(Math.abs(o.x)).toBeLessThanOrEqual(6);
      expect(Math.abs(o.y)).toBeLessThanOrEqual(6);
    }
    expect(a).not.toEqual(b);
  });
});

describe("activeAlerts", () => {
  it("ne garde que les alertes critiques en cours", () => {
    const list = activeAlerts([
      ent(st("binary_sensor.eau", "on", { device_class: "moisture" })),
      ent(st("binary_sensor.fumee", "off", { device_class: "smoke" })),
      ent(st("binary_sensor.porte", "on", { device_class: "door" })),
    ]);
    expect(list).toEqual([
      { entityId: "binary_sensor.eau", kind: "moisture", label: "Fuite d'eau", areaId: "sdb", since: "2026-10-28T15:44:00" },
    ]);
  });
});

describe("nightLine", () => {
  it("température, ouvertures et alarme", () => {
    const weather = st("weather.maison", "rainy", { temperature: 9.5 });
    expect(
      nightLine(
        [ent(st("binary_sensor.f", "off", { device_class: "window" })), ent(st("alarm_control_panel.a", "armed_night"))],
        { "weather.maison": weather },
      ),
    ).toEqual(["9,5° dehors", "Tout est fermé", "Alarme activée"]);
    expect(nightLine([ent(st("binary_sensor.f", "on", { device_class: "window" })), ent(st("binary_sensor.p", "on", { device_class: "door" }))], {})).toEqual([
      "2 ouvertures",
    ]);
  });
});

describe("presenceText", () => {
  const states = (list: [string, string][]) =>
    Object.fromEntries(list.map(([id, state]) => [`person.${id}`, st(`person.${id}`, state, { friendly_name: id[0].toUpperCase() + id.slice(1) })]));
  it("dit qui est là, ou où est l'absent", () => {
    expect(presenceText(presences(states([["simon", "home"], ["anna", "Conservatoire"]])))).toBe("Anna · Conservatoire");
    expect(presenceText(presences(states([["simon", "home"], ["marie", "home"]])))).toBe("Tout le monde est là");
    expect(presenceText(presences(states([["simon", "home"], ["marie", "home"], ["anna", "not_home"]])))).toBe("Simon et Marie à la maison");
    expect(presenceText(presences(states([["simon", "not_home"]])))).toBe("Personne à la maison");
  });
});
