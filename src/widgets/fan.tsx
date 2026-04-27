import { useState } from "preact/hooks";
import type { HassObject } from "../types";
import type { ResolvedEntity } from "../core/entities";
import { IconFan } from "../icons";

interface FanWidgetProps {
  hass: HassObject;
  entity: ResolvedEntity;
  roomLabel?: string;
  breatheVariant?: 1 | 2 | 3 | 4;
}

export function FanWidget({ hass, entity, roomLabel, breatheVariant = 2 }: FanWidgetProps) {
  const isOn = entity.state.state === "on";
  const unavailable = entity.state.state === "unavailable";
  const pctAttr = entity.state.attributes.percentage as number | undefined;
  const supportsPct = typeof pctAttr === "number";
  const [pending, setPending] = useState(false);
  const [draftPct, setDraftPct] = useState<number | null>(null);
  const pct = draftPct ?? (supportsPct ? pctAttr : isOn ? 100 : 0);

  const toggle = async () => {
    if (unavailable) return;
    setPending(true);
    try {
      await hass.callService("fan", "toggle", { entity_id: entity.entity_id });
    } finally {
      setPending(false);
    }
  };

  const setPercentage = async (value: number) => {
    setDraftPct(value);
    try {
      await hass.callService("fan", "set_percentage", {
        entity_id: entity.entity_id,
        percentage: value,
      });
    } finally {
      setTimeout(() => setDraftPct(null), 50);
    }
  };

  const cardClass = ["n-card", isOn ? `breathe-${breatheVariant}` : ""].filter(Boolean).join(" ");

  return (
    <div class={cardClass} data-on={isOn ? "true" : "false"}>
      <div class="n-card__head">
        <div class={`n-icon-bubble ${isOn ? "n-fan-spin" : ""}`}>
          <IconFan size={20} />
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
      <div class="n-title">{entity.friendly_name}</div>

      {isOn && supportsPct && !unavailable && (
        <div class="n-light__intensity">
          <div class="n-row-between">
            <span class="n-eyebrow">Vitesse</span>
            <span class="n-value">
              {pct}
              <span class="n-value__unit">%</span>
            </span>
          </div>
          <input
            type="range"
            class="n-slider"
            min={0}
            max={100}
            step={1}
            value={pct}
            onInput={(e) => setPercentage(Number((e.target as HTMLInputElement).value))}
          />
        </div>
      )}

      {!isOn && !unavailable && <div class="n-muted">Arrêté</div>}
      {unavailable && <div class="n-muted">Indisponible</div>}
    </div>
  );
}
