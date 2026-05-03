import { useState } from "preact/hooks";
import type { HassObject } from "../types";
import type { ResolvedEntity } from "../core/entities";
import { IconCalendar } from "../icons";
import { CalendarPanel } from "../components/calendar-panel";
import { getCalendarColor, parseNextEventFromAttrs } from "../core/calendar-events";

interface CalendarWidgetProps {
  hass: HassObject;
  entity: ResolvedEntity;
  roomLabel?: string;
  calendarEntities: ResolvedEntity[];
}

const DAY_LABELS = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];

function formatDay(dayOffset: number, date: Date): string {
  if (dayOffset === 0) return "Aujourd'hui";
  if (dayOffset === 1) return "Demain";
  return `${DAY_LABELS[date.getDay()]} ${date.getDate()}`;
}

export function CalendarWidget({ hass, entity, calendarEntities }: CalendarWidgetProps) {
  const [showPanel, setShowPanel] = useState(false);

  const sortedIds = [...calendarEntities].sort((a, b) => a.entity_id.localeCompare(b.entity_id)).map((e) => e.entity_id);
  const colorIndex = sortedIds.indexOf(entity.entity_id);
  const color = getCalendarColor(colorIndex >= 0 ? colorIndex : 0);

  const today = new Date();
  const next = parseNextEventFromAttrs(entity.state.attributes, today);

  const eventDate = next
    ? (() => { const d = new Date(today); d.setDate(today.getDate() + next.dayOffset); return d; })()
    : null;

  return (
    <>
      <div
        class="n-card n-card--default nido-cal-widget"
        data-on="false"
        onClick={() => setShowPanel(true)}
      >
        <div class="n-card__head">
          <div class="n-icon-bubble nido-cal-widget__bubble" style={{ "--cal-color": color } as any}>
            <IconCalendar size={18} />
          </div>
          <span class="n-eyebrow">{entity.friendly_name}</span>
        </div>

        {next && eventDate ? (
          <>
            <div class="nido-cal-widget__title">{next.title}</div>
            <div class="nido-cal-widget__when">
              <span class="nido-cal-widget__day">{formatDay(next.dayOffset, eventDate)}</span>
              <span class="nido-cal-widget__sep">·</span>
              <span class="nido-cal-widget__time">
                {next.allDay ? "Journée" : next.time}
              </span>
            </div>
          </>
        ) : (
          <div class="n-muted">Rien à venir</div>
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
