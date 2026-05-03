import { useState } from "preact/hooks";
import type { HassObject } from "../types";
import type { ResolvedEntity } from "../core/entities";
import { IconThermostat, IconFlame, IconSnowflake, IconMinus, IconPlus } from "../icons";
import type { JSX } from "preact";

interface ClimateWidgetProps {
  hass: HassObject;
  entity: ResolvedEntity;
  roomLabel?: string;
  breatheVariant?: 1 | 2 | 3 | 4;
  hero?: boolean;
}

const MODE_LABEL: Record<string, string> = {
  off: "Éteint",
  heat: "Chauffage",
  cool: "Climatisation",
  heat_cool: "Auto",
  auto: "Auto",
  dry: "Déshu.",
  fan_only: "Ventilation",
};

type IconCmp = (p: { size?: number }) => JSX.Element;
const MODE_ICON: Record<string, IconCmp> = {
  heat: IconFlame,
  cool: IconSnowflake,
  heat_cool: IconThermostat,
  auto: IconThermostat,
  dry: IconThermostat,
  fan_only: IconThermostat,
};

export function ClimateWidget({
  hass,
  entity,
  roomLabel,
  breatheVariant = 2,
  hero = false,
}: ClimateWidgetProps) {
  const unavailable = entity.state.state === "unavailable";
  const mode = entity.state.state;
  const isActive = mode !== "off" && !unavailable;

  const current = entity.state.attributes.current_temperature as number | undefined;
  const targetAttr = entity.state.attributes.temperature as number | undefined;
  const minTemp = (entity.state.attributes.min_temp as number | undefined) ?? 7;
  const maxTemp = (entity.state.attributes.max_temp as number | undefined) ?? 35;
  const step = (entity.state.attributes.target_temp_step as number | undefined) ?? 0.5;

  const [draft, setDraft] = useState<number | null>(null);
  const target = draft ?? targetAttr ?? current ?? 20;

  const setTarget = async (value: number) => {
    const clamped = Math.min(maxTemp, Math.max(minTemp, value));
    setDraft(clamped);
    try {
      await hass.callService("climate", "set_temperature", {
        entity_id: entity.entity_id,
        temperature: clamped,
      });
    } finally {
      setTimeout(() => setDraft(null), 50);
    }
  };

  const ModeIcon = MODE_ICON[mode] ?? IconThermostat;
  const accentClass = hero ? (isActive ? "n-card--accent" : "n-card--accent-muted") : "";
  const cardClass = ["n-card", accentClass, isActive ? `breathe-${breatheVariant}` : ""].filter(Boolean).join(" ");

  return (
    <div class={cardClass} data-hero={hero ? "true" : "false"} data-on={isActive ? "true" : "false"}>
      {isActive && <div class="n-light__glow" aria-hidden="true" />}

      <div class="n-card__head">
        <div class="n-icon-bubble">
          <ModeIcon size={18} />
        </div>
        <span class="n-eyebrow">{MODE_LABEL[mode] ?? mode}</span>
      </div>

      {roomLabel && <div class="n-eyebrow">{roomLabel}</div>}
      <div class={`n-title ${hero ? "n-title--xl" : ""}`}>{entity.friendly_name}</div>

      {!unavailable && (
        <>
          <div class="n-climate__temp">
            <span class="n-value n-value--xl">
              {Math.round(target * 10) / 10}
              <span class="n-value__unit">°C</span>
            </span>
            {typeof current === "number" && (
              <span class="n-muted">Actuelle&nbsp;{Math.round(current * 10) / 10}°C</span>
            )}
          </div>

          <div class="n-climate__steppers">
            <button
              type="button"
              class="n-stepper"
              aria-label="Diminuer"
              onClick={() => setTarget(target - step)}
              disabled={target - step < minTemp}
            >
              <IconMinus size={16} />
            </button>
            <button
              type="button"
              class="n-stepper"
              aria-label="Augmenter"
              onClick={() => setTarget(target + step)}
              disabled={target + step > maxTemp}
            >
              <IconPlus size={16} />
            </button>
          </div>
        </>
      )}
      {unavailable && <div class="n-muted">Indisponible</div>}
    </div>
  );
}
