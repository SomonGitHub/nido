import { useEffect, useRef, useState, useCallback } from "preact/hooks";
import type { HassObject } from "../types";
import { IconX } from "../icons";

interface ShoppingPanelProps {
  hass: HassObject;
  onClose: () => void;
  topicBase?: string;
}

interface Stroke {
  id: string;
  by: string;
  color: string;
  size: number;
  points: [number, number][];
  t: number;
}

const COLOR_KEY = "nido.shoppingColor";
const SIZE_KEY = "nido.shoppingSize";

function smoothPath(ctx: CanvasRenderingContext2D, points: [number, number][], size: number) {
  if (points.length < 2) return;
  ctx.lineWidth = size;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.beginPath();
  ctx.moveTo(points[0][0], points[0][1]);
  for (let i = 1; i < points.length - 1; i++) {
    const xc = (points[i][0] + points[i + 1][0]) / 2;
    const yc = (points[i][1] + points[i + 1][1]) / 2;
    ctx.quadraticCurveTo(points[i][0], points[i][1], xc, yc);
  }
  const last = points[points.length - 1];
  ctx.lineTo(last[0], last[1]);
  ctx.stroke();
}

export function ShoppingPanel({ hass, onClose, topicBase = "shopping" }: ShoppingPanelProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  const strokesRef = useRef<Stroke[]>([]);
  const currentRef = useRef<Stroke | null>(null);
  const activePointerRef = useRef<number | null>(null);
  const sizeRef = useRef({ w: 0, h: 0 });
  const wakeLockRef = useRef<any>(null);
  const clientIdRef = useRef("nido-" + Math.random().toString(36).slice(2, 8));

  const [color, setColor] = useState<string>(() => localStorage.getItem(COLOR_KEY) || "#1a1410");
  const [size, setSize] = useState<number>(() => parseInt(localStorage.getItem(SIZE_KEY) || "4", 10));

  useEffect(() => {
    if (localStorage.getItem(COLOR_KEY)) return;
    const el = wrapRef.current;
    if (!el) return;
    const inkRaw = getComputedStyle(el).getPropertyValue("--ink-1").trim();
    if (!inkRaw) return;
    const probe = document.createElement("div");
    probe.style.color = inkRaw;
    document.body.appendChild(probe);
    const rgb = getComputedStyle(probe).color;
    document.body.removeChild(probe);
    const m = rgb.match(/\d+/g);
    if (m && m.length >= 3) {
      const hex = "#" + [+m[0], +m[1], +m[2]]
        .map((n) => n.toString(16).padStart(2, "0"))
        .join("");
      setColor(hex);
    }
  }, []);

  const colorRef = useRef(color);
  const sizeStrokeRef = useRef(size);
  useEffect(() => { colorRef.current = color; localStorage.setItem(COLOR_KEY, color); }, [color]);
  useEffect(() => { sizeStrokeRef.current = size; localStorage.setItem(SIZE_KEY, String(size)); }, [size]);

  const fromNorm = useCallback((p: [number, number]): [number, number] => {
    return [p[0] * sizeRef.current.w, p[1] * sizeRef.current.h];
  }, []);

  const redrawAll = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, sizeRef.current.w, sizeRef.current.h);
    for (const s of strokesRef.current) {
      ctx.strokeStyle = s.color;
      smoothPath(ctx, s.points.map(fromNorm), s.size);
    }
    if (currentRef.current) {
      ctx.strokeStyle = currentRef.current.color;
      smoothPath(ctx, currentRef.current.points.map(fromNorm), currentRef.current.size);
    }
  }, [fromNorm]);

  const setupCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const rect = wrap.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    sizeRef.current = { w: rect.width, h: rect.height };
    redrawAll();
  }, [redrawAll]);

  useEffect(() => {
    setupCanvas();
    const ro = new ResizeObserver(setupCanvas);
    if (wrapRef.current) ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, [setupCanvas]);

  useEffect(() => {
    let released = false;
    (async () => {
      if ("wakeLock" in navigator) {
        try {
          const lock = await (navigator as any).wakeLock.request("screen");
          if (released) lock.release(); else wakeLockRef.current = lock;
        } catch (_) { /* ignore */ }
      }
    })();
    return () => {
      released = true;
      if (wakeLockRef.current) { try { wakeLockRef.current.release(); } catch (_) {} wakeLockRef.current = null; }
    };
  }, []);

  const t = useCallback((suffix: string) => `${topicBase}/${suffix}`, [topicBase]);

  const publishStateSnapshot = useCallback(async () => {
    const payload = JSON.stringify({
      strokes: strokesRef.current,
      updatedAt: new Date().toISOString(),
      updatedBy: clientIdRef.current,
    });
    if (payload.length > 200_000) return;
    try {
      await hass.callService("mqtt", "publish", {
        topic: t("state"),
        payload,
        qos: 0,
        retain: true,
      });
    } catch (err) { console.warn("[shopping] state publish failed", err); }
  }, [hass, t]);

  const publishStroke = useCallback(async (stroke: Stroke) => {
    try {
      await hass.callService("mqtt", "publish", {
        topic: t("strokes/add"),
        payload: JSON.stringify(stroke),
        qos: 0,
        retain: false,
      });
    } catch (err) { console.warn("[shopping] add publish failed", err); }
    publishStateSnapshot();
  }, [hass, t, publishStateSnapshot]);

  const publishUndo = useCallback(async (id: string) => {
    try {
      await hass.callService("mqtt", "publish", {
        topic: t("strokes/undo"),
        payload: JSON.stringify({ id, by: clientIdRef.current }),
        qos: 0,
        retain: false,
      });
    } catch (err) { console.warn("[shopping] undo publish failed", err); }
    publishStateSnapshot();
  }, [hass, t, publishStateSnapshot]);

  const publishClear = useCallback(async () => {
    try {
      await hass.callService("mqtt", "publish", {
        topic: t("clear"),
        payload: JSON.stringify({ by: clientIdRef.current, ts: Date.now() }),
        qos: 0,
        retain: false,
      });
    } catch (err) { console.warn("[shopping] clear publish failed", err); }
    publishStateSnapshot();
  }, [hass, t, publishStateSnapshot]);

  useEffect(() => {
    let unsub: (() => void) | null = null;
    let cancelled = false;

    const handle = (msg: any) => {
      try {
        const topic: string = msg.topic;
        const payload = msg.payload ? JSON.parse(msg.payload) : null;
        if (!payload) return;

        if (topic.endsWith("/state")) {
          if (Array.isArray(payload.strokes) && payload.updatedBy !== clientIdRef.current) {
            strokesRef.current = payload.strokes;
            redrawAll();
          }
        } else if (topic.endsWith("/strokes/add")) {
          if (payload.by === clientIdRef.current) return;
          if (payload.points && payload.points.length >= 2) {
            strokesRef.current.push(payload);
            redrawAll();
          }
        } else if (topic.endsWith("/strokes/undo")) {
          if (payload.by === clientIdRef.current) return;
          const i = strokesRef.current.findIndex((s) => s.id === payload.id);
          if (i >= 0) {
            strokesRef.current.splice(i, 1);
            redrawAll();
          }
        } else if (topic.endsWith("/clear")) {
          if (payload.by === clientIdRef.current) return;
          strokesRef.current = [];
          redrawAll();
        }
      } catch (err) { console.warn("[shopping] parse error", err); }
    };

    (async () => {
      try {
        const u = await (hass as any).connection.subscribeMessage(handle, {
          type: "mqtt/subscribe",
          topic: `${topicBase}/#`,
        });
        if (cancelled) { try { u(); } catch (_) {} } else { unsub = u; }
      } catch (err) {
        console.error("[shopping] mqtt subscribe failed", err);
      }
    })();

    return () => {
      cancelled = true;
      if (unsub) { try { unsub(); } catch (_) {} }
    };
  }, [hass, topicBase, redrawAll]);

  const toNorm = useCallback((e: PointerEvent): [number, number] => {
    const canvas = canvasRef.current!;
    const r = canvas.getBoundingClientRect();
    return [(e.clientX - r.left) / r.width, (e.clientY - r.top) / r.height];
  }, []);

  const onPointerDown = useCallback((e: PointerEvent) => {
    if (e.pointerType === "touch" && (e.width > 40 || e.height > 40)) return;
    if (activePointerRef.current !== null) return;
    activePointerRef.current = e.pointerId;
    canvasRef.current?.setPointerCapture(e.pointerId);
    currentRef.current = {
      id: clientIdRef.current + "-" + Date.now(),
      by: clientIdRef.current,
      color: colorRef.current,
      size: sizeStrokeRef.current,
      points: [toNorm(e)],
      t: Date.now(),
    };
    redrawAll();
    e.preventDefault();
  }, [toNorm, redrawAll]);

  const onPointerMove = useCallback((e: PointerEvent) => {
    if (e.pointerId !== activePointerRef.current) return;
    const cur = currentRef.current;
    if (!cur) return;
    cur.points.push(toNorm(e));
    redrawAll();
  }, [toNorm, redrawAll]);

  const onPointerEnd = useCallback((e: PointerEvent) => {
    if (e.pointerId !== activePointerRef.current) return;
    activePointerRef.current = null;
    const stroke = currentRef.current;
    currentRef.current = null;
    if (!stroke || stroke.points.length < 2) { redrawAll(); return; }
    strokesRef.current.push(stroke);
    publishStroke(stroke);
    redrawAll();
  }, [redrawAll, publishStroke]);

  const undoMine = useCallback(() => {
    for (let i = strokesRef.current.length - 1; i >= 0; i--) {
      if (strokesRef.current[i].by === clientIdRef.current) {
        const removed = strokesRef.current.splice(i, 1)[0];
        publishUndo(removed.id);
        redrawAll();
        return;
      }
    }
  }, [publishUndo, redrawAll]);

  const askClear = useCallback(() => {
    if (!confirm("Effacer toute la liste ?")) return;
    strokesRef.current = [];
    redrawAll();
    publishClear();
  }, [redrawAll, publishClear]);

  return (
    <div class="nido-shopping-panel">
      <div class="nido-shopping-panel__backdrop" onClick={onClose} />
      <div class="nido-shopping-panel__content">
        <header class="nido-shopping-panel__header">
          <h2>Liste de courses</h2>
          <button
            type="button"
            class="nido-shopping-panel__close"
            onClick={onClose}
            aria-label="Fermer"
          >
            <IconX size={20} />
          </button>
        </header>

        <div class="nido-shopping-panel__board" ref={wrapRef}>
          <canvas
            ref={canvasRef}
            class="nido-shopping-panel__canvas"
            onPointerDown={onPointerDown as any}
            onPointerMove={onPointerMove as any}
            onPointerUp={onPointerEnd as any}
            onPointerCancel={onPointerEnd as any}
            onPointerLeave={onPointerEnd as any}
          />

          <div class="nido-shopping-panel__toolbar" data-no-drag="true">
            <button
              type="button"
              class="nido-shopping-panel__tool"
              onClick={undoMine}
              aria-label="Annuler mon dernier trait"
              title="Annuler"
            >
              ↶
            </button>
            <input
              type="color"
              class="nido-shopping-panel__color"
              value={color}
              onInput={(e) => setColor((e.target as HTMLInputElement).value)}
              aria-label="Couleur"
            />
            <input
              type="range"
              class="nido-shopping-panel__size"
              min={2}
              max={12}
              step={1}
              value={size}
              onInput={(e) => setSize(parseInt((e.target as HTMLInputElement).value, 10))}
              aria-label="Épaisseur"
            />
            <button
              type="button"
              class="nido-shopping-panel__tool nido-shopping-panel__tool--danger"
              onClick={askClear}
              aria-label="Tout effacer"
              title="Tout effacer"
            >
              🗑
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
