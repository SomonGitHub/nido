import type { HassObject } from "../types";
import { loadKidsData, saveKidsData, parseKidsData, type KidsData } from "./kids-points";
import { useRetainedSync } from "./mqtt-sync";

const OPTIONS = {
  topic: "nido/kids/state",
  tag: "kids",
  load: loadKidsData,
  save: saveKidsData,
  parse: parseKidsData,
};

export function useKidsSync(hass: HassObject): [KidsData, (next: KidsData) => void] {
  const [data, update] = useRetainedSync<KidsData>(hass, OPTIONS);
  return [data, update];
}
