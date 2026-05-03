import { useEffect, useState } from "preact/hooks";
import type { HassObject } from "../types";
import type { ResolvedEntity } from "../core/entities";
import { IconX } from "../icons";
import {
  getCalendarColor,
  parseHassEvents,
  type CalendarEvent,
} from "../core/calendar-events";

interface CalendarPanelProps {
  hass: HassObject;
  calendarEntities: ResolvedEntity[];
  onClose: () => void;
}

const DAY_FR = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];

export function CalendarPanel({ hass, calendarEntities, onClose }: CalendarPanelProps) {
  const [events, setEvents] = useState<CalendarEvent[] | null>(null);
  const today = new Date();

  // Stable color map: sorted entity_ids → palette index
  const colorMap = new Map(
    [...calendarEntities].sort((a, b) => a.entity_id.localeCompare(b.entity_id)).map((e, i) => [e.entity_id, getCalendarColor(i)]),
  );

  useEffect(() => {
    if (calendarEntities.length === 0) {
      setEvents([]);
      return;
    }

    const start = new Date();
    start.setHours(0, 0, 0, 0);
    const end = new Date(start);
    end.setDate(end.getDate() + 7);

    const startStr = start.toISOString();
    const endStr = end.toISOString();

    console.log(`[CalendarPanel] Fetching events from ${startStr} to ${endStr}`);

    Promise.all(
      calendarEntities.map((e) =>
        hass
          .callWS<any[]>({
            type: "calendar/events",
            entity_id: e.entity_id,
            start_date_time: startStr,
            end_date_time: endStr,
          })
          .then((res) => ({ entity_id: e.entity_id, events: res }))
          .catch((err) => {
            console.error(`[CalendarPanel] Error for ${e.entity_id}:`, err);
            return { entity_id: e.entity_id, events: [] };
          }),
      ),
    ).then((results) => {
      const combinedResponse: Record<string, any[]> = {};
      for (const res of results) {
        combinedResponse[res.entity_id] = res.events;
      }
      console.log("[CalendarPanel] Combined response:", combinedResponse);
      const parsed = parseHassEvents(combinedResponse, today);
      console.log("[CalendarPanel] Parsed events:", parsed);
      setEvents(parsed);
    });
  }, []);

  const days = Array.from({ length: 7 }, (_, offset) => {
    const d = new Date(today);
    d.setDate(today.getDate() + offset);
    const dayEvents = (events ?? []).filter((e) => e.dayOffset === offset);
    return { date: d, offset, events: dayEvents };
  });

  const visibleCalendarIds = events
    ? [...new Set(events.filter((e) => e.dayOffset >= 0 && e.dayOffset < 7).map((e) => e.calendarId))]
    : [];

  return (
    <div class="nido-notification-panel">
      <div class="nido-notification-panel__backdrop" onClick={onClose} />
      <div class="nido-notification-panel__content">

        <header class="nido-notification-panel__header">
          <div class="nido-lights-panel__title">
            <span>Agenda</span>
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

        {visibleCalendarIds.length > 0 && (
          <div class="nido-cal-panel__legend">
            {visibleCalendarIds.map((id) => (
              <div key={id} class="nido-cal-panel__legend-item">
                <span
                  class="nido-cal-panel__legend-dot"
                  style={{ background: colorMap.get(id) ?? "var(--ink-3)" }}
                />
                <span>
                  {calendarEntities.find((e) => e.entity_id === id)?.friendly_name ?? id}
                </span>
              </div>
            ))}
          </div>
        )}

        <div class="nido-notification-panel__scroll">
          {events === null ? (
            <div class="nido-cal-panel__loading">Chargement…</div>
          ) : (
            <div class="nido-cal-panel__days">
              {days.map(({ date, offset, events: dayEvents }) => (
                <div
                  key={offset}
                  class={`nido-cal-panel__day ${offset === 0 ? "is-today" : ""}`}
                >
                  <div class="nido-cal-panel__badge">
                    <span class="nido-cal-panel__badge-day">{DAY_FR[date.getDay()]}</span>
                    <span class="nido-cal-panel__badge-num">{date.getDate()}</span>
                  </div>

                  <div class="nido-cal-panel__events">
                    {dayEvents.length === 0 ? (
                      <span class="nido-cal-panel__empty">—</span>
                    ) : (
                      dayEvents.map((e) => (
                        <div key={e.id} class="nido-cal-panel__event">
                          <span
                            class="nido-cal-panel__event-dot"
                            style={{ background: colorMap.get(e.calendarId) ?? "var(--ink-3)" }}
                          />
                          <div class="nido-cal-panel__event-body">
                            <span class="nido-cal-panel__event-title">{e.title}</span>
                          </div>
                          <span class="nido-cal-panel__event-time">
                            {e.allDay ? "Journée" : e.time}
                          </span>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
