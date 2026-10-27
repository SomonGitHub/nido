import { Component, h, type FunctionComponent } from "preact";
import type { ResolvedEntity } from "./entities";

/* HA pousse un nouvel objet `hass` à chaque changement d'état, mais garde l'objet
   d'état de chaque entité inchangée : comparer `entity.state` par identité suffit
   à savoir si un widget a quelque chose de neuf à afficher. Pas de preact/compat :
   il réécrit les props de toute l'app (onChange → onInput, className…). */
export function memo<P extends object>(
  C: FunctionComponent<P>,
  equal: (prev: P, next: P) => boolean,
): FunctionComponent<P> {
  class Memo extends Component<P> {
    shouldComponentUpdate(next: P) {
      return !equal(this.props, next);
    }
    render(props: P) {
      return h(C, props);
    }
  }
  return Memo as unknown as FunctionComponent<P>;
}

export function sameEntity(a: ResolvedEntity, b: ResolvedEntity): boolean {
  return (
    a === b ||
    (a.state === b.state &&
      a.entity_id === b.entity_id &&
      a.friendly_name === b.friendly_name &&
      a.area_id === b.area_id)
  );
}

export function sameEntities(a: ResolvedEntity[], b: ResolvedEntity[]): boolean {
  if (a === b) return true;
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) if (!sameEntity(a[i], b[i])) return false;
  return true;
}

type Rule = "skip" | ((a: any, b: any) => boolean);

/** `skip` : prop qui change d'identité à chaque rendu sans changer de sens
 *  (`hass`, un callback qui ne capture que des valeurs stables). */
export function propsEqual<P extends object>(rules: Partial<Record<keyof P, Rule>>) {
  return (prev: P, next: P): boolean => {
    const keys = new Set([...Object.keys(prev), ...Object.keys(next)]) as Set<keyof P>;
    for (const k of keys) {
      const rule = rules[k];
      if (rule === "skip") continue;
      if (rule ? !rule(prev[k], next[k]) : prev[k] !== next[k]) return false;
    }
    return true;
  };
}

/** Props de glisser-déposer : les attributs `data-*` comptent, les handlers ne
 *  capturent que l'id et des refs. */
export function sameDragProps(a: Record<string, unknown>, b: Record<string, unknown>): boolean {
  const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
  for (const k of keys) {
    if (typeof a[k] === "function" && typeof b[k] === "function") continue;
    if (a[k] !== b[k]) return false;
  }
  return true;
}
