# Nido — Home Assistant Custom Panel

Dashboard familial pour Home Assistant, distribué comme **Custom Panel** via HACS (custom repository, catégorie Lovelace/Plugin). Bundle JS unique injecté dans HA via `panel_custom`.

Repo public : https://github.com/SomonGitHub/nido

## Stack

- **Preact 10** + hooks (pas React)
- **Vite 6** en library mode → `./nido.js` à la racine du repo (ESM, `inlineDynamicImports`)
- **TypeScript 5.7** (strict)
- **Custom Element** `<nido-panel>` avec **Shadow DOM** (isolation totale du CSS HA)
- Aucune dépendance runtime hors `preact`

## Commandes

```bash
npm run dev         # Vite dev server, sert index.html avec mock hass (port 5173+)
npm run typecheck   # tsc --noEmit
npm run build       # bundle prod → ./nido.js (à la racine, pour HACS)
npm run release     # typecheck + build (avant tag/push)
```

## Architecture

```
nido-dashboard/                # = racine du repo HACS
  hacs.json                    # manifeste HACS (filename: nido.js)
  nido.js                      # bundle prod (committed, lu par HACS)
  README.md, info.md, LICENSE  # docs HACS
  .github/workflows/
    validate.yml               # hacs/action + typecheck + build sur push
    release.yml                # sur push de tag v*, attache nido.js à la GitHub Release
  index.html                   # dev only, mock hass complet pour tous les domaines
  src/
    nido-panel.ts              # Custom Element <nido-panel>, Shadow DOM, applique theme + render Preact
    app.tsx                    # racine : fetch registries, gère view (dashboard/room),
                               #   onboarding overlay, état exposed/favorites/excludedUsers
    types.ts                   # HassObject, HassEntity, PanelInfo
    core/
      areas.ts                 # fetchAreas → callWS("config/area_registry/list")
                               #   fetchFloors → "config/floor_registry/list" ([] si HA < 2024.4)
      floor-plan.ts            # groupAreasByFloor + autoLayout (plan en cases de grille)
      entities.ts              # fetch + resolveEntities + groupByArea
                               #   isEntityActive(e) : "actif" par domaine
                               #   extractRoomStats(es) : temp/humidity/illuminance par pièce
      storage.ts               # localStorage (clés nido.*) : favorites, exposed,
                               #   excludedUsers, roomsOrder, roomEntitiesOrder, theme, mode
      use-room-layout.ts       # hook useRoomLayout() : "phone" | "touch" | "desktop"
                               #   matchMedia, pilote la mise en page des cartes pièce
      drag-reorder.ts          # hook useDragReorder<T> + applyOrder<T>
                               #   pointer events, threshold 6px clic-vs-drag,
                               #   skip drag sur INPUT/BUTTON/role=switch
    views/
      shared.tsx               # pickAreaIcon(name), DOMAIN_LABEL, DOMAIN_ICON
      dashboard.tsx            # hero + Favoris (widgets) + Pièces (RoomCard grid)
      room-detail.tsx          # back + hero + stats panel + filters pills + widgets grid
      floor-plan.tsx           # vue plan : étages, calques, zoom/pan, fiche pièce (3 variantes)
    components/
      onboarding.tsx           # overlay plein écran 5 étapes (Welcome/Connect/Entities/Theme/Family)
      weather-panel.tsx        # panneau détail météo (prévisions, Météo France sensors : pluie, alertes, UV)
      notification-panel.tsx   # panneau notifications Nido (sensor.nido_notifications, dismiss via fire_event)
    widgets/                   # 1 fichier = 1 domaine HA (15 fichiers)
      light, cover, switch, binary-sensor, climate, lock, vacuum,
      sensor, media-player, alarm, camera, fan, scene-script, weather
    icons.tsx                  # SVG inline 24×24, stroke=currentColor (40+ icônes)
    logo.png                   # logo Nido (96px)
    logo-data.ts               # logo en base64 data-URL (auto-generated)
    tokens.css                 # 4 thèmes × 2 modes via :host([data-theme][data-mode])
    styles.css                 # composants : .n-card, .n-toggle, .n-slider, drag states, ...
```

