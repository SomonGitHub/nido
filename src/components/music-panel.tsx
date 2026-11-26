import { useEffect, useRef, useState } from "preact/hooks";
import type { JSX } from "preact";
import type { HassEntity, HassObject } from "../types";
import {
  MA_TYPE_LABEL,
  canGroup,
  canRepeat,
  canSeek,
  canShuffle,
  formatDuration,
  groupMembers,
  hasMedia,
  maLibrary,
  maPlay,
  maQueue,
  maSearch,
  maTransfer,
  nextRepeat,
  playerProgress,
  toggleShortcut,
  type MaEnqueue,
  type MaItem,
  type MaMediaType,
  type MaPlayer,
  type MaQueue,
  type MaSearchSection,
  type MusicShortcut,
} from "../core/music-assistant";
import type { MusicState } from "../core/use-music";
import { useOverlay } from "../core/use-overlay";
import { useRoomLayout } from "../core/use-room-layout";
import {
  IconDisc,
  IconMic,
  IconMusic,
  IconNotebook,
  IconPause,
  IconPin,
  IconPlay,
  IconQueue,
  IconRadio,
  IconRepeat,
  IconRepeatOne,
  IconSearch,
  IconShuffle,
  IconSkipNext,
  IconSkipPrev,
  IconSpeaker,
  IconUser,
  IconVolume,
  IconVolumeOff,
  IconX,
  IconMore,
} from "../icons";

type Tab = "now" | "queue" | "browse" | "speakers";

const TABS: Array<{ id: Tab; label: string }> = [
  { id: "now", label: "Lecture" },
  { id: "queue", label: "Ensuite" },
  { id: "browse", label: "Parcourir" },
  { id: "speakers", label: "Enceintes" },
];

const BROWSE_TYPES: MaMediaType[] = ["playlist", "album", "artist", "radio", "track", "podcast", "audiobook"];

const TYPE_ICON: Record<MaMediaType, (p: { size?: number }) => JSX.Element> = {
  track: IconMusic,
  artist: IconUser,
  album: IconDisc,
  playlist: IconQueue,
  radio: IconRadio,
  podcast: IconMic,
  audiobook: IconNotebook,
};

const STATE_LABEL: Record<string, string> = {
  playing: "En lecture",
  paused: "En pause",
  buffering: "Chargement",
  idle: "Disponible",
  off: "Éteinte",
  standby: "En veille",
  unavailable: "Indisponible",
};

export function playerName(hass: HassObject, entityId: string): string {
  return (hass.states[entityId]?.attributes.friendly_name as string | undefined) ?? entityId;
}

export function pictureUrl(hass: HassObject, src: string | null | undefined): string | null {
  if (!src) return null;
  if (/^https?:/.test(src)) return src;
  const base = (hass as { hassUrl?: (p: string) => string }).hassUrl?.("");
  return base ? base.replace(/\/$/, "") + src : src;
}

/** Les images de MA viennent souvent de http://<ip>:8095 : bloquées sur une page
 *  HTTPS. L'icône du type prend alors la place. */
export function Artwork({ src, type, size }: { src: string | null; type: MaMediaType; size: number }) {
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [src]);
  const Icon = TYPE_ICON[type];
  return (
    <div class="nido-music-art" style={{ width: `${size}px`, height: `${size}px` }} data-round={type === "artist" ? "true" : undefined}>
      {src && !failed ? (
        <img src={src} alt="" loading="lazy" onError={() => setFailed(true)} />
      ) : (
        <Icon size={Math.round(size * 0.42)} />
      )}
    </div>
  );
}

export function useSecondTick(active: boolean): number {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    if (!active) return;
    setNow(Date.now());
    const t = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(t);
  }, [active]);
  return now;
}

