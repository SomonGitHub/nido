import type { HassObject as _HassObject } from "../types";
import type { ResolvedEntity } from "../core/entities";
import {
  IconDoor,
  IconSmoke,
  IconWater,
  IconSensor,
  IconWindow,
  IconShield,
} from "../icons";
import type { JSX } from "preact";

interface BinarySensorProps {
  entity: ResolvedEntity;
  roomLabel?: string;
}

type IconCmp = (p: { size?: number }) => JSX.Element;

const ICON_BY_CLASS: Record<string, IconCmp> = {
  door: IconDoor,
  garage_door: IconDoor,
  window: IconWindow,
  smoke: IconSmoke,
  gas: IconSmoke,
  moisture: IconWater,
  motion: IconSensor,
  occupancy: IconSensor,
  presence: IconSensor,
};

const LABEL_BY_CLASS: Record<string, { on: string; off: string }> = {
  door: { on: "Ouverte", off: "Fermée" },
  garage_door: { on: "Ouverte", off: "Fermée" },
  window: { on: "Ouverte", off: "Fermée" },
  smoke: { on: "Fumée détectée", off: "RAS" },
  gas: { on: "Gaz détecté", off: "RAS" },
  moisture: { on: "Eau détectée", off: "Sec" },
  motion: { on: "Mouvement", off: "Calme" },
  occupancy: { on: "Présence", off: "Vide" },
  presence: { on: "Présence", off: "Vide" },
};

const ALERT_CLASSES = new Set(["smoke", "gas", "moisture"]);

export function BinarySensorWidget({ entity, roomLabel }: BinarySensorProps) {
  const deviceClass = (entity.state.attributes.device_class as string | undefined) ?? "";
  const isOn = entity.state.state === "on";
  const unavailable = entity.state.state === "unavailable";
  const Icon = ICON_BY_CLASS[deviceClass] ?? IconShield;
  const labels = LABEL_BY_CLASS[deviceClass] ?? { on: "Actif", off: "Inactif" };
  const isAlert = ALERT_CLASSES.has(deviceClass);
  const status = unavailable ? "indisponible" : isOn ? "on" : "off";

  return (
    <div class="n-card n-card--compact" data-status={status} data-alert={isAlert ? "true" : "false"}>
      <div class="n-card__head">
        <div class="n-icon-bubble">
          <Icon size={18} />
        </div>
        <span class="n-dot" aria-hidden="true" />
      </div>
      {roomLabel && <div class="n-eyebrow">{roomLabel}</div>}
      <div class="n-title n-title--sm">{entity.friendly_name}</div>
      <div class="n-binary-state">
        {unavailable ? "Indisponible" : isOn ? labels.on : labels.off}
      </div>
    </div>
  );
}
