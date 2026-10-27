import { describe, expect, it } from "vitest";
import {
  DEFAULT_MEDAL_THRESHOLDS,
  addKid,
  addTask,
  assignPrivilege,
  getCurrentWeekStart,
  incrementTask,
  medalFor,
  nextMedal,
  parseKidsData,
  removeKid,
  removePrivilege,
  removeTask,
  totalPoints,
  updateMedalThreshold,
  updateTaskPoints,
  type KidsData,
} from "./kids-points";

const last = <T>(list: T[]): T => list[list.length - 1];

function base(): KidsData {
  const data = parseKidsData({ kids: [], tasks: [] })!;
  return { ...addKid(data, "Léa"), updatedAt: "2026-10-01T00:00:00.000Z" };
}

describe("points", () => {
  it("additionne les tâches faites, pondérées par leurs points", () => {
    let data = base();
    const kid = data.kids[0].id;
    data = incrementTask(data, kid, "tidy_room", 1);
    data = incrementTask(data, kid, "tidy_room", 1);
    data = incrementTask(data, kid, "make_bed", 1);
    expect(totalPoints(data, kid)).toBe(3 + 3 + 1);
  });

  it("ne descend jamais sous zéro réalisation", () => {
    let data = base();
    const kid = data.kids[0].id;
    data = incrementTask(data, kid, "homework", -1);
    expect(data.completed[kid].homework).toBe(0);
    expect(totalPoints(data, kid)).toBe(0);
  });

  it("retire les réalisations d'une tâche supprimée", () => {
    let data = base();
    const kid = data.kids[0].id;
    data = incrementTask(data, kid, "homework", 1);
    data = removeTask(data, "homework");
    expect(data.tasks.some((t) => t.id === "homework")).toBe(false);
    expect(data.completed[kid]).not.toHaveProperty("homework");
  });

  it("borne les points d'une tâche entre -10 et 10, jamais 0", () => {
    let data = addTask(base(), "Vider le lave-vaisselle", 50);
    expect(last(data.tasks).points).toBe(10);
    data = addTask(data, "Taper sa sœur", -3);
    expect(last(data.tasks)).toMatchObject({ points: -3, emoji: "⚠️" });
    const id = last(data.tasks).id;
    expect(last(updateTaskPoints(data, id, 0).tasks).points).toBe(1);
  });
});

describe("médailles", () => {
  const { silver, gold, platinum } = DEFAULT_MEDAL_THRESHOLDS;

  it.each([
    [0, "bronze"],
    [silver - 1, "bronze"],
    [silver, "silver"],
    [gold, "gold"],
    [platinum + 100, "platinum"],
  ])("%i points → %s", (points, key) => {
    expect(medalFor(points).key).toBe(key);
  });

  it("annonce la médaille suivante, aucune après le platine", () => {
    expect(nextMedal(0)?.key).toBe("silver");
    expect(nextMedal(platinum)).toBeNull();
  });

  it("garde les seuils strictement croissants quand on en modifie un", () => {
    const data = updateMedalThreshold(base(), "silver", gold + 5);
    const t = data.medalThresholds;
    expect(t.silver).toBe(gold + 5);
    expect(t.gold).toBeGreaterThan(t.silver);
    expect(t.platinum).toBeGreaterThan(t.gold);
  });
});

describe("privilèges", () => {
  it("échange les points de la semaine contre un privilège", () => {
    let data = base();
    const kid = data.kids[0].id;
    data = incrementTask(data, kid, "tidy_room", 1);
    data = assignPrivilege(data, kid, "ice_cream");
    expect(data.lastWeek[kid]).toBe(3);
    expect(totalPoints(data, kid)).toBe(0);
    expect(data.activePrivileges[kid].privilegeId).toBe("ice_cream");
  });

  it("ignore un privilège inconnu", () => {
    const data = base();
    expect(assignPrivilege(data, data.kids[0].id, "poney")).toBe(data);
  });

  it("libère les enfants qui avaient un privilège supprimé", () => {
    let data = base();
    const kid = data.kids[0].id;
    data = assignPrivilege(data, kid, "late_bed");
    data = removePrivilege(data, "late_bed");
    expect(data.activePrivileges).not.toHaveProperty(kid);
  });
});

describe("enfants", () => {
  it("ignore un prénom vide et nettoie tout ce qui concerne un enfant retiré", () => {
    let data = base();
    expect(addKid(data, "   ")).toBe(data);
    const kid = data.kids[0].id;
    data = incrementTask(data, kid, "make_bed", 1);
    data = assignPrivilege(data, kid, "ice_cream");
    data = removeKid(data, kid);
    expect(data.kids).toEqual([]);
    expect(data.completed).not.toHaveProperty(kid);
    expect(data.lastWeek).not.toHaveProperty(kid);
    expect(data.activePrivileges).not.toHaveProperty(kid);
  });
});

describe("parseKidsData", () => {
  it("refuse ce qui n'a pas la forme attendue", () => {
    for (const raw of [null, "x", {}, { kids: [] }, { tasks: [] }]) expect(parseKidsData(raw)).toBeNull();
  });

  it("répare des seuils de médailles incohérents", () => {
    const data = parseKidsData({ kids: [], tasks: [], medalThresholds: { silver: 50, gold: 10, platinum: "x" } })!;
    expect(data.medalThresholds.silver).toBe(50);
    expect(data.medalThresholds.gold).toBeGreaterThan(50);
    expect(data.medalThresholds.platinum).toBeGreaterThan(data.medalThresholds.gold);
  });

  it("écarte les privilèges et privilèges actifs mal formés", () => {
    const data = parseKidsData({
      kids: [],
      tasks: [],
      privileges: [{ id: "ok", label: "OK" }, { id: 3, label: "KO" }, null],
      activePrivileges: { a: { privilegeId: "ok" }, b: { privilegeId: 1 }, c: null },
    })!;
    expect(data.privileges.map((p) => p.id)).toEqual(["ok"]);
    expect(Object.keys(data.activePrivileges)).toEqual(["a"]);
  });
});

describe("getCurrentWeekStart", () => {
  it.each([
    ["2026-10-26T00:30:00+01:00", "2026-10-26"], // lundi, juste après minuit
    ["2026-10-28T12:00:00+01:00", "2026-10-26"], // mercredi
    ["2026-11-01T23:30:00+01:00", "2026-10-26"], // dimanche soir
  ])("%s → semaine du %s", (iso, monday) => {
    expect(getCurrentWeekStart(new Date(iso))).toBe(monday);
  });
});
