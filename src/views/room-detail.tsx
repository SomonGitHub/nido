import { useMemo, useState } from "preact/hooks";
import type { HassObject } from "../types";
import type { Area } from "../core/areas";
import {
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
import { WeatherWidget } from "../widgets/weather";
import { CalendarWidget } from "../widgets/calendar";
import { IconChevronLeft, IconMore } from "../icons";
import { pickAreaIcon, DOMAIN_LABEL } from "./shared";

interface RoomDetailProps {
  hass: HassObject;
  area: Area;
  entities: ResolvedEntity[];
  entitiesOrder: string[];
  onBack: () => void;
  onReorderEntities: (ids: string[]) => void;
}

function renderWidget(entity: ResolvedEntity, hass: HassObject, areaName: string, variant: 1 | 2 | 3 | 4, calendarEntities: ResolvedEntity[], hero = false) {
  const common = { hass, entity, roomLabel: areaName };
  switch (entity.domain) {
    case "light":
      return <LightWidget key={entity.entity_id} {...common} hero={hero} breatheVariant={variant} />;
    case "cover":
      return <CoverWidget key={entity.entity_id} {...common} hero={hero} />;
    case "switch":
      return <SwitchWidget key={entity.entity_id} {...common} hero={hero} breatheVariant={variant} />;
    case "binary_sensor":
      return <BinarySensorWidget key={entity.entity_id} entity={entity} roomLabel={areaName} hero={hero} />;
    case "climate":
      return <ClimateWidget key={entity.entity_id} {...common} hero={hero} breatheVariant={variant} />;
    case "lock":
      return <LockWidget key={entity.entity_id} {...common} />;
    case "vacuum":
      return <VacuumWidget key={entity.entity_id} {...common} breatheVariant={variant} />;
    case "sensor":
      return <SensorWidget key={entity.entity_id} entity={entity} roomLabel={areaName} />;
    case "media_player":
      return <MediaPlayerWidget key={entity.entity_id} {...common} breatheVariant={variant} />;
    case "alarm_control_panel":
      return <AlarmWidget key={entity.entity_id} {...common} />;
    case "camera":
      return <CameraWidget key={entity.entity_id} {...common} />;
    case "fan":
      return <FanWidget key={entity.entity_id} {...common} breatheVariant={variant} />;
    case "scene":
    case "script":
      return <SceneScriptWidget key={entity.entity_id} {...common} />;
    case "weather":
      return <WeatherWidget key={entity.entity_id} entity={entity} roomLabel={areaName} />;
    case "calendar":
      return <CalendarWidget key={entity.entity_id} hass={hass} entity={entity} roomLabel={areaName} calendarEntities={calendarEntities} />;
    default:
      return null;
  }
}

export function RoomDetail({
  hass,
  area,
  entities,
  entitiesOrder,
  onBack,
  onReorderEntities,
}: RoomDetailProps) {
  const Icon = pickAreaIcon(area.name);
  const stats = extractRoomStats(entities);

  const orderedEntities = useMemo(
    () => applyOrder(entities, entitiesOrder, (e) => e.entity_id),
    [entities, entitiesOrder],
  );

  const calendarEntities = useMemo(
    () => orderedEntities.filter((e) => e.domain === "calendar"),
    [orderedEntities],
  );

  const domainCounts = useMemo(() => {
    const counts = new Map<string, number>();
    for (const e of orderedEntities) {
      counts.set(e.domain, (counts.get(e.domain) ?? 0) + 1);
    }
    return Array.from(counts.entries()).sort((a, b) => b[1] - a[1]);
  }, [orderedEntities]);

  const [filter, setFilter] = useState<string>("all");

  const filtered = useMemo(
    () =>
      filter === "all" ? orderedEntities : orderedEntities.filter((e) => e.domain === filter),
    [orderedEntities, filter],
  );

  const drag = useDragReorder<ResolvedEntity>(
    filtered,
    (e) => e.entity_id,
    (nextFiltered) => {
      const filteredIds = new Set(filtered.map((e) => e.entity_id));
      const queue = [...nextFiltered];
      const newFull = orderedEntities.map((e) =>
        filteredIds.has(e.entity_id) ? queue.shift()! : e,
      );
      onReorderEntities(newFull.map((e) => e.entity_id));
    },
  );

  const devices = orderedEntities.filter(
    (e) => e.domain !== "sensor" && e.domain !== "binary_sensor",
  ).length;
  const active = orderedEntities.filter(isEntityActive).length;

  return (
    <div class="nido-shell">
      <div class="nido-dashboard nido-room-detail">
        <header class="nido-room-detail__header">
          <button type="button" class="n-icon-btn nido-room-detail__back" onClick={onBack}>
            <IconChevronLeft size={18} />
          </button>
          <div class="nido-room-detail__crumb">
            <div class="n-eyebrow">Maison · Pièce</div>
            <div class="nido-room-detail__brand">nido</div>
          </div>
          <div class="nido-room-detail__head-actions">
            <button type="button" class="n-icon-btn">
              <IconMore size={18} />
            </button>
          </div>
        </header>

        <section class="nido-room-detail__hero">
          <div class="nido-room-detail__hero-left">
            <div class="nido-room-detail__icon">
              <div class="pattern-dots nido-room-detail__icon-bg" aria-hidden="true" />
              <Icon size={32} />
            </div>
            <div>
              <div class="nido-room-detail__hero-meta">
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
              <h1 class="nido-room-detail__title">{area.name}</h1>
            </div>
          </div>

          {(stats.temperature || stats.humidity || stats.illuminance) && (
            <div class="nido-room-detail__stats">
              {stats.temperature && (
                <Stat
                  label="Température"
                  value={stats.temperature.value}
                  unit={stats.temperature.unit || "°"}
                />
              )}
              {stats.humidity && <Sep />}
              {stats.humidity && (
                <Stat
                  label="Humidité"
                  value={Math.round(parseFloat(stats.humidity.value)).toString()}
                  unit={stats.humidity.unit || "%"}
                />
              )}
              {stats.illuminance && <Sep />}
              {stats.illuminance && (
                <Stat
                  label="Luminosité"
                  value={Math.round(parseFloat(stats.illuminance.value)).toString()}
                  unit={stats.illuminance.unit || "lx"}
                />
              )}
            </div>
          )}
        </section>

        <div class="nido-room-detail__filters">
          <button
            type="button"
            class={`n-pill-btn ${filter === "all" ? "n-pill-btn--dark" : "n-pill-btn--ghost"}`}
            onClick={() => setFilter("all")}
          >
            Tout · {entities.length}
          </button>
          {domainCounts.map(([domain, n]) => (
            <button
              type="button"
              class={`n-pill-btn ${filter === domain ? "n-pill-btn--dark" : "n-pill-btn--ghost"}`}
              onClick={() => setFilter(domain)}
            >
              {DOMAIN_LABEL[domain] ?? domain} · {n}
            </button>
          ))}
        </div>

        <div
          class={`nido-room-detail__grid ${drag.isDragging ? "is-dragging" : ""}`}
          ref={(el) => {
            drag.containerRef.current = el;
          }}
        >
          {filtered.map((e, i) => {
            const variant = ((i % 4) + 1) as 1 | 2 | 3 | 4;
            const isHero = i === 0;
            return (
              <div
                key={e.entity_id}
                class="nido-drag-item"
                data-hero={isHero ? "true" : "false"}
                {...drag.itemPropsFor(e.entity_id)}
              >
                {renderWidget(e, hass, area.name, variant, calendarEntities, isHero)}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value, unit }: { label: string; value: string; unit: string }) {
  return (
    <div class="nido-room-detail__stat">
      <div class="n-eyebrow">{label}</div>
      <div class="nido-room-detail__stat-value">
        {value}
        <span class="nido-room-detail__stat-unit">{unit}</span>
      </div>
    </div>
  );
}

function Sep() {
  return <div class="nido-room-detail__stat-sep" aria-hidden="true" />;
}
