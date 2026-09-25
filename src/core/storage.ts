const KEYS = {
  favorites: "nido.favorites",
  exposed: "nido.exposed",
  excludedUsers: "nido.excludedUsers",
  roomsOrder: "nido.roomsOrder",
  roomEntitiesOrder: "nido.roomEntitiesOrder",
  onboarded: "nido.onboarded",
  theme: "nido.theme",
  mode: "nido.mode",
  lastNotificationRead: "nido.lastNotificationRead",
  cameraLiveMap: "nido.cameraLiveMap",
  kidsEnabled: "nido.kidsEnabled",
  roomsView: "nido.roomsView",
  planLayers: "nido.planLayers",
  planTime: "nido.planTime",
  youAreHere: "nido.youAreHere",
} as const;

export type ThemeName = "terracotta" | "miel" | "sauge" | "cosy";
export type ThemeMode = "light" | "dark";

export const THEMES: ThemeName[] = ["terracotta", "miel", "sauge", "cosy"];
export const MODES: ThemeMode[] = ["light", "dark"];

function safeStorage(): Storage | null {
  try {
    return typeof localStorage !== "undefined" ? localStorage : null;
  } catch {
    return null;
  }
}

export function loadFavorites(): string[] {
  const s = safeStorage();
  if (!s) return [];
  const raw = s.getItem(KEYS.favorites);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((x): x is string => typeof x === "string") : [];
  } catch {
    return [];
  }
}

export function saveFavorites(ids: string[]): void {
  const s = safeStorage();
  if (!s) return;
  s.setItem(KEYS.favorites, JSON.stringify(ids));
}

function loadStringArray(key: string): string[] {
  const s = safeStorage();
  if (!s) return [];
  const raw = s.getItem(key);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((x): x is string => typeof x === "string") : [];
  } catch {
    return [];
  }
}
function saveStringArray(key: string, ids: string[]): void {
  const s = safeStorage();
  if (!s) return;
  s.setItem(key, JSON.stringify(ids));
}

export const loadExposed = () => loadStringArray(KEYS.exposed);
export const saveExposed = (ids: string[]) => saveStringArray(KEYS.exposed, ids);

export const loadExcludedUsers = () => loadStringArray(KEYS.excludedUsers);
export const saveExcludedUsers = (ids: string[]) => saveStringArray(KEYS.excludedUsers, ids);

export const loadRoomsOrder = () => loadStringArray(KEYS.roomsOrder);
export const saveRoomsOrder = (ids: string[]) => saveStringArray(KEYS.roomsOrder, ids);

export function loadRoomEntitiesOrder(): Record<string, string[]> {
  const s = safeStorage();
  if (!s) return {};
  const raw = s.getItem(KEYS.roomEntitiesOrder);
  if (!raw) return {};
  try {
    const parsed = JSON.parse(raw);
    if (typeof parsed !== "object" || parsed === null) return {};
    const out: Record<string, string[]> = {};
    for (const [k, v] of Object.entries(parsed as Record<string, unknown>)) {
      if (Array.isArray(v)) {
        out[k] = v.filter((x): x is string => typeof x === "string");
      }
    }
    return out;
  } catch {
    return {};
  }
}

export function saveRoomEntitiesOrder(map: Record<string, string[]>): void {
  const s = safeStorage();
  if (!s) return;
  s.setItem(KEYS.roomEntitiesOrder, JSON.stringify(map));
}

export function isOnboarded(): boolean {
  return safeStorage()?.getItem(KEYS.onboarded) === "1";
}

export function setOnboarded(value: boolean): void {
  const s = safeStorage();
  if (!s) return;
  if (value) s.setItem(KEYS.onboarded, "1");
  else s.removeItem(KEYS.onboarded);
}

export function loadTheme(): { theme: ThemeName; mode: ThemeMode } {
  const s = safeStorage();
  const t = s?.getItem(KEYS.theme);
  const m = s?.getItem(KEYS.mode);
  return {
    theme: THEMES.includes(t as ThemeName) ? (t as ThemeName) : "terracotta",
    mode: MODES.includes(m as ThemeMode) ? (m as ThemeMode) : "light",
  };
}

export function saveTheme(theme: ThemeName, mode: ThemeMode): void {
  const s = safeStorage();
  if (!s) return;
  s.setItem(KEYS.theme, theme);
  s.setItem(KEYS.mode, mode);
}

export function loadLastNotificationRead(): string | null {
  return safeStorage()?.getItem(KEYS.lastNotificationRead) ?? null;
}

