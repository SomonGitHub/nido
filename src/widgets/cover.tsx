import { useState } from "preact/hooks";
import type { HassObject } from "../types";
import type { ResolvedEntity } from "../core/entities";
import { IconBlind } from "../icons";

interface CoverWidgetProps {
  hass: HassObject;
  entity: ResolvedEntity;
  roomLabel?: string;
}

function position(state: ResolvedEntity["state"]): number {
  const p = state.attributes.current_position as number | undefined;
  if (typeof p === "number") return p;
  if (state.state === "open") return 100;
  if (state.state === "closed") return 0;
  return 50;
}

export function CoverWidget({ hass, entity, roomLabel }: CoverWidgetProps) {
  const unavailable = entity.state.state === "unavailable";
  const [draftPos, setDraftPos] = useState<number | null>(null);
  const pos = draftPos ?? position(entity.state);
  const isOpen = pos > 0;

  const setPosition = async (value: number) => {
    setDraftPos(value);
    try {
      await hass.callService("cover", "set_cover_position", {
        entity_id: entity.entity_id,
        position: value,
      });
    } finally {
      setTimeout(() => setDraftPos(null), 50);
    }
  };

  return (
    <div class="n-cover-glow-wrap" data-active={isOpen ? "true" : "false"}>
    <div class="n-card" data-on={isOpen ? "true" : "false"}>
      <div class="n-card__head">
        <div class="n-icon-bubble">
          <IconBlind size={20} />
        </div>
        <div class="n-blinds">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <span
              key={i}
              class="n-blinds__bar"
              data-active={(i / 6) * 100 < pos ? "true" : "false"}
            />
          ))}
        </div>
      </div>

      {roomLabel && <div class="n-eyebrow">{roomLabel}</div>}
      <div class="n-title">{entity.friendly_name}</div>

      {!unavailable && (
        <div class="n-light__intensity">
          <div class="n-row-between">
            <span class="n-eyebrow">Ouverture</span>
            <span class="n-value">
              {pos}
              <span class="n-value__unit">%</span>
            </span>
          </div>
          <input
            type="range"
            class="n-slider"
            min={0}
            max={100}
            step={1}
            value={pos}
            style={{ '--val': `${pos}%` } as any}
            onInput={(e) => setPosition(Number((e.target as HTMLInputElement).value))}
          />
          <div style={{ marginTop: '12px', display: 'flex', justifyContent: 'flex-end' }}>
            <button
              type="button"
              class="n-pill-btn"
              style={{ fontSize: '12px', padding: '6px 12px' }}
              onClick={() => setPosition(pos !== 0 ? 0 : 100)}
            >
              {pos !== 0 ? "Fermer" : "Ouvrir"}
            </button>
          </div>
        </div>
      )}
      {unavailable && <div class="n-muted">Indisponible</div>}
    </div>
    </div>
  );
}
