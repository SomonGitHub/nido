export interface HassEntity {
  entity_id: string;
  state: string;
  attributes: Record<string, unknown> & { friendly_name?: string };
  last_changed: string;
  last_updated: string;
}

export interface HassUser {
  id: string;
  name: string;
  is_owner: boolean;
  is_admin: boolean;
}

export interface HassObject {
  states: Record<string, HassEntity>;
  user?: HassUser;
  language: string;
  themes?: { darkMode: boolean };
  callService: (
    domain: string,
    service: string,
    serviceData?: Record<string, unknown>,
  ) => Promise<unknown>;
  callWS: <T = unknown>(msg: { type: string; [k: string]: unknown }) => Promise<T>;
  connection: {
    subscribeEvents: (cb: (e: unknown) => void, eventType: string) => Promise<() => void>;
  };
}

export interface PanelInfo {
  config?: Record<string, unknown>;
  title?: string;
}

export interface NidoPanelProps {
  hass: HassObject;
  narrow: boolean;
  route: { prefix: string; path: string };
  panel: PanelInfo;
}
