import type { ComponentChildren } from "preact";
import { useEffect, useMemo, useRef, useState } from "preact/hooks";
import type { HassObject } from "../types";
import { summarizeRoom, extractRoomStats, type ResolvedEntity } from "../core/entities";
import { floorKind, roomWalls, wallStyle, type FloorLayout, type PlanRect } from "../core/floor-plan";
import { footprint } from "../core/furniture";
import { temperatureTint, tintStyle } from "../core/measure-tint";
import { cameraFor, roomStatus, type StatusIcon, type TourStop } from "../core/screensaver-tour";
import { FurnitureSymbol } from "../views/furniture-symbol";
import { PlanOpeningMark, facadeThickness, onSide } from "../views/floor-plan";
import { DOMAIN_ICON } from "../views/shared";
import {
  IconActivity,
  IconAlertTriangle,
  IconBlind,
  IconDoor,
  IconFan,
  IconLightOn,
  IconLock,
  IconMusic,
  IconPlug,
  IconThermostat,
  IconWindow,
} from "../icons";

const STATUS_ICON: Record<StatusIcon, typeof IconLightOn> = {
  light: IconLightOn,
  cover: IconBlind,
  media: IconMusic,
  climate: IconThermostat,
  window: IconWindow,
  door: IconDoor,
  alert: IconAlertTriangle,
  motion: IconActivity,
  power: IconPlug,
  switch: IconFan,
  lock: IconLock,
};

const MOTION = new Set(["motion", "occupancy", "presence"]);

function bbox(rects: PlanRect[]): PlanRect {
  const x = Math.min(...rects.map((r) => r.x));
  const y = Math.min(...rects.map((r) => r.y));
  return { x, y, w: Math.max(...rects.map((r) => r.x + r.w)) - x, h: Math.max(...rects.map((r) => r.y + r.h)) - y };
}

function useSize<T extends HTMLElement>(): [(el: T | null) => void, { w: number; h: number }] {
  const [el, setEl] = useState<T | null>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  useEffect(() => {
    if (!el) return;
    const read = () => setSize({ w: el.clientWidth, h: el.clientHeight });
    read();
    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", read);
      return () => window.removeEventListener("resize", read);
    }
    const ro = new ResizeObserver(read);
    ro.observe(el);
    return () => ro.disconnect();
  }, [el]);
  return [setEl, size];
}

/** Le plan d'un étage, en lecture seule, dans le style du plan de Nido. `only` :
 *  une seule pièce (vue Cartes), recalée en (0, 0). */
