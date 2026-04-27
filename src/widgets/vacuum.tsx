import { useState } from "preact/hooks";
import type { HassObject } from "../types";
import type { ResolvedEntity } from "../core/entities";
import { IconVacuum, IconPlay, IconHome, IconBattery } from "../icons";

interface VacuumWidgetProps {
  hass: HassObject;
  entity: ResolvedEntity;
  roomLabel?: string;
  breatheVariant?: 1 | 2 | 3 | 4;
}

const STATE_LABEL: Record<string, string> = {
  cleaning: "Nettoyage",
  docked: "À la base",
  returning: "Retour base",
  idle: "Au repos",
  paused: "En pause",
  error: "Erreur",
};

export function VacuumWidget({
  hass,
  entity,
  roomLabel,
  breatheVariant = 3,
}: VacuumWidgetProps) {
  const state = entity.state.state;
  const unavailable = state === "unavailable";
  const isCleaning = state === "cleaning" || state === "returning";
  const isError = state === "error";
  const battery = entity.state.attributes.battery_level as number | undefined;
  const [pending, setPending] = useState(false);

  const call = async (service: "start" | "return_to_base") => {
    if (unavailable || pending) return;
    setPending(true);
    try {
      await hass.callService("vacuum", service, { entity_id: entity.entity_id });
    } finally {
      setPending(false);
    }
  };

  const cardClass = ["n-card", isCleaning ? `breathe-${breatheVariant}` : ""].filter(Boolean).join(" ");

  return (
    <div
      class={cardClass}
      data-on={isCleaning ? "true" : "false"}
      data-alert={isError ? "true" : "false"}
    >
      <div class="n-card__head">
        <div class="n-icon-bubble">
          <IconVacuum size={20} />
        </div>
        {typeof battery === "number" && (
          <span class="n-battery">
            <IconBattery size={14} />
            <span>{Math.round(battery)}%</span>
          </span>
        )}
      </div>

      {roomLabel && <div class="n-eyebrow">{roomLabel}</div>}
      <div class="n-title">{entity.friendly_name}</div>
      <div class="n-binary-state">{STATE_LABEL[state] ?? state}</div>

      {!unavailable && (
        <div class="n-vacuum__actions">
          <button
            type="button"
            class="n-pill-btn"
            disabled={pending || isCleaning}
            onClick={() => call("start")}
          >
            <IconPlay size={14} />
            <span>Lancer</span>
          </button>
          <button
            type="button"
            class="n-pill-btn"
            disabled={pending || state === "docked"}
            onClick={() => call("return_to_base")}
          >
            <IconHome size={14} />
            <span>Base</span>
          </button>
        </div>
      )}
    </div>
  );
}
