/* Voix de l'appareil : celle de Fully Kiosk quand son interface JavaScript est
   activée (licence Plus), sinon la synthèse vocale du navigateur. */

interface FullyApi {
  textToSpeech?: (text: string, locale?: string) => void;
  stopTextToSpeech?: () => void;
}

function fully(): FullyApi | null {
  const f = (globalThis as { fully?: FullyApi }).fully;
  return f && typeof f.textToSpeech === "function" ? f : null;
}

function browserSpeech(): SpeechSynthesis | null {
  return typeof window !== "undefined" && "speechSynthesis" in window ? window.speechSynthesis : null;
}

export type SpeechEngine = "fully" | "browser" | null;

export function speechEngine(): SpeechEngine {
  if (fully()) return "fully";
  if (browserSpeech()) return "browser";
  return null;
}

/** `fr` → `fr_FR` pour Fully, `fr-FR` pour le navigateur. */
function localeOf(language: string, sep: "_" | "-"): string {
  const [lang, region] = language.split(/[-_]/);
  return `${lang.toLowerCase()}${sep}${(region ?? lang).toUpperCase()}`;
}

export function speak(text: string, language = "fr"): boolean {
  const clean = text.trim();
  if (!clean) return false;
  const f = fully();
  if (f) {
    try {
      f.textToSpeech!(clean, localeOf(language, "_"));
    } catch {
      f.textToSpeech!(clean);
    }
    return true;
  }
  const synth = browserSpeech();
  if (!synth) return false;
  const utterance = new SpeechSynthesisUtterance(clean);
  utterance.lang = localeOf(language, "-");
  const voice = synth.getVoices().find((v) => v.lang.toLowerCase().startsWith(utterance.lang.slice(0, 2).toLowerCase()));
  if (voice) utterance.voice = voice;
  synth.speak(utterance);
  return true;
}