## Modèle mental utilisateur

L'utilisateur configure Nido via **l'onboarding** (= aussi le panneau Settings, accessible via "Personnaliser") :

1. **Bienvenue** — récap (sur retour) ou présentation des étapes
2. **Connexion** — animation cosmétique, affiche les vraies stats (X pièces · Y entités)
3. **Vos appareils** — choisit quelles entités sont **exposées** (visibles dans Nido) et lesquelles sont **favorites** (étoile). Par défaut **rien n'est exposé**
4. **Ambiance** — thème (4) + mode (clair/sombre), aperçu live mini-dashboard
5. **Famille** — coche/décoche les utilisateurs HA autorisés à voir Nido (`config/auth/list`, fallback sur `hass.user` si non-admin)

**Deux niveaux de filtrage** :
- `exposed` (Set d'entity_id) — détermine ce qui apparaît dans le dashboard
- `favorites` ⊂ `exposed` — sous-ensemble mis en avant en haut

**Ordre persisté** :
- `nido.favorites` — array ordonné (insertion = ordre)
- `nido.roomsOrder` — array d'`area_id` (pièces non-listées appendées en fin via `applyOrder`)
- `nido.roomEntitiesOrder` — `Record<area_id, entity_id[]>` (par pièce)
- `nido.lastNotificationRead` — ISO date, dernière lecture des notifications

Drag-and-drop natif sur les 3 (Pointer Events). Sur `RoomDetail` filtré, le reorder calcule un `newFull` qui préserve la position des items hors filtre.

## Cartes pièce — trois mises en page

`useRoomLayout()` choisit la mise en page, `RoomCard` rend deux arbres JSX et le reste
est piloté par les classes `nido-room-card--{phone,touch,desktop}` / `nido-rooms-grid--*` :

| Layout | Condition | Rendu |
|---|---|---|
| `phone` | `(max-width: 599px)` | ligne de liste 96 px, 1 colonne, mesures + puces sur une rangée |
| `touch` | `(pointer: coarse) and (min-width: 600px)` | carte 210 px+, mesures libellées, actions rapides, cibles 44 px |
| `desktop` | sinon | carte 170 px, mesures avec icônes, pas d'actions |

Le test est le **pointeur**, pas la largeur : une tablette murale en paysage fait 1280 px
et passerait pour un desktop. La vue Echo Show (`useCompactLayout`) est indépendante et
prioritaire — elle remplace tout le dashboard.

Contenu commun : puces d'état (`summarizeRoom` → lumières allumées, volets ouverts, média
en lecture, alertes binary_sensor window/door/moisture/smoke/gas) + bandeau température /
humidité / luminosité (`extractRoomStats`). Les actions rapides appellent `light.turn_on|off`
et `cover.open|close_cover` sur les entités **exposées** de la pièce, avec `stopPropagation`
pour ne pas déclencher l'ouverture de la pièce.

## Vue plan

La section Pièces bascule entre **Cartes** et **Plan** (`nido.roomsView`, par appareil ;
sans choix, la tablette `touch` ouvre sur le plan). La vue compacte Echo Show a une page
**Plan** dans son rail. Un seul composant `FloorPlan`, trois variantes :

| Variante | Où | Rendu |
|---|---|---|
| `wide` | tablette + desktop | plan + fiche pièce à droite + résumé d'étage |
| `phone` | `(max-width: 599px)` | plan 300 px, zoom en surimpression, fiche dessous |
| `compact` | Echo Show | rail (étages, calques, pièce choisie + Ouvrir) + plan |

- **Étages** : registre HA (`floor_id` des pièces). Pièces sans étage → onglet « Autres
  pièces » (ou « Maison » s'il n'y a aucun étage).
