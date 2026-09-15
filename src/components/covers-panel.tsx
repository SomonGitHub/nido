import { useState } from "preact/hooks";
import type { HassObject } from "../types";
import type { Area } from "../core/areas";
import { groupByRoomName, type ResolvedEntity } from "../core/entities";
import { IconBlind, IconChevronUp, IconChevronDown, IconStop, IconX } from "../icons";
import { useOverlay } from "../core/use-overlay";

interface CoversPanelProps {
  hass: HassObject;
  covers: ResolvedEntity[];
  areas: Area[];
  onClose: () => void;
}

function coverPosition(entity: ResolvedEntity): number {
  const p = entity.state.attributes.current_position as number | undefined;
  if (typeof p === "number") return p;
  if (entity.state.state === "open") return 100;
  if (entity.state.state === "closed") return 0;
  return 50;
}

interface CoverRowProps {
  hass: HassObject;
  entity: ResolvedEntity;
}

function CoverRow({ hass, entity }: CoverRowProps) {
  const [pending, setPending] = useState(false);
  const pos = coverPosition(entity);

  const call = async (service: string) => {
    setPending(true);
    try {
      await hass.callService("cover", service, { entity_id: entity.entity_id });
    } finally {
      setPending(false);
    }
  };

  return (
    <div class={`nido-lights-row ${pending ? "is-pending" : ""}`}>
      <div class="nido-lights-row__icon">
        <IconBlind size={18} />
      </div>
      <div class="nido-lights-row__body">
        <div class="nido-lights-row__name">{entity.friendly_name}</div>
      </div>
      <div class="nido-lights-row__pct">{pos}%</div>
      <div class="nido-covers-row__actions">
        <button
          type="button"
          class="n-pill-btn"
          aria-label="Descendre"
          title="Descendre"
          disabled={pending}
          onClick={() => call("close_cover")}
        >
          <IconChevronDown size={16} />
        </button>
        <button
          type="button"
          class="n-pill-btn"
          aria-label="Stop"
          title="Stop"
          disabled={pending}
          onClick={() => call("stop_cover")}
        >
          <IconStop size={16} />
        </button>
        <button
          type="button"
          class="n-pill-btn"
          aria-label="Monter"
          title="Monter"
          disabled={pending}
          onClick={() => call("open_cover")}
        >
          <IconChevronUp size={16} />
        </button>
      </div>
    </div>
  );
}

export function CoversPanel({ hass, covers, areas, onClose }: CoversPanelProps) {
  const overlayRef = useOverlay<HTMLDivElement>(onClose);
  const [pendingAll, setPendingAll] = useState(false);
  const areaMap = new Map(areas.map((a) => [a.area_id, a.name]));
  const groups = groupByRoomName(covers, areaMap);
  const coversOpen = covers.filter((e) => coverPosition(e) > 0);

  const callAll = async (service: string) => {
    setPendingAll(true);
    try {
      await Promise.all(
        covers.map((e) => hass.callService("cover", service, { entity_id: e.entity_id })),
      );
    } finally {
      setPendingAll(false);
    }
  };

  return (
    <div class="nido-lights-panel">
      <div class="nido-notification-panel__backdrop" onClick={onClose} />
      <div
        ref={overlayRef}
        class="nido-notification-panel__content"
        role="dialog"
        aria-modal="true"
        aria-label="Volets"
      >
        <header class="nido-notification-panel__header">
          <div class="nido-lights-panel__title">
            <span>Volets</span>
            <span class="nido-lights-panel__count">{coversOpen.length}</span>
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
            {groups.map((g) => (
              <div class="nido-lights-group" key={g.room}>
                <div class="nido-lights-group__title">{g.room}</div>
                {g.items.map((e) => (
                  <CoverRow key={e.entity_id} hass={hass} entity={e} />
                ))}
              </div>
            ))}
          </div>
        </div>

        {covers.length > 1 && (
          <div class="nido-lights-panel__footer nido-covers-panel__footer">
            <button
              type="button"
              class="nido-lights-panel__all-off"
              disabled={pendingAll}
              onClick={() => callAll("close_cover")}
            >
              Tout fermer
            </button>
            <button
              type="button"
              class="nido-lights-panel__all-off"
              disabled={pendingAll}
              onClick={() => callAll("open_cover")}
            >
              Tout ouvrir
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
