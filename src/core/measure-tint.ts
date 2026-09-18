/* Dégradé de couleur des mesures de confort (bandeau des cartes pièce).

   La valeur pilote la teinte et la saturation, jamais la luminosité : celle-ci
   reste une variable CSS réglée par le thème et la variante de carte — sinon
   un bleu lisible sur fond crème devient illisible sur fond terracotta foncé.

   Les arrêts sont interpolés linéairement. Deux arrêts voisins gardent des
   teintes proches, ce qui évite les intermédiaires ternes d'une interpolation
   bleu → rouge en ligne droite. */

/** [valeur, teinte OKLCH (deg), chroma OKLCH] */
type TintStop = readonly [number, number, number];

export interface MeasureTint {
  hue: number;
  chroma: number;
}

/* Température intérieure en °C : froid bleu → confort vert → chaud terracotta.
   Le plateau vert couvre 19–22 °C, la zone de confort habituelle d'un logement. */
const TEMPERATURE_STOPS: readonly TintStop[] = [
  [12, 252, 0.1],
  [16, 226, 0.09],
  [19, 158, 0.085],
  [22, 132, 0.095],
  [25, 78, 0.125],
  [28, 46, 0.15],
  [32, 28, 0.17],
];

/* Humidité relative en % : trop sec ambre → confort vert → trop humide bleu.
   Plateau vert sur 40–60 %, la plage recommandée en intérieur. */
const HUMIDITY_STOPS: readonly TintStop[] = [
  [20, 46, 0.145],
  [32, 78, 0.115],
  [40, 152, 0.085],
  [60, 172, 0.085],
  [70, 214, 0.11],
  [82, 250, 0.145],
];

function sampleStops(stops: readonly TintStop[], value: number): MeasureTint {
  const first = stops[0];
  const last = stops[stops.length - 1];
  if (value <= first[0]) return { hue: first[1], chroma: first[2] };
  if (value >= last[0]) return { hue: last[1], chroma: last[2] };

  for (let i = 1; i < stops.length; i++) {
    const [hiV, hiH, hiC] = stops[i];
    if (value > hiV) continue;
    const [loV, loH, loC] = stops[i - 1];
    const t = (value - loV) / (hiV - loV);
    return { hue: loH + (hiH - loH) * t, chroma: loC + (hiC - loC) * t };
  }
  return { hue: last[1], chroma: last[2] };
}

/* HA sert aussi bien des °F que des °C : on ramène l'échelle en °C plutôt que
   d'entretenir deux jeux d'arrêts. */
function toCelsius(value: number, unit: string): number {
  return /f/i.test(unit) ? ((value - 32) * 5) / 9 : value;
}

export function temperatureTint(raw: string, unit: string): MeasureTint | null {
  const n = parseFloat(raw);
  if (!Number.isFinite(n)) return null;
  return sampleStops(TEMPERATURE_STOPS, toCelsius(n, unit));
}

export function humidityTint(raw: string): MeasureTint | null {
  const n = parseFloat(raw);
  if (!Number.isFinite(n)) return null;
  return sampleStops(HUMIDITY_STOPS, n);
}

/** Variables CSS consommées par `.nido-room-card__band-item--tinted`. */
export function tintStyle(tint: MeasureTint | null): Record<string, string> | undefined {
  if (!tint) return undefined;
  return {
    "--measure-h": tint.hue.toFixed(1),
    "--measure-c": tint.chroma.toFixed(3),
  };
}
