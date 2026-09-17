import { useEffect, useState } from "preact/hooks";

/** Re-render au passage de chaque minute, aligné sur la seconde 0.
 *  Sans ça l'horloge et les libellés relatifs ("depuis 10 min") ne bougent
 *  qu'au gré des pushes de `hass`, qui peuvent ne rien envoyer pendant des heures. */
export function useMinuteTick(): Date {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    let timeoutId: number;

    const scheduleNext = () => {
      const d = new Date();
      const delay = 60_000 - (d.getSeconds() * 1000 + d.getMilliseconds());
      timeoutId = window.setTimeout(() => {
        setNow(new Date());
        scheduleNext();
      }, delay);
    };

    scheduleNext();
    return () => window.clearTimeout(timeoutId);
  }, []);

  return now;
}
