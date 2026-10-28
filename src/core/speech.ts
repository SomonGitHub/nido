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

/** `fr` → `fr-FR` pour la synthèse du navigateur. */
function localeOf(language: string, sep: "-"): string {
  const [lang, region] = language.split(/[-_]/);
  return `${lang.toLowerCase()}${sep}${(region ?? lang).toUpperCase()}`;
}

/* Fully reçoit le texte seul : sa voix par défaut est celle d'Android, déjà dans
   la langue de la tablette, alors qu'une locale mal formée le fait taire sans erreur. */
export function speak(text: string, language = "fr"): boolean {
  const clean = text.trim();
  if (!clean) return false;
  const f = fully();
  if (f) {
    f.textToSpeech!(clean);
    return true;
  }
  const synth = browserSpeech();
  if (!synth) return false;
  synth.speak(utteranceFor(synth, clean, language));
  return true;
}

function utteranceFor(synth: SpeechSynthesis, text: string, language: string): SpeechSynthesisUtterance {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = localeOf(language, "-");
  const voice = synth.getVoices().find((v) => v.lang.toLowerCase().startsWith(utterance.lang.slice(0, 2).toLowerCase()));
  if (voice) utterance.voice = voice;
  return utterance;
}

/** Essai depuis les réglages : parle, puis dit ce qui s'est passé, pour qu'un essai
 *  silencieux ne laisse pas l'utilisateur deviner. */
export function speakTest(text: string, language = "fr"): Promise<string> {
  const f = fully();
  if (f) {
    try {
      f.textToSpeech!(text);
    } catch {
      return Promise.resolve("Fully a refusé la lecture. Vérifiez que l'interface JavaScript est activée.");
    }
    return Promise.resolve(
      "Envoyé à la voix de Fully. Rien entendu ? Montez le volume « Média » et vérifiez la synthèse vocale d'Android.",
    );
  }
  const synth = browserSpeech();
  if (!synth) return Promise.resolve("Ce navigateur n'a pas de synthèse vocale.");
  const hasVoice = synth.getVoices().some((v) => v.lang.toLowerCase().startsWith(language.slice(0, 2).toLowerCase()));
  return new Promise((resolve) => {
    const utterance = utteranceFor(synth, text, language);
    const done = (msg: string) => {
      window.clearTimeout(timer);
      resolve(msg);
    };
    utterance.onend = () => done("Voix du navigateur : lecture terminée.");
    utterance.onerror = (e) => done(`Le navigateur n'a pas pu parler (${e.error}).`);
    /* Une WebView sans moteur de synthèse ne déclenche ni fin ni erreur. */
    const timer = window.setTimeout(
      () =>
        done(
          hasVoice
            ? "Aucun son du navigateur. Dans Fully, activez l'interface JavaScript pour utiliser la voix d'Android."
            : "Aucune voix française dans ce navigateur. Dans Fully, activez l'interface JavaScript.",
        ),
      6000,
    );
    synth.speak(utterance);
  });
}