function VolumeSlider({ hass, state }: { hass: HassObject; state: HassEntity }) {
  const volume = typeof state.attributes.volume_level === "number" ? state.attributes.volume_level : null;
  const muted = state.attributes.is_volume_muted === true;
  const [draft, setDraft] = useState<number | null>(null);
  if (volume == null) return null;
  const value = draft ?? volume;
  const id = state.entity_id;
  return (
    <div class="nido-music-volume">
      <button
        type="button"
        class="nido-music-btn"
        aria-label={muted ? "Rétablir le son" : "Couper le son"}
        aria-pressed={muted}
        onClick={() => hass.callService("media_player", "volume_mute", { entity_id: id, is_volume_muted: !muted })}
      >
        {muted || value === 0 ? <IconVolumeOff size={18} /> : <IconVolume size={18} />}
      </button>
      <input
        type="range"
        class="n-slider"
        min={0}
        max={1}
        step={0.02}
        value={value}
        aria-label={`Volume ${playerName(hass, id)}`}
        style={{ "--val": `${value * 100}%` } as JSX.CSSProperties}
        onInput={(e) => setDraft(Number((e.target as HTMLInputElement).value))}
        onChange={async (e) => {
          const v = Number((e.target as HTMLInputElement).value);
          setDraft(v);
          try {
            await hass.callService("media_player", "volume_set", { entity_id: id, volume_level: v });
          } finally {
            window.setTimeout(() => setDraft(null), 400);
          }
        }}
      />
      <span class="nido-music-volume__pct">{Math.round(value * 100)}</span>
    </div>
  );
}

function NowPlaying({
  hass,
  entityId,
  roomName,
  onPickSpeaker,
}: {
  hass: HassObject;
  entityId: string;
  roomName: string | null;
  onPickSpeaker: () => void;
}) {
  const state = hass.states[entityId];
  const playing = state?.state === "playing";
  const now = useSecondTick(playing);
  const [seekDraft, setSeekDraft] = useState<number | null>(null);
  if (!state) return null;
  const a = state.attributes;
  const media = hasMedia(state);
  const title = (a.media_title as string | undefined) ?? null;
  const artist = (a.media_artist as string | undefined) ?? null;
  const album = (a.media_album_name as string | undefined) ?? null;
  const progress = media ? playerProgress(state, now) : null;
  const call = (service: string, data: Record<string, unknown> = {}) =>
    hass.callService("media_player", service, { entity_id: entityId, ...data });
  const repeat = a.repeat as string | undefined;
  const unavailable = state.state === "unavailable";

  return (
    <div class="nido-music-now" data-playing={playing ? "true" : "false"}>
      <button type="button" class="nido-music-now__speaker" onClick={onPickSpeaker}>
        <IconSpeaker size={16} />
        <span>
          {playerName(hass, entityId)}
          {roomName && <small> · {roomName}</small>}
        </span>
        <span class="nido-music-now__state">{STATE_LABEL[state.state] ?? state.state}</span>
      </button>

      <div class="nido-music-now__art">
        <Artwork src={media ? pictureUrl(hass, a.entity_picture as string | undefined) : null} type="track" size={280} />
      </div>

      <div class="nido-music-now__meta">
        {media && title ? (
          <>
            <div class="nido-music-now__title">{title}</div>
            <div class="nido-music-now__sub">{[artist, album].filter(Boolean).join(" · ")}</div>
          </>
        ) : (
          <>
            <div class="nido-music-now__title nido-music-now__title--idle">
              {unavailable ? "Enceinte indisponible" : "Rien en lecture"}
            </div>
            <div class="nido-music-now__sub">
              {unavailable ? "Vérifiez qu'elle est allumée et reliée à Music Assistant." : "Choisissez une playlist ou une radio dans Parcourir."}
            </div>
          </>
        )}
      </div>

      {progress && (
        <div class="nido-music-progress">
          <input
            type="range"
            class="n-slider"
            min={0}
            max={progress.duration}
            step={1}
            value={seekDraft ?? progress.position}
            disabled={!canSeek(state)}
            aria-label="Position dans le morceau"
            style={{ "--val": `${((seekDraft ?? progress.position) / progress.duration) * 100}%` } as JSX.CSSProperties}
            onInput={(e) => setSeekDraft(Number((e.target as HTMLInputElement).value))}
            onChange={async (e) => {
              const v = Number((e.target as HTMLInputElement).value);
              try {
                await call("media_seek", { seek_position: v });
              } finally {
                window.setTimeout(() => setSeekDraft(null), 600);
              }
            }}
          />
          <div class="nido-music-progress__times">
            <span>{formatDuration(seekDraft ?? progress.position)}</span>
            <span>{formatDuration(progress.duration)}</span>
          </div>
        </div>
      )}

      <div class="nido-music-controls">
        <button
          type="button"
          class="nido-music-btn"
          aria-label="Lecture aléatoire"
          aria-pressed={a.shuffle === true}
          disabled={unavailable || !canShuffle(state)}
          onClick={() => call("shuffle_set", { shuffle: a.shuffle !== true })}
        >
          <IconShuffle size={20} />
        </button>
        <button type="button" class="nido-music-btn nido-music-btn--lg" aria-label="Précédent" disabled={unavailable || !media} onClick={() => call("media_previous_track")}>
          <IconSkipPrev size={24} />
        </button>
        <button
          type="button"
          class="nido-music-btn nido-music-btn--play"
          aria-label={playing ? "Pause" : "Lecture"}
          disabled={unavailable || !media}
          onClick={() => call("media_play_pause")}
        >
          {playing ? <IconPause size={28} /> : <IconPlay size={28} />}
        </button>
        <button type="button" class="nido-music-btn nido-music-btn--lg" aria-label="Suivant" disabled={unavailable || !media} onClick={() => call("media_next_track")}>
          <IconSkipNext size={24} />
        </button>
        <button
          type="button"
          class="nido-music-btn"
          aria-label={repeat === "one" ? "Répéter le titre" : repeat === "all" ? "Répéter tout" : "Ne pas répéter"}
          aria-pressed={repeat === "all" || repeat === "one"}
          disabled={unavailable || !canRepeat(state)}
          onClick={() => call("repeat_set", { repeat: nextRepeat(repeat) })}
        >
          {repeat === "one" ? <IconRepeatOne size={20} /> : <IconRepeat size={20} />}
        </button>
      </div>

      {!unavailable && <VolumeSlider hass={hass} state={state} />}
    </div>
  );
}

