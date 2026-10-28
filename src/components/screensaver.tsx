import { Fragment } from "preact";
import { useEffect, useMemo, useState } from "preact/hooks";
import type { HassObject } from "../types";
import type { ResolvedEntity } from "../core/entities";
import type { AiDigestState } from "../core/use-ai-digest";
import { buildDigest } from "../core/home-digest";
import { isQuietHour } from "../core/announce";
import { useMinuteTick } from "../core/use-minute-tick";
import {
  activeAlerts,
  burnInOffset,
  nightLine,
  presences,
  presenceText,
  upcomingEvent,
} from "../core/screensaver";
import { describeCondition } from "../widgets/weather";
import { IconCalendar, IconDroplet, IconFlame, IconSmoke, IconSparkles } from "../icons";

interface FullyBrightness {
  getScreenBrightness?: () => number;
  setScreenBrightness?: (level: number) => void;
}

/* Sur 0-255 : assez pour lire l'heure dans le noir sans éclairer le couloir. */
const NIGHT_BRIGHTNESS = 6;

function fullyBrightness(): Required<FullyBrightness> | null {
  const f = (globalThis as { fully?: FullyBrightness }).fully;
  return f?.getScreenBrightness && f.setScreenBrightness ? (f as Required<FullyBrightness>) : null;
}

const ALERT_ICON: Record<string, typeof IconDroplet> = {
  moisture: IconDroplet,
  smoke: IconSmoke,
  gas: IconFlame,
  carbon_monoxide: IconFlame,
};

interface ScreensaverProps {
  hass: HassObject;
  entities: ResolvedEntity[];
  areaNameById: Map<string, string>;
  aiDigest: AiDigestState | null;
  onWake: () => void;
  onOpenRoom: (areaId: string) => void;
}

function pictureUrl(hass: HassObject, pic: string | undefined): string | undefined {
  if (!pic || /^https?:/.test(pic)) return pic;
  const base = (hass as { hassUrl?: (p?: string) => string }).hassUrl?.("") ?? "";
  return base.replace(/\/$/, "") + pic;
}

