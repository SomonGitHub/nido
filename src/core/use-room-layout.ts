import { useEffect, useState } from "preact/hooks";

/* Une tablette murale en paysage fait 1280 px de large : tester la largeur seule
   la ferait passer pour un desktop. Ce qui justifie la mise en page tactile,
   c'est le doigt, pas la taille. */
const PHONE = "(max-width: 599px)";
const TOUCH = "(pointer: coarse) and (min-width: 600px)";

export type RoomLayout = "phone" | "touch" | "desktop";

function computeLayout(): RoomLayout {
  if (typeof window === "undefined" || !window.matchMedia) return "desktop";
  if (window.matchMedia(PHONE).matches) return "phone";
  if (window.matchMedia(TOUCH).matches) return "touch";
  return "desktop";
}

export function useRoomLayout(): RoomLayout {
  const [layout, setLayout] = useState<RoomLayout>(computeLayout);

  useEffect(() => {
    if (!window.matchMedia) return;
    const queries = [window.matchMedia(PHONE), window.matchMedia(TOUCH)];
    const onChange = () => setLayout(computeLayout());
    for (const q of queries) q.addEventListener("change", onChange);
    onChange();
    return () => {
      for (const q of queries) q.removeEventListener("change", onChange);
    };
  }, []);

  return layout;
}
