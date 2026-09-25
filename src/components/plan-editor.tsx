import { useEffect, useMemo, useRef, useState } from "preact/hooks";
import type { JSX } from "preact";
import type { ResolvedEntity } from "../core/entities";
import {
  autoLayout,
  openingSegment,
  rectsOverlap,
  wallLength,
  type PlanFloor,
  type PlanRect,
} from "../core/floor-plan";
import type { HousePlan, OpeningKind, PlanOpening, StoredFloor, WallSide } from "../core/plan-store";
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
  | { kind: "opening"; areaId: string; id: string };

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
};

function seedDraft(
  floors: PlanFloor[],
  plan: HousePlan,
  byArea: Map<string | null, ResolvedEntity[]>,
): Record<string, StoredFloor> {
  const out: Record<string, StoredFloor> = {};
  for (const f of floors) {
    const stored = plan.floors[f.key];
    if (stored && f.areas.some((a) => stored.rooms[a.area_id])) {
      out[f.key] = { rooms: { ...stored.rooms }, openings: { ...stored.openings } };
      continue;
    }
    /* Un étage jamais dessiné part du placement automatique : on ajuste un plan
       existant plutôt que de tout poser à la main sur une grille vide. */
    const auto = autoLayout(f.areas, (a) => byArea.get(a.area_id)?.length ?? 1);
    out[f.key] = {
      rooms: Object.fromEntries(auto.rooms.map((r) => [r.area.area_id, r.rects])),
      openings: stored?.openings ?? {},
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

function newId(): string {
  return "o" + Math.random().toString(36).slice(2, 9);
}

export function PlanEditor({ floors, byArea, plan, initialFloor, synced, onSave, onClose }: PlanEditorProps) {
  const [draft, setDraft] = useState(() => seedDraft(floors, plan, byArea));
  const [floorKey, setFloorKey] = useState(initialFloor);
  const floor = floors.find((f) => f.key === floorKey) ?? floors[0];
  const [sel, setSel] = useState<Selection | null>(null);
  const [drag, setDrag] = useState<Drag | null>(null);
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
  const areaById = useMemo(() => new Map(floor.areas.map((a) => [a.area_id, a])), [floor]);
  /* Seules les pièces peuplées de l'étage comptent : une pièce masquée garde
     son dessin mais ne gêne ni l'affichage ni les déplacements. */
  const placed: Rooms = useMemo(() => {
    const out: Rooms = {};
    for (const a of floor.areas) if (stored.rooms[a.area_id]) out[a.area_id] = stored.rooms[a.area_id];
    return out;
  }, [floor, stored]);
  const unplaced = floor.areas.filter((a) => !placed[a.area_id]);

  const allRects = Object.values(placed).flat();
  const cols = Math.max(MIN_COLS, ...allRects.map((r) => r.x + r.w + MARGIN));
  const rows = Math.max(MIN_ROWS, ...allRects.map((r) => r.y + r.h + MARGIN));

  const fits = (rooms: Rooms, areaId: string, rects: PlanRect[]) =>
    rects.every(
      (q) =>
        q.x >= 0 && q.y >= 0 && q.x + q.w <= cols && q.y + q.h <= rows &&
        Object.entries(rooms).every(([id, others]) => id === areaId || others.every((o) => !rectsOverlap(q, o))),
    );

  const preview: Rooms = drag && (drag.dx || drag.dy) ? { ...placed, [drag.areaId]: applyDrag(placed[drag.areaId], drag) } : placed;
  const previewValid = !drag || fits(preview, drag.areaId, preview[drag.areaId]);

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
    for (let y = 0; y + h <= rows; y++) {
      for (let x = 0; x + w <= cols; x++) {
        const q = { x, y, w, h };
        if (!fits(placed, "", [q])) continue;
        if (near && !(q.x <= near.x + near.w && near.x <= q.x + q.w && q.y <= near.y + near.h && near.y <= q.y + q.h)) continue;
        return q;
      }
    }
    return null;
  };

  const placeRoom = (areaId: string) => {
    const spot = freeSpot(4, 3) ?? freeSpot(3, 3) ?? freeSpot(2, 2);
    if (!spot) {
      flash("Plus de place libre sur la grille");
      return;
    }
    setRooms({ [areaId]: [spot] });
    setSel({ kind: "room", areaId, rect: 0 });
    flash(`Nouvelle pièce sur le plan : ${areaById.get(areaId)?.name}. Glisse-la à sa place`);
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

  const removeRoom = (areaId: string) => {
    const rooms = { ...stored.rooms };
    const openings = { ...stored.openings };
    delete rooms[areaId];
    delete openings[areaId];
    updateFloor({ rooms, openings });
    setSel(null);
    flash(`Pièce retirée du plan : ${areaById.get(areaId)?.name}`);
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
    const length = Math.min(wall, kind === "door" ? 1 : Math.max(1, Math.round(wall / 3)));
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

                  {Object.entries(preview).flatMap(([areaId, rects]) =>
                    areaById.has(areaId)
                      ? (stored.openings[areaId] ?? []).map((o) => {
                          const seg = openingSegment(rects[o.rect] ?? rects[0], o);
                          const t = 12;
                          const style = seg.horizontal
                            ? { left: `${seg.x * cell}px`, top: `${seg.y * cell - t / 2}px`, width: `${seg.length * cell}px`, height: `${t}px` }
                            : { left: `${seg.x * cell - t / 2}px`, top: `${seg.y * cell}px`, width: `${t}px`, height: `${seg.length * cell}px` };
                          return (
                            <button
                              key={o.id}
                              type="button"
                              class="nido-plan-editor__opening"
                              data-kind={o.kind}
                              data-selected={sel?.kind === "opening" && sel.id === o.id ? "true" : "false"}
                              aria-label={`${o.kind === "door" ? "Porte" : "Fenêtre"} de ${areaById.get(areaId)?.name}`}
                              style={style}
                              onPointerDown={(e) => {
                                e.stopPropagation();
                                setSel({ kind: "opening", areaId, id: o.id });
                              }}
                            >
                              <span />
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
                <div class="nido-plan-editor__row">
                  <button type="button" class="nido-plan-editor__btn" onClick={() => addOpening(sel.areaId, selRectIndex, "window")}>
                    <IconWindow size={16} /> Fenêtre
                  </button>
                  <button type="button" class="nido-plan-editor__btn" onClick={() => addOpening(sel.areaId, selRectIndex, "door")}>
                    <IconDoor size={16} /> Porte
                  </button>
                </div>
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
  const kindLabel = opening.kind === "door" ? "Porte" : "Fenêtre";
  return (
    <div class="nido-plan-editor__card">
      <button type="button" class="nido-plan-editor__link" onClick={onBack}>
        <IconArrowLeft size={14} /> {roomName}
      </button>
      <div class="nido-plan-editor__card-title">{kindLabel}</div>

      <div class="nido-plan-editor__field-label">Type</div>
      <div class="nido-plan-editor__segmented" role="group" aria-label="Type d'ouvrant">
        {(["window", "door"] as const).map((k) => (
          <button
            key={k}
            type="button"
            class={opening.kind === k ? "is-active" : ""}
            aria-pressed={opening.kind === k}
            onClick={() => onPatch({ kind: k, entity_id: null })}
          >
            {k === "door" ? "Porte" : "Fenêtre"}
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
