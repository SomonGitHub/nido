import { useState, useRef, useEffect } from "preact/hooks";
import { IconX, IconPlus, IconMinus, IconSettings } from "../icons";
import { useOverlay } from "../core/use-overlay";
import {
  type KidsData,
  totalPoints,
  incrementTask,
  addKid,
  removeKid,
  renameKid,
  setKidEmoji,
  addTask,
  removeTask,
  updateTaskPoints,
  medalFor,
  nextMedal,
  KID_EMOJI_CHOICES,
} from "../core/kids-points";

interface KidsPanelProps {
  data: KidsData;
  onChange: (next: KidsData) => void;
  onClose: () => void;
}

type Mode = "play" | "config";

const CONFETTI_COLORS = ["#FF8A3D", "#FFD166", "#6FCF97", "#9DD3F8", "#F8A8C9", "#C7B8EA"];

export function KidsPanel({ data, onChange, onClose }: KidsPanelProps) {
  const overlayRef = useOverlay<HTMLDivElement>(onClose);
  const [mode, setMode] = useState<Mode>("play");
  const [selectedKidId, setSelectedKidId] = useState<string | null>(
    data.kids[0]?.id ?? null,
  );
  const [newKidName, setNewKidName] = useState("");
  const [newTaskLabel, setNewTaskLabel] = useState("");
  const [newTaskPoints, setNewTaskPoints] = useState(2);
  const [emojiPickerFor, setEmojiPickerFor] = useState<string | null>(null);
  const [popTaskId, setPopTaskId] = useState<string | null>(null);

  const selectedKid = data.kids.find((k) => k.id === selectedKidId) ?? data.kids[0];
  const total = selectedKid ? totalPoints(data, selectedKid.id) : 0;
  const medal = medalFor(total);
  const next = nextMedal(total);
  const progress = next
    ? Math.min(100, Math.max(0, ((total - medal.min) / (next.min - medal.min)) * 100))
    : 100;
  const remaining = next ? Math.max(0, next.min - total) : 0;

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
        <header class="nido-kids-panel__header">
          <h2>
            <span class="nido-kids-panel__header-star" aria-hidden="true">⭐</span>
            Tableau des enfants
          </h2>
          <div class="nido-kids-panel__header-actions">
            <button
              type="button"
              class="nido-kids-panel__iconbtn"
              onClick={() => setMode(mode === "config" ? "play" : "config")}
              aria-pressed={mode === "config"}
              aria-label="Configurer"
              title="Configurer"
            >
              <IconSettings size={18} />
            </button>
            <button
              type="button"
              class="nido-kids-panel__iconbtn"
              onClick={onClose}
              aria-label="Fermer"
              title="Fermer"
            >
              <IconX size={18} />
            </button>
          </div>
        </header>

        <div class="nido-kids-panel__body">
          {mode === "play" ? (
            data.kids.length === 0 ? (
              <div class="nido-kids-panel__empty">
                <div class="nido-kids-panel__empty-emoji">🧸</div>
                <p class="n-muted">
                  Aucun enfant pour l'instant. Va dans <strong>Configurer</strong> pour en ajouter.
                </p>
              </div>
            ) : (
              <>
                <div class="nido-kids-panel__tabs">
                  {data.kids.map((k) => {
                    const kidTotal = totalPoints(data, k.id);
                    const isActive = selectedKid?.id === k.id;
                    return (
                      <button
                        key={k.id}
                        type="button"
                        class={`nido-kids-panel__tab ${isActive ? "is-active" : ""}`}
                        style={{ ["--kid-color" as any]: k.color }}
                        onClick={() => setSelectedKidId(k.id)}
                      >
                        <span
                          class="nido-kids-panel__tab-avatar"
                          style={{ background: k.color }}
                        >
                          {k.emoji ?? k.name[0]?.toUpperCase() ?? "?"}
                        </span>
                        <span class="nido-kids-panel__tab-meta">
                          <span class="nido-kids-panel__tab-name">{k.name}</span>
                          <span class="nido-kids-panel__tab-pts">
                            {kidTotal} <small>pts</small>
                          </span>
                        </span>
                      </button>
                    );
                  })}
                </div>

                {selectedKid && (
                  <>
                    <div class="nido-kids-panel__score">
                      <div class="nido-kids-panel__score-row">
                        <div class="nido-kids-panel__score-big">
                          <span class="nido-kids-panel__score-star" aria-hidden="true">⭐</span>
                          <span class="nido-kids-panel__score-num">{total}</span>
                          <span class="nido-kids-panel__score-unit">pts</span>
                        </div>
                        <div class="nido-kids-panel__score-badge">
                          <span aria-hidden="true">{medal.emoji}</span>
                          <span>{medal.label}</span>
                        </div>
                      </div>
                      <div class="nido-kids-panel__progress">
                        <div
                          class="nido-kids-panel__progress-bar"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                      <div class="nido-kids-panel__progress-label">
                        {next ? (
                          <>
                            Plus que <strong>{remaining} pts</strong> pour la médaille{" "}
                            {next.label} {next.emoji}
                          </>
                        ) : (
                          <>Médaille maximale atteinte ! 🏆</>
                        )}
                      </div>
                    </div>

                    <div class="nido-kids-panel__tiles">
                      {data.tasks.map((task) => {
                        const count =
                          data.completed[selectedKid.id]?.[task.id] ?? 0;
                        const isNeg = task.points < 0;
                        return (
                          <TaskTile
                            key={task.id}
                            emoji={task.emoji ?? (isNeg ? "⚠️" : "✨")}
                            label={task.label}
                            points={task.points}
                            count={count}
                            isPopping={popTaskId === task.id}
                            onIncrement={() => {
                              onChange(incrementTask(data, selectedKid.id, task.id, 1));
                              setPopTaskId(task.id);
                              window.setTimeout(() => setPopTaskId(null), 400);
                            }}
                            onDecrement={() => {
                              if (count > 0) {
                                onChange(incrementTask(data, selectedKid.id, task.id, -1));
                              }
                            }}
                          />
                        );
                      })}
                    </div>
                    <p class="nido-kids-panel__hint">
                      Tape pour valider · Appui long pour retirer
                    </p>
                  </>
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
                      <button
                        type="button"
                        class="nido-kids-panel__avatar-pick"
                        style={{ background: k.color }}
                        onClick={() =>
                          setEmojiPickerFor(emojiPickerFor === k.id ? null : k.id)
                        }
                        aria-label="Choisir un avatar"
                      >
                        {k.emoji ?? k.name[0]?.toUpperCase() ?? "?"}
                      </button>
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
                      {emojiPickerFor === k.id && (
                        <div class="nido-kids-panel__emoji-picker">
                          {KID_EMOJI_CHOICES.map((em) => (
                            <button
                              key={em}
                              type="button"
                              class={`nido-kids-panel__emoji-choice ${k.emoji === em ? "is-active" : ""}`}
                              onClick={() => {
                                onChange(setKidEmoji(data, k.id, em));
                                setEmojiPickerFor(null);
                              }}
                            >
                              {em}
                            </button>
                          ))}
                        </div>
                      )}
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

interface TaskTileProps {
  emoji: string;
  label: string;
  points: number;
  count: number;
  isPopping: boolean;
  onIncrement: () => void;
  onDecrement: () => void;
}

function TaskTile({
  emoji,
  label,
  points,
  count,
  isPopping,
  onIncrement,
  onDecrement,
}: TaskTileProps) {
  const tileRef = useRef<HTMLButtonElement | null>(null);
  const pressTimerRef = useRef<number | null>(null);
  const longPressedRef = useRef(false);
  const isNeg = points < 0;

  useEffect(() => () => {
    if (pressTimerRef.current !== null) window.clearTimeout(pressTimerRef.current);
  }, []);

  const onPointerDown = () => {
    longPressedRef.current = false;
    if (pressTimerRef.current !== null) window.clearTimeout(pressTimerRef.current);
    pressTimerRef.current = window.setTimeout(() => {
      longPressedRef.current = true;
      onDecrement();
    }, 600);
  };
  const onPointerUp = () => {
    if (pressTimerRef.current !== null) {
      window.clearTimeout(pressTimerRef.current);
      pressTimerRef.current = null;
    }
    if (!longPressedRef.current) {
      onIncrement();
      if (!isNeg) burstConfetti(tileRef.current);
    }
  };
  const onPointerCancel = () => {
    if (pressTimerRef.current !== null) {
      window.clearTimeout(pressTimerRef.current);
      pressTimerRef.current = null;
    }
  };

  return (
    <button
      ref={tileRef}
      type="button"
      class={`nido-kids-panel__tile ${isNeg ? "is-negative" : ""} ${isPopping ? "is-pop" : ""}`}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerCancel}
      onPointerCancel={onPointerCancel}
      aria-label={`${label} (${points > 0 ? "+" : ""}${points} pts), ${count} fois`}
    >
      <span class="nido-kids-panel__tile-pts">
        {points > 0 ? "+" : ""}
        {points}
      </span>
      <span
        class={`nido-kids-panel__tile-count ${count > 0 ? "is-visible" : ""}`}
        aria-hidden={count === 0}
      >
        {count}
      </span>
      <span class="nido-kids-panel__tile-emoji" aria-hidden="true">
        {emoji}
      </span>
      <span class="nido-kids-panel__tile-label">{label}</span>
    </button>
  );
}

function burstConfetti(host: HTMLElement | null) {
  if (!host) return;
  if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
  for (let i = 0; i < 6; i++) {
    const c = document.createElement("span");
    c.className = "nido-kids-panel__confetti";
    c.style.background = CONFETTI_COLORS[i % CONFETTI_COLORS.length];
    const angle = (Math.PI * 2 * i) / 6 + Math.random() * 0.6;
    const dist = 60 + Math.random() * 30;
    c.style.setProperty("--cx", `${Math.cos(angle) * dist}px`);
    c.style.setProperty("--cy", `${Math.sin(angle) * dist}px`);
    c.style.setProperty("--cr", `${Math.random() * 360}deg`);
    host.appendChild(c);
    window.setTimeout(() => c.remove(), 900);
  }
}