export function Screensaver({ hass, entities, areaNameById, aiDigest, onWake, onOpenRoom }: ScreensaverProps) {
  const now = useMinuteTick();
  const night = isQuietHour(now);
  const offset = burnInOffset(now);
  const [acked, setAcked] = useState<Set<string>>(() => new Set());

  const alerts = useMemo(() => activeAlerts(entities), [entities]);
  const alert = alerts.find((a) => !acked.has(a.entityId)) ?? null;
  useEffect(() => {
    const live = new Set(alerts.map((a) => a.entityId));
    setAcked((prev) => {
      const next = new Set([...prev].filter((id) => live.has(id)));
      return next.size === prev.size ? prev : next;
    });
  }, [alerts]);

  useEffect(() => {
    const f = fullyBrightness();
    if (!f || !night || alert) return;
    const before = f.getScreenBrightness();
    f.setScreenBrightness(NIGHT_BRIGHTNESS);
    return () => f.setScreenBrightness(before);
  }, [night, alert != null]);

  const dateStr = now.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" });
  const timeStr = now.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
  const weather =
    entities.find((e) => e.domain === "weather")?.state ??
    Object.values(hass.states).find((s) => s.entity_id.startsWith("weather."));
  const condition = weather ? describeCondition(weather.state) : null;
  const people = presences(hass.states);
  const event = upcomingEvent(entities, now);
  const facts = useMemo(
    () =>
      buildDigest({ hass, entities, areaNameById, now })
        .filter((f) => f.tone !== "alert" && !f.id.startsWith("event:") && !f.id.startsWith("arrival:")),
    [hass.states, entities, areaNameById, now],
  );
  const aiText = aiDigest?.digest.text;

  return (
    <div
      class="nido-veille"
      data-night={night && !alert ? "true" : undefined}
      data-alert={alert ? "true" : undefined}
      role="button"
      tabIndex={0}
      aria-label="Écran de veille. Touchez pour revenir à Nido."
      onClick={onWake}
    >
      <div class="nido-veille__brand">nido</div>
      <div class="nido-veille__stage" style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }} aria-hidden={alert ? "true" : undefined}>
        {night ? (
          <div class="nido-veille__night">
            <div class="nido-veille__date">{dateStr}</div>
            <div class="nido-veille__clock">{timeStr}</div>
            <div class="nido-veille__meta">
              {nightLine(entities, hass.states).map((part, i) => (
                <Fragment key={part}>
                  {i > 0 && <span class="nido-veille__dot" />}
                  <span>{part}</span>
                </Fragment>
              ))}
            </div>
          </div>
        ) : (
          <div class="nido-veille__day">
            <div class="nido-veille__main">
              <div class="nido-veille__date">{dateStr}</div>
              <div class="nido-veille__clock">{timeStr}</div>
              <div class="nido-veille__meta">
                {weather && condition && (
                  <span class="nido-veille__weather">
                    <condition.Icon size={22} />
                    {weather.attributes.temperature != null && <b>{String(weather.attributes.temperature).replace(".", ",")}°</b>}
                    <span>{condition.label}</span>
                  </span>
                )}
                {weather && people.length > 0 && <span class="nido-veille__dot" />}
                {people.length > 0 && (
                  <span class="nido-veille__people">
                    <span class="nido-veille__avatars">
                      {people.map((p) => {
                        const src = pictureUrl(hass, p.picture);
                        return src ? (
                          <img src={src} alt="" class={p.home ? "" : "is-away"} />
                        ) : (
                          <span class={p.home ? "" : "is-away"}>{p.name.slice(0, 1)}</span>
                        );
                      })}
                    </span>
                    <span>{presenceText(people)}</span>
                  </span>
                )}
              </div>
            </div>
            <div class="nido-veille__side">
              {aiText && (
                <div class="nido-veille__card">
                  <div class="nido-veille__eyebrow">
                    <IconSparkles size={13} /> Résumé IA
                  </div>
                  <p class="nido-veille__ai">{aiText}</p>
                </div>
              )}
              {event && (
                <div class="nido-veille__card">
                  <div class="nido-veille__eyebrow">
                    <IconCalendar size={13} /> Prochain
                  </div>
                  <div class="nido-veille__event">
                    {event.time && <span class="nido-veille__event-time">{event.time}</span>}
                    <span>
                      <span class="nido-veille__event-title">{event.title}</span>
                      <span class="nido-veille__event-when">{event.when}</span>
                    </span>
                  </div>
                </div>
              )}
              {facts.length > 0 && (
                <div class="nido-veille__chips">
                  {facts.map((f) => (
                    <span key={f.id} class="nido-veille__chip" data-tone={f.tone}>
                      {f.text}
                      {f.room && ` · ${f.room}`}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      {!alert && <div class="nido-veille__hint">{night ? "Mode nuit" : "Touchez l'écran pour revenir à Nido"}</div>}

      {alert && (
        <div class="nido-veille__alert" role="alertdialog" aria-label={alert.label} onClick={(ev) => ev.stopPropagation()}>
          <span class="nido-veille__alert-icon" aria-hidden="true">
            {(() => {
              const Icon = ALERT_ICON[alert.kind] ?? IconDroplet;
              return <Icon size={44} />;
            })()}
          </span>
          <div class="nido-veille__alert-text">
            <h2>{alert.label}</h2>
            <p>
              {[
                alert.areaId ? areaNameById.get(alert.areaId) : null,
                `depuis ${new Date(alert.since).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}`,
              ]
                .filter(Boolean)
                .join(" · ")}
            </p>
          </div>
          <div class="nido-veille__alert-actions">
            {alert.areaId && (
              <button
                type="button"
                class="nido-veille__alert-btn"
                onClick={() => {
                  onWake();
                  onOpenRoom(alert.areaId!);
                }}
              >
                Voir la pièce
              </button>
            )}
            <button
              type="button"
              class="nido-veille__alert-btn nido-veille__alert-btn--ghost"
              onClick={() => setAcked((prev) => new Set(prev).add(alert.entityId))}
            >
              J'ai compris
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
