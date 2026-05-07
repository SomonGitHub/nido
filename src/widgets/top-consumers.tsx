import { useMemo } from "preact/hooks";
import type { ResolvedEntity } from "../core/entities";
import type { Area } from "../core/areas";
import { IconBolt, IconChevronRight } from "../icons";

interface TopConsumersWidgetProps {
  entities: ResolvedEntity[];
  primaryPowerEntityId: string;
  areas: Area[];
  onSelect?: (entity: ResolvedEntity) => void;
}

interface Row {
  entity: ResolvedEntity;
  watts: number;
  roomLabel: string;
}

export function Top5ConsumersWidget({
  entities,
  primaryPowerEntityId,
  areas,
  onSelect,
}: TopConsumersWidgetProps) {
  const areaName = useMemo(() => {
    const map = new Map<string, string>();
    for (const a of areas) map.set(a.area_id, a.name);
    return map;
  }, [areas]);

  const rows = useMemo<Row[]>(() => {
    const result: Row[] = [];
    for (const e of entities) {
      if (e.entity_id === primaryPowerEntityId) continue;
      if (e.state.attributes.device_class !== "power") continue;
      const w = Number(e.state.state);
      if (!Number.isFinite(w)) continue;
      const roomLabel = e.area_id ? areaName.get(e.area_id) ?? "" : "";
      result.push({ entity: e, watts: Math.max(0, w), roomLabel });
    }
    result.sort((a, b) => b.watts - a.watts);
    return result.slice(0, 5);
  }, [entities, primaryPowerEntityId, areaName]);

  const maxW = rows.length > 0 ? Math.max(...rows.map((r) => r.watts), 1) : 1;

  return (
    <div class="n-card n-top-consumers">
      <div class="n-top-consumers__head">
        <div>
          <div class="n-eyebrow">Top consommateurs · maintenant</div>
          <div class="n-title">Où part l'énergie</div>
        </div>
      </div>

      {rows.length === 0 ? (
        <div class="n-muted n-top-consumers__empty">
          Aucune mesure de puissance individuelle exposée
        </div>
      ) : (
        <div class="n-top-consumers__list">
          {rows.map((r, i) => {
            const pct = (r.watts / maxW) * 100;
            const interactive = typeof onSelect === "function";
            return (
              <div
                key={r.entity.entity_id}
                class="n-top-consumers__row"
                role={interactive ? "button" : undefined}
                tabIndex={interactive ? 0 : undefined}
                onClick={interactive ? () => onSelect?.(r.entity) : undefined}
                onKeyDown={
                  interactive
                    ? (e: KeyboardEvent) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          onSelect?.(r.entity);
                        }
                      }
                    : undefined
                }
              >
                <div class={`n-top-consumers__bubble ${i === 0 ? "is-first" : ""}`}>
                  <IconBolt size={18} />
                </div>
                <div class="n-top-consumers__body">
                  <div class="n-top-consumers__line">
                    <div class="n-top-consumers__name-wrap">
                      <span class="n-top-consumers__name">{r.entity.friendly_name}</span>
                      {r.roomLabel && (
                        <span class="n-top-consumers__room">{r.roomLabel}</span>
                      )}
                    </div>
                    <span class={`n-top-consumers__value ${i === 0 ? "is-first" : ""}`}>
                      {Math.round(r.watts).toLocaleString("fr-FR")}
                      <span class="n-top-consumers__unit">W</span>
                    </span>
                  </div>
                  <div class="n-top-consumers__meter">
                    <div class="n-top-consumers__bar">
                      <div
                        class={`n-top-consumers__bar-fill ${i === 0 ? "is-first" : ""}`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                </div>
                {interactive && (
                  <span class="n-top-consumers__chevron" aria-hidden="true">
                    <IconChevronRight size={14} />
                  </span>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
