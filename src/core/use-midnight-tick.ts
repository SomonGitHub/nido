import { useEffect, useState } from "preact/hooks";

export function useMidnightTick(): number {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    let timeoutId: number;

    const scheduleNext = () => {
      const now = new Date();
      const next = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 5);
      timeoutId = window.setTimeout(() => {
        setTick((t) => t + 1);
        scheduleNext();
      }, next.getTime() - now.getTime());
    };

    scheduleNext();
    return () => window.clearTimeout(timeoutId);
  }, []);

  return tick;
}
