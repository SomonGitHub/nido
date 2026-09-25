import type { HassObject } from "../types";

export interface Area {
  area_id: string;
  name: string;
  icon: string | null;
  picture: string | null;
  floor_id?: string | null;
}

export interface Floor {
  floor_id: string;
  name: string;
  level: number | null;
  icon: string | null;
}

export async function fetchAreas(hass: HassObject): Promise<Area[]> {
  const result = await hass.callWS<Area[]>({ type: "config/area_registry/list" });
  return [...result].sort((a, b) => a.name.localeCompare(b.name, "fr"));
}

/* Le registre des étages date de HA 2024.4 : une instance plus ancienne répond
   par une erreur, qu'on traite comme « aucun étage ». */
export async function fetchFloors(hass: HassObject): Promise<Floor[]> {
  try {
    const result = await hass.callWS<Floor[]>({ type: "config/floor_registry/list" });
    return [...result].sort(
      (a, b) => (a.level ?? 0) - (b.level ?? 0) || a.name.localeCompare(b.name, "fr"),
    );
  } catch {
    return [];
  }
}
