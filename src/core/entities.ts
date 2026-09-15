import type { HassEntity, HassObject } from "../types";

export interface EntityRegistryEntry {
  entity_id: string;
  device_id: string | null;
  area_id: string | null;
  name: string | null;
  original_name: string | null;
  platform: string;
  disabled_by: string | null;
  hidden_by: string | null;
}

export interface DeviceRegistryEntry {
  id: string;
  area_id: string | null;
  name: string | null;
  name_by_user: string | null;
}

export type Domain =
  | "light"
  | "switch"
  | "climate"
  | "cover"
  | "sensor"
  | "binary_sensor"
  | "media_player"
  | "lock"
  | "alarm_control_panel"
  | "camera"
  | "vacuum";

export const SUPPORTED_DOMAINS: readonly Domain[] = [
  "light",
  "climate",
  "cover",
  "media_player",
  "lock",
  "alarm_control_panel",
  "camera",
  "vacuum",
  "switch",
  "sensor",
  "binary_sensor",
] as const;

export interface ResolvedEntity {
  entity_id: string;
  domain: Domain | string;
  area_id: string | null;
  friendly_name: string;
  state: HassEntity;
}

export async function fetchEntityRegistry(
  hass: HassObject,
): Promise<EntityRegistryEntry[]> {
  return hass.callWS<EntityRegistryEntry[]>({
    type: "config/entity_registry/list",
  });
}

export async function fetchDeviceRegistry(
  hass: HassObject,
): Promise<DeviceRegistryEntry[]> {
  return hass.callWS<DeviceRegistryEntry[]>({
    type: "config/device_registry/list",
  });
}

export function domainOf(entityId: string): string {
  return entityId.split(".")[0] ?? "";
}

export function resolveEntities(
  hass: HassObject,
  registry: EntityRegistryEntry[],
  devices: DeviceRegistryEntry[],
): ResolvedEntity[] {
  const deviceArea = new Map(devices.map((d) => [d.id, d.area_id] as const));
  const registryById = new Map(registry.map((e) => [e.entity_id, e] as const));

  const result: ResolvedEntity[] = [];
  for (const [entity_id, state] of Object.entries(hass.states)) {
    const reg = registryById.get(entity_id);
    if (reg?.disabled_by || reg?.hidden_by) continue;

    const area_id = reg?.area_id ?? (reg?.device_id ? deviceArea.get(reg.device_id) ?? null : null);
    const friendly_name =
      reg?.name ?? state.attributes.friendly_name ?? reg?.original_name ?? entity_id;

    result.push({
      entity_id,
      domain: domainOf(entity_id),
      area_id,
      friendly_name,
      state,
    });
  }
  return result;
}

export function groupByArea(
  entities: ResolvedEntity[],
): Map<string | null, ResolvedEntity[]> {
  const map = new Map<string | null, ResolvedEntity[]>();
  for (const e of entities) {
    const list = map.get(e.area_id) ?? [];
    list.push(e);
    map.set(e.area_id, list);
  }
  return map;
}

export function isEntityActive(e: ResolvedEntity): boolean {
  const s = e.state.state;
  if (s === "unavailable" || s === "unknown") return false;
  switch (e.domain) {
    case "light":
    case "switch":
    case "fan":
    case "binary_sensor":
      return s === "on";
    case "media_player":
      return s === "playing";
    case "climate":
      return s !== "off";
    case "cover": {
      const pos = e.state.attributes.current_position;
      if (typeof pos === "number") return pos > 0;
      return s === "open" || s === "opening" || s === "closing";
    }
    case "lock":
      return s === "unlocked";
    case "vacuum":
      return s === "cleaning" || s === "returning";
    case "alarm_control_panel":
      return s.startsWith("armed") || s === "triggered";
    case "camera":
      return s === "recording" || s === "streaming";
    default:
      return false;
  }
}

export interface RoomStat {
  value: string;
  unit: string;
}
export interface RoomStats {
  temperature?: RoomStat;
  humidity?: RoomStat;
  illuminance?: RoomStat;
}

export type RoomAlertKind = "window" | "door" | "moisture" | "smoke" | "gas";

export interface RoomAlert {
  kind: RoomAlertKind;
  label: string;
}

