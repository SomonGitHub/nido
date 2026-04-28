import { useEffect, useMemo, useState } from "preact/hooks";
import type { JSX } from "preact";
import type { ResolvedEntity } from "../core/entities";
import type { Area } from "../core/areas";
import type { HassObject } from "../types";
import {
  THEMES,
  type ThemeName,
  type ThemeMode,
  saveTheme,
  saveFavorites,
  saveExposed,
  saveExcludedUsers,
  setOnboarded,
} from "../core/storage";
import {
  IconArrowRight,
  IconArrowLeft,
  IconCheck,
  IconStar,
  IconStarFilled,
  IconSun,
  IconMoon,
  IconShieldCheck,
  IconNest,
  IconUser,
  IconLightOn,
  IconBlind,
  IconPlug,
  IconThermostat,
  IconLock,
  IconVacuum,
  IconSensor,
  IconMusic,
  IconShield,
  IconCamera,
  IconFan,
  IconSparkles,
  IconPlay,
  IconSearch,
  IconX,
  IconCloudSun,
} from "../icons";

const TOTAL_STEPS = 5;

const DOMAIN_META: Record<
  string,
  { label: string; Icon: (p: { size?: number }) => JSX.Element }
> = {
  light: { label: "Lumières", Icon: IconLightOn },
  switch: { label: "Prises & switches", Icon: IconPlug },
  cover: { label: "Volets & stores", Icon: IconBlind },
  climate: { label: "Thermostats", Icon: IconThermostat },
  lock: { label: "Serrures", Icon: IconLock },
  vacuum: { label: "Aspirateurs", Icon: IconVacuum },
  binary_sensor: { label: "Détecteurs", Icon: IconShield },
  sensor: { label: "Capteurs", Icon: IconSensor },
  media_player: { label: "Lecteurs média", Icon: IconMusic },
  alarm_control_panel: { label: "Alarmes", Icon: IconShield },
  camera: { label: "Caméras", Icon: IconCamera },
  fan: { label: "Ventilateurs", Icon: IconFan },
  scene: { label: "Scènes", Icon: IconSparkles },
  script: { label: "Scripts", Icon: IconPlay },
  weather: { label: "Météo", Icon: IconCloudSun },
};

const PICKABLE_DOMAINS = Object.keys(DOMAIN_META);

const THEME_DETAILS: Record<
  ThemeName,
  { name: string; desc: string; swatches: [string, string, string] }
> = {
  terracotta: { name: "Terracotta", desc: "Toscan chaleureux", swatches: ["#f4ede2", "#c75a2a", "#1a1410"] },
  miel: { name: "Miel", desc: "Solaire et doré", swatches: ["#f6ecd6", "#d4a020", "#2a1f10"] },
  sauge: { name: "Sauge", desc: "Organique scandinave", swatches: ["#ebe7d8", "#6a7a3a", "#1a1d10"] },
  cosy: { name: "Cosy", desc: "Salon feutré", swatches: ["#f0eadd", "#b06030", "#1c1208"] },
};

interface HassUser {
  id: string;
  name: string;
  is_owner?: boolean;
  is_admin?: boolean;
  username?: string;
  system_generated?: boolean;
}

interface OnboardingProps {
  hass: HassObject;
  entities: ResolvedEntity[];
  areas: Area[];
  initialTheme: ThemeName;
  initialMode: ThemeMode;
  initialExposed: string[];
  initialFavorites: string[];
  initialExcludedUsers: string[];
  isReturning: boolean;
  onApplyTheme: (theme: ThemeName, mode: ThemeMode) => void;
  onClose: () => void;
  onDone: (state: {
    exposed: string[];
    favorites: string[];
    theme: ThemeName;
    mode: ThemeMode;
    excludedUsers: string[];
  }) => void;
}

