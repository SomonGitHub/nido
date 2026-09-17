import { useEffect, useMemo, useRef, useState } from "preact/hooks";
import type { JSX } from "preact";
import type { HassObject } from "../types";
import type { Area } from "../core/areas";
import {
  groupByArea,
  isEntityActive,
  extractRoomStats,
  summarizeRoom,
  sortByRoomThenName,
  detectOccupancy,
  lastActivity,
  type ResolvedEntity,
  type RoomAlertKind,
  type RoomStats,
  type RoomOccupancy,
  type RoomOccupancyKind,
  type RoomActivity,
} from "../core/entities";
import { applyOrder, useDragReorder } from "../core/drag-reorder";
import { useRoomLayout, type RoomLayout } from "../core/use-room-layout";
import { WeatherPill } from "../widgets/weather";
import { WeatherPanel } from "../components/weather-panel";
import {
  IconSettings,
  IconChevronRight,
  IconBell,
  IconLightOn,
  IconBlind,
  IconNotebook,
  IconMusic,
  IconWindow,
  IconDoor,
  IconWater,
  IconSmoke,
  IconThermostat,
  IconHumidity,
  IconSun,
  IconSensor,
} from "../icons";
import { pickAreaIcon, DragItem } from "./shared";
import { renderWidget, SUPPORTED_DOMAINS } from "./render-widget";
import { loadLastNotificationRead, saveLastNotificationRead } from "../core/storage";
import { playNotificationSound } from "../core/notification-sound";
import { NotificationPanel, type NidoNotification } from "../components/notification-panel";
import { LightsPanel } from "../components/lights-panel";
import { CoversPanel } from "../components/covers-panel";
import { OpeningsPanel } from "../components/openings-panel";
import { ShoppingPanel } from "../components/shopping-panel";
import { PowerGaugeWidget } from "../widgets/power-gauge";
import { POWER_ENTITY_ID } from "./energy";
import { KidsCard } from "../widgets/kids-card";
import { KidsPanel } from "../components/kids-panel";
import { useKidsSync } from "../core/kids-sync";
import { useMinuteTick } from "../core/use-minute-tick";
import { useStateFlash } from "../core/use-state-flash";
import { buildDigest } from "../core/home-digest";
import { durationLabel } from "../core/time-ago";

interface DashboardProps {
  hass: HassObject;
  areas: Area[];
  entities: ResolvedEntity[];
  favorites: string[];
  exposed: string[];
  roomsOrder: string[];
  kidsEnabled: boolean;
  onConfigure: () => void;
  onOpenRoom: (areaId: string) => void;
  onOpenEnergy?: () => void;
  onReorderFavorites: (ids: string[]) => void;
  onReorderRooms: (ids: string[]) => void;
}

export function greetingFor(hour: number): { greeting: string; sub: string } {
  if (hour >= 5 && hour < 12) return { greeting: "Bonjour", sub: "La maison se réveille doucement" };
  if (hour >= 12 && hour < 18) return { greeting: "Bel après-midi", sub: "Tout va bien à la maison" };
  if (hour >= 18 && hour < 22) return { greeting: "Bonsoir", sub: "Tout le monde est rentré" };
  return { greeting: "Bonne nuit", sub: "La maison veille sur vous" };
}

/** Porteur d'un téléphone localisé dans une pièce. */
interface PersonPresence {
  name: string;
  picture?: string;
}

function areaToMqttKey(name: string): string {
  return name.replace(/[^\x00-\x7F]/g, "_").toLowerCase();
}

/** Localisation du **téléphone** par pièce (≠ la personne, qui peut l'avoir
 *  laissé sur un plan de travail) : un `sensor` dont l'état vaut le nom d'une
 *  pièce, suffixé par le prénom du porteur. Restreint aux entités ajoutées,
 *  comme tout signal de présence — et ça évite au passage qu'un capteur
 *  quelconque valant « salon » fasse apparaître un avatar. */
