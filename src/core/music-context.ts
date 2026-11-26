import { createContext } from "preact";
import { useContext } from "preact/hooks";
import type { MusicState } from "./use-music";

export interface MusicContextValue extends MusicState {
  /** Ouvre le panneau Musique, sur cette enceinte si elle est donnée. */
  open: (entityId?: string) => void;
  areaNameById: Map<string, string>;
}

/* Le plan, les cartes pièce et la page pièce lisent la musique sans la faire
   passer par toutes les vues. `null` : pas d'enceinte Music Assistant. */
export const MusicContext = createContext<MusicContextValue | null>(null);

export function useMusicContext(): MusicContextValue | null {
  return useContext(MusicContext);
}
