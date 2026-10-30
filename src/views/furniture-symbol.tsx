import type { JSX } from "preact";
import { METERS_PER_CELL, footprint, type FurnitureKind, type FurnitureRotation } from "../core/furniture";

/* Symboles vus de dessus, à la manière d'un plan d'architecte. Chaque symbole
   est tracé dans son propre repère, en centimètres (W × H, avant rotation) ;
   le trait garde la même épaisseur quelle que soit l'échelle. */

type Draw = (W: number, H: number) => JSX.Element;

const R = (x: number, y: number, w: number, h: number, rx = 0, cls?: string) => (
  <rect x={x} y={y} width={Math.max(0, w)} height={Math.max(0, h)} rx={rx} class={cls} />
);
const bars = (n: number) => Array.from({ length: n }, (_, i) => i);
const L = (x1: number, y1: number, x2: number, y2: number) => <line x1={x1} y1={y1} x2={x2} y2={y2} />;

function bed(W: number, H: number, pillows: number): JSX.Element {
  const pw = (W - 12 - (pillows - 1) * 6) / pillows;
  const ph = Math.min(28, H * 0.14);
  return (
    <>
      {R(0, 0, W, H, 5)}
      {Array.from({ length: pillows }, (_, i) => R(6 + i * (pw + 6), 7, pw, ph, 6, "nido-fur__soft"))}
      {L(0, ph + 18, W, ph + 18)}
      <path d={`M ${W * 0.55} ${ph + 18} L ${W} ${ph + 18 + W * 0.3}`} />
    </>
  );
}

function seating(W: number, H: number, seats: number): JSX.Element {
  const back = Math.min(22, H * 0.25);
  const arm = Math.min(18, W * 0.14);
  const sw = (W - arm * 2) / seats;
  return (
    <>
      {R(0, 0, W, H, 8)}
      {L(arm, back, W - arm, back)}
      {L(arm, back, arm, H)}
      {L(W - arm, back, W - arm, H)}
      {Array.from({ length: seats - 1 }, (_, i) => L(arm + (i + 1) * sw, back, arm + (i + 1) * sw, H - 4))}
    </>
  );
}

