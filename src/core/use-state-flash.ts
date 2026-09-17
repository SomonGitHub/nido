import { useEffect, useRef, useState } from "preact/hooks";

const FLASH_MS = 900;

/** Vrai pendant ~1 s après chaque changement de `signature`, jamais au montage.
 *  Sert à accuser réception visuellement : HA fait un aller-retour avant de
 *  repousser l'état, sans marqueur on ne distingue pas un écran vivant d'une capture. */
export function useStateFlash(signature: string | undefined): boolean {
  const prev = useRef(signature);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    if (prev.current === signature) return;
    prev.current = signature;
    setFlash(true);
    const id = window.setTimeout(() => setFlash(false), FLASH_MS);
    return () => window.clearTimeout(id);
  }, [signature]);

  return flash;
}
