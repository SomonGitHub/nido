import type { ResolvedEntity } from "../core/entities";
import {
  IconThermostat,
  IconHumidity,
  IconBolt,
  IconSun,
  IconGauge,
  IconActivity,
  IconBattery,
} from "../icons";
import type { JSX } from "preact";

interface SensorWidgetProps {
  entity: ResolvedEntity;
  roomLabel?: string;
}

type IconCmp = (p: { size?: number }) => JSX.Element;

const ICON_BY_CLASS: Record<string, IconCmp> = {
  temperature: IconThermostat,
  humidity: IconHumidity,
  power: IconBolt,
  energy: IconBolt,
  current: IconBolt,
  voltage: IconBolt,
  illuminance: IconSun,
  pressure: IconGauge,
  battery: IconBattery,
};

function formatValue(state: string, unit: string | undefined): { value: string; unit: string } {
  if (state === "unavailable" || state === "unknown") return { value: "—", unit: "" };
  const num = Number(state);
  if (Number.isFinite(num)) {
    const abs = Math.abs(num);
    const value = abs >= 100 ? Math.round(num).toString() : (Math.round(num * 10) / 10).toString();
    return { value, unit: unit ?? "" };
  }
  return { value: state, unit: unit ?? "" };
}

export function SensorWidget({ entity, roomLabel }: SensorWidgetProps) {
  const deviceClass = (entity.state.attributes.device_class as string | undefined) ?? "";
  const unit = entity.state.attributes.unit_of_measurement as string | undefined;
  const Icon = ICON_BY_CLASS[deviceClass] ?? IconActivity;
  const unavailable = entity.state.state === "unavailable";
  const { value, unit: displayUnit } = formatValue(entity.state.state, unit);

  return (
    <div class="n-card n-card--compact" data-status={unavailable ? "indisponible" : "off"}>
      <div class="n-card__head">
        <div class="n-icon-bubble">
          <Icon size={18} />
        </div>
      </div>
      {roomLabel && <div class="n-eyebrow">{roomLabel}</div>}
      <div class="n-title n-title--sm">{entity.friendly_name}</div>
      <div class="n-sensor__readout">
        <span class="n-value n-value--xl">{value}</span>
        {displayUnit && <span class="n-value__unit">{displayUnit}</span>}
      </div>
    </div>
  );
}
