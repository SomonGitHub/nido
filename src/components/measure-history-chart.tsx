import { useMemo } from "preact/hooks";
import type { HassObject } from "../types";
import { useHourlyHistory } from "../core/measure-history";

interface MeasureHistoryChartProps {
  hass: HassObject;
  entityId: string;
  label: string;
  unit: string;
  current: number;
}

const W = 600;
const H = 120;
const PAD = 8;

export function MeasureHistoryChart({
  hass,
  entityId,
  label,
  unit,
  current,
}: MeasureHistoryChartProps) {
  const history = useHourlyHistory(hass, entityId);

  const series = useMemo(() => {
    if (!history) return null;
    const pts = history.map((p) => ({ t: p.t, v: p.v }));
    if (Number.isFinite(current)) pts.push({ t: Date.now(), v: current });
    return pts.length >= 2 ? pts : null;
  }, [history, current]);

  if (!series) return null;

  const values = series.map((p) => p.v);
  const lo = Math.min(...values);
  const hi = Math.max(...values);
  const span = hi - lo || 1;
  const t0 = series[0].t;
  const tSpan = series[series.length - 1].t - t0 || 1;
  const x = (t: number) => PAD + ((t - t0) / tSpan) * (W - 2 * PAD);
  const y = (v: number) => H - PAD - ((v - lo) / span) * (H - 2 * PAD);
  const line = series.map((p, i) => `${i ? "L" : "M"}${x(p.t).toFixed(1)} ${y(p.v).toFixed(1)}`).join(" ");
  const last = series[series.length - 1];
  const fmt = (v: number) => v.toFixed(1).replace(".", ",");
  const ticks = [hi, (hi + lo) / 2, lo];

  return (
    <section class="nido-history" aria-label={`${label} sur 24 heures`}>
      <div class="nido-history__head">
        <div class="n-eyebrow">{label} · 24 h</div>
      </div>
      <div class="nido-history__plot">
        <div class="nido-history__yaxis" aria-hidden="true">
          {ticks.map((v) => (
            <span key={v} style={{ top: `${(y(v) / H) * 100}%` }}>
              {fmt(v)}
              {unit}
            </span>
          ))}
        </div>
        <svg class="nido-history__svg" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" role="img">
          {ticks.map((v) => (
            <line
              key={v}
              class="nido-history__grid"
              x1="0"
              x2={W}
              y1={y(v)}
              y2={y(v)}
              vector-effect="non-scaling-stroke"
            />
          ))}
          <path class="nido-history__area" d={`${line} L${x(last.t)} ${H} L${x(t0)} ${H} Z`} />
          <path class="nido-history__line" d={line} vector-effect="non-scaling-stroke" />
        </svg>
      </div>
      <div class="nido-history__axis" aria-hidden="true">
        <span>-24 h</span>
        <span>-12 h</span>
        <span>maintenant</span>
      </div>
    </section>
  );
}
