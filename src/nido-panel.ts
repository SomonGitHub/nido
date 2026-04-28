import { render, h } from "preact";
import { App } from "./app";
import type { HassObject, PanelInfo } from "./types";
import { loadTheme } from "./core/storage";
import tokens from "./tokens.css?inline";
import styles from "./styles.css?inline";

const FONTS_HREF =
  "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=JetBrains+Mono:wght@400;500&display=swap";

let fontsInjected = false;
function ensureFonts() {
  if (fontsInjected || typeof document === "undefined") return;
  const exists = document.head.querySelector(`link[href="${FONTS_HREF}"]`);
  if (!exists) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = FONTS_HREF;
    document.head.appendChild(link);
  }
  fontsInjected = true;
}

class NidoPanel extends HTMLElement {
  private _hass: HassObject | null = null;
  private _narrow = false;
  private _route: { prefix: string; path: string } = { prefix: "", path: "" };
  private _panel: PanelInfo = {};
  private _mountPoint: HTMLDivElement;

  constructor() {
    super();
    ensureFonts();

    const shadow = this.attachShadow({ mode: "open" });
    const style = document.createElement("style");
    style.textContent = `${tokens}\n${styles}`;
    this._mountPoint = document.createElement("div");
    this._mountPoint.className = "nido-root-mount";
    shadow.append(style, this._mountPoint);
  }

  set hass(value: HassObject) {
    this._hass = value;
    this._render();
  }
  get hass(): HassObject | null { return this._hass; }

  set narrow(value: boolean) { this._narrow = value; }
  get narrow(): boolean { return this._narrow; }

  set route(value: { prefix: string; path: string }) { this._route = value; }
  get route() { return this._route; }

  set panel(value: PanelInfo) { this._panel = value; }
  get panel(): PanelInfo { return this._panel; }

  connectedCallback() {
    const { theme, mode } = loadTheme();
    if (!this.hasAttribute("data-theme")) this.setAttribute("data-theme", theme);
    if (!this.hasAttribute("data-mode")) this.setAttribute("data-mode", mode);
    this._render();
  }
  disconnectedCallback() { render(null, this._mountPoint); }

  applyTheme(theme: string, mode: string) {
    this.setAttribute("data-theme", theme);
    this.setAttribute("data-mode", mode);
  }

  private _render() {
    render(h(App, { hass: this._hass, host: this }), this._mountPoint);
  }
}

if (!customElements.get("nido-panel")) {
  customElements.define("nido-panel", NidoPanel);
}

console.info(
  "%c NIDO %c v0.1.2 ",
  "background:#c75a2a;color:#fff;padding:2px 6px;border-radius:3px 0 0 3px;",
  "background:#1a1410;color:#fff;padding:2px 6px;border-radius:0 3px 3px 0;",
);
