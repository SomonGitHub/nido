import { useEffect, useMemo, useRef, useState } from "preact/hooks";
import type { JSX } from "preact";
import type { ResolvedEntity } from "../core/entities";
import {
  areasOnFloor,
  autoLayout,
  clampToRoom,
  floorKind,
  openingSegment,
  PLACEABLE_DOMAINS,
  rectsOverlap,
  roomWalls,
  wallLength,
  wallStyle,
  type FloorKind,
  type PlanFloor,
  type PlanRect,
} from "../core/floor-plan";
import type { HousePlan, OpeningKind, PlanDevice, PlanOpening, StoredFloor, WallSide } from "../core/plan-store";
import { DOMAIN_ICON, DOMAIN_LABEL } from "../views/shared";
import { DoorSwing } from "../views/floor-plan";
import {
  IconArrowLeft,
  IconCheck,
  IconDoor,
  IconLShape,
  IconMinus,
  IconPlus,
  IconTrash,
  IconWindow,
} from "../icons";

interface PlanEditorProps {
  floors: PlanFloor[];
  byArea: Map<string | null, ResolvedEntity[]>;
  plan: HousePlan;
  initialFloor: string;
  /** MQTT joignable : l'enregistrement part vers tous les écrans. */
  synced: boolean;
  onSave: (plan: HousePlan) => void;
  onClose: () => void;
}

type Rooms = Record<string, PlanRect[]>;
type Handle = "nw" | "n" | "ne" | "e" | "se" | "s" | "sw" | "w";

type Selection =
  | { kind: "room"; areaId: string; rect: number }
  | { kind: "opening"; areaId: string; id: string }
  | { kind: "device"; areaId: string; id: string };

interface DeviceDrag {
  areaId: string;
  id: string;
  sx: number;
  sy: number;
  dx: number;
  dy: number;
}

const DEVICE_STEP = 0.5;

interface Drag {
  mode: "move" | "resize";
  areaId: string;
  rect: number;
  handle: Handle | null;
  sx: number;
  sy: number;
  dx: number;
  dy: number;
}

const MIN_COLS = 20;
const MIN_ROWS = 12;
const MARGIN = 3;
const MIN_CELL = 14;
/* Marge intérieure de la zone de dessin : les poignées débordent de 11 px. */
const FIELD_PAD = 14;
const MAX_CELL = 48;
const OPENING_STEP = 0.5;
const HANDLES: [Handle, number, number][] = [
  ["nw", 0, 0], ["n", 0.5, 0], ["ne", 1, 0], ["e", 1, 0.5],
  ["se", 1, 1], ["s", 0.5, 1], ["sw", 0, 1], ["w", 0, 0.5],
];
const HANDLE_CURSOR: Record<Handle, string> = {
  nw: "nwse-resize", se: "nwse-resize", ne: "nesw-resize", sw: "nesw-resize",
  n: "ns-resize", s: "ns-resize", e: "ew-resize", w: "ew-resize",
};
const SIDE_LABEL: Record<WallSide, string> = { top: "Haut", right: "Droite", bottom: "Bas", left: "Gauche" };
const OPENING_CLASSES: Record<OpeningKind, Set<string>> = {
  window: new Set(["window"]),
  door: new Set(["door", "garage_door"]),
  french: new Set(["door", "window"]),
};
const OPENING_LABEL: Record<OpeningKind, string> = { window: "Fenêtre", door: "Porte", french: "Porte-fenêtre" };
const SURFACE_LABEL: Record<FloorKind, string> = { wood: "Parquet", tile: "Carrelage", concrete: "Béton" };

function seedDraft(
  floors: PlanFloor[],
  plan: HousePlan,
  byArea: Map<string | null, ResolvedEntity[]>,
): Record<string, StoredFloor> {
  const out: Record<string, StoredFloor> = {};
  for (const f of floors) {
    const stored = plan.floors[f.key];
    if (stored && f.areas.some((a) => stored.rooms[a.area_id])) {
      out[f.key] = {
        rooms: { ...stored.rooms },
        openings: { ...stored.openings },
        devices: { ...stored.devices },
        surfaces: { ...stored.surfaces },
      };
      continue;
    }
    /* Un étage jamais dessiné part du placement automatique : on ajuste un plan
       existant plutôt que de tout poser à la main sur une grille vide. */
    const auto = autoLayout(f.areas, (a) => byArea.get(a.area_id)?.length ?? 1);
    out[f.key] = {
      rooms: Object.fromEntries(auto.rooms.map((r) => [r.area.area_id, r.rects])),
      openings: stored?.openings ?? {},
      devices: stored?.devices ?? {},
      surfaces: stored?.surfaces ?? {},
    };
  }
  return out;
}

function applyDrag(rects: PlanRect[], d: Drag): PlanRect[] {
  if (d.mode === "move") return rects.map((q) => ({ ...q, x: q.x + d.dx, y: q.y + d.dy }));
  return rects.map((q, i) => {
    if (i !== d.rect || !d.handle) return q;
    let { x, y, w, h } = q;
    if (d.handle.includes("w")) {
      const nx = Math.min(x + d.dx, x + w - 1);
      w -= nx - x;
      x = nx;
    }
    if (d.handle.includes("e")) w = Math.max(1, w + d.dx);
    if (d.handle.includes("n")) {
      const ny = Math.min(y + d.dy, y + h - 1);
      h -= ny - y;
      y = ny;
    }
    if (d.handle.includes("s")) h = Math.max(1, h + d.dy);
    return { x, y, w, h };
  });
}

