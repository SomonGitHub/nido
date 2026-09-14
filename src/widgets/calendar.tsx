import { useEffect, useState } from "preact/hooks";
import type { HassObject } from "../types";
import type { ResolvedEntity } from "../core/entities";
import { IconCalendar } from "../icons";
import { CalendarPanel } from "../components/calendar-panel";
import { getCalendarColor, parseHassEvents, type CalendarEvent } from "../core/calendar-events";

interface CalendarWidgetProps {
  hass: HassObject;
  entity: ResolvedEntity;
  roomLabel?: string;
  hero?: boolean;
  calendarEntities: ResolvedEntity[];
}

const DAY_LABELS = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
const MAX_EVENTS = 3;
const HERO_MAX_EVENTS = 5;

function formatDay(dayOffset: number, date: Date): string {
  if (dayOffset === 0) return "AUJ";
  if (dayOffset === 1) return "DEM";
  return `${DAY_LABELS[date.getDay()].toUpperCase()} ${date.getDate()}`;
}

export async function fetchCalendarEvents(
  hass: HassObject,
  entityId: string,
  start: Date,
  end: Date,
): Promise<unknown[]> {
  const startStr = start.toISOString();
  const endStr = end.toISOString();
  try {
    const res = await hass.callWS<unknown[]>({
      type: "calendar/events",
      entity_id: entityId,
      start_date_time: startStr,
      end_date_time: endStr,
    });
    return Array.isArray(res) ? res : [];
  } catch (err) {
    if ((err as { code?: string })?.code === "unknown_command") {
      try {
        const res = await hass.callWS<Record<string, unknown>>({
          type: "call_service",
          domain: "calendar",
          service: "get_events",
          service_data: { start_date_time: startStr, end_date_time: endStr },
          target: { entity_id: entityId },
          return_response: true,
        });
        const response = (res as { response?: Record<string, { events?: unknown[] }> })?.response;
        const events = response?.[entityId]?.events
          ?? (res as Record<string, { events?: unknown[] }>)?.[entityId]?.events
          ?? [];
        return Array.isArray(events) ? events : [];
      } catch {
        return [];
      }
    }
    return [];
  }
}

export function CalendarWidget({ hass, entity, roomLabel, hero = false, calendarEntities }: CalendarWidgetProps) {
  const [showPanel, setShowPanel] = useState(false);
  const [events, setEvents] = useState<CalendarEvent[] | null>(null);

  const sortedIds = [...calendarEntities].sort((a, b) => a.entity_id.localeCompare(b.entity_id)).map((e) => e.entity_id);
  const colorIndex = sortedIds.indexOf(entity.entity_id);
  const color = getCalendarColor(colorIndex >= 0 ? colorIndex : 0);

  useEffect(() => {
    let cancelled = false;
    const today = new Date();
    const start = new Date(today);
    start.setHours(0, 0, 0, 0);
    const end = new Date(start);
    end.setDate(end.getDate() + 30);

    fetchCalendarEvents(hass, entity.entity_id, start, end).then((raw) => {
      if (cancelled) return;
      const parsed = parseHassEvents({ [entity.entity_id]: raw as never }, today);
      setEvents(parsed.filter((e) => e.dayOffset >= 0));
    });
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hass != null, entity.entity_id]);

  const limit = hero ? HERO_MAX_EVENTS : MAX_EVENTS;
  const visible = (events ?? []).slice(0, limit);
  const today = new Date();

  const cardClass = ["n-card", hero ? "n-card--accent-muted" : "n-card--default", "nido-cal-widget", "nido-cal-widget--agenda"].join(" ");

  return (
    <>
      <div
        class={cardClass}
        data-hero={hero ? "true" : "false"}
        data-on="false"
        style={{ "--cal-color": color } as never}
        onClick={() => setShowPanel(true)}
      >
        <div class="nido-cal-widget__head">
          <IconCalendar size={hero ? 18 : 16} />
          <span class="n-eyebrow">{roomLabel || entity.friendly_name}</span>
        </div>

        {events === null ? (
          <div class="n-muted nido-cal-widget__placeholder">Chargement…</div>
        ) : visible.length === 0 ? (
          <div class="n-muted nido-cal-widget__placeholder">Rien à venir</div>
        ) : (
          <ul class="nido-cal-widget__agenda">
            {visible.map((ev) => {
              const d = new Date(today);
              d.setDate(today.getDate() + ev.dayOffset);
              return (
                <li key={ev.id} class="nido-cal-widget__agenda-row">
                  <span class="nido-cal-widget__agenda-day">{formatDay(ev.dayOffset, d)}</span>
                  <span class="nido-cal-widget__agenda-time">
                    {ev.allDay ? "Journée" : ev.time}
                  </span>
                  <span class="nido-cal-widget__agenda-title">{ev.title}</span>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {showPanel && (
        <CalendarPanel
          hass={hass}
          calendarEntities={calendarEntities}
          onClose={() => setShowPanel(false)}
        />
      )}
    </>
  );
}