export function saveLastNotificationRead(isoString: string): void {
  safeStorage()?.setItem(KEYS.lastNotificationRead, isoString);
}

export function loadCameraLiveMap(): Record<string, string> {
  const s = safeStorage();
  if (!s) return {};
  const raw = s.getItem(KEYS.cameraLiveMap);
  if (!raw) return {};
  try {
    const parsed = JSON.parse(raw);
    if (typeof parsed !== "object" || parsed === null) return {};
    const out: Record<string, string> = {};
    for (const [k, v] of Object.entries(parsed as Record<string, unknown>)) {
      if (typeof v === "string") out[k] = v;
    }
    return out;
  } catch {
    return {};
  }
}

export function saveCameraLiveMapping(snapshotEntityId: string, liveEntityId: string): void {
  const s = safeStorage();
  if (!s) return;
  const map = loadCameraLiveMap();
  map[snapshotEntityId] = liveEntityId;
  s.setItem(KEYS.cameraLiveMap, JSON.stringify(map));
}

export function loadKidsEnabled(): boolean {
  const raw = safeStorage()?.getItem(KEYS.kidsEnabled);
  return raw === null || raw === undefined ? true : raw === "1";
}

export function saveKidsEnabled(value: boolean): void {
  safeStorage()?.setItem(KEYS.kidsEnabled, value ? "1" : "0");
}

export type RoomsView = "cards" | "plan";

export function loadRoomsView(): RoomsView | null {
  const raw = safeStorage()?.getItem(KEYS.roomsView);
  return raw === "cards" || raw === "plan" ? raw : null;
}

export function saveRoomsView(view: RoomsView): void {
  safeStorage()?.setItem(KEYS.roomsView, view);
}

export interface PlanLayers {
  temperature: boolean;
  lights: boolean;
  openings: boolean;
  motion: boolean;
  /** Exclusif avec `temperature` : les deux colorent le fond des pièces. */
  energy: boolean;
}

const DEFAULT_PLAN_LAYERS: PlanLayers = {
  temperature: true,
  lights: true,
  openings: true,
  motion: true,
  energy: false,
};

export function loadPlanLayers(): PlanLayers {
  const raw = safeStorage()?.getItem(KEYS.planLayers);
  if (!raw) return DEFAULT_PLAN_LAYERS;
  try {
    const parsed = JSON.parse(raw) as Partial<PlanLayers>;
    return {
      temperature: parsed.temperature !== false,
      lights: parsed.lights !== false,
      openings: parsed.openings !== false,
      motion: parsed.motion !== false,
      energy: parsed.energy === true && parsed.temperature === false,
    };
  } catch {
    return DEFAULT_PLAN_LAYERS;
  }
}

export function savePlanLayers(layers: PlanLayers): void {
  safeStorage()?.setItem(KEYS.planLayers, JSON.stringify(layers));
}

/** Ambiance du plan : `auto` suit le soleil de HA (`sun.sun`). */
export type PlanTime = "auto" | "day" | "night";

export function loadPlanTime(): PlanTime {
  const raw = safeStorage()?.getItem(KEYS.planTime);
  return raw === "day" || raw === "night" ? raw : "auto";
}

export function savePlanTime(value: PlanTime): void {
  safeStorage()?.setItem(KEYS.planTime, value);
}

/** Pastille « Vous êtes ici » : propre à cet appareil (une tablette murale ne
 *  bouge pas, un téléphone si), donc en localStorage et non dans le plan
 *  partagé. `dx`/`dy` en cases depuis le 1er rectangle : elle suit la pièce. */
export interface YouAreHere {
  floor: string;
  area: string;
  dx: number;
  dy: number;
}

export function loadYouAreHere(): YouAreHere | null {
  const raw = safeStorage()?.getItem(KEYS.youAreHere);
  if (!raw) return null;
  try {
    const p = JSON.parse(raw) as Partial<YouAreHere>;
    if (typeof p.floor !== "string" || typeof p.area !== "string") return null;
    if (typeof p.dx !== "number" || typeof p.dy !== "number" || !Number.isFinite(p.dx) || !Number.isFinite(p.dy)) return null;
    return { floor: p.floor, area: p.area, dx: p.dx, dy: p.dy };
  } catch {
    return null;
  }
}

export function saveYouAreHere(value: YouAreHere | null): void {
  const s = safeStorage();
  if (!s) return;
  if (value) s.setItem(KEYS.youAreHere, JSON.stringify(value));
  else s.removeItem(KEYS.youAreHere);
}
