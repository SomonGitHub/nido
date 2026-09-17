/** Durée compacte en français, sans préposition : l'appelant choisit
 *  entre « depuis 12 min » et « il y a 12 min ». */
export function durationLabel(minutes: number): string {
  if (minutes < 60) return `${Math.max(1, minutes)} min`;
  if (minutes < 1440) return `${Math.round(minutes / 60)} h`;
  return `${Math.round(minutes / 1440)} j`;
}
