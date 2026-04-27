import { useState } from "preact/hooks";
import type { HassObject } from "../types";
import type { ResolvedEntity } from "../core/entities";
import { IconSparkles, IconPlay } from "../icons";

interface SceneScriptWidgetProps {
  hass: HassObject;
  entity: ResolvedEntity;
  roomLabel?: string;
}

export function SceneScriptWidget({ hass, entity, roomLabel }: SceneScriptWidgetProps) {
  const isScene = entity.domain === "scene";
  const unavailable = entity.state.state === "unavailable";
  const [pending, setPending] = useState(false);
  const [flash, setFlash] = useState(false);

  const activate = async () => {
    if (unavailable || pending) return;
    setPending(true);
    try {
      await hass.callService(isScene ? "scene" : "script", "turn_on", {
        entity_id: entity.entity_id,
      });
      setFlash(true);
      setTimeout(() => setFlash(false), 600);
    } finally {
      setPending(false);
    }
  };

  return (
    <div
      class={`n-card n-card--compact${flash ? " is-flashing" : ""}`}
      data-on={flash ? "true" : "false"}
    >
      <div class="n-card__head">
        <div class="n-icon-bubble">
          {isScene ? <IconSparkles size={18} /> : <IconPlay size={16} />}
        </div>
        <span class="n-eyebrow">{isScene ? "Scène" : "Script"}</span>
      </div>

      {roomLabel && <div class="n-eyebrow">{roomLabel}</div>}
      <div class="n-title n-title--sm">{entity.friendly_name}</div>

      <button
        type="button"
        class="n-pill-btn n-scene__activate"
        disabled={unavailable || pending}
        onClick={activate}
      >
        <IconPlay size={14} />
        <span>{isScene ? "Activer" : "Lancer"}</span>
      </button>
    </div>
  );
}