function PlanScene({
  hass,
  layout,
  cell,
  byArea,
  focus,
  only,
}: {
  hass: HassObject;
  layout: FloorLayout;
  cell: number;
  byArea: Map<string | null, ResolvedEntity[]>;
  focus?: string;
  only?: string;
}) {
  const rooms = only ? layout.rooms.filter((r) => r.area.area_id === only) : layout.rooms;
  const keep = (areaId: string) => !only || areaId === only;
  const origin = only && rooms[0] ? bbox(rooms[0].rects) : { x: 0, y: 0, w: layout.cols, h: layout.rows };
  const px = (v: number, o: number) => `${(v - o) * cell}px`;
  const shift = (r: PlanRect): PlanRect => ({ ...r, x: r.x - origin.x, y: r.y - origin.y });

  return (
    <div
      class="nido-plan__house nido-veille-house"
      data-custom={layout.custom ? "true" : "false"}
      style={{ width: `${origin.w * cell}px`, height: `${origin.h * cell}px`, "--cell": `${cell}px` }}
    >
      {rooms.map((r) => {
        const list = byArea.get(r.area.area_id) ?? [];
        const lit = summarizeRoom(list).lightsOn > 0;
        const stats = extractRoomStats(list);
        const tint = stats.temperature ? temperatureTint(stats.temperature.value, stats.temperature.unit) : null;
        const moving = list.some(
          (e) => e.domain === "binary_sensor" && e.state.state === "on" && MOTION.has(String(e.state.attributes.device_class ?? "")),
        );
        return r.rects.map((rect, i) => (
          <div
            key={`${r.area.area_id}-${i}`}
            class="nido-plan__room"
            data-floor={r.surface ?? floorKind(r.area.name)}
            data-tinted={tint ? "true" : "false"}
            data-lit={lit ? "true" : "false"}
            data-dim={focus && focus !== r.area.area_id ? "true" : undefined}
            style={{
              left: px(rect.x, origin.x),
              top: px(rect.y, origin.y),
              width: `${rect.w * cell}px`,
              height: `${rect.h * cell}px`,
              ...(tint ? tintStyle(tint) : {}),
            }}
          >
            {lit && i === 0 && <span class="nido-plan__glow" />}
            {i === 0 && (
              <span class="nido-plan__room-head">
                <span class="nido-plan__room-name">{r.area.name}</span>
              </span>
            )}
            {moving && i === 0 && (
              <span
                class="nido-plan__motion"
                data-state="active"
                style={{ "--motion-size": `${Math.max(18, Math.min(160, Math.min(rect.w, rect.h) * cell * 0.55))}px` }}
              />
            )}
          </div>
        ));
      })}

      {layout.furniture
        .filter((f) => keep(f.area_id))
        .map((f) => {
          const fp = footprint(f);
          return (
            <span
              key={f.id}
              class="nido-plan__furniture"
              style={{
                left: px(f.x - fp.w / 2, origin.x),
                top: px(f.y - fp.h / 2, origin.y),
                width: `${fp.w * cell}px`,
                height: `${fp.h * cell}px`,
              }}
            >
              <FurnitureSymbol kind={f.kind} w={f.w} h={f.h} rot={f.rot} />
            </span>
          );
        })}

      {rooms.flatMap((r) => {
        const neighbours = only ? [] : layout.rooms.filter((o) => o !== r).flatMap((o) => o.rects);
        return roomWalls(r.rects.map(shift), neighbours.map(shift)).map((w, i) => (
          <span
            key={`${r.area.area_id}-w${i}`}
            class="nido-plan__wall"
            data-exterior={w.exterior ? "true" : "false"}
            style={wallStyle(w, cell, w.exterior ? facadeThickness(cell) : 3)}
          />
        ));
      })}

      {layout.openings
        .filter((o) => keep(o.area_id))
        .map((o) => {
          const room = layout.rooms.find((r) => r.area.area_id === o.area_id);
          const rect = room?.rects[o.rect] ?? room?.rects[0];
          if (!room || !rect) return null;
          const neighbours = only ? [] : layout.rooms.filter((x) => x !== room).flatMap((x) => x.rects);
          const exterior = roomWalls([rect], neighbours).some((w) => w.exterior && onSide(w, rect, o.side));
          const lit = summarizeRoom(byArea.get(o.area_id) ?? []).lightsOn > 0;
          return (
            <PlanOpeningMark
              key={o.id}
              opening={o}
              rect={shift(rect)}
              cell={cell}
              wall={exterior ? facadeThickness(cell) : 3}
              lit={lit}
              open={!!o.entity_id && hass.states[o.entity_id]?.state === "on"}
            />
          );
        })}

      {layout.devices
        .filter((d) => keep(d.area_id))
        .map((d) => {
          const entity = (byArea.get(d.area_id) ?? []).find((e) => e.entity_id === d.entity_id);
          if (!entity) return null;
          const Ico = DOMAIN_ICON[entity.domain];
          const on = ["on", "open", "playing", "heat", "cool"].includes(entity.state.state);
          const size = Math.round(Math.max(22, Math.min(40, cell * 0.75)));
          return (
            <span
              key={d.id}
              class="nido-veille-dev"
              data-on={on ? "true" : undefined}
              style={{ left: px(d.x, origin.x), top: px(d.y, origin.y), width: `${size}px`, height: `${size}px` }}
            >
              {Ico && <Ico size={Math.round(size * 0.52)} />}
            </span>
          );
        })}
    </div>
  );
}

