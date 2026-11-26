import { useEffect, useRef, useState } from "preact/hooks";
import type { HassObject } from "../types";
import { hasMedia, maLibrary, maPlay, type MaItem, type MusicShortcut } from "../core/music-assistant";
import { useMusicContext } from "../core/music-context";
import { IconPause, IconPlay, IconSkipNext, IconSkipPrev } from "../icons";
import { Artwork, VolumeSlider, pictureUrl, playerName } from "../components/music-panel";

const TILES = 8;

/** Page Musique d'Echo Show : pas de recherche (pas de clavier commode), de
 *  grosses tuiles. Raccourcis épinglés, sinon les playlists de la bibliothèque. */
export function CompactMusic({ hass }: { hass: HassObject }) {
  const music = useMusicContext();
  const [playlists, setPlaylists] = useState<MaItem[] | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const timer = useRef<number | undefined>(undefined);
  const hassRef = useRef(hass);
  hassRef.current = hass;
  const activeId = music?.activeId ?? null;
  const player = music?.players.find((p) => p.entity_id === activeId) ?? null;
  const needLibrary = !!music && music.shortcuts.items.length === 0 && !!player?.configEntryId;

  useEffect(() => {
    if (!needLibrary || !player?.configEntryId) return;
    let cancelled = false;
    maLibrary(hassRef.current, player.configEntryId, "playlist")
      .then((items) => !cancelled && setPlaylists(items.slice(0, TILES)))
      .catch(() => !cancelled && setPlaylists([]));
    return () => {
      cancelled = true;
    };
  }, [needLibrary, player?.configEntryId]);
  useEffect(() => () => window.clearTimeout(timer.current), []);

  if (!music || !activeId || !player) return null;
  const state = hass.states[activeId];
  if (!state) return null;
  const a = state.attributes;
  const media = hasMedia(state);
  const playing = state.state === "playing";
  const call = (service: string) => hass.callService("media_player", service, { entity_id: activeId });
  const tiles: MusicShortcut[] = music.shortcuts.items.length > 0 ? music.shortcuts.items.slice(0, TILES) : playlists ?? [];

  const play = async (item: MusicShortcut) => {
    try {
      await maPlay(hass, activeId, item);
      setStatus(`Lecture de « ${item.name} »`);
    } catch {
      setStatus(`Impossible de lire « ${item.name} »`);
    }
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setStatus(null), 3000);
  };

  return (
    <div class="nido-compact-music">
      <section class="nido-compact-music__now">
        <Artwork src={media ? pictureUrl(hass, a.entity_picture as string | undefined) : null} type="track" size={200} />
        <div class="nido-compact-music__meta">
          <div class="nido-compact-music__title">{media ? (a.media_title as string) : "Rien en lecture"}</div>
          <div class="nido-compact-music__artist">
            {media ? (a.media_artist as string | undefined) ?? "" : "Touchez une tuile pour lancer la musique"}
          </div>
        </div>
        <div class="nido-compact-music__controls">
          <button type="button" class="nido-music-btn nido-music-btn--lg" aria-label="Précédent" disabled={!media} onClick={() => call("media_previous_track")}>
            <IconSkipPrev size={26} />
          </button>
          <button
            type="button"
            class="nido-music-btn nido-music-btn--play"
            aria-label={playing ? "Pause" : "Lecture"}
            disabled={!media}
            onClick={() => call("media_play_pause")}
          >
            {playing ? <IconPause size={30} /> : <IconPlay size={30} />}
          </button>
          <button type="button" class="nido-music-btn nido-music-btn--lg" aria-label="Suivant" disabled={!media} onClick={() => call("media_next_track")}>
            <IconSkipNext size={26} />
          </button>
        </div>
        {state.state !== "unavailable" && <VolumeSlider hass={hass} state={state} />}
      </section>

      <section class="nido-compact-music__side">
        {music.players.length > 1 && (
          <div class="nido-compact-music__speakers" role="radiogroup" aria-label="Enceinte">
            {music.players.map((p) => {
              const s = hass.states[p.entity_id];
              const room = p.area_id ? music.areaNameById.get(p.area_id) : null;
              return (
                <button
                  key={p.entity_id}
                  type="button"
                  role="radio"
                  aria-checked={p.entity_id === activeId}
                  class="nido-compact-music__speaker"
                  data-active={p.entity_id === activeId ? "true" : "false"}
                  disabled={!s || s.state === "unavailable"}
                  onClick={() => music.selectPlayer(p.entity_id)}
                >
                  {s?.state === "playing" && (
                    <span class="nido-music-eq" aria-hidden="true">
                      <i />
                      <i />
                      <i />
                    </span>
                  )}
                  {room ?? playerName(hass, p.entity_id)}
                </button>
              );
            })}
          </div>
        )}
        <div class="nido-compact-music__label">
          {music.shortcuts.items.length > 0 ? "Raccourcis" : "Vos playlists"}
        </div>
        {tiles.length > 0 ? (
          <div class="nido-compact-music__tiles">
            {tiles.map((t) => (
              <button key={t.uri} type="button" class="nido-compact-music__tile" onClick={() => play(t)}>
                <Artwork src={t.image} type={t.media_type} size={84} />
                <span>{t.name}</span>
              </button>
            ))}
          </div>
        ) : (
          <div class="nido-compact-music__empty">
            {playlists === null && needLibrary
              ? "Chargement…"
              : "Épinglez des playlists ou des radios depuis le panneau Musique d'une tablette : elles apparaîtront ici."}
          </div>
        )}
        {status && (
          <div class="nido-compact-music__status" role="status">
            {status}
          </div>
        )}
      </section>
    </div>
  );
}
