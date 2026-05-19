import { useState } from "preact/hooks";
import { IconX, IconPlus, IconMinus, IconSettings } from "../icons";
import { useOverlay } from "../core/use-overlay";
import {
  type KidsData,
  totalPoints,
  incrementTask,
  addKid,
  removeKid,
  renameKid,
  addTask,
  removeTask,
  updateTaskPoints,
} from "../core/kids-points";

interface KidsPanelProps {
  data: KidsData;
  onChange: (next: KidsData) => void;
  onClose: () => void;
}

type Mode = "play" | "config";

export function KidsPanel({ data, onChange, onClose }: KidsPanelProps) {
  const overlayRef = useOverlay<HTMLDivElement>(onClose);
  const [mode, setMode] = useState<Mode>("play");
  const [selectedKidId, setSelectedKidId] = useState<string | null>(
    data.kids[0]?.id ?? null,
  );
  const [newKidName, setNewKidName] = useState("");
  const [newTaskLabel, setNewTaskLabel] = useState("");
  const [newTaskPoints, setNewTaskPoints] = useState(2);

  const selectedKid = data.kids.find((k) => k.id === selectedKidId) ?? data.kids[0];

  return (
    <div class="nido-shopping-panel">
      <div class="nido-shopping-panel__backdrop" onClick={onClose} />
      <div
        ref={overlayRef}
        class="nido-shopping-panel__content nido-kids-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Tableau des enfants"
      >
        <header class="nido-shopping-panel__header">
          <h2>Tableau des enfants</h2>
          <div class="nido-kids-panel__header-actions">
            <button
              type="button"
              class={`n-pill-btn ${mode === "config" ? "" : "n-pill-btn--ghost"}`}
              onClick={() => setMode(mode === "config" ? "play" : "config")}
              aria-pressed={mode === "config"}
            >
              <IconSettings size={14} />
              <span>Configurer</span>
            </button>
            <button
              type="button"
              class="nido-shopping-panel__close"
              onClick={onClose}
              aria-label="Fermer"
            >
              <IconX size={20} />
            </button>
          </div>
        </header>

        <div class="nido-kids-panel__body">
          {mode === "play" ? (
            data.kids.length === 0 ? (
              <div class="nido-kids-panel__empty">
                <p class="n-muted">
                  Aucun enfant pour l'instant. Va dans « Configurer » pour en ajouter.
                </p>
              </div>
            ) : (
              <>
                <div class="nido-kids-panel__tabs">
                  {data.kids.map((k) => {
                    const total = totalPoints(data, k.id);
                    const isActive = selectedKid?.id === k.id;
                    return (
                      <button
                        key={k.id}
                        type="button"
                        class={`nido-kids-panel__tab ${isActive ? "is-active" : ""}`}
                        onClick={() => setSelectedKidId(k.id)}
                      >
                        <span
                          class="nido-kids-panel__tab-avatar"
                          style={{ background: k.color }}
                        >
                          {k.name[0]?.toUpperCase() ?? "?"}
                        </span>
                        <span class="nido-kids-panel__tab-name">{k.name}</span>
                        <span class="nido-kids-panel__tab-pts">{total} pts</span>
                      </button>
                    );
                  })}
                </div>

                {selectedKid && (
                  <ul class="nido-kids-panel__tasks">
                    {data.tasks.map((task) => {
                      const count =
                        data.completed[selectedKid.id]?.[task.id] ?? 0;
                      return (
                        <li class="nido-kids-panel__task" key={task.id}>
                          <div class="nido-kids-panel__task-info">
                            <span class="nido-kids-panel__task-emoji">
                              {task.emoji ?? (task.points < 0 ? "⚠️" : "✨")}
                            </span>
                            <div class="nido-kids-panel__task-text">
                              <span class="nido-kids-panel__task-label">
                                {task.label}
                              </span>
                              <span
                                class={`nido-kids-panel__task-pts ${task.points < 0 ? "is-negative" : ""}`}
                              >
                                {task.points > 0 ? "+" : ""}
                                {task.points} pts
                              </span>
                            </div>
                          </div>
                          <div class="nido-kids-panel__task-controls">
                            <button
                              type="button"
                              class="nido-kids-panel__btn"
                              onClick={() =>
                                onChange(
                                  incrementTask(data, selectedKid.id, task.id, -1),
                                )
                              }
                              disabled={count === 0}
                              aria-label="Retirer une fois"
                            >
                              <IconMinus size={16} />
                            </button>
                            <span class="nido-kids-panel__task-count">
                              {count}
                            </span>
                            <button
                              type="button"
                              class="nido-kids-panel__btn nido-kids-panel__btn--plus"
                              onClick={() =>
                                onChange(
                                  incrementTask(data, selectedKid.id, task.id, 1),
                                )
                              }
                              aria-label="Ajouter une fois"
                            >
                              <IconPlus size={16} />
                            </button>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </>
            )
          ) : (
            <div class="nido-kids-panel__config">
              <section class="nido-kids-panel__section">
                <h3>Enfants</h3>
                <ul class="nido-kids-panel__list">
                  {data.kids.map((k) => (
                    <li class="nido-kids-panel__list-row" key={k.id}>
                      <span
                        class="nido-kids-panel__tab-avatar"
                        style={{ background: k.color }}
                      >
                        {k.name[0]?.toUpperCase() ?? "?"}
                      </span>
                      <input
                        type="text"
                        class="nido-kids-panel__input"
                        value={k.name}
                        onChange={(e) =>
                          onChange(
                            renameKid(
                              data,
                              k.id,
                              (e.target as HTMLInputElement).value,
                            ),
                          )
                        }
                      />
                      <button
                        type="button"
                        class="nido-kids-panel__btn nido-kids-panel__btn--danger"
                        onClick={() => onChange(removeKid(data, k.id))}
                        aria-label="Supprimer"
                      >
                        <IconX size={14} />
                      </button>
                    </li>
                  ))}
                </ul>
                <div class="nido-kids-panel__add">
                  <input
                    type="text"
                    class="nido-kids-panel__input"
                    placeholder="Prénom de l'enfant"
                    value={newKidName}
                    onInput={(e) =>
                      setNewKidName((e.target as HTMLInputElement).value)
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && newKidName.trim()) {
                        onChange(addKid(data, newKidName));
                        setNewKidName("");
                      }
                    }}
                  />
                  <button
                    type="button"
                    class="n-pill-btn"
                    onClick={() => {
                      if (newKidName.trim()) {
                        onChange(addKid(data, newKidName));
                        setNewKidName("");
                      }
                    }}
                  >
                    <IconPlus size={14} />
                    <span>Ajouter</span>
                  </button>
                </div>
              </section>

              <section class="nido-kids-panel__section">
                <h3>Tâches</h3>
                <ul class="nido-kids-panel__list">
                  {data.tasks.map((task) => (
                    <li class="nido-kids-panel__list-row" key={task.id}>
                      <span class="nido-kids-panel__task-emoji">
                        {task.emoji ?? (task.points < 0 ? "⚠️" : "✨")}
                      </span>
                      <span class="nido-kids-panel__task-label-static">
                        {task.label}
                      </span>
                      <div class="nido-kids-panel__task-points-edit">
                        <button
                          type="button"
                          class="nido-kids-panel__btn"
                          onClick={() => {
                            const next = task.points === 1 ? -1 : task.points - 1;
                            onChange(updateTaskPoints(data, task.id, next));
                          }}
                          disabled={task.points <= -10}
                          aria-label="Moins de points"
                        >
                          <IconMinus size={14} />
                        </button>
                        <span
                          class={`nido-kids-panel__task-pts ${task.points < 0 ? "is-negative" : ""}`}
                        >
                          {task.points > 0 ? "+" : ""}
                          {task.points} pts
                        </span>
                        <button
                          type="button"
                          class="nido-kids-panel__btn"
                          onClick={() => {
                            const next = task.points === -1 ? 1 : task.points + 1;
                            onChange(updateTaskPoints(data, task.id, next));
                          }}
                          disabled={task.points >= 10}
                          aria-label="Plus de points"
                        >
                          <IconPlus size={14} />
                        </button>
                      </div>
                      <button
                        type="button"
                        class="nido-kids-panel__btn nido-kids-panel__btn--danger"
                        onClick={() => onChange(removeTask(data, task.id))}
                        aria-label="Supprimer"
                      >
                        <IconX size={14} />
                      </button>
                    </li>
                  ))}
                </ul>
                <div class="nido-kids-panel__add">
                  <input
                    type="text"
                    class="nido-kids-panel__input"
                    placeholder="Nouvelle tâche"
                    value={newTaskLabel}
                    onInput={(e) =>
                      setNewTaskLabel((e.target as HTMLInputElement).value)
                    }
                  />
                  <div class="nido-kids-panel__points-input">
                    <button
                      type="button"
                      class="nido-kids-panel__btn"
                      onClick={() => {
                        const next = newTaskPoints === 1 ? -1 : newTaskPoints - 1;
                        setNewTaskPoints(Math.max(-10, next));
                      }}
                      aria-label="Moins"
                    >
                      <IconMinus size={14} />
                    </button>
                    <span class={newTaskPoints < 0 ? "is-negative" : ""}>
                      {newTaskPoints > 0 ? "+" : ""}
                      {newTaskPoints} pts
                    </span>
                    <button
                      type="button"
                      class="nido-kids-panel__btn"
                      onClick={() => {
                        const next = newTaskPoints === -1 ? 1 : newTaskPoints + 1;
                        setNewTaskPoints(Math.min(10, next));
                      }}
                      aria-label="Plus"
                    >
                      <IconPlus size={14} />
                    </button>
                  </div>
                  <button
                    type="button"
                    class="n-pill-btn"
                    onClick={() => {
                      if (newTaskLabel.trim()) {
                        onChange(addTask(data, newTaskLabel, newTaskPoints));
                        setNewTaskLabel("");
                        setNewTaskPoints(2);
                      }
                    }}
                  >
                    <IconPlus size={14} />
                    <span>Ajouter</span>
                  </button>
                </div>
              </section>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
