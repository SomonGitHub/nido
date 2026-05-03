import { useMemo, useState } from "preact/hooks";
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
import { WeatherPanel } from "../components/weather-panel";
import { IconSettings, IconChevronRight, IconBell, IconLightOn } from "../icons";
import { pickAreaIcon } from "./shared";
import { loadLastNotificationRead, saveLastNotificationRead } from "../core/storage";
import { NotificationPanel, type NidoNotification } from "../components/notification-panel";
import { LightsPanel } from "../components/lights-panel";
import { CalendarWidget } from "../widgets/calendar";

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
  "calendar",
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
  calendarEntities: ResolvedEntity[];
}

function renderWidget(entity: ResolvedEntity, ctx: RenderCtx) {
  const common = { hass: ctx.hass, entity, roomLabel: ctx.areaName };
  switch (entity.domain) {
    case "light":
      return (
        <LightWidget key={entity.entity_id} {...common} hero={ctx.hero} breatheVariant={ctx.variant} />
      );
    case "cover":
      return <CoverWidget key={entity.entity_id} {...common} hero={ctx.hero} />;
    case "switch":
      return <SwitchWidget key={entity.entity_id} {...common} hero={ctx.hero} breatheVariant={ctx.variant} />;
    case "binary_sensor":
      return <BinarySensorWidget key={entity.entity_id} entity={entity} roomLabel={ctx.areaName} hero={ctx.hero} />;
    case "climate":
      return <ClimateWidget key={entity.entity_id} {...common} hero={ctx.hero} breatheVariant={ctx.variant} />;
    case "lock":
      return <LockWidget key={entity.entity_id} {...common} />;
    case "vacuum":
      return <VacuumWidget key={entity.entity_id} {...common} breatheVariant={ctx.variant} />;
    case "sensor":
      return <SensorWidget key={entity.entity_id} entity={entity} roomLabel={ctx.areaName} />;
    case "media_player":
      return <MediaPlayerWidget key={entity.entity_id} {...common} hero={ctx.hero} breatheVariant={ctx.variant} />;
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
    case "calendar":
      return <CalendarWidget key={entity.entity_id} hass={ctx.hass} entity={entity} roomLabel={ctx.areaName} hero={ctx.hero} calendarEntities={ctx.calendarEntities} />;
    default:
      return null;
  }
}

interface PersonPresence {
  name: string;
  picture?: string;
}

function areaToMqttKey(name: string): string {
  return name.replace(/[^\x00-\x7F]/g, "_").toLowerCase();
}

function detectRoomPresence(
  hass: HassObject,
  areas: Area[],
): Map<string, PersonPresence[]> {
  const areaKeyMap = new Map(areas.map((a) => [areaToMqttKey(a.name), a.area_id]));
  const byArea = new Map<string, Map<string, PersonPresence>>();

  for (const entity of Object.values(hass.states)) {
    if (!entity.entity_id.startsWith("sensor.")) continue;
    const stateKey = entity.state.toLowerCase();
    const areaId = areaKeyMap.get(stateKey);
    if (!areaId) continue;

    const suffix = entity.entity_id.slice("sensor.".length);
    const personName = suffix.slice(suffix.lastIndexOf("_") + 1);
    if (!personName) continue;

    const personEntity = hass.states[`person.${personName}`];
    const picture = personEntity?.attributes.entity_picture as string | undefined;

    const areaMap = byArea.get(areaId) ?? new Map<string, PersonPresence>();
    if (!areaMap.has(personName)) areaMap.set(personName, { name: personName, picture });
    byArea.set(areaId, areaMap);
  }

  return new Map(
    Array.from(byArea.entries()).map(([id, map]) => [id, Array.from(map.values())]),
  );
}

interface RoomCardProps {
  area: Area;
  entities: ResolvedEntity[];
  accent?: boolean;
  onOpen: () => void;
  dragProps: Record<string, unknown>;
  presence?: PersonPresence[];
}

