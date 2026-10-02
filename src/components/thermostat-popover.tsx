import { useState } from "preact/hooks";
import type { HassObject } from "../types";
import { IconMinus, IconPlus, IconX } from "../icons";

interface ThermostatPopoverProps {
  hass: HassObject;
  entityId: string;
  title: string;
  open: boolean;
  onClose: () => void;
}

export function ThermostatPopover({ hass, entityId, title, open, onClose }: ThermostatPopoverProps) {
  const attrs = hass.states[entityId]?.attributes ?? {};
  const current = attrs.current_temperature as number | undefined;
  const targetAttr = attrs.temperature as number | undefined;
  const minTemp = (attrs.min_temp as number | undefined) ?? 5;
  const maxTemp = (attrs.max_temp as number | undefined) ?? 35;
  const step = (attrs.target_temp_step as number | undefined) ?? 0.5;

  const [draft, setDraft] = useState<number | null>(null);
  const target = draft ?? targetAttr ?? current ?? 20;

  const setTarget = async (value: number) => {
    const clamped = Math.min(maxTemp, Math.max(minTemp, value));
    setDraft(clamped);
    try {
      await hass.callService("climate", "set_temperature", { entity_id: entityId, temperature: clamped });
    } finally {
      setTimeout(() => setDraft(null), 50);
    }
  };

  return (
    <div class="nido-thermo" role="dialog" aria-label={`Thermostat ${title}`} onClick={(e) => e.stopPropagation()}>
      <button type="button" class="nido-thermo__close" aria-label="Fermer" onClick={onClose}>
        <IconX size={16} />
      </button>
      <div class="nido-plan__eyebrow">{title}</div>
      <div class="nido-thermo__row">
        <button
          type="button"
          class="n-stepper nido-thermo__step"
          aria-label="Diminuer"
          disabled={target - step < minTemp}
          onClick={() => setTarget(target - step)}
        >
          <IconMinus size={18} />
        </button>
        <div class="nido-thermo__value">
          {(Math.round(target * 10) / 10).toLocaleString("fr-FR")}
          <small>°C</small>
        </div>
        <button
          type="button"
          class="n-stepper nido-thermo__step"
          aria-label="Augmenter"
          disabled={target + step > maxTemp}
          onClick={() => setTarget(target + step)}
        >
          <IconPlus size={18} />
        </button>
      </div>
      <div class="nido-thermo__meta">
        <span class="nido-thermo__valve" data-open={open ? "true" : "false"}>
          {open ? "Ouverte" : "Fermée"}
        </span>
        {typeof current === "number" && (
          <span>Actuelle {(Math.round(current * 10) / 10).toLocaleString("fr-FR")}°C</span>
        )}
      </div>
    </div>
  );
}
