import type { HassObject } from "../types";

export interface Area {
  area_id: string;
  name: string;
  icon: string | null;
  picture: string | null;
}

export async function fetchAreas(hass: HassObject): Promise<Area[]> {
  const result = await hass.callWS<Area[]>({ type: "config/area_registry/list" });
  return [...result].sort((a, b) => a.name.localeCompare(b.name, "fr"));
}
