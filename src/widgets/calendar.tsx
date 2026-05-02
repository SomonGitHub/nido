import { useState } from "preact/hooks";
import type { HassObject } from "../types";
import type { ResolvedEntity } from "../core/entities";
import { IconCalendar } from "../icons";
import { CalendarPanel } from "../components/calendar-panel";
import { CALENDAR_COLORS, getNextEvent } from "../core/calendar-events";

interface CalendarWidgetProps {
  hass: HassObject;
  entity: ResolvedEntity;
  roomLabel?: string;
}

const DAY_LABELS = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];

function formatDay(dayOffset: number): string {
  if (dayOffset === 0) return "Aujourd'hui";
  if (dayOffset === 1) return "Demain";
  const d = new Date();
  d.setDate(d.getDate() + dayOffset);
  return `${DAY_LABELS[d.getDay()]} ${d.getDate()}`;
}

export function CalendarWidget({ entity }: CalendarWidgetProps) {
  const [showPanel, setShowPanel] = useState(false);
  const next = getNextEvent(entity.entity_id);
  const color = CALENDAR_COLORS[entity.entity_id] ?? "var(--ink-3)";

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

        {next ? (
          <>
            <div class="nido-cal-widget__title">{next.title}</div>
            <div class="nido-cal-widget__when">
              <span class="nido-cal-widget__day">{formatDay(next.dayOffset)}</span>
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

      {showPanel && <CalendarPanel onClose={() => setShowPanel(false)} />}
    </>
  );
}