- **Placement** : `autoLayout` range les pièces en rangées de 18 cases, largeur selon le
  nombre d'entités exposées. Coordonnées en cases, jamais en pixels. L'éditeur (étape 2)
  stockera des `PlanRect[]` par pièce côté HA (topic MQTT retain, comme `kids-sync`).
- **Calques** (`nido.planLayers`) : Température (remplissage `oklch` piloté par
  `--measure-h/c` + `--plan-fill-l/cf` selon le mode), Lumières (halo + compteur), Ouvrants
  (pastille « Ouverte · 25 min » ; les alertes fumée/eau/gaz s'affichent toujours).
- **Zoom** : pincement, Ctrl/⌘ + molette, double-clic, boutons + / − / Ajuster. Le niveau de
  détail suit la taille d'une case en pixels (`LOD_LABELS` 28, `LOD_DETAIL` 50) ; en vue
  d'ensemble, une pièce assez grande garde son nom.
- Le déplacement ne capture le pointeur qu'au-delà de 6 px : capturer dès le `pointerdown`
  enverrait le `click` au viewport au lieu de la pièce.

## Routing (sans router)

App tient un state `view` :
```ts
{ kind: "dashboard" } | { kind: "room"; areaId: string }
```
Dashboard → clic card pièce → `setView({ kind: "room", areaId })` → RoomDetail. Bouton retour → `{ kind: "dashboard" }`. L'onboarding est un overlay en parallèle (z-index 1000).

Si `hass.user.id ∈ excludedUsers`, l'App affiche un écran "Nido n'est pas pour vous" à la place.

## Météo

Le widget `weather` s'affiche comme les autres domaines dans le grid. En plus, un `WeatherPill` compact apparaît en haut du dashboard (température + icône condition). Cliquer ouvre le `WeatherPanel` (overlay) qui affiche :
- Prévisions jour/heure via `weather/get_forecasts` (service HA)
- Capteurs Météo France détectés automatiquement : pluie prochaine (`*_next_rain`), alertes météo (`*_weather_alert`), UV (`*_uv`)
- `describeCondition(state)` exportée depuis `weather.tsx` : mapping condition HA → label FR + icône

## Notifications

Nido lit `sensor.nido_notifications` (attribut `notifications: NidoNotification[]`). Chaque notification a `id`, `title`, `message`, `type` (info/warning/success), `timestamp`. Le dashboard affiche une cloche avec badge si `notifications` contient des entrées plus récentes que `nido.lastNotificationRead`. Le panneau `NotificationPanel` permet de consulter et dismiss (via `fire_event` → `nido_notification_event`).

## Pièges connus

- **Pas de `setAttribute` dans le constructor** d'un Custom Element : `NotSupportedError`. Toujours dans `connectedCallback`.
- **`useEffect([hass])` = fuite** : HA pousse un nouvel objet `hass` à chaque state change → refetch des 3 registries en boucle. Utiliser `[hass != null]` (mount-once) + `subscribeEvents` aux events `*_registry_updated` pour rafraîchir.
- **`resolveEntities` dans `useMemo`** avec deps `[hass?.states, registry, devices]` — sinon recréé à chaque render.
- **Cache HACS** : HACS sert `nido.js` depuis `/hacsfiles/nido/`. À chaque release, HACS télécharge la dernière. Pas de `?v=N` à gérer côté utilisateur.
- **`box-sizing` sur cards** : `.n-card` est `content-box` par défaut → si on met `width: 100%` + padding, ça déborde et mange le grid `gap`. Soit pas de `width: 100%`, soit `box-sizing: border-box` explicite. Cf. fix room-card et drag-item.
- **`flex: 1` hérité** : `.n-pill-btn` a `flex: 1` (utile dans les actions de vacuum). Dans une barre de filtres `flex-wrap: nowrap`, override avec `flex: 0 0 auto; white-space: nowrap`.
- **HACS scope `workflow`** : un PAT classique sans scope `workflow` ne peut pas pousser des fichiers `.github/workflows/*`. Le scope est nécessaire au premier push de la CI.
- **Re-author le commit initial** : `git update-ref -d HEAD` puis `git commit` (pas `git reset --soft HEAD~1`, qui échoue sur le premier commit).

## Pattern widget

Tout widget reçoit :
```ts
interface WidgetProps {
  hass: HassObject;
  entity: ResolvedEntity;       // entity_id, domain, area_id, friendly_name, state
  roomLabel?: string;            // nom de la pièce
  breatheVariant?: 1|2|3|4;     // désync animation breathe
  hero?: boolean;                // light uniquement, format XL
}
```

Convention CSS :
- `data-on="true"` quand actif → halo + accent
- `data-alert="true"` pour situations critiques (fumée, eau, alarme déclenchée)
- `data-status` pour binary_sensor (on/off/indisponible)
- Classe `breathe-{1..4}` pour animation pulsée désynchronisée
- Eviter `width: 100%` sur la card racine, ou ajouter `box-sizing: border-box`

## Ajouter un domaine

1. Créer `src/widgets/<domain>.tsx` (suivre `light.tsx` pour interactif, `binary-sensor.tsx` pour read-only)
2. Ajouter au dispatcher `renderWidget` dans `src/views/dashboard.tsx` ET `src/views/room-detail.tsx`
3. Ajouter au `SUPPORTED_DOMAINS` Set dans `dashboard.tsx`
4. Ajouter au `PICKABLE_DOMAINS` + `DOMAIN_META` dans `src/components/onboarding.tsx` (étape 2 sélection entités)
5. Ajouter au `DOMAIN_LABEL` + `DOMAIN_ICON` dans `src/views/shared.tsx` (filtres pièce)
6. Étendre le mock dans `index.html` (states + entityRegistry + handlers `callService`)
7. Ajouter icônes dans `src/icons.tsx` si besoin
8. Ajouter CSS spécifique dans `src/styles.css`

## Domaines supportés (15)

`light` · `switch` · `cover` · `binary_sensor` · `climate` · `lock` · `vacuum` · `sensor` · `media_player` · `alarm_control_panel` · `camera` · `fan` · `scene` · `script` · `weather`

## Drag & drop

`useDragReorder<T>(items, getId, onReorder)` retourne `{ containerRef, itemPropsFor, isDragging }`.

- Spread `itemPropsFor(id)` sur chaque card draggable (data attributes + onPointerDown)
- Attache `containerRef` au grid parent
- Threshold **6 px** : clic en dessous, drag au-delà
- Skip drag si target est `INPUT/BUTTON/SELECT/TEXTAREA/A` ou `role=switch/button/slider` ou ancêtre `[data-no-drag]`
- Suppress click suivant un drag (évite navigation accidentelle)
- Pointer events bubblent à travers Shadow DOM (`composed: true`), donc listeners sur `document` OK

Dans `RoomDetail`, on passe la liste **filtrée** au hook ; sur reorder, on reconstruit la liste full préservant les positions hors filtre.

## Déploiement

**Via HACS (custom repository)** :
- HACS → ⋮ → Dépôts personnalisés → `https://github.com/SomonGitHub/nido` type Lovelace → installer
- `panel_custom` dans `configuration.yaml` (cf. README.md), `module_url: /hacsfiles/nido/nido.js`
- Restart HA

**Sortir une nouvelle release** :
```bash
npm version patch          # bump version
npm run release            # typecheck + build → ./nido.js
git add nido.js nido.js.map package.json
git commit -m "release: v$(node -p \"require('./package.json').version\")"
git push
git push --tags            # release.yml crée la GitHub Release et attache nido.js
```

## Style et ton du code

- Pas de commentaires dans le code sauf si le **pourquoi** est non-évident.
- Pas de docstrings multi-lignes.
- Préférer `class` (pas `className`) — c'est Preact.
- Icônes : SVG inline 24×24, `stroke="currentColor"`, jamais d'images binaires.
- Animations respectent `prefers-reduced-motion`.
- localStorage : préfixe `nido.*` toujours, parsing safe (try/catch JSON), fallback `[]`/`{}`.
