import type { HassEntity, HassObject } from "../types";
import type { EntityRegistryEntry } from "./entities";
import type { Stamped } from "./mqtt-sync";

/* Music Assistant passe par les services HA (music_assistant.*) : pas de
   connexion directe au serveur MA, pas de jeton dans le navigateur. */

export type MaMediaType = "track" | "artist" | "album" | "playlist" | "radio" | "podcast" | "audiobook";

export const MA_MEDIA_TYPES: MaMediaType[] = ["track", "artist", "album", "playlist", "radio", "podcast", "audiobook"];

export const MA_TYPE_LABEL: Record<MaMediaType, string> = {
  track: "Titres",
  artist: "Artistes",
  album: "Albums",
  playlist: "Playlists",
  radio: "Radios",
  podcast: "Podcasts",
  audiobook: "Livres audio",
};

const SEARCH_KEYS: Array<[string, MaMediaType]> = [
  ["tracks", "track"],
  ["artists", "artist"],
  ["albums", "album"],
  ["playlists", "playlist"],
  ["radio", "radio"],
  ["podcasts", "podcast"],
  ["audiobooks", "audiobook"],
];

export interface MaItem {
  uri: string;
  name: string;
  media_type: MaMediaType;
  image: string | null;
  subtitle: string;
}

export interface MaPlayer {
  entity_id: string;
  configEntryId: string | null;
  area_id: string | null;
}

export interface MaQueueEntry {
  name: string;
  subtitle: string;
  image: string | null;
  duration: number | null;
}

export interface MaQueue {
  current: MaQueueEntry | null;
  next: MaQueueEntry | null;
  count: number;
}

export type MaEnqueue = "play" | "next" | "add" | "replace";

const FEATURE_SEEK = 2;
const FEATURE_SHUFFLE = 32768;
const FEATURE_GROUPING = 524288;
const FEATURE_REPEAT = 262144;

