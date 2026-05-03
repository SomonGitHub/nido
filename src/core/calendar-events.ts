export interface CalendarEvent {
  id: string;
  calendarId: string;
  title: string;
  dayOffset: number;
  time?: string;
  allDay: boolean;
}

const COLOR_PALETTE = [
  "var(--accent)",
  "var(--positive)",
  "#4A8FE0",
  "#E06B4A",
  "#8F4AE0",
  "#4AE0B5",
];

export function getCalendarColor(index: number): string {
  return COLOR_PALETTE[index % COLOR_PALETTE.length];
}

interface HassCalendarEventRaw {
  start: { dateTime?: string; date?: string } | string;
  end?: { dateTime?: string; date?: string } | string;
  summary: string;
  uid?: string;
}

type HassCalendarEventsResponse = Record<string, HassCalendarEventRaw[]>;

function midnight(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

function parseDateStr(s: string): { date: Date; allDay: boolean } {
  if (s.includes("T") || (s.includes(" ") && s.includes(":"))) {
    return { date: new Date(s.replace(" ", "T")), allDay: false };
  }
  const [y, m, d] = s.split("-").map(Number);
  return { date: new Date(y, m - 1, d), allDay: true };
}

export function parseHassEvents(
  response: HassCalendarEventsResponse | HassCalendarEventRaw[],
  today: Date,
): CalendarEvent[] {
  const todayMidnight = midnight(today);
  const events: CalendarEvent[] = [];

  // Normalize: Always work with a Record<string, HassCalendarEventRaw[]>
  const normalized: Record<string, HassCalendarEventRaw[]> = Array.isArray(response)
    ? { "unknown": response }
    : (response as Record<string, HassCalendarEventRaw[]>);

  for (const [entityId, eventList] of Object.entries(normalized)) {
    if (!Array.isArray(eventList)) {
      console.warn(`[parseHassEvents] Expected array for ${entityId}, got:`, typeof eventList);
      continue;
    }

    for (const raw of eventList) {
      let startStr = "";
      if (typeof raw.start === "string") {
        startStr = raw.start;
      } else if (raw.start) {
        startStr = raw.start.dateTime ?? raw.start.date ?? "";
      }

      if (!startStr) continue;

      const { date, allDay } = parseDateStr(startStr);
      const dayOffset = Math.round(
        (midnight(date).getTime() - todayMidnight.getTime()) / 86400000,
      );

      events.push({
        id: `${entityId}-${raw.uid ?? raw.summary}-${startStr}`,
        calendarId: entityId === "unknown" ? "calendar" : entityId,
        title: raw.summary,
        dayOffset,
        time: allDay
          ? undefined
          : `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`,
        allDay,
      });
    }
  }

  return events.sort((a, b) => {
    if (a.dayOffset !== b.dayOffset) return a.dayOffset - b.dayOffset;
    if (a.allDay && !b.allDay) return -1;
    if (!a.allDay && b.allDay) return 1;
    return (a.time ?? "").localeCompare(b.time ?? "");
  });
}

export function parseNextEventFromAttrs(
  attrs: Record<string, unknown>,
  today: Date,
): { title: string; time?: string; allDay: boolean; dayOffset: number } | null {
  const message = attrs.message as string | undefined;
  const startTime = attrs.start_time as string | undefined;
  if (!message || !startTime) return null;

  const { date, allDay } = parseDateStr(startTime);
  const dayOffset = Math.round(
    (midnight(date).getTime() - midnight(today).getTime()) / 86400000,
  );

  return {
    title: message,
    allDay,
    dayOffset,
    time: allDay
      ? undefined
      : `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`,
  };
}
