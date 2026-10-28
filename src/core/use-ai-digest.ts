import { useCallback, useEffect, useRef, useState } from "preact/hooks";
import type { HassObject } from "../types";
import type { ResolvedEntity } from "./entities";
import {
  AI_DIGEST_RETRY_MS,
  aiTaskEntities,
  describeHouse,
  digestInstructions,
  generateDigest,
  isDigestStale,
  parseAiDigest,
  type AiDigest,
} from "./ai-digest";
import { useRetainedSync } from "./mqtt-sync";
import { loadAiDigestCache, saveAiDigestCache } from "./storage";

const OPTIONS = {
  topic: "nido/digest/state",
  tag: "ai-digest",
  load: loadAiDigestCache,
  save: saveAiDigestCache,
  parse: parseAiDigest,
};

const CHECK_EVERY_MS = 60_000;
/* Laisse arriver le résumé retenu par MQTT, et étale les tablettes qui
   s'ouvrent ensemble : une seule génère, les autres reçoivent son texte. */
const JITTER_MS = [4_000, 20_000] as const;

export interface AiDigestState {
  digest: AiDigest;
  loading: boolean;
  error: string | null;
  refresh: () => void;
}

export function useAiDigest(
  hass: HassObject | null,
  entities: ResolvedEntity[],
  areaNameById: Map<string, string>,
  enabled: boolean,
): AiDigestState | null {
  const available = enabled && hass != null && aiTaskEntities(hass.states).length > 0;
  const [digest, update] = useRetainedSync<AiDigest>(available ? hass : null, OPTIONS);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const live = useRef({ hass, entities, areaNameById, digest });
  live.current = { hass, entities, areaNameById, digest };
  const busyRef = useRef(false);
  const retryAtRef = useRef(0);

  const run = useCallback(async () => {
    const { hass: h, entities: es, areaNameById: names } = live.current;
    if (!h || busyRef.current) return;
    busyRef.current = true;
    setLoading(true);
    try {
      const text = await generateDigest(h, digestInstructions(describeHouse({ hass: h, entities: es, areaNameById: names, now: new Date() })));
      const at = new Date().toISOString();
      update({ text, generatedAt: at, updatedAt: at });
      setError(null);
    } catch (err) {
      console.warn("[ai-digest] generation failed", err);
      setError(err instanceof Error ? err.message : "L'IA n'a pas répondu");
      retryAtRef.current = Date.now() + AI_DIGEST_RETRY_MS;
    } finally {
      busyRef.current = false;
      setLoading(false);
    }
  }, [update]);

  useEffect(() => {
    if (!available) return;
    let timer = 0;
    const check = () => {
      if (timer || !isDigestStale(live.current.digest, new Date()) || Date.now() < retryAtRef.current) return;
      const wait = JITTER_MS[0] + Math.random() * (JITTER_MS[1] - JITTER_MS[0]);
      timer = window.setTimeout(() => {
        timer = 0;
        if (isDigestStale(live.current.digest, new Date())) void run();
      }, wait);
    };
    check();
    const interval = window.setInterval(check, CHECK_EVERY_MS);
    return () => {
      window.clearInterval(interval);
      window.clearTimeout(timer);
    };
  }, [available, run]);

  const refresh = useCallback(() => void run(), [run]);
  return available ? { digest, loading, error, refresh } : null;
}
