import { useEffect, useMemo, useState } from "preact/hooks";
import type { HassObject } from "../types";

interface Hourly24hWidgetProps {
  hass: HassObject;
  powerEntityId: string;
  dailyConsumptionEntityId?: string;
}

interface HistoryPoint {
  s?: string;
  state?: string;
  lu?: number;
  last_updated?: string;
  last_changed?: string;
}

type Mode = "day" | "week" | "month";

interface HistoryResult {
  buckets: number[];
  total: number;
  available: boolean;
}

function startOfHour(d: Date): Date {
  const out = new Date(d);
  out.setMinutes(0, 0, 0);
  return out;
}

function pointTime(p: HistoryPoint): number | null {
  if (typeof p.lu === "number") return p.lu * 1000;
  const lu = p.last_updated ?? p.last_changed;
  if (!lu) return null;
  const t = Date.parse(lu);
  return Number.isFinite(t) ? t : null;
}

function pointValue(p: HistoryPoint): number | null {
  const v = p.s ?? p.state;
  if (v === undefined || v === null || v === "unavailable" || v === "unknown") return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}

function integrateHistory(
  series: HistoryPoint[],
  startMs: number,
  endMs: number,
): HistoryResult {
  const buckets = new Array<number>(24).fill(0);
  if (series.length === 0) {
    return { buckets, total: 0, available: false };
  }

  const sorted = series
    .map((p) => ({ t: pointTime(p), v: pointValue(p) }))
    .filter((p): p is { t: number; v: number } => p.t !== null && p.v !== null)
    .sort((a, b) => a.t - b.t);

  if (sorted.length === 0) {
    return { buckets, total: 0, available: false };
  }

  for (let i = 0; i < sorted.length - 1; i += 1) {
    const a = sorted[i];
    const b = sorted[i + 1];
    const segStart = Math.max(a.t, startMs);
    const segEnd = Math.min(b.t, endMs);
    if (segEnd <= segStart) continue;
    const avgW = (a.v + b.v) / 2;
    const durationH = (segEnd - segStart) / 3_600_000;
    const energy = (avgW * durationH) / 1000;
    const bucketIdx = Math.floor((segStart - startMs) / 3_600_000);
    if (bucketIdx >= 0 && bucketIdx < 24) {
      buckets[bucketIdx] += energy;
    }
  }

  const last = sorted[sorted.length - 1];
  if (last.t < endMs) {
    const segStart = Math.max(last.t, startMs);
    const durationH = (endMs - segStart) / 3_600_000;
    if (durationH > 0) {
      const energy = (last.v * durationH) / 1000;
      const bucketIdx = Math.floor((segStart - startMs) / 3_600_000);
      if (bucketIdx >= 0 && bucketIdx < 24) {
        buckets[bucketIdx] += energy;
      }
    }
  }

  const total = buckets.reduce((a, b) => a + b, 0);
  return { buckets, total, available: total > 0 };
}

