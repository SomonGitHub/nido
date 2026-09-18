import type { ComponentChildren, JSX } from "preact";
import { useStateFlash } from "../core/use-state-flash";
import {
  IconCouch,
  IconBed,
  IconDining,
  IconFridge,
  IconBath,
  IconToilet,
  IconWasher,
  IconDressing,
  IconGarage,
  IconDesk,
  IconPlant,
  IconTeddy,
  IconTree,
  IconStairs,
  IconWine,
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
  IconCalendar,
} from "../icons";

type IconCmp = (p: { size?: number }) => JSX.Element;

/* Une pièce = l'objet qui la caractérise. L'ordre compte : les libellés les plus
   spécifiques (salle à manger, chambre d'enfant, WC) passent avant les génériques. */
export function pickAreaIcon(name: string): IconCmp {
  const n = name.toLowerCase();
  if (/(salle ?[àa] ?manger|dining)/.test(n)) return IconDining;
  if (/(salon|séjour|sejour|living)/.test(n)) return IconCouch;
  if (/(enfant|b[ée]b[ée]|kids?|nursery|jeux|playroom)/.test(n)) return IconTeddy;
  if (/(dressing|penderie|placard|walk-? ?in)/.test(n)) return IconDressing;
  if (/(chambre|bedroom)/.test(n)) return IconBed;
  if (/(cuisine|kitchen)/.test(n)) return IconFridge;
  if (/(wc|toilette|water ?closet)/.test(n)) return IconToilet;
  if (/(salle ?de ?bain|sdb|bath|douche|shower)/.test(n)) return IconBath;
  if (/(buanderie|lingerie|laundry|cellier)/.test(n)) return IconWasher;
  if (/(garage|carport|atelier)/.test(n)) return IconGarage;
  if (/(jardin|ext[éèe]rieur|dehors|garden|outdoor)/.test(n)) return IconTree;
  if (/(terrasse|balcon|patio|v[ée]randa)/.test(n)) return IconPlant;
  if (/(cave|sous-? ?sol|basement)/.test(n)) return IconWine;
  if (/(escalier|stairs?|mont[ée]e)/.test(n)) return IconStairs;
  if (/(bureau|office|study)/.test(n)) return IconDesk;
  if (/(entrée|entree|hall|couloir|palier|d[ée]gagement)/.test(n)) return IconDoorRoom;
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
  calendar: "Calendriers",
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
  calendar: IconCalendar,
};

/** Enveloppe de carte draggable, commune au dashboard et au détail de pièce.
 *  Porte `data-flash` le temps d'accuser réception d'un changement d'état. */
export function DragItem({
  signature,
  hero,
  dragProps,
  children,
}: {
  signature: string;
  hero: boolean;
  dragProps: Record<string, unknown>;
  children: ComponentChildren;
}) {
  const flash = useStateFlash(signature);
  return (
    <div
      class="nido-drag-item"
      data-hero={hero ? "true" : "false"}
      data-flash={flash ? "true" : undefined}
      {...dragProps}
    >
      {children}
    </div>
  );
}
