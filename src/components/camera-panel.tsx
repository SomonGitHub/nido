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
        const res = await hass.callWS<StreamResponse>({
          type: "camera/stream",
          entity_id: entityId,
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
        if (!cancelled) setError("Impossible de démarrer le live");
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
