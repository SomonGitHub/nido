import { useCallback, useEffect, useRef, useState } from "preact/hooks";

const THRESHOLD_PX = 6;

function isInteractiveTarget(target: EventTarget | null, root: Element): boolean {
  if (!(target instanceof Element)) return false;
  let el: Element | null = target;
  while (el && el !== root) {
    const tag = el.tagName;
    if (tag === "INPUT" || tag === "BUTTON" || tag === "SELECT" || tag === "TEXTAREA" || tag === "A") {
      return true;
    }
    const role = el.getAttribute("role");
    if (role === "switch" || role === "button" || role === "slider") return true;
    if (el.hasAttribute("data-no-drag")) return true;
    el = el.parentElement;
  }
  return false;
}

interface DragState {
  draggingId: string | null;
  overId: string | null;
}

export function applyOrder<T>(items: T[], orderedIds: string[], getId: (item: T) => string): T[] {
  if (orderedIds.length === 0) return items;
  const byId = new Map(items.map((i) => [getId(i), i] as const));
  const seen = new Set<string>();
  const out: T[] = [];
  for (const id of orderedIds) {
    const it = byId.get(id);
    if (it && !seen.has(id)) {
      out.push(it);
      seen.add(id);
    }
  }
  for (const it of items) {
    const id = getId(it);
    if (!seen.has(id)) {
      out.push(it);
      seen.add(id);
    }
  }
  return out;
}

export function useDragReorder<T>(
  items: T[],
  getId: (item: T) => string,
  onReorder: (next: T[]) => void,
) {
  const [state, setState] = useState<DragState>({ draggingId: null, overId: null });
  const startRef = useRef<{ id: string; x: number; y: number; entered: boolean } | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);
  const itemsRef = useRef(items);
  itemsRef.current = items;
  const onReorderRef = useRef(onReorder);
  onReorderRef.current = onReorder;
  const getIdRef = useRef(getId);
  getIdRef.current = getId;

  const findCardId = useCallback((x: number, y: number): string | null => {
    const root = containerRef.current;
    if (!root) return null;
    const cards = root.querySelectorAll("[data-drag-id]");
    for (const card of Array.from(cards)) {
      const rect = card.getBoundingClientRect();
      if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
        return card.getAttribute("data-drag-id");
      }
    }
    return null;
  }, []);

  useEffect(() => {
    const onMove = (ev: PointerEvent) => {
      const start = startRef.current;
      if (!start) return;
      if (!start.entered) {
        const dx = ev.clientX - start.x;
        const dy = ev.clientY - start.y;
        if (Math.hypot(dx, dy) < THRESHOLD_PX) return;
        start.entered = true;
        setState({ draggingId: start.id, overId: null });
      }
      const id = findCardId(ev.clientX, ev.clientY);
      setState((s) => (s.overId === id ? s : { ...s, overId: id }));
    };
    const onUp = () => {
      const start = startRef.current;
      startRef.current = null;
      if (!start || !start.entered) return;

      const suppress = (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
      };
      window.addEventListener("click", suppress, { capture: true, once: true });

      setState((cur) => {
        const { draggingId, overId } = cur;
        if (draggingId && overId && draggingId !== overId) {
          const list = itemsRef.current;
          const id = getIdRef.current;
          const fromIdx = list.findIndex((i) => id(i) === draggingId);
          const toIdx = list.findIndex((i) => id(i) === overId);
          if (fromIdx >= 0 && toIdx >= 0) {
            const next = [...list];
            const [moved] = next.splice(fromIdx, 1);
            next.splice(toIdx, 0, moved);
            onReorderRef.current(next);
          }
        }
        return { draggingId: null, overId: null };
      });
    };
    document.addEventListener("pointermove", onMove);
    document.addEventListener("pointerup", onUp);
    document.addEventListener("pointercancel", onUp);
    return () => {
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerup", onUp);
      document.removeEventListener("pointercancel", onUp);
    };
  }, [findCardId]);

  const itemPropsFor = useCallback(
    (id: string) => {
      const isDragging = state.draggingId === id;
      const isOver =
        state.draggingId !== null && state.draggingId !== id && state.overId === id;
      return {
        "data-drag-id": id,
        "data-dragging": isDragging ? "true" : undefined,
        "data-drag-over": isOver ? "true" : undefined,
        onPointerDown: (ev: PointerEvent) => {
          if (ev.button !== undefined && ev.button !== 0) return;
          const root = ev.currentTarget as Element;
          if (isInteractiveTarget(ev.target, root)) return;
          startRef.current = { id, x: ev.clientX, y: ev.clientY, entered: false };
        },
      };
    },
    [state.draggingId, state.overId],
  );

  return {
    containerRef,
    itemPropsFor,
    isDragging: state.draggingId !== null,
  };
}
