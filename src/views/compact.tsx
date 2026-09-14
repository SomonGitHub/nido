import { useEffect, useMemo, useState } from "preact/hooks";
import type { JSX } from "preact";
import type { HassObject } from "../types";
import type { Area } from "../core/areas";
import { groupByArea, isEntityActive, type ResolvedEntity } from "../core/entities";
import { applyOrder } from "../core/drag-reorder";
import { greetingFor } from "./dashboard";
import { SUPPORTED_DOMAINS } from "./render-widget";
import { DOMAIN_ICON } from "./shared";
import { DAILY_KWH_ENTITY_ID } from "./energy";
import { fetchCalendarEvents } from "../widgets/calendar";
import { describeCondition } from "../widgets/weather";
import { parseHassEvents, type CalendarEvent } from "../core/calendar-events";
import {
  IconHome,
  IconLightOn,
  IconMoon,
  IconBell,
  IconThermostat,
  IconBolt,
  IconPlay,
  IconPause,
  IconSensor,
} from "../icons";

interface CompactDashboardProps {
  hass: HassObject;
  areas: Area[];
  entities: ResolvedEntity[];
  favorites: string[];
  exposed: string[];
  roomsOrder: string[];
}

type CompactView = "glance" | "controls" | "ambient";

const CONTROL_DOMAINS = new Set(["light", "switch", "cover", "lock", "vacuum", "fan", "climate"]);

const CLIMATE_MODE_LABEL: Record<string, string> = {
  off: "Éteint",
  heat: "Chauffage",
  cool: "Climatisation",
  heat_cool: "Auto",
  auto: "Auto",
  dry: "Déshu.",
  fan_only: "Ventilation",
};

function useNextEvent(
  hass: HassObject,
  calendarEntities: ResolvedEntity[],
): CalendarEvent | null | undefined {
  const [next, setNext] = useState<CalendarEvent | null | undefined>(undefined);
  const ids = calendarEntities.map((e) => e.entity_id).join(",");

  useEffect(() => {
    if (calendarEntities.length === 0) {
      setNext(null);
      return;
    }
    let cancelled = false;
    const today = new Date();
    const start = new Date(today);
    start.setHours(0, 0, 0, 0);
    const end = new Date(start);
    end.setDate(end.getDate() + 14);

    Promise.all(
      calendarEntities.map((e) =>
        fetchCalendarEvents(hass, e.entity_id, start, end).then((raw) =>
          parseHassEvents({ [e.entity_id]: raw as never }, today),
        ),
      ),
    ).then((results) => {
      if (cancelled) return;
      const merged = results
        .flat()
        .filter((e) => e.dayOffset >= 0)
        .sort((a, b) => {
          if (a.dayOffset !== b.dayOffset) return a.dayOffset - b.dayOffset;
          if (a.allDay && !b.allDay) return -1;
          if (!a.allDay && b.allDay) return 1;
          return (a.time ?? "").localeCompare(b.time ?? "");
        });
      setNext(merged[0] ?? null);
    });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hass != null, ids]);

  return next;
}

function formatNextDay(dayOffset: number, date: Date): { top: string; num: string } {
  if (dayOffset === 0) return { top: "AUJ", num: String(date.getDate()) };
  if (dayOffset === 1) return { top: "DEM", num: String(date.getDate()) };
  const labels = ["DIM", "LUN", "MAR", "MER", "JEU", "VEN", "SAM"];
  return { top: labels[date.getDay()], num: String(date.getDate()) };
}

function getPictureUrl(hass: HassObject, ent: string | undefined): string | null {
  if (!ent) return null;
  if (ent.startsWith("http")) return ent;
  const base = (hass as any).hassUrl?.("");
  if (base) return base.replace(/\/$/, "") + ent;
  return ent;
}

