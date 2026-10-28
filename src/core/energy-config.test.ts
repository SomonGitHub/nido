import { describe, expect, it } from "vitest";
import type { HassEntity } from "../types";
import { DEFAULT_KVA, detectEnergy, energyCandidates, parseStoredEnergy, resolveEnergyConfig } from "./energy-config";

function house(list: [string, string, Record<string, unknown>][]): Record<string, HassEntity> {
  return Object.fromEntries(
    list.map(([entity_id, state, attributes]) => [entity_id, { entity_id, state, attributes, last_changed: "", last_updated: "" }]),
  );
}

const ORIGINAL = house([
  ["sensor.consommation_electrique_sinsts", "3260", { device_class: "apparent_power", unit_of_measurement: "VA" }],
  ["sensor.conso", "8.4", { device_class: "energy", unit_of_measurement: "kWh" }],
  ["sensor.conso_daily", "1.62", { device_class: "monetary", unit_of_measurement: "€" }],
  ["select.conso_hebdomadaire_2_en_eur", "0.2062", {}],
  ["sensor.frigo_power", "142", { device_class: "power", unit_of_measurement: "W" }],
]);

describe("detectEnergy", () => {
  it("retrouve les entités de l'installation d'origine, même sans indice dans le nom", () => {
    expect(resolveEnergyConfig({}, ORIGINAL)).toEqual({
      power: "sensor.consommation_electrique_sinsts",
      dailyKwh: "sensor.conso",
      dailyCost: "sensor.conso_daily",
      price: "select.conso_hebdomadaire_2_en_eur",
      subscribedKva: DEFAULT_KVA,
    });
  });

  it("reconnaît un Linky et ne prend pas l'index total pour la conso du jour", () => {
    const states = house([
      ["sensor.linky_papp", "1840", { device_class: "apparent_power", unit_of_measurement: "VA", friendly_name: "Linky puissance apparente" }],
      ["sensor.linky_index", "45123", { device_class: "energy", unit_of_measurement: "kWh", state_class: "total_increasing" }],
      ["sensor.linky_conso_jour", "6.2", { device_class: "energy", unit_of_measurement: "kWh" }],
      ["sensor.prise_tv_power", "90", { device_class: "power", unit_of_measurement: "W" }],
    ]);
    expect(detectEnergy(states)).toEqual({
      power: "sensor.linky_papp",
      dailyKwh: "sensor.linky_conso_jour",
      dailyCost: null,
      price: null,
    });
  });

  it("ne devine rien dans une maison qui n'a que des prises connectées", () => {
    const states = house([
      ["sensor.prise_tv_power", "90", { device_class: "power", unit_of_measurement: "W" }],
      ["sensor.prise_tv_energy", "12", { device_class: "energy", unit_of_measurement: "kWh" }],
    ]);
    expect(detectEnergy(states)).toEqual({ power: null, dailyKwh: null, dailyCost: null, price: null });
  });

  it("trouve un compteur Shelly nommé « Maison », un utility_meter quotidien et un tarif en €/kWh", () => {
    const states = house([
      ["sensor.shelly_em_power", "2100", { device_class: "power", unit_of_measurement: "W", friendly_name: "Maison puissance" }],
      ["sensor.energie_quotidienne", "4.1", { device_class: "energy", unit_of_measurement: "kWh", meter_period: "daily" }],
      ["sensor.tarif_edf", "0.2516", { unit_of_measurement: "EUR/kWh" }],
      ["select.mode_chauffage", "eco", {}],
    ]);
    expect(detectEnergy(states)).toEqual({
      power: "sensor.shelly_em_power",
      dailyKwh: "sensor.energie_quotidienne",
      dailyCost: null,
      price: "sensor.tarif_edf",
    });
  });
});

describe("resolveEnergyConfig", () => {
  it("applique les choix : entité forcée, « Aucun », et auto pour les clés absentes", () => {
    const config = resolveEnergyConfig({ power: "sensor.frigo_power", dailyCost: null, subscribedKva: 6 }, ORIGINAL);
    expect(config).toEqual({
      power: "sensor.frigo_power",
      dailyKwh: "sensor.conso",
      dailyCost: null,
      price: "select.conso_hebdomadaire_2_en_eur",
      subscribedKva: 6,
    });
  });
});

describe("energyCandidates", () => {
  it("ne propose comme prix qu'un select à valeur numérique", () => {
    const [price, mode] = Object.values(
      house([
        ["select.tarif", "0.2062", {}],
        ["select.mode_chauffage", "eco", {}],
      ]),
    );
    expect(energyCandidates("price", price)).toBe(true);
    expect(energyCandidates("price", mode)).toBe(false);
  });
});

describe("parseStoredEnergy", () => {
  it("garde chaînes et null, écarte le reste et les puissances souscrites absurdes", () => {
    expect(parseStoredEnergy({ power: 3, dailyKwh: null, price: "x", subscribedKva: -1, foo: 1 })).toEqual({
      dailyKwh: null,
      price: "x",
    });
    expect(parseStoredEnergy({ subscribedKva: 12 })).toEqual({ subscribedKva: 12 });
    expect(parseStoredEnergy("cassé")).toEqual({});
  });
});
