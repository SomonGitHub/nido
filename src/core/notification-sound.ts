let audioCtx: AudioContext | null = null;

function getCtx(): AudioContext | null {
  if (typeof window === "undefined") return null;
  const Ctor: typeof AudioContext | undefined =
    window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Ctor) return null;
  if (!audioCtx) audioCtx = new Ctor();
  if (audioCtx.state === "suspended") audioCtx.resume().catch(() => {});
  return audioCtx;
}

export function playNotificationSound() {
  const ctx = getCtx();
  if (!ctx) return;

  const now = ctx.currentTime;
  const master = ctx.createGain();
  master.gain.value = 0.07;
  master.connect(ctx.destination);

  const notes: Array<{ freq: number; start: number; dur: number; gain: number }> = [
    { freq: 880, start: 0, dur: 0.16, gain: 0.9 },
    { freq: 1318.51, start: 0.07, dur: 0.28, gain: 1 },
  ];

  for (const n of notes) {
    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.value = n.freq;

    const g = ctx.createGain();
    g.gain.setValueAtTime(0, now + n.start);
    g.gain.linearRampToValueAtTime(n.gain, now + n.start + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0008, now + n.start + n.dur);

    osc.connect(g);
    g.connect(master);

    osc.start(now + n.start);
    osc.stop(now + n.start + n.dur + 0.05);
  }
}
