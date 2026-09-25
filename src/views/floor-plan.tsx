import { useEffect, useMemo, useRef, useState } from "preact/hooks";
import type { JSX } from "preact";
import type { HassObject } from "../types";
import type { Area, Floor } from "../core/areas";
import {
  detectOccupancy,
  extractRoomStats,
  summarizeRoom,
  type RoomOccupancy,
  type ResolvedEntity,
  type RoomAlert,
  type RoomStats,
  type RoomSummary,
} from "../core/entities";
import {
  groupAreasByFloor,
  openingSegment,
  resolveLayout,
  type PlacedOpening,
  type PlanRect,
} from "../core/floor-plan";
import type { HousePlan } from "../core/plan-store";
import { temperatureTint, tintStyle, type MeasureTint } from "../core/measure-tint";
import { loadPlanLayers, savePlanLayers, type PlanLayers } from "../core/storage";
import { durationLabel } from "../core/time-ago";
import { useMinuteTick } from "../core/use-minute-tick";
import {
  IconActivity,
  IconArrowRight,
  IconBlind,
  IconEdit,
  IconFit,
  IconLightOn,
  IconMinus,
  IconPlus,
  IconThermostat,
  IconWindow,
} from "../icons";

export type FloorPlanVariant = "wide" | "phone" | "compact";

interface FloorPlanProps {
  hass: HassObject;
  /** Pièces peuplées, déjà dans l'ordre choisi par l'utilisateur. */
  areas: Area[];
  floors: Floor[];
  /** Entités exposées, groupées par pièce. */
  byArea: Map<string | null, ResolvedEntity[]>;
  variant: FloorPlanVariant;
  plan: HousePlan;
  onOpenRoom: (areaId: string) => void;
  /** Absent : pas de bouton « Modifier le plan » (téléphone, Echo Show, non-admin). */
  onEdit?: (floorKey: string) => void;
}

interface RoomInfo {
  area: Area;
  summary: RoomSummary;
  stats: RoomStats;
  tempTint: MeasureTint | null;
  opening: RoomAlert | null;
  openingSince: number | null;
  critical: RoomAlert | null;
  occupancy: RoomOccupancy | null;
  /** Minutes depuis que le dernier détecteur est retombé, s'il y a peu. */
  motionAgo: number | null;
}

const PAD = 16;
const MAX_ZOOM = 4;
const ZOOM_STEP = 1.6;
const DRAG_THRESHOLD = 6;
/* En dessous, un nom ne tient plus dans la pièce : on ne garde que la couleur
   et les pastilles. Seuils en pixels par case de grille, donc indépendants de
   l'écran : c'est le zoom qui fait apparaître le détail. */
const LOD_LABELS = 28;
const LOD_DETAIL = 50;

const OPENING_KINDS = new Set(["window", "door"]);
const MOTION_CLASSES = new Set(["motion", "occupancy", "presence"]);
/* Au-delà, la trace s'efface : « mouvement il y a 40 min » ne dit plus
   qu'une pièce est habitée. */
const MOTION_RECENT_MIN = 10;

function motionAgo(entities: ResolvedEntity[], now: Date): number | null {
  let ago: number | null = null;
  for (const e of entities) {
    if (e.domain !== "binary_sensor" || e.state.state !== "off") continue;
    const dc = e.state.attributes.device_class as string | undefined;
    if (!dc || !MOTION_CLASSES.has(dc)) continue;
    const t = new Date(e.state.last_changed).getTime();
    if (Number.isNaN(t)) continue;
    const minutes = Math.max(0, Math.floor((now.getTime() - t) / 60_000));
    if (minutes <= MOTION_RECENT_MIN && (ago === null || minutes < ago)) ago = minutes;
  }
  return ago;
}
const OPENING_CLASSES = new Set(["window", "door", "garage_door"]);

