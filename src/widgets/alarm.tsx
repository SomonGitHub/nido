import { useState } from "preact/hooks";
import type { HassObject } from "../types";
import type { ResolvedEntity } from "../core/entities";
import { IconShield, IconAlarm, IconAlarmAway, IconAlarmNight } from "../icons";

interface AlarmWidgetProps {
  hass: HassObject;
  entity: ResolvedEntity;
  roomLabel?: string;
}

const STATE_LABEL: Record<string, string> = {
  disarmed: "Désarmée",
  armed_home: "Présence",
  armed_away: "Absence",
  armed_night: "Nuit",
  armed_vacation: "Vacances",
  armed_custom_bypass: "Personnalisé",
  pending: "En attente…",
  arming: "Armement…",
  disarming: "Désarmement…",
  triggered: "Déclenchée",
};

const ARM_MODES = [
  { id: "armed_home" as const, service: "alarm_arm_home" as const, label: "Présence", Icon: IconAlarm },
  { id: "armed_away" as const, service: "alarm_arm_away" as const, label: "Absence", Icon: IconAlarmAway },
  { id: "armed_night" as const, service: "alarm_arm_night" as const, label: "Nuit", Icon: IconAlarmNight },
];

export function AlarmWidget({ hass, entity, roomLabel }: AlarmWidgetProps) {
  const state = entity.state.state;
  const unavailable = state === "unavailable";
  const isTriggered = state === "triggered";
  const isArmed = state.startsWith("armed_");
  const isPending = state === "pending" || state === "arming" || state === "disarming";
  const [pending, setPending] = useState(false);

  const call = async (service: string) => {
    if (unavailable || pending) return;
    setPending(true);
    try {
      await hass.callService("alarm_control_panel", service, { entity_id: entity.entity_id });
    } finally {
      setPending(false);
    }
  };

  return (
    <div
      class="n-card"
      data-on={isArmed ? "true" : "false"}
      data-alert={isTriggered ? "true" : "false"}
    >
      <div class="n-card__head">
        <div class="n-icon-bubble">
          <IconShield size={20} />
        </div>
        <span class="n-eyebrow">{STATE_LABEL[state] ?? state}</span>
      </div>

      {roomLabel && <div class="n-eyebrow">{roomLabel}</div>}
      <div class="n-title">{entity.friendly_name}</div>

      {!unavailable && (
        <div class="n-alarm__modes">
          {ARM_MODES.map(({ id, service, label, Icon }) => (
            <button
              key={id}
              type="button"
              class="n-mode-btn"
              data-active={state === id ? "true" : "false"}
              disabled={pending || isPending}
              onClick={() => call(service)}
            >
              <Icon size={14} />
              <span>{label}</span>
            </button>
          ))}
          <button
            type="button"
            class="n-mode-btn n-mode-btn--disarm"
            disabled={pending || isPending || state === "disarmed"}
            onClick={() => call("alarm_disarm")}
          >
            <span>Désarmer</span>
          </button>
        </div>
      )}
    </div>
  );
}
