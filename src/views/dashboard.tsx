import { useMemo } from "preact/hooks";
import type { HassObject } from "../types";
import type { Area } from "../core/areas";
import {
  groupByArea,
  isEntityActive,
  extractRoomStats,
  type ResolvedEntity,
} from "../core/entities";
import { applyOrder, useDragReorder } from "../core/drag-reorder";
import { LightWidget } from "../widgets/light";
import { CoverWidget } from "../widgets/cover";
import { SwitchWidget } from "../widgets/switch";
import { BinarySensorWidget } from "../widgets/binary-sensor";
import { ClimateWidget } from "../widgets/climate";
import { LockWidget } from "../widgets/lock";
import { VacuumWidget } from "../widgets/vacuum";
import { SensorWidget } from "../widgets/sensor";
import { MediaPlayerWidget } from "../widgets/media-player";
import { AlarmWidget } from "../widgets/alarm";
import { CameraWidget } from "../widgets/camera";
import { FanWidget } from "../widgets/fan";
import { SceneScriptWidget } from "../widgets/scene-script";
import { WeatherWidget, WeatherPill } from "../widgets/weather";
import { IconSettings, IconChevronRight } from "../icons";
import { pickAreaIcon } from "./shared";

interface DashboardProps {
  hass: HassObject;
  areas: Area[];
  entities: ResolvedEntity[];
  favorites: string[];
  exposed: string[];
  roomsOrder: string[];
  onConfigure: () => void;
  onOpenRoom: (areaId: string) => void;
  onReorderFavorites: (ids: string[]) => void;
  onReorderRooms: (ids: string[]) => void;
}

const SUPPORTED_DOMAINS = new Set([
  "light",
  "cover",
  "switch",
  "binary_sensor",
  "climate",
  "lock",
  "vacuum",
  "sensor",
  "media_player",
  "alarm_control_panel",
  "camera",
  "fan",
  "scene",
  "script",
  "weather",
]);

function greetingFor(hour: number): { greeting: string; sub: string } {
  if (hour >= 5 && hour < 12) return { greeting: "Bonjour", sub: "La maison se réveille doucement" };
  if (hour >= 12 && hour < 18) return { greeting: "Bel après-midi", sub: "Tout va bien à la maison" };
  if (hour >= 18 && hour < 22) return { greeting: "Bonsoir", sub: "Tout le monde est rentré" };
  return { greeting: "Bonne nuit", sub: "La maison veille sur vous" };
}

interface RenderCtx {
  hass: HassObject;
  areaName: string;
  hero: boolean;
  variant: 1 | 2 | 3 | 4;
}

function renderWidget(entity: ResolvedEntity, ctx: RenderCtx) {
  const common = { hass: ctx.hass, entity, roomLabel: ctx.areaName };
  switch (entity.domain) {
    case "light":
      return (
        <LightWidget key={entity.entity_id} {...common} hero={ctx.hero} breatheVariant={ctx.variant} />
      );
    case "cover":
      return <CoverWidget key={entity.entity_id} {...common} />;
    case "switch":
      return <SwitchWidget key={entity.entity_id} {...common} breatheVariant={ctx.variant} />;
    case "binary_sensor":
      return <BinarySensorWidget key={entity.entity_id} entity={entity} roomLabel={ctx.areaName} />;
    case "climate":
      return <ClimateWidget key={entity.entity_id} {...common} breatheVariant={ctx.variant} />;
    case "lock":
      return <LockWidget key={entity.entity_id} {...common} />;
    case "vacuum":
      return <VacuumWidget key={entity.entity_id} {...common} breatheVariant={ctx.variant} />;
    case "sensor":
      return <SensorWidget key={entity.entity_id} entity={entity} roomLabel={ctx.areaName} />;
    case "media_player":
      return <MediaPlayerWidget key={entity.entity_id} {...common} breatheVariant={ctx.variant} />;
    case "alarm_control_panel":
      return <AlarmWidget key={entity.entity_id} {...common} />;
    case "camera":
      return <CameraWidget key={entity.entity_id} {...common} />;
    case "fan":
      return <FanWidget key={entity.entity_id} {...common} breatheVariant={ctx.variant} />;
    case "scene":
    case "script":
      return <SceneScriptWidget key={entity.entity_id} {...common} />;
    case "weather":
      return <WeatherWidget key={entity.entity_id} entity={entity} roomLabel={ctx.areaName} />;
    default:
      return null;
  }
}

