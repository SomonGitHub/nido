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
import { memo, propsEqual, sameEntity } from "../core/memo";

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

/* Ces widgets ne lisent que leur entité et n'utilisent `hass` que pour appeler un
   service : un changement d'état ailleurs dans la maison ne les concerne pas.
   Restent hors liste ceux qui lisent d'autres entités (vacuum : capteurs Geni,
   camera : son panneau, calendar : la liste des calendriers). */
const widgetEqual = propsEqual<any>({ hass: "skip", entity: sameEntity });
const Light = memo(LightWidget, widgetEqual);
const Cover = memo(CoverWidget, widgetEqual);
const Switch = memo(SwitchWidget, widgetEqual);
const BinarySensor = memo(BinarySensorWidget, widgetEqual);
const Climate = memo(ClimateWidget, widgetEqual);
const Lock = memo(LockWidget, widgetEqual);
const Sensor = memo(SensorWidget, widgetEqual);
const MediaPlayer = memo(MediaPlayerWidget, widgetEqual);
const Alarm = memo(AlarmWidget, widgetEqual);
const Fan = memo(FanWidget, widgetEqual);
const SceneScript = memo(SceneScriptWidget, widgetEqual);
const Weather = memo(WeatherWidget, widgetEqual);

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
      return <Light key={entity.entity_id} {...common} hero={ctx.hero} breatheVariant={ctx.variant} />;
    case "cover":
      return <Cover key={entity.entity_id} {...common} hero={ctx.hero} />;
    case "switch":
      return <Switch key={entity.entity_id} {...common} hero={ctx.hero} breatheVariant={ctx.variant} />;
    case "binary_sensor":
      return <BinarySensor key={entity.entity_id} entity={entity} roomLabel={ctx.areaName} hero={ctx.hero} />;
    case "climate":
      return <Climate key={entity.entity_id} {...common} hero={ctx.hero} breatheVariant={ctx.variant} />;
    case "lock":
      return <Lock key={entity.entity_id} {...common} />;
    case "vacuum":
      return <VacuumWidget key={entity.entity_id} {...common} breatheVariant={ctx.variant} />;
    case "sensor":
      return <Sensor key={entity.entity_id} entity={entity} roomLabel={ctx.areaName} />;
    case "media_player":
      return <MediaPlayer key={entity.entity_id} {...common} hero={ctx.hero} breatheVariant={ctx.variant} />;
    case "alarm_control_panel":
      return <Alarm key={entity.entity_id} {...common} />;
    case "camera":
      return <CameraWidget key={entity.entity_id} {...common} />;
    case "fan":
      return <Fan key={entity.entity_id} {...common} breatheVariant={ctx.variant} />;
    case "scene":
    case "script":
      return <SceneScript key={entity.entity_id} {...common} />;
    case "weather":
      return <Weather key={entity.entity_id} entity={entity} roomLabel={ctx.areaName} />;
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
