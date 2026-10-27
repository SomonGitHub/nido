import { useMemo } from "preact/hooks";
import type { HassObject } from "../types";
import type { Area } from "../core/areas";
import type { ResolvedEntity } from "../core/entities";
import { IconBolt, IconChevronLeft, IconMore, IconArrowUpRight } from "../icons";
import { PowerGaugeWidget } from "../widgets/power-gauge";
import { SubscriptionGuardWidget } from "../widgets/subscription-guard";
import { Hourly24hWidget } from "../widgets/hourly-24h";
import { Top5ConsumersWidget } from "../widgets/top-consumers";
import type { EnergyConfig } from "../core/energy-config";

interface EnergyPageProps {
  hass: HassObject;
  energy: EnergyConfig;
  entities: ResolvedEntity[];
  exposed: string[];
  areas: Area[];
  onBack: () => void;
}

export function EnergyPage({ hass, energy, entities, exposed, areas, onBack }: EnergyPageProps) {
  const exposedSet = useMemo(() => new Set(exposed), [exposed]);
  const exposedEntities = useMemo(
    () => entities.filter((e) => exposedSet.has(e.entity_id)),
    [entities, exposedSet],
  );

  const powerEntity = energy.power ? hass.states[energy.power] : undefined;
  const powerAvailable =
    !!powerEntity && powerEntity.state !== "unavailable" && powerEntity.state !== "unknown";

  const currentPower = useMemo(() => {
    if (!powerAvailable || !powerEntity) return 0;
    const n = Number(powerEntity.state);
    return Number.isFinite(n) ? Math.max(0, n) : 0;
  }, [powerEntity, powerAvailable]);
  const powerUnit =
    (powerEntity?.attributes.unit_of_measurement as string | undefined) ?? "W";

  const dailyKwhEntity = energy.dailyKwh ? hass.states[energy.dailyKwh] : undefined;
  const dailyKwhValue = useMemo(() => {
    if (!dailyKwhEntity) return null;
    const n = Number(dailyKwhEntity.state);
    return Number.isFinite(n) ? n : null;
  }, [dailyKwhEntity]);
  const dailyKwhUnit = (dailyKwhEntity?.attributes.unit_of_measurement as string | undefined) ?? "kWh";

  const dailyCostEntity = energy.dailyCost ? hass.states[energy.dailyCost] : undefined;
  const dailyCostValue = useMemo(() => {
    if (!dailyCostEntity) return null;
    const n = Number(dailyCostEntity.state);
    return Number.isFinite(n) ? n : null;
  }, [dailyCostEntity]);
  const dailyCostUnit = (dailyCostEntity?.attributes.unit_of_measurement as string | undefined) ?? "€";

  const priceEntity = energy.price ? hass.states[energy.price] : undefined;
  const priceValue = useMemo(() => {
    if (!priceEntity) return null;
    const s = priceEntity.state;
    if (s === "unavailable" || s === "unknown") return null;
    const n = Number(s);
    return Number.isFinite(n) ? n : null;
  }, [priceEntity]);
  const priceRawState = priceEntity?.state ?? null;

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
                  Données live · {/linky|sinsts/i.test(`${energy.power} ${powerEntity?.attributes.friendly_name ?? ""}`) ? "Linky" : "Compteur"}
                </span>
              </div>
              <h1 class="nido-energy__title">Énergie</h1>
            </div>
          </div>

          <div class="nido-energy__stats">
            <Stat
              label="Auj."
              value={dailyKwhValue !== null ? dailyKwhValue.toFixed(1).replace(".", ",") : "—"}
              unit={dailyKwhValue !== null ? dailyKwhUnit : ""}
            />
            <Sep />
            <Stat
              label="Coût"
              value={dailyCostValue !== null ? dailyCostValue.toFixed(2).replace(".", ",") : "—"}
              unit={dailyCostValue !== null ? dailyCostUnit : ""}
            />
            <Sep />
            <Stat
              label="Puissance"
              value={powerAvailable ? Math.round(currentPower).toLocaleString("fr-FR") : "—"}
              unit={powerAvailable ? powerUnit : ""}
            />
            {priceRawState !== null && (
              <>
                <Sep />
                <Stat
                  label="Tarif"
                  value={
                    priceValue !== null
                      ? priceValue.toFixed(4).replace(".", ",").replace(/,?0+$/, "")
                      : priceRawState
                  }
                  unit={priceValue !== null ? "€/kWh" : ""}
                />
              </>
            )}
          </div>
        </section>

        {!powerAvailable ? (
          <div class="nido-empty">
            <p class="n-muted">
              {energy.power ? (
                <>
                  L'entité de puissance <code>{energy.power}</code> n'est pas disponible.
                </>
              ) : (
                <>Aucun compteur électrique choisi.</>
              )}{" "}
              Réglez-le dans Personnaliser → Vos appareils → Compteur électrique.
            </p>
          </div>
        ) : (
          <>
            <section class="nido-energy__section">
              <div class="nido-section-title">
                <h2 class="is-accent">Maintenant</h2>
              </div>
              <div class="nido-energy__live-grid">
                <PowerGaugeWidget
                  hass={hass}
                  powerEntityId={energy.power!}
                  max={energy.subscribedKva * 1000}
                />
                <SubscriptionGuardWidget
                  currentPower={currentPower}
                  subscribedKva={energy.subscribedKva}
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
                powerEntityId={energy.power!}
                dailyConsumptionEntityId={energy.dailyKwh ?? undefined}
              />
            </section>

            <section class="nido-energy__section">
              <div class="nido-section-title">
                <h2>Top consommateurs</h2>
              </div>
              <Top5ConsumersWidget
                entities={exposedEntities}
                primaryPowerEntityId={energy.power!}
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
