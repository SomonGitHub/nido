import { useEffect, useState } from "preact/hooks";
import type { HassObject } from "../types";

interface StatisticsPoint {
  start: number | string;
  mean?: number | null;
}

export interface HistoryPoint {
  t: number;
  v: number;
}

const HOUR = 3_600_000;
const CACHE_TTL = 10 * 60_000;
const cache = new Map<string, { at: number; points: HistoryPoint[] }>();

function pointTime(p: StatisticsPoint): number | null {
  if (typeof p.start === "number") return p.start;
  const t = Date.parse(p.start);
  return Number.isFinite(t) ? t : null;
}

async function fetchHourly(hass: HassObject, entityId: string): Promise<HistoryPoint[]> {
  const hit = cache.get(entityId);
  if (hit && Date.now() - hit.at < CACHE_TTL) return hit.points;

  const start = new Date(Date.now() - 24 * HOUR);
  start.setMinutes(0, 0, 0);
  const res = await hass.callWS<Record<string, StatisticsPoint[]>>({
    type: "recorder/statistics_during_period",
    start_time: start.toISOString(),
    statistic_ids: [entityId],
    period: "hour",
    types: ["mean"],
  });
  const points: HistoryPoint[] = [];
  for (const p of res?.[entityId] ?? []) {
    const t = pointTime(p);
    if (t !== null && typeof p.mean === "number" && Number.isFinite(p.mean)) {
      points.push({ t, v: p.mean });
    }
  }
  points.sort((a, b) => a.t - b.t);
  cache.set(entityId, { at: Date.now(), points });
  return points;
}

/* Les statistiques horaires ne contiennent pas l'heure en cours : le point
   courant vient de l'état live, ajouté côté composant. */
export function useHourlyHistory(hass: HassObject, entityId: string | undefined) {
  const [points, setPoints] = useState<HistoryPoint[] | null>(null);

  useEffect(() => {
    if (!entityId) {
      setPoints(null);
      return;
    }
    let cancelled = false;
    fetchHourly(hass, entityId)
      .then((p) => {
        if (!cancelled) setPoints(p);
      })
      .catch(() => {
        if (!cancelled) setPoints([]);
      });
    return () => {
      cancelled = true;
    };
  }, [hass != null, entityId]);

  return points;
}