function StatusCard({ stop, byArea, now, count, index }: { stop: TourStop; byArea: Map<string | null, ResolvedEntity[]>; now: Date; count: number; index: number }) {
  const status = roomStatus(byArea.get(stop.room.area.area_id) ?? [], now);
  return (
    <div class="nido-veille-status" key={stop.room.area.area_id}>
      <div class="nido-veille__eyebrow">
        {stop.floorLabel} · {index + 1} / {count}
      </div>
      <h2 class="nido-veille-status__name">{stop.room.area.name}</h2>
      {(status.temperature || status.humidity) && (
        <div class="nido-veille-status__measures">
          {status.temperature && (
            <span>
              <small>Temp.</small>
              <b>{status.temperature}</b>
            </span>
          )}
          {status.humidity && (
            <span>
              <small>Humid.</small>
              <b>{status.humidity}</b>
            </span>
          )}
        </div>
      )}
      <ul class="nido-veille-status__rows">
        {status.rows.map((r) => {
          const Ico = STATUS_ICON[r.icon];
          return (
            <li key={r.id} data-tone={r.tone}>
              <i>
                <Ico size={14} />
              </i>
              {r.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

interface ViewProps {
  hass: HassObject;
  stops: TourStop[];
  index: number;
  byArea: Map<string | null, ResolvedEntity[]>;
  now: Date;
  dateStr: string;
  timeStr: string;
  meta: ComponentChildren;
  next: ComponentChildren;
}

/** A · Visite guidée : tout le plan à l'écran, la caméra glisse et zoome de
 *  pièce en pièce ; les autres pièces s'estompent. */
export function TourView({ hass, stops, index, byArea, now, dateStr, timeStr }: ViewProps) {
  const [ref, size] = useSize<HTMLDivElement>();
  const stop = stops[index];
  const cell = size.w ? Math.min(size.w / stop.layout.cols, size.h / stop.layout.rows) : 0;
  const cam = cell ? cameraFor(stop.room, cell, size) : null;
  return (
    <div class="nido-veille-tour" ref={ref}>
      {cam && (
        <div
          class="nido-veille-tour__cam"
          key={stop.floorKey}
          style={{ transform: `translate(${cam.x}px, ${cam.y}px) scale(${cam.zoom})` }}
        >
          <PlanScene hass={hass} layout={stop.layout} cell={cell} byArea={byArea} focus={stop.room.area.area_id} />
        </div>
      )}
      <div class="nido-veille-tour__clock">
        <div class="nido-veille__date">{dateStr}</div>
        <div class="nido-veille__clock">{timeStr}</div>
      </div>
      <div class="nido-veille-tour__card">
        <StatusCard stop={stop} byArea={byArea} now={now} count={stops.length} index={index} />
      </div>
      <Progress count={stops.length} index={index} />
    </div>
  );
}

function Progress({ count, index }: { count: number; index: number }) {
  if (count > 14) return <div class="nido-veille-dots nido-veille-dots--text">{index + 1} / {count}</div>;
  return (
    <div class="nido-veille-dots" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <span key={i} data-on={i === index ? "true" : undefined} />
      ))}
    </div>
  );
}

/** B · Cartes postales : colonne fixe (heure, météo, statuts) et la pièce
 *  dessinée en grand, qui glisse vers la suivante. */
export function CardsView({ hass, stops, index, byArea, now, dateStr, timeStr, meta, next }: ViewProps) {
  const [ref, size] = useSize<HTMLDivElement>();
  const stop = stops[index];
  const box = useMemo(() => bbox(stop.room.rects), [stop]);
  const cell = size.w ? Math.min((size.w * 0.9) / box.w, (size.h * 0.86) / box.h) : 0;
  return (
    <div class="nido-veille-cards">
      <div class="nido-veille-cards__side">
        <div>
          <div class="nido-veille__date">{dateStr}</div>
          <div class="nido-veille__clock">{timeStr}</div>
          <div class="nido-veille-cards__meta">{meta}</div>
        </div>
        <StatusCard stop={stop} byArea={byArea} now={now} count={stops.length} index={index} />
        <div class="nido-veille-cards__next">{next}</div>
      </div>
      <div class="nido-veille-cards__stage" ref={ref}>
        {cell > 0 && (
          <div class="nido-veille-cards__slide" key={index}>
            <PlanScene hass={hass} layout={stop.layout} cell={cell} byArea={byArea} only={stop.room.area.area_id} />
          </div>
        )}
        <div class="nido-veille-cards__progress" key={`p${index}`} />
      </div>
    </div>
  );
}

/** Index de la pièce affichée, qui avance toutes les `stepMs`. */
export function useTourIndex(count: number, stepMs: number): number {
  const [index, setIndex] = useState(0);
  const countRef = useRef(count);
  countRef.current = count;
  useEffect(() => {
    if (count === 0) return;
    const t = window.setInterval(() => setIndex((i) => (i + 1) % Math.max(1, countRef.current)), stepMs);
    return () => window.clearInterval(t);
  }, [count > 0, stepMs]);
  return count === 0 ? 0 : index % count;
}
