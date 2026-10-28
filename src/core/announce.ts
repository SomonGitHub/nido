import type { ResolvedEntity } from "./entities";

export interface AnnounceNotification {
  id: string;
  title?: string;
  message?: string;
  type?: string;
}

/* Une alerte qui se déclenche parle toujours, même la nuit ; le reste se tait
   entre 22 h et 7 h pour ne pas réveiller la maison. */
const CRITICAL_CLASSES: Record<string, string> = {
  smoke: "fumée détectée",
  gas: "gaz détecté",
  carbon_monoxide: "monoxyde de carbone détecté",
  moisture: "fuite d'eau",
};

export function isQuietHour(now: Date): boolean {
  const h = now.getHours();
  return h >= 22 || h < 7;
}

export function notificationText(n: AnnounceNotification): string {
  const title = (n.title ?? "").trim();
  const message = (n.message ?? "").trim();
  if (title && message) return `${title}. ${message}`;
  return title || message;
}

/** Nouvelles notifications depuis le dernier passage, dans l'ordre d'arrivée. */
export function newNotifications(known: Set<string>, list: AnnounceNotification[]): AnnounceNotification[] {
  return list.filter((n) => !known.has(n.id));
}

export interface CriticalAlert {
  entityId: string;
  text: string;
}

/** Alertes critiques passées à « on » depuis l'état précédent. Un capteur vu pour
 *  la première fois n'annonce rien : seul un déclenchement compte. */
export function newCriticalAlerts(
  previous: Map<string, boolean>,
  entities: ResolvedEntity[],
  areaName: (areaId: string | null) => string | null,
): CriticalAlert[] {
  const out: CriticalAlert[] = [];
  for (const e of entities) {
    if (e.domain !== "binary_sensor") continue;
    const label = CRITICAL_CLASSES[e.state.attributes.device_class as string];
    if (!label) continue;
    const on = e.state.state === "on";
    const before = previous.get(e.entity_id);
    previous.set(e.entity_id, on);
    if (on && before === false) {
      const room = areaName(e.area_id);
      out.push({ entityId: e.entity_id, text: `Attention : ${label}${room ? ` — ${room}` : ""}.` });
    }
  }
  return out;
}
