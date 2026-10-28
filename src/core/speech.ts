import type { HassObject } from "../types";

/* Voix de l'appareil : celle de Fully Kiosk quand son interface JavaScript est
   activée (licence Plus), sinon la voix du pipeline Assist de HA jouée ici,
   sinon la synthèse vocale du navigateur — absente ou muette dans la WebView
   Android de Fully. */

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

interface HaTtsHost {
  callWS: HassObject["callWS"];
  callApi?: (method: "POST", path: string, data?: Record<string, unknown>) => Promise<unknown>;
  hassUrl?: (path?: string) => string;
}

interface PipelineTts {
  tts_engine?: string | null;
  tts_language?: string | null;
  tts_voice?: string | null;
}

let pipelineTts: Promise<PipelineTts | null> | null = null;

function preferredTts(hass: HaTtsHost): Promise<PipelineTts | null> {
  pipelineTts ??= hass
    .callWS<PipelineTts>({ type: "assist_pipeline/pipeline/get" })
    .catch(() => null)
    .then((p) => {
      if (!p?.tts_engine) pipelineTts = null;
      return p;
    });
  return pipelineTts;
}

export async function haVoiceAvailable(hass: HaTtsHost | null | undefined): Promise<boolean> {
  return !!hass?.callApi && !!(await preferredTts(hass))?.tts_engine;
}

/** Fait dire le texte par le moteur TTS du pipeline Assist préféré, et le joue ici.
 *  Rejette si HA ne fournit pas de voix ou si le navigateur refuse la lecture. */
export async function speakWithHa(hass: HaTtsHost, text: string): Promise<HTMLAudioElement> {
  const tts = await preferredTts(hass);
  if (!tts?.tts_engine || !hass.callApi) throw new Error("Aucune voix configurée dans les assistants vocaux de HA.");
  const res = (await hass.callApi("POST", "tts_get_url", {
    engine_id: tts.tts_engine,
    message: text,
    ...(tts.tts_language ? { language: tts.tts_language } : {}),
    ...(tts.tts_voice ? { options: { voice: tts.tts_voice } } : {}),
  })) as { url?: string; path?: string };
  /* `path` plutôt que `url` : l'URL interne de HA n'est pas forcément joignable depuis l'appareil. */
  const src = res.path ? (hass.hassUrl?.("") ?? "").replace(/\/$/, "") + res.path : res.url;
  if (!src) throw new Error("HA n'a pas renvoyé d'audio.");
  const audio = new Audio(src);
  await audio.play();
  return audio;
}

/* Fully reçoit le texte seul : sa voix par défaut est celle d'Android, déjà dans
   la langue de la tablette, alors qu'une locale mal formée le fait taire sans erreur. */
export async function speak(text: string, language = "fr", hass?: HaTtsHost | null): Promise<boolean> {
  const clean = text.trim();
  if (!clean) return false;
  const f = fully();
  if (f) {
    f.textToSpeech!(clean);
    return true;
  }
  if (hass) {
    try {
      await speakWithHa(hass, clean);
      return true;
    } catch {
      /* lecture automatique refusée ou pas de voix HA : synthèse du navigateur */
    }
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
export async function speakTest(text: string, language = "fr", hass?: HaTtsHost | null): Promise<string> {
  const f = fully();
  if (f) {
    try {
      f.textToSpeech!(text);
    } catch {
      return "Fully a refusé la lecture. Vérifiez que l'interface JavaScript est activée.";
    }
    return "Envoyé à la voix de Fully. Rien entendu ? Montez le volume « Média » et vérifiez la synthèse vocale d'Android.";
  }
  let haError = "";
  if (hass) {
    try {
      const audio = await speakWithHa(hass, text);
      return await new Promise<string>((resolve) => {
        const timer = window.setTimeout(() => resolve("Voix de Home Assistant envoyée. Rien entendu ? Montez le volume « Média »."), 15000);
        audio.onended = () => {
          window.clearTimeout(timer);
          resolve("Voix de Home Assistant : lecture terminée.");
        };
      });
    } catch (err) {
      haError = err instanceof Error && err.name === "NotAllowedError" ? "Le navigateur a bloqué le son de HA (dans Fully : Web Content Settings → Autoplay Audio)." : "";
    }
  }
  const synth = browserSpeech();
  if (!synth) {
    return `${haError ? haError + " " : ""}Ce navigateur n'a pas de synthèse vocale. Dans Fully, activez l'interface JavaScript (licence Plus), ou configurez une voix dans les assistants vocaux de HA.`;
  }
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
