import { describe, expect, it } from "vitest";
import type { ResolvedEntity } from "./entities";
import { isQuietHour, newCriticalAlerts, newNotifications, notificationText } from "./announce";

const sensor = (entity_id: string, state: string, device_class: string, area_id: string | null = "cuisine"): ResolvedEntity => ({
  entity_id,
  domain: entity_id.split(".")[0],
  area_id,
  friendly_name: entity_id,
  state: { entity_id, state, attributes: { device_class }, last_changed: "", last_updated: "" },
});
const areaName = (id: string | null) => (id === "cuisine" ? "Cuisine" : null);

describe("isQuietHour", () => {
  it.each([
    ["2026-10-28T21:59:00", false],
    ["2026-10-28T22:00:00", true],
    ["2026-10-28T03:00:00", true],
    ["2026-10-28T06:59:00", true],
    ["2026-10-28T07:00:00", false],
  ])("%s → %s", (iso, quiet) => {
    expect(isQuietHour(new Date(iso))).toBe(quiet);
  });
});

describe("notifications", () => {
  it("assemble titre et message, garde l'un s'il manque l'autre", () => {
    expect(notificationText({ id: "1", title: "Colis", message: "Livré devant la porte" })).toBe("Colis. Livré devant la porte");
    expect(notificationText({ id: "2", title: "Poubelle verte" })).toBe("Poubelle verte");
    expect(notificationText({ id: "3", message: " " })).toBe("");
  });

  it("ne retient que les notifications pas encore vues", () => {
    const known = new Set(["a"]);
    expect(newNotifications(known, [{ id: "a" }, { id: "b" }]).map((n) => n.id)).toEqual(["b"]);
  });
});

describe("newCriticalAlerts", () => {
  it("annonce un déclenchement, avec la pièce, mais pas un état déjà présent au chargement", () => {
    const prev = new Map<string, boolean>();
    expect(newCriticalAlerts(prev, [sensor("binary_sensor.fumee", "on", "smoke")], areaName)).toEqual([]);
    expect(newCriticalAlerts(prev, [sensor("binary_sensor.fumee", "off", "smoke")], areaName)).toEqual([]);
    expect(newCriticalAlerts(prev, [sensor("binary_sensor.fumee", "on", "smoke")], areaName)).toEqual([
      { entityId: "binary_sensor.fumee", text: "Attention : fumée détectée — Cuisine." },
    ]);
  });

  it("ignore les capteurs qui ne sont pas critiques et ne répète pas une alerte qui dure", () => {
    const prev = new Map<string, boolean>([
      ["binary_sensor.porte", false],
      ["binary_sensor.eau", false],
    ]);
    const first = newCriticalAlerts(
      prev,
      [sensor("binary_sensor.porte", "on", "door"), sensor("binary_sensor.eau", "on", "moisture", null)],
      areaName,
    );
    expect(first.map((a) => a.text)).toEqual(["Attention : fuite d'eau."]);
    expect(newCriticalAlerts(prev, [sensor("binary_sensor.eau", "on", "moisture", null)], areaName)).toEqual([]);
  });
});
