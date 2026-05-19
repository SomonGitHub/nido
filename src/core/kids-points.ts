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

export interface MedalThresholds {
  silver: number;
  gold: number;
  platinum: number;
}

export const DEFAULT_MEDAL_THRESHOLDS: MedalThresholds = {
  silver: 10,
  gold: 25,
  platinum: 50,
};

export interface Privilege {
  id: string;
  label: string;
  emoji?: string;
}

export interface ActivePrivilege {
  privilegeId: string;
  startedAt: string;
}

export const DEFAULT_PRIVILEGES: Privilege[] = [
  { id: "screen_time", label: "1h d'écran en plus", emoji: "🎬" },
  { id: "ice_cream", label: "Une glace", emoji: "🍦" },
  { id: "late_bed", label: "Se coucher plus tard", emoji: "🛏️" },
  { id: "pick_game", label: "Choisir le jeu du soir", emoji: "🎮" },
  { id: "pick_meal", label: "Choisir le repas", emoji: "🍕" },
];

export interface KidsData {
  kids: Kid[];
  tasks: KidsTask[];
  weekStart: string;
  completed: Record<string, Record<string, number>>;
  lastWeek: Record<string, number>;
  medalThresholds: MedalThresholds;
  privileges: Privilege[];
  activePrivileges: Record<string, ActivePrivilege>;
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

const KID_COLORS = ["#FFB4A2", "#B8E0D2", "#C7B8EA", "#FFE08A", "#9DD3F8", "#F8A8C9"];
const KID_EMOJIS = ["🦊", "🦄", "🦖", "🐼", "🐱", "🐸", "🐶", "🐯", "🦁", "🐨", "🐰", "🐵"];

export interface Medal {
  key: "bronze" | "silver" | "gold" | "platinum";
  label: string;
  emoji: string;
  min: number;
  next: number | null;
}

export function buildMedals(thresholds: MedalThresholds = DEFAULT_MEDAL_THRESHOLDS): Medal[] {
  return [
    { key: "bronze", label: "Bronze", emoji: "🥉", min: 0, next: thresholds.silver },
    { key: "silver", label: "Argent", emoji: "🥈", min: thresholds.silver, next: thresholds.gold },
    { key: "gold", label: "Or", emoji: "🥇", min: thresholds.gold, next: thresholds.platinum },
    { key: "platinum", label: "Platine", emoji: "💎", min: thresholds.platinum, next: null },
  ];
}

export function medalFor(points: number, thresholds: MedalThresholds = DEFAULT_MEDAL_THRESHOLDS): Medal {
  const medals = buildMedals(thresholds);
  let current = medals[0];
  for (const m of medals) {
    if (points >= m.min) current = m;
  }
  return current;
}

export function nextMedal(points: number, thresholds: MedalThresholds = DEFAULT_MEDAL_THRESHOLDS): Medal | null {
  const medals = buildMedals(thresholds);
  const current = medalFor(points, thresholds);
  if (current.next === null) return null;
  return medals.find((m) => m.min === current.next) ?? null;
}

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

export function pickKidEmoji(index: number): string {
  return KID_EMOJIS[index % KID_EMOJIS.length];
}

export const KID_EMOJI_CHOICES = KID_EMOJIS;

function emptyData(): KidsData {
  return {
    kids: [],
    tasks: DEFAULT_TASKS.slice(),
    weekStart: getCurrentWeekStart(),
    completed: {},
    lastWeek: {},
    medalThresholds: { ...DEFAULT_MEDAL_THRESHOLDS },
    privileges: DEFAULT_PRIVILEGES.slice(),
    activePrivileges: {},
    updatedAt: new Date(0).toISOString(),
  };
}

function sanitizePrivileges(raw: unknown): Privilege[] {
  if (!Array.isArray(raw)) return DEFAULT_PRIVILEGES.slice();
  const out: Privilege[] = [];
  for (const p of raw) {
    if (!p || typeof p !== "object") continue;
    const obj = p as Partial<Privilege>;
    if (typeof obj.id !== "string" || typeof obj.label !== "string") continue;
    out.push({ id: obj.id, label: obj.label, emoji: typeof obj.emoji === "string" ? obj.emoji : undefined });
  }
  return out;
}

function sanitizeActivePrivileges(raw: unknown): Record<string, ActivePrivilege> {
  if (!raw || typeof raw !== "object") return {};
  const out: Record<string, ActivePrivilege> = {};
  for (const [kidId, val] of Object.entries(raw as Record<string, unknown>)) {
    if (!val || typeof val !== "object") continue;
    const obj = val as Partial<ActivePrivilege>;
    if (typeof obj.privilegeId !== "string") continue;
    out[kidId] = {
      privilegeId: obj.privilegeId,
      startedAt: typeof obj.startedAt === "string" ? obj.startedAt : new Date().toISOString(),
    };
  }
  return out;
}

function sanitizeThresholds(raw: unknown): MedalThresholds {
  const t = (raw && typeof raw === "object" ? raw : {}) as Partial<MedalThresholds>;
  const silver = Number.isFinite(t.silver) ? Math.max(1, Math.round(t.silver as number)) : DEFAULT_MEDAL_THRESHOLDS.silver;
  const gold = Number.isFinite(t.gold) ? Math.max(silver + 1, Math.round(t.gold as number)) : Math.max(silver + 1, DEFAULT_MEDAL_THRESHOLDS.gold);
  const platinum = Number.isFinite(t.platinum) ? Math.max(gold + 1, Math.round(t.platinum as number)) : Math.max(gold + 1, DEFAULT_MEDAL_THRESHOLDS.platinum);
  return { silver, gold, platinum };
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

export function parseKidsData(raw: unknown): KidsData | null {
  if (!raw || typeof raw !== "object") return null;
  const parsed = raw as Partial<KidsData>;
  if (!Array.isArray(parsed.kids) || !Array.isArray(parsed.tasks)) return null;
  return {
    kids: parsed.kids as Kid[],
    tasks: parsed.tasks.length > 0 ? (parsed.tasks as KidsTask[]) : DEFAULT_TASKS.slice(),
    weekStart: typeof parsed.weekStart === "string" ? parsed.weekStart : getCurrentWeekStart(),
    completed: parsed.completed && typeof parsed.completed === "object" ? parsed.completed : {},
    lastWeek: parsed.lastWeek && typeof parsed.lastWeek === "object" ? parsed.lastWeek : {},
    medalThresholds: sanitizeThresholds(parsed.medalThresholds),
    privileges: sanitizePrivileges(parsed.privileges),
    activePrivileges: sanitizeActivePrivileges(parsed.activePrivileges),
    updatedAt: typeof parsed.updatedAt === "string" ? parsed.updatedAt : new Date(0).toISOString(),
  };
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
  const kid: Kid = {
    id,
    name: trimmed,
    color: pickKidColor(data.kids.length),
    emoji: pickKidEmoji(data.kids.length),
  };
  return { ...data, kids: [...data.kids, kid] };
}

export function setKidEmoji(data: KidsData, kidId: string, emoji: string): KidsData {
  return {
    ...data,
    kids: data.kids.map((k) => (k.id === kidId ? { ...k, emoji } : k)),
  };
}

export function removeKid(data: KidsData, kidId: string): KidsData {
  const completed = { ...data.completed };
  delete completed[kidId];
  const lastWeek = { ...data.lastWeek };
  delete lastWeek[kidId];
  const activePrivileges = { ...data.activePrivileges };
  delete activePrivileges[kidId];
  return {
    ...data,
    kids: data.kids.filter((k) => k.id !== kidId),
    completed,
    lastWeek,
    activePrivileges,
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

export function updateMedalThreshold(
  data: KidsData,
  key: keyof MedalThresholds,
  value: number,
): KidsData {
  const current = data.medalThresholds ?? DEFAULT_MEDAL_THRESHOLDS;
  const next: MedalThresholds = { ...current, [key]: Math.max(1, Math.round(value)) };
  if (key === "silver") {
    if (next.gold <= next.silver) next.gold = next.silver + 1;
    if (next.platinum <= next.gold) next.platinum = next.gold + 1;
  } else if (key === "gold") {
    if (next.gold <= next.silver) next.gold = next.silver + 1;
    if (next.platinum <= next.gold) next.platinum = next.gold + 1;
  } else if (key === "platinum") {
    if (next.platinum <= next.gold) next.platinum = next.gold + 1;
  }
  return { ...data, medalThresholds: next };
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

export function isAtMaxMedal(points: number, thresholds: MedalThresholds = DEFAULT_MEDAL_THRESHOLDS): boolean {
  return points >= thresholds.platinum;
}

export function getActivePrivilege(
  data: KidsData,
  kidId: string,
): { active: ActivePrivilege; privilege: Privilege } | null {
  const active = data.activePrivileges?.[kidId];
  if (!active) return null;
  const privilege = data.privileges.find((p) => p.id === active.privilegeId);
  if (!privilege) return null;
  return { active, privilege };
}

export function assignPrivilege(data: KidsData, kidId: string, privilegeId: string): KidsData {
  if (!data.privileges.some((p) => p.id === privilegeId)) return data;
  const completedTotal = totalForKid(data, kidId);
  const completed = { ...data.completed };
  delete completed[kidId];
  return {
    ...data,
    completed,
    lastWeek: { ...data.lastWeek, [kidId]: completedTotal },
    activePrivileges: {
      ...data.activePrivileges,
      [kidId]: { privilegeId, startedAt: new Date().toISOString() },
    },
  };
}

export function endPrivilege(data: KidsData, kidId: string): KidsData {
  if (!data.activePrivileges?.[kidId]) return data;
  const next = { ...data.activePrivileges };
  delete next[kidId];
  return { ...data, activePrivileges: next };
}

export function addPrivilege(data: KidsData, label: string, emoji?: string): KidsData {
  const trimmed = label.trim();
  if (!trimmed) return data;
  const id = "priv_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
  const privilege: Privilege = {
    id,
    label: trimmed,
    emoji: emoji?.trim() || "🎁",
  };
  return { ...data, privileges: [...data.privileges, privilege] };
}

export function removePrivilege(data: KidsData, privilegeId: string): KidsData {
  const activePrivileges = { ...data.activePrivileges };
  for (const [kidId, active] of Object.entries(activePrivileges)) {
    if (active.privilegeId === privilegeId) delete activePrivileges[kidId];
  }
  return {
    ...data,
    privileges: data.privileges.filter((p) => p.id !== privilegeId),
    activePrivileges,
  };
}

export function renamePrivilege(
  data: KidsData,
  privilegeId: string,
  label: string,
  emoji?: string,
): KidsData {
  const trimmed = label.trim();
  if (!trimmed) return data;
  return {
    ...data,
    privileges: data.privileges.map((p) =>
      p.id === privilegeId
        ? { ...p, label: trimmed, emoji: emoji !== undefined ? (emoji.trim() || p.emoji) : p.emoji }
        : p,
    ),
  };
}