function QueueRow({ label, entry }: { label: string; entry: MaQueue["current"] }) {
  if (!entry) return null;
  return (
    <div class="nido-music-queue__row">
      <div class="nido-music-queue__label">{label}</div>
      <div class="nido-music-item nido-music-item--static">
        <Artwork src={entry.image} type="track" size={56} />
        <div class="nido-music-item__body">
          <div class="nido-music-item__name">{entry.name}</div>
          <div class="nido-music-item__sub">
            {[entry.subtitle, entry.duration ? formatDuration(entry.duration) : null].filter(Boolean).join(" · ")}
          </div>
        </div>
      </div>
    </div>
  );
}

function QueueTab({ hass, entityId }: { hass: HassObject; entityId: string }) {
  const [queue, setQueue] = useState<MaQueue | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const title = hass.states[entityId]?.attributes.media_title as string | undefined;
  const hassRef = useRef(hass);
  hassRef.current = hass;

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    maQueue(hassRef.current, entityId)
      .then((q) => {
        if (cancelled) return;
        setQueue(q);
        setError(false);
      })
      .catch(() => !cancelled && setError(true))
      .finally(() => !cancelled && setLoading(false));
    return () => {
      cancelled = true;
    };
  }, [entityId, title]);

  if (loading && !queue) return <div class="nido-music-empty">Chargement de la file…</div>;
  if (error) return <div class="nido-music-empty">File d'attente indisponible pour cette enceinte.</div>;
  if (!queue || (!queue.current && !queue.next)) {
    return <div class="nido-music-empty">La file d'attente est vide.</div>;
  }
  return (
    <div class="nido-music-queue">
      <QueueRow label="En cours" entry={queue.current} />
      <QueueRow label="Ensuite" entry={queue.next} />
      {queue.count > 0 && (
        <div class="nido-music-queue__count">
          {queue.count} titre{queue.count > 1 ? "s" : ""} dans la file
        </div>
      )}
    </div>
  );
}

