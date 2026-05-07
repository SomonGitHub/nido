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

interface StatisticsPoint {
  start: number | string;
  end?: number | string;
  mean?: number | null;
  change?: number | null;
}

type Mode = "day" | "week" | "month";

interface ChartData {
  buckets: number[];
  total: number;
  available: boolean;
  axisLabels: string[];
  bucketLabel: (i: number) => string;
  unit: string;
  nowIndex: number;
}

const MODE_CONFIG: Record<Mode, { label: string; bucketCount: number; bucketHours: number }> = {
  day: { label: "Jour", bucketCount: 24, bucketHours: 1 },
  week: { label: "Semaine", bucketCount: 7, bucketHours: 24 },
  month: { label: "Mois", bucketCount: 30, bucketHours: 24 },
};

function startOfHour(d: Date): Date {
  const out = new Date(d);
  out.setMinutes(0, 0, 0);
  return out;
}

function startOfDay(d: Date): Date {
  const out = new Date(d);
  out.setHours(0, 0, 0, 0);
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

function statTime(p: StatisticsPoint): number | null {
  if (typeof p.start === "number") return p.start;
  const t = Date.parse(String(p.start));
  return Number.isFinite(t) ? t : null;
}

function integrateHistory(
  series: HistoryPoint[],
  startMs: number,
  endMs: number,
  bucketCount: number,
  bucketDurationMs: number,
): { buckets: number[]; total: number } {
  const buckets = new Array<number>(bucketCount).fill(0);
  if (series.length === 0) return { buckets, total: 0 };

  const sorted = series
    .map((p) => ({ t: pointTime(p), v: pointValue(p) }))
    .filter((p): p is { t: number; v: number } => p.t !== null && p.v !== null)
    .sort((a, b) => a.t - b.t);

  if (sorted.length === 0) return { buckets, total: 0 };

  for (let i = 0; i < sorted.length - 1; i += 1) {
    const a = sorted[i];
    const b = sorted[i + 1];
    const segStart = Math.max(a.t, startMs);
    const segEnd = Math.min(b.t, endMs);
    if (segEnd <= segStart) continue;
    const avgW = (a.v + b.v) / 2;
    const durationH = (segEnd - segStart) / 3_600_000;
    const energy = (avgW * durationH) / 1000;
    const bucketIdx = Math.floor((segStart - startMs) / bucketDurationMs);
    if (bucketIdx >= 0 && bucketIdx < bucketCount) {
      buckets[bucketIdx] += energy;
    }
  }

  const last = sorted[sorted.length - 1];
  if (last.t < endMs) {
    const segStart = Math.max(last.t, startMs);
    const durationH = (endMs - segStart) / 3_600_000;
    if (durationH > 0) {
      const energy = (last.v * durationH) / 1000;
      const bucketIdx = Math.floor((segStart - startMs) / bucketDurationMs);
      if (bucketIdx >= 0 && bucketIdx < bucketCount) {
        buckets[bucketIdx] += energy;
      }
    }
  }

  const total = buckets.reduce((a, b) => a + b, 0);
  return { buckets, total };
}

function statisticsToBuckets(
  stats: StatisticsPoint[],
  startMs: number,
  bucketCount: number,
  bucketDurationMs: number,
): { buckets: number[]; total: number } {
  const buckets = new Array<number>(bucketCount).fill(0);
  for (const p of stats) {
    const t = statTime(p);
    if (t === null) continue;
    const bucketIdx = Math.floor((t - startMs) / bucketDurationMs);
    if (bucketIdx < 0 || bucketIdx >= bucketCount) continue;
    if (typeof p.change === "number" && Number.isFinite(p.change)) {
      buckets[bucketIdx] += p.change;
    } else if (typeof p.mean === "number" && Number.isFinite(p.mean)) {
      const durationH = bucketDurationMs / 3_600_000;
      buckets[bucketIdx] += (p.mean * durationH) / 1000;
    }
  }
  const total = buckets.reduce((a, b) => a + b, 0);
  return { buckets, total };
}

const WEEKDAY_LABELS = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

function buildAxis(mode: Mode, startMs: number): { axisLabels: string[]; bucketLabel: (i: number) => string } {
  if (mode === "day") {
    return {
      axisLabels: ["00 h", "06 h", "12 h", "18 h", "24 h"],
      bucketLabel: (i) => `${String(i).padStart(2, "0")} h`,
    };
  }
  if (mode === "week") {
    const labels: string[] = [];
    const start = new Date(startMs);
    for (let i = 0; i < 7; i += 1) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      const wd = d.getDay() === 0 ? 6 : d.getDay() - 1;
      labels.push(WEEKDAY_LABELS[wd]);
    }
    return {
      axisLabels: [labels[0], labels[3], labels[6]],
      bucketLabel: (i) => labels[i] ?? "",
    };
  }
  const start = new Date(startMs);
  const labels: string[] = [];
  for (let i = 0; i < 30; i += 1) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    labels.push(String(d.getDate()));
  }
  return {
    axisLabels: [labels[0], labels[7], labels[14], labels[21], labels[29]],
    bucketLabel: (i) => labels[i] ?? "",
  };
}

