export interface CalendarEvent {
  id: string;
  calendarId: string;
  title: string;
  who?: string;
  dayOffset: number;
  time?: string;
  allDay: boolean;
}

export const CALENDAR_COLORS: Record<string, string> = {
  "calendar.famille": "var(--accent)",
  "calendar.simon":   "var(--positive)",
  "calendar.travail": "#4A8FE0",
};

export const CALENDAR_NAMES: Record<string, string> = {
  "calendar.famille": "Famille",
  "calendar.simon":   "Simon",
  "calendar.travail": "Travail",
};

export const MOCK_CALENDAR_EVENTS: CalendarEvent[] = [
  // Famille
  { id: "f1", calendarId: "calendar.famille", title: "Conservatoire — Adèle",   who: "Adèle",              dayOffset: 1, time: "17:30", allDay: false },
  { id: "f2", calendarId: "calendar.famille", title: "Garde Achille — Mamie",   who: "Achille",            dayOffset: 2, time: undefined, allDay: true  },
  { id: "f3", calendarId: "calendar.famille", title: "Réunion parent / prof",   who: "Simon & Charlotte",  dayOffset: 3, time: "18:00", allDay: false },
  { id: "f4", calendarId: "calendar.famille", title: "Déjeuner en famille",     who: "Famille",            dayOffset: 5, time: "12:30", allDay: false },
  // Simon
  { id: "s1", calendarId: "calendar.simon",   title: "Sport — Salle de sport",  who: "Simon",              dayOffset: 1, time: "19:00", allDay: false },
  { id: "s2", calendarId: "calendar.simon",   title: "Rendez-vous médecin",     who: "Simon",              dayOffset: 4, time: "10:00", allDay: false },
  // Travail
  { id: "t1", calendarId: "calendar.travail", title: "Stand-up équipe",         who: "Simon",              dayOffset: 1, time: "09:00", allDay: false },
  { id: "t2", calendarId: "calendar.travail", title: "Revue de sprint",         who: "Simon",              dayOffset: 3, time: "14:00", allDay: false },
  { id: "t3", calendarId: "calendar.travail", title: "Call client Nexus",       who: "Simon",              dayOffset: 5, time: "15:30", allDay: false },
];

export function getEventsForDay(dayOffset: number): CalendarEvent[] {
  return MOCK_CALENDAR_EVENTS
    .filter((e) => e.dayOffset === dayOffset)
    .sort((a, b) => {
      if (a.allDay && !b.allDay) return -1;
      if (!a.allDay && b.allDay) return 1;
      return (a.time ?? "00:00").localeCompare(b.time ?? "00:00");
    });
}

export function getNextEvent(calendarId: string): CalendarEvent | undefined {
  return MOCK_CALENDAR_EVENTS
    .filter((e) => e.calendarId === calendarId && e.dayOffset >= 0)
    .sort((a, b) => {
      if (a.dayOffset !== b.dayOffset) return a.dayOffset - b.dayOffset;
      return (a.time ?? "00:00").localeCompare(b.time ?? "00:00");
    })[0];
}