function RoomCard({ area, entities, accent = false, onOpen, dragProps, presence }: RoomCardProps) {
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
          <div class="nido-room-card__head-right">
            {presence && presence.length > 0 && (
              <div class="nido-room-card__presence">
                {presence.map((p) =>
                  p.picture ? (
                    <img
                      key={p.name}
                      class="nido-room-card__avatar"
                      src={p.picture}
                      alt={p.name}
                    />
                  ) : (
                    <span key={p.name} class="nido-room-card__avatar nido-room-card__avatar--initial">
                      {p.name[0].toUpperCase()}
                    </span>
                  )
                )}
              </div>
            )}
            <IconChevronRight size={16} />
          </div>
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
                  {stats.temperature.value}
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

  const lightsOnEntities = useMemo(
    () => exposedEntities.filter((e) => e.domain === "light" && isEntityActive(e)),
    [exposedEntities],
  );
  const lightsOn = lightsOnEntities.length;

  const calendarEntities = useMemo(
    () => exposedEntities.filter((e) => e.domain === "calendar"),
    [exposedEntities],
  );

  const hasMeteoFrance = useMemo(() => {
    if (!weatherEntity) return false;
    const allIds = Object.keys(hass.states);
    return allIds.some(
      (id) => id.startsWith("sensor.") && (id.endsWith("_next_rain") || id.endsWith("_weather_alert") || id.endsWith("_uv"))
    );
  }, [hass.states, weatherEntity]);

  const [showWeatherPanel, setShowWeatherPanel] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showLightsPanel, setShowLightsPanel] = useState(false);

  const notifications = useMemo(() => {
    const sensor = hass.states["sensor.nido_notifications"];
    if (!sensor || !sensor.attributes.notifications) return [];
    return sensor.attributes.notifications as NidoNotification[];
  }, [hass.states["sensor.nido_notifications"]]);

  const lastRead = useMemo(() => loadLastNotificationRead(), [showNotifications]);

  const hasNewNotifications = useMemo(() => {
    if (notifications.length === 0) return false;
    if (!lastRead) return true;
    const latest = notifications[notifications.length - 1];
    return new Date(latest.timestamp) > new Date(lastRead);
  }, [notifications, lastRead]);

  const handleOpenNotifications = () => {
    setShowNotifications(true);
    saveLastNotificationRead(new Date().toISOString());
  };

  const personsAtHome = useMemo(() => {
    return Object.values(hass.states).filter(
      (s) => s.entity_id.startsWith("person.") && s.state === "home" && s.attributes.entity_picture
    );
  }, [hass.states]);

  const getPictureUrl = (ent: string | undefined) => {
    if (!ent) return null;
    if (ent.startsWith("http")) return ent;
    const base = (hass as any).hassUrl?.("");
    if (base) return base.replace(/\/$/, "") + ent;
    return ent;
  };

  const byArea = useMemo(() => groupByArea(exposedEntities), [exposedEntities]);
  const roomPresence = useMemo(() => detectRoomPresence(hass, areas), [hass.states, areas]);

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

  const hasVisibleFavorites = favoriteEntities.some(e => 
    !(e.domain === "binary_sensor" && e.state.state === "off")
  );

  let activeCounter = 0;

  const favoritesSection =
    hasVisibleFavorites ? (
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
            const isHiddenBinary = e.domain === "binary_sensor" && e.state.state === "off";
            if (isHiddenBinary) return null;

            activeCounter += 1;
            const isHero = activeCounter === 1;
            const variant = (((activeCounter - 1) % 4) + 1) as 1 | 2 | 3 | 4;
            return (
              <div
                key={e.entity_id}
                class="nido-drag-item"
                data-hero={isHero ? "true" : "false"}
                {...favDrag.itemPropsFor(e.entity_id)}
              >
                {renderWidget(e, {
                  hass,
                  areaName: areas.find((a) => a.area_id === e.area_id)?.name ?? "",
                  hero: isHero,
                  variant,
                  calendarEntities,
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
          <div class="nido-topbar__brand">
            <div class="nido-topbar__clock">{timeStr}</div>
            <span>nido</span>
          </div>
          <div class="nido-topbar__actions">
            {weatherEntity && (
              hasMeteoFrance ? (
                <button
                  type="button"
                  class="nido-weather-pill-btn"
                  onClick={() => setShowWeatherPanel(true)}
                  aria-label="Voir la météo détaillée"
                >
                  <WeatherPill entity={weatherEntity} />
                </button>
              ) : (
                <WeatherPill entity={weatherEntity} />
              )
            )}
            {lightsOn > 0 && (
              <button
                type="button"
                class="nido-lights-pill-btn"
                onClick={() => setShowLightsPanel(true)}
                aria-label={`${lightsOn} lumière${lightsOn > 1 ? "s" : ""} allumée${lightsOn > 1 ? "s" : ""}`}
              >
                <div class="nido-lights-pill">
                  <IconLightOn size={16} />
                  <span class="nido-lights-pill__count">{lightsOn}</span>
                  <span class="nido-lights-pill__label">
                    {lightsOn === 1 ? "lumière" : "lumières"}
                  </span>
                </div>
              </button>
            )}
            <button
              type="button"
              class="nido-bell-btn"
              onClick={handleOpenNotifications}
              aria-label="Notifications"
            >
              <IconBell size={20} />
              {hasNewNotifications && <span class="nido-bell-btn__badge" />}
            </button>
            <button
              type="button"
              class="n-pill-btn n-pill-btn--ghost"
              onClick={onConfigure}
            >
              <IconSettings size={16} />
            </button>
          </div>
        </header>

        <section class="nido-hero">
          <div class="nido-hero__date">{dateStr}</div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            <h1 style={{ margin: 0 }}>
              {greeting}, <em>{userName}</em>
            </h1>
            {personsAtHome.length > 0 && (
              <div class="nido-home-pill">
                <div class="nido-home-pill__avatars">
                  {personsAtHome.map((p) => {
                    const pic = getPictureUrl(p.attributes.entity_picture as string);
                    return pic ? (
                      <img 
                        key={p.entity_id}
                        src={pic} 
                        alt={p.attributes.friendly_name as string} 
                        title={p.attributes.friendly_name as string}
                        class="nido-home-pill__avatar"
                      />
                    ) : null;
                  })}
                </div>
                <span class="nido-home-pill__text">À la maison</span>
              </div>
            )}
          </div>
          <p class="nido-hero__sub" style={{ marginTop: '24px' }}>{sub}</p>
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
                      presence={roomPresence.get(a.area_id)}
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

      {showWeatherPanel && weatherEntity && (
        <WeatherPanel
          hass={hass}
          weatherEntityId={weatherEntity.entity_id}
          onClose={() => setShowWeatherPanel(false)}
        />
      )}

      {showNotifications && (
        <NotificationPanel
          hass={hass}
          notifications={notifications}
          onClose={() => setShowNotifications(false)}
        />
      )}

      {showLightsPanel && (
        <LightsPanel
          hass={hass}
          lights={lightsOnEntities}
          areas={areas}
          onClose={() => setShowLightsPanel(false)}
        />
      )}
    </div>
  );
}
