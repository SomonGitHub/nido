import { useEffect, useState } from "preact/hooks";
import type { ComponentChildren } from "preact";
import type { HassObject } from "../types";
import { playerProgress } from "../core/music-assistant";
import { IconMusic } from "../icons";
import { pictureUrl, playerName, useSecondTick } from "./music-panel";

interface MusicCoverProps {
  hass: HassObject;
  entityId: string;
  roomName: string | null;
  dateStr: string;
  timeStr: string;
  offset: { x: number; y: number };
  meta?: ComponentChildren;
}

/** Écran de veille « Pochette » : la pochette en grand sur un fond flou de ses
 *  propres couleurs, le titre, la pièce et l'heure. */
export function MusicCover({ hass, entityId, roomName, dateStr, timeStr, offset, meta }: MusicCoverProps) {
  const state = hass.states[entityId];
  const now = useSecondTick(true);
  const src = pictureUrl(hass, state?.attributes.entity_picture as string | undefined);
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [src]);
  if (!state) return null;
  const a = state.attributes;
  const progress = playerProgress(state, now);
  const art = src && !failed ? src : null;

  return (
    <div class="nido-veille-cover">
      {art && (
        <div class="nido-veille-cover__bg" aria-hidden="true">
          <img src={art} alt="" />
        </div>
      )}
      <div class="nido-veille-cover__inner" style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}>
        <div class="nido-veille-cover__art">
          {art ? <img src={art} alt="" onError={() => setFailed(true)} /> : <IconMusic size={96} />}
        </div>
        <div class="nido-veille-cover__text">
          <div class="nido-veille-cover__clock">{timeStr}</div>
          <div class="nido-veille-cover__date">{dateStr}</div>
          <div class="nido-veille-cover__eyebrow">
            <span class="nido-music-eq" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            En lecture · {roomName ?? playerName(hass, entityId)}
          </div>
          <div class="nido-veille-cover__title">{a.media_title as string}</div>
          <div class="nido-veille-cover__artist">
            {[a.media_artist as string | undefined, a.media_album_name as string | undefined].filter(Boolean).join(" · ")}
          </div>
          {progress && (
            <div class="nido-veille-cover__bar" aria-hidden="true">
              <span style={{ width: `${(progress.position / progress.duration) * 100}%` }} />
            </div>
          )}
          {meta && <div class="nido-veille-cover__meta">{meta}</div>}
        </div>
      </div>
    </div>
  );
}