function isObj(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

function str(v: unknown): string | null {
  return typeof v === "string" && v.trim() ? v : null;
}

function asMediaType(v: unknown): MaMediaType | null {
  return typeof v === "string" && (MA_MEDIA_TYPES as string[]).includes(v) ? (v as MaMediaType) : null;
}

/** L'imageproxy de MA renvoie l'original avec `size=0` : 256 px suffisent ici. */
export function imageOf(raw: unknown): string | null {
  const url = str(raw) ?? (isObj(raw) ? str(raw.path) ?? str(raw.url) : null);
  if (!url || !/^(https?:)?\//.test(url)) return null;
  return url.includes("/imageproxy/") ? url.replace(/([?&])size=0\b/, "$1size=256") : url;
}

function names(raw: unknown): string[] {
  if (!Array.isArray(raw)) return [];
  return raw.map((a) => (isObj(a) ? str(a.name) : str(a))).filter((n): n is string => !!n);
}

function subtitleOf(raw: Record<string, unknown>, type: MaMediaType | null): string {
  const artists = names(raw.artists).join(", ");
  const album = isObj(raw.album) ? str(raw.album.name) : null;
  if (type === "track") return [artists, album].filter(Boolean).join(" · ");
  if (type === "album") return artists;
  if (type === "playlist") return str(raw.owner) ?? "Playlist";
  if (type === "radio") return "Radio";
  if (type === "podcast") return str(raw.publisher) ?? "Podcast";
  if (type === "audiobook") return names(raw.authors).join(", ") || "Livre audio";
  return artists;
}

export function parseItem(raw: unknown, fallbackType?: MaMediaType): MaItem | null {
  if (!isObj(raw)) return null;
  const uri = str(raw.uri);
  const name = str(raw.name);
  const type = asMediaType(raw.media_type) ?? fallbackType ?? null;
  if (!uri || !name || !type) return null;
  const version = str(raw.version);
  return {
    uri,
    name: version ? `${name} (${version})` : name,
    media_type: type,
    image: imageOf(raw.image) ?? (isObj(raw.album) ? imageOf(raw.album.image) : null),
    subtitle: subtitleOf(raw, type),
  };
}

function itemsOf(raw: unknown, type?: MaMediaType): MaItem[] {
  if (!Array.isArray(raw)) return [];
  const out: MaItem[] = [];
  const seen = new Set<string>();
  for (const r of raw) {
    const item = parseItem(r, type);
    if (item && !seen.has(item.uri)) {
      seen.add(item.uri);
      out.push(item);
    }
  }
  return out;
}

/** `call_service` en WebSocket renvoie `{ context, response }`. */
export function responseOf(res: unknown): unknown {
  return isObj(res) && "response" in res ? res.response : res;
}

export interface MaSearchSection {
  type: MaMediaType;
  items: MaItem[];
}

export function parseSearch(res: unknown): MaSearchSection[] {
  const data = responseOf(res);
  if (!isObj(data)) return [];
  return SEARCH_KEYS.map(([key, type]) => ({ type, items: itemsOf(data[key], type) })).filter(
    (s) => s.items.length > 0,
  );
}

export function parseLibrary(res: unknown, type: MaMediaType): MaItem[] {
  const data = responseOf(res);
  return itemsOf(isObj(data) ? data.items : data, type);
}

function queueEntry(raw: unknown): MaQueueEntry | null {
  if (!isObj(raw)) return null;
  const media = isObj(raw.media_item) ? raw.media_item : null;
  const type = media ? asMediaType(media.media_type) : null;
  const name = (media && str(media.name)) ?? str(raw.name);
  if (!name) return null;
  const duration = typeof raw.duration === "number" && raw.duration > 0 ? raw.duration : null;
  return {
    name,
    subtitle: media ? subtitleOf(media, type) : "",
    image: imageOf(raw.image) ?? (media ? imageOf(media.image) : null),
    duration,
  };
}

/** Réponse de `get_queue` : un objet par entité ciblée. HA ne donne que le
 *  titre en cours et le suivant, pas la liste complète. */
export function parseQueue(res: unknown, entityId: string): MaQueue | null {
  const data = responseOf(res);
  if (!isObj(data)) return null;
  const q = isObj(data[entityId]) ? data[entityId] : Object.values(data).find(isObj);
  if (!isObj(q)) return null;
  return {
    current: queueEntry(q.current_item),
    next: queueEntry(q.next_item),
    count: typeof q.items === "number" ? q.items : Array.isArray(q.items) ? q.items.length : 0,
  };
}

export function musicPlayers(registry: EntityRegistryEntry[], exposed: Set<string>): MaPlayer[] {
  return registry
    .filter(
      (e) =>
        e.platform === "music_assistant" &&
        e.entity_id.startsWith("media_player.") &&
        !e.disabled_by &&
        exposed.has(e.entity_id),
    )
    .map((e) => ({ entity_id: e.entity_id, configEntryId: e.config_entry_id ?? null, area_id: e.area_id }));
}

const ACTIVE_STATES = new Set(["playing", "paused", "buffering"]);

export function hasMedia(state: HassEntity | undefined): boolean {
  return !!state && ACTIVE_STATES.has(state.state) && !!str(state.attributes.media_title);
}

/** Lecteur affiché par défaut : celui qui joue (le dernier lancé), sinon le
 *  choix de l'appareil, sinon un lecteur en pause, sinon le premier. */
export function pickActivePlayer(
  players: MaPlayer[],
  states: Record<string, HassEntity>,
  preferred: string | null,
): string | null {
  if (players.length === 0) return null;
  const playing = players
    .map((p) => states[p.entity_id])
    .filter((s): s is HassEntity => !!s && s.state === "playing")
    .sort((a, b) => b.last_changed.localeCompare(a.last_changed));
  if (playing[0]) return playing[0].entity_id;
  if (preferred && players.some((p) => p.entity_id === preferred)) return preferred;
  const paused = players.find((p) => hasMedia(states[p.entity_id]));
  return (paused ?? players[0]).entity_id;
}

export function playerProgress(state: HassEntity, nowMs: number): { position: number; duration: number } | null {
  const a = state.attributes;
  const duration = typeof a.media_duration === "number" ? a.media_duration : 0;
  if (duration <= 0) return null;
  let position = typeof a.media_position === "number" ? a.media_position : 0;
  const at = typeof a.media_position_updated_at === "string" ? Date.parse(a.media_position_updated_at) : NaN;
  if (state.state === "playing" && Number.isFinite(at)) position += Math.max(0, (nowMs - at) / 1000);
  return { position: Math.min(duration, Math.max(0, position)), duration };
}

export function formatDuration(seconds: number): string {
  const s = Math.max(0, Math.floor(seconds));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = String(s % 60).padStart(2, "0");
  return h > 0 ? `${h}:${String(m).padStart(2, "0")}:${sec}` : `${m}:${sec}`;
}

export type RepeatMode = "off" | "all" | "one";

export function nextRepeat(mode: unknown): RepeatMode {
  return mode === "off" || mode == null ? "all" : mode === "all" ? "one" : "off";
}

function supports(state: HassEntity | undefined, flag: number): boolean {
  const f = state?.attributes.supported_features;
  return typeof f === "number" && (f & flag) !== 0;
}

export const canSeek = (s: HassEntity | undefined) => supports(s, FEATURE_SEEK);
export const canShuffle = (s: HassEntity | undefined) => supports(s, FEATURE_SHUFFLE);
export const canRepeat = (s: HassEntity | undefined) => supports(s, FEATURE_REPEAT);
export const canGroup = (s: HassEntity | undefined) => supports(s, FEATURE_GROUPING);

export function groupMembers(state: HassEntity | undefined): string[] {
  const m = state?.attributes.group_members;
  return Array.isArray(m) ? m.filter((x): x is string => typeof x === "string") : [];
}

async function callWithResponse(
  hass: HassObject,
  service: string,
  data: Record<string, unknown>,
  entityId?: string,
): Promise<unknown> {
  return hass.callWS({
    type: "call_service",
    domain: "music_assistant",
    service,
    service_data: data,
    ...(entityId ? { target: { entity_id: entityId } } : {}),
    return_response: true,
  });
}

export async function maSearch(hass: HassObject, configEntryId: string, query: string): Promise<MaSearchSection[]> {
  return parseSearch(
    await callWithResponse(hass, "search", { config_entry_id: configEntryId, name: query, limit: 8 }),
  );
}

export async function maLibrary(hass: HassObject, configEntryId: string, type: MaMediaType): Promise<MaItem[]> {
  return parseLibrary(
    await callWithResponse(hass, "get_library", {
      config_entry_id: configEntryId,
      media_type: type,
      limit: 60,
      order_by: "name",
    }),
    type,
  );
}

export async function maQueue(hass: HassObject, entityId: string): Promise<MaQueue | null> {
  return parseQueue(await callWithResponse(hass, "get_queue", {}, entityId), entityId);
}

export function maPlay(
  hass: HassObject,
  entityId: string,
  item: Pick<MaItem, "uri" | "media_type">,
  enqueue: MaEnqueue = "play",
  radio = false,
): Promise<unknown> {
  return hass.callService("music_assistant", "play_media", {
    entity_id: entityId,
    media_id: item.uri,
    media_type: item.media_type,
    enqueue,
    ...(radio ? { radio_mode: true } : {}),
  });
}

export function maTransfer(hass: HassObject, from: string, to: string): Promise<unknown> {
  return hass.callService("music_assistant", "transfer_queue", {
    entity_id: to,
    source_player: from,
    auto_play: true,
  });
}

/* Raccourcis : épinglés depuis Parcourir, communs à toute la maison (MQTT). */

export interface MusicShortcut {
  uri: string;
  name: string;
  media_type: MaMediaType;
  image: string | null;
}

export interface MusicShortcuts extends Stamped {
  items: MusicShortcut[];
}

export const MAX_SHORTCUTS = 12;

export function emptyShortcuts(): MusicShortcuts {
  return { items: [], updatedAt: "" };
}

export function parseShortcuts(raw: unknown): MusicShortcuts | null {
  if (!isObj(raw) || !Array.isArray(raw.items)) return null;
  const items: MusicShortcut[] = [];
  for (const r of raw.items) {
    if (!isObj(r)) continue;
    const uri = str(r.uri);
    const name = str(r.name);
    const type = asMediaType(r.media_type);
    if (!uri || !name || !type || items.some((i) => i.uri === uri)) continue;
    items.push({ uri, name, media_type: type, image: imageOf(r.image) });
  }
  return { items: items.slice(0, MAX_SHORTCUTS), updatedAt: typeof raw.updatedAt === "string" ? raw.updatedAt : "" };
}

export function toggleShortcut(current: MusicShortcuts, item: MaItem): MusicShortcuts {
  const exists = current.items.some((i) => i.uri === item.uri);
  const items = exists
    ? current.items.filter((i) => i.uri !== item.uri)
    : [...current.items, { uri: item.uri, name: item.name, media_type: item.media_type, image: item.image }].slice(
        -MAX_SHORTCUTS,
      );
  return { ...current, items };
}

/* Musique par pièce : enceintes MA rangées par area_id, celle qui joue en tête. */

export interface RoomMusic {
  /** Enceinte de la pièce à piloter : celle qui a un média, sinon la première. */
  entityId: string;
  playing: boolean;
  title: string | null;
  artist: string | null;
  /** Autres enceintes MA de la même pièce. */
  others: string[];
}

export function musicByRoom(players: MaPlayer[], states: Record<string, HassEntity>): Map<string, RoomMusic> {
  const byArea = new Map<string, MaPlayer[]>();
  for (const p of players) {
    if (!p.area_id || !states[p.entity_id]) continue;
    byArea.set(p.area_id, [...(byArea.get(p.area_id) ?? []), p]);
  }
  const out = new Map<string, RoomMusic>();
  for (const [area, list] of byArea) {
    const ranked = [...list].sort((a, b) => rank(states[b.entity_id]) - rank(states[a.entity_id]));
    const main = states[ranked[0].entity_id];
    const media = hasMedia(main);
    out.set(area, {
      entityId: main.entity_id,
      playing: main.state === "playing",
      title: media ? (main.attributes.media_title as string) : null,
      artist: media ? str(main.attributes.media_artist) : null,
      others: ranked.slice(1).map((p) => p.entity_id),
    });
  }
  return out;
}

function rank(s: HassEntity | undefined): number {
  if (!s || s.state === "unavailable") return 0;
  if (s.state === "playing") return 3;
  return hasMedia(s) ? 2 : 1;
}

/** Enceinte qui joue, la plus récemment lancée : la source d'un transfert. */
export function playingSource(players: MaPlayer[], states: Record<string, HassEntity>, exclude?: string): string | null {
  const playing = players
    .filter((p) => p.entity_id !== exclude && states[p.entity_id]?.state === "playing")
    .sort((a, b) => states[b.entity_id].last_changed.localeCompare(states[a.entity_id].last_changed));
  return playing[0]?.entity_id ?? null;
}

/** Enceintes jouées ensemble : `group_members` du chef de groupe contient les autres. */
export function groupLeaderOf(players: MaPlayer[], states: Record<string, HassEntity>, entityId: string): string | null {
  for (const p of players) {
    if (p.entity_id === entityId) continue;
    if (groupMembers(states[p.entity_id]).includes(entityId)) return p.entity_id;
  }
  return null;
}
