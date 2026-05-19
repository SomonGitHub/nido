const KEY = "nido.kidsPoints";

export interface Kid {
  id: string;
  name: string;
  color: string;
  emoji?: string;
}

export interface KidsTask {
  id: string;
  label: string;
  points: number;
  emoji?: string;
}

export interface KidsData {
  kids: Kid[];
  tasks: KidsTask[];
  weekStart: string;
  completed: Record<string, Record<string, number>>;
  lastWeek: Record<string, number>;
  updatedAt: string;
}

export const DEFAULT_TASKS: KidsTask[] = [
  { id: "tidy_room", label: "Ranger sa chambre", points: 3, emoji: "🧸" },
  { id: "make_bed", label: "Faire son lit", points: 1, emoji: "🛏️" },
  { id: "set_table", label: "Mettre la table", points: 2, emoji: "🍽️" },
  { id: "clear_table", label: "Débarrasser la table", points: 2, emoji: "🧹" },
  { id: "homework", label: "Faire ses devoirs", points: 3, emoji: "📚" },
  { id: "brush_teeth", label: "Se brosser les dents", points: 1, emoji: "🪥" },
];

const KID_COLORS = ["#E89B3C", "#7BA77A", "#C45D3F", "#6E8AB8", "#B07AB0", "#D4A03B"];

function safeStorage(): Storage | null {
  try {
    return typeof localStorage !== "undefined" ? localStorage : null;
  } catch {
    return null;
  }
}

export function getCurrentWeekStart(date = new Date()): string {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  const day = d.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  d.setDate(d.getDate() + diff);
  return d.toISOString().slice(0, 10);
}

export function pickKidColor(index: number): string {
  return KID_COLORS[index % KID_COLORS.length];
}

function emptyData(): KidsData {
  return {
    kids: [],
    tasks: DEFAULT_TASKS.slice(),
    weekStart: getCurrentWeekStart(),
    completed: {},
    lastWeek: {},
    updatedAt: new Date(0).toISOString(),
  };
}

export function withTimestamp(data: KidsData): KidsData {
  return { ...data, updatedAt: new Date().toISOString() };
}

function totalForKid(data: KidsData, kidId: string): number {
  const kidCompleted = data.completed[kidId];
  if (!kidCompleted) return 0;
  let total = 0;
  for (const task of data.tasks) {
    const count = kidCompleted[task.id] ?? 0;
    total += count * task.points;
  }
  return total;
}

function rolloverIfNeeded(data: KidsData): KidsData {
  const current = getCurrentWeekStart();
  if (data.weekStart === current) return data;
  const lastWeek: Record<string, number> = {};
  for (const kid of data.kids) {
    lastWeek[kid.id] = totalForKid(data, kid.id);
  }
  return {
    ...data,
    weekStart: current,
    completed: {},
    lastWeek,
  };
}

export function parseKidsData(raw: unknown): KidsData | null {
  if (!raw || typeof raw !== "object") return null;
  const parsed = raw as Partial<KidsData>;
  if (!Array.isArray(parsed.kids) || !Array.isArray(parsed.tasks)) return null;
  return rolloverIfNeeded({
    kids: parsed.kids as Kid[],
    tasks: parsed.tasks.length > 0 ? (parsed.tasks as KidsTask[]) : DEFAULT_TASKS.slice(),
    weekStart: typeof parsed.weekStart === "string" ? parsed.weekStart : getCurrentWeekStart(),
    completed: parsed.completed && typeof parsed.completed === "object" ? parsed.completed : {},
    lastWeek: parsed.lastWeek && typeof parsed.lastWeek === "object" ? parsed.lastWeek : {},
    updatedAt: typeof parsed.updatedAt === "string" ? parsed.updatedAt : new Date(0).toISOString(),
  });
}

export function loadKidsData(): KidsData {
  const s = safeStorage();
  if (!s) return emptyData();
  const raw = s.getItem(KEY);
  if (!raw) return emptyData();
  try {
    return parseKidsData(JSON.parse(raw)) ?? emptyData();
  } catch {
    return emptyData();
  }
}

export function saveKidsData(data: KidsData): void {
  const s = safeStorage();
  if (!s) return;
  s.setItem(KEY, JSON.stringify(data));
}

export function totalPoints(data: KidsData, kidId: string): number {
  return totalForKid(data, kidId);
}

export function incrementTask(data: KidsData, kidId: string, taskId: string, delta: 1 | -1): KidsData {
  const kidCompleted = { ...(data.completed[kidId] ?? {}) };
  const next = Math.max(0, (kidCompleted[taskId] ?? 0) + delta);
  kidCompleted[taskId] = next;
  return {
    ...data,
    completed: { ...data.completed, [kidId]: kidCompleted },
  };
}

export function addKid(data: KidsData, name: string): KidsData {
  const trimmed = name.trim();
  if (!trimmed) return data;
  const id = "kid_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
  const kid: Kid = { id, name: trimmed, color: pickKidColor(data.kids.length) };
  return { ...data, kids: [...data.kids, kid] };
}

export function removeKid(data: KidsData, kidId: string): KidsData {
  const completed = { ...data.completed };
  delete completed[kidId];
  const lastWeek = { ...data.lastWeek };
  delete lastWeek[kidId];
  return {
    ...data,
    kids: data.kids.filter((k) => k.id !== kidId),
    completed,
    lastWeek,
  };
}

export function renameKid(data: KidsData, kidId: string, name: string): KidsData {
  const trimmed = name.trim();
  if (!trimmed) return data;
  return {
    ...data,
    kids: data.kids.map((k) => (k.id === kidId ? { ...k, name: trimmed } : k)),
  };
}

function clampPoints(points: number): number {
  const p = Math.max(-10, Math.min(10, Math.round(points)));
  return p === 0 ? 1 : p;
}

export function addTask(data: KidsData, label: string, points: number): KidsData {
  const trimmed = label.trim();
  if (!trimmed) return data;
  const id = "task_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
  const value = clampPoints(points);
  const emoji = value < 0 ? "⚠️" : undefined;
  const task: KidsTask = { id, label: trimmed, points: value, emoji };
  return { ...data, tasks: [...data.tasks, task] };
}

export function removeTask(data: KidsData, taskId: string): KidsData {
  const completed: Record<string, Record<string, number>> = {};
  for (const [kidId, map] of Object.entries(data.completed)) {
    const { [taskId]: _, ...rest } = map;
    completed[kidId] = rest;
  }
  return {
    ...data,
    tasks: data.tasks.filter((t) => t.id !== taskId),
    completed,
  };
}

export function updateTaskPoints(data: KidsData, taskId: string, points: number): KidsData {
  return {
    ...data,
    tasks: data.tasks.map((t) => {
      if (t.id !== taskId) return t;
      const next = clampPoints(points === 0 ? (t.points > 0 ? -1 : 1) : points);
      return { ...t, points: next };
    }),
  };
}
