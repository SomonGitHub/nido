import { useCallback, useEffect, useRef, useState } from "preact/hooks";
import type { HassObject } from "../types";
import {
  loadKidsData,
  saveKidsData,
  parseKidsData,
  withTimestamp,
  type KidsData,
} from "./kids-points";

const TOPIC = "nido/kids/state";

interface SyncPayload {
  data: KidsData;
  updatedBy: string;
}

export function useKidsSync(hass: HassObject): [KidsData, (next: KidsData) => void] {
  const [data, setData] = useState<KidsData>(() => loadKidsData());
  const clientIdRef = useRef("nido-" + Math.random().toString(36).slice(2, 8));
  const dataRef = useRef(data);
  dataRef.current = data;
  const hassRef = useRef(hass);
  hassRef.current = hass;

  const publish = useCallback(async (next: KidsData) => {
    const h = hassRef.current;
    if (!h?.callService) return;
    try {
      await h.callService("mqtt", "publish", {
        topic: TOPIC,
        payload: JSON.stringify({
          data: next,
          updatedBy: clientIdRef.current,
        } satisfies SyncPayload),
        qos: 0,
        retain: true,
      });
    } catch (err) {
      console.warn("[kids] publish failed", err);
    }
  }, []);

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
        const payload = raw as SyncPayload;
        if (payload.updatedBy === clientIdRef.current) return;
        const remote = parseKidsData(payload.data);
        if (!remote) return;

        const local = dataRef.current;
        if (remote.updatedAt > local.updatedAt) {
          setData(remote);
          saveKidsData(remote);
        } else if (local.updatedAt > remote.updatedAt) {
          publish(local);
        }
      } catch (err) {
        console.warn("[kids] parse error", err);
      }
    };

    (async () => {
      try {
        const u = await conn.subscribeMessage(handle, {
          type: "mqtt/subscribe",
          topic: TOPIC,
        });
        if (cancelled) {
          try {
            u();
          } catch (_) {}
        } else {
          unsub = u;
        }
      } catch (err) {
        console.warn("[kids] mqtt subscribe failed", err);
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
  }, [ready, publish]);

  const update = useCallback(
    (next: KidsData) => {
      const stamped = withTimestamp(next);
      setData(stamped);
      saveKidsData(stamped);
      publish(stamped);
    },
    [publish],
  );

  return [data, update];
}