export function Onboarding(props: OnboardingProps) {
  const {
    hass,
    entities,
    areas,
    initialTheme,
    initialMode,
    initialExposed,
    initialFavorites,
    initialExcludedUsers,
    isReturning,
    onApplyTheme,
    onClose,
    onDone,
  } = props;

  const [step, setStep] = useState<0 | 1 | 2 | 3 | 4>(0);
  const [theme, setTheme] = useState<ThemeName>(initialTheme);
  const [mode, setMode] = useState<ThemeMode>(initialMode);
  const [exposed, setExposed] = useState<Set<string>>(new Set(initialExposed));
  const [favs, setFavs] = useState<Set<string>>(new Set(initialFavorites));
  const [excludedUsers, setExcludedUsers] = useState<Set<string>>(
    new Set(initialExcludedUsers),
  );
  const [users, setUsers] = useState<HassUser[] | null>(null);
  const [usersError, setUsersError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    hass
      .callWS<HassUser[]>({ type: "config/auth/list" })
      .then((list) => {
        if (cancelled) return;
        setUsers(
          (list ?? [])
            .filter((u) => !u.system_generated)
            .sort((a, b) => a.name.localeCompare(b.name)),
        );
      })
      .catch((err) => {
        if (cancelled) return;
        setUsersError(err instanceof Error ? err.message : String(err));
        if (hass.user) setUsers([hass.user as HassUser]);
      });
    return () => {
      cancelled = true;
    };
  }, [hass]);

  const next = () => setStep((s) => (Math.min(TOTAL_STEPS - 1, s + 1) as 0 | 1 | 2 | 3 | 4));
  const prev = () => setStep((s) => (Math.max(0, s - 1) as 0 | 1 | 2 | 3 | 4));

  const applyTheme = (t: ThemeName, m: ThemeMode) => {
    setTheme(t);
    setMode(m);
    onApplyTheme(t, m);
  };

  const toggleExpose = (id: string) => {
    setExposed((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        setFavs((f) => {
          if (!f.has(id)) return f;
          const nf = new Set(f);
          nf.delete(id);
          return nf;
        });
      } else {
        next.add(id);
      }
      return next;
    });
  };
  const toggleFav = (id: string) => {
    setFavs((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else {
        next.add(id);
        setExposed((e) => (e.has(id) ? e : new Set(e).add(id)));
      }
      return next;
    });
  };
  const toggleUser = (id: string) => {
    setExcludedUsers((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const finish = () => {
    const exposedArr = Array.from(exposed);
    const favsArr = Array.from(favs).filter((id) => exposed.has(id));
    const excludedArr = Array.from(excludedUsers);
    saveTheme(theme, mode);
    saveExposed(exposedArr);
    saveFavorites(favsArr);
    saveExcludedUsers(excludedArr);
    setOnboarded(true);
    onDone({
      exposed: exposedArr,
      favorites: favsArr,
      theme,
      mode,
      excludedUsers: excludedArr,
    });
  };

  const skipAll = () => {
    saveTheme(theme, mode);
    saveExposed(Array.from(exposed));
    saveFavorites(Array.from(favs).filter((id) => exposed.has(id)));
    saveExcludedUsers(Array.from(excludedUsers));
    setOnboarded(true);
    onClose();
  };

  return (
    <div class="n-ob" role="dialog" aria-modal="true" aria-label="Configuration de Nido">
      <div class="n-ob__shell">
        <header class="n-ob__header">
          <div class="n-ob__brand">
            <span class="n-ob__brand-mark"><IconNest size={18} /></span>
            <span class="n-ob__brand-name">nido</span>
          </div>
          <div class="n-ob__stepper">
            {Array.from({ length: TOTAL_STEPS }, (_, i) => (
              <span
                class={`n-ob__step-dot ${i === step ? "is-active" : ""} ${
                  i < step ? "is-done" : ""
                }`}
              />
            ))}
            <span class="n-ob__step-count">
              {step + 1} / {TOTAL_STEPS}
            </span>
          </div>
          <button type="button" class="n-ob__skip" onClick={skipAll}>
            Passer →
          </button>
        </header>

        <div class="n-ob__body" key={step}>
          {step === 0 && (
            <StepWelcome
              isReturning={isReturning}
              exposedCount={exposed.size}
              favCount={favs.size}
              themeLabel={THEME_DETAILS[theme].name}
              modeLabel={mode === "light" ? "Clair" : "Sombre"}
              allowedUsersCount={
                users ? users.filter((u) => !excludedUsers.has(u.id)).length : null
              }
            />
          )}
          {step === 1 && <StepConnect entitiesCount={entities.length} areasCount={areas.length} />}
          {step === 2 && (
            <StepEntities
              entities={entities}
              exposed={exposed}
              favs={favs}
              onToggleExpose={toggleExpose}
              onToggleFav={toggleFav}
            />
          )}
          {step === 3 && (
            <StepTheme
              theme={theme}
              mode={mode}
              onPick={applyTheme}
              userName={hass.user?.name ?? "vous"}
            />
          )}
          {step === 4 && (
            <StepFamily
              hass={hass}
              users={users}
              error={usersError}
              excluded={excludedUsers}
              onToggleUser={toggleUser}
            />
          )}
        </div>

        <footer class="n-ob__footer">
          <button
            type="button"
            class="n-ob__back"
            disabled={step === 0}
            onClick={prev}
          >
            <IconArrowLeft size={14} /> Retour
          </button>
          {step < TOTAL_STEPS - 1 ? (
            <button type="button" class="n-ob__primary" onClick={next}>
              Continuer <IconArrowRight size={16} />
            </button>
          ) : (
            <button type="button" class="n-ob__primary" onClick={finish}>
              Entrer chez moi <IconArrowRight size={16} />
            </button>
          )}
        </footer>
      </div>
    </div>
  );
}

/* ─── Step 0 — Welcome / Recap ─── */
const CYCLING_ICONS: Array<(p: { size?: number }) => JSX.Element> = [
  IconLightOn,
  IconBlind,
  IconPlug,
  IconThermostat,
  IconLock,
  IconVacuum,
  IconSensor,
  IconMusic,
  IconShield,
  IconCamera,
  IconFan,
  IconSparkles,
  IconPlay,
];

function CyclingIcon({ offset, intervalMs }: { offset: number; intervalMs: number }) {
  const [tick, setTick] = useState(offset);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);
  const Icon = CYCLING_ICONS[tick % CYCLING_ICONS.length];
  return (
    <div class="n-ob-cycle" key={tick}>
      <Icon size={28} />
    </div>
  );
}

function StepWelcome(props: {
  isReturning: boolean;
  exposedCount: number;
  favCount: number;
  themeLabel: string;
  modeLabel: string;
  allowedUsersCount: number | null;
}) {
  const { isReturning, exposedCount, favCount, themeLabel, modeLabel, allowedUsersCount } = props;
  return (
    <div class="n-ob-step n-ob-step--welcome">
      <div class="n-ob-step__col">
        <div class="n-ob__eyebrow">Bienvenue chez Nido</div>
        <h1 class="n-ob__h1">
          Une maison
          <br />
          qui <em>vous ressemble</em>.
        </h1>
        <p class="n-ob__lead">
          Nido transforme votre Home Assistant en un compagnon doux et familier.
          Pas de jargon, pas de YAML — juste votre maison, posée joliment sur l'écran.
        </p>

        {isReturning ? (
          <div class="n-ob-recap">
            <div class="n-ob__eyebrow n-ob__eyebrow--accent">Configuration actuelle</div>
            <div class="n-ob-recap__grid">
              <RecapCard label="Exposées" value={exposedCount} />
              <RecapCard label="Favoris" value={favCount} accent />
              <RecapCard label="Ambiance" value={themeLabel} hint={modeLabel} />
              <RecapCard
                label="Utilisateurs"
                value={allowedUsersCount === null ? "—" : allowedUsersCount}
                hint="autorisés"
              />
            </div>
          </div>
        ) : (
          <div class="n-ob-steps-overview">
            {[
              ["01", "Connexion"],
              ["02", "Vos appareils"],
              ["03", "Ambiance"],
              ["04", "Famille"],
            ].map(([num, label]) => (
              <div class="n-ob-steps-overview__item">
                <span class="n-ob__eyebrow">{num}</span>
                <span class="n-ob-steps-overview__label">{label}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div class="n-ob-welcome-illus" aria-hidden="true">
        <svg class="n-ob-welcome-illus__bg" viewBox="0 0 420 420">
          <circle cx="210" cy="210" r="200" fill="none" stroke="var(--ink-4)" stroke-width="1" stroke-dasharray="2 6" />
          <circle cx="210" cy="210" r="160" fill="none" stroke="var(--ink-4)" stroke-width="1" />
          <circle cx="210" cy="210" r="120" fill="var(--bg-card)" stroke="var(--ink-4)" stroke-width="1" />
          <g class="breathe-1">
            <rect x="150" y="150" width="120" height="120" rx="24" fill="var(--accent)" />
            <circle cx="210" cy="210" r="14" fill="var(--bg-shell)" />
          </g>
        </svg>
        <div class="n-ob-welcome-illus__corner n-ob-welcome-illus__corner--tl">
          <CyclingIcon offset={0} intervalMs={2200} />
        </div>
        <div class="n-ob-welcome-illus__corner n-ob-welcome-illus__corner--tr">
          <CyclingIcon offset={3} intervalMs={2600} />
        </div>
        <div class="n-ob-welcome-illus__corner n-ob-welcome-illus__corner--bl">
          <CyclingIcon offset={7} intervalMs={2400} />
        </div>
        <div class="n-ob-welcome-illus__corner n-ob-welcome-illus__corner--br">
          <CyclingIcon offset={10} intervalMs={2800} />
        </div>
      </div>
    </div>
  );
}

function RecapCard(props: { label: string; value: number | string; hint?: string; accent?: boolean }) {
  return (
    <div class={`n-ob-recap__card ${props.accent ? "is-accent" : ""}`}>
      <div class="n-ob__eyebrow">{props.label}</div>
      <div class="n-ob-recap__value">{props.value}</div>
      {props.hint && <div class="n-ob-recap__hint">{props.hint}</div>}
    </div>
  );
}

/* ─── Step 1 — Connection HA ─── */
function StepConnect({ entitiesCount, areasCount }: { entitiesCount: number; areasCount: number }) {
  const [status, setStatus] = useState<"scanning" | "found" | "connected">("scanning");
  useEffect(() => {
    const t1 = setTimeout(() => setStatus("found"), 1100);
    const t2 = setTimeout(() => setStatus("connected"), 2200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div class="n-ob-step n-ob-step--connect">
      <div class="n-ob-step__col">
        <div class="n-ob__eyebrow">Étape 1 · Connexion</div>
        <h1 class="n-ob__h1">
          On cherche votre
          <br />
          <em>Home Assistant</em>.
        </h1>
        <p class="n-ob__lead">
          Nido lit ce que Home Assistant expose déjà. Aucune donnée ne sort de chez vous.
        </p>
        <div class="n-ob-pill-card">
          <span class="n-icon-bubble" style={{ color: "var(--accent-deep)", background: "var(--accent-soft)" }}>
            <IconShieldCheck size={18} />
          </span>
          <div>
            <div class="n-ob-pill-card__title">Local-first</div>
            <div class="n-ob-pill-card__hint">Connexion directe · Pas de cloud</div>
          </div>
        </div>
      </div>

      <div class="n-ob-step__illus n-ob-connect">
        <svg viewBox="0 0 380 380" width="320" height="320">
          {[1, 2, 3].map((i) => (
            <circle
              cx="190"
              cy="190"
              r="60"
              fill="none"
              stroke="var(--accent)"
              stroke-width="1.5"
              class="n-ob-scan-ring"
              style={{ animationDelay: `${i * 0.6}s` }}
            />
          ))}
          <circle cx="190" cy="190" r="68" fill="var(--bg-card)" stroke="var(--ink-4)" stroke-width="1.5" />
          <circle
            cx="190"
            cy="190"
            r="48"
            fill={status === "connected" ? "var(--positive)" : "var(--accent)"}
            class="breathe-2"
          />
          {status === "connected" && (
            <path
              d="M178 188l8 8 16-16"
              fill="none"
              stroke="var(--bg-shell)"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          )}
        </svg>
        <div class="n-ob-status-pill">
          <span class={`n-ob-status-pill__dot is-${status}`} />
          <span class="n-ob-status-pill__label">
            {status === "scanning" && "Recherche en cours…"}
            {status === "found" && "Home Assistant trouvé"}
            {status === "connected" &&
              `Connecté · ${areasCount} pièce${areasCount > 1 ? "s" : ""} · ${entitiesCount} entité${entitiesCount > 1 ? "s" : ""}`}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── Step 2 — Entities ─── */
function StepEntities(props: {
  entities: ResolvedEntity[];
  exposed: Set<string>;
  favs: Set<string>;
  onToggleExpose: (id: string) => void;
  onToggleFav: (id: string) => void;
}) {
  const { entities, exposed, favs, onToggleExpose, onToggleFav } = props;

  const groups = useMemo(() => {
    const map = new Map<string, ResolvedEntity[]>();
    for (const e of entities) {
      if (!PICKABLE_DOMAINS.includes(e.domain)) continue;
      if (!map.has(e.domain)) map.set(e.domain, []);
      map.get(e.domain)!.push(e);
    }
    return Array.from(map.entries()).sort((a, b) => b[1].length - a[1].length);
  }, [entities]);

  const [activeDomain, setActiveDomain] = useState<string>(groups[0]?.[0] ?? "light");
  const [query, setQuery] = useState("");
  const active = groups.find(([d]) => d === activeDomain) ?? groups[0];
  const totalExposed = exposed.size;
  const totalAvailable = entities.filter((e) => PICKABLE_DOMAINS.includes(e.domain)).length;
  const q = query.trim().toLowerCase();
  const filteredItems = active
    ? q
      ? active[1].filter(
          (e) =>
            (e.friendly_name ?? "").toLowerCase().includes(q) ||
            e.entity_id.toLowerCase().includes(q),
        )
      : active[1]
    : [];

  return (
    <div class="n-ob-step n-ob-step--entities">
      <aside class="n-ob-ent__rail">
        <div class="n-ob__eyebrow">Étape 2 · Vos appareils</div>
        <div class="n-ob-ent__count">
          <span class="n-ob-ent__count-num">{totalExposed}</span>
          <span class="n-ob-ent__count-sep"> / {totalAvailable}</span>
        </div>
        <div class="n-ob__hint" style={{ marginBottom: 16 }}>
          {totalExposed === 0
            ? "Aucun appareil exposé pour l'instant"
            : `appareil${totalExposed > 1 ? "s" : ""} exposé${totalExposed > 1 ? "s" : ""}`}
        </div>
        <div class="n-ob-ent__list">
          {groups.map(([domain, items]) => {
            const meta = DOMAIN_META[domain];
            const Icon = meta.Icon;
            const picked = items.filter((e) => exposed.has(e.entity_id)).length;
            const isActive = domain === activeDomain;
            return (
              <button
                type="button"
                class={`n-ob-ent__rail-row ${isActive ? "is-active" : ""}`}
                onClick={() => setActiveDomain(domain)}
              >
                <span class="n-ob-ent__rail-icon">
                  <Icon size={15} />
                </span>
                <span class="n-ob-ent__rail-label">{meta.label}</span>
                <span class="n-ob-ent__rail-count">
                  {picked}/{items.length}
                </span>
              </button>
            );
          })}
        </div>
      </aside>

      <section class="n-ob-ent__main">
        {active && (
          <>
            <div class="n-ob-ent__head">
              <div>
                <div class="n-ob__eyebrow">{active[1].length} disponibles</div>
                <h3 class="n-ob-ent__title">{DOMAIN_META[active[0]].label}</h3>
              </div>
              <div class="n-ob-ent__head-actions">
                <button
                  type="button"
                  class="n-pill-btn n-pill-btn--ghost"
                  onClick={() => filteredItems.forEach((e) => !exposed.has(e.entity_id) && onToggleExpose(e.entity_id))}
                >
                  Tout exposer
                </button>
                <button
                  type="button"
                  class="n-pill-btn n-pill-btn--ghost"
                  onClick={() => filteredItems.forEach((e) => exposed.has(e.entity_id) && onToggleExpose(e.entity_id))}
                >
                  Tout retirer
                </button>
              </div>
            </div>
            <div class="n-ob-ent__search">
              <span class="n-ob-ent__search-icon" aria-hidden="true"><IconSearch size={14} /></span>
              <input
                type="text"
                class="n-ob-ent__search-input"
                value={query}
                onInput={(ev) => setQuery((ev.target as HTMLInputElement).value)}
                placeholder={`Rechercher dans ${DOMAIN_META[active[0]].label.toLowerCase()}…`}
                aria-label="Rechercher une entité"
              />
              {query && (
                <button
                  type="button"
                  class="n-ob-ent__search-clear"
                  onClick={() => setQuery("")}
                  aria-label="Effacer la recherche"
                >
                  <IconX size={12} />
                </button>
              )}
            </div>
            <div class="n-ob-ent__grid">
              {filteredItems.length === 0 && (
                <div class="n-ob-ent__empty">
                  Aucune entité ne correspond à « {query} »
                </div>
              )}
              {filteredItems.map((e) => {
                const isExposed = exposed.has(e.entity_id);
                const isFav = favs.has(e.entity_id);
                const Icon = DOMAIN_META[e.domain].Icon;
                return (
                  <div
                    class={`n-ob-ent-card ${isExposed ? "is-exposed" : ""}`}
                    onClick={() => onToggleExpose(e.entity_id)}
                  >
                    <span class={`n-ob-ent-card__icon ${isExposed ? "is-on" : ""}`}>
                      <Icon size={16} />
                    </span>
                    <div class="n-ob-ent-card__body">
                      <div class="n-ob-ent-card__name">{e.friendly_name}</div>
                      <div class="n-ob-ent-card__id">{e.entity_id}</div>
                    </div>
                    <button
                      type="button"
                      class={`n-ob-ent-card__star ${isFav ? "is-fav" : ""}`}
                      aria-label={isFav ? "Retirer des favoris" : "Ajouter aux favoris"}
                      onClick={(ev) => {
                        ev.stopPropagation();
                        onToggleFav(e.entity_id);
                      }}
                    >
                      {isFav ? <IconStarFilled size={14} /> : <IconStar size={14} />}
                    </button>
                    <span class={`n-ob-ent-card__check ${isExposed ? "is-on" : ""}`}>
                      {isExposed && <IconCheck size={12} stroke={2.4} />}
                    </span>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </section>
    </div>
  );
}

/* ─── Step 3 — Theme ─── */
function StepTheme(props: {
  theme: ThemeName;
  mode: ThemeMode;
  userName: string;
  onPick: (theme: ThemeName, mode: ThemeMode) => void;
}) {
  const { theme, mode, userName, onPick } = props;
  const active = THEME_DETAILS[theme];

  return (
    <div class="n-ob-step n-ob-step--theme">
      <div class="n-ob-step__col">
        <div class="n-ob__eyebrow">Étape 3 · Ambiance</div>
        <h1 class="n-ob__h1">
          Quelle ambiance
          <br />
          <em>vous va ?</em>
        </h1>
        <p class="n-ob__lead">
          Vous pourrez en changer à tout moment. Chaque thème existe en clair et en sombre.
        </p>

        <div class="n-ob-theme__grid">
          {THEMES.map((t) => {
            const d = THEME_DETAILS[t];
            return (
              <button
                type="button"
                class={`n-ob-theme__tile ${theme === t ? "is-active" : ""}`}
                onClick={() => onPick(t, mode)}
              >
                <div class="n-ob-theme__swatches">
                  {d.swatches.map((c, i) => (
                    <span
                      class="n-ob-theme__swatch"
                      style={{
                        background: c,
                        borderRadius: i === 0 ? "8px 0 0 8px" : i === 2 ? "0 8px 8px 0" : "0",
                      }}
                    />
                  ))}
                </div>
                <div class="n-ob-theme__name">{d.name}</div>
                <div class="n-ob-theme__desc">{d.desc}</div>
              </button>
            );
          })}
        </div>

        <div class="n-ob-theme__modes">
          <button
            type="button"
            class={`n-ob-theme__mode ${mode === "light" ? "is-active" : ""}`}
            onClick={() => onPick(theme, "light")}
          >
            <IconSun size={14} /> Clair
          </button>
          <button
            type="button"
            class={`n-ob-theme__mode ${mode === "dark" ? "is-active" : ""}`}
            onClick={() => onPick(theme, "dark")}
          >
            <IconMoon size={14} /> Sombre
          </button>
        </div>
      </div>

      <div
        class="n-ob-step__illus n-ob-preview"
        style={{ background: mode === "dark" ? "#1f1812" : active.swatches[0] }}
      >
        <div class="n-ob__eyebrow" style={{ opacity: 0.6 }}>Aperçu</div>
        <div
          class="n-ob-preview__greet"
          style={{ color: mode === "dark" ? "#f4ede2" : "#1a1410" }}
        >
          Bonsoir, <em>{userName}</em>
        </div>
        <div class="n-ob-preview__cards">
          <div
            class="n-ob-preview__hero pattern-dots"
            style={{ background: active.swatches[1] }}
          >
            <div class="n-ob__eyebrow" style={{ color: "rgba(255,255,255,0.7)" }}>Salon</div>
            <div class="n-ob-preview__hero-title">Plafonnier</div>
            <div class="n-ob-preview__hero-pct">70%</div>
          </div>
          <div class="n-ob-preview__col">
            <div
              class="n-ob-preview__small"
              style={{
                background: mode === "dark" ? "#2a2018" : "#fbf6ec",
                color: mode === "dark" ? "#f4ede2" : "#1a1410",
              }}
            >
              <div class="n-ob-preview__small-val">21°</div>
              <div class="n-ob-preview__small-lbl">Salon</div>
            </div>
            <div
              class="n-ob-preview__small"
              style={{ background: active.swatches[2], color: active.swatches[0] }}
            >
              <div class="n-ob-preview__small-val">♫ Bloom</div>
              <div class="n-ob-preview__small-lbl">En cours</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Step 4 — Family / Users ─── */
function StepFamily(props: {
  hass: HassObject;
  users: HassUser[] | null;
  error: string | null;
  excluded: Set<string>;
  onToggleUser: (id: string) => void;
}) {
  const { hass, users, error, excluded, onToggleUser } = props;

  return (
    <div class="n-ob-step n-ob-step--family">
      <div class="n-ob-step__col">
        <div class="n-ob__eyebrow">Étape 4 · Famille</div>
        <h1 class="n-ob__h1">
          Qui peut
          <br />
          <em>entrer ?</em>
        </h1>
        <p class="n-ob__lead">
          Décochez les utilisateurs Home Assistant qui ne doivent pas voir Nido.
          Ils continueront d'utiliser Home Assistant normalement.
        </p>
        {error && (
          <div class="n-ob__hint" style={{ color: "var(--warning)" }}>
            Liste complète indisponible (besoin d'un compte admin) — votre compte est affiché.
          </div>
        )}
      </div>

      <div class="n-ob-step__illus n-ob-family">
        {users === null ? (
          <div class="n-muted">Chargement des utilisateurs…</div>
        ) : users.length === 0 ? (
          <div class="n-muted">Aucun utilisateur trouvé.</div>
        ) : (
          <div class="n-ob-family__list">
            {users.map((u) => {
              const isAllowed = !excluded.has(u.id);
              const isSelf = u.id === hass.user?.id;
              return (
                <label
                  class={`n-ob-family__row ${isAllowed ? "is-allowed" : "is-excluded"}`}
                >
                  <span class="n-ob-family__avatar" aria-hidden="true">
                    {u.name?.[0]?.toUpperCase() ?? <IconUser size={18} />}
                  </span>
                  <div class="n-ob-family__info">
                    <div class="n-ob-family__name">
                      {u.name}
                      {isSelf && <span class="n-ob-family__self"> · vous</span>}
                    </div>
                    <div class="n-ob-family__role">
                      {u.is_owner ? "Propriétaire" : u.is_admin ? "Administrateur" : "Utilisateur"}
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    class="n-ob-family__toggle"
                    checked={isAllowed}
                    disabled={isSelf}
                    onChange={() => !isSelf && onToggleUser(u.id)}
                    aria-label={isAllowed ? "Autoriser" : "Exclure"}
                  />
                </label>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
