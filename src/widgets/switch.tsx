import { useState } from "preact/hooks";
import type { HassObject } from "../types";
import type { ResolvedEntity } from "../core/entities";
import { IconPlug } from "../icons";

interface SwitchWidgetProps {
  hass: HassObject;
  entity: ResolvedEntity;
  roomLabel?: string;
  breatheVariant?: 1 | 2 | 3 | 4;
}

export function SwitchWidget({
  hass,
  entity,
  roomLabel,
  breatheVariant = 2,
}: SwitchWidgetProps) {
  const isOn = entity.state.state === "on";
  const unavailable = entity.state.state === "unavailable";
  const [pending, setPending] = useState(false);
  const power = entity.state.attributes.current_power_w as number | undefined;

  const toggle = async () => {
    if (unavailable) return;
    setPending(true);
    try {
      await hass.callService("switch", "toggle", { entity_id: entity.entity_id });
    } finally {
      setPending(false);
    }
  };

  const cardClass = ["n-card", isOn ? `breathe-${breatheVariant}` : ""].filter(Boolean).join(" ");

  return (
    <div class={cardClass} data-on={isOn ? "true" : "false"}>
      <div class="n-card__head">
        <div class="n-icon-bubble">
          <IconPlug size={18} />
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

      {typeof power === "number" && (
        <div class="n-power">
          <span class={isOn ? "n-power__value" : "n-power__value n-power__value--muted"}>
            {Math.round(isOn ? power : 0)}
          </span>
          <span class="n-power__unit">W</span>
        </div>
      )}
      {unavailable && <div class="n-muted">Indisponible</div>}
    </div>
  );
}
