import { useState } from "preact/hooks";
import type { HassObject } from "../types";
import type { ResolvedEntity } from "../core/entities";
import { IconCamera } from "../icons";

interface CameraWidgetProps {
  hass: HassObject;
  entity: ResolvedEntity;
  roomLabel?: string;
}

const STATE_LABEL: Record<string, string> = {
  recording: "Enregistre",
  streaming: "En direct",
  idle: "En veille",
  unavailable: "Indisponible",
};

function pickPictureUrl(entity: ResolvedEntity, hass: HassObject): string | null {
  const ent = entity.state.attributes.entity_picture as string | undefined;
  if (!ent) return null;
  if (ent.startsWith("http")) return ent;
  const base = (hass as { hassUrl?: (path?: string) => string }).hassUrl?.("");
  if (base) return base.replace(/\/$/, "") + ent;
  return ent;
}

export function CameraWidget({ hass, entity, roomLabel }: CameraWidgetProps) {
  const state = entity.state.state;
  const unavailable = state === "unavailable";
  const isLive = state === "recording" || state === "streaming";
  const [bust, setBust] = useState(0);
  const baseUrl = pickPictureUrl(entity, hass);
  const url = baseUrl ? `${baseUrl}${baseUrl.includes("?") ? "&" : "?"}t=${bust}` : null;

  return (
    <div class="n-card n-card--camera" data-on={isLive ? "true" : "false"}>
      <div class="n-camera__frame">
        {url ? (
          <img class="n-camera__img" src={url} alt={entity.friendly_name} loading="lazy" />
        ) : (
          <div class="n-camera__placeholder" aria-hidden="true">
            <IconCamera size={28} />
          </div>
        )}
        {isLive && <span class="n-camera__live">●&nbsp;LIVE</span>}
      </div>

      <div class="n-card__head n-card__head--inline">
        <div class="n-icon-bubble">
          <IconCamera size={18} />
        </div>
        <button
          type="button"
          class="n-pill-btn"
          disabled={unavailable || !url}
          onClick={() => setBust(Date.now())}
        >
          Rafraîchir
        </button>
      </div>

      {roomLabel && <div class="n-eyebrow">{roomLabel}</div>}
      <div class="n-title n-title--sm">{entity.friendly_name}</div>
      <div class="n-binary-state">{STATE_LABEL[state] ?? state}</div>
    </div>
  );
}
