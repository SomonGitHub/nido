import { describe, expect, it } from "vitest";
import type { HassObject } from "../types";
import { errorOf, replyOf, resampleToPcm16, sendAudio, sttHandlerId, transcriptOf, ttsUrlOf } from "./assist";

describe("événements du pipeline", () => {
  it("lit la réponse et le fil de conversation à la fin de l'intention", () => {
    const e = {
      type: "intent-end",
      data: { intent_output: { conversation_id: "c1", response: { speech: { plain: { speech: "C'est fait." } } } } },
    };
    expect(replyOf(e)).toEqual({ speech: "C'est fait.", conversationId: "c1" });
    expect(replyOf({ type: "intent-start" })).toBeNull();
  });

  it("lit la phrase reconnue, ignore une transcription vide", () => {
    expect(transcriptOf({ type: "stt-end", data: { stt_output: { text: " Ferme les volets " } } })).toBe("Ferme les volets");
    expect(transcriptOf({ type: "stt-end", data: { stt_output: { text: "  " } } })).toBeNull();
  });

  it("lit l'identifiant du flux audio et l'URL de la voix", () => {
    expect(sttHandlerId({ type: "run-start", data: { runner_data: { stt_binary_handler_id: 3 } } })).toBe(3);
    expect(sttHandlerId({ type: "run-start", data: { runner_data: {} } })).toBeNull();
    expect(ttsUrlOf({ type: "tts-end", data: { tts_output: { url: "/api/tts_proxy/a.mp3" } } })).toBe("/api/tts_proxy/a.mp3");
    expect(ttsUrlOf({ type: "tts-end", data: { tts_output: { url: null } } })).toBeNull();
  });

  it("traduit les erreurs connues, garde le message des autres", () => {
    expect(errorOf({ type: "error", data: { code: "stt-no-text-recognized" } })).toMatch(/rien entendu/);
    expect(errorOf({ type: "error", data: { code: "autre", message: "Boom" } })).toBe("Boom");
    expect(errorOf({ type: "run-end" })).toBeNull();
  });
});

describe("sendAudio", () => {
  const capture = () => {
    const frames: Uint8Array[] = [];
    const hass = { connection: { subscribeMessage: async () => () => {}, socket: { send: (f: Uint8Array) => frames.push(f) } } };
    return { hass: hass as unknown as HassObject, frames };
  };

  it("préfixe le PCM par l'identifiant du flux", () => {
    const { hass, frames } = capture();
    sendAudio(hass, 7, new Int16Array([1, -1]));
    expect(Array.from(frames[0])).toEqual([7, 1, 0, 255, 255]);
  });

  it("envoie l'identifiant seul pour clore la phrase", () => {
    const { hass, frames } = capture();
    sendAudio(hass, 7);
    expect(Array.from(frames[0])).toEqual([7]);
  });
});

describe("resampleToPcm16", () => {
  it("divise par trois le nombre d'échantillons de 48 kHz à 16 kHz, sans dériver d'un bloc à l'autre", () => {
    const state = { pos: 0 };
    let total = 0;
    for (let i = 0; i < 100; i++) total += resampleToPcm16(new Float32Array(128), 48000, state).length;
    expect(Math.abs(total - (100 * 128) / 3)).toBeLessThanOrEqual(1);
  });

  it("garde les valeurs à 16 kHz et écrête au-delà de ±1", () => {
    const pcm = resampleToPcm16(new Float32Array([0, 0.5, -0.5, 2, -2]), 16000, { pos: 0 });
    expect(Array.from(pcm)).toEqual([0, 16383, -16384, 32767, -32768]);
  });

  it("interpole entre deux échantillons", () => {
    const pcm = resampleToPcm16(new Float32Array([0, 1, 1, 1]), 32000, { pos: 0 });
    expect(pcm.length).toBe(2);
    expect(pcm[1]).toBe(32767);
  });
});
