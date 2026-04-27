const KEYS = {
  favorites: "nido.favorites",
  exposed: "nido.exposed",
  excludedUsers: "nido.excludedUsers",
  roomsOrder: "nido.roomsOrder",
  roomEntitiesOrder: "nido.roomEntitiesOrder",
  onboarded: "nido.onboarded",
  theme: "nido.theme",
  mode: "nido.mode",
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
