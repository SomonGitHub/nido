import { describe, expect, it } from "vitest";
import { literalCustomProperties, mixToRgba, oklchCss, oklchToRgb, rewriteColorMix } from "./css-compat";

const tokens: Record<string, string> = { "--accent": "#c75a2a", "--bg-inset": "#ede4d3", "--ink-1": "#1a1410" };
const lookup = (n: string) => tokens[n] ?? null;

describe("mixToRgba", () => {
  it("mélange avec transparent = la couleur à l'opacité du pourcentage", () => {
    expect(mixToRgba("in srgb, var(--accent) 20%, transparent", lookup)).toBe("rgba(199, 90, 42, 0.2)");
  });
  it("mélange deux couleurs opaques en sRGB", () => {
    expect(mixToRgba("in srgb, var(--accent) 20%, var(--bg-inset)", lookup)).toBe("rgba(229, 200, 177, 1)");
  });
  it("prend la valeur de repli d'une variable inconnue", () => {
    expect(mixToRgba("in srgb, var(--cal-color, var(--ink-1)) 35%, transparent", lookup)).toBe("rgba(26, 20, 16, 0.35)");
  });
  it("garde currentColor tel quel faute de pouvoir le calculer", () => {
    expect(mixToRgba("in srgb, currentColor 85%, transparent", lookup)).toBe("currentColor");
  });
});

describe("rewriteColorMix", () => {
  it("remplace chaque color-mix, y compris imbriqué dans une autre fonction", () => {
    const css = ".a{background:radial-gradient(circle, color-mix(in srgb, var(--accent) 10%, transparent), transparent 60%)}.b{color:red}";
    expect(rewriteColorMix(css, lookup)).toBe(".a{background:radial-gradient(circle, rgba(199, 90, 42, 0.1), transparent 60%)}.b{color:red}");
  });
  it("laisse intacte une feuille sans color-mix", () => {
    expect(rewriteColorMix(".a{color:red}", lookup)).toBe(".a{color:red}");
  });
});

describe("literalCustomProperties", () => {
  it("relève les variables à valeur littérale, première définition gagnante", () => {
    const map = literalCustomProperties(".k{--kids-accent: #ff8a3d; --x: var(--y);} .k2{--kids-accent: #000;}");
    expect(map.get("--kids-accent")).toBe("#ff8a3d");
    expect(map.has("--x")).toBe(false);
  });
});

describe("oklch", () => {
  it("convertit vers sRGB", () => {
    expect(oklchToRgb(1, 0, 0)).toEqual([255, 255, 255]);
    expect(oklchToRgb(0, 0, 0)).toEqual([0, 0, 0]);
    expect(oklchToRgb(0.628, 0.2577, 29.23)).toEqual([255, 0, 0]);
  });
  it("formate en rgb() pour les replis", () => {
    expect(oklchCss(1, 0, 0)).toBe("rgb(255, 255, 255)");
  });
});
