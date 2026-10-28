import dmSans from "@fontsource-variable/dm-sans/files/dm-sans-latin-opsz-normal.woff2?inline";
import serif from "@fontsource/instrument-serif/files/instrument-serif-latin-400-normal.woff2?inline";
import serifItalic from "@fontsource/instrument-serif/files/instrument-serif-latin-400-italic.woff2?inline";
import mono from "@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2?inline";
import baloo from "@fontsource-variable/baloo-2/files/baloo-2-latin-wght-normal.woff2?inline";
import comfortaa from "@fontsource/comfortaa/files/comfortaa-latin-700-normal.woff2?inline";

/* Polices embarquées (sous-ensemble latin, accents français compris) : Nido
   s'affiche à l'identique sans Internet et ne contacte pas Google Fonts.
   Les @font-face vont dans le document : Chrome les ignore dans un shadow root. */
const FACES: [family: string, src: string, weight: string, style?: string][] = [
  ["DM Sans", dmSans, "100 1000"],
  ["Instrument Serif", serif, "400"],
  ["Instrument Serif", serifItalic, "400", "italic"],
  ["JetBrains Mono", mono, "100 800"],
  ["Baloo 2", baloo, "400 800"],
  ["Comfortaa", comfortaa, "700"],
];

export const FONT_FACES_CSS = FACES.map(
  ([family, src, weight, style = "normal"]) =>
    `@font-face{font-family:"${family}";font-style:${style};font-weight:${weight};font-display:swap;src:url(${src}) format("woff2")}`,
).join("\n");
