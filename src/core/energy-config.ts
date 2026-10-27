import type { HassEntity } from "../types";

/** Entités du compteur électrique. `null` = aucune (choisi ou rien trouvé). */
export interface EnergyConfig {
  power: string | null;
  dailyKwh: string | null;
  dailyCost: string | null;
  price: string | null;
  subscribedKva: number;
}

export type EnergyRole = "power" | "dailyKwh" | "dailyCost" | "price";

/** Choix enregistré par appareil : clé absente = détection automatique,
 *  `null` = « aucune » choisi exprès. */
export type StoredEnergyConfig = Partial<Record<EnergyRole, string | null>> & { subscribedKva?: number };

export const ENERGY_ROLES: readonly EnergyRole[] = ["power", "dailyKwh", "dailyCost", "price"];
export const KVA_CHOICES = [3, 6, 9, 12, 15, 18, 24, 30, 36] as const;
export const DEFAULT_KVA = 9;

/* Entités de la première installation de Nido, quand elles étaient écrites en
   dur : une maison qui les a garde exactement le même tableau de bord. */
const LEGACY: Record<EnergyRole, string> = {
  power: "sensor.consommation_electrique_sinsts",
  dailyKwh: "sensor.conso",
  dailyCost: "sensor.conso_daily",
  price: "select.conso_hebdomadaire_2_en_eur",
};

const METER_HINT = /linky|teleinfo|lixee|sinsts|papp|compteur|general|total|maison|house|home|grid|reseau/;
const DAILY_HINT = /jour|daily|today|aujourd|quotidien|journ/;

function text(e: HassEntity): string {
  const name = String(e.attributes.friendly_name ?? "");
  return `${e.entity_id} ${name}`
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

const unitOf = (e: HassEntity) => String(e.attributes.unit_of_measurement ?? "");
const classOf = (e: HassEntity) => e.attributes.device_class as string | undefined;
const isSensor = (e: HassEntity) => e.entity_id.startsWith("sensor.");
const isDaily = (e: HassEntity) => e.attributes.meter_period === "daily" || DAILY_HINT.test(text(e));

/** Entités qui peuvent tenir chaque rôle : ce que le sélecteur propose. */
export function energyCandidates(role: EnergyRole, e: HassEntity): boolean {
  switch (role) {
    case "power":
      return (
        isSensor(e) &&
        (classOf(e) === "power" || classOf(e) === "apparent_power" || /^(k?W|k?VA)$/.test(unitOf(e)))
      );
    case "dailyKwh":
      return isSensor(e) && (classOf(e) === "energy" || /^k?Wh$/.test(unitOf(e)));
    case "dailyCost":
      return isSensor(e) && (classOf(e) === "monetary" || /^(€|EUR)$/i.test(unitOf(e)));
    case "price":
      return (
        (e.entity_id.startsWith("select.") && Number.isFinite(parseFloat(e.state))) ||
        (isSensor(e) && /(€|EUR)\s*\/\s*kWh/i.test(unitOf(e)))
      );
  }
}

/* Ne devine que sur un indice clair : une prise connectée prise pour le
   compteur afficherait une jauge fausse, pire qu'aucune jauge. */
function detect(role: EnergyRole, states: Record<string, HassEntity>): string | null {
  if (states[LEGACY[role]]) return LEGACY[role];
  const all = Object.values(states).filter((e) => energyCandidates(role, e));
  const pick = (ok: (e: HassEntity) => boolean) => all.filter(ok).sort((a, b) => a.entity_id.localeCompare(b.entity_id))[0];
  switch (role) {
    case "power":
      return pick((e) => METER_HINT.test(text(e)))?.entity_id ?? null;
    case "dailyKwh":
    case "dailyCost":
      return (pick((e) => isDaily(e) && METER_HINT.test(text(e))) ?? pick(isDaily))?.entity_id ?? null;
    case "price":
      return pick((e) => isSensor(e))?.entity_id ?? null;
  }
}

export function detectEnergy(states: Record<string, HassEntity>): Record<EnergyRole, string | null> {
  return {
    power: detect("power", states),
    dailyKwh: detect("dailyKwh", states),
    dailyCost: detect("dailyCost", states),
    price: detect("price", states),
  };
}

export function resolveEnergyConfig(stored: StoredEnergyConfig, states: Record<string, HassEntity>): EnergyConfig {
  const detected = detectEnergy(states);
  const pick = (role: EnergyRole) => (stored[role] !== undefined ? stored[role]! : detected[role]);
  return {
    power: pick("power"),
    dailyKwh: pick("dailyKwh"),
    dailyCost: pick("dailyCost"),
    price: pick("price"),
    subscribedKva: stored.subscribedKva ?? DEFAULT_KVA,
  };
}

export function parseStoredEnergy(raw: unknown): StoredEnergyConfig {
  if (!raw || typeof raw !== "object") return {};
  const r = raw as Record<string, unknown>;
  const out: StoredEnergyConfig = {};
  for (const role of ENERGY_ROLES) {
    if (r[role] === null || typeof r[role] === "string") out[role] = r[role] as string | null;
  }
  const kva = r.subscribedKva;
  if (typeof kva === "number" && Number.isFinite(kva) && kva > 0 && kva <= 250) out.subscribedKva = kva;
  return out;
}
