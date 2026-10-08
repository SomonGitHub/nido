import { useState } from "preact/hooks";
import type { HassObject } from "../types";
import type { ResolvedEntity } from "../core/entities";
import { IconVacuum, IconPlay, IconPause, IconHome, IconBattery } from "../icons";

interface VacuumWidgetProps {
  hass: HassObject;
  entity: ResolvedEntity;
  roomLabel?: string;
  breatheVariant?: 1 | 2 | 3 | 4;
}

type VacuumService = "start" | "pause" | "return_to_base";

const STATE_LABEL: Record<string, string> = {
  cleaning: "Nettoyage",
  docked: "À la base",
  returning: "Retour base",
  idle: "Au repos",
  paused: "En pause",
  error: "Erreur",
};

const NO_ERROR = new Set(["", "0", "no_error", "none", "unknown", "unavailable"]);

/* Les capteurs d'un aspirateur (Ecovacs, Roborock…) partagent son préfixe
   d'entity_id : vacuum.deebot_t30 → sensor.deebot_t30_battery. */
function siblingSensor(hass: HassObject, entityId: string, suffix: string) {
  const prefix = entityId.slice(entityId.indexOf(".") + 1);
  const s = hass.states[`sensor.${prefix}_${suffix}`];
  if (!s || s.state === "unavailable" || s.state === "unknown") return undefined;
  return s;
}

function formatMeasure(s: { state: string; attributes: Record<string, unknown> } | undefined) {
  if (!s) return null;
  const n = Number(s.state);
  if (!Number.isFinite(n)) return null;
  const unit = (s.attributes.unit_of_measurement as string | undefined) ?? "";
  return `${Math.round(n * 10) / 10}${unit ? ` ${unit}` : ""}`;
}

function batteryLevel(pct: number) {
  if (pct <= 20) return "low";
  if (pct <= 50) return "mid";
  return "ok";
}

export function VacuumWidget({
  hass,
  entity,
  roomLabel,
  breatheVariant = 3,
}: VacuumWidgetProps) {
  const state = entity.state.state;
  const unavailable = state === "unavailable";
  const isCleaning = state === "cleaning";
  const isReturning = state === "returning";
  const isPaused = state === "paused";
  const isDocked = state === "docked";
  const isError = state === "error";
  const [pending, setPending] = useState(false);

  const batteryAttr = entity.state.attributes.battery_level as number | undefined;
  const batterySensor = Number(siblingSensor(hass, entity.entity_id, "battery")?.state);
  const battery =
    typeof batteryAttr === "number"
      ? batteryAttr
      : Number.isFinite(batterySensor)
        ? batterySensor
        : undefined;

  const area = formatMeasure(siblingSensor(hass, entity.entity_id, "area_cleaned"));
  const duration = formatMeasure(siblingSensor(hass, entity.entity_id, "cleaning_duration"));
  const showSession = (isCleaning || isReturning || isPaused) && (area || duration);

  const errorSensor = siblingSensor(hass, entity.entity_id, "error")?.state;
  const errorAttr = entity.state.attributes.error as string | undefined;
  const errorText = [errorAttr, errorSensor].find((e) => e && !NO_ERROR.has(e.toLowerCase()));

  const call = async (service: VacuumService) => {
    if (unavailable || pending) return;
    setPending(true);
    try {
      await hass.callService("vacuum", service, { entity_id: entity.entity_id });
    } finally {
      setPending(false);
    }
  };

  const cardClass = [
    "n-card",
    "n-vacuum",
    isCleaning || isReturning ? `breathe-${breatheVariant}` : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      class={cardClass}
      data-on={isCleaning || isReturning ? "true" : "false"}
      data-alert={isError ? "true" : "false"}
      data-vacuum={state}
    >
      <div class="n-card__head">
        <div class="n-icon-bubble n-vacuum__bubble">
          <IconVacuum size={20} />
        </div>
        {typeof battery === "number" && (
          <span class="n-battery" data-level={batteryLevel(battery)} data-charging={isDocked ? "true" : "false"}>
            <IconBattery size={14} />
            <span>{Math.round(battery)}%</span>
          </span>
        )}
      </div>

      {roomLabel && <div class="n-eyebrow">{roomLabel}</div>}
      <div class="n-title">{entity.friendly_name}</div>
      <div class="n-binary-state n-vacuum__state">{STATE_LABEL[state] ?? state}</div>

      {typeof battery === "number" && (
        <div class="n-vacuum__bar" data-level={batteryLevel(battery)} aria-hidden="true">
          <span style={{ width: `${Math.max(0, Math.min(100, battery))}%` }} />
        </div>
      )}

      {isError && errorText && <div class="n-vacuum__error">{errorText.replace(/_/g, " ")}</div>}
      {showSession && (
        <div class="n-vacuum__session">
          {area && <span>{area}</span>}
          {duration && <span>{duration}</span>}
        </div>
      )}

      {!unavailable && (
        <div class="n-vacuum__actions">
          {isCleaning ? (
            <button type="button" class="n-pill-btn" disabled={pending} onClick={() => call("pause")}>
              <IconPause size={14} />
              <span>Pause</span>
            </button>
          ) : (
            <button
              type="button"
              class="n-pill-btn"
              disabled={pending || isReturning}
              onClick={() => call("start")}
            >
              <IconPlay size={14} />
              <span>{isPaused ? "Reprendre" : "Lancer"}</span>
            </button>
          )}
          <button
            type="button"
            class="n-pill-btn"
            disabled={pending || isDocked || isReturning}
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
