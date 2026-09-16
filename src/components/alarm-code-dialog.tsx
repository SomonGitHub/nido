import { useEffect, useRef, useState } from "preact/hooks";
import { IconShield, IconX } from "../icons";
import { useOverlay } from "../core/use-overlay";

export type AlarmCodeFormat = "number" | "text";

interface AlarmCodeDialogProps {
  /** Nom de l'alarme, affiché en sous-titre. */
  title: string;
  /** `code_format` remonté par Home Assistant. */
  format: AlarmCodeFormat;
  /** Vrai pendant l'appel de service + la vérification de l'état. */
  pending: boolean;
  /** Message d'erreur (code refusé), vide sinon. */
  error: string | null;
  onSubmit: (code: string) => void;
  onClose: () => void;
}

const DIGITS = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const MAX_LEN = 16;

export function AlarmCodeDialog({
  title,
  format,
  pending,
  error,
  onSubmit,
  onClose,
}: AlarmCodeDialogProps) {
  const overlayRef = useOverlay<HTMLDivElement>(onClose);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [code, setCode] = useState("");

  // Code refusé : on vide la saisie pour laisser retenter directement.
  useEffect(() => {
    if (error) setCode("");
  }, [error]);

  useEffect(() => {
    if (format === "text") inputRef.current?.focus();
  }, [format]);

  const submit = () => {
    if (pending || code.length === 0) return;
    onSubmit(code);
  };

  const append = (d: string) => {
    if (pending) return;
    setCode((c) => (c.length >= MAX_LEN ? c : c + d));
  };

  const onPadKeyDown = (e: KeyboardEvent) => {
    if (format !== "number" || pending) return;
    if (e.key >= "0" && e.key <= "9") {
      e.preventDefault();
      append(e.key);
    } else if (e.key === "Backspace") {
      e.preventDefault();
      setCode((c) => c.slice(0, -1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      submit();
    }
  };

  return (
    <div class="nido-alarm-code" data-no-drag>
      <div class="nido-alarm-code__backdrop" onClick={onClose} />
      <div
        ref={overlayRef}
        class="nido-alarm-code__content"
        role="dialog"
        aria-modal="true"
        aria-label="Code de désarmement"
        onKeyDown={onPadKeyDown}
      >
        <header class="nido-alarm-code__header">
          <div class="nido-alarm-code__title-group">
            <div class="n-icon-bubble">
              <IconShield size={18} />
            </div>
            <div>
              <div class="nido-alarm-code__title">Code de désarmement</div>
              <div class="nido-alarm-code__subtitle">{title}</div>
            </div>
          </div>
          <button
            type="button"
            class="nido-alarm-code__close"
            onClick={onClose}
            aria-label="Fermer"
          >
            <IconX size={18} />
          </button>
        </header>

        {format === "number" ? (
          <div class="nido-alarm-code__display" aria-live="polite">
            {code.length === 0 ? (
              <span class="nido-alarm-code__placeholder">Saisissez le code</span>
            ) : (
              <span class="nido-alarm-code__dots">
                {Array.from({ length: code.length }, (_, i) => (
                  <i key={i} class="nido-alarm-code__dot" />
                ))}
              </span>
            )}
          </div>
        ) : (
          <input
            ref={inputRef}
            class="nido-alarm-code__input"
            type="password"
            inputMode="text"
            autoComplete="off"
            value={code}
            disabled={pending}
            placeholder="Code"
            aria-label="Code de désarmement"
            onInput={(e) => setCode((e.currentTarget as HTMLInputElement).value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                submit();
              }
            }}
          />
        )}

        {error && (
          <div class="nido-alarm-code__error" role="alert">
            {error}
          </div>
        )}

        {format === "number" && (
          <div class="nido-alarm-code__pad">
            {DIGITS.map((d) => (
              <button
                key={d}
                type="button"
                class="nido-alarm-code__key"
                disabled={pending}
                onClick={() => append(d)}
              >
                {d}
              </button>
            ))}
            <button
              type="button"
              class="nido-alarm-code__key nido-alarm-code__key--aux"
              disabled={pending || code.length === 0}
              onClick={() => setCode("")}
            >
              C
            </button>
            <button
              type="button"
              class="nido-alarm-code__key"
              disabled={pending}
              onClick={() => append("0")}
            >
              0
            </button>
            <button
              type="button"
              class="nido-alarm-code__key nido-alarm-code__key--aux"
              disabled={pending || code.length === 0}
              aria-label="Effacer le dernier chiffre"
              onClick={() => setCode((c) => c.slice(0, -1))}
            >
              ⌫
            </button>
          </div>
        )}

        <button
          type="button"
          class="nido-alarm-code__submit"
          disabled={pending || code.length === 0}
          onClick={submit}
        >
          {pending ? "Vérification…" : "Désarmer"}
        </button>
      </div>
    </div>
  );
}
