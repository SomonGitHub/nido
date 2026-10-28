import { resampleToPcm16 } from "./assist";

/* Le micro n'est accessible que dans un contexte sécurisé (HTTPS ou localhost) :
   en HTTP sur le réseau local, le bouton n'est pas proposé. */
export function micAvailable(): boolean {
  return typeof window !== "undefined" && window.isSecureContext && !!navigator.mediaDevices?.getUserMedia;
}

export interface MicSession {
  stop: () => void;
}

const WORKLET = (resample: string) => `
const resampleToPcm16 = ${resample};
class NidoPcm extends AudioWorkletProcessor {
  constructor() { super(); this.state = { pos: 0 }; }
  process(inputs) {
    const ch = inputs[0] && inputs[0][0];
    if (ch && ch.length) {
      const pcm = resampleToPcm16(ch, sampleRate, this.state);
      if (pcm.length) this.port.postMessage(pcm, [pcm.buffer]);
    }
    return true;
  }
}
registerProcessor("nido-pcm", NidoPcm);
`;

export async function startMic(onChunk: (pcm: Int16Array) => void): Promise<MicSession> {
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: { channelCount: 1, echoCancellation: true, noiseSuppression: true, autoGainControl: true },
  });
  const ctx = new AudioContext();
  const url = URL.createObjectURL(new Blob([WORKLET(resampleToPcm16.toString())], { type: "text/javascript" }));
  try {
    await ctx.audioWorklet.addModule(url);
  } catch (err) {
    stream.getTracks().forEach((t) => t.stop());
    void ctx.close();
    throw err;
  } finally {
    URL.revokeObjectURL(url);
  }
  const source = ctx.createMediaStreamSource(stream);
  const node = new AudioWorkletNode(ctx, "nido-pcm");
  node.port.onmessage = (ev: MessageEvent<Int16Array>) => onChunk(ev.data);
  source.connect(node);

  let stopped = false;
  return {
    stop: () => {
      if (stopped) return;
      stopped = true;
      node.port.onmessage = null;
      source.disconnect();
      node.disconnect();
      stream.getTracks().forEach((t) => t.stop());
      void ctx.close();
    },
  };
}