const ENQUEUE_ACTIONS: Array<{ enqueue: MaEnqueue; label: string }> = [
  { enqueue: "next", label: "Lire ensuite" },
  { enqueue: "add", label: "Ajouter à la file" },
];

const RADIO_TYPES = new Set<MaMediaType>(["track", "artist", "album", "playlist"]);

function ItemRow({
  item,
  pinned,
  open,
  onToggleMenu,
  onPlay,
  onPin,
}: {
  item: MaItem;
  pinned: boolean;
  open: boolean;
  onToggleMenu: () => void;
  onPlay: (enqueue: MaEnqueue, radio?: boolean) => void;
  onPin: () => void;
}) {
  return (
    <div class="nido-music-item-wrap" data-open={open ? "true" : "false"}>
      <div class="nido-music-item">
        <button type="button" class="nido-music-item__main" onClick={() => onPlay("play")} aria-label={`Lire ${item.name}`}>
          <Artwork src={item.image} type={item.media_type} size={48} />
          <div class="nido-music-item__body">
            <div class="nido-music-item__name">{item.name}</div>
            {item.subtitle && <div class="nido-music-item__sub">{item.subtitle}</div>}
          </div>
          {pinned && (
            <span class="nido-music-item__pin" aria-label="Épinglé">
              <IconPin size={14} />
            </span>
          )}
        </button>
        <button type="button" class="nido-music-btn" aria-label="Plus d'options" aria-expanded={open} onClick={onToggleMenu}>
          <IconMore size={20} />
        </button>
      </div>
      {open && (
        <div class="nido-music-item__menu">
          {ENQUEUE_ACTIONS.map((a) => (
            <button key={a.enqueue} type="button" class="n-pill-btn" onClick={() => onPlay(a.enqueue)}>
              {a.label}
            </button>
          ))}
          {RADIO_TYPES.has(item.media_type) && (
            <button type="button" class="n-pill-btn" onClick={() => onPlay("play", true)}>
              Radio similaire
            </button>
          )}
          <button type="button" class="n-pill-btn" onClick={onPin}>
            {pinned ? "Retirer des raccourcis" : "Épingler"}
          </button>
        </div>
      )}
    </div>
  );
}

function ShortcutTiles({
  items,
  onPlay,
  onRemove,
}: {
  items: MusicShortcut[];
  onPlay: (s: MusicShortcut) => void;
  onRemove: (s: MusicShortcut) => void;
}) {
  return (
    <div class="nido-music-shortcuts">
      {items.map((s) => (
        <div class="nido-music-shortcut" key={s.uri}>
          <button type="button" class="nido-music-shortcut__play" onClick={() => onPlay(s)} aria-label={`Lire ${s.name}`}>
            <Artwork src={s.image} type={s.media_type} size={72} />
            <span class="nido-music-shortcut__name">{s.name}</span>
          </button>
          <button type="button" class="nido-music-shortcut__remove" onClick={() => onRemove(s)} aria-label={`Retirer ${s.name}`}>
            <IconX size={12} />
          </button>
        </div>
      ))}
    </div>
  );
}

const SEARCH_DEBOUNCE_MS = 350;