function detectRoomPresence(
  hass: HassObject,
  areas: Area[],
  exposedEntities: ResolvedEntity[],
): Map<string, PersonPresence[]> {
  const areaKeyMap = new Map(areas.map((a) => [areaToMqttKey(a.name), a.area_id]));
  const byArea = new Map<string, Map<string, PersonPresence>>();

  for (const resolved of exposedEntities) {
    if (resolved.domain !== "sensor") continue;
    const entity = resolved.state;
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
  hass: HassObject;
  area: Area;
  entities: ResolvedEntity[];
  accent?: boolean;
  layout: RoomLayout;
  onOpen: () => void;
  dragProps: Record<string, unknown>;
  presence?: PersonPresence[];
  occupancy?: RoomOccupancy | null;
  activity?: RoomActivity | null;
}

const OPENING_DEVICE_CLASSES = new Set(["door", "garage_door", "window"]);

const ALERT_ICON: Record<RoomAlertKind, (p: { size?: number }) => JSX.Element> = {
  window: IconWindow,
  door: IconDoor,
  moisture: IconWater,
  smoke: IconSmoke,
  gas: IconSmoke,
};

function activityLabel(a: RoomActivity): string {
  if (a.kind === "presence") return `Présence depuis ${durationLabel(a.minutes)}`;
  if (a.kind === "motion") return `Mouvement il y a ${durationLabel(a.minutes)}`;
  return `Calme depuis ${durationLabel(a.minutes)}`;
}

/** Sur téléphone la puce est seule sur sa ligne : l'icône suffit à dire
 *  « présence » ou « mouvement », mais une durée nue ne dit pas de quoi
 *  elle parle. */
function activityShort(a: RoomActivity): string {
  if (a.kind === "quiet") return `Calme ${durationLabel(a.minutes)}`;
  return durationLabel(a.minutes);
}

const OCCUPANCY_SHORT: Record<RoomOccupancyKind, string> = {
  presence: "Présence",
  motion: "Mouvement",
};

const ALERT_SHORT: Record<RoomAlertKind, string> = {
  window: "Fenêtre",
  door: "Porte",
  moisture: "Fuite",
  smoke: "Fumée",
  gas: "Gaz",
};

interface BandItem {
  key: string;
  Icon: (p: { size?: number }) => JSX.Element;
  label: string;
  value: string;
  unit: string;
}

function roomBandItems(stats: RoomStats): BandItem[] {
  const items: BandItem[] = [];
  if (stats.temperature) {
    items.push({
      key: "temperature",
      Icon: IconThermostat,
      label: "Temp.",
      value: stats.temperature.value,
      unit: stats.temperature.unit || "°",
    });
  }
  if (stats.humidity) {
    items.push({
      key: "humidity",
      Icon: IconHumidity,
      label: "Humid.",
      value: Math.round(parseFloat(stats.humidity.value)).toString(),
      unit: stats.humidity.unit || "%",
    });
  }
  if (stats.illuminance) {
    items.push({
      key: "illuminance",
      Icon: IconSun,
      label: "Lumino.",
      value: Math.round(parseFloat(stats.illuminance.value)).toString(),
      unit: stats.illuminance.unit || "lx",
    });
  }
  return items;
}

function RoomCard({
  hass,
  area,
  entities,
  accent = false,
  layout,
  onOpen,
  dragProps,
  presence,
  occupancy,
  activity: activityProp,
}: RoomCardProps) {
  const Icon = pickAreaIcon(area.name);
  const stats = extractRoomStats(entities);
  const summary = summarizeRoom(entities);
  const flash = useStateFlash(
    `${summary.lightsOn}|${summary.coversOpen}|${summary.mediaPlaying}|${summary.alerts.length}|${occupancy?.kind ?? ""}`,
  );
  const band = roomBandItems(stats);
  /* Un volet ouvert est un état, pas une activité : il n'empêche plus la
     pièce d'être considérée au repos. Sa puce reste affichée à part. */
  const idle =
    summary.lightsOn === 0 && !summary.mediaPlaying && summary.alerts.length === 0;
  const phone = layout === "phone";
  const activity = idle ? (activityProp ?? null) : null;

  const runAction = (e: Event, domain: string, service: string, ids: string[]) => {
    e.stopPropagation();
    if (ids.length === 0) return;
    void hass.callService(domain, service, { entity_id: ids });
  };

  const occupancyEl = occupancy ? (
    <span
      class={`nido-room-card__occupancy nido-room-card__occupancy--${occupancy.kind}`}
      title={occupancy.label}
    />
  ) : null;

  const cardClass = [
    "nido-room-card",
    `nido-room-card--${layout}`,
    accent ? "nido-room-card--accent" : "",
    occupancy ? "nido-room-card--occupied" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const deco = accent ? (
    <svg class="nido-room-card__deco" viewBox="0 0 120 120" aria-hidden="true">
      <circle cx="60" cy="60" r="48" fill="none" stroke="rgba(244,237,226,0.08)" />
      <circle cx="60" cy="60" r="32" fill="none" stroke="rgba(244,237,226,0.08)" />
    </svg>
  ) : null;

  const presenceEl =
    presence && presence.length > 0 ? (
      <div class="nido-room-card__presence">
        {presence.map((p) =>
          p.picture ? (
            <img key={p.name} class="nido-room-card__avatar" src={p.picture} alt={p.name} />
          ) : (
            <span key={p.name} class="nido-room-card__avatar nido-room-card__avatar--initial">
              {p.name[0].toUpperCase()}
            </span>
          ),
        )}
      </div>
    ) : null;

  /* Sur téléphone la puce volet sort du groupe et s'ancre à droite de la
     ligne : les cartes s'empilent, et une position stable se lit en
     diagonale — sinon elle glisse selon la présence du bandeau de mesures. */
  const coverChipEl =
    summary.coversOpen > 0 ? (
      <span class="nido-room-card__chip nido-room-card__chip--cover">
        <IconBlind size={13} />
        {summary.coversOpen === 1
          ? `${Math.round(summary.coverPositions[0])} %`
          : summary.coversOpen}
      </span>
    ) : null;

  const chipsEl = (
    <div class="nido-room-card__chips">
      {occupancy && activity?.kind !== "presence" && (
        <span
          class="nido-room-card__chip nido-room-card__chip--presence"
          title={occupancy.label}
        >
          <IconSensor size={13} />
          {OCCUPANCY_SHORT[occupancy.kind]}
        </span>
      )}
      {summary.lightsOn > 0 && (
        <span class="nido-room-card__chip nido-room-card__chip--on">
          <IconLightOn size={13} />
          {summary.lightsOn}
        </span>
      )}
      {!phone && coverChipEl}
      {summary.mediaPlaying && (
        <span class="nido-room-card__chip nido-room-card__chip--on">
          <IconMusic size={13} />
          {!phone && "En lecture"}
        </span>
      )}
      {summary.alerts.map((a) => {
        const AIcon = ALERT_ICON[a.kind];
        return (
          <span key={a.label} class="nido-room-card__chip nido-room-card__chip--alert">
            <AIcon size={13} />
            {phone ? ALERT_SHORT[a.kind] : a.label}
          </span>
        );
      })}
      {idle &&
        (activity ? (
          <span
            class={`nido-room-card__chip ${
              activity.kind === "presence"
                ? "nido-room-card__chip--presence"
                : "nido-room-card__chip--idle"
            }`}
            title={activityLabel(activity)}
          >
            {activity.kind !== "quiet" && <IconSensor size={13} />}
            {phone ? activityShort(activity) : activityLabel(activity)}
          </span>
        ) : (
          <span class="nido-room-card__chip nido-room-card__chip--idle">Tout éteint</span>
        ))}
    </div>
  );

  const bandEl =
    band.length > 0 ? (
      <div class="nido-room-card__band">
        {band.map(({ key, Icon: StatIcon, label, value, unit }) => (
          <span key={key} class="nido-room-card__band-item">
            <span class="nido-room-card__band-icon">
              <StatIcon size={14} />
            </span>
            <span class="nido-room-card__band-label">{label}</span>
            <span class="nido-room-card__band-value">
              {value}
              <span class="nido-room-card__band-unit">{unit}</span>
            </span>
          </span>
        ))}
      </div>
    ) : null;

  const actionsEl =
    layout === "touch" && (summary.lightIds.length > 0 || summary.coverIds.length > 0) ? (
      <div class="nido-room-card__actions" data-no-drag>
        {summary.lightIds.length > 0 && (
          <button
            type="button"
            class={`n-pill-btn${summary.lightsOn === 0 ? " is-idle" : ""}`}
            onClick={(e) =>
              runAction(
                e,
                "light",
                summary.lightsOn > 0 ? "turn_off" : "turn_on",
                summary.lightIds,
              )
            }
          >
            <IconLightOn size={16} />
            {summary.lightsOn > 0 ? "Éteindre" : "Allumer"}
          </button>
        )}
        {summary.coverIds.length > 0 && (
          <button
            type="button"
            class="n-icon-btn"
            aria-label={summary.coversOpen > 0 ? "Fermer les volets" : "Ouvrir les volets"}
            onClick={(e) =>
              runAction(
                e,
                "cover",
                summary.coversOpen > 0 ? "close_cover" : "open_cover",
                summary.coverIds,
              )
            }
          >
            <IconBlind size={18} />
          </button>
        )}
      </div>
    ) : null;

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onOpen();
    }
  };

  if (phone) {
    return (
      <div
        role="button"
        tabIndex={0}
        class={cardClass}
        data-flash={flash ? "true" : undefined}
        onClick={onOpen}
        onKeyDown={onKeyDown}
        {...dragProps}
      >
        {deco}
        <div class="nido-room-card__row">
          <span class="nido-room-card__icon">
            <Icon size={19} />
            {occupancyEl}
          </span>
          <span class="nido-room-card__name">{area.name}</span>
          {presenceEl}
          <span class="nido-room-card__chev">
            <IconChevronRight size={16} />
          </span>
        </div>
        <div class="nido-room-card__line">
          {bandEl}
          {chipsEl}
          {coverChipEl}
        </div>
      </div>
    );
  }

  return (
    <div
      role="button"
      tabIndex={0}
      class={cardClass}
      data-flash={flash ? "true" : undefined}
      onClick={onOpen}
      onKeyDown={onKeyDown}
      {...dragProps}
    >
      {deco}
      <div class="nido-room-card__body">
        <div class="nido-room-card__head">
          <span class="nido-room-card__icon">
            <Icon size={20} />
            {occupancyEl}
          </span>
          <div class="nido-room-card__head-right">
            {presenceEl}
            <IconChevronRight size={16} />
          </div>
        </div>
        <div class="nido-room-card__foot">
          <div class="nido-room-card__name">{area.name}</div>
          {chipsEl}
          {bandEl}
          {actionsEl}
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
  kidsEnabled,
  onConfigure,
  onOpenRoom,
  onOpenEnergy,
  onReorderFavorites,
  onReorderRooms,
}: DashboardProps) {
  const userName = hass.user?.name ?? "vous";

  const now = useMinuteTick();
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

  const areaNameById = useMemo(
    () => new Map(areas.map((a) => [a.area_id, a.name])),
    [areas],
  );

  const lightEntities = useMemo(
    () => exposedEntities.filter((e) => e.domain === "light"),
    [exposedEntities],
  );
  const sortedLights = useMemo(
    () => sortByRoomThenName(lightEntities, areaNameById),
    [lightEntities, areaNameById],
  );
  const lightsOn = useMemo(
    () => lightEntities.filter(isEntityActive).length,
    [lightEntities],
  );

  const coverEntities = useMemo(
    () => exposedEntities.filter((e) => e.domain === "cover"),
    [exposedEntities],
  );
  const sortedCovers = useMemo(
    () => sortByRoomThenName(coverEntities, areaNameById),
    [coverEntities, areaNameById],
  );
  const coversOpen = useMemo(
    () => coverEntities.filter(isEntityActive).length,
    [coverEntities],
  );

  const openingEntities = useMemo(
    () =>
      exposedEntities.filter(
        (e) =>
          e.domain === "binary_sensor" &&
          OPENING_DEVICE_CLASSES.has(e.state.attributes.device_class as string),
      ),
    [exposedEntities],
  );
  const sortedOpenings = useMemo(
    () => sortByRoomThenName(openingEntities, areaNameById),
    [openingEntities, areaNameById],
  );
  const openingsOpen = useMemo(
    () => openingEntities.filter(isEntityActive).length,
    [openingEntities],
  );

  const calendarEntities = useMemo(
    () => exposedEntities.filter((e) => e.domain === "calendar"),
    [exposedEntities],
  );

  const digest = useMemo(
    () => buildDigest({ hass, entities: exposedEntities, areaNameById, now }),
    [hass.states, exposedEntities, areaNameById, now],
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
  const [showCoversPanel, setShowCoversPanel] = useState(false);
  const [showOpeningsPanel, setShowOpeningsPanel] = useState(false);
  const [showShoppingPanel, setShowShoppingPanel] = useState(false);
  const [showKidsPanel, setShowKidsPanel] = useState(false);
  const [kidsData, updateKidsData] = useKidsSync(hass);

  const notifications = useMemo(() => {
    const sensor = hass.states["sensor.nido_notifications"];
    if (!sensor || !sensor.attributes.notifications) return [];
    return sensor.attributes.notifications as NidoNotification[];
  }, [hass.states["sensor.nido_notifications"]]);

  const knownNotifIdsRef = useRef<Set<string>>(new Set(notifications.map((n) => n.id)));
  const isFirstNotifSyncRef = useRef(true);

  useEffect(() => {
    const known = knownNotifIdsRef.current;
    if (isFirstNotifSyncRef.current) {
      isFirstNotifSyncRef.current = false;
      knownNotifIdsRef.current = new Set(notifications.map((n) => n.id));
      return;
    }
    const hasNew = notifications.some((n) => !known.has(n.id));
    if (hasNew) playNotificationSound();
    knownNotifIdsRef.current = new Set(notifications.map((n) => n.id));
  }, [notifications]);

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
  const roomPresence = useMemo(
    () => detectRoomPresence(hass, areas, exposedEntities),
    [hass.states, areas, exposedEntities],
  );
  /* Occupation et activité se lisent sur `byArea`, donc sur les seules
     entités exposées : Nido ne signale jamais un capteur que l'utilisateur
     n'a pas ajouté, même quand Home Assistant le connaît. */
  const roomOccupancy = useMemo(() => {
    const map = new Map<string, RoomOccupancy>();
    for (const [areaId, list] of byArea) {
      if (!areaId) continue;
      const occ = detectOccupancy(list);
      if (occ) map.set(areaId, occ);
    }
    return map;
  }, [byArea]);
  const roomActivity = useMemo(() => {
    const map = new Map<string, RoomActivity>();
    for (const [areaId, list] of byArea) {
      if (!areaId) continue;
      const act = lastActivity(list, now);
      if (act) map.set(areaId, act);
    }
    return map;
  }, [byArea, now]);
  const roomLayout = useRoomLayout();

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
              <DragItem
                key={e.entity_id}
                signature={`${e.state.state}|${e.state.last_changed}`}
                hero={isHero}
                dragProps={favDrag.itemPropsFor(e.entity_id)}
              >
                {renderWidget(e, {
                  hass,
                  areaName: areas.find((a) => a.area_id === e.area_id)?.name ?? "",
                  hero: isHero,
                  variant,
                  calendarEntities,
                })}
              </DragItem>
            );
          })}
        </div>
      </section>
    ) : null;

  const showEnergy =
    !!onOpenEnergy && exposedSet.has(POWER_ENTITY_ID) && !!hass.states[POWER_ENTITY_ID];

  const hasContent = exposedEntities.length > 0;

  return (
    <div class="nido-shell">
      <div class="nido-dashboard">
        <header class="nido-topbar">
          <div class="nido-topbar__brand">
            <div class="nido-topbar__clock">{timeStr}</div>
            <span>nido</span>
          </div>

          <div class="nido-topbar__weather">
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
          </div>

          <div class="nido-topbar__utility">
            {lightEntities.length > 0 && (
              <button
                type="button"
                class="nido-lights-pill-btn"
                onClick={() => setShowLightsPanel(true)}
                aria-label={`${lightsOn} lumière${lightsOn > 1 ? "s" : ""} allumée${lightsOn > 1 ? "s" : ""}`}
              >
                <div class="nido-lights-pill">
                  <IconLightOn size={16} />
                  <span class="nido-lights-pill__count">{lightsOn}</span>
                </div>
              </button>
            )}
            {coverEntities.length > 0 && (
              <button
                type="button"
                class="nido-covers-pill-btn"
                onClick={() => setShowCoversPanel(true)}
                aria-label={`${coversOpen} volet${coversOpen > 1 ? "s" : ""} ouvert${coversOpen > 1 ? "s" : ""}`}
              >
                <div class="nido-covers-pill">
                  <IconBlind size={16} />
                  <span class="nido-covers-pill__count">{coversOpen}</span>
                </div>
              </button>
            )}
            {openingEntities.length > 0 && (
              <button
                type="button"
                class="nido-covers-pill-btn"
                onClick={() => setShowOpeningsPanel(true)}
                aria-label={`${openingsOpen} ouvrant${openingsOpen > 1 ? "s" : ""} ouvert${openingsOpen > 1 ? "s" : ""}`}
              >
                <div class="nido-covers-pill">
                  <IconWindow size={16} />
                  <span class="nido-covers-pill__count">{openingsOpen}</span>
                </div>
              </button>
            )}
          </div>

          <div class="nido-topbar__icons">
            <button
              type="button"
              class="nido-bell-btn"
              onClick={() => setShowShoppingPanel(true)}
              aria-label="Bloc note"
              title="Bloc note"
            >
              <IconNotebook size={20} />
            </button>
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
          {digest.length > 0 ? (
            <div class="nido-hero__digest" style={{ marginTop: '24px' }} aria-live="polite">
              {digest.map((fact, i) => (
                <span key={fact.id} class="nido-hero__fact" data-tone={fact.tone}>
                  {i > 0 && <span class="nido-hero__fact-sep" aria-hidden="true" />}
                  <span class="nido-hero__fact-text">{fact.text}</span>
                  {fact.room && <span class="nido-hero__fact-room">{fact.room}</span>}
                </span>
              ))}
            </div>
          ) : (
            <p class="nido-hero__sub" style={{ marginTop: '24px' }}>{sub}</p>
          )}
        </section>

        {hasContent ? (
          <>
            {favoritesSection}

            {(showEnergy || kidsEnabled) && (
            <div class="nido-energy-row">
              {showEnergy && (
                <section class="nido-room nido-room--energy" key="__energy">
                  <div class="nido-section-title">
                    <h2>Consommation en direct</h2>
                  </div>
                  <div class="nido-energy-summary">
                    <PowerGaugeWidget
                      hass={hass}
                      powerEntityId={POWER_ENTITY_ID}
                      onOpen={onOpenEnergy}
                    />
                  </div>
                </section>
              )}
              {kidsEnabled && (
                <section class="nido-room nido-room--kids" key="__kids">
                  <div class="nido-section-title">
                    <h2>Enfants</h2>
                  </div>
                  <div class="nido-kids-summary">
                    <KidsCard
                      data={kidsData}
                      onOpen={() => setShowKidsPanel(true)}
                      onChange={updateKidsData}
                    />
                  </div>
                </section>
              )}
            </div>
            )}

            {populatedAreas.length > 0 && (
              <section class="nido-rooms-section">
                <div class="nido-section-title">
                  <h2>Pièces</h2>
                </div>
                <div
                  class={`nido-rooms-grid nido-rooms-grid--${roomLayout} ${roomsDrag.isDragging ? "is-dragging" : ""}`}
                  ref={(el) => {
                    roomsDrag.containerRef.current = el;
                  }}
                >
                  {populatedAreas.map((a, i) => (
                    <RoomCard
                      key={a.area_id}
                      hass={hass}
                      area={a}
                      entities={byArea.get(a.area_id) ?? []}
                      accent={i === 0}
                      layout={roomLayout}
                      onOpen={() => onOpenRoom(a.area_id)}
                      dragProps={roomsDrag.itemPropsFor(a.area_id)}
                      presence={roomPresence.get(a.area_id)}
                      occupancy={roomOccupancy.get(a.area_id) ?? null}
                      activity={roomActivity.get(a.area_id) ?? null}
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
          lights={sortedLights}
          areas={areas}
          onClose={() => setShowLightsPanel(false)}
        />
      )}

      {showCoversPanel && (
        <CoversPanel
          hass={hass}
          covers={sortedCovers}
          areas={areas}
          onClose={() => setShowCoversPanel(false)}
        />
      )}

      {showOpeningsPanel && (
        <OpeningsPanel
          openings={sortedOpenings}
          areas={areas}
          onClose={() => setShowOpeningsPanel(false)}
        />
      )}

      {showShoppingPanel && (
        <ShoppingPanel
          hass={hass}
          onClose={() => setShowShoppingPanel(false)}
        />
      )}

      {showKidsPanel && (
        <KidsPanel
          data={kidsData}
          onChange={updateKidsData}
          onClose={() => setShowKidsPanel(false)}
        />
      )}
    </div>
  );
}
