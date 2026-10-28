import { useCallback, useEffect, useRef, useState } from "preact/hooks";

const ACTIVITY = ["pointerdown", "pointermove", "keydown", "wheel", "touchstart"] as const;

/** Vrai après `minutes` sans toucher l'écran (0 = jamais). Une fois en veille, seul
 *  `wake` (ou une touche du clavier) en sort : le toucher qui réveille ne doit pas
 *  aussi déclencher le bouton situé dessous. */
export function useIdle(minutes: number): [boolean, () => void] {
  const [idle, setIdle] = useState(false);
  const lastRef = useRef(Date.now());
  const idleRef = useRef(false);
  idleRef.current = idle;

  const wake = useCallback(() => {
    lastRef.current = Date.now();
    setIdle(false);
  }, []);

  useEffect(() => {
    if (minutes <= 0) {
      setIdle(false);
      return;
    }
    lastRef.current = Date.now();
    const onActivity = (e: Event) => {
      lastRef.current = Date.now();
      if (idleRef.current && e.type === "keydown") setIdle(false);
    };
    for (const t of ACTIVITY) document.addEventListener(t, onActivity, { passive: true, capture: true });
    const timer = window.setInterval(() => {
      if (!idleRef.current && Date.now() - lastRef.current >= minutes * 60_000) setIdle(true);
    }, 5_000);
    return () => {
      for (const t of ACTIVITY) document.removeEventListener(t, onActivity, { capture: true });
      window.clearInterval(timer);
    };
  }, [minutes]);

  return [idle, wake];
}
