import { useState } from "preact/hooks";
import type { HassObject } from "../types";
import type { Area } from "../core/areas";
import { groupByRoomName, type ResolvedEntity } from "../core/entities";
import { IconLight, IconLightOn, IconX } from "../icons";
import { useOverlay } from "../core/use-overlay";

interface LightsPanelProps {
  hass: HassObject;
  lights: ResolvedEntity[];
  areas: Area[];
  onClose: () => void;
}

function brightnessPct(entity: ResolvedEntity): number {
  const b = entity.state.attributes.brightness as number | undefined;
  if (typeof b !== "number") return 100;
  return Math.round((b / 255) * 100);
}

interface LightRowProps {
  hass: HassObject;
  entity: ResolvedEntity;
}

function LightRow({ hass, entity }: LightRowProps) {
  const [pending, setPending] = useState(false);
  const isOn = entity.state.state === "on";
  const pct = brightnessPct(entity);

  const toggle = async () => {
    setPending(true);
    try {
      await hass.callService("light", "toggle", { entity_id: entity.entity_id });
    } finally {
      setPending(false);
    }
  };

  return (
    <div class={`nido-lights-row ${pending ? "is-pending" : ""}`}>
      <div class="nido-lights-row__icon">
        {isOn ? <IconLightOn size={18} /> : <IconLight size={18} />}
      </div>
      <div class="nido-lights-row__body">
        <div class="nido-lights-row__name">{entity.friendly_name}</div>
      </div>
      {isOn && <div class="nido-lights-row__pct">{pct}%</div>}
      <button
        type="button"
        class="n-toggle"
        role="switch"
        aria-checked={isOn}
        disabled={pending}
        onClick={toggle}
      >
        <span class="n-toggle__thumb" />
      </button>
    </div>
  );
}

export function LightsPanel({ hass, lights, areas, onClose }: LightsPanelProps) {
  const overlayRef = useOverlay<HTMLDivElement>(onClose);
  const [pendingAll, setPendingAll] = useState(false);
  const areaMap = new Map(areas.map((a) => [a.area_id, a.name]));
  const groups = groupByRoomName(lights, areaMap);
  const lightsOn = lights.filter((e) => e.state.state === "on");

  const turnOffAll = async () => {
    setPendingAll(true);
    try {
      await Promise.all(
        lightsOn.map((e) =>
          hass.callService("light", "turn_off", { entity_id: e.entity_id }),
        ),
      );
    } finally {
      setPendingAll(false);
    }
  };

  return (
    <div class="nido-lights-panel">
      <div class="nido-notification-panel__backdrop" onClick={onClose} />
      <div
        ref={overlayRef}
        class="nido-notification-panel__content"
        role="dialog"
        aria-modal="true"
        aria-label="Lumières"
      >
        <header class="nido-notification-panel__header">
          <div class="nido-lights-panel__title">
            <span>Lumières</span>
            <span class="nido-lights-panel__count">{lightsOn.length}</span>
          </div>
          <button
            type="button"
            class="nido-notification-panel__close"
            onClick={onClose}
            aria-label="Fermer"
          >
            <IconX size={20} />
          </button>
        </header>

        <div class="nido-notification-panel__scroll">
          <div class="nido-lights-list">
            {groups.map((g) => (
              <div class="nido-lights-group" key={g.room}>
                <div class="nido-lights-group__title">{g.room}</div>
                {g.items.map((e) => (
                  <LightRow key={e.entity_id} hass={hass} entity={e} />
                ))}
              </div>
            ))}
          </div>
        </div>

        {lightsOn.length > 1 && (
          <div class="nido-lights-panel__footer">
            <button
              type="button"
              class="nido-lights-panel__all-off"
              disabled={pendingAll}
              onClick={turnOffAll}
            >
              Tout éteindre
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