function BrowseTab({
  hass,
  player,
  music,
  onPlayed,
}: {
  hass: HassObject;
  player: MaPlayer;
  music: MusicState;
  onPlayed: (msg: string) => void;
}) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState<MaMediaType>("playlist");
  const [sections, setSections] = useState<MaSearchSection[] | null>(null);
  const [library, setLibrary] = useState<MaItem[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [openUri, setOpenUri] = useState<string | null>(null);
  const hassRef = useRef(hass);
  hassRef.current = hass;
  const entry = player.configEntryId;
  const q = query.trim();

  useEffect(() => {
    if (!entry) return;
    let cancelled = false;
    setError(null);
    setOpenUri(null);
    if (q.length >= 2) {
      setLoading(true);
      const t = window.setTimeout(() => {
        maSearch(hassRef.current, entry, q)
          .then((s) => !cancelled && setSections(s))
          .catch(() => !cancelled && setError("La recherche a échoué."))
          .finally(() => !cancelled && setLoading(false));
      }, SEARCH_DEBOUNCE_MS);
      return () => {
        cancelled = true;
        window.clearTimeout(t);
      };
    }
    setSections(null);
    setLoading(true);
    maLibrary(hassRef.current, entry, type)
      .then((items) => !cancelled && setLibrary(items))
      .catch(() => !cancelled && setError("Bibliothèque indisponible."))
      .finally(() => !cancelled && setLoading(false));
    return () => {
      cancelled = true;
    };
  }, [entry, q, type]);

  if (!entry) {
    return <div class="nido-music-empty">Instance Music Assistant introuvable pour cette enceinte.</div>;
  }

  const pinnedUris = new Set(music.shortcuts.items.map((s) => s.uri));
  const name = playerName(hass, player.entity_id);

  const play = async (item: Pick<MaItem, "uri" | "media_type" | "name">, enqueue: MaEnqueue = "play", radio = false) => {
    setOpenUri(null);
    try {
      await maPlay(hass, player.entity_id, item, enqueue, radio);
      onPlayed(
        enqueue === "next"
          ? `« ${item.name} » sera lu ensuite`
          : enqueue === "add"
            ? `« ${item.name} » ajouté à la file`
            : `Lecture de « ${item.name} » sur ${name}`,
      );
    } catch (err) {
      onPlayed(`Impossible de lire « ${item.name} »`);
      console.warn("Nido: play_media failed", err);
    }
  };
  const pin = (item: MaItem) => music.setShortcuts(toggleShortcut(music.shortcuts, item));

  const rows = (items: MaItem[]) =>
    items.map((item) => (
      <ItemRow
        key={item.uri}
        item={item}
        pinned={pinnedUris.has(item.uri)}
        open={openUri === item.uri}
        onToggleMenu={() => setOpenUri(openUri === item.uri ? null : item.uri)}
        onPlay={(enqueue, radio) => play(item, enqueue, radio)}
        onPin={() => pin(item)}
      />
    ));

  return (
    <div class="nido-music-browse">
      <label class="nido-music-search">
        <IconSearch size={18} />
        <input
          type="search"
          placeholder="Artiste, album, titre, radio…"
          value={query}
          onInput={(e) => setQuery((e.target as HTMLInputElement).value)}
          aria-label="Rechercher dans Music Assistant"
        />
        {query && (
          <button type="button" class="nido-music-search__clear" onClick={() => setQuery("")} aria-label="Effacer">
            <IconX size={16} />
          </button>
        )}
      </label>

      {q.length < 2 && music.shortcuts.items.length > 0 && (
        <section class="nido-music-section">
          <h3 class="nido-music-section__title">Raccourcis</h3>
          <ShortcutTiles
            items={music.shortcuts.items}
            onPlay={(s) => play(s)}
            onRemove={(s) =>
              music.setShortcuts({ ...music.shortcuts, items: music.shortcuts.items.filter((i) => i.uri !== s.uri) })
            }
          />
        </section>
      )}

      {q.length < 2 && (
        <div class="nido-music-chips" role="tablist" aria-label="Bibliothèque">
          {BROWSE_TYPES.map((t) => (
            <button
              key={t}
              type="button"
              role="tab"
              aria-selected={type === t}
              class="nido-music-chip"
              data-active={type === t ? "true" : "false"}
              onClick={() => setType(t)}
            >
              {MA_TYPE_LABEL[t]}
            </button>
          ))}
        </div>
      )}

      {error && <div class="nido-music-empty">{error}</div>}
      {!error && loading && <div class="nido-music-empty">Chargement…</div>}

      {!error && !loading && q.length >= 2 && sections && (
        sections.length === 0 ? (
          <div class="nido-music-empty">Aucun résultat pour « {q} ».</div>
        ) : (
          sections.map((s) => (
            <section class="nido-music-section" key={s.type}>
              <h3 class="nido-music-section__title">{MA_TYPE_LABEL[s.type]}</h3>
              <div class="nido-music-list">{rows(s.items)}</div>
            </section>
          ))
        )
      )}

      {!error && !loading && q.length < 2 && library && (
        library.length === 0 ? (
          <div class="nido-music-empty">Rien dans la bibliothèque pour « {MA_TYPE_LABEL[type]} ».</div>
        ) : (
          <div class="nido-music-list">{rows(library)}</div>
        )
      )}
    </div>
  );
}