export function CompactDashboard({
  hass,
  areas,
  entities,
  favorites,
  exposed,
  roomsOrder,
}: CompactDashboardProps) {
  const [view, setView] = useState<CompactView>("glance");
  const [, forceTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => forceTick((t) => t + 1), 30000);
    return () => clearInterval(id);
  }, []);

  const now = new Date();
  const hour = now.getHours();
  const timeStr = `${String(hour).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
  const dateStr = now
    .toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" })
    .replace(/^\w/, (c) => c.toUpperCase());
  const { greeting } = greetingFor(hour);
  const userName = hass.user?.name ?? "vous";

  const exposedSet = useMemo(() => new Set(exposed), [exposed]);
  const exposedEntities = useMemo(
    () => entities.filter((e) => exposedSet.has(e.entity_id) && SUPPORTED_DOMAINS.has(e.domain)),
    [entities, exposedSet],
  );

  const weatherEntity = useMemo(
    () => exposedEntities.find((e) => e.domain === "weather"),
    [exposedEntities],
  );
  const calendarEntities = useMemo(
    () => exposedEntities.filter((e) => e.domain === "calendar"),
    [exposedEntities],
  );
  const climateEntities = useMemo(
    () => exposedEntities.filter((e) => e.domain === "climate"),
    [exposedEntities],
  );
  const lightEntities = useMemo(
    () => exposedEntities.filter((e) => e.domain === "light"),
    [exposedEntities],
  );
  const mediaEntities = useMemo(
    () => exposedEntities.filter((e) => e.domain === "media_player"),
    [exposedEntities],
  );
  const lockEntities = useMemo(
    () => exposedEntities.filter((e) => e.domain === "lock"),
    [exposedEntities],
  );

  const heroLight = useMemo(() => {
    const fav = favorites
      .map((id) => exposedEntities.find((e) => e.entity_id === id))
      .find((e): e is ResolvedEntity => !!e && e.domain === "light");
    return fav ?? lightEntities[0] ?? null;
  }, [favorites, exposedEntities, lightEntities]);

  const climateEntity = climateEntities[0] ?? null;
  const mediaEntity = useMemo(
    () => mediaEntities.find(isEntityActive) ?? mediaEntities[0] ?? null,
    [mediaEntities],
  );

  const dailyKwhState = hass.states[DAILY_KWH_ENTITY_ID];
  const dailyKwhValue = useMemo(() => {
    if (!dailyKwhState || !exposedSet.has(DAILY_KWH_ENTITY_ID)) return null;
    const n = Number(dailyKwhState.state);
    return Number.isFinite(n) ? n : null;
  }, [dailyKwhState, exposedSet]);

  const activeLightsCount = useMemo(
    () => lightEntities.filter(isEntityActive).length,
    [lightEntities],
  );

  const familyMembers = useMemo(
    () => Object.values(hass.states).filter((s) => s.entity_id.startsWith("person.")),
    [hass.states],
  );
  const presentCount = familyMembers.filter((p) => p.state === "home").length;

  const nextEvent = useNextEvent(hass, calendarEntities);

  const byArea = useMemo(() => groupByArea(exposedEntities), [exposedEntities]);
  const populatedAreas = useMemo(() => {
    const filtered = areas.filter((a) =>
      (byArea.get(a.area_id) ?? []).some((e) => CONTROL_DOMAINS.has(e.domain)),
    );
    return applyOrder(filtered, roomsOrder, (a) => a.area_id);
  }, [areas, byArea, roomsOrder]);

  const [selectedAreaId, setSelectedAreaId] = useState<string | null>(null);
  const activeAreaId = populatedAreas.some((a) => a.area_id === selectedAreaId)
    ? selectedAreaId
    : populatedAreas[0]?.area_id ?? null;
  const controlEntities = useMemo(
    () =>
      (byArea.get(activeAreaId ?? "") ?? []).filter((e) => CONTROL_DOMAINS.has(e.domain)),
    [byArea, activeAreaId],
  );

  return (
    <div class="nido-compact">
      <div class="nido-compact__shell">
        <CompactRail view={view} setView={setView} />
        <div class="nido-compact-content">
          {view === "glance" && (
            <CompactGlance
              hass={hass}
              greeting={greeting}
              userName={userName}
              dateStr={dateStr}
              timeStr={timeStr}
              presentCount={presentCount}
              totalCount={familyMembers.length}
              heroLight={heroLight}
              climateEntity={climateEntity}
              dailyKwhValue={dailyKwhValue}
              activeLightsCount={activeLightsCount}
              weatherEntity={weatherEntity ?? null}
              mediaEntity={mediaEntity}
              nextEvent={nextEvent}
            />
          )}
          {view === "controls" && (
            <CompactControls
              hass={hass}
              areas={populatedAreas}
              activeAreaId={activeAreaId}
              onSelectArea={setSelectedAreaId}
              controlEntities={controlEntities}
            />
          )}
          {view === "ambient" && (
            <CompactAmbient
              hass={hass}
              timeStr={timeStr}
              dateStr={dateStr}
              weatherEntity={weatherEntity ?? null}
              familyMembers={familyMembers}
              activeLightsCount={activeLightsCount}
              climateEntity={climateEntity}
              lockEntities={lockEntities}
              nextEvent={nextEvent}
            />
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── Rail de navigation ─── */
function CompactRail({
  view,
  setView,
}: {
  view: CompactView;
  setView: (v: CompactView) => void;
}) {
  const items: { id: CompactView; label: string; Icon: (p: { size?: number }) => JSX.Element }[] = [
    { id: "glance", label: "Accueil", Icon: IconHome },
    { id: "controls", label: "Contrôles", Icon: IconLightOn },
    { id: "ambient", label: "Veille", Icon: IconMoon },
  ];
  return (
    <div class="nido-compact-rail">
      <div class="nido-compact-rail__brand">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
          <path d="M3 16c2-3 6-5 9-5s7 2 9 5" />
          <path d="M5 16c1.5-2.5 4-4 7-4s5.5 1.5 7 4" />
          <circle cx="12" cy="13" r="1.5" fill="currentColor" />
        </svg>
      </div>
      {items.map((it) => (
        <button
          key={it.id}
          type="button"
          class={`nido-compact-rail__btn ${view === it.id ? "is-active" : ""}`}
          title={it.label}
          onClick={() => setView(it.id)}
        >
          <it.Icon size={20} />
        </button>
      ))}
      <div class="nido-compact-rail__bell">
        <button type="button" class="nido-compact-rail__btn" aria-label="Notifications">
          <IconBell size={19} />
        </button>
      </div>
    </div>
  );
}

/* ─── Vue 1 : Accueil ─── */
interface CompactGlanceProps {
  hass: HassObject;
  greeting: string;
  userName: string;
  dateStr: string;
  timeStr: string;
  presentCount: number;
  totalCount: number;
  heroLight: ResolvedEntity | null;
  climateEntity: ResolvedEntity | null;
  dailyKwhValue: number | null;
  activeLightsCount: number;
  weatherEntity: ResolvedEntity | null;
  mediaEntity: ResolvedEntity | null;
  nextEvent: CalendarEvent | null | undefined;
}

function CompactGlance({
  hass,
  greeting,
  userName,
  dateStr,
  timeStr,
  presentCount,
  totalCount,
  heroLight,
  climateEntity,
  dailyKwhValue,
  activeLightsCount,
  weatherEntity,
  mediaEntity,
  nextEvent,
}: CompactGlanceProps) {
  const statTiles: JSX.Element[] = [];
  if (climateEntity) {
    const cur = climateEntity.state.attributes.current_temperature as number | undefined;
    const tgt = climateEntity.state.attributes.temperature as number | undefined;
    const value = tgt ?? cur;
    statTiles.push(
      <CompactStatTile
        key="climate"
        label={climateEntity.friendly_name}
        value={typeof value === "number" ? String(Math.round(value * 10) / 10) : "—"}
        unit="°"
        caption={CLIMATE_MODE_LABEL[climateEntity.state.state] ?? climateEntity.state.state}
        Icon={IconThermostat}
      />,
    );
  }
  if (dailyKwhValue !== null) {
    statTiles.push(
      <CompactStatTile
        key="energy"
        label="Aujourd'hui"
        value={dailyKwhValue.toLocaleString("fr-FR", { maximumFractionDigits: 1 })}
        unit=" kWh"
        caption="Consommation du jour"
        Icon={IconBolt}
        accent
      />,
    );
  }
  if (statTiles.length < 2) {
    statTiles.push(
      <CompactStatTile
        key="lights"
        label="Lumières"
        value={String(activeLightsCount)}
        unit=""
        caption={activeLightsCount > 1 ? "allumées" : "allumée"}
        Icon={IconLightOn}
      />,
    );
  }
  const shownTiles = statTiles.slice(0, 2);

  return (
    <div class="nido-compact-glance">
      <div class="nido-compact-glance__main">
        <div class="nido-compact-glance__meta">
          <span class="nido-compact-glance__meta-item">{dateStr}</span>
          {totalCount > 0 && (
            <>
              <span class="nido-compact-glance__meta-dot" />
              <span class="nido-compact-glance__meta-item">
                {presentCount} / {totalCount} présents
              </span>
            </>
          )}
        </div>
        <h1 class="nido-compact-glance__title">
          {greeting}, <em>{userName}</em>
        </h1>
        <div
          class="nido-compact-glance__row"
          style={{ gridTemplateColumns: heroLight ? "1.35fr 1fr" : "1fr" }}
        >
          {heroLight && <CompactHeroLight hass={hass} entity={heroLight} />}
          <div
            class="nido-compact-glance__stack"
            style={{ gridTemplateRows: `repeat(${shownTiles.length || 1}, 1fr)` }}
          >
            {shownTiles}
          </div>
        </div>
      </div>
      <div class="nido-compact-glance__side">
        {weatherEntity && weatherEntity.state.state !== "unavailable" && (
          <CompactWeatherRow entity={weatherEntity} timeStr={timeStr} />
        )}
        {mediaEntity && <CompactMedia hass={hass} entity={mediaEntity} />}
        <CompactNextEvent nextEvent={nextEvent} />
      </div>
    </div>
  );
}

function CompactStatTile({
  label,
  value,
  unit,
  caption,
  Icon,
  accent = false,
}: {
  label: string;
  value: string;
  unit: string;
  caption: string;
  Icon: (p: { size?: number }) => JSX.Element;
  accent?: boolean;
}) {
  return (
    <div class={`nido-compact-tile ${accent ? "nido-compact-tile--accent" : ""}`}>
      {accent && <div class="pattern-dots" style={{ position: "absolute", inset: 0, opacity: 0.14 }} />}
      <div class="nido-compact-tile__head">
        <span class="nido-compact-tile__label">{label}</span>
        <div class="nido-compact-tile__icon">
          <Icon size={16} />
        </div>
      </div>
      <div>
        <div class="nido-compact-tile__value">
          {value}
          <span class="nido-compact-tile__unit">{unit}</span>
        </div>
        <div class="nido-compact-tile__caption">{caption}</div>
      </div>
    </div>
  );
}

function brightnessPct(entity: ResolvedEntity): number {
  const b = entity.state.attributes.brightness as number | undefined;
  if (typeof b !== "number") return entity.state.state === "on" ? 100 : 0;
  return Math.round((b / 255) * 100);
}

function CompactHeroLight({ hass, entity }: { hass: HassObject; entity: ResolvedEntity }) {
  const isOn = entity.state.state === "on";
  const [draftPct, setDraftPct] = useState<number | null>(null);
  const pct = draftPct ?? brightnessPct(entity);

  const toggle = () => hass.callService("light", "toggle", { entity_id: entity.entity_id });
  const setBrightness = async (value: number) => {
    setDraftPct(value);
    try {
      await hass.callService("light", "turn_on", {
        entity_id: entity.entity_id,
        brightness_pct: value,
      });
    } finally {
      setTimeout(() => setDraftPct(null), 50);
    }
  };

  return (
    <div class="nido-compact-hero" data-on={isOn ? "true" : "false"}>
      {isOn && <div class="nido-compact-hero__glow glow-pulse-1" aria-hidden="true" />}
      <div class="nido-compact-hero__top">
        <div>
          <div class="nido-compact-hero__label">Lumière</div>
          <div class="nido-compact-hero__name">{entity.friendly_name}</div>
        </div>
        <button
          type="button"
          class="nido-compact-toggle"
          role="switch"
          aria-checked={isOn}
          data-on={isOn ? "true" : "false"}
          onClick={toggle}
        >
          <span class="nido-compact-toggle__thumb" />
        </button>
      </div>
      <div class="nido-compact-hero__bottom">
        {isOn ? (
          <>
            <div class="nido-compact-hero__row">
              <span class="nido-compact-hero__label">Intensité</span>
              <span class="nido-compact-hero__pct">
                {pct}
                <span style={{ fontSize: 13 }}>%</span>
              </span>
            </div>
            <input
              type="range"
              class="n-slider"
              min={1}
              max={100}
              step={1}
              value={pct}
              style={{ "--val": `${((pct - 1) / 99) * 100}%` } as any}
              onInput={(e) => setBrightness(Number((e.target as HTMLInputElement).value))}
            />
          </>
        ) : (
          <div class="n-muted">Éteinte</div>
        )}
      </div>
    </div>
  );
}

function CompactWeatherRow({ entity, timeStr }: { entity: ResolvedEntity; timeStr: string }) {
  const { label, Icon } = describeCondition(entity.state.state);
  const tempUnit = (entity.state.attributes.temperature_unit as string | undefined) ?? "°";
  const temp = entity.state.attributes.temperature;

  return (
    <div class="nido-compact-weather">
      <div class="nido-compact-weather__icon">
        <Icon size={26} />
      </div>
      <div style={{ minWidth: 0 }}>
        <div class="nido-compact-weather__temp">
          {temp !== undefined && temp !== null ? `${temp}${tempUnit}` : "—"}
        </div>
        <div class="nido-compact-weather__cond">{label}</div>
      </div>
      <div class="nido-compact-weather__clock">{timeStr}</div>
    </div>
  );
}

function CompactMedia({ hass, entity }: { hass: HassObject; entity: ResolvedEntity }) {
  const isPlaying = entity.state.state === "playing";
  const title = (entity.state.attributes.media_title as string | undefined) ?? entity.friendly_name;
  const artist = entity.state.attributes.media_artist as string | undefined;

  return (
    <div class="nido-compact-media">
      <div class={`nido-compact-media__disc ${isPlaying ? "is-spinning" : ""}`} />
      <div class="nido-compact-media__body">
        <div class="nido-compact-media__title">{title}</div>
        <div class="nido-compact-media__sub">{artist ?? entity.friendly_name}</div>
      </div>
      <button
        type="button"
        class="nido-compact-media__play"
        aria-label={isPlaying ? "Pause" : "Lecture"}
        onClick={() => hass.callService("media_player", "media_play_pause", { entity_id: entity.entity_id })}
      >
        {isPlaying ? <IconPause size={14} /> : <IconPlay size={14} />}
      </button>
    </div>
  );
}

function CompactNextEvent({ nextEvent }: { nextEvent: CalendarEvent | null | undefined }) {
  const today = new Date();
  return (
    <div class="nido-compact-next">
      <div class="nido-compact-next__label">Prochain</div>
      {nextEvent === undefined ? (
        <div class="n-muted">Chargement…</div>
      ) : nextEvent === null ? (
        <div class="n-muted">Rien de prévu</div>
      ) : (
        <div class="nido-compact-next__row">
          <div class="nido-compact-next__badge">
            {(() => {
              const d = new Date(today);
              d.setDate(today.getDate() + nextEvent.dayOffset);
              const { top, num } = formatNextDay(nextEvent.dayOffset, d);
              return (
                <>
                  <span class="nido-compact-next__badge-day">{top}</span>
                  <span class="nido-compact-next__badge-num">{num}</span>
                </>
              );
            })()}
          </div>
          <div style={{ minWidth: 0 }}>
            <div class="nido-compact-next__title">{nextEvent.title}</div>
            <div class="nido-compact-next__sub">{nextEvent.allDay ? "Journée" : nextEvent.time}</div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Vue 2 : Contrôles ─── */
interface CompactControlsProps {
  hass: HassObject;
  areas: Area[];
  activeAreaId: string | null;
  onSelectArea: (id: string) => void;
  controlEntities: ResolvedEntity[];
}

function CompactControls({ hass, areas, activeAreaId, onSelectArea, controlEntities }: CompactControlsProps) {
  if (areas.length === 0) {
    return (
      <div class="nido-compact-empty">
        Aucun appareil contrôlable pour l'instant. Exposez des lumières, prises ou volets dans
        « Personnaliser ».
      </div>
    );
  }

  return (
    <div class="nido-compact-controls">
      <div class="nido-compact-controls__tabs">
        {areas.map((a) => (
          <button
            key={a.area_id}
            type="button"
            class={`nido-compact-tab ${a.area_id === activeAreaId ? "is-active" : ""}`}
            onClick={() => onSelectArea(a.area_id)}
          >
            {a.name}
          </button>
        ))}
      </div>
      <div class="nido-compact-controls__grid">
        {controlEntities.map((e) => (
          <MiniControl key={e.entity_id} hass={hass} entity={e} />
        ))}
      </div>
    </div>
  );
}

function isHighlighted(entity: ResolvedEntity): boolean {
  const s = entity.state.state;
  switch (entity.domain) {
    case "light":
    case "switch":
    case "fan":
      return s === "on";
    case "cover": {
      const pos = entity.state.attributes.current_position as number | undefined;
      return typeof pos === "number" ? pos > 0 : s === "open" || s === "opening";
    }
    case "lock":
      return s === "locked";
    case "vacuum":
      return s === "cleaning" || s === "returning";
    case "climate":
      return s !== "off";
    default:
      return false;
  }
}

function controlSub(entity: ResolvedEntity): string {
  const s = entity.state.state;
  switch (entity.domain) {
    case "light": {
      if (s !== "on") return "Éteinte";
      const b = entity.state.attributes.brightness as number | undefined;
      return typeof b === "number" ? `${Math.round((b / 255) * 100)}%` : "Allumée";
    }
    case "switch": {
      if (s !== "on") return "Éteinte";
      const p = entity.state.attributes.current_power_w as number | undefined;
      return typeof p === "number" ? `${Math.round(p)} W` : "Allumée";
    }
    case "climate": {
      const tgt = entity.state.attributes.temperature as number | undefined;
      const cur = entity.state.attributes.current_temperature as number | undefined;
      const value = tgt ?? cur;
      return typeof value === "number" ? `${Math.round(value * 10) / 10}°` : (CLIMATE_MODE_LABEL[s] ?? s);
    }
    case "cover": {
      const pos = entity.state.attributes.current_position as number | undefined;
      if (typeof pos === "number") return `${pos}% ouvert`;
      return s === "open" ? "Ouvert" : s === "closed" ? "Fermé" : s;
    }
    case "lock":
      return s === "locked" ? "Verrouillée" : s === "jammed" ? "Bloquée" : "Déverrouillée";
    case "vacuum": {
      const label: Record<string, string> = {
        cleaning: "Nettoyage",
        docked: "Sur la base",
        returning: "Retour base",
        idle: "Au repos",
        paused: "Pause",
        error: "Erreur",
      };
      const battery = entity.state.attributes.battery_level as number | undefined;
      const base = label[s] ?? s;
      return typeof battery === "number" ? `${base} · ${Math.round(battery)}%` : base;
    }
    case "fan":
      return s === "on" ? "Allumé" : "Éteint";
    default:
      return s;
  }
}

async function toggleControl(hass: HassObject, entity: ResolvedEntity): Promise<void> {
  const s = entity.state.state;
  switch (entity.domain) {
    case "light":
      await hass.callService("light", "toggle", { entity_id: entity.entity_id });
      return;
    case "switch":
      await hass.callService("switch", "toggle", { entity_id: entity.entity_id });
      return;
    case "fan":
      await hass.callService("fan", "toggle", { entity_id: entity.entity_id });
      return;
    case "lock":
      await hass.callService("lock", s === "locked" ? "unlock" : "lock", { entity_id: entity.entity_id });
      return;
    case "cover": {
      const pos = entity.state.attributes.current_position as number | undefined;
      const isOpen = typeof pos === "number" ? pos > 0 : s === "open" || s === "opening";
      await hass.callService("cover", isOpen ? "close_cover" : "open_cover", { entity_id: entity.entity_id });
      return;
    }
    case "vacuum": {
      const cleaning = s === "cleaning" || s === "returning";
      await hass.callService("vacuum", cleaning ? "return_to_base" : "start", { entity_id: entity.entity_id });
      return;
    }
    default:
      return;
  }
}

function MiniControl({ hass, entity }: { hass: HassObject; entity: ResolvedEntity }) {
  const [pending, setPending] = useState(false);
  const Icon = DOMAIN_ICON[entity.domain] ?? IconSensor;
  const on = isHighlighted(entity);
  const unavailable = entity.state.state === "unavailable";
  const interactive = entity.domain !== "climate";

  const handleClick = async () => {
    if (unavailable || pending) return;
    setPending(true);
    try {
      await toggleControl(hass, entity);
    } finally {
      setPending(false);
    }
  };

  const Tag = interactive ? "button" : "div";

  return (
    <Tag
      type={interactive ? "button" : undefined}
      class={`nido-mini-control ${interactive ? "" : "is-static"}`}
      data-on={on ? "true" : "false"}
      disabled={interactive ? unavailable || pending : undefined}
      onClick={interactive ? handleClick : undefined}
    >
      <div class="nido-mini-control__top">
        <div class="nido-mini-control__icon">
          <Icon size={17} />
        </div>
        <span class="nido-mini-control__dot" />
      </div>
      <div>
        <div class="nido-mini-control__name">{entity.friendly_name}</div>
        <div class="nido-mini-control__sub">{unavailable ? "Indisponible" : controlSub(entity)}</div>
      </div>
    </Tag>
  );
}

/* ─── Vue 3 : Veille ambiante ─── */
interface CompactAmbientProps {
  hass: HassObject;
  timeStr: string;
  dateStr: string;
  weatherEntity: ResolvedEntity | null;
  familyMembers: HassObject["states"][string][];
  activeLightsCount: number;
  climateEntity: ResolvedEntity | null;
  lockEntities: ResolvedEntity[];
  nextEvent: CalendarEvent | null | undefined;
}

function CompactAmbient({
  hass,
  timeStr,
  dateStr,
  weatherEntity,
  familyMembers,
  activeLightsCount,
  climateEntity,
  lockEntities,
  nextEvent,
}: CompactAmbientProps) {
  const anyUnlocked = lockEntities.some((e) => e.state.state === "unlocked");
  const climateTemp = climateEntity
    ? ((climateEntity.state.attributes.current_temperature ??
        climateEntity.state.attributes.temperature) as number | undefined)
    : undefined;

  const allQuiet = activeLightsCount === 0 && !anyUnlocked;
  const statusTitle = allQuiet ? "Tout est calme" : "La maison est active";
  const statusParts: string[] = [];
  if (activeLightsCount > 0) statusParts.push(`${activeLightsCount} lumière${activeLightsCount > 1 ? "s" : ""}`);
  if (typeof climateTemp === "number") statusParts.push(`${Math.round(climateTemp * 10) / 10}°`);
  if (lockEntities.length > 0) statusParts.push(anyUnlocked ? "porte déverrouillée" : "porte verrouillée");
  const statusSub = statusParts.length > 0 ? statusParts.join(" · ") : "Aucune donnée disponible";

  return (
    <div class="nido-compact-ambient">
      <div style={{ minWidth: 0 }}>
        <div class="nido-compact-ambient__date">{dateStr}</div>
        <div class="nido-compact-ambient__clock">{timeStr}</div>
        <div class="nido-compact-ambient__meta">
          {weatherEntity && weatherEntity.state.state !== "unavailable" && (
            <div class="nido-compact-ambient__weather">
              {(() => {
                const { label, Icon } = describeCondition(weatherEntity.state.state);
                const tempUnit = (weatherEntity.state.attributes.temperature_unit as string | undefined) ?? "°";
                const temp = weatherEntity.state.attributes.temperature;
                return (
                  <>
                    <span style={{ color: "var(--accent)" }}>
                      <Icon size={20} />
                    </span>
                    <span class="nido-compact-ambient__weather-temp">
                      {temp !== undefined && temp !== null ? `${temp}${tempUnit}` : "—"}
                    </span>
                    <span>{label}</span>
                  </>
                );
              })()}
            </div>
          )}
          {familyMembers.length > 0 && (
            <>
              <span class="nido-compact-ambient__sep" />
              <div class="nido-compact-ambient__family">
                {familyMembers.map((p) => {
                  const name = (p.attributes.friendly_name as string | undefined) ?? p.entity_id;
                  const pic = getPictureUrl(hass, p.attributes.entity_picture as string | undefined);
                  const away = p.state !== "home";
                  return pic ? (
                    <img
                      key={p.entity_id}
                      class={`nido-compact-ambient__avatar ${away ? "is-away" : ""}`}
                      src={pic}
                      alt={name}
                      title={name}
                    />
                  ) : (
                    <span
                      key={p.entity_id}
                      class={`nido-compact-ambient__avatar ${away ? "is-away" : ""}`}
                      title={name}
                    >
                      {name[0]?.toUpperCase()}
                    </span>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
      <div class="nido-compact-ambient__side">
        <div class="nido-compact-status breathe-2">
          <div class="nido-compact-status__label">Maison</div>
          <div class="nido-compact-status__title">{statusTitle}</div>
          <div class="nido-compact-status__sub">{statusSub}</div>
        </div>
        <div class="nido-compact-next--ambient">
          <div class="pattern-dots" style={{ position: "absolute", inset: 0, opacity: 0.18 }} />
          <div style={{ position: "relative" }}>
            <div class="nido-compact-next__label" style={{ opacity: 0.825 }}>
              Prochain
            </div>
            {nextEvent === undefined || nextEvent === null ? (
              <div class="nido-compact-next__title">
                {nextEvent === undefined ? "Chargement…" : "Rien de prévu"}
              </div>
            ) : (
              <>
                <div class="nido-compact-next__title">{nextEvent.title}</div>
                <div class="nido-compact-next__sub" style={{ opacity: 0.92 }}>
                  {nextEvent.allDay ? "Journée" : nextEvent.time}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
