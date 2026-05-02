import { useState } from "preact/hooks";
import type { HassObject } from "../types";
import type { Area } from "../core/areas";
import type { ResolvedEntity } from "../core/entities";
import { IconLightOn, IconX } from "../icons";

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
  roomName: string;
}

function LightRow({ hass, entity, roomName }: LightRowProps) {
  const [pending, setPending] = useState(false);
  const pct = brightnessPct(entity);

  const turnOff = async () => {
    setPending(true);
    try {
      await hass.callService("light", "turn_off", { entity_id: entity.entity_id });
    } finally {
      setPending(false);
    }
  };

  return (
    <div class={`nido-lights-row ${pending ? "is-pending" : ""}`}>
      <div class="nido-lights-row__icon">
        <IconLightOn size={18} />
      </div>
      <div class="nido-lights-row__body">
        <div class="nido-lights-row__name">{entity.friendly_name}</div>
        {roomName && <div class="nido-lights-row__room">{roomName}</div>}
      </div>
      <div class="nido-lights-row__pct">{pct}%</div>
      <button
        type="button"
        class="n-toggle"
        role="switch"
        aria-checked={true}
        disabled={pending}
        onClick={turnOff}
      >
        <span class="n-toggle__thumb" />
      </button>
    </div>
  );
}

export function LightsPanel({ hass, lights, areas, onClose }: LightsPanelProps) {
  const [pendingAll, setPendingAll] = useState(false);
  const areaMap = new Map(areas.map((a) => [a.area_id, a.name]));

  const turnOffAll = async () => {
    setPendingAll(true);
    try {
      await Promise.all(
        lights.map((e) =>
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
      <div class="nido-notification-panel__content">
        <header class="nido-notification-panel__header">
          <div class="nido-lights-panel__title">
            <span>Lumières allumées</span>
            <span class="nido-lights-panel__count">{lights.length}</span>
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
            {lights.map((e) => (
              <LightRow
                key={e.entity_id}
                hass={hass}
                entity={e}
                roomName={e.area_id ? (areaMap.get(e.area_id) ?? "") : ""}
              />
            ))}
          </div>
        </div>

        {lights.length > 1 && (
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
