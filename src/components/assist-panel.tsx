import { useEffect, useRef, useState } from "preact/hooks";
import type { HassObject } from "../types";
import { IconMic, IconSend, IconSparkles, IconX } from "../icons";
import { useOverlay } from "../core/use-overlay";
import {
  errorOf,
  replyOf,
  runAssist,
  sendAudio,
  sttHandlerId,
  transcriptOf,
  ttsUrlOf,
  type AssistEvent,
} from "../core/assist";
import { micAvailable, startMic, type MicSession } from "../core/mic-recorder";
import { speak } from "../core/speech";

interface Message {
  id: number;
  from: "me" | "nido";
  text: string;
  pending?: boolean;
  error?: boolean;
}

type Phase = "idle" | "listening" | "thinking";

const SUGGESTIONS = ["Quelle température fait-il à l'étage ?", "Éteins toutes les lumières", "Ferme les volets du salon"];

function absoluteUrl(hass: HassObject, url: string): string {
  if (/^https?:\/\//i.test(url)) return url;
  const base = (hass as { hassUrl?: (path?: string) => string }).hassUrl?.("") ?? "";
  return base.replace(/\/$/, "") + url;
}

export function AssistPanel({ hass, onClose }: { hass: HassObject; onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [draft, setDraft] = useState("");
  const [phase, setPhase] = useState<Phase>("idle");
  const conversationRef = useRef<string | null>(null);
  const nextId = useRef(1);
  const unsubRef = useRef<(() => void) | null>(null);
  const micRef = useRef<MicSession | null>(null);
  const handlerRef = useRef<number | null>(null);
  const queuedRef = useRef<Int16Array[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const lastReplyRef = useRef("");
  const hassRef = useRef(hass);
  hassRef.current = hass;
  const canListen = micAvailable();

  const stopMic = () => {
    micRef.current?.stop();
    micRef.current = null;
  };
  const endRun = () => {
    stopMic();
    unsubRef.current?.();
    unsubRef.current = null;
    handlerRef.current = null;
    queuedRef.current = [];
  };
  const close = () => {
    endRun();
    audioRef.current?.pause();
    onClose();
  };
  const overlayRef = useOverlay<HTMLDivElement>(close);

  useEffect(() => () => endRun(), []);
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages]);

  const push = (m: Omit<Message, "id">) => {
    const id = nextId.current++;
    setMessages((list) => [...list, { ...m, id }]);
    return id;
  };
  const settle = (id: number, text: string, error = false) =>
    setMessages((list) => list.map((m) => (m.id === id ? { ...m, text, pending: false, error } : m)));

  /* Un seul échange à la fois : la réponse en attente reçoit tout ce que le
     pipeline renvoie (réponse, erreur), puis l'abonnement est fermé. */
  const handleEvent = (replyId: number, e: AssistEvent) => {
    const transcript = transcriptOf(e);
    if (transcript) {
      setMessages((list) => {
        const i = list.findIndex((m) => m.id === replyId);
        const mine: Message = { id: nextId.current++, from: "me", text: transcript };
        return i < 0 ? [...list, mine] : [...list.slice(0, i), mine, ...list.slice(i)];
      });
      setPhase("thinking");
    }
    if (e.type === "run-start") {
      const id = sttHandlerId(e);
      if (id !== null) {
        handlerRef.current = id;
        queuedRef.current.forEach((pcm) => sendAudio(hassRef.current, id, pcm));
        queuedRef.current = [];
      }
    }
    if (e.type === "stt-vad-end") {
      stopMic();
      setPhase("thinking");
    }
    const reply = replyOf(e);
    if (reply) {
      conversationRef.current = reply.conversationId ?? conversationRef.current;
      lastReplyRef.current = reply.speech;
      settle(replyId, reply.speech);
    }
    /* La voix de HA peut être bloquée (lecture automatique refusée, WebView) :
       la voix de l'appareil prend alors le relais. */
    if (e.type === "tts-end") {
      const url = ttsUrlOf(e);
      const fallback = () => void speak(lastReplyRef.current, hassRef.current.language);
      if (url) {
        audioRef.current?.pause();
        audioRef.current = new Audio(absoluteUrl(hassRef.current, url));
        void audioRef.current.play().catch(fallback);
      } else {
        fallback();
      }
    }
    const error = errorOf(e);
    if (error) {
      settle(replyId, error, true);
      endRun();
      setPhase("idle");
    }
    if (e.type === "run-end") {
      endRun();
      setPhase("idle");
      setMessages((list) => list.filter((m) => !(m.id === replyId && m.pending && m.text === "")));
    }
  };

  const ask = async (text: string) => {
    const clean = text.trim();
    if (!clean || phase !== "idle") return;
    setDraft("");
    push({ from: "me", text: clean });
    const replyId = push({ from: "nido", text: "", pending: true });
    setPhase("thinking");
    try {
      unsubRef.current = await runAssist(
        hass,
        { mode: "text", text: clean, conversationId: conversationRef.current },
        (e) => handleEvent(replyId, e),
      );
    } catch (err) {
      settle(replyId, err instanceof Error ? err.message : "L'assistant est injoignable.", true);
      setPhase("idle");
    }
  };

  const toggleMic = async () => {
    if (phase === "listening") {
      stopMic();
      if (handlerRef.current !== null) sendAudio(hass, handlerRef.current);
      setPhase("thinking");
      return;
    }
    if (phase !== "idle") return;
    audioRef.current?.pause();
    const replyId = push({ from: "nido", text: "", pending: true });
    setPhase("listening");
    try {
      micRef.current = await startMic((pcm) => {
        if (handlerRef.current === null) queuedRef.current.push(pcm);
        else sendAudio(hassRef.current, handlerRef.current, pcm);
      });
      unsubRef.current = await runAssist(
        hass,
        { mode: "voice", conversationId: conversationRef.current },
        (e) => handleEvent(replyId, e),
      );
    } catch (err) {
      endRun();
      const denied = err instanceof DOMException && err.name === "NotAllowedError";
      settle(replyId, denied ? "L'accès au micro a été refusé par le navigateur." : "Le micro n'a pas pu démarrer.", true);
      setPhase("idle");
    }
  };

  const status =
    phase === "listening" ? "Je vous écoute…" : phase === "thinking" ? "Je réfléchis…" : null;

  return (
    <div class="nido-assist">
      <div class="nido-notification-panel__backdrop" onClick={close} />
      <div
        ref={overlayRef}
        class="nido-notification-panel__content nido-assist__content"
        role="dialog"
        aria-modal="true"
        aria-label="Demande à Nido"
      >
        <header class="nido-notification-panel__header">
          <div class="nido-assist__title">
            <IconSparkles size={20} />
            <span>Demande à Nido</span>
          </div>
          <button type="button" class="nido-notification-panel__close" onClick={close} aria-label="Fermer">
            <IconX size={20} />
          </button>
        </header>

        <div class="nido-assist__thread" ref={scrollRef} aria-live="polite">
          {messages.length === 0 ? (
            <div class="nido-assist__empty">
              <p>Posez une question ou donnez un ordre à la maison.</p>
              <div class="nido-assist__suggestions">
                {SUGGESTIONS.map((s) => (
                  <button type="button" class="nido-assist__chip" onClick={() => ask(s)}>
                    {s}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            messages.map((m) => (
              <div
                key={m.id}
                class={`nido-assist__bubble nido-assist__bubble--${m.from}`}
                data-pending={m.pending ? "true" : undefined}
                data-error={m.error ? "true" : undefined}
              >
                {m.pending && !m.text ? <span class="nido-assist__dots" aria-label={status ?? "…"} /> : m.text}
              </div>
            ))
          )}
        </div>

        <form
          class="nido-assist__composer"
          onSubmit={(ev) => {
            ev.preventDefault();
            void ask(draft);
          }}
        >
          {status && <div class="nido-assist__status">{status}</div>}
          <div class="nido-assist__row">
            <input
              type="text"
              class="nido-assist__input"
              value={draft}
              placeholder="Demandez quelque chose…"
              aria-label="Votre demande"
              disabled={phase !== "idle"}
              onInput={(ev) => setDraft((ev.target as HTMLInputElement).value)}
            />
            {draft.trim() || !canListen ? (
              <button
                type="submit"
                class="nido-assist__action"
                aria-label="Envoyer"
                disabled={!draft.trim() || phase !== "idle"}
              >
                <IconSend size={20} />
              </button>
            ) : (
              <button
                type="button"
                class="nido-assist__action nido-assist__action--mic"
                data-listening={phase === "listening" ? "true" : undefined}
                aria-label={phase === "listening" ? "Arrêter l'écoute" : "Parler"}
                aria-pressed={phase === "listening"}
                disabled={phase === "thinking"}
                onClick={toggleMic}
              >
                <IconMic size={20} />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
