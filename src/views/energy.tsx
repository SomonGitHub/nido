import { useMemo } from "preact/hooks";
import type { HassObject } from "../types";
import type { Area } from "../core/areas";
import type { ResolvedEntity } from "../core/entities";
import { IconBolt, IconChevronLeft, IconMore, IconArrowUpRight } from "../icons";
import { PowerGaugeWidget } from "../widgets/power-gauge";
import { SubscriptionGuardWidget } from "../widgets/subscription-guard";
import { Hourly24hWidget } from "../widgets/hourly-24h";
import { Top5ConsumersWidget } from "../widgets/top-consumers";

export const POWER_ENTITY_ID = "sensor.consommation_electrique_ccasn";
export const DAILY_COST_ENTITY_ID = "sensor.consommation_electrique_east_cost";
const SUBSCRIBED_KVA = 9;

interface EnergyPageProps {
  hass: HassObject;
  entities: ResolvedEntity[];
  exposed: string[];
  areas: Area[];
  onBack: () => void;
}

export function EnergyPage({ hass, entities, exposed, areas, onBack }: EnergyPageProps) {
  const exposedSet = useMemo(() => new Set(exposed), [exposed]);
  const exposedEntities = useMemo(
    () => entities.filter((e) => exposedSet.has(e.entity_id)),
    [entities, exposedSet],
  );

  const powerEntity = hass.states[POWER_ENTITY_ID];
  const powerAvailable =
    !!powerEntity && powerEntity.state !== "unavailable" && powerEntity.state !== "unknown";

  const currentPower = useMemo(() => {
    if (!powerAvailable || !powerEntity) return 0;
    const n = Number(powerEntity.state);
    return Number.isFinite(n) ? Math.max(0, n) : 0;
  }, [powerEntity, powerAvailable]);

  const dailyEntity = hass.states[DAILY_COST_ENTITY_ID];
  const dailyValue = useMemo(() => {
    if (!dailyEntity) return null;
    const n = Number(dailyEntity.state);
    return Number.isFinite(n) ? n : null;
  }, [dailyEntity]);
  const dailyUnit = (dailyEntity?.attributes.unit_of_measurement as string | undefined) ?? "kWh";

  const dateStr = useMemo(() => {
    const s = new Date()
      .toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" });
    return s.replace(/^\w/, (c) => c.toUpperCase());
  }, []);

  return (
    <div class="nido-shell">
      <div class="nido-dashboard nido-energy">
        <header class="nido-energy__header">
          <button
            type="button"
            class="n-icon-btn nido-energy__back"
            onClick={onBack}
            aria-label="Retour"
          >
            <IconChevronLeft size={18} />
          </button>
          <div class="nido-energy__crumb">
            <div class="n-eyebrow">Maison · Tableau</div>
            <div class="nido-energy__brand">nido</div>
          </div>
          <div class="nido-energy__head-actions">
            <a
              class="n-pill-btn n-pill-btn--ghost nido-energy__ha-link"
              href="/lovelace/energy"
              target="_top"
            >
              <IconArrowUpRight size={12} />
              Ouvrir HA
            </a>
            <button type="button" class="n-icon-btn" aria-label="Plus">
              <IconMore size={18} />
            </button>
          </div>
        </header>

        <section class="nido-energy__hero">
          <div class="nido-energy__hero-left">
            <div class="nido-energy__icon">
              <div class="pattern-dots nido-energy__icon-bg" aria-hidden="true" />
              <IconBolt size={32} />
            </div>
            <div>
              <div class="nido-energy__hero-meta">
                <span>{dateStr}</span>
                <span class="nido-energy__sep" />
                <span class="nido-energy__live">
                  <span class="nido-energy__live-dot" />
                  Données live · Linky
                </span>
              </div>
              <h1 class="nido-energy__title">Énergie</h1>
            </div>
          </div>

          <div class="nido-energy__stats">
            <Stat
              label="Auj."
              value={dailyValue !== null ? dailyValue.toFixed(1).replace(".", ",") : "—"}
              unit={dailyValue !== null ? dailyUnit : ""}
            />
            <Sep />
            <Stat
              label="Puissance"
              value={powerAvailable ? Math.round(currentPower).toLocaleString("fr-FR") : "—"}
              unit={powerAvailable ? "W" : ""}
            />
            <Sep />
            <Stat label="Souscrit" value={String(SUBSCRIBED_KVA)} unit="kVA" />
          </div>
        </section>

        {!powerAvailable ? (
          <div class="nido-empty">
            <p class="n-muted">
              L'entité de puissance <code>{POWER_ENTITY_ID}</code> n'est pas disponible.
              Vérifiez qu'elle est exposée dans Nido.
            </p>
          </div>
        ) : (
          <>
            <section class="nido-energy__section">
              <div class="nido-section-title">
                <h2 class="is-accent">Maintenant</h2>
              </div>
              <div class="nido-energy__live-grid">
                <PowerGaugeWidget hass={hass} powerEntityId={POWER_ENTITY_ID} />
                <SubscriptionGuardWidget
                  currentPower={currentPower}
                  subscribedKva={SUBSCRIBED_KVA}
                />
              </div>
            </section>

            <section class="nido-energy__section">
              <div class="nido-section-title">
                <h2>Aujourd'hui · 24 heures</h2>
                <span class="n-eyebrow">kWh par heure</span>
              </div>
              <Hourly24hWidget
                hass={hass}
                powerEntityId={POWER_ENTITY_ID}
                dailyConsumptionEntityId={DAILY_COST_ENTITY_ID}
              />
            </section>

            <section class="nido-energy__section">
              <div class="nido-section-title">
                <h2>Top consommateurs</h2>
              </div>
              <Top5ConsumersWidget
                entities={exposedEntities}
                primaryPowerEntityId={POWER_ENTITY_ID}
                areas={areas}
              />
            </section>
          </>
        )}
      </div>
    </div>
  );
}

function Stat({ label, value, unit }: { label: string; value: string; unit: string }) {
  return (
    <div class="nido-energy__stat">
      <div class="n-eyebrow">{label}</div>
      <div class="nido-energy__stat-value">
        {value}
        {unit && <span class="nido-energy__stat-unit">{unit}</span>}
      </div>
    </div>
  );
}

function Sep() {
  return <div class="nido-energy__stat-sep" aria-hidden="true" />;
}