/* Côte à côte sur un vrai morceau de côté : un simple coin commun donnerait une
   pièce « en diagonale ». */
function sharesEdge(a: PlanRect, b: PlanRect): boolean {
  const overlapX = a.x < b.x + b.w && b.x < a.x + a.w;
  const overlapY = a.y < b.y + b.h && b.y < a.y + a.h;
  const sideBySide = (a.x + a.w === b.x || b.x + b.w === a.x) && overlapY;
  const stacked = (a.y + a.h === b.y || b.y + b.h === a.y) && overlapX;
  return sideBySide || stacked;
}

function newId(): string {
  return "o" + Math.random().toString(36).slice(2, 9);
}

export function PlanEditor({ floors, byArea, plan, initialFloor, synced, onSave, onClose }: PlanEditorProps) {
  const [draft, setDraft] = useState(() => seedDraft(floors, plan, byArea));
  const [floorKey, setFloorKey] = useState(initialFloor);
  const floor = floors.find((f) => f.key === floorKey) ?? floors[0];
  const [sel, setSel] = useState<Selection | null>(null);
  const [drag, setDrag] = useState<Drag | null>(null);
  const [devDrag, setDevDrag] = useState<DeviceDrag | null>(null);
  const [dirty, setDirty] = useState(false);
  const [toast, setToast] = useState("");
  const toastTimer = useRef<number | undefined>(undefined);

  const flash = (msg: string) => {
    window.clearTimeout(toastTimer.current);
    setToast(msg);
    toastTimer.current = window.setTimeout(() => setToast(""), 2600);
  };
  useEffect(() => () => window.clearTimeout(toastTimer.current), []);

  const stored = draft[floor.key];
  const allAreas = useMemo(() => floors.flatMap((f) => f.areas), [floors]);
  const homeFloor = useMemo(() => {
    const map = new Map<string, string>();
    for (const f of floors) for (const a of f.areas) map.set(a.area_id, f.label);
    return map;
  }, [floors]);
  /* Pièces de l'étage selon HA, plus celles d'un autre étage dessinées ici
     aussi (un escalier présent sur deux niveaux). */
  const floorAreas = useMemo(() => areasOnFloor(floor, allAreas, stored), [floor, allAreas, stored]);
  const areaById = useMemo(() => new Map(floorAreas.map((a) => [a.area_id, a])), [floorAreas]);
  /* Seules les pièces peuplées comptent : une pièce masquée garde son dessin
     mais ne gêne ni l'affichage ni les déplacements. */
  const placed: Rooms = useMemo(() => {
    const out: Rooms = {};
    for (const a of floorAreas) if (stored.rooms[a.area_id]) out[a.area_id] = stored.rooms[a.area_id];
    return out;
  }, [floorAreas, stored]);
  const unplaced = floor.areas.filter((a) => !placed[a.area_id]);
  const guestCandidates = allAreas.filter((a) => !floor.areas.includes(a) && !placed[a.area_id]);
  const isGuest = (areaId: string) => !floor.areas.some((a) => a.area_id === areaId);
  const nameOf = (areaId: string) => allAreas.find((a) => a.area_id === areaId)?.name ?? areaId;

  const allRects = Object.values(placed).flat();
  const cols = Math.max(MIN_COLS, ...allRects.map((r) => r.x + r.w + MARGIN));
  const rows = Math.max(MIN_ROWS, ...allRects.map((r) => r.y + r.h + MARGIN));

  const fits = (rooms: Rooms, areaId: string, rects: PlanRect[]) =>
    rects.every(
      (q) =>
        q.x >= 0 && q.y >= 0 && q.x + q.w <= cols && q.y + q.h <= rows &&
        Object.entries(rooms).every(([id, others]) => id === areaId || others.every((o) => !rectsOverlap(q, o))),
    );

  /* Un glisser peut viser une pièce qui vient d'être retirée : on l'ignore. */
  const activeDrag = drag && placed[drag.areaId] ? drag : null;
  const preview: Rooms =
    activeDrag && (activeDrag.dx || activeDrag.dy)
      ? { ...placed, [activeDrag.areaId]: applyDrag(placed[activeDrag.areaId], activeDrag) }
      : placed;
  const previewValid = !activeDrag || fits(preview, activeDrag.areaId, preview[activeDrag.areaId]);

  const updateFloor = (patch: Partial<StoredFloor>) => {
    setDraft((prev) => ({ ...prev, [floor.key]: { ...prev[floor.key], ...patch } }));
    setDirty(true);
  };
  const setRooms = (rooms: Rooms) => updateFloor({ rooms: { ...stored.rooms, ...rooms } });

  /* ─── Taille de case : la grille remplit la zone disponible ─── */
  const [fieldEl, setFieldEl] = useState<HTMLDivElement | null>(null);
  const [box, setBox] = useState({ w: 0, h: 0 });
  useEffect(() => {
    if (!fieldEl) return;
    setBox({ w: fieldEl.clientWidth, h: fieldEl.clientHeight });
    if (typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(([e]) => setBox({ w: e.contentRect.width, h: e.contentRect.height }));
    ro.observe(fieldEl);
    return () => ro.disconnect();
  }, [fieldEl]);
  const cell = box.w > 0
    ? Math.max(MIN_CELL, Math.min(MAX_CELL, Math.floor(Math.min((box.w - FIELD_PAD * 2) / cols, (box.h - FIELD_PAD * 2) / rows))))
    : 0;

  /* ─── Glisser ─── */
  const startDrag = (
    e: JSX.TargetedPointerEvent<HTMLElement>,
    areaId: string,
    rect: number,
    mode: Drag["mode"],
    handle: Handle | null,
  ) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    e.preventDefault();
    e.stopPropagation();
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      /* pointeur déjà relâché : le glisser se termine au prochain pointerup */
    }
    setSel({ kind: "room", areaId, rect });
    setDrag({ mode, areaId, rect, handle, sx: e.clientX, sy: e.clientY, dx: 0, dy: 0 });
  };
  const moveDrag = (e: JSX.TargetedPointerEvent<HTMLElement>) => {
    if (!drag || cell === 0) return;
    const dx = Math.round((e.clientX - drag.sx) / cell);
    const dy = Math.round((e.clientY - drag.sy) / cell);
    if (dx !== drag.dx || dy !== drag.dy) setDrag({ ...drag, dx, dy });
  };
  const endDrag = () => {
    if (!drag) return;
    if (drag.dx || drag.dy) {
      if (previewValid) setRooms({ [drag.areaId]: preview[drag.areaId] });
      else flash("Place occupée : la pièce revient à sa position");
    }
    setDrag(null);
  };

  const tryRects = (areaId: string, rects: PlanRect[]) => {
    if (fits(placed, areaId, rects)) setRooms({ [areaId]: rects });
  };

  const onRoomKey = (e: JSX.TargetedKeyboardEvent<HTMLElement>, areaId: string, rect: number) => {
    const delta: Record<string, [number, number]> = {
      ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1],
    };
    const d = delta[e.key];
    if (!d) return;
    e.preventDefault();
    const rects = placed[areaId];
    if (e.shiftKey) {
      tryRects(areaId, rects.map((q, i) => (i === rect ? { ...q, w: Math.max(1, q.w + d[0]), h: Math.max(1, q.h + d[1]) } : q)));
    } else {
      tryRects(areaId, rects.map((q) => ({ ...q, x: q.x + d[0], y: q.y + d[1] })));
    }
  };

  /* ─── Actions de la fiche ─── */
  const freeSpot = (w: number, h: number, near?: PlanRect): PlanRect | null => {
    let fallback: PlanRect | null = null;
    for (let y = 0; y + h <= rows; y++) {
      for (let x = 0; x + w <= cols; x++) {
        const q = { x, y, w, h };
        if (!fits(placed, "", [q])) continue;
        if (!near) return q;
        if (!sharesEdge(q, near)) continue;
        /* Aligné sur un bord de la pièce, le rectangle ajouté forme un vrai L ;
           sinon il dépasserait d'une case, à rectifier à la main. */
        const aligned =
          q.y === near.y || q.y + q.h === near.y + near.h || q.x === near.x || q.x + q.w === near.x + near.w;
        if (aligned) return q;
        fallback ??= q;
      }
    }
    return fallback;
  };

  const placeRoom = (areaId: string) => {
    const spot = freeSpot(4, 3) ?? freeSpot(3, 3) ?? freeSpot(2, 2);
    if (!spot) {
      flash("Plus de place libre sur la grille");
      return;
    }
    setRooms({ [areaId]: [spot] });
    setSel({ kind: "room", areaId, rect: 0 });
    flash(
      isGuest(areaId)
        ? `${nameOf(areaId)} ajoutée aussi à cet étage. Glisse-la à sa place`
        : `Nouvelle pièce sur le plan : ${nameOf(areaId)}. Glisse-la à sa place`,
    );
  };

  const addRect = (areaId: string) => {
    const rects = placed[areaId];
    const spot = freeSpot(2, 2, rects[0]);
    if (!spot) {
      flash("Pas de place libre contre cette pièce : libère un côté");
      return;
    }
    setRooms({ [areaId]: [...rects, spot] });
    setSel({ kind: "room", areaId, rect: rects.length });
  };

  const removeRect = (areaId: string, rect: number) => {
    const openings = (stored.openings[areaId] ?? [])
      .filter((o) => o.rect !== rect)
      .map((o) => (o.rect > rect ? { ...o, rect: o.rect - 1 } : o));
    updateFloor({
      rooms: { ...stored.rooms, [areaId]: placed[areaId].filter((_, i) => i !== rect) },
      openings: { ...stored.openings, [areaId]: openings },
    });
    setSel({ kind: "room", areaId, rect: 0 });
  };

  const setSurface = (areaId: string, kind: FloorKind | "") => {
    const surfaces = { ...stored.surfaces };
    if (kind) surfaces[areaId] = kind;
    else delete surfaces[areaId];
    updateFloor({ surfaces });
  };

  const removeRoom = (areaId: string) => {
    const rooms = { ...stored.rooms };
    const openings = { ...stored.openings };
    const devices = { ...stored.devices };
    delete rooms[areaId];
    delete openings[areaId];
    delete devices[areaId];
    updateFloor({ rooms, openings, devices });
    setSel(null);
    setDrag(null);
    flash(isGuest(areaId) ? `${nameOf(areaId)} retirée de cet étage` : `Pièce retirée du plan : ${nameOf(areaId)}`);
  };

  const sensorsFor = (areaId: string, kind: OpeningKind) =>
    (byArea.get(areaId) ?? []).filter(
      (e) => e.domain === "binary_sensor" && OPENING_CLASSES[kind].has(String(e.state.attributes.device_class ?? "")),
    );

  /* Mur le moins partagé avec les voisins : sans doute une façade. */
  const bestSide = (areaId: string, rect: PlanRect): WallSide => {
    const others = Object.entries(placed).filter(([id]) => id !== areaId).flatMap(([, r]) => r);
    const probe: Record<WallSide, PlanRect> = {
      top: { x: rect.x, y: rect.y - 1, w: rect.w, h: 1 },
      bottom: { x: rect.x, y: rect.y + rect.h, w: rect.w, h: 1 },
      left: { x: rect.x - 1, y: rect.y, w: 1, h: rect.h },
      right: { x: rect.x + rect.w, y: rect.y, w: 1, h: rect.h },
    };
    const sides: WallSide[] = ["top", "right", "bottom", "left"];
    return sides.find((s) => !others.some((o) => rectsOverlap(probe[s], o))) ?? "top";
  };

  const addOpening = (areaId: string, rect: number, kind: OpeningKind) => {
    const r = placed[areaId][rect];
    const side = bestSide(areaId, r);
    const wall = wallLength(r, side);
    const length = Math.min(wall, kind === "door" ? 1 : kind === "french" ? 2 : Math.max(1, Math.round(wall / 3)));
    const linked = new Set((stored.openings[areaId] ?? []).map((o) => o.entity_id));
    const sensor = sensorsFor(areaId, kind).find((e) => !linked.has(e.entity_id));
    const opening: PlanOpening = {
      id: newId(),
      kind,
      rect,
      side,
      offset: Math.max(0, (wall - length) / 2),
      length,
      entity_id: sensor?.entity_id ?? null,
    };
    updateFloor({ openings: { ...stored.openings, [areaId]: [...(stored.openings[areaId] ?? []), opening] } });
    setSel({ kind: "opening", areaId, id: opening.id });
  };

  const patchOpening = (areaId: string, id: string, patch: Partial<PlanOpening>) => {
    const list = (stored.openings[areaId] ?? []).map((o) => {
      if (o.id !== id) return o;
      const next = { ...o, ...patch };
      const wall = wallLength(placed[areaId][next.rect] ?? placed[areaId][0], next.side);
      next.length = Math.max(OPENING_STEP, Math.min(wall, next.length));
      next.offset = Math.max(0, Math.min(wall - next.length, next.offset));
      return next;
    });
    updateFloor({ openings: { ...stored.openings, [areaId]: list } });
  };

  const removeOpening = (areaId: string, id: string) => {
    updateFloor({ openings: { ...stored.openings, [areaId]: (stored.openings[areaId] ?? []).filter((o) => o.id !== id) } });
    setSel({ kind: "room", areaId, rect: 0 });
  };

  /* ─── Appareils ─── */
  const devicesOf = (areaId: string) => stored.devices[areaId] ?? [];
  const placeableFor = (areaId: string) => {
    const taken = new Set(devicesOf(areaId).map((d) => d.entity_id));
    return (byArea.get(areaId) ?? []).filter((e) => PLACEABLE_DOMAINS.has(e.domain) && !taken.has(e.entity_id));
  };

  const addDevice = (areaId: string, entityId: string) => {
    const r0 = placed[areaId][0];
    const others = devicesOf(areaId);
    /* Au centre de la pièce, décalé d'un cran par appareil déjà posé pour ne
       pas empiler les icônes. */
    const n = others.length;
    const pos = clampToRoom(placed[areaId], r0.x + r0.w / 2 + (n % 3) * 0.75, r0.y + r0.h / 2 + Math.floor(n / 3) * 0.75);
    const device: PlanDevice = { id: newId(), entity_id: entityId, dx: pos.x - r0.x, dy: pos.y - r0.y };
    updateFloor({ devices: { ...stored.devices, [areaId]: [...others, device] } });
    setSel({ kind: "device", areaId, id: device.id });
  };

  const moveDevice = (areaId: string, id: string, dx: number, dy: number) => {
    const rects = placed[areaId];
    const d = devicesOf(areaId).find((x) => x.id === id);
    if (!d) return;
    const x = rects[0].x + d.dx + dx;
    const y = rects[0].y + d.dy + dy;
    if (!rects.some((r) => x > r.x && x < r.x + r.w && y > r.y && y < r.y + r.h)) {
      flash("Un appareil reste dans sa pièce");
      return;
    }
    updateFloor({
      devices: {
        ...stored.devices,
        [areaId]: devicesOf(areaId).map((o) => (o.id === id ? { ...o, dx: o.dx + dx, dy: o.dy + dy } : o)),
      },
    });
  };

  const removeDevice = (areaId: string, id: string) => {
    updateFloor({ devices: { ...stored.devices, [areaId]: devicesOf(areaId).filter((d) => d.id !== id) } });
    setSel({ kind: "room", areaId, rect: 0 });
  };

  const startDeviceDrag = (e: JSX.TargetedPointerEvent<HTMLElement>, areaId: string, id: string) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    e.preventDefault();
    e.stopPropagation();
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      /* pointeur déjà relâché */
    }
    setSel({ kind: "device", areaId, id });
    setDevDrag({ areaId, id, sx: e.clientX, sy: e.clientY, dx: 0, dy: 0 });
  };
  const moveDeviceDrag = (e: JSX.TargetedPointerEvent<HTMLElement>) => {
    if (!devDrag || cell === 0) return;
    const snap = (v: number) => Math.round(v / cell / DEVICE_STEP) * DEVICE_STEP;
    const dx = snap(e.clientX - devDrag.sx);
    const dy = snap(e.clientY - devDrag.sy);
    if (dx !== devDrag.dx || dy !== devDrag.dy) setDevDrag({ ...devDrag, dx, dy });
  };
  const endDeviceDrag = () => {
    if (!devDrag) return;
    if (devDrag.dx || devDrag.dy) moveDevice(devDrag.areaId, devDrag.id, devDrag.dx, devDrag.dy);
    setDevDrag(null);
  };

  const onDeviceKey = (e: JSX.TargetedKeyboardEvent<HTMLElement>, areaId: string, id: string) => {
    const delta: Record<string, [number, number]> = {
      ArrowLeft: [-DEVICE_STEP, 0], ArrowRight: [DEVICE_STEP, 0], ArrowUp: [0, -DEVICE_STEP], ArrowDown: [0, DEVICE_STEP],
    };
    const d = delta[e.key];
    if (!d) return;
    e.preventDefault();
    moveDevice(areaId, id, d[0], d[1]);
  };

  const save = () => {
    onSave({ ...plan, floors: { ...plan.floors, ...draft } });
    setDirty(false);
    onClose();
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (sel) setSel(null);
      else if (!dirty) onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [sel, dirty, onClose]);

  /* ─── Rendu ─── */
  const selRoom = sel ? placed[sel.areaId] : undefined;
  const selRectIndex = sel?.kind === "room" && selRoom ? Math.min(sel.rect, selRoom.length - 1) : 0;
  const selDevice =
    sel?.kind === "device" ? devicesOf(sel.areaId).find((d) => d.id === sel.id) ?? null : null;
  const selDeviceEntity = selDevice
    ? (byArea.get(sel!.areaId) ?? []).find((e) => e.entity_id === selDevice.entity_id) ?? null
    : null;
  const selOpening =
    sel?.kind === "opening" ? (stored.openings[sel.areaId] ?? []).find((o) => o.id === sel.id) ?? null : null;
  const selPreviewRect = sel?.kind === "room" && preview[sel.areaId] ? preview[sel.areaId][selRectIndex] : null;

  return (
    <div class="nido-plan-editor" role="dialog" aria-modal="true" aria-label="Modifier le plan">
      <div class="nido-plan-editor__shell">
        <header class="nido-plan-editor__header">
          <div class="nido-plan-editor__title">
            <button type="button" class="nido-plan-editor__back" aria-label="Fermer sans enregistrer" onClick={onClose}>
              <IconArrowLeft size={18} />
            </button>
            <h1>Modifier le plan</h1>
            {floors.length > 1 && (
              <div class="nido-plan__floors" role="group" aria-label="Étage">
                {floors.map((f) => (
                  <button
                    key={f.key}
                    type="button"
                    class={`nido-plan__floor ${f.key === floor.key ? "is-active" : ""}`}
                    aria-pressed={f.key === floor.key}
                    onClick={() => {
                      setFloorKey(f.key);
                      setSel(null);
                      setDrag(null);
                    }}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div class="nido-plan-editor__actions">
            <button type="button" class="nido-plan-editor__ghost" onClick={onClose}>
              Annuler
            </button>
            <button type="button" class="nido-plan-editor__primary" onClick={save}>
              <IconCheck size={16} />
              Enregistrer
            </button>
          </div>
        </header>

        <div class="nido-plan-editor__hint">
          <span class={`nido-plan-editor__status ${dirty ? "is-dirty" : ""}`}>
            {dirty ? "Modifications non enregistrées" : "Aucune modification"}
          </span>
          <span class="nido-plan-editor__tips">
            Glisser pour déplacer · poignées pour redimensionner · flèches du clavier (Maj pour la taille)
          </span>
        </div>

        <div class="nido-plan-editor__body">
          <div class="nido-plan-editor__canvas">
            <div class="nido-plan-editor__field-box" ref={setFieldEl}>
              {cell > 0 && (
                <div
                  class="nido-plan-editor__field"
                  style={{
                    width: `${cols * cell}px`,
                    height: `${rows * cell}px`,
                    backgroundSize: `${cell}px ${cell}px`,
                    backgroundPosition: `${-cell / 2}px ${-cell / 2}px`,
                  }}
                  onPointerDown={(e) => {
                    if (e.target === e.currentTarget) setSel(null);
                  }}
                >
                  {Object.entries(preview).map(([areaId, rects]) => {
                    const area = areaById.get(areaId);
                    if (!area) return null;
                    const biggest = rects.reduce((bi, q, i) => (q.w * q.h > rects[bi].w * rects[bi].h ? i : bi), 0);
                    const active = drag?.areaId === areaId;
                    const bad = active && !previewValid;
                    return rects.map((q, i) => (
                      <button
                        key={`${areaId}-${i}`}
                        type="button"
                        class="nido-plan-editor__room"
                        data-selected={sel?.areaId === areaId ? "true" : "false"}
                        data-bad={bad ? "true" : "false"}
                        data-floor={stored.surfaces[areaId] ?? floorKind(area.name)}
                        data-active={active ? "true" : "false"}
                        aria-label={`${area.name}, ${q.w} × ${q.h} cases. Flèches pour déplacer, Maj + flèches pour redimensionner`}
                        style={{ left: `${q.x * cell}px`, top: `${q.y * cell}px`, width: `${q.w * cell}px`, height: `${q.h * cell}px` }}
                        onPointerDown={(e) => startDrag(e, areaId, i, "move", null)}
                        onPointerMove={moveDrag}
                        onPointerUp={endDrag}
                        onPointerCancel={endDrag}
                        onKeyDown={(e) => onRoomKey(e, areaId, i)}
                        onFocus={() => !drag && setSel({ kind: "room", areaId, rect: i })}
                      >
                        {i === biggest && <span class="nido-plan-editor__room-name">{area.name}</span>}
                        <span class="nido-plan-editor__room-dims">{q.w} × {q.h}</span>
                      </button>
                    ));
                  })}

                  {Object.entries(preview).flatMap(([areaId, rects]) => {
                    if (!areaById.has(areaId)) return [];
                    const state =
                      drag?.areaId === areaId && !previewValid ? "bad" : sel?.areaId === areaId ? "selected" : "idle";
                    return roomWalls(rects).map((w, i) => (
                      <span
                        key={`${areaId}-w${i}`}
                        class="nido-plan-editor__wall"
                        data-state={state}
                        style={wallStyle(w, cell, state === "idle" ? 3 : 4)}
                        aria-hidden="true"
                      />
                    ));
                  })}

                  {Object.entries(preview).flatMap(([areaId, rects]) =>
                    areaById.has(areaId)
                      ? (stored.openings[areaId] ?? []).map((o) => {
                          const seg = openingSegment(rects[o.rect] ?? rects[0], o);
                          const t = 12;
                          const style = seg.horizontal
                            ? { left: `${seg.x * cell}px`, top: `${seg.y * cell - t / 2}px`, width: `${seg.length * cell}px`, height: `${t}px` }
                            : { left: `${seg.x * cell - t / 2}px`, top: `${seg.y * cell}px`, width: `${t}px`, height: `${seg.length * cell}px` };
                          const swing =
                            o.kind !== "window" ? (
                              <DoorSwing
                                key={`${o.id}-swing`}
                                side={o.side}
                                x={seg.x * cell}
                                y={seg.y * cell}
                                size={seg.length * cell}
                                double={o.kind === "french"}
                                open={sel?.kind === "opening" && sel.id === o.id}
                                className="nido-plan-editor__door"
                              />
                            ) : null;
                          return [
                            swing,
                            <button
                              key={o.id}
                              type="button"
                              class="nido-plan-editor__opening"
                              data-kind={o.kind}
                              data-selected={sel?.kind === "opening" && sel.id === o.id ? "true" : "false"}
                              aria-label={`${OPENING_LABEL[o.kind]} de ${areaById.get(areaId)?.name}`}
                              style={style}
                              onPointerDown={(e) => {
                                e.stopPropagation();
                                setSel({ kind: "opening", areaId, id: o.id });
                              }}
                            >
                              <span />
                            </button>,
                          ];
                        })
                      : [],
                  )}

                  {Object.entries(preview).flatMap(([areaId, rects]) =>
                    areaById.has(areaId)
                      ? devicesOf(areaId).map((d) => {
                          const entity = (byArea.get(areaId) ?? []).find((e) => e.entity_id === d.entity_id);
                          const moving = devDrag?.id === d.id;
                          const pos = clampToRoom(
                            rects,
                            rects[0].x + d.dx + (moving ? devDrag!.dx : 0),
                            rects[0].y + d.dy + (moving ? devDrag!.dy : 0),
                          );
                          const size = Math.round(Math.max(26, Math.min(36, cell * 0.8)));
                          const Ico = entity ? DOMAIN_ICON[entity.domain] : undefined;
                          return (
                            <button
                              key={d.id}
                              type="button"
                              class="nido-plan-editor__device"
                              data-selected={sel?.kind === "device" && sel.id === d.id ? "true" : "false"}
                              data-active={moving ? "true" : "false"}
                              aria-label={`${entity?.friendly_name ?? d.entity_id}. Flèches pour déplacer`}
                              title={entity?.friendly_name ?? d.entity_id}
                              style={{
                                left: `${pos.x * cell - size / 2}px`,
                                top: `${pos.y * cell - size / 2}px`,
                                width: `${size}px`,
                                height: `${size}px`,
                              }}
                              onPointerDown={(e) => startDeviceDrag(e, areaId, d.id)}
                              onPointerMove={moveDeviceDrag}
                              onPointerUp={endDeviceDrag}
                              onPointerCancel={endDeviceDrag}
                              onKeyDown={(e) => onDeviceKey(e, areaId, d.id)}
                            >
                              {Ico && <Ico size={Math.round(size * 0.5)} />}
                            </button>
                          );
                        })
                      : [],
                  )}

                  {selPreviewRect && sel?.kind === "room" && (
                    <>
                      <span
                        class="nido-plan-editor__badge"
                        data-bad={drag && !previewValid ? "true" : "false"}
                        style={{
                          left: `${selPreviewRect.x * cell}px`,
                          top: `${selPreviewRect.y > 0 ? selPreviewRect.y * cell - 32 : (selPreviewRect.y + selPreviewRect.h) * cell + 10}px`,
                        }}
                      >
                        {drag && !previewValid
                          ? "Chevauche une autre pièce"
                          : `${areaById.get(sel.areaId)?.name} · ${selPreviewRect.w} × ${selPreviewRect.h}`}
                      </span>
                      {HANDLES.map(([h, fx, fy]) => (
                        <span
                          key={h}
                          class="nido-plan-editor__handle"
                          role="presentation"
                          style={{
                            left: `${(selPreviewRect.x + fx * selPreviewRect.w) * cell - 11}px`,
                            top: `${(selPreviewRect.y + fy * selPreviewRect.h) * cell - 11}px`,
                            cursor: HANDLE_CURSOR[h],
                          }}
                          onPointerDown={(e) => startDrag(e, sel.areaId, selRectIndex, "resize", h)}
                          onPointerMove={moveDrag}
                          onPointerUp={endDrag}
                          onPointerCancel={endDrag}
                        />
                      ))}
                    </>
                  )}
                </div>
              )}
            </div>
            {toast && (
              <div class="nido-plan-editor__toast" role="status">
                {toast}
              </div>
            )}
          </div>

          <aside class="nido-plan-editor__side">
            {sel?.kind === "room" && selRoom && (
              <div class="nido-plan-editor__card">
                <div class="nido-plan__eyebrow">Pièce sélectionnée</div>
                <div class="nido-plan-editor__card-title">{areaById.get(sel.areaId)?.name}</div>
                {isGuest(sel.areaId) && (
                  <p class="nido-plan-editor__muted">
                    Pièce de l'étage « {homeFloor.get(sel.areaId)} », affichée aussi ici. Ses appareils et
                    capteurs sont les mêmes sur les deux étages.
                  </p>
                )}
                <label class="nido-plan-editor__field-label" for="plan-surface">
                  Sol
                </label>
                <select
                  id="plan-surface"
                  class="nido-plan-editor__select"
                  value={stored.surfaces[sel.areaId] ?? ""}
                  onChange={(e) => setSurface(sel.areaId, (e.currentTarget as HTMLSelectElement).value as FloorKind | "")}
                >
                  <option value="">
                    Automatique ({SURFACE_LABEL[floorKind(areaById.get(sel.areaId)?.name ?? "")].toLowerCase()})
                  </option>
                  {(["wood", "tile", "concrete"] as const).map((k) => (
                    <option key={k} value={k}>
                      {SURFACE_LABEL[k]}
                    </option>
                  ))}
                </select>
                <div class="nido-plan-editor__field-label">Ajouter</div>
                <div class="nido-plan-editor__row nido-plan-editor__row--wrap">
                  <button type="button" class="nido-plan-editor__btn" onClick={() => addOpening(sel.areaId, selRectIndex, "window")}>
                    <IconWindow size={16} /> Fenêtre
                  </button>
                  <button type="button" class="nido-plan-editor__btn" onClick={() => addOpening(sel.areaId, selRectIndex, "door")}>
                    <IconDoor size={16} /> Porte
                  </button>
                  <button type="button" class="nido-plan-editor__btn" onClick={() => addOpening(sel.areaId, selRectIndex, "french")}>
                    <IconDoor size={16} /> Porte-fenêtre
                  </button>
                </div>
                {placeableFor(sel.areaId).length > 0 && (
                  <>
                    <label class="nido-plan-editor__field-label" for="plan-add-device">
                      Poser un appareil
                    </label>
                    <select
                      id="plan-add-device"
                      class="nido-plan-editor__select"
                      value=""
                      onChange={(e) => {
                        const v = (e.currentTarget as HTMLSelectElement).value;
                        if (v) addDevice(sel.areaId, v);
                      }}
                    >
                      <option value="">Choisir…</option>
                      {placeableFor(sel.areaId).map((e) => (
                        <option key={e.entity_id} value={e.entity_id}>
                          {e.friendly_name} · {DOMAIN_LABEL[e.domain] ?? e.domain}
                        </option>
                      ))}
                    </select>
                  </>
                )}
                <button type="button" class="nido-plan-editor__btn" onClick={() => addRect(sel.areaId)}>
                  <IconLShape size={16} /> Ajouter un rectangle (pièce en L)
                </button>
                <button
                  type="button"
                  class="nido-plan-editor__btn nido-plan-editor__btn--danger"
                  onClick={() => (selRectIndex > 0 ? removeRect(sel.areaId, selRectIndex) : removeRoom(sel.areaId))}
                >
                  <IconTrash size={16} /> {selRectIndex > 0 ? "Supprimer ce rectangle" : "Retirer du plan"}
                </button>
              </div>
            )}

            {sel?.kind === "device" && selDevice && (
              <div class="nido-plan-editor__card">
                <button
                  type="button"
                  class="nido-plan-editor__link"
                  onClick={() => setSel({ kind: "room", areaId: sel.areaId, rect: 0 })}
                >
                  <IconArrowLeft size={14} /> {areaById.get(sel.areaId)?.name}
                </button>
                <div class="nido-plan-editor__card-title">{selDeviceEntity?.friendly_name ?? selDevice.entity_id}</div>
                <p class="nido-plan-editor__muted">
                  {selDeviceEntity ? DOMAIN_LABEL[selDeviceEntity.domain] : "Appareil introuvable"} · glisse l'icône
                  pour la placer, ou utilise les flèches du clavier. Sur le plan, un toucher l'allume ou l'éteint.
                </p>
                <button
                  type="button"
                  class="nido-plan-editor__btn nido-plan-editor__btn--danger"
                  onClick={() => removeDevice(sel.areaId, selDevice.id)}
                >
                  <IconTrash size={16} /> Retirer du plan
                </button>
              </div>
            )}

            {sel?.kind === "opening" && selOpening && (
              <OpeningCard
                opening={selOpening}
                roomName={areaById.get(sel.areaId)?.name ?? ""}
                sensors={sensorsFor(sel.areaId, selOpening.kind)}
                onPatch={(patch) => patchOpening(sel.areaId, selOpening.id, patch)}
                onRemove={() => removeOpening(sel.areaId, selOpening.id)}
                onBack={() => setSel({ kind: "room", areaId: sel.areaId, rect: selOpening.rect })}
              />
            )}

            {!sel && (
              <div class="nido-plan-editor__card">
                <div class="nido-plan__eyebrow">Sélection</div>
                <p class="nido-plan-editor__muted">
                  Touche une pièce pour la déplacer, la redimensionner ou y poser une fenêtre ou une porte.
                </p>
              </div>
            )}

            <div class="nido-plan-editor__card">
              <div class="nido-plan__eyebrow">À placer · {unplaced.length}</div>
              <p class="nido-plan-editor__muted">
                {unplaced.length > 0
                  ? "Pièces de cet étage absentes du plan. Touche-en une pour la poser sur une place libre."
                  : "Toutes les pièces de cet étage sont sur le plan."}
              </p>
              {unplaced.map((a) => (
                <button key={a.area_id} type="button" class="nido-plan-editor__unplaced" onClick={() => placeRoom(a.area_id)}>
                  <IconPlus size={16} />
                  {a.name}
                </button>
              ))}
            </div>

            {floors.length > 1 && guestCandidates.length > 0 && (
              <div class="nido-plan-editor__card">
                <div class="nido-plan__eyebrow">Sur plusieurs étages</div>
                <p class="nido-plan-editor__muted">
                  Un escalier ou une mezzanine se voit à deux niveaux : ajoute ici une pièce d'un autre étage.
                </p>
                <label class="nido-plan-editor__field-label" for="plan-guest-room">
                  Pièce d'un autre étage
                </label>
                <select
                  id="plan-guest-room"
                  class="nido-plan-editor__select"
                  value=""
                  onChange={(e) => {
                    const v = (e.currentTarget as HTMLSelectElement).value;
                    if (v) placeRoom(v);
                  }}
                >
                  <option value="">Choisir…</option>
                  {guestCandidates.map((a) => (
                    <option key={a.area_id} value={a.area_id}>
                      {a.name} · {homeFloor.get(a.area_id)}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <p class="nido-plan-editor__note">
              {synced
                ? "Enregistré dans Home Assistant : le plan apparaît aussitôt sur tous les écrans."
                : "MQTT indisponible : le plan ne sera enregistré que sur cet appareil."}
            </p>
          </aside>
        </div>
      </div>
    </div>
  );
}

function OpeningCard({
  opening,
  roomName,
  sensors,
  onPatch,
  onRemove,
  onBack,
}: {
  opening: PlanOpening;
  roomName: string;
  sensors: ResolvedEntity[];
  onPatch: (patch: Partial<PlanOpening>) => void;
  onRemove: () => void;
  onBack: () => void;
}) {
  const kindLabel = OPENING_LABEL[opening.kind];
  return (
    <div class="nido-plan-editor__card">
      <button type="button" class="nido-plan-editor__link" onClick={onBack}>
        <IconArrowLeft size={14} /> {roomName}
      </button>
      <div class="nido-plan-editor__card-title">{kindLabel}</div>

      <div class="nido-plan-editor__field-label">Type</div>
      <div class="nido-plan-editor__segmented" role="group" aria-label="Type d'ouvrant">
        {(["window", "door", "french"] as const).map((k) => (
          <button
            key={k}
            type="button"
            class={opening.kind === k ? "is-active" : ""}
            aria-pressed={opening.kind === k}
            onClick={() => onPatch({ kind: k, entity_id: null })}
          >
            {OPENING_LABEL[k]}
          </button>
        ))}
      </div>

      <div class="nido-plan-editor__field-label">Mur</div>
      <div class="nido-plan-editor__segmented" role="group" aria-label="Mur">
        {(["top", "right", "bottom", "left"] as const).map((s) => (
          <button
            key={s}
            type="button"
            class={opening.side === s ? "is-active" : ""}
            aria-pressed={opening.side === s}
            onClick={() => onPatch({ side: s })}
          >
            {SIDE_LABEL[s]}
          </button>
        ))}
      </div>

      <div class="nido-plan-editor__steppers">
        <Stepper
          label="Position"
          value={opening.offset}
          onChange={(v) => onPatch({ offset: v })}
        />
        <Stepper
          label="Largeur"
          value={opening.length}
          onChange={(v) => onPatch({ length: v })}
        />
      </div>

      <label class="nido-plan-editor__field-label" for="plan-opening-sensor">
        Capteur d'ouverture
      </label>
      <select
        id="plan-opening-sensor"
        class="nido-plan-editor__select"
        value={opening.entity_id ?? ""}
        onChange={(e) => onPatch({ entity_id: (e.currentTarget as HTMLSelectElement).value || null })}
      >
        <option value="">Aucun (dessin seul)</option>
        {sensors.map((s) => (
          <option key={s.entity_id} value={s.entity_id}>
            {s.friendly_name}
          </option>
        ))}
      </select>

      <button type="button" class="nido-plan-editor__btn nido-plan-editor__btn--danger" onClick={onRemove}>
        <IconTrash size={16} /> Supprimer
      </button>
    </div>
  );
}

function Stepper({ label, value, onChange }: { label: string; value: number; onChange: (v: number) => void }) {
  return (
    <div class="nido-plan-editor__stepper">
      <span class="nido-plan-editor__field-label">{label}</span>
      <div class="nido-plan-editor__stepper-row">
        <button type="button" aria-label={`${label} : moins`} onClick={() => onChange(value - OPENING_STEP)}>
          <IconMinus size={16} />
        </button>
        <span>{value.toLocaleString("fr-FR")}</span>
        <button type="button" aria-label={`${label} : plus`} onClick={() => onChange(value + OPENING_STEP)}>
          <IconPlus size={16} />
        </button>
      </div>
    </div>
  );
}
