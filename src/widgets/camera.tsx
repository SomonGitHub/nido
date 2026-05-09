import { useState, useEffect } from "preact/hooks";
import type { HassObject } from "../types";
import type { ResolvedEntity } from "../core/entities";
import { IconCamera } from "../icons";
import { CameraPanel } from "../components/camera-panel";

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

function hassBase(hass: HassObject): string {
  const base = (hass as { hassUrl?: (path?: string) => string }).hassUrl?.("") ?? "";
  return base.replace(/\/$/, "");
}

function pickSnapshotUrl(entity: ResolvedEntity, hass: HassObject): string | null {
  const token = entity.state.attributes.access_token as string | undefined;
  if (token) {
    return `${hassBase(hass)}/api/camera_proxy/${entity.entity_id}?token=${token}`;
  }
  const ent = entity.state.attributes.entity_picture as string | undefined;
  if (!ent) return null;
  if (ent.startsWith("http")) return ent;
  return `${hassBase(hass)}${ent}`;
}

const REFRESH_MS = 10_000;

export function CameraWidget({ hass, entity, roomLabel }: CameraWidgetProps) {
  const state = entity.state.state;
  const unavailable = state === "unavailable";
  const isLive = state === "recording" || state === "streaming";
  const [bust, setBust] = useState(() => Date.now());
  const [imgError, setImgError] = useState(false);
  const [showLive, setShowLive] = useState(false);

  const baseUrl = pickSnapshotUrl(entity, hass);
  const url = baseUrl ? `${baseUrl}${baseUrl.includes("?") ? "&" : "?"}_=${bust}` : null;

  useEffect(() => {
    setImgError(false);
  }, [baseUrl, bust]);

  useEffect(() => {
    if (unavailable || !baseUrl) return;
    const id = window.setInterval(() => setBust(Date.now()), REFRESH_MS);
    return () => window.clearInterval(id);
  }, [unavailable, baseUrl]);

  return (
    <div class="n-card n-card--camera" data-on={isLive ? "true" : "false"}>
      <button
        type="button"
        class="n-camera__frame n-camera__frame--btn"
        data-no-drag
        disabled={unavailable}
        onClick={() => !unavailable && setShowLive(true)}
        aria-label={`Voir le live de ${entity.friendly_name}`}
      >
        {url && !imgError ? (
          <img
            class="n-camera__img"
            src={url}
            alt={entity.friendly_name}
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div class="n-camera__placeholder" aria-hidden="true" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <IconCamera size={28} />
            {imgError && <span style={{ fontSize: '10px', marginTop: '4px', opacity: 0.7 }}>Erreur de flux</span>}
          </div>
        )}
        {isLive && <span class="n-camera__live">●&nbsp;LIVE</span>}
        {!unavailable && <span class="n-camera__play" aria-hidden="true">▶</span>}
      </button>

      <div class="n-card__head n-card__head--inline">
        <div class="n-icon-bubble">
          <IconCamera size={18} />
        </div>
        <button
          type="button"
          class="n-pill-btn"
          disabled={unavailable || !url}
          onClick={() => { setBust(Date.now()); setImgError(false); }}
        >
          Rafraîchir
        </button>
      </div>

      {roomLabel && <div class="n-eyebrow">{roomLabel}</div>}
      <div class="n-title n-title--sm">{entity.friendly_name}</div>
      <div class="n-binary-state">{STATE_LABEL[state] ?? state}</div>

      {showLive && (
        <CameraPanel
          hass={hass}
          entityId={entity.entity_id}
          title={entity.friendly_name}
          onClose={() => setShowLive(false)}
        />
      )}
    </div>
  );
}
