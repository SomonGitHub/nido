import type { HassObject } from "../types";
import { hasMedia, playerProgress } from "../core/music-assistant";
import { IconPause, IconPlay, IconSkipNext } from "../icons";
import { Artwork, pictureUrl, playerName, useSecondTick } from "./music-panel";

interface MiniPlayerProps {
  hass: HassObject;
  entityId: string;
  roomName: string | null;
  onOpen: () => void;
}

/** Barre fine en bas de l'écran, seulement quand un lecteur a quelque chose à jouer. */
export function MiniPlayer({ hass, entityId, roomName, onOpen }: MiniPlayerProps) {
  const state = hass.states[entityId];
  const now = useSecondTick(state?.state === "playing");
  if (!hasMedia(state)) return null;
  const a = state.attributes;
  const playing = state.state === "playing";
  const progress = playerProgress(state, now);
  const pct = progress ? (progress.position / progress.duration) * 100 : 0;
  const call = (service: string) => hass.callService("media_player", service, { entity_id: entityId });

  return (
    <div class="nido-miniplayer" data-playing={playing ? "true" : "false"}>
      <button type="button" class="nido-miniplayer__open" onClick={onOpen} aria-label="Ouvrir la musique">
        <Artwork src={pictureUrl(hass, a.entity_picture as string | undefined)} type="track" size={44} />
        <span class="nido-miniplayer__body">
          <span class="nido-miniplayer__title">{a.media_title as string}</span>
          <span class="nido-miniplayer__sub">
            {[a.media_artist as string | undefined, roomName ?? playerName(hass, entityId)].filter(Boolean).join(" · ")}
          </span>
        </span>
      </button>
      <button
        type="button"
        class="nido-music-btn nido-music-btn--play nido-miniplayer__play"
        aria-label={playing ? "Pause" : "Lecture"}
        onClick={() => call("media_play_pause")}
      >
        {playing ? <IconPause size={20} /> : <IconPlay size={20} />}
      </button>
      <button type="button" class="nido-music-btn" aria-label="Suivant" onClick={() => call("media_next_track")}>
        <IconSkipNext size={20} />
      </button>
      {progress && (
        <span class="nido-miniplayer__bar" aria-hidden="true">
          <span style={{ width: `${pct}%` }} />
        </span>
      )}
    </div>
  );
}
