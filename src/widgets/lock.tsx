import { useState } from "preact/hooks";
import type { HassObject } from "../types";
import type { ResolvedEntity } from "../core/entities";
import { IconLock, IconLockOpen } from "../icons";

interface LockWidgetProps {
  hass: HassObject;
  entity: ResolvedEntity;
  roomLabel?: string;
}

export function LockWidget({ hass, entity, roomLabel }: LockWidgetProps) {
  const state = entity.state.state;
  const unavailable = state === "unavailable";
  const isLocked = state === "locked";
  const isJammed = state === "jammed";
  const transient = state === "locking" || state === "unlocking";
  const [pending, setPending] = useState(false);

  const toggle = async () => {
    if (unavailable || transient || pending) return;
    setPending(true);
    try {
      await hass.callService("lock", isLocked ? "unlock" : "lock", {
        entity_id: entity.entity_id,
      });
    } finally {
      setPending(false);
    }
  };

  const status = unavailable
    ? "Indisponible"
    : isJammed
    ? "Bloquée"
    : transient
    ? state === "locking"
      ? "Verrouillage…"
      : "Déverrouillage…"
    : isLocked
    ? "Verrouillée"
    : "Déverrouillée";

  const Icon = isLocked ? IconLock : IconLockOpen;

  return (
    <div
      class="n-card"
      data-on={isLocked ? "true" : "false"}
      data-alert={isJammed ? "true" : "false"}
    >
      <div class="n-card__head">
        <div class="n-icon-bubble">
          <Icon size={20} />
        </div>
        <button
          type="button"
          class="n-toggle"
          role="switch"
          aria-checked={isLocked}
          disabled={unavailable || transient || pending}
          onClick={toggle}
        >
          <span class="n-toggle__thumb" />
        </button>
      </div>

      {roomLabel && <div class="n-eyebrow">{roomLabel}</div>}
      <div class="n-title">{entity.friendly_name}</div>
      <div class="n-binary-state">{status}</div>
    </div>
  );
}
