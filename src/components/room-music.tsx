import { useState } from "preact/hooks";
import type { HassObject } from "../types";
import {
  canGroup,
  groupLeaderOf,
  hasMedia,
  maPlay,
  maTransfer,
  musicByRoom,
  playingSource,
  type MusicShortcut,
} from "../core/music-assistant";
import { useMusicContext } from "../core/music-context";
import { IconArrowRight, IconMusic, IconPause, IconPlay, IconSkipNext } from "../icons";
import { Artwork, VolumeSlider, pictureUrl, playerName } from "./music-panel";

interface RoomMusicProps {
  hass: HassObject;
  areaId: string;
  /** Fiche du plan : moins de raccourcis, pas de volume des autres enceintes. */
  compact?: boolean;
}

const SHORTCUTS_SHOWN = { compact: 4, full: 8 };

/** Section « Musique » d'une pièce qui a une enceinte Music Assistant exposée. */
export function RoomMusic({ hass, areaId, compact = false }: RoomMusicProps) {
  const music = useMusicContext();
  const [pending, setPending] = useState(false);
  if (!music) return null;
  const { areaNameById } = music;
  const room = musicByRoom(music.players, hass.states).get(areaId);
  if (!room) return null;

  const id = room.entityId;
  const state = hass.states[id];
  const media = hasMedia(state);
  const playing = state.state === "playing";
  const unavailable = state.state === "unavailable";
  const leader = groupLeaderOf(music.players, hass.states, id);
  const source = leader ? null : playingSource(music.players, hass.states, id);
  const sourceArea = source ? music.players.find((p) => p.entity_id === source)?.area_id : null;
  const sourceLabel = (sourceArea && areaNameById.get(sourceArea)) || (source ? playerName(hass, source) : "");
  const leaderArea = leader ? music.players.find((p) => p.entity_id === leader)?.area_id : null;
  const shortcuts = music.shortcuts.items.slice(0, compact ? SHORTCUTS_SHOWN.compact : SHORTCUTS_SHOWN.full);

  const run = async (fn: () => Promise<unknown>) => {
    setPending(true);
    try {
      await fn();
    } catch (err) {
      console.warn("Nido: room music action failed", err);
    } finally {
      setPending(false);
    }
  };
  const call = (service: string) => hass.callService("media_player", service, { entity_id: id });
  const playShortcut = (s: MusicShortcut) => run(() => maPlay(hass, id, s));

  return (
    <section class="nido-room-music" data-compact={compact ? "true" : "false"} data-playing={playing ? "true" : "false"}>
      <header class="nido-room-music__head">
        <span class="nido-room-music__title">
          <IconMusic size={14} />
          Musique
        </span>
        <span class="nido-room-music__speaker">{playerName(hass, id)}</span>
      </header>

      {media ? (
        <div class="nido-room-music__now">
          <Artwork src={pictureUrl(hass, state.attributes.entity_picture as string | undefined)} type="track" size={compact ? 44 : 56} />
          <div class="nido-room-music__meta">
            <div class="nido-room-music__track">{room.title}</div>
            {room.artist && <div class="nido-room-music__artist">{room.artist}</div>}
          </div>
          <button
            type="button"
            class="nido-music-btn nido-music-btn--play nido-room-music__play"
            aria-label={playing ? "Pause" : "Lecture"}
            onClick={() => run(() => call("media_play_pause"))}
          >
            {playing ? <IconPause size={20} /> : <IconPlay size={20} />}
          </button>
          <button type="button" class="nido-music-btn" aria-label="Suivant" onClick={() => run(() => call("media_next_track"))}>
            <IconSkipNext size={20} />
          </button>
        </div>
      ) : (
        <div class="nido-room-music__idle">
          {unavailable ? "Enceinte indisponible" : leader ? null : "Rien en lecture ici"}
        </div>
      )}

      {!unavailable && media && <VolumeSlider hass={hass} state={state} />}

      {leader && (
        <div class="nido-room-music__group">
          Jouée avec {(leaderArea && areaNameById.get(leaderArea)) || playerName(hass, leader)}
          <button
            type="button"
            class="n-pill-btn"
            disabled={pending}
            onClick={() => run(() => hass.callService("media_player", "unjoin", { entity_id: id }))}
          >
            Quitter le groupe
          </button>
        </div>
      )}

      {!unavailable && source && !playing && (
        <div class="nido-room-music__bring">
          <button type="button" class="n-pill-btn" disabled={pending} onClick={() => run(() => maTransfer(hass, source, id))}>
            Faire venir la musique · {sourceLabel}
          </button>
          {canGroup(hass.states[source]) && (
            <button
              type="button"
              class="n-pill-btn"
              disabled={pending}
              onClick={() =>
                run(() => hass.callService("media_player", "join", { entity_id: source, group_members: [id] }))
              }
            >
              Jouer aussi ici
            </button>
          )}
        </div>
      )}

      {!unavailable && shortcuts.length > 0 && (
        <div class="nido-room-music__shortcuts">
          {shortcuts.map((s) => (
            <button key={s.uri} type="button" class="nido-room-music__chip" disabled={pending} onClick={() => playShortcut(s)}>
              <Artwork src={s.image} type={s.media_type} size={28} />
              <span>{s.name}</span>
            </button>
          ))}
        </div>
      )}

      <button type="button" class="nido-room-music__browse" onClick={() => music.open(id)}>
        Tout parcourir <IconArrowRight size={14} />
      </button>
    </section>
  );
}
