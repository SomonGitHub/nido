import { describe, expect, it } from "vitest";
import type { HassEntity } from "../types";
import type { ResolvedEntity } from "./entities";
import { aiTaskEntities, describeHouse, digestTextOf, isDigestStale, parseAiDigest, shouldRegenerate } from "./ai-digest";

const NOW = new Date("2026-10-28T14:05:00");
const ago = (min: number) => new Date(NOW.getTime() - min * 60_000).toISOString();

const st = (entity_id: string, state: string, attributes: Record<string, unknown> = {}, changed = ago(0)): HassEntity => ({
  entity_id,
  state,
  attributes,
  last_changed: changed,
  last_updated: changed,
});
const ent = (s: HassEntity, area_id: string | null = "sdb"): ResolvedEntity => ({
  entity_id: s.entity_id,
  domain: s.entity_id.split(".")[0],
  area_id,
  friendly_name: (s.attributes.friendly_name as string) ?? s.entity_id,
  state: s,
});

describe("isDigestStale", () => {
  it("renouvelle au bout de 2 h, ou sans texte", () => {
    expect(isDigestStale({ text: "ok", generatedAt: ago(119), updatedAt: ago(119) }, NOW)).toBe(false);
    expect(isDigestStale({ text: "ok", generatedAt: ago(120), updatedAt: ago(120) }, NOW)).toBe(true);
    expect(isDigestStale({ text: "", generatedAt: ago(5), updatedAt: ago(5) }, NOW)).toBe(true);
    expect(isDigestStale({ text: "ok", generatedAt: "", updatedAt: "" }, NOW)).toBe(true);
  });
});

describe("parseAiDigest", () => {
  it("refuse un message incomplet", () => {
    expect(parseAiDigest({ text: "a" })).toBeNull();
    expect(parseAiDigest(null)).toBeNull();
    expect(parseAiDigest({ text: "a", generatedAt: "x", updatedAt: "y", extra: 1 })).toEqual({ text: "a", generatedAt: "x", updatedAt: "y" });
  });
});

describe("digestTextOf", () => {
  it("lit response.data et retire la mise en forme", () => {
    expect(digestTextOf({ response: { data: '  "**Tout va bien** à la maison."  ' } })).toBe("Tout va bien à la maison.");
    expect(digestTextOf({ response: { data: { text: "objet" } } })).toBeNull();
    expect(digestTextOf({ response: { data: "  " } })).toBeNull();
  });
});

describe("aiTaskEntities", () => {
  it("ne garde que les entités ai_task disponibles", () => {
    const states = { "ai_task.a": st("ai_task.a", "unknown"), "ai_task.b": st("ai_task.b", "unavailable"), "light.x": st("light.x", "on") };
    expect(aiTaskEntities(states)).toEqual(["ai_task.a"]);
  });
});

describe("describeHouse", () => {
  it("décrit la météo, les présents et chaque pièce à partir des entités exposées", () => {
    const temp = st("sensor.t", "22.3", { device_class: "temperature", unit_of_measurement: "°C" });
    const hum = st("sensor.h", "76", { device_class: "humidity", unit_of_measurement: "%" });
    const win = st("binary_sensor.f", "on", { device_class: "window" }, ago(25));
    const light = st("light.salon", "on");
    const weather = st("weather.maison", "rainy", { temperature: 13.4, humidity: 75 });
    const simon = st("person.simon", "home", { friendly_name: "Simon" });
    const adele = st("person.adele", "not_home", { friendly_name: "Adèle" });
    const text = describeHouse({
      hass: { states: { "person.simon": simon, "person.adele": adele, "weather.maison": weather } },
      entities: [ent(temp), ent(hum), ent(win), ent(light, "salon"), ent(weather, null)],
      areaNameById: new Map([["sdb", "Salle de bain"], ["salon", "Salon"]]),
      now: NOW,
    });
    expect(text).toContain("Dehors : temps rainy, 13,4 °C, humidité 75 %.");
    expect(text).toContain("À la maison : Simon. Absents : Adèle.");
    expect(text).toContain("- Salle de bain : 22,3 °C, humidité 76 %, fenêtre ouverte depuis 25 min.");
    expect(text).toContain("- Salon : lumière allumée.");
  });
});

describe("shouldRegenerate", () => {
  const old = { text: "ok", generatedAt: "2026-10-28T19:00:00", updatedAt: "2026-10-28T19:00:00" };
  it("ne rappelle pas l'IA la nuit, même avec un résumé périmé", () => {
    expect(shouldRegenerate(old, new Date("2026-10-28T23:30:00"))).toBe(false);
    expect(shouldRegenerate(old, new Date("2026-10-29T06:59:00"))).toBe(false);
    expect(shouldRegenerate(old, new Date("2026-10-29T07:00:00"))).toBe(true);
    expect(shouldRegenerate(old, new Date("2026-10-28T21:00:00"))).toBe(true);
  });
});
