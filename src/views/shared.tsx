import type { JSX } from "preact";
import {
  IconCouch,
  IconBed,
  IconFork,
  IconBath,
  IconDoorRoom,
  IconHome,
  IconLightOn,
  IconBlind,
  IconPlug,
  IconThermostat,
  IconLock,
  IconVacuum,
  IconSensor,
  IconShield,
  IconMusic,
  IconCamera,
  IconFan,
  IconSparkles,
  IconPlay,
  IconCloudSun,
} from "../icons";

type IconCmp = (p: { size?: number }) => JSX.Element;

export function pickAreaIcon(name: string): IconCmp {
  const n = name.toLowerCase();
  if (/(salon|séjour|sejour|living)/.test(n)) return IconCouch;
  if (/(chambre|bedroom)/.test(n)) return IconBed;
  if (/(cuisine|kitchen)/.test(n)) return IconFork;
  if (/(salle ?de ?bain|sdb|bath|douche|toilette)/.test(n)) return IconBath;
  if (/(entrée|entree|hall|couloir)/.test(n)) return IconDoorRoom;
  return IconHome;
}

export const DOMAIN_LABEL: Record<string, string> = {
  light: "Lumières",
  switch: "Prises",
  cover: "Volets",
  binary_sensor: "Détecteurs",
  climate: "Climat",
  lock: "Serrures",
  vacuum: "Aspirateurs",
  sensor: "Capteurs",
  media_player: "Média",
  alarm_control_panel: "Alarmes",
  camera: "Caméras",
  fan: "Ventilateurs",
  scene: "Scènes",
  script: "Scripts",
  weather: "Météo",
};

export const DOMAIN_ICON: Record<string, IconCmp> = {
  light: IconLightOn,
  switch: IconPlug,
  cover: IconBlind,
  binary_sensor: IconShield,
  climate: IconThermostat,
  lock: IconLock,
  vacuum: IconVacuum,
  sensor: IconSensor,
  media_player: IconMusic,
  alarm_control_panel: IconShield,
  camera: IconCamera,
  fan: IconFan,
  scene: IconSparkles,
  script: IconPlay,
  weather: IconCloudSun,
};
