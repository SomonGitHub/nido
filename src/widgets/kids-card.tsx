import { useMemo } from "preact/hooks";
import { IconSettings, IconArrowUpRight, IconX } from "../icons";
import {
  totalPoints,
  getActivePrivilege,
  endPrivilege,
  type KidsData,
} from "../core/kids-points";

interface KidsCardProps {
  data: KidsData;
  onOpen: () => void;
  onChange?: (next: KidsData) => void;
}

function initials(name: string): string {
  const parts = name.trim().split(/\s+/);
  return parts.slice(0, 2).map((p) => p[0]?.toUpperCase() ?? "").join("");
}

export function KidsCard({ data, onOpen, onChange }: KidsCardProps) {
  const ranked = useMemo(() => {
    return data.kids
      .map((k) => ({
        kid: k,
        total: totalPoints(data, k.id),
        last: data.lastWeek[k.id] ?? 0,
        activeInfo: getActivePrivilege(data, k.id),
      }))
      .sort((a, b) => b.total - a.total);
  }, [data]);

  const maxTotal = ranked.reduce((m, r) => Math.max(m, r.total), 1);
  const isEmpty = ranked.length === 0;

  return (
    <div
      class="n-card n-card--accent breathe-2 n-kids-card"
      data-on="true"
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={(e: KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen();
        }
      }}
    >
      <div class="n-light__glow" aria-hidden="true" />
      <svg
        class="n-kids-card__deco"
        width="200"
        height="200"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <circle cx="160" cy="40" r="60" fill="none" stroke="currentColor" stroke-width="1" />
        <circle cx="160" cy="40" r="40" fill="none" stroke="currentColor" stroke-width="1" />
        <circle cx="160" cy="40" r="20" fill="none" stroke="currentColor" stroke-width="1" />
      </svg>

      <div class="n-kids-card__head">
        <div class="n-kids-card__head-text">
          <div class="n-eyebrow">Tableau de points</div>
          <div class="n-title">Points enfants</div>
        </div>
        <div class="n-kids-card__head-actions">
          <span class="n-power-gauge__open" aria-hidden="true">
            <IconArrowUpRight size={14} />
          </span>
        </div>
      </div>

      {isEmpty ? (
        <div class="n-kids-card__empty">
          <p class="n-muted">Aucun enfant configuré.</p>
          <button
            type="button"
            class="n-pill-btn n-pill-btn--ghost"
            onClick={(e) => {
              e.stopPropagation();
              onOpen();
            }}
            data-no-drag="true"
          >
            <IconSettings size={14} />
            <span>Configurer</span>
          </button>
        </div>
      ) : (
        <ul class="n-kids-card__list">
          {ranked.map(({ kid, total, last, activeInfo }, i) => {
            const pct = total > 0 ? Math.min(100, (total / maxTotal) * 100) : 0;
            return (
              <li class="n-kids-card__row" key={kid.id}>
                <span
                  class="n-kids-card__avatar"
                  style={{ background: kid.color }}
                  aria-hidden="true"
                >
                  {i === 0 && total > 0 && (
                    <span class="n-kids-card__crown" aria-hidden="true">★</span>
                  )}
                  {initials(kid.name) || kid.name[0]?.toUpperCase() || "?"}
                </span>
                <div class="n-kids-card__row-body">
                  <div class="n-kids-card__row-head">
                    <span class="n-kids-card__name">{kid.name}</span>
                    <span class={`n-kids-card__total ${total < 0 ? "is-negative" : ""}`}>
                      {total}
                      <span class="n-kids-card__total-unit">pts</span>
                    </span>
                  </div>
                  <div class="n-kids-card__bar" aria-hidden="true">
                    <span
                      class="n-kids-card__bar-fill"
                      style={{ width: `${pct}%`, background: kid.color }}
                    />
                  </div>
                  {activeInfo && (
                    <div
                      class="n-kids-card__privilege"
                      data-no-drag="true"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span class="n-kids-card__privilege-emoji" aria-hidden="true">
                        {activeInfo.privilege.emoji ?? "🎁"}
                      </span>
                      <span class="n-kids-card__privilege-label">
                        {activeInfo.privilege.label}
                      </span>
                      {onChange && (
                        <button
                          type="button"
                          class="n-kids-card__privilege-end"
                          aria-label="Terminer le privilège"
                          title="Terminer le privilège"
                          onClick={(e) => {
                            e.stopPropagation();
                            onChange(endPrivilege(data, kid.id));
                          }}
                        >
                          <IconX size={12} />
                        </button>
                      )}
                    </div>
                  )}
                  {!activeInfo && last > 0 && (
                    <div class="n-kids-card__last">
                      Avant le privilège précédent : {last} pts
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
