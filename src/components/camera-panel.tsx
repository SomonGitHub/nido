import { useEffect, useMemo, useRef, useState } from "preact/hooks";
import Hls from "hls.js";
import type { HassObject } from "../types";
import { IconX } from "../icons";
import { loadCameraLiveMap, saveCameraLiveMapping } from "../core/storage";

interface CameraPanelProps {
  hass: HassObject;
  entityId: string;
  title: string;
  onClose: () => void;
}

interface StreamResponse {
  url: string;
}

interface RegistryEntry {
  entity_id: string;
  device_id: string | null;
  disabled_by: string | null;
}

function resolveUrl(hass: HassObject, path: string): string {
  if (path.startsWith("http")) return path;
  const base = (hass as { hassUrl?: (p?: string) => string }).hassUrl?.("") ?? "";
  return base.replace(/\/$/, "") + path;
}

async function autoPickStreamEntity(hass: HassObject, entityId: string): Promise<string | null> {
  try {
    const registry = await hass.callWS<RegistryEntry[]>({
      type: "config/entity_registry/list",
    });
    const me = registry.find((e) => e && e.entity_id === entityId);
    if (!me?.device_id) return null;
    const siblings = registry.filter(
      (e) =>
        e &&
        typeof e.entity_id === "string" &&
        e.device_id === me.device_id &&
        e.entity_id.startsWith("camera.") &&
        e.entity_id !== entityId &&
        !e.disabled_by &&
        hass.states[e.entity_id],
    );
    const live =
      siblings.find((e) => e.entity_id.includes("live_view")) ||
      siblings.find((e) => e.entity_id.includes("live")) ||
      siblings.find((e) => e.entity_id.includes("stream")) ||
      siblings[0];
    return live?.entity_id ?? null;
  } catch (e) {
    console.warn("[Nido] entity_registry lookup failed:", e);
    return null;
  }
}

export function CameraPanel({ hass, entityId, title, onClose }: CameraPanelProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [streamEntity, setStreamEntity] = useState<string | null>(null);
  const [needsPicker, setNeedsPicker] = useState(false);
  const [pickerSelection, setPickerSelection] = useState<string>("");

  const cameraOptions = useMemo(() => {
    return Object.keys(hass.states)
      .filter((id) => id.startsWith("camera.") && id !== entityId)
      .sort();
  }, [hass.states, entityId]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    let cancelled = false;

    async function resolve() {
      const saved = loadCameraLiveMap()[entityId];
      if (saved && hass.states[saved]) {
        if (!cancelled) setStreamEntity(saved);
        return;
      }
      const auto = await autoPickStreamEntity(hass, entityId);
      if (cancelled) return;
      if (auto) {
        setStreamEntity(auto);
      } else {
        setStreamEntity(entityId);
      }
    }
    resolve();
    return () => {
      cancelled = true;
    };
  }, [hass, entityId]);

  useEffect(() => {
    if (!streamEntity) return;
    let cancelled = false;
    let hls: Hls | null = null;
    const video = videoRef.current;
    setError(null);
    setLoading(true);
    setNeedsPicker(false);

    async function start() {
      try {
        const res = await hass.callWS<StreamResponse>({
          type: "camera/stream",
          entity_id: streamEntity!,
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
        setNeedsPicker(true);
        setLoading(false);
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
  }, [hass, streamEntity]);

  function handlePickerSubmit() {
    if (!pickerSelection) return;
    saveCameraLiveMapping(entityId, pickerSelection);
    setStreamEntity(pickerSelection);
  }

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
          {error && !needsPicker && (
            <div class="nido-camera-panel__overlay nido-camera-panel__overlay--error">{error}</div>
          )}
        </div>
        {needsPicker && (
          <div class="nido-camera-panel__picker">
            <p class="nido-camera-panel__picker-msg">{error}</p>
            <p class="nido-camera-panel__picker-hint">
              Sélectionne l'entité caméra à utiliser pour le live de cette card :
            </p>
            <div class="nido-camera-panel__picker-row">
              <select
                class="nido-camera-panel__picker-select"
                value={pickerSelection}
                onChange={(e) => setPickerSelection((e.target as HTMLSelectElement).value)}
              >
                <option value="">— Choisir une entité —</option>
                {cameraOptions.map((id) => (
                  <option value={id}>
                    {hass.states[id]?.attributes?.friendly_name ?? id} ({id})
                  </option>
                ))}
              </select>
              <button
                type="button"
                class="nido-camera-panel__picker-save"
                disabled={!pickerSelection}
                onClick={handlePickerSubmit}
              >
                Sauvegarder & lancer
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