interface RoomCardProps {
  area: Area;
  entities: ResolvedEntity[];
  accent?: boolean;
  onOpen: () => void;
  dragProps: Record<string, unknown>;
}

function RoomCard({ area, entities, accent = false, onOpen, dragProps }: RoomCardProps) {
  const Icon = pickAreaIcon(area.name);
  const devices = entities.filter(
    (e) => e.domain !== "sensor" && e.domain !== "binary_sensor",
  ).length;
  const active = entities.filter(isEntityActive).length;
  const stats = extractRoomStats(entities);

  return (
    <div
      role="button"
      tabIndex={0}
      class={`nido-room-card ${accent ? "nido-room-card--accent" : ""}`}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen();
        }
      }}
      {...dragProps}
    >
      {accent && (
        <svg class="nido-room-card__deco" viewBox="0 0 120 120" aria-hidden="true">
          <circle cx="60" cy="60" r="48" fill="none" stroke="rgba(244,237,226,0.08)" />
          <circle cx="60" cy="60" r="32" fill="none" stroke="rgba(244,237,226,0.08)" />
        </svg>
      )}
      <div class="nido-room-card__body">
        <div class="nido-room-card__head">
          <span class="nido-room-card__icon">
            <Icon size={20} />
          </span>
          <IconChevronRight size={16} />
        </div>
        <div class="nido-room-card__foot">
          <div class="nido-room-card__name">{area.name}</div>
          <div class="nido-room-card__meta">
            <span>
              {devices} appareil{devices > 1 ? "s" : ""}
            </span>
            {active > 0 && (
              <>
                <span class="nido-room-card__sep">•</span>
                <span class="nido-room-card__active">
                  <span class="nido-room-card__dot" />
                  {active} actif{active > 1 ? "s" : ""}
                </span>
              </>
            )}
          </div>
          {(stats.temperature || stats.humidity) && (
            <div class="nido-room-card__stats">
              {stats.temperature && (
                <span class="nido-room-card__stat">
                  {Math.round(parseFloat(stats.temperature.value))}
                  {stats.temperature.unit || "°"}
                </span>
              )}
              {stats.humidity && (
                <span class="nido-room-card__stat">
                  {Math.round(parseFloat(stats.humidity.value))}
                  {stats.humidity.unit || "%"}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function Dashboard({
  hass,
  areas,
  entities,
  favorites,
  exposed,
  roomsOrder,
  onConfigure,
  onOpenRoom,
  onReorderFavorites,
  onReorderRooms,
}: DashboardProps) {
  const userName = hass.user?.name ?? "vous";

  const now = new Date();
  const hour = now.getHours();
  const { greeting, sub } = greetingFor(hour);
  const timeStr = `${String(hour).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
  const dateStr = now
    .toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" })
    .replace(/^\w/, (c) => c.toUpperCase());

  const exposedSet = useMemo(() => new Set(exposed), [exposed]);
  const exposedEntities = useMemo(
    () => entities.filter((e) => exposedSet.has(e.entity_id) && SUPPORTED_DOMAINS.has(e.domain)),
    [entities, exposedSet],
  );
  const weatherEntity = useMemo(
    () => exposedEntities.find((e) => e.domain === "weather"),
    [exposedEntities],
  );
  const byArea = useMemo(() => groupByArea(exposedEntities), [exposedEntities]);

  const favoriteEntities = useMemo(() => {
    const byId = new Map(exposedEntities.map((e) => [e.entity_id, e]));
    return favorites
      .map((id) => byId.get(id))
      .filter((e): e is ResolvedEntity => !!e);
  }, [exposedEntities, favorites]);

  const populatedAreas = useMemo(() => {
    const filtered = areas.filter((a) => (byArea.get(a.area_id) ?? []).length > 0);
    return applyOrder(filtered, roomsOrder, (a) => a.area_id);
  }, [areas, byArea, roomsOrder]);

  const favDrag = useDragReorder<ResolvedEntity>(
    favoriteEntities,
    (e) => e.entity_id,
    (next) => onReorderFavorites(next.map((e) => e.entity_id)),
  );
  const roomsDrag = useDragReorder<Area>(
    populatedAreas,
    (a) => a.area_id,
    (next) => onReorderRooms(next.map((a) => a.area_id)),
  );

  let activeCounter = 0;

  const favoritesSection =
    favoriteEntities.length > 0 ? (
      <section class="nido-room nido-room--favorites" key="__favorites">
        <div class="nido-section-title">
          <h2 class="is-accent">Favoris</h2>
        </div>
        <div
          class={`nido-room__grid ${favDrag.isDragging ? "is-dragging" : ""}`}
          ref={(el) => {
            favDrag.containerRef.current = el;
          }}
        >
          {favoriteEntities.map((e) => {
            activeCounter += 1;
            const variant = (((activeCounter - 1) % 4) + 1) as 1 | 2 | 3 | 4;
            return (
              <div
                key={e.entity_id}
                class="nido-drag-item"
                {...favDrag.itemPropsFor(e.entity_id)}
              >
                {renderWidget(e, {
                  hass,
                  areaName: areas.find((a) => a.area_id === e.area_id)?.name ?? "",
                  hero: activeCounter === 1 && e.domain === "light",
                  variant,
                })}
              </div>
            );
          })}
        </div>
      </section>
    ) : null;

  const hasContent = exposedEntities.length > 0;

  return (
    <div class="nido-shell">
      <div class="nido-dashboard">
        <header class="nido-topbar">
          <div class="nido-topbar__brand">Nido</div>
          <div class="nido-topbar__actions">
            {weatherEntity && <WeatherPill entity={weatherEntity} />}
            <button
              type="button"
              class="n-pill-btn n-pill-btn--ghost"
              onClick={onConfigure}
            >
              <IconSettings size={14} />
              <span>Personnaliser</span>
            </button>
            <div class="nido-topbar__time">{timeStr}</div>
          </div>
        </header>

        <section class="nido-hero">
          <div class="nido-hero__date">{dateStr}</div>
          <h1>
            {greeting}, <em>{userName}</em>
          </h1>
          <p class="nido-hero__sub">{sub}</p>
        </section>

        {hasContent ? (
          <>
            {favoritesSection}

            {populatedAreas.length > 0 && (
              <section class="nido-rooms-section">
                <div class="nido-section-title">
                  <h2>Pièces</h2>
                </div>
                <div
                  class={`nido-rooms-grid ${roomsDrag.isDragging ? "is-dragging" : ""}`}
                  ref={(el) => {
                    roomsDrag.containerRef.current = el;
                  }}
                >
                  {populatedAreas.map((a, i) => (
                    <RoomCard
                      key={a.area_id}
                      area={a}
                      entities={byArea.get(a.area_id) ?? []}
                      accent={i === 0}
                      onOpen={() => onOpenRoom(a.area_id)}
                      dragProps={roomsDrag.itemPropsFor(a.area_id)}
                    />
                  ))}
                </div>
              </section>
            )}
          </>
        ) : (
          <div class="nido-empty">
            <p class="n-muted">
              Aucun appareil exposé pour l'instant. Ouvrez « Personnaliser » pour choisir vos
              entités.
            </p>
            <button type="button" class="n-ob__primary" onClick={onConfigure}>
              Personnaliser Nido
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