function nowIndexFor(mode: Mode, startMs: number): number {
  const now = Date.now();
  const cfg = MODE_CONFIG[mode];
  const idx = Math.floor((now - startMs) / (cfg.bucketHours * 3_600_000));
  return Math.max(0, Math.min(cfg.bucketCount - 1, idx));
}

export function Hourly24hWidget({
  hass,
  powerEntityId,
  dailyConsumptionEntityId,
}: Hourly24hWidgetProps) {
  const [data, setData] = useState<ChartData | null>(null);
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState<Mode>("day");

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      setLoading(true);
      try {
        if (mode === "day") {
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
          const { buckets, total } = integrateHistory(
            series,
            start.getTime(),
            end.getTime(),
            24,
            3_600_000,
          );
          const axis = buildAxis("day", start.getTime());
          setData({
            buckets,
            total,
            available: total > 0,
            axisLabels: axis.axisLabels,
            bucketLabel: axis.bucketLabel,
            unit: "kWh",
            nowIndex: new Date().getHours(),
          });
        } else {
          const days = mode === "week" ? 7 : 30;
          const start = startOfDay(new Date(Date.now() - (days - 1) * 86_400_000));
          const end = new Date();
          let buckets: number[] = [];
          let total = 0;
          let succeeded = false;
          try {
            const stats = await hass.callWS<Record<string, StatisticsPoint[]>>({
              type: "recorder/statistics_during_period",
              start_time: start.toISOString(),
              end_time: end.toISOString(),
              statistic_ids: [powerEntityId],
              period: "day",
            });
            if (cancelled) return;
            const series = stats?.[powerEntityId] ?? [];
            if (series.length > 0) {
              const result = statisticsToBuckets(series, start.getTime(), days, 86_400_000);
              buckets = result.buckets;
              total = result.total;
              succeeded = true;
            }
          } catch {
            succeeded = false;
          }
          if (!succeeded) {
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
            const result = integrateHistory(series, start.getTime(), end.getTime(), days, 86_400_000);
            buckets = result.buckets;
            total = result.total;
          }
          const axis = buildAxis(mode, start.getTime());
          setData({
            buckets,
            total,
            available: total > 0,
            axisLabels: axis.axisLabels,
            bucketLabel: axis.bucketLabel,
            unit: "kWh",
            nowIndex: nowIndexFor(mode, start.getTime()),
          });
        }
      } catch (err: unknown) {
        if (cancelled) return;
        console.warn("Nido energy: history fetch failed", err);
        setData({
          buckets: new Array<number>(MODE_CONFIG[mode].bucketCount).fill(0),
          total: 0,
          available: false,
          axisLabels: [],
          bucketLabel: () => "",
          unit: "kWh",
          nowIndex: 0,
        });
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    load();
    return () => {
      cancelled = true;
    };
  }, [hass != null, powerEntityId, mode]);

  const dailyEntity = dailyConsumptionEntityId
    ? hass.states[dailyConsumptionEntityId]
    : undefined;
  const dailyValue = useMemo(() => {
    if (!dailyEntity) return null;
    const n = Number(dailyEntity.state);
    return Number.isFinite(n) ? n : null;
  }, [dailyEntity]);
  const dailyUnit = (dailyEntity?.attributes.unit_of_measurement as string | undefined) ?? "kWh";

  const buckets = data?.buckets ?? new Array<number>(MODE_CONFIG[mode].bucketCount).fill(0);
  const total = mode === "day" && dailyValue !== null ? dailyValue : data?.total ?? 0;
  const totalUnit = mode === "day" && dailyValue !== null ? dailyUnit : "kWh";
  const available = data?.available ?? false;
  const nowIndex = data?.nowIndex ?? -1;

  const positiveBuckets = buckets.filter((b) => b > 0);
  const avg =
    positiveBuckets.length > 0
      ? positiveBuckets.reduce((a, b) => a + b, 0) / positiveBuckets.length
      : 0;
  const max = Math.max(...buckets, avg) * 1.1 || 1;
  const peakValue = Math.max(...buckets);

  const headerLabel =
    mode === "day"
      ? "Consommation · Aujourd'hui"
      : mode === "week"
      ? "Consommation · 7 derniers jours"
      : "Consommation · 30 derniers jours";

  const avgLabel =
    mode === "day"
      ? `moyenne · ${avg.toFixed(2)} kWh`
      : mode === "week"
      ? `moyenne · ${avg.toFixed(1)} kWh / jour`
      : `moyenne · ${avg.toFixed(1)} kWh / jour`;

  return (
    <div class="n-card n-hourly">
      <div class="n-hourly__head">
        <div>
          <div class="n-eyebrow">{headerLabel}</div>
          <div class="n-hourly__total-row">
            <div class="n-hourly__total">
              {total.toFixed(1).replace(".", ",")}
              <span class="n-hourly__total-unit">{totalUnit}</span>
            </div>
          </div>
        </div>
        <div class="n-hourly__modes" role="tablist">
          {(Object.keys(MODE_CONFIG) as Mode[]).map((m) => (
            <button
              key={m}
              type="button"
              role="tab"
              aria-selected={mode === m}
              class={`n-pill-btn ${mode === m ? "n-pill-btn--dark" : "n-pill-btn--ghost"}`}
              onClick={() => setMode(m)}
            >
              {MODE_CONFIG[m].label}
            </button>
          ))}
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
            {avg > 0 && (
              <div class="n-bars__avg" style={{ bottom: `${(avg / max) * 100}%` }}>
                <span class="n-bars__avg-label">{avgLabel}</span>
              </div>
            )}
            <div class="n-bars__grid">
              {buckets.map((v, i) => {
                const isNow = i === nowIndex;
                const isPast = i < nowIndex;
                const isPeak = v > 0 && v === peakValue;
                let cls = "n-bars__bar";
                if (isNow) cls += " is-now";
                else if (isPeak) cls += " is-peak";
                else if (isPast) cls += " is-past";
                else cls += " is-future";
                return (
                  <div key={i} class="n-bars__col">
                    <div class={cls} style={{ height: `${Math.max(2, (v / max) * 100)}%` }} />
                    {isNow && <div class="n-bars__now-label">{v.toFixed(2)} kWh</div>}
                  </div>
                );
              })}
            </div>
          </div>
          <div class="n-bars__axis">
            {data?.axisLabels.map((l, i) => <span key={i}>{l}</span>)}
          </div>
        </>
      )}
    </div>
  );
}