export interface RoomSummary {
  lightsOn: number;
  coversOpen: number;
  mediaPlaying: boolean;
  alerts: RoomAlert[];
  lightIds: string[];
  coverIds: string[];
}

const ALERT_CLASSES: Record<string, RoomAlert> = {
  window: { kind: "window", label: "Fenêtre ouverte" },
  door: { kind: "door", label: "Porte ouverte" },
  garage_door: { kind: "door", label: "Garage ouvert" },
  moisture: { kind: "moisture", label: "Fuite d'eau" },
  smoke: { kind: "smoke", label: "Fumée détectée" },
  gas: { kind: "gas", label: "Gaz détecté" },
  carbon_monoxide: { kind: "gas", label: "CO détecté" },
};

export function summarizeRoom(entities: ResolvedEntity[]): RoomSummary {
  const summary: RoomSummary = {
    lightsOn: 0,
    coversOpen: 0,
    mediaPlaying: false,
    alerts: [],
    lightIds: [],
    coverIds: [],
  };
  const seenAlerts = new Set<string>();

  for (const e of entities) {
    const active = isEntityActive(e);
    switch (e.domain) {
      case "light":
        summary.lightIds.push(e.entity_id);
        if (active) summary.lightsOn++;
        break;
      case "cover":
        summary.coverIds.push(e.entity_id);
        if (active) summary.coversOpen++;
        break;
      case "media_player":
        if (active) summary.mediaPlaying = true;
        break;
      case "binary_sensor": {
        if (!active) break;
        const dc = e.state.attributes.device_class as string | undefined;
        const alert = dc ? ALERT_CLASSES[dc] : undefined;
        if (alert && !seenAlerts.has(alert.label)) {
          seenAlerts.add(alert.label);
          summary.alerts.push(alert);
        }
        break;
      }
    }
  }

  return summary;
}

const NO_ROOM_LABEL = "Autres";

function roomNameOf(e: ResolvedEntity, areaMap: Map<string, string>): string {
  return e.area_id ? (areaMap.get(e.area_id) ?? NO_ROOM_LABEL) : NO_ROOM_LABEL;
}

export function sortByRoomThenName(
  entities: ResolvedEntity[],
  areaMap: Map<string, string>,
): ResolvedEntity[] {
  return [...entities].sort((a, b) => {
    const roomA = roomNameOf(a, areaMap);
    const roomB = roomNameOf(b, areaMap);
    if (roomA === NO_ROOM_LABEL && roomB !== NO_ROOM_LABEL) return 1;
    if (roomB === NO_ROOM_LABEL && roomA !== NO_ROOM_LABEL) return -1;
    const roomDiff = roomA.localeCompare(roomB);
    return roomDiff !== 0 ? roomDiff : a.friendly_name.localeCompare(b.friendly_name);
  });
}

export interface EntityRoomGroup {
  room: string;
  items: ResolvedEntity[];
}

/** Clusters consecutive entities sharing a room; expects a list already
 *  sorted with sortByRoomThenName so same-room entities are adjacent. */
export function groupByRoomName(
  entities: ResolvedEntity[],
  areaMap: Map<string, string>,
): EntityRoomGroup[] {
  const groups: EntityRoomGroup[] = [];
  for (const e of entities) {
    const room = roomNameOf(e, areaMap);
    const last = groups[groups.length - 1];
    if (last && last.room === room) {
      last.items.push(e);
    } else {
      groups.push({ room, items: [e] });
    }
  }
  return groups;
}

export function extractRoomStats(entities: ResolvedEntity[]): RoomStats {
  const stats: RoomStats = {};
  for (const e of entities) {
    if (e.domain !== "sensor") continue;
    const dc = e.state.attributes.device_class as string | undefined;
    const unit = (e.state.attributes.unit_of_measurement as string | undefined) ?? "";
    const value = e.state.state;
    if (value === "unavailable" || value === "unknown") continue;
    if (dc === "temperature" && !stats.temperature) {
      stats.temperature = { value, unit };
    } else if (dc === "humidity" && !stats.humidity) {
      stats.humidity = { value, unit };
    } else if (dc === "illuminance" && !stats.illuminance) {
      stats.illuminance = { value, unit };
    }
  }
  return stats;
}
