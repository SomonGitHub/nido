import { useEffect, useState } from "preact/hooks";

/* Détecte les écrans façon Echo Show 5 (960×480) : larges mais très bas.
   On se base sur la hauteur de viewport dispo, pas seulement la largeur,
   pour ne pas confondre avec un téléphone étroit en portrait. */
const MAX_COMPACT_HEIGHT = 600;
const MIN_COMPACT_WIDTH = 700;

function computeCompact(): boolean {
  if (typeof window === "undefined") return false;
  return window.innerHeight <= MAX_COMPACT_HEIGHT && window.innerWidth >= MIN_COMPACT_WIDTH;
}

export function useCompactLayout(): boolean {
  const [compact, setCompact] = useState(computeCompact);

  useEffect(() => {
    const onResize = () => setCompact(computeCompact());
    window.addEventListener("resize", onResize);
    onResize();
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return compact;
}