function SpeakersTab({
  hass,
  players,
  activeId,
  areaNameById,
  onSelect,
}: {
  hass: HassObject;
  players: MaPlayer[];
  activeId: string;
  areaNameById: Map<string, string>;
  onSelect: (id: string) => void;
}) {
  const active = hass.states[activeId];
  const members = groupMembers(active);
  const groupable = canGroup(active);
  const source = players.find((p) => hass.states[p.entity_id]?.state === "playing")?.entity_id ?? null;
  const activeName = playerName(hass, activeId);

  const sorted = [...players].sort((a, b) =>
    (areaNameById.get(a.area_id ?? "") ?? "~").localeCompare(areaNameById.get(b.area_id ?? "") ?? "~", "fr"),
  );

  return (
    <div class="nido-music-speakers">
      {sorted.map((p) => {
        const s = hass.states[p.entity_id];
        if (!s) return null;
        const isActive = p.entity_id === activeId;
        const inGroup = members.includes(p.entity_id);
        const room = p.area_id ? areaNameById.get(p.area_id) : null;
        const unavailable = s.state === "unavailable";
        const title = hasMedia(s) ? (s.attributes.media_title as string) : null;
        return (
          <div class="nido-music-speaker" data-active={isActive ? "true" : "false"} key={p.entity_id}>
            <button
              type="button"
              class="nido-music-speaker__head"
              onClick={() => onSelect(p.entity_id)}
              aria-pressed={isActive}
            >
              <span class="nido-music-speaker__radio" aria-hidden="true" />
              <span class="nido-music-speaker__body">
                <span class="nido-music-speaker__name">{playerName(hass, p.entity_id)}</span>
                <span class="nido-music-speaker__sub">
                  {[room, title ?? STATE_LABEL[s.state] ?? s.state].filter(Boolean).join(" · ")}
                </span>
              </span>
              {s.state === "playing" && <span class="nido-music-eq" aria-label="En lecture"><i /><i /><i /></span>}
            </button>
            {!unavailable && <VolumeSlider hass={hass} state={s} />}
            {!unavailable && (
              <div class="nido-music-speaker__actions">
                {source && source !== p.entity_id && s.state !== "playing" && (
                  <button
                    type="button"
                    class="n-pill-btn"
                    onClick={async () => {
                      await maTransfer(hass, source, p.entity_id);
                      onSelect(p.entity_id);
                    }}
                  >
                    Écouter ici
                  </button>
                )}
                {groupable && !isActive && (
                  <button
                    type="button"
                    class="n-pill-btn"
                    aria-pressed={inGroup}
                    data-active={inGroup ? "true" : "false"}
                    onClick={() =>
                      inGroup
                        ? hass.callService("media_player", "unjoin", { entity_id: p.entity_id })
                        : hass.callService("media_player", "join", { entity_id: activeId, group_members: [p.entity_id] })
                    }
                  >
                    {inGroup ? `Retirer du groupe` : `Jouer avec ${activeName}`}
                  </button>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

interface MusicPanelProps {
  hass: HassObject;
  music: MusicState;
  areaNameById: Map<string, string>;
  onClose: () => void;
}

export function MusicPanel({ hass, music, areaNameById, onClose }: MusicPanelProps) {
  const overlayRef = useOverlay<HTMLDivElement>(onClose);
  const phone = useRoomLayout() === "phone";
  const [tab, setTab] = useState<Tab>(() => (phone ? "now" : "browse"));
  const [status, setStatus] = useState<string | null>(null);
  const statusTimer = useRef<number | undefined>(undefined);
  useEffect(() => () => window.clearTimeout(statusTimer.current), []);

  useEffect(() => {
    if (!phone && tab === "now") setTab("browse");
  }, [phone, tab]);

  const activeId = music.activeId;
  const player = music.players.find((p) => p.entity_id === activeId) ?? null;
  const roomName = player?.area_id ? areaNameById.get(player.area_id) ?? null : null;

  const showStatus = (msg: string) => {
    setStatus(msg);
    window.clearTimeout(statusTimer.current);
    statusTimer.current = window.setTimeout(() => setStatus(null), 3500);
  };

  const tabs = phone ? TABS : TABS.filter((t) => t.id !== "now");
  const nav = (
    <nav class="nido-music__tabs" role="tablist" aria-label="Musique">
      {tabs.map((t) => (
        <button
          key={t.id}
          type="button"
          role="tab"
          aria-selected={tab === t.id}
          class="nido-music__tab"
          data-active={tab === t.id ? "true" : "false"}
          onClick={() => setTab(t.id)}
        >
          {t.label}
        </button>
      ))}
    </nav>
  );

  return (
    <div class="nido-music-panel">
      <div class="nido-notification-panel__backdrop" onClick={onClose} />
      <div
        ref={overlayRef}
        class="nido-music"
        data-layout={phone ? "phone" : "wide"}
        role="dialog"
        aria-modal="true"
        aria-label="Musique"
      >
        <header class="nido-music__header">
          <h2>Musique</h2>
          <button type="button" class="nido-notification-panel__close" onClick={onClose} aria-label="Fermer">
            <IconX size={20} />
          </button>
        </header>

        {!player || !activeId ? (
          <div class="nido-music-empty nido-music-empty--full">
            Aucune enceinte Music Assistant exposée. Ouvrez « Personnaliser », étape Vos appareils, et exposez vos
            lecteurs Music Assistant.
          </div>
        ) : (
          <>
            {phone && nav}
            <div class="nido-music__body">
              {(!phone || tab === "now") && (
                <section class="nido-music__now">
                  <NowPlaying hass={hass} entityId={activeId} roomName={roomName} onPickSpeaker={() => setTab("speakers")} />
                </section>
              )}
              {(!phone || tab !== "now") && (
                <section class="nido-music__side">
                  {!phone && nav}
                  <div class="nido-music__scroll">
                    {tab === "queue" && <QueueTab hass={hass} entityId={activeId} />}
                    {tab === "browse" && <BrowseTab hass={hass} player={player} music={music} onPlayed={showStatus} />}
                    {tab === "speakers" && (
                      <SpeakersTab
                        hass={hass}
                        players={music.players}
                        activeId={activeId}
                        areaNameById={areaNameById}
                        onSelect={music.selectPlayer}
                      />
                    )}
                  </div>
                </section>
              )}
            </div>
          </>
        )}
        {status && (
          <div class="nido-music__status" role="status">
            {status}
          </div>
        )}
      </div>
    </div>
  );
}
