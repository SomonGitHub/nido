/** Traduction d'une grandeur d'appareil (0-1) en variables d'animation.
 *  Tout le réglage de l'intensité des animations vit ici : une carte doit
 *  bouger proportionnellement à ce que son appareil est en train de faire. */

type Vars = Record<string, string>;

const clamp01 = (n: number) => Math.min(1, Math.max(0, n));

/** Amplitude : à peine perceptible au repos, franche à plein régime. */
export function breatheVars(intensity: number): Vars {
  const k = clamp01(intensity);
  return {
    "--breathe-scale": (1 + 0.006 + 0.012 * k).toFixed(4),
    "--breathe-bright": (1 + 0.02 + 0.045 * k).toFixed(3),
  };
}

/** Cadence : lente quand l'appareil est à l'équilibre, pressée sous effort. */
export function paceVars(effort: number, slowSec = 7, fastSec = 2.8): Vars {
  const k = clamp01(effort);
  return { "--breathe-speed": `${(slowSec - (slowSec - fastSec) * k).toFixed(2)}s` };
}

/** Halo : la taille et l'opacité portent la donnée, donc elle survit à
 *  `prefers-reduced-motion` qui ne coupe que l'animation. */
export function glowVars(intensity: number): Vars {
  const k = clamp01(intensity);
  const base = 0.25 + 0.6 * k;
  return {
    "--glow-size": `${Math.round(90 + 95 * k)}px`,
    "--glow-base": base.toFixed(2),
    "--glow-peak": Math.min(1, base + 0.18).toFixed(2),
    "--glow-max": (1 + 0.14 * k).toFixed(3),
  };
}

/** Rotation d'hélice : la vitesse à l'écran suit la vitesse soufflée. */
export function spinVars(pct: number): Vars {
  const k = clamp01(pct / 100);
  return { "--fan-speed": `${(3.4 - 2.6 * k).toFixed(2)}s` };
}
