import { describe, expect, it } from "vitest";
import { syncDecision } from "./mqtt-sync";

const at = (iso: string) => ({ updatedAt: iso });

describe("syncDecision", () => {
  it("adopte la version distante plus récente", () => {
    expect(syncDecision(at("2026-10-01T10:00:00.000Z"), at("2026-10-01T10:00:01.000Z"))).toBe("adopt");
  });

  it("republie la version locale plus récente pour corriger le message retenu", () => {
    expect(syncDecision(at("2026-10-02T08:00:00.000Z"), at("2026-10-01T23:59:59.999Z"))).toBe("republish");
  });

  it("ne fait rien sur une égalité", () => {
    expect(syncDecision(at("2026-10-01T10:00:00.000Z"), at("2026-10-01T10:00:00.000Z"))).toBe("keep");
  });

  it("laisse n'importe quel plan réel l'emporter sur un état vierge", () => {
    const blank = at(new Date(0).toISOString());
    expect(syncDecision(blank, at("2026-01-01T00:00:00.000Z"))).toBe("adopt");
    expect(syncDecision(at("2026-01-01T00:00:00.000Z"), blank)).toBe("republish");
  });
});
