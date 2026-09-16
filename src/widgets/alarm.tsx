import { useEffect, useState } from "preact/hooks";
import type { HassObject } from "../types";
import type { ResolvedEntity } from "../core/entities";
import { IconShield, IconAlarm, IconAlarmAway, IconAlarmNight } from "../icons";
import { AlarmCodeDialog, type AlarmCodeFormat } from "../components/alarm-code-dialog";

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

/** Délai laissé à HA pour passer à `disarmed` avant de considérer le code refusé.
 *  Certaines intégrations ignorent silencieusement un mauvais code au lieu de lever une erreur. */
const DISARM_TIMEOUT_MS = 6000;

function errorDetail(err: unknown): string | null {
  const m = (err as { message?: unknown } | null)?.message;
  return typeof m === "string" && m.trim() ? m.trim() : null;
}

export function AlarmWidget({ hass, entity, roomLabel }: AlarmWidgetProps) {
  const state = entity.state.state;
  const unavailable = state === "unavailable";
  const isTriggered = state === "triggered";
  const isArmed = state.startsWith("armed_");
  const isPending = state === "pending" || state === "arming" || state === "disarming";
  const [pending, setPending] = useState(false);

  // `code_format` vaut "number" / "text" quand l'alarme réclame un code, null sinon.
  const rawFormat = entity.state.attributes.code_format;
  const codeFormat: AlarmCodeFormat | null =
    rawFormat === "number" || rawFormat === "text" ? rawFormat : null;

  const [askCode, setAskCode] = useState(false);
  const [codeError, setCodeError] = useState<string | null>(null);
  const [verifying, setVerifying] = useState(false);

  const call = async (service: string) => {
    if (unavailable || pending) return;
    setPending(true);
    try {
      await hass.callService("alarm_control_panel", service, { entity_id: entity.entity_id });
    } finally {
      setPending(false);
    }
  };

  const onDisarm = () => {
    if (unavailable || pending || isPending || state === "disarmed") return;
    if (codeFormat) {
      setCodeError(null);
      setAskCode(true);
      return;
    }
    call("alarm_disarm");
  };

  const submitCode = async (code: string) => {
    setCodeError(null);
    setVerifying(true);
    try {
      await hass.callService("alarm_control_panel", "alarm_disarm", {
        entity_id: entity.entity_id,
        code,
      });
    } catch (err) {
      setVerifying(false);
      const detail = errorDetail(err);
      setCodeError(detail ? `Code refusé — ${detail}` : "Code incorrect.");
    }
  };

  // Le service ne renvoie pas toujours d'erreur : on confirme via l'état réel de l'entité.
  useEffect(() => {
    if (!verifying) return;
    if (state === "disarmed" || state === "disarming") {
      setVerifying(false);
      setCodeError(null);
      setAskCode(false);
      return;
    }
    const t = window.setTimeout(() => {
      setVerifying(false);
      setCodeError("Code incorrect.");
    }, DISARM_TIMEOUT_MS);
    return () => window.clearTimeout(t);
  }, [verifying, state]);

  const closeDialog = () => {
    setAskCode(false);
    setVerifying(false);
    setCodeError(null);
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
            onClick={onDisarm}
          >
            <span>Désarmer</span>
          </button>
        </div>
      )}

      {askCode && codeFormat && (
        <AlarmCodeDialog
          title={entity.friendly_name}
          format={codeFormat}
          pending={verifying}
          error={codeError}
          onSubmit={submitCode}
          onClose={closeDialog}
        />
      )}
    </div>
  );
}
