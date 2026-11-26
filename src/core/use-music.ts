import { useCallback, useMemo, useState } from "preact/hooks";
import type { HassObject } from "../types";
import type { EntityRegistryEntry } from "./entities";
import { musicPlayers, parseShortcuts, pickActivePlayer, type MaPlayer, type MusicShortcuts } from "./music-assistant";
import { useRetainedSync } from "./mqtt-sync";
import { loadMusicPlayer, loadMusicShortcuts, saveMusicPlayer, saveMusicShortcuts } from "./storage";

const SHORTCUTS_SYNC = {
  topic: "nido/music/state",
  tag: "music",
  load: loadMusicShortcuts,
  save: saveMusicShortcuts,
  parse: parseShortcuts,
};

export interface MusicState {
  players: MaPlayer[];
  activeId: string | null;
  selectPlayer: (entityId: string) => void;
  shortcuts: MusicShortcuts;
  setShortcuts: (next: MusicShortcuts) => void;
}

/** Lecteurs Music Assistant **exposés** dans Nido, lecteur actif et raccourcis partagés. */
export function useMusic(
  hass: HassObject | null,
  registry: EntityRegistryEntry[] | null,
  exposed: Set<string>,
): MusicState {
  const players = useMemo(() => (registry ? musicPlayers(registry, exposed) : []), [registry, exposed]);
  const [preferred, setPreferred] = useState<string | null>(() => loadMusicPlayer());
  /* Un choix fait dans le panneau l'emporte sur « celui qui joue » tant que Nido reste ouvert. */
  const [pinned, setPinned] = useState<string | null>(null);
  const [shortcuts, setShortcuts] = useRetainedSync<MusicShortcuts>(hass, SHORTCUTS_SYNC);

  const states = hass?.states ?? {};
  const pinnedValid = pinned && players.some((p) => p.entity_id === pinned) ? pinned : null;
  const activeId = pinnedValid ?? pickActivePlayer(players, states, preferred);

  const selectPlayer = useCallback((entityId: string) => {
    setPinned(entityId);
    setPreferred(entityId);
    saveMusicPlayer(entityId);
  }, []);

  return { players, activeId, selectPlayer, shortcuts, setShortcuts };
}
