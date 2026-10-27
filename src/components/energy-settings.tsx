import { useMemo } from "preact/hooks";
import type { HassEntity } from "../types";
import {
  KVA_CHOICES,
  DEFAULT_KVA,
  detectEnergy,
  energyCandidates,
  type EnergyRole,
  type StoredEnergyConfig,
} from "../core/energy-config";

const AUTO = "__auto";
const NONE = "__none";

const ROLES: { role: EnergyRole; label: string; hint: string }[] = [
  { role: "power", label: "Puissance instantanée", hint: "Jauge de l'accueil et page Énergie." },
  { role: "dailyKwh", label: "Consommation du jour", hint: "En kWh, remise à zéro chaque jour." },
  { role: "dailyCost", label: "Coût du jour", hint: "En €, remis à zéro chaque jour." },
  { role: "price", label: "Prix du kWh", hint: "Tarif en cours, affiché dans la page Énergie." },
];

/* Les rôles affichés sur l'accueil n'apparaissent que si l'entité est exposée :
   la choisir ici l'expose, comme une étoile ajoutée aux favoris. */
const SHOWN_ON_HOME: readonly EnergyRole[] = ["power", "dailyKwh"];

function label(states: Record<string, HassEntity>, id: string): string {
  const name = states[id]?.attributes.friendly_name as string | undefined;
  return name ? `${name} — ${id}` : id;
}

export function EnergySettings({
  states,
  stored,
  exposed,
  onChange,
  onExpose,
}: {
  states: Record<string, HassEntity>;
  stored: StoredEnergyConfig;
  exposed: Set<string>;
  onChange: (next: StoredEnergyConfig) => void;
  onExpose: (id: string) => void;
}) {
  const detected = useMemo(() => detectEnergy(states), [states]);
  const candidates = useMemo(() => {
    const all = Object.values(states);
    const out = {} as Record<EnergyRole, string[]>;
    for (const { role } of ROLES) {
      out[role] = all
        .filter((e) => energyCandidates(role, e))
        .map((e) => e.entity_id)
        .sort((a, b) => label(states, a).localeCompare(label(states, b)));
    }
    return out;
  }, [states]);

  const choose = (role: EnergyRole, value: string) => {
    const next = { ...stored };
    if (value === AUTO) delete next[role];
    else next[role] = value === NONE ? null : value;
    onChange(next);
    if (value !== AUTO && value !== NONE && SHOWN_ON_HOME.includes(role) && !exposed.has(value)) onExpose(value);
  };

  const power = stored.power !== undefined ? stored.power : detected.power;

  return (
    <div class="n-ob-energy">
      <p class="n-ob__hint">
        Nido cherche votre compteur tout seul. Corrigez ici s'il s'est trompé, ou choisissez « Aucun » pour
        masquer une mesure.
      </p>
      {ROLES.map(({ role, label: title, hint }) => {
        const value = stored[role] === undefined ? AUTO : stored[role] === null ? NONE : stored[role]!;
        const auto = detected[role];
        const options = candidates[role];
        const missing = typeof value === "string" && value !== AUTO && value !== NONE && !options.includes(value);
        return (
          <label class="n-ob-energy__row">
            <span class="n-ob-energy__text">
              <span class="n-ob-energy__label">{title}</span>
              <span class="n-ob-energy__hint">{hint}</span>
            </span>
            <select
              class="n-ob-energy__select"
              value={value}
              onChange={(ev) => choose(role, (ev.currentTarget as HTMLSelectElement).value)}
            >
              <option value={AUTO}>
                Automatique — {auto ? (states[auto]?.attributes.friendly_name as string | undefined) ?? auto : "rien trouvé"}
              </option>
              <option value={NONE}>Aucun</option>
              {missing && <option value={value}>{value} (introuvable)</option>}
              {options.map((id) => (
                <option value={id}>{label(states, id)}</option>
              ))}
            </select>
          </label>
        );
      })}
      <label class="n-ob-energy__row">
        <span class="n-ob-energy__text">
          <span class="n-ob-energy__label">Puissance souscrite</span>
          <span class="n-ob-energy__hint">Indiquée sur votre facture, sert d'échelle à la jauge d'abonnement.</span>
        </span>
        <select
          class="n-ob-energy__select"
          value={String(stored.subscribedKva ?? DEFAULT_KVA)}
          onChange={(ev) => {
            const kva = Number((ev.currentTarget as HTMLSelectElement).value);
            onChange({ ...stored, subscribedKva: kva });
          }}
        >
          {KVA_CHOICES.map((kva) => (
            <option value={String(kva)}>{kva} kVA</option>
          ))}
        </select>
      </label>
      {power && !exposed.has(power) && (
        <div class="n-ob-energy__note">
          <span>Le compteur n'est pas exposé : la jauge et la page Énergie restent masquées.</span>
          <button type="button" class="n-pill-btn n-pill-btn--ghost" onClick={() => onExpose(power)}>
            L'exposer
          </button>
        </div>
      )}
    </div>
  );
}