function openingSince(entities: ResolvedEntity[], now: Date): number | null {
  let since: number | null = null;
  for (const e of entities) {
    if (e.domain !== "binary_sensor" || e.state.state !== "on") continue;
    const dc = e.state.attributes.device_class as string | undefined;
    if (!dc || !OPENING_CLASSES.has(dc)) continue;
    const t = new Date(e.state.last_changed).getTime();
    if (Number.isNaN(t)) continue;
    const minutes = Math.max(0, Math.floor((now.getTime() - t) / 60_000));
    if (since === null || minutes > since) since = minutes;
  }
  return since;
}

function formatValue(raw: string): string {
  const n = parseFloat(raw);
  if (!Number.isFinite(n)) return raw;
  return (Math.round(n * 10) / 10).toLocaleString("fr-FR");
}

function statusLine(s: RoomSummary): string {
  const parts: string[] = [];
  if (s.lightsOn > 0) parts.push(`${s.lightsOn} lumière${s.lightsOn > 1 ? "s" : ""} allumée${s.lightsOn > 1 ? "s" : ""}`);
  if (s.coversOpen > 0) parts.push(`${s.coversOpen} volet${s.coversOpen > 1 ? "s" : ""} ouvert${s.coversOpen > 1 ? "s" : ""}`);
  if (s.mediaPlaying) parts.push("musique en cours");
  if (parts.length === 0) return "Tout est éteint";
  const text = parts.join(" · ");
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function clampAxis(pos: number, plan: number, viewport: number): number {
  if (plan + PAD * 2 <= viewport) return (viewport - plan) / 2;
  return Math.min(PAD, Math.max(viewport - plan - PAD, pos));
}

function legendGradient(): string {
  const stops: string[] = [];
  for (let v = 14; v <= 30; v += 2) {
    const t = temperatureTint(String(v), "°C");
    if (!t) continue;
    stops.push(
      `oklch(var(--plan-fill-l) calc(${t.chroma.toFixed(3)} * var(--plan-fill-cf)) ${t.hue.toFixed(1)}) ${Math.round(((v - 14) / 16) * 100)}%`,
    );
  }
  return `linear-gradient(90deg, ${stops.join(", ")})`;
}

export function FloorPlan({ hass, areas, floors, byArea, variant, plan, onOpenRoom, onEdit }: FloorPlanProps) {
  const now = useMinuteTick();
  const planFloors = useMemo(() => groupAreasByFloor(areas, floors), [areas, floors]);
  const [floorKey, setFloorKey] = useState<string | null>(null);
  const floor = planFloors.find((f) => f.key === floorKey) ?? planFloors[0];
  const [selected, setSelected] = useState<string | null>(null);
  const [layers, setLayers] = useState<PlanLayers>(() => loadPlanLayers());

  const layout = useMemo(
    () =>
      resolveLayout(floor?.areas ?? [], floor ? plan.floors[floor.key] : undefined, (a) =>
        byArea.get(a.area_id)?.length ?? 1,
      ),
    [floor, plan, byArea],
  );

  const rooms = useMemo(() => {
    const map = new Map<string, RoomInfo>();
    for (const r of layout.rooms) {
      const list = byArea.get(r.area.area_id) ?? [];
      const summary = summarizeRoom(list);
      const stats = extractRoomStats(list);
      map.set(r.area.area_id, {
        area: r.area,
        summary,
        stats,
        tempTint: stats.temperature ? temperatureTint(stats.temperature.value, stats.temperature.unit) : null,
        opening: summary.alerts.find((a) => OPENING_KINDS.has(a.kind)) ?? null,
        openingSince: openingSince(list, now),
        critical: summary.alerts.find((a) => !OPENING_KINDS.has(a.kind)) ?? null,
        occupancy: detectOccupancy(list),
        motionAgo: motionAgo(list, now),
      });
    }
    return map;
  }, [layout, byArea, now]);

  const selectedId =
    selected && rooms.has(selected) ? selected : (layout.rooms[0]?.area.area_id ?? null);
  const selectedRoom = selectedId ? rooms.get(selectedId) ?? null : null;

  const toggleLayer = (key: keyof PlanLayers) => {
    const next = { ...layers, [key]: !layers[key] };
    setLayers(next);
    savePlanLayers(next);
  };

  /* ─── Zoom et déplacement ─── */
  const viewportRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [view, setView] = useState<{ z: number; x: number; y: number } | null>(null);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    /* Mesure immédiate : un onglet en arrière-plan ne rend aucune image, et
       ResizeObserver n'y rappelle qu'au premier rendu visible. */
    setSize({ w: el.clientWidth, h: el.clientHeight });
    if (typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(([entry]) => {
      setSize({ w: entry.contentRect.width, h: entry.contentRect.height });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => setView(null), [floor?.key]);

  const fit =
    size.w > 0 && size.h > 0
      ? Math.max(4, Math.min((size.w - PAD * 2) / layout.cols, (size.h - PAD * 2) / layout.rows))
      : 0;
  const zoom = view?.z ?? 1;
  const cell = fit * zoom;
  const planW = layout.cols * cell;
  const planH = layout.rows * cell;
  const originX = view ? clampAxis(view.x, planW, size.w) : (size.w - planW) / 2;
  const originY = view ? clampAxis(view.y, planH, size.h) : (size.h - planH) / 2;
  const lod: "overview" | "labels" | "detail" =
    cell >= LOD_DETAIL ? "detail" : cell >= LOD_LABELS ? "labels" : "overview";

  const zoomAt = (factor: number, px: number, py: number) => {
    const z2 = Math.min(MAX_ZOOM, Math.max(1, zoom * factor));
    if (z2 <= 1.001) {
      setView(null);
      return;
    }
    const k = z2 / zoom;
    setView({ z: z2, x: px - (px - originX) * k, y: py - (py - originY) * k });
  };

  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const gesture = useRef<{
    kind: "pan" | "pinch";
    moved: boolean;
    sx: number;
    sy: number;
    ox: number;
    oy: number;
    z: number;
    dist: number;
  } | null>(null);
  const suppressClick = useRef(false);

  const local = (x: number, y: number) => {
    const r = viewportRef.current!.getBoundingClientRect();
    return { x: x - r.left, y: y - r.top };
  };

  const startGesture = () => {
    const pts = [...pointers.current.values()];
    if (pts.length === 1) {
      gesture.current = { kind: "pan", moved: false, sx: pts[0].x, sy: pts[0].y, ox: originX, oy: originY, z: zoom, dist: 0 };
    } else if (pts.length === 2) {
      const mid = local((pts[0].x + pts[1].x) / 2, (pts[0].y + pts[1].y) / 2);
      gesture.current = {
        kind: "pinch",
        moved: true,
        sx: mid.x,
        sy: mid.y,
        ox: originX,
        oy: originY,
        z: zoom,
        dist: Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y),
      };
    }
  };

  const onPointerDown = (e: JSX.TargetedPointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    startGesture();
  };

  const onPointerMove = (e: JSX.TargetedPointerEvent<HTMLDivElement>) => {
    if (!pointers.current.has(e.pointerId)) return;
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    const g = gesture.current;
    if (!g) return;
    const pts = [...pointers.current.values()];
    if (g.kind === "pinch" && pts.length >= 2) {
      const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      const mid = local((pts[0].x + pts[1].x) / 2, (pts[0].y + pts[1].y) / 2);
      const z2 = Math.min(MAX_ZOOM, Math.max(1, (g.z * dist) / Math.max(1, g.dist)));
      const k = z2 / g.z;
      setView(z2 <= 1.001 ? null : { z: z2, x: mid.x - (g.sx - g.ox) * k, y: mid.y - (g.sy - g.oy) * k });
      return;
    }
    if (g.kind !== "pan") return;
    const dx = e.clientX - g.sx;
    const dy = e.clientY - g.sy;
    if (!g.moved && Math.hypot(dx, dy) > DRAG_THRESHOLD) {
      g.moved = true;
      try {
        viewportRef.current?.setPointerCapture(e.pointerId);
      } catch {
        /* pointeur déjà relâché */
      }
    }
    if (g.moved && g.z > 1) setView({ z: g.z, x: g.ox + dx, y: g.oy + dy });
  };

  const onPointerEnd = (e: JSX.TargetedPointerEvent<HTMLDivElement>) => {
    if (!pointers.current.has(e.pointerId)) return;
    pointers.current.delete(e.pointerId);
    if (gesture.current?.moved) suppressClick.current = true;
    if (pointers.current.size > 0) startGesture();
    else gesture.current = null;
  };

  const onClickCapture = (e: JSX.TargetedMouseEvent<HTMLDivElement>) => {
    if (!suppressClick.current) return;
    suppressClick.current = false;
    e.stopPropagation();
    e.preventDefault();
  };

  const onWheel = (e: JSX.TargetedWheelEvent<HTMLDivElement>) => {
    if (!e.ctrlKey && !e.metaKey) return;
    e.preventDefault();
    const p = local(e.clientX, e.clientY);
    zoomAt(Math.exp(-e.deltaY * 0.01), p.x, p.y);
  };

  const onDblClick = (e: JSX.TargetedMouseEvent<HTMLDivElement>) => {
    const p = local(e.clientX, e.clientY);
    zoomAt(ZOOM_STEP, p.x, p.y);
  };

  const zoomIn = () => zoomAt(ZOOM_STEP, size.w / 2, size.h / 2);
  const zoomOut = () => zoomAt(1 / ZOOM_STEP, size.w / 2, size.h / 2);

  /* ─── Actions ─── */
  const toggleLights = (info: RoomInfo) => {
    const ids = info.summary.lightIds;
    if (ids.length === 0) return;
    hass.callService("light", info.summary.lightsOn > 0 ? "turn_off" : "turn_on", { entity_id: ids });
  };
  const toggleCovers = (info: RoomInfo) => {
    const ids = info.summary.coverIds;
    if (ids.length === 0) return;
    hass.callService("cover", info.summary.coversOpen > 0 ? "close_cover" : "open_cover", { entity_id: ids });
  };

  if (!floor) return null;

  const floorTabs = planFloors.length > 1 && (
    <div class="nido-plan__floors" role="group" aria-label="Étage">
      {planFloors.map((f) => (
        <button
          key={f.key}
          type="button"
          class={`nido-plan__floor ${f.key === floor.key ? "is-active" : ""}`}
          aria-pressed={f.key === floor.key}
          onClick={() => {
            setFloorKey(f.key);
            setSelected(null);
          }}
        >
          {f.label}
        </button>
      ))}
    </div>
  );

  const layerButtons = (
    <div class="nido-plan__layers" role="group" aria-label="Calques">
      {(
        [
          ["temperature", "Température", IconThermostat],
          ["lights", "Lumières", IconLightOn],
          ["openings", "Ouvrants", IconWindow],
          ["motion", "Mouvement", IconActivity],
        ] as const
      ).map(([key, label, Ico]) => (
        <button
          key={key}
          type="button"
          class={`nido-plan__layer ${layers[key] ? "is-on" : ""}`}
          aria-pressed={layers[key]}
          aria-label={variant === "wide" ? undefined : `Calque ${label.toLowerCase()}`}
          title={label}
          onClick={() => toggleLayer(key)}
        >
          <Ico size={variant === "compact" ? 22 : 16} />
          {variant === "wide" && <span>{label}</span>}
        </button>
      ))}
    </div>
  );

  const zoomButtons = (
    <div class="nido-plan__zoom">
      <button type="button" class="nido-plan__zoom-btn" aria-label="Zoomer" onClick={zoomIn} disabled={zoom >= MAX_ZOOM}>
        <IconPlus size={18} />
      </button>
      <button type="button" class="nido-plan__zoom-btn" aria-label="Dézoomer" onClick={zoomOut} disabled={!view}>
        <IconMinus size={18} />
      </button>
      <button type="button" class="nido-plan__zoom-btn" aria-label="Ajuster à l'écran" onClick={() => setView(null)} disabled={!view}>
        <IconFit size={18} />
      </button>
    </div>
  );

  const planView = (
    <div
      class={`nido-plan__viewport ${view ? "is-zoomed" : ""}`}
      ref={viewportRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerEnd}
      onPointerCancel={onPointerEnd}
      onClickCapture={onClickCapture}
      onWheel={onWheel}
      onDblClick={onDblClick}
    >
      {fit > 0 && (
        <div
          class="nido-plan__house"
          data-lod={lod}
          data-custom={layout.custom ? "true" : "false"}
          style={{ left: `${originX}px`, top: `${originY}px`, width: `${planW}px`, height: `${planH}px` }}
        >
          {layout.rooms.map((r) => {
            const info = rooms.get(r.area.area_id)!;
            return r.rects.map((rect, i) => (
              <PlanRoom
                key={`${r.area.area_id}-${i}`}
                info={info}
                rect={rect}
                cell={cell}
                labelled={i === 0}
                lod={lod}
                layers={layers}
                selected={r.area.area_id === selectedId}
                onSelect={() => setSelected(r.area.area_id)}
              />
            ));
          })}
          {layout.openings.map((o) => {
            const room = layout.rooms.find((r) => r.area.area_id === o.area_id);
            const rect = room?.rects[o.rect] ?? room?.rects[0];
            if (!rect) return null;
            return (
              <PlanOpeningMark
                key={o.id}
                opening={o}
                rect={rect}
                cell={cell}
                open={layers.openings && !!o.entity_id && hass.states[o.entity_id]?.state === "on"}
              />
            );
          })}
        </div>
      )}
      {view && <span class="nido-plan__zoom-label">Zoom × {zoom.toFixed(1).replace(".", ",")}</span>}
    </div>
  );

  if (variant === "compact") {
    return (
      <div class="nido-plan nido-plan--compact">
        <div class="nido-plan__rail">
          {floorTabs}
          {layerButtons}
          {selectedRoom && (
            <div class="nido-plan__mini">
              <div class="nido-plan__mini-name">{selectedRoom.area.name}</div>
              {selectedRoom.stats.temperature && (
                <div class="nido-plan__mini-temp">
                  {formatValue(selectedRoom.stats.temperature.value)}°
                  {selectedRoom.stats.humidity && (
                    <span>{formatValue(selectedRoom.stats.humidity.value)} %</span>
                  )}
                </div>
              )}
              <button type="button" class="nido-plan__open" onClick={() => onOpenRoom(selectedRoom.area.area_id)}>
                Ouvrir <IconArrowRight size={16} />
              </button>
            </div>
          )}
        </div>
        <div class="nido-plan__stage">
          {planView}
          {zoomButtons}
        </div>
      </div>
    );
  }

  const panel = selectedRoom && (
    <RoomPanel
      info={selectedRoom}
      floorLabel={floor.label}
      compact={variant === "phone"}
      onToggleLights={() => toggleLights(selectedRoom)}
      onToggleCovers={() => toggleCovers(selectedRoom)}
      onOpen={() => onOpenRoom(selectedRoom.area.area_id)}
    />
  );

  if (variant === "phone") {
    return (
      <div class="nido-plan nido-plan--phone">
        <div class="nido-plan__bar">
          {floorTabs}
          {layerButtons}
        </div>
        <div class="nido-plan__stage">
          {planView}
          {zoomButtons}
        </div>
        {panel}
      </div>
    );
  }

  const floorSummary = summarizeFloor([...rooms.values()]);
  return (
    <div class="nido-plan nido-plan--wide">
      <div class="nido-plan__bar">
        {layerButtons}
        <div class="nido-plan__bar-end">
          {onEdit && (
            <button type="button" class="nido-plan__edit" onClick={() => onEdit(floor.key)}>
              <IconEdit size={16} />
              Modifier le plan
            </button>
          )}
          {floorTabs}
        </div>
      </div>
      <div class="nido-plan__body">
        <div class="nido-plan__card">
          <div class="nido-plan__stage">{planView}</div>
          <div class="nido-plan__footer">
            {layers.temperature ? (
              <div class="nido-plan__legend">
                <span>16°</span>
                <span class="nido-plan__legend-bar" style={{ background: legendGradient() }} aria-hidden="true" />
                <span>28°</span>
              </div>
            ) : (
              <span class="nido-plan__legend">Calque température masqué</span>
            )}
            {zoomButtons}
          </div>
        </div>
        <div class="nido-plan__side">
          {panel}
          <div class="nido-plan__summary">
            <div class="nido-plan__eyebrow">{floor.label}</div>
            <div class="nido-plan__summary-main">
              <span class="nido-plan__summary-value">{floorSummary.lights}</span>
              <span>{floorSummary.lights > 1 ? "lumières allumées" : "lumière allumée"}</span>
            </div>
            <div class="nido-plan__summary-sub">
              {floorSummary.openings > 0
                ? `${floorSummary.openings} ouvrant${floorSummary.openings > 1 ? "s" : ""} ouvert${floorSummary.openings > 1 ? "s" : ""}`
                : "Tout est fermé"}
              {floorSummary.occupied > 0 &&
                ` · ${floorSummary.occupied} pièce${floorSummary.occupied > 1 ? "s" : ""} occupée${floorSummary.occupied > 1 ? "s" : ""}`}
              {floorSummary.avgTemp !== null && ` · Moyenne ${floorSummary.avgTemp.toLocaleString("fr-FR")} °C`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlanOpeningMark({
  opening,
  rect,
  cell,
  open,
}: {
  opening: PlacedOpening;
  rect: PlanRect;
  cell: number;
  open: boolean;
}) {
  const seg = openingSegment(rect, opening);
  const thick = open ? 7 : 6;
  const style = seg.horizontal
    ? { left: `${seg.x * cell}px`, top: `${seg.y * cell - thick / 2}px`, width: `${seg.length * cell}px`, height: `${thick}px` }
    : { left: `${seg.x * cell - thick / 2}px`, top: `${seg.y * cell}px`, width: `${thick}px`, height: `${seg.length * cell}px` };
  return (
    <span
      class="nido-plan__opening"
      data-kind={opening.kind}
      data-open={open ? "true" : "false"}
      style={style}
      aria-hidden="true"
    />
  );
}

function summarizeFloor(infos: RoomInfo[]): {
  lights: number;
  openings: number;
  occupied: number;
  avgTemp: number | null;
} {
  let lights = 0;
  let openings = 0;
  let occupied = 0;
  const temps: number[] = [];
  for (const r of infos) {
    lights += r.summary.lightsOn;
    if (r.opening) openings++;
    if (r.occupancy) occupied++;
    const t = r.stats.temperature ? parseFloat(r.stats.temperature.value) : NaN;
    if (Number.isFinite(t)) temps.push(t);
  }
  const avgTemp = temps.length ? Math.round((temps.reduce((s, t) => s + t, 0) / temps.length) * 10) / 10 : null;
  return { lights, openings, occupied, avgTemp };
}

interface PlanRoomProps {
  info: RoomInfo;
  rect: PlanRect;
  cell: number;
  labelled: boolean;
  lod: "overview" | "labels" | "detail";
  layers: PlanLayers;
  selected: boolean;
  onSelect: () => void;
}

function PlanRoom({ info, rect, cell, labelled, lod: planLod, layers, selected, onSelect }: PlanRoomProps) {
  const lit = layers.lights && info.summary.lightsOn > 0;
  const opening = layers.openings ? info.opening : null;
  const alert = info.critical ?? opening;
  const tinted = layers.temperature && info.tempTint !== null;
  const motion: "active" | "recent" | null = !layers.motion
    ? null
    : info.occupancy
      ? "active"
      : info.motionAgo !== null
        ? "recent"
        : null;
  /* En vue d'ensemble, une grande pièce garde son nom en petit : sans lui, un
     plan de téléphone n'est qu'une mosaïque de couleurs. Une pièce étroite
     (WC, cellier) ne loge qu'une ligne, même zoomée. */
  const roomFits = rect.w * cell >= 64 && rect.h * cell >= 34;
  const lod = planLod === "overview" && roomFits ? "labels" : planLod;
  const narrow = rect.w < 4 || rect.h < 3 || planLod === "overview";
  const temp = info.stats.temperature;
  const aria = [
    info.area.name,
    temp ? `${formatValue(temp.value)} degrés` : null,
    info.summary.lightsOn > 0 ? statusLine(info.summary) : null,
    info.occupancy?.label ?? null,
    alert?.label ?? null,
  ]
    .filter(Boolean)
    .join(", ");

  const style: Record<string, string> = {
    left: `${rect.x * cell}px`,
    top: `${rect.y * cell}px`,
    width: `${rect.w * cell}px`,
    height: `${rect.h * cell}px`,
    ...(tinted ? tintStyle(info.tempTint) : {}),
  };

  return (
    <button
      type="button"
      class="nido-plan__room"
      data-tinted={tinted ? "true" : "false"}
      data-lit={lit ? "true" : "false"}
      data-alert={alert ? "true" : "false"}
      data-selected={selected ? "true" : "false"}
      data-narrow={narrow ? "true" : "false"}
      data-motion={motion ?? "none"}
      aria-label={aria}
      aria-pressed={selected}
      style={style}
      onClick={onSelect}
    >
      {lit && <span class="nido-plan__glow" aria-hidden="true" />}
      {motion && labelled && (
        <span
          class="nido-plan__motion"
          data-state={motion}
          aria-hidden="true"
          style={{ "--motion-size": `${Math.max(18, Math.min(160, Math.min(rect.w, rect.h) * cell * 0.55))}px` }}
        />
      )}
      {labelled && lod === "overview" && (
        <span class="nido-plan__dots" aria-hidden="true">
          {motion && <span class="nido-plan__dot nido-plan__dot--motion" data-state={motion} />}
          {lit && <span class="nido-plan__dot nido-plan__dot--light" />}
          {alert && <span class="nido-plan__dot nido-plan__dot--alert" />}
        </span>
      )}
      {labelled && lod !== "overview" && (
        <>
          <span class="nido-plan__room-head">
            <span class="nido-plan__room-name">{info.area.name}</span>
            {lit && !narrow && (
              <span class="nido-plan__bulb">
                <IconLightOn size={12} />
                {info.summary.lightsOn}
              </span>
            )}
            {narrow && (lit || alert || motion) && (
              <span class="nido-plan__dots" aria-hidden="true">
                {motion && <span class="nido-plan__dot nido-plan__dot--motion" data-state={motion} />}
                {lit && <span class="nido-plan__dot nido-plan__dot--light" />}
                {alert && <span class="nido-plan__dot nido-plan__dot--alert" />}
              </span>
            )}
          </span>
          <span class="nido-plan__room-foot">
            {alert && !narrow && (
              <span class="nido-plan__alert">
                <IconWindow size={11} />
                {alert === opening && info.openingSince !== null
                  ? `Ouverte · ${durationLabel(info.openingSince)}`
                  : alert.label}
              </span>
            )}
            {motion && lod === "detail" && !narrow && (
              <span class="nido-plan__motion-label">
                <IconActivity size={11} />
                {motion === "active" ? info.occupancy!.label : `Mouvement il y a ${durationLabel(info.motionAgo!)}`}
              </span>
            )}
            {temp && (
              <span class="nido-plan__temp">
                <span class="nido-plan__temp-value">{formatValue(temp.value)}°</span>
                {lod === "detail" && !narrow && info.stats.humidity && (
                  <span class="nido-plan__hum">{formatValue(info.stats.humidity.value)} %</span>
                )}
              </span>
            )}
          </span>
        </>
      )}
    </button>
  );
}

interface RoomPanelProps {
  info: RoomInfo;
  floorLabel: string;
  compact: boolean;
  onToggleLights: () => void;
  onToggleCovers: () => void;
  onOpen: () => void;
}

function RoomPanel({ info, floorLabel, compact, onToggleLights, onToggleCovers, onOpen }: RoomPanelProps) {
  const { summary, stats } = info;
  const alert = info.critical ?? info.opening;
  const tempStyle = info.tempTint ? tintStyle(info.tempTint) : undefined;
  return (
    <div class={`nido-plan__panel ${compact ? "nido-plan__panel--sheet" : ""}`}>
      <div class="nido-plan__panel-head">
        <div>
          <div class="nido-plan__eyebrow">{floorLabel}</div>
          <div class="nido-plan__panel-name">{info.area.name}</div>
          <div class="nido-plan__panel-status">{statusLine(summary)}</div>
          {(info.occupancy || info.motionAgo !== null) && (
            <div class="nido-plan__panel-motion" data-state={info.occupancy ? "active" : "recent"}>
              <span class="nido-plan__panel-motion-dot" aria-hidden="true" />
              {info.occupancy ? info.occupancy.label : `Mouvement il y a ${durationLabel(info.motionAgo!)}`}
            </div>
          )}
        </div>
      </div>
      {alert && (
        <div class="nido-plan__panel-alert">
          <IconWindow size={16} />
          {alert === info.opening && info.openingSince !== null
            ? `${alert.label} depuis ${durationLabel(info.openingSince)}`
            : alert.label}
        </div>
      )}
      <div class="nido-plan__panel-stats">
        <div class="nido-plan__stat" data-tinted={tempStyle ? "true" : "false"} style={tempStyle}>
          <span class="nido-plan__eyebrow">Temp.</span>
          <span class="nido-plan__stat-value">
            {stats.temperature ? formatValue(stats.temperature.value) : "—"}
            <small>°</small>
          </span>
        </div>
        <div class="nido-plan__stat">
          <span class="nido-plan__eyebrow">Humid.</span>
          <span class="nido-plan__stat-value">
            {stats.humidity ? formatValue(stats.humidity.value) : "—"}
            <small>%</small>
          </span>
        </div>
        <div class="nido-plan__stat">
          <span class="nido-plan__eyebrow">Lumino.</span>
          <span class="nido-plan__stat-value">
            {stats.illuminance ? formatValue(stats.illuminance.value) : "—"}
            <small>lx</small>
          </span>
        </div>
      </div>
      <div class="nido-plan__panel-actions">
        {summary.lightIds.length > 0 && (
          <button type="button" class="nido-plan__action" onClick={onToggleLights}>
            <IconLightOn size={16} />
            {summary.lightsOn > 0 ? "Éteindre" : "Allumer"}
          </button>
        )}
        {summary.coverIds.length > 0 && (
          <button
            type="button"
            class="nido-plan__action nido-plan__action--icon"
            aria-label={summary.coversOpen > 0 ? "Fermer les volets" : "Ouvrir les volets"}
            title={summary.coversOpen > 0 ? "Fermer les volets" : "Ouvrir les volets"}
            onClick={onToggleCovers}
          >
            <IconBlind size={18} />
          </button>
        )}
        <button type="button" class="nido-plan__open" onClick={onOpen}>
          Ouvrir la pièce <IconArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