const SYMBOLS: Record<FurnitureKind, Draw> = {
  bed_single: (W, H) => bed(W, H, 1),
  bed_double: (W, H) => bed(W, H, 2),
  crib: (W, H) => (
    <>
      {R(0, 0, W, H, 4)}
      {R(6, 6, W - 12, H - 12, 3, "nido-fur__soft")}
      {bars(Math.max(2, Math.floor((W - 12) / 10))).map((i, _, all) => {
        const x = 6 + ((i + 1) * (W - 12)) / (all.length + 1);
        return (
          <>
            {L(x, 0, x, 6)}
            {L(x, H - 6, x, H)}
          </>
        );
      })}
    </>
  ),
  wardrobe: (W, H) => (
    <>
      {R(0, 0, W, H, 2)}
      {L(4, H / 2, W - 4, H / 2)}
      {bars(Math.max(3, Math.floor(W / 14))).map((i, _, all) => {
        const x = ((i + 1) * W) / (all.length + 1);
        return L(x - 4, H / 2 - 9, x + 4, H / 2 + 9);
      })}
    </>
  ),
  sofa: (W, H) => seating(W, H, W >= 170 ? 3 : 2),
  armchair: (W, H) => seating(W, H, 1),
  tv: (W, H) => (
    <>
      {R(0, H * 0.3, W, H * 0.7, 3)}
      <rect x={W * 0.08} y={0} width={W * 0.84} height={Math.max(3, H * 0.16)} rx={1.5} class="nido-fur__solid" />
    </>
  ),
  dining_table: (W, H) => {
    const chair = Math.min(40, H * 0.32);
    const n = Math.max(1, Math.floor(W / 60));
    const gap = W / n;
    return (
      <>
        {Array.from({ length: n }, (_, i) => (
          <>
            {R(i * gap + (gap - chair) / 2, 0, chair, chair * 0.7, 6, "nido-fur__soft")}
            {R(i * gap + (gap - chair) / 2, H - chair * 0.7, chair, chair * 0.7, 6, "nido-fur__soft")}
          </>
        ))}
        {R(W * 0.04, chair * 0.45, W * 0.92, H - chair * 0.9, 4)}
      </>
    );
  },
  coffee_table: (W, H) => (
    <>
      {R(0, 0, W, H, 6)}
      {R(8, 8, W - 16, H - 16, 3)}
    </>
  ),
  desk: (W, H) => (
    <>
      {R(0, 0, W, H, 2)}
      {R(W * 0.3, 6, W * 0.4, Math.max(3, H * 0.08), 1.5, "nido-fur__solid")}
      <path d={`M ${W * 0.36} ${H} A ${W * 0.14} ${W * 0.14} 0 0 1 ${W * 0.64} ${H}`} />
    </>
  ),
  sink: (W, H) => {
    const bw = Math.min(W * 0.42, 50);
    return (
      <>
        {R(0, 0, W, H, 2)}
        {R(8, 10, bw, H - 20, 7)}
        <circle cx={8 + bw / 2} cy={H / 2 + 4} r={3} />
        <circle cx={8 + bw / 2} cy={6} r={2.5} class="nido-fur__solid" />
        {Array.from({ length: 4 }, (_, i) => L(bw + 20, 14 + i * ((H - 28) / 3), W - 8, 14 + i * ((H - 28) / 3)))}
      </>
    );
  },
  cooktop: (W, H) => (
    <>
      {R(0, 0, W, H, 3)}
      <circle cx={W * 0.3} cy={H * 0.3} r={Math.min(W, H) * 0.16} />
      <circle cx={W * 0.7} cy={H * 0.3} r={Math.min(W, H) * 0.12} />
      <circle cx={W * 0.3} cy={H * 0.7} r={Math.min(W, H) * 0.12} />
      <circle cx={W * 0.7} cy={H * 0.7} r={Math.min(W, H) * 0.16} />
    </>
  ),
  fridge: (W, H) => (
    <>
      {R(0, 0, W, H, 3)}
      {L(0, H * 0.82, W, H * 0.82)}
      {L(W * 0.2, H * 0.9, W * 0.8, H * 0.9)}
      {L(4, 4, W - 4, H * 0.82 - 4)}
    </>
  ),
  washer: (W, H) => (
    <>
      {R(0, 0, W, H, 4)}
      <circle cx={W / 2} cy={H * 0.54} r={Math.min(W, H) * 0.32} />
      <circle cx={W / 2} cy={H * 0.54} r={Math.min(W, H) * 0.18} />
      {L(6, H * 0.14, W * 0.4, H * 0.14)}
    </>
  ),
  bathtub: (W, H) => (
    <>
      {R(0, 0, W, H, 6)}
      {R(8, 8, W - 16, H - 16, Math.min(H, W) * 0.3)}
      <circle cx={W - 24} cy={H / 2} r={3} />
    </>
  ),
  shower: (W, H) => (
    <>
      {R(0, 0, W, H, 2)}
      {L(0, 0, W, H)}
      {L(W, 0, 0, H)}
      <circle cx={W / 2} cy={H / 2} r={4} class="nido-fur__soft" />
    </>
  ),
  washbasin: (W, H) => (
    <>
      {R(0, 0, W, H * 0.3, 2)}
      <ellipse cx={W / 2} cy={H * 0.58} rx={W * 0.42} ry={H * 0.4} />
      <ellipse cx={W / 2} cy={H * 0.6} rx={W * 0.3} ry={H * 0.26} class="nido-fur__soft" />
      <circle cx={W / 2} cy={H * 0.15} r={2.5} class="nido-fur__solid" />
    </>
  ),
  toilet: (W, H) => (
    <>
      {R(0, 0, W, H * 0.28, 3)}
      <ellipse cx={W / 2} cy={H * 0.62} rx={W * 0.42} ry={H * 0.36} />
      <ellipse cx={W / 2} cy={H * 0.64} rx={W * 0.26} ry={H * 0.22} class="nido-fur__soft" />
    </>
  ),
  plant: (W, H) => {
    const cx = W / 2;
    const cy = H / 2;
    const r = Math.min(W, H) / 2 - 2;
    return (
      <>
        <circle cx={cx} cy={cy} r={r * 0.42} />
        {Array.from({ length: 7 }, (_, i) => {
          const a = (i / 7) * Math.PI * 2;
          return (
            <ellipse
              cx={cx + Math.cos(a) * r * 0.62}
              cy={cy + Math.sin(a) * r * 0.62}
              rx={r * 0.36}
              ry={r * 0.17}
              transform={`rotate(${(a * 180) / Math.PI} ${cx + Math.cos(a) * r * 0.62} ${cy + Math.sin(a) * r * 0.62})`}
              class="nido-fur__soft"
            />
          );
        })}
      </>
    );
  },
};

const CM_PER_CELL = METERS_PER_CELL * 100;

const ROTATE: Record<FurnitureRotation, (fw: number, fh: number) => string> = {
  0: () => "",
  90: (fw) => `translate(${fw} 0) rotate(90)`,
  180: (fw, fh) => `translate(${fw} ${fh}) rotate(180)`,
  270: (_fw, fh) => `translate(0 ${fh}) rotate(270)`,
};

interface FurnitureSymbolProps {
  kind: FurnitureKind;
  w: number;
  h: number;
  rot: FurnitureRotation;
}

/** Le symbole remplit son conteneur (taille de l'emprise après rotation). */
export function FurnitureSymbol({ kind, w, h, rot }: FurnitureSymbolProps) {
  const W = w * CM_PER_CELL;
  const H = h * CM_PER_CELL;
  const fp = footprint({ w: W, h: H, rot });
  return (
    <svg class="nido-fur" viewBox={`-1 -1 ${fp.w + 2} ${fp.h + 2}`} preserveAspectRatio="none" aria-hidden="true">
      <g transform={ROTATE[rot](fp.w, fp.h)}>{SYMBOLS[kind](W, H)}</g>
    </svg>
  );
}
