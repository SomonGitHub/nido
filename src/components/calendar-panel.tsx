import { IconX } from "../icons";
import {
  MOCK_CALENDAR_EVENTS,
  CALENDAR_COLORS,
  CALENDAR_NAMES,
  getEventsForDay,
} from "../core/calendar-events";

interface CalendarPanelProps {
  onClose: () => void;
}

const DAY_FR = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];

// Calendars that appear in the next 7 days
const VISIBLE_CALENDAR_IDS = [
  ...new Set(
    MOCK_CALENDAR_EVENTS
      .filter((e) => e.dayOffset >= 0 && e.dayOffset < 7)
      .map((e) => e.calendarId),
  ),
];

export function CalendarPanel({ onClose }: CalendarPanelProps) {
  const today = new Date();

  const days = Array.from({ length: 7 }, (_, offset) => {
    const d = new Date(today);
    d.setDate(today.getDate() + offset);
    return { date: d, offset, events: getEventsForDay(offset) };
  });

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

        {/* Légende calendriers */}
        <div class="nido-cal-panel__legend">
          {VISIBLE_CALENDAR_IDS.map((id) => (
            <div key={id} class="nido-cal-panel__legend-item">
              <span
                class="nido-cal-panel__legend-dot"
                style={{ background: CALENDAR_COLORS[id] ?? "var(--ink-3)" }}
              />
              <span>{CALENDAR_NAMES[id] ?? id}</span>
            </div>
          ))}
        </div>

        <div class="nido-notification-panel__scroll">
          <div class="nido-cal-panel__days">
            {days.map(({ date, offset, events }) => (
              <div
                key={offset}
                class={`nido-cal-panel__day ${offset === 0 ? "is-today" : ""}`}
              >
                {/* Badge date */}
                <div class="nido-cal-panel__badge">
                  <span class="nido-cal-panel__badge-day">{DAY_FR[date.getDay()]}</span>
                  <span class="nido-cal-panel__badge-num">{date.getDate()}</span>
                </div>

                {/* Événements du jour */}
                <div class="nido-cal-panel__events">
                  {events.length === 0 ? (
                    <span class="nido-cal-panel__empty">—</span>
                  ) : (
                    events.map((e) => {
                      const color = CALENDAR_COLORS[e.calendarId] ?? "var(--ink-3)";
                      return (
                        <div key={e.id} class="nido-cal-panel__event">
                          <span
                            class="nido-cal-panel__event-dot"
                            style={{ background: color }}
                          />
                          <div class="nido-cal-panel__event-body">
                            <span class="nido-cal-panel__event-title">{e.title}</span>
                            {e.who && (
                              <span class="nido-cal-panel__event-who">{e.who}</span>
                            )}
                          </div>
                          <span class="nido-cal-panel__event-time">
                            {e.allDay ? "Journée" : e.time}
                          </span>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
