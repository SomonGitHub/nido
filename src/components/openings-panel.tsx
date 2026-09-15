import type { JSX } from "preact";
import type { Area } from "../core/areas";
import type { ResolvedEntity } from "../core/entities";
import { IconWindow, IconDoor, IconX } from "../icons";
import { useOverlay } from "../core/use-overlay";

interface OpeningsPanelProps {
  openings: ResolvedEntity[];
  areas: Area[];
  onClose: () => void;
}

const ICON_BY_CLASS: Record<string, (p: { size?: number }) => JSX.Element> = {
  door: IconDoor,
  garage_door: IconDoor,
  window: IconWindow,
};

interface OpeningRowProps {
  entity: ResolvedEntity;
  roomName: string;
}

function OpeningRow({ entity, roomName }: OpeningRowProps) {
  const isOpen = entity.state.state === "on";
  const deviceClass = (entity.state.attributes.device_class as string | undefined) ?? "";
  const Icon = ICON_BY_CLASS[deviceClass] ?? IconWindow;

  return (
    <div class="nido-lights-row">
      <div class="nido-lights-row__icon">
        <Icon size={18} />
      </div>
      <div class="nido-lights-row__body">
        <div class="nido-lights-row__name">{entity.friendly_name}</div>
        {roomName && <div class="nido-lights-row__room">{roomName}</div>}
      </div>
      <div class={`nido-openings-row__status ${isOpen ? "is-open" : ""}`}>
        {isOpen ? "Ouverte" : "Fermée"}
      </div>
    </div>
  );
}

export function OpeningsPanel({ openings, areas, onClose }: OpeningsPanelProps) {
  const overlayRef = useOverlay<HTMLDivElement>(onClose);
  const areaMap = new Map(areas.map((a) => [a.area_id, a.name]));
  const openingsOpen = openings.filter((e) => e.state.state === "on");

  return (
    <div class="nido-lights-panel">
      <div class="nido-notification-panel__backdrop" onClick={onClose} />
      <div
        ref={overlayRef}
        class="nido-notification-panel__content"
        role="dialog"
        aria-modal="true"
        aria-label="Ouvrants"
      >
        <header class="nido-notification-panel__header">
          <div class="nido-lights-panel__title">
            <span>Ouvrants</span>
            <span class="nido-lights-panel__count">{openingsOpen.length}</span>
          </div>
          <button
            type="button"
            class="nido-notification-panel__close"
            onClick={onClose}
            aria-label="Fermer"
          >
            <IconX size={20} />
          </button>
        </header>

        <div class="nido-notification-panel__scroll">
          <div class="nido-lights-list">
            {openings.map((e) => (
              <OpeningRow
                key={e.entity_id}
                entity={e}
                roomName={e.area_id ? (areaMap.get(e.area_id) ?? "") : ""}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
