/* Compatibilité des WebView antérieures à Chrome 111 (Fully Kiosk sur une vieille
   tablette) : `color-mix()` et `oklch()` y sont inconnus et la déclaration entière
   tombe. Rien ici ne s'exécute sur un navigateur récent : la feuille de style
   reste celle d'origine, au caractère près. Les replis oklch sont dans
   styles/compat.css, sous @supports not, que ces navigateurs ignorent. */

type Rgba = [number, number, number, number];

export function supportsColorMix(): boolean {
  return typeof CSS === "undefined" || !CSS.supports || CSS.supports("color", "color-mix(in srgb, red 50%, blue)");
}

export function supportsOklch(): boolean {
  return typeof CSS === "undefined" || !CSS.supports || CSS.supports("color", "oklch(0.5 0.1 100)");
}

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

/** oklch → sRGB 0-255, valeurs hors gamut ramenées dans [0, 255]. */
export function oklchToRgb(l: number, c: number, h: number): [number, number, number] {
  const hr = (h * Math.PI) / 180;
  const a = c * Math.cos(hr);
  const b = c * Math.sin(hr);
  const l_ = l + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = l - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = l - 0.0894841775 * a - 1.291485548 * b;
  const L = l_ ** 3;
  const M = m_ ** 3;
  const S = s_ ** 3;
  const lin = [
    4.0767416621 * L - 3.3077115913 * M + 0.2309699292 * S,
    -1.2684380046 * L + 2.6097574011 * M - 0.3413193965 * S,
    -0.0041960863 * L - 0.7034186147 * M + 1.707614701 * S,
  ];
  return lin.map((v) => {
    const x = clamp01(v);
    const g = x <= 0.0031308 ? 12.92 * x : 1.055 * x ** (1 / 2.4) - 0.055;
    return Math.round(clamp01(g) * 255);
  }) as [number, number, number];
}

/** Couleur `rgb()` d'un oklch, pour les replis précalculés des vieilles WebView. */
export function oklchCss(l: number, c: number, h: number): string {
  return `rgb(${oklchToRgb(l, c, h).join(", ")})`;
}

function parseColor(raw: string): Rgba | null {
  const v = raw.trim().toLowerCase();
  if (v === "transparent") return [0, 0, 0, 0];
  const hex = /^#([0-9a-f]{3,8})$/.exec(v)?.[1];
  if (hex) {
    const full = hex.length <= 4 ? [...hex].map((ch) => ch + ch).join("") : hex;
    const n = (i: number) => parseInt(full.slice(i, i + 2), 16);
    return [n(0), n(2), n(4), full.length === 8 ? n(6) / 255 : 1];
  }
  const fn = /^rgba?\(([^)]*)\)$/.exec(v)?.[1];
  if (fn) {
    const parts = fn.split(/[\s,/]+/).filter(Boolean).map(parseFloat);
    if (parts.length >= 3 && parts.every(Number.isFinite)) return [parts[0], parts[1], parts[2], parts[3] ?? 1];
  }
  return null;
}

/** Découpe aux virgules de premier niveau. */
function splitTop(s: string): string[] {
  const out: string[] = [];
  let depth = 0;
  let start = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") depth++;
    else if (s[i] === ")") depth--;
    else if (s[i] === "," && depth === 0) {
      out.push(s.slice(start, i));
      start = i + 1;
    }
  }
  out.push(s.slice(start));
  return out.map((p) => p.trim());
}

type Lookup = (name: string) => string | null;

function resolveVar(expr: string, lookup: Lookup, depth = 0): string {
  const m = /^var\(\s*(--[\w-]+)\s*(?:,(.*))?\)$/s.exec(expr.trim());
  if (!m || depth > 8) return expr.trim();
  const value = lookup(m[1]);
  if (value) return resolveVar(value, lookup, depth + 1);
  return m[2] ? resolveVar(m[2], lookup, depth + 1) : expr.trim();
}

function mixPart(part: string, lookup: Lookup): { color: string; pct: number | null } {
  const m = /^(.*?)\s+(\d+(?:\.\d+)?)%$/s.exec(part);
  const expr = m ? m[1] : part;
  return { color: resolveVar(expr, lookup), pct: m ? parseFloat(m[2]) / 100 : null };
}

/** Un `color-mix(...)` résolu en `rgba()`, ou une couleur approchante quand une
 *  des deux couleurs n'est connue qu'au rendu (currentColor). */
export function mixToRgba(args: string, lookup: Lookup): string {
  const [, rawA = "", rawB = ""] = splitTop(args);
  const a = mixPart(rawA, lookup);
  const b = mixPart(rawB, lookup);
  const pa = a.pct ?? (b.pct != null ? 1 - b.pct : 0.5);
  const pb = b.pct ?? 1 - pa;
  const ca = parseColor(a.color);
  const cb = parseColor(b.color);
  if (!ca || !cb) return ca ? b.color : a.color;
  const alpha = ca[3] * pa + cb[3] * pb;
  if (alpha === 0) return "rgba(0, 0, 0, 0)";
  const ch = (i: number) => Math.round((ca[i] * ca[3] * pa + cb[i] * cb[3] * pb) / alpha);
  return `rgba(${ch(0)}, ${ch(1)}, ${ch(2)}, ${+alpha.toFixed(3)})`;
}

/** Remplace chaque `color-mix(...)` de la feuille par sa couleur calculée. */
export function rewriteColorMix(css: string, lookup: Lookup): string {
  let out = "";
  let i = 0;
  for (;;) {
    const start = css.indexOf("color-mix(", i);
    if (start < 0) return out + css.slice(i);
    let depth = 0;
    let end = start + "color-mix".length;
    for (; end < css.length; end++) {
      if (css[end] === "(") depth++;
      else if (css[end] === ")" && --depth === 0) break;
    }
    out += css.slice(i, start) + mixToRgba(css.slice(start + "color-mix(".length, end), lookup);
    i = end + 1;
  }
}

/** Variables définies en dur dans la feuille (`--kids-accent: #ff8a3d;`), pour les
 *  couleurs qui ne sont pas des jetons de thème. */
export function literalCustomProperties(css: string): Map<string, string> {
  const map = new Map<string, string>();
  for (const m of css.matchAll(/(--[\w-]+)\s*:\s*(#[0-9a-fA-F]{3,8}|rgba?\([^)]*\))\s*;/g)) {
    if (!map.has(m[1])) map.set(m[1], m[2]);
  }
  return map;
}
