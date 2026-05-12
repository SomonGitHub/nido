import type { HassObject } from "../types";
import type { ResolvedEntity } from "../core/entities";
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

export const SUPPORTED_DOMAINS = new Set([
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

export interface RenderCtx {
  hass: HassObject;
  areaName: string;
  hero: boolean;
  variant: 1 | 2 | 3 | 4;
  calendarEntities: ResolvedEntity[];
}

export function renderWidget(entity: ResolvedEntity, ctx: RenderCtx) {
  const common = { hass: ctx.hass, entity, roomLabel: ctx.areaName };
  switch (entity.domain) {
    case "light":
      return <LightWidget key={entity.entity_id} {...common} hero={ctx.hero} breatheVariant={ctx.variant} />;
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
      return (
        <CalendarWidget
          key={entity.entity_id}
          hass={ctx.hass}
          entity={entity}
          roomLabel={ctx.areaName}
          hero={ctx.hero}
          calendarEntities={ctx.calendarEntities}
        />
      );
    default:
      return null;
  }
}
