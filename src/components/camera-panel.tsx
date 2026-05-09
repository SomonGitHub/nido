import { useEffect, useRef, useState } from "preact/hooks";
import Hls from "hls.js";
import type { HassObject } from "../types";
import { IconX } from "../icons";

interface CameraPanelProps {
  hass: HassObject;
  entityId: string;
  title: string;
  onClose: () => void;
}

interface StreamResponse {
  url: string;
}

function resolveUrl(hass: HassObject, path: string): string {
  if (path.startsWith("http")) return path;
  const base = (hass as { hassUrl?: (p?: string) => string }).hassUrl?.("") ?? "";
  return base.replace(/\/$/, "") + path;
}

function pickStreamEntity(hass: HassObject, entityId: string): string {
  if (!entityId.endsWith("_snapshot")) return entityId;
  const base = entityId.replace(/_snapshot$/, "");
  const candidates = [`${base}_live_view`, `${base}_live`, `${base}_stream`, base];
  const siblings = Object.keys(hass.states).filter(
    (id) => id.startsWith("camera.") && id.startsWith(base.replace(/^camera\./, "camera.")) && id !== entityId,
  );
  console.log("[Nido] camera siblings for", entityId, ":", siblings);
  for (const c of candidates) {
    if (hass.states[c]) {
      console.log("[Nido] using", c, "for stream");
      return c;
    }
  }
  return entityId;
}

export function CameraPanel({ hass, entityId, title, onClose }: CameraPanelProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    let cancelled = false;
    let hls: Hls | null = null;
    const video = videoRef.current;

    async function start() {
      try {
        const streamEntity = pickStreamEntity(hass, entityId);
        const res = await hass.callWS<StreamResponse>({
          type: "camera/stream",
          entity_id: streamEntity,
        });
        if (cancelled || !video) return;
        const url = resolveUrl(hass, res.url);

        if (video.canPlayType("application/vnd.apple.mpegurl")) {
          video.src = url;
          video.addEventListener("loadedmetadata", () => setLoading(false), { once: true });
          video.addEventListener("error", () => setError("Erreur de lecture"), { once: true });
        } else if (Hls.isSupported()) {
          hls = new Hls({ liveSyncDuration: 1, liveMaxLatencyDuration: 5, lowLatencyMode: true });
          hls.attachMedia(video);
          hls.loadSource(url);
          hls.on(Hls.Events.MANIFEST_PARSED, () => setLoading(false));
          hls.on(Hls.Events.ERROR, (_e, data) => {
            if (data.fatal) setError("Erreur de stream");
          });
        } else {
          setError("Lecteur non supporté");
        }
      } catch (e) {
        if (cancelled) return;
        const err = e as { message?: string; code?: string };
        const msg = err?.message || err?.code || String(e);
        console.error("[Nido] camera/stream failed:", e);
        setError(`Live indisponible : ${msg}`);
      }
    }
    start();

    return () => {
      cancelled = true;
      if (hls) hls.destroy();
      if (video) {
        video.pause();
        video.removeAttribute("src");
        video.load();
      }
    };
  }, [hass, entityId]);

  return (
    <div class="nido-camera-panel" onClick={onClose}>
      <div class="nido-camera-panel__backdrop" />
      <div class="nido-camera-panel__content" onClick={(e) => e.stopPropagation()}>
        <div class="nido-camera-panel__header">
          <h2>{title}</h2>
          <button
            type="button"
            class="nido-camera-panel__close"
            onClick={onClose}
            aria-label="Fermer"
          >
            <IconX size={20} />
          </button>
        </div>
        <div class="nido-camera-panel__body">
          <video
            ref={videoRef}
            class="nido-camera-panel__video"
            autoplay
            playsInline
            muted
            controls
          />
          {loading && !error && (
            <div class="nido-camera-panel__overlay">Chargement du live…</div>
          )}
          {error && <div class="nido-camera-panel__overlay nido-camera-panel__overlay--error">{error}</div>}
        </div>
      </div>
    </div>
  );
}
