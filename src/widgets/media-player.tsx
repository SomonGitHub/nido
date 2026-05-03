import { useState } from "preact/hooks";
import type { HassObject } from "../types";
import type { ResolvedEntity } from "../core/entities";
import {
  IconMusic,
  IconPlay,
  IconPause,
  IconSkipPrev,
  IconSkipNext,
  IconVolume,
} from "../icons";

interface MediaPlayerWidgetProps {
  hass: HassObject;
  entity: ResolvedEntity;
  roomLabel?: string;
  hero?: boolean;
  breatheVariant?: 1 | 2 | 3 | 4;
}

const STATE_LABEL: Record<string, string> = {
  playing: "En lecture",
  paused: "En pause",
  idle: "Au repos",
  off: "Éteint",
  on: "Allumé",
  standby: "Veille",
  buffering: "Mise en mémoire",
};

export function MediaPlayerWidget({
  hass,
  entity,
  roomLabel,
  hero = false,
  breatheVariant = 4,
}: MediaPlayerWidgetProps) {
  const state = entity.state.state;
  const unavailable = state === "unavailable";
  const isPlaying = state === "playing";
  const isOff = state === "off" || state === "standby";
  const title = entity.state.attributes.media_title as string | undefined;
  const artist = entity.state.attributes.media_artist as string | undefined;
  const appName = entity.state.attributes.app_name as string | undefined;
  const volume = entity.state.attributes.volume_level as number | undefined;
  const picture = entity.state.attributes.entity_picture as string | undefined;

  const [draftVolume, setDraftVolume] = useState<number | null>(null);
  const currentVolume = draftVolume ?? volume ?? 0;

  const call = async (service: string, data: Record<string, unknown> = {}) => {
    if (unavailable) return;
    await hass.callService("media_player", service, {
      entity_id: entity.entity_id,
      ...data,
    });
  };

  const setVolume = async (value: number) => {
    setDraftVolume(value);
    try {
      await call("volume_set", { volume_level: value });
    } finally {
      setTimeout(() => setDraftVolume(null), 50);
    }
  };

  const accentClass = hero ? (isPlaying ? "n-card--accent" : "n-card--accent-muted") : "";
  const cardClass = ["n-card", accentClass, isPlaying ? `breathe-${breatheVariant}` : ""].filter(Boolean).join(" ");

  return (
    <div class={cardClass} data-hero={hero ? "true" : "false"} data-on={isPlaying ? "true" : "false"}>
      {picture && (
        <div class="n-media__bg" aria-hidden="true">
          <img src={picture} alt="" />
          <div class="n-media__bg-overlay" />
        </div>
      )}
      {isPlaying && hero && <div class="n-light__glow glow-pulse-1" aria-hidden="true" />}
      <div class="n-card__head">
        <div class="n-icon-bubble">
          <IconMusic size={20} />
        </div>
        <span class="n-eyebrow">{STATE_LABEL[state] ?? state}</span>
      </div>

      {roomLabel && <div class="n-eyebrow">{roomLabel}</div>}
      <div class={hero ? "n-title n-title--xl" : "n-title"}>{entity.friendly_name}</div>

      {!isOff && !unavailable && (title || artist || appName) && (
        <div class="n-media__track">
          {title && <div class="n-media__title">{title}</div>}
          {artist && <div class="n-muted" style={hero ? { fontSize: '1rem' } : {}}>{artist}</div>}
          {appName && <div class="n-muted" style={{ fontSize: '0.75rem', marginTop: (title || artist) ? '4px' : '0' }}>{appName}</div>}
        </div>
      )}

      {!unavailable && (
        <>
          <div class="n-media__controls">
            <button
              type="button"
              class="n-icon-btn"
              aria-label="Précédent"
              onClick={() => call("media_previous_track")}
            >
              <IconSkipPrev size={hero ? 20 : 16} />
            </button>
            <button
              type="button"
              class="n-icon-btn n-icon-btn--primary"
              aria-label={isPlaying ? "Pause" : "Lecture"}
              onClick={() => call("media_play_pause")}
            >
              {isPlaying ? <IconPause size={hero ? 24 : 18} /> : <IconPlay size={hero ? 24 : 18} />}
            </button>
            <button
              type="button"
              class="n-icon-btn"
              aria-label="Suivant"
              onClick={() => call("media_next_track")}
            >
              <IconSkipNext size={hero ? 20 : 16} />
            </button>
          </div>

          {typeof volume === "number" && (
            <div class="n-media__volume">
              <IconVolume size={14} />
              <input
                type="range"
                class="n-slider"
                min={0}
                max={1}
                step={0.05}
                value={currentVolume}
                style={{ '--val': `${currentVolume * 100}%` } as any}
                onInput={(e) => setVolume(Number((e.target as HTMLInputElement).value))}
              />
            </div>
          )}
        </>
      )}
      {unavailable && <div class="n-muted">Indisponible</div>}
    </div>
  );
}