export function Hourly24hWidget({
  hass,
  powerEntityId,
  dailyConsumptionEntityId,
}: Hourly24hWidgetProps) {
  const [history, setHistory] = useState<HistoryResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [mode] = useState<Mode>("day");

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      setLoading(true);
      try {
        const start = startOfHour(new Date(Date.now() - 23 * 3_600_000));
        const end = new Date();
        const res = await hass.callWS<Record<string, HistoryPoint[]>>({
          type: "history/history_during_period",
          start_time: start.toISOString(),
          end_time: end.toISOString(),
          entity_ids: [powerEntityId],
          minimal_response: true,
          no_attributes: true,
        });
        if (cancelled) return;
        const series = res?.[powerEntityId] ?? [];
        const integrated = integrateHistory(series, start.getTime(), end.getTime());
        setHistory(integrated);
      } catch (err: unknown) {
        if (cancelled) return;
        console.warn("Nido energy: history fetch failed", err);
        setHistory({ buckets: new Array<number>(24).fill(0), total: 0, available: false });
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    load();
    return () => {
      cancelled = true;
    };
  }, [hass != null, powerEntityId]);

  const dailyEntity = dailyConsumptionEntityId
    ? hass.states[dailyConsumptionEntityId]
    : undefined;
  const dailyValue = useMemo(() => {
    if (!dailyEntity) return null;
    const n = Number(dailyEntity.state);
    return Number.isFinite(n) ? n : null;
  }, [dailyEntity]);
  const dailyUnit = (dailyEntity?.attributes.unit_of_measurement as string | undefined) ?? "kWh";

  const buckets = history?.buckets ?? new Array<number>(24).fill(0);
  const total = dailyValue ?? history?.total ?? 0;
  const available = history?.available ?? false;

  const positiveBuckets = buckets.filter((b) => b > 0);
  const avg30 =
    positiveBuckets.length > 0
      ? positiveBuckets.reduce((a, b) => a + b, 0) / positiveBuckets.length
      : 0;
  const max = Math.max(...buckets, avg30) * 1.1 || 1;

  const yesterday = total > 0 ? total : 0;
  const delta = 0;

  const currentHour = new Date().getHours();
  const peakValue = Math.max(...buckets);
  const totalUnit = dailyValue !== null ? dailyUnit : "kWh";

  return (
    <div class="n-card n-hourly">
      <div class="n-hourly__head">
        <div>
          <div class="n-eyebrow">Consommation · Aujourd'hui</div>
          <div class="n-hourly__total-row">
            <div class="n-hourly__total">
              {total.toFixed(1).replace(".", ",")}
              <span class="n-hourly__total-unit">{totalUnit}</span>
            </div>
            {yesterday > 0 && (
              <span class="n-pill-btn n-pill-btn--ghost n-hourly__delta">
                {delta > 0 ? "+" : ""}
                {delta.toFixed(0)} % vs hier
              </span>
            )}
          </div>
        </div>
        <div class="n-hourly__modes">
          <span class={`n-pill-btn ${mode === "day" ? "n-pill-btn--dark" : "n-pill-btn--ghost"}`}>
            Jour
          </span>
          <span class="n-pill-btn n-pill-btn--ghost is-disabled">Semaine</span>
          <span class="n-pill-btn n-pill-btn--ghost is-disabled">Mois</span>
        </div>
      </div>

      {loading ? (
        <div class="n-muted n-hourly__loading">Chargement de l'historique…</div>
      ) : !available ? (
        <div class="n-bars n-bars--empty">
          <div class="n-muted">Historique indisponible</div>
        </div>
      ) : (
        <>
          <div class="n-bars">
            {avg30 > 0 && (
              <div
                class="n-bars__avg"
                style={{ bottom: `${(avg30 / max) * 100}%` }}
              >
                <span class="n-bars__avg-label">
                  moyenne · {avg30.toFixed(2)} kWh
                </span>
              </div>
            )}
            <div class="n-bars__grid">
              {buckets.map((v, i) => {
                const isNow = i === currentHour;
                const isPast = i < currentHour;
                const isPeak = v > 0 && v === peakValue;
                let cls = "n-bars__bar";
                if (isNow) cls += " is-now";
                else if (isPeak) cls += " is-peak";
                else if (isPast) cls += " is-past";
                else cls += " is-future";
                return (
                  <div key={i} class="n-bars__col">
                    <div
                      class={cls}
                      style={{ height: `${Math.max(2, (v / max) * 100)}%` }}
                    />
                    {isNow && (
                      <div class="n-bars__now-label">{v.toFixed(2)} kWh</div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div class="n-bars__axis">
            <span>00 h</span>
            <span>06 h</span>
            <span>12 h</span>
            <span>18 h</span>
            <span>24 h</span>
          </div>
        </>
      )}
    </div>
  );
}
