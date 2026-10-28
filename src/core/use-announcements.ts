import { useEffect, useRef } from "preact/hooks";
import type { HassObject } from "../types";
import type { ResolvedEntity } from "./entities";
import { isQuietHour, newCriticalAlerts, newNotifications, notificationText, type AnnounceNotification } from "./announce";
import { speak } from "./speech";

/* Laisse passer le petit son de notification avant de parler. */
const SPEAK_DELAY_MS = 900;

/** Lit à voix haute, sur cet appareil seulement, les nouvelles notifications Nido
 *  et les alertes critiques qui se déclenchent. Rien n'est lu au chargement :
 *  seul ce qui arrive pendant que Nido est ouvert. */
export function useAnnouncements(
  hass: HassObject | null,
  entities: ResolvedEntity[],
  areaName: (areaId: string | null) => string | null,
  enabled: boolean,
): void {
  const knownRef = useRef<Set<string> | null>(null);
  const alertsRef = useRef(new Map<string, boolean>());
  const notifState = hass?.states["sensor.nido_notifications"];

  useEffect(() => {
    const list = (notifState?.attributes.notifications as AnnounceNotification[] | undefined) ?? [];
    const known = knownRef.current;
    knownRef.current = new Set(list.map((n) => n.id));
    if (!enabled || !known) return;
    if (isQuietHour(new Date())) return;
    const texts = newNotifications(known, list).map(notificationText).filter(Boolean);
    if (texts.length === 0) return;
    window.setTimeout(() => void speak(texts.join(". "), hass?.language, hass), SPEAK_DELAY_MS);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notifState, enabled]);

  useEffect(() => {
    const alerts = newCriticalAlerts(alertsRef.current, entities, areaName);
    if (!enabled || alerts.length === 0) return;
    void speak(alerts.map((a) => a.text).join(" "), hass?.language, hass);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entities, enabled]);
}
