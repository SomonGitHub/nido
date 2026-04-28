import type { ResolvedEntity } from "../core/entities";
import {
  IconSun,
  IconMoon,
  IconCloud,
  IconCloudSun,
  IconCloudRain,
  IconCloudSnow,
  IconCloudBolt,
  IconCloudFog,
  IconWind,
} from "../icons";
import type { JSX } from "preact";

interface WeatherWidgetProps {
  entity: ResolvedEntity;
  roomLabel?: string;
}

type IconCmp = (p: { size?: number }) => JSX.Element;

const CONDITION_META: Record<string, { label: string; Icon: IconCmp }> = {
  "clear-night":   { label: "Nuit claire", Icon: IconMoon },
  "cloudy":        { label: "Nuageux", Icon: IconCloud },
  "exceptional":   { label: "Conditions extrêmes", Icon: IconCloudBolt },
  "fog":           { label: "Brouillard", Icon: IconCloudFog },
  "hail":          { label: "Grêle", Icon: IconCloudSnow },
  "lightning":     { label: "Orage", Icon: IconCloudBolt },
  "lightning-rainy":{ label: "Orage pluvieux", Icon: IconCloudBolt },
  "partlycloudy":  { label: "Éclaircies", Icon: IconCloudSun },
  "pouring":       { label: "Pluie battante", Icon: IconCloudRain },
  "rainy":         { label: "Pluvieux", Icon: IconCloudRain },
  "snowy":         { label: "Neigeux", Icon: IconCloudSnow },
  "snowy-rainy":   { label: "Neige et pluie", Icon: IconCloudSnow },
  "sunny":         { label: "Ensoleillé", Icon: IconSun },
  "windy":         { label: "Venteux", Icon: IconWind },
  "windy-variant": { label: "Venteux", Icon: IconWind },
};

export function describeCondition(state: string): { label: string; Icon: IconCmp } {
  return CONDITION_META[state] ?? { label: state || "—", Icon: IconCloud };
}

function formatTemp(value: unknown, unit: string): string {
  const num = Number(value);
  if (!Number.isFinite(num)) return "—";
  return `${Math.round(num)}${unit}`;
}

export function WeatherWidget({ entity, roomLabel }: WeatherWidgetProps) {
  const unavailable = entity.state.state === "unavailable" || entity.state.state === "unknown";
  const { label, Icon } = describeCondition(entity.state.state);
  const tempUnit = (entity.state.attributes.temperature_unit as string | undefined) ?? "°";
  const temp = formatTemp(entity.state.attributes.temperature, tempUnit);
  const humidity = entity.state.attributes.humidity as number | undefined;

  return (
    <div class="n-card n-card--compact n-weather" data-status={unavailable ? "indisponible" : "off"}>
      <div class="n-card__head">
        <div class="n-icon-bubble n-weather__icon">
          <Icon size={20} />
        </div>
      </div>
      {roomLabel && <div class="n-eyebrow">{roomLabel}</div>}
      <div class="n-title n-title--sm">{entity.friendly_name}</div>
      <div class="n-weather__readout">
        <span class="n-value n-value--xl">{temp}</span>
      </div>
      <div class="n-weather__meta">
        <span>{label}</span>
        {typeof humidity === "number" && Number.isFinite(humidity) && (
          <>
            <span class="n-weather__sep">•</span>
            <span>{Math.round(humidity)}%</span>
          </>
        )}
      </div>
    </div>
  );
}

interface WeatherPillProps {
  entity: ResolvedEntity;
}

export function WeatherPill({ entity }: WeatherPillProps) {
  if (entity.state.state === "unavailable" || entity.state.state === "unknown") return null;
  const { label, Icon } = describeCondition(entity.state.state);
  const tempUnit = (entity.state.attributes.temperature_unit as string | undefined) ?? "°";
  const temp = formatTemp(entity.state.attributes.temperature, tempUnit);
  return (
    <div class="nido-weather-pill" title={entity.friendly_name}>
      <span class="nido-weather-pill__icon"><Icon size={18} /></span>
      <span class="nido-weather-pill__temp">{temp}</span>
      <span class="nido-weather-pill__sep" />
      <span class="nido-weather-pill__label">{label}</span>
    </div>
  );
}
