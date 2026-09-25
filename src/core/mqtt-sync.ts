import { useCallback, useEffect, useRef, useState } from "preact/hooks";
import type { HassObject } from "../types";

/* État partagé entre tous les écrans via un message MQTT retenu par le broker :
   chaque client publie sa version, le plus récent `updatedAt` l'emporte. Le
   localStorage sert de cache pour afficher tout de suite au démarrage. */

export interface Stamped {
  updatedAt: string;
}

interface SyncPayload<T> {
  data: T;
  updatedBy: string;
}

export interface RetainedSyncOptions<T extends Stamped> {
  topic: string;
  /** Préfixe des avertissements console. */
  tag: string;
  load: () => T;
  save: (data: T) => void;
  parse: (raw: unknown) => T | null;
}

/** `connected` : l'abonnement MQTT a abouti. Faux tant qu'il n'a pas répondu,
 *  ou si MQTT n'est pas installé — les modifications restent alors locales. */
export function useRetainedSync<T extends Stamped>(
  hass: HassObject | null,
  { topic, tag, load, save, parse }: RetainedSyncOptions<T>,
): [T, (next: T) => void, boolean] {
  const [data, setData] = useState<T>(load);
  const [connected, setConnected] = useState(false);
  const clientIdRef = useRef("nido-" + Math.random().toString(36).slice(2, 8));
  const dataRef = useRef(data);
  dataRef.current = data;
  const hassRef = useRef(hass);
  hassRef.current = hass;

  const publish = useCallback(
    async (next: T) => {
      const h = hassRef.current;
      if (!h?.callService) return;
      try {
        await h.callService("mqtt", "publish", {
          topic,
          payload: JSON.stringify({ data: next, updatedBy: clientIdRef.current } satisfies SyncPayload<T>),
          qos: 0,
          retain: true,
        });
      } catch (err) {
        console.warn(`[${tag}] publish failed`, err);
      }
    },
    [topic, tag],
  );

  const ready = hass != null;
  useEffect(() => {
    if (!ready) return;
    const conn = (hassRef.current as any)?.connection;
    if (!conn || typeof conn.subscribeMessage !== "function") return;
    let unsub: (() => void) | null = null;
    let cancelled = false;

    const handle = (msg: any) => {
      try {
        const raw = msg.payload ? JSON.parse(msg.payload) : null;
        if (!raw || typeof raw !== "object") return;
        const payload = raw as SyncPayload<unknown>;
        if (payload.updatedBy === clientIdRef.current) return;
        const remote = parse(payload.data);
        if (!remote) return;
        const local = dataRef.current;
        if (remote.updatedAt > local.updatedAt) {
          setData(remote);
          save(remote);
        } else if (local.updatedAt > remote.updatedAt) {
          publish(local);
        }
      } catch (err) {
        console.warn(`[${tag}] parse error`, err);
      }
    };

    (async () => {
      try {
        const u = await conn.subscribeMessage(handle, { type: "mqtt/subscribe", topic });
        if (cancelled) {
          try {
            u();
          } catch (_) {}
        } else {
          unsub = u;
          setConnected(true);
        }
      } catch (err) {
        console.warn(`[${tag}] mqtt subscribe failed`, err);
      }
    })();

    return () => {
      cancelled = true;
      if (unsub) {
        try {
          unsub();
        } catch (_) {}
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready, publish, topic]);

  const update = useCallback(
    (next: T) => {
      const stamped = { ...next, updatedAt: new Date().toISOString() };
      setData(stamped);
      save(stamped);
      publish(stamped);
    },
    [publish, save],
  );

  return [data, update, connected];
}
