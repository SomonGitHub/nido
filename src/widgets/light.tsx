import { useState } from "preact/hooks";
import type { HassObject } from "../types";
import type { ResolvedEntity } from "../core/entities";
import { IconLightOn } from "../icons";

interface LightWidgetProps {
  hass: HassObject;
  entity: ResolvedEntity;
  hero?: boolean;
  breatheVariant?: 1 | 2 | 3 | 4;
  roomLabel?: string;
}

function brightnessPct(state: ResolvedEntity["state"]): number {
  const b = state.attributes.brightness as number | undefined;
  if (typeof b !== "number") return state.state === "on" ? 100 : 0;
  return Math.round((b / 255) * 100);
}

export function LightWidget({
  hass,
  entity,
  hero = false,
  breatheVariant = 1,
  roomLabel,
}: LightWidgetProps) {
  const isOn = entity.state.state === "on";
  const unavailable = entity.state.state === "unavailable";
  const [pending, setPending] = useState(false);
  const [draftPct, setDraftPct] = useState<number | null>(null);
  const pct = draftPct ?? brightnessPct(entity.state);

  const toggle = async () => {
    if (unavailable) return;
    setPending(true);
    try {
      await hass.callService("light", "toggle", { entity_id: entity.entity_id });
    } finally {
      setPending(false);
    }
  };

  const setBrightness = async (value: number) => {
    setDraftPct(value);
    try {
      await hass.callService("light", "turn_on", {
        entity_id: entity.entity_id,
        brightness_pct: value,
      });
    } finally {
      setTimeout(() => setDraftPct(null), 50);
    }
  };

  const cardClass = [
    "n-card",
    hero && isOn ? "n-card--accent" : "n-card--default",
    isOn ? `breathe-${breatheVariant}` : "",
    pending ? "is-pending" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div class={cardClass} data-hero={hero ? "true" : "false"} data-on={isOn ? "true" : "false"}>
      {isOn && <div class="n-light__glow glow-pulse-1" aria-hidden="true" />}

      <div class="n-card__head">
        <div class="n-icon-bubble">
          <IconLightOn size={20} />
        </div>
        <button
          type="button"
          class="n-toggle"
          role="switch"
          aria-checked={isOn}
          disabled={unavailable || pending}
          onClick={toggle}
        >
          <span class="n-toggle__thumb" />
        </button>
      </div>

      {roomLabel && <div class="n-eyebrow">{roomLabel}</div>}
      <div class={`n-title ${hero ? "n-title--xl" : ""}`}>{entity.friendly_name}</div>

      {isOn && !unavailable && (
        <div class="n-light__intensity">
          <div class="n-row-between">
            <span class="n-eyebrow">Intensité</span>
            <span class={`n-value ${hero ? "n-value--xl" : ""}`}>
              {pct}
              <span class="n-value__unit">%</span>
            </span>
          </div>
          <input
            type="range"
            class="n-slider"
            min={1}
            max={100}
            step={1}
            value={pct}
            onInput={(e) => setBrightness(Number((e.target as HTMLInputElement).value))}
          />
        </div>
      )}

      {!isOn && !unavailable && <div class="n-muted">Éteinte</div>}
      {unavailable && <div class="n-muted">Indisponible</div>}
    </div>
  );
}
