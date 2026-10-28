import type { HassObject } from "../types";

/* Nido parle au pipeline Assist préféré de HA (agent, reconnaissance vocale et
   voix choisis dans Paramètres → Assistants vocaux) : aucune clé d'API côté
   navigateur, et Claude ne pilote que les entités exposées à Assist. */

export interface AssistEvent {
  type: string;
  data?: Record<string, any>;
}

export interface AssistRunOptions {
  /** « intent » : phrase tapée. « stt » : audio envoyé en binaire, réponse lue. */
  mode: "text" | "voice";
  text?: string;
  conversationId: string | null;
}

export const ASSIST_SAMPLE_RATE = 16000;

interface AssistConnection {
  subscribeMessage: (cb: (e: AssistEvent) => void, msg: Record<string, unknown>) => Promise<() => void>;
  socket?: { send: (data: ArrayBufferView | ArrayBuffer) => void };
}

function connectionOf(hass: HassObject): AssistConnection | null {
  const conn = (hass as unknown as { connection?: AssistConnection }).connection;
  return conn && typeof conn.subscribeMessage === "function" ? conn : null;
}

export function assistAvailable(hass: HassObject): boolean {
  return connectionOf(hass) !== null;
}

export function runAssist(
  hass: HassObject,
  { mode, text, conversationId }: AssistRunOptions,
  onEvent: (e: AssistEvent) => void,
): Promise<() => void> {
  const conn = connectionOf(hass);
  if (!conn) return Promise.reject(new Error("Connexion à Home Assistant indisponible"));
  return conn.subscribeMessage(onEvent, {
    type: "assist_pipeline/run",
    start_stage: mode === "text" ? "intent" : "stt",
    end_stage: mode === "text" ? "intent" : "tts",
    input: mode === "text" ? { text } : { sample_rate: ASSIST_SAMPLE_RATE },
    conversation_id: conversationId,
  });
}

/** Audio du micro : un octet d'identifiant de flux puis le PCM 16 bits.
 *  Sans données, le message seul signale la fin de la phrase. */
export function sendAudio(hass: HassObject, handlerId: number, pcm?: Int16Array): void {
  const socket = connectionOf(hass)?.socket;
  if (!socket) return;
  const bytes = pcm ? new Uint8Array(pcm.buffer, pcm.byteOffset, pcm.byteLength) : new Uint8Array(0);
  const frame = new Uint8Array(1 + bytes.length);
  frame[0] = handlerId;
  frame.set(bytes, 1);
  socket.send(frame);
}

export function sttHandlerId(e: AssistEvent): number | null {
  const id = e.data?.runner_data?.stt_binary_handler_id;
  return typeof id === "number" ? id : null;
}

export interface AssistReply {
  speech: string;
  conversationId: string | null;
}

export function replyOf(e: AssistEvent): AssistReply | null {
  if (e.type !== "intent-end") return null;
  const out = e.data?.intent_output;
  const speech = out?.response?.speech?.plain?.speech;
  if (typeof speech !== "string") return null;
  return { speech, conversationId: typeof out?.conversation_id === "string" ? out.conversation_id : null };
}

export function transcriptOf(e: AssistEvent): string | null {
  if (e.type !== "stt-end") return null;
  const t = e.data?.stt_output?.text;
  return typeof t === "string" && t.trim() ? t.trim() : null;
}

export function ttsUrlOf(e: AssistEvent): string | null {
  if (e.type !== "tts-end") return null;
  const url = e.data?.tts_output?.url;
  return typeof url === "string" && url ? url : null;
}

const ERROR_LABEL: Record<string, string> = {
  "stt-no-text-recognized": "Je n'ai rien entendu. Réessayez en parlant plus près.",
  "stt-stream-failed": "Le son n'est pas arrivé jusqu'à Home Assistant.",
  "stt-provider-missing": "Aucune reconnaissance vocale n'est configurée dans Home Assistant.",
  "intent-failed": "L'assistant n'a pas pu répondre.",
  "tts-failed": "La réponse n'a pas pu être lue à voix haute.",
  "pipeline-not-found": "Aucun assistant vocal n'est configuré dans Home Assistant.",
};

export function errorOf(e: AssistEvent): string | null {
  if (e.type !== "error") return null;
  const code = String(e.data?.code ?? "");
  return ERROR_LABEL[code] ?? (e.data?.message ? String(e.data.message) : "Une erreur est survenue.");
}

/** Rééchantillonne vers 16 kHz (interpolation linéaire) et convertit en PCM 16 bits.
 *  Autonome : elle est recopiée telle quelle dans l'AudioWorklet. `state.pos` garde
 *  la position fractionnaire d'un bloc à l'autre pour ne pas créer de clics. */
export function resampleToPcm16(input: Float32Array, inputRate: number, state: { pos: number }): Int16Array {
  const ratio = inputRate / 16000;
  const out: number[] = [];
  let pos = state.pos;
  while (pos < input.length) {
    const i = Math.floor(pos);
    const a = input[i];
    const b = i + 1 < input.length ? input[i + 1] : a;
    out.push(a + (b - a) * (pos - i));
    pos += ratio;
  }
  state.pos = pos - input.length;
  const pcm = new Int16Array(out.length);
  for (let k = 0; k < out.length; k++) {
    const v = Math.max(-1, Math.min(1, out[k]));
    pcm[k] = v < 0 ? v * 0x8000 : v * 0x7fff;
  }
  return pcm;
}
