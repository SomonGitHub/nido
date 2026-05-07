import { useMemo } from "preact/hooks";
import type { HassObject } from "../types";
import { IconArrowUpRight } from "../icons";

interface PowerGaugeWidgetProps {
  hass: HassObject;
  powerEntityId: string;
  max?: number;
  onOpen?: () => void;
}

function polar(t: number, cx: number, cy: number, r: number): [number, number] {
  const a = Math.PI * (1 - t);
  return [cx + r * Math.cos(a), cy - r * Math.sin(a)];
}

export function PowerGaugeWidget({
  hass,
  powerEntityId,
  max = 7000,
  onOpen,
}: PowerGaugeWidgetProps) {
  const entity = hass.states[powerEntityId];
  const friendlyName =
    (entity?.attributes.friendly_name as string | undefined) ?? "Compteur Linky";
  const rawState = entity?.state ?? "unavailable";
  const unavailable = rawState === "unavailable" || rawState === "unknown" || !entity;
  const watts = useMemo(() => {
    if (unavailable) return 0;
    const n = Number(rawState);
    return Number.isFinite(n) ? Math.max(0, Math.round(n)) : 0;
  }, [rawState, unavailable]);

  const pct = Math.max(0, Math.min(1, watts / max));

  const cx = 100;
  const cy = 100;
  const r = 86;
  const [sx, sy] = polar(0, cx, cy, r);
  const [ex, ey] = polar(1, cx, cy, r);
  const [px, py] = polar(pct, cx, cy, r);
  const trackPath = `M ${sx.toFixed(2)} ${sy.toFixed(2)} A ${r} ${r} 0 0 1 ${ex.toFixed(2)} ${ey.toFixed(2)}`;
  const largeArc = pct > 0.5 ? 1 : 0;
  const activePath =
    pct > 0
      ? `M ${sx.toFixed(2)} ${sy.toFixed(2)} A ${r} ${r} 0 ${largeArc} 1 ${px.toFixed(2)} ${py.toFixed(2)}`
      : "";

  const trendLabel = watts >= 5000 ? "Pic" : watts >= 2000 ? "Soutenu" : "Sobre";

  const cardClass = ["n-card", "n-card--accent", "breathe-1", "n-power-gauge"].join(" ");
  const interactive = typeof onOpen === "function";

  return (
    <div
      class={cardClass}
      data-on="true"
      role={interactive ? "button" : undefined}
      tabIndex={interactive ? 0 : undefined}
      onClick={interactive ? onOpen : undefined}
      onKeyDown={
        interactive
          ? (e: KeyboardEvent) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onOpen?.();
              }
            }
          : undefined
      }
      style={{ cursor: interactive ? "pointer" : "default" }}
    >
      <div class="n-light__glow" aria-hidden="true" />
      <svg
        class="n-power-gauge__deco"
        width="200"
        height="200"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" stroke-width="1" />
        <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" stroke-width="1" />
        <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" stroke-width="1" />
      </svg>

      <div class="n-power-gauge__head">
        <div class="n-power-gauge__head-text">
          <div class="n-eyebrow">Consommation · En direct</div>
          <div class="n-title">{friendlyName}</div>
        </div>
        <div class="n-power-gauge__head-actions">
          <span class="n-power-gauge__live">
            <span class="n-power-gauge__live-dot" />
            Live
          </span>
          {interactive && (
            <span class="n-power-gauge__open" aria-hidden="true">
              <IconArrowUpRight size={14} />
            </span>
          )}
        </div>
      </div>

      {unavailable ? (
        <div class="n-muted n-power-gauge__unavailable">Indisponible</div>
      ) : (
        <>
          <div class="n-power-gauge__chart">
            <svg
              width="240"
              height="150"
              viewBox="0 0 200 120"
              preserveAspectRatio="xMidYMid meet"
              class="n-power-gauge__svg"
            >
              <path
                d={trackPath}
                fill="none"
                stroke="rgba(255,255,255,0.2)"
                stroke-width="14"
                stroke-linecap="round"
              />
              {activePath && (
                <path
                  d={activePath}
                  fill="none"
                  stroke="rgba(255,255,255,0.95)"
                  stroke-width="14"
                  stroke-linecap="round"
                  class="n-power-gauge__arc"
                />
              )}
              <line
                x1={sx}
                y1={sy + 8}
                x2={sx}
                y2={sy + 14}
                stroke="rgba(255,255,255,0.4)"
                stroke-width="1"
              />
              <line
                x1={ex}
                y1={ey + 8}
                x2={ex}
                y2={ey + 14}
                stroke="rgba(255,255,255,0.4)"
                stroke-width="1"
              />
            </svg>
            <div class="n-power-gauge__readout">
              <div class="n-power-gauge__value">
                {watts.toLocaleString("fr-FR")}
                <span class="n-power-gauge__unit">W</span>
              </div>
              <div class="n-eyebrow n-power-gauge__sublabel">Puissance instantanée</div>
            </div>
          </div>

          <div class="n-power-gauge__foot">
            <span>0 W</span>
            <span class="n-power-gauge__pill">
              <span class="n-power-gauge__pill-dot" />
              {trendLabel} · {Math.round(pct * 100)}%
            </span>
            <span>{max.toLocaleString("fr-FR")} W</span>
          </div>
        </>
      )}
    </div>
  );
}
