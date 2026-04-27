# Nido — Home Assistant Custom Panel

Dashboard familial pour Home Assistant, distribué comme **Custom Panel** (HACS plugin). Bundle JS unique injecté dans HA via `panel_custom` dans `configuration.yaml`.

## Stack

- **Preact 10** + hooks (pas React)
- **Vite 6** en library mode → `dist/nido.js` (ESM, `inlineDynamicImports`)
- **TypeScript 5.7** (strict)
- **Custom Element** `<nido-panel>` avec **Shadow DOM** (isolation totale du CSS HA)
- Aucune dépendance runtime hors `preact`

## Commandes

```bash
npm run dev         # Vite dev server, sert index.html avec mock hass (port 5173/5174)
npm run typecheck   # tsc --noEmit
npm run build       # bundle prod → dist/nido.js
```

## Architecture

```
src/
  nido-panel.ts          # Custom Element <nido-panel>, Shadow DOM, render Preact
  app.tsx                # racine Preact : fetch registries + subscribeEvents
  types.ts               # HassObject, HassEntity, PanelInfo
  core/
    areas.ts             # fetchAreas → callWS("config/area_registry/list")
    entities.ts          # fetchEntityRegistry, fetchDeviceRegistry, resolveEntities, groupByArea
  views/
    dashboard.tsx        # rendu hero + sections par pièce + dispatcher renderWidget()
  widgets/               # 1 fichier = 1 domaine HA
    light.tsx, cover.tsx, switch.tsx, binary-sensor.tsx,
    climate.tsx, lock.tsx, vacuum.tsx,
    sensor.tsx, media-player.tsx, alarm.tsx
  icons.tsx              # SVG inline, 24×24, stroke=currentColor
  tokens.css             # 4 thèmes × 2 modes via :host([data-theme][data-mode])
  styles.css             # composants : .n-card, .n-toggle, .n-slider, ...
```

## Pièges connus

- **Pas de `setAttribute` dans le constructor** d'un Custom Element : `NotSupportedError`. Toujours dans `connectedCallback`. Cf. fix `data-theme`/`data-mode` qui causait écran noir.
- **`useEffect([hass])` = fuite** : HA pousse un nouvel objet `hass` à chaque state change → refetch des 3 registries en boucle. Utiliser `[hass != null]` (mount-once) + `subscribeEvents` aux events `*_registry_updated` pour rafraîchir.
- **`resolveEntities` dans `useMemo`** avec deps `[hass?.states, registry, devices]` — sinon recréé à chaque render → pression GC.
- **Cache HA agressif** : après un nouveau `nido.js`, charger avec `?v=N` dans `panel_custom.module_url` (sinon vieux bundle servi).
- **`custom_components/` ≠ `www/`** : Nido est un frontend JS, va dans `<config>/www/nido/nido.js`, servi à `/local/nido/nido.js`. `custom_components/` est réservé aux intégrations Python.

## Pattern widget

Tout widget reçoit :
```ts
interface WidgetProps {
  hass: HassObject;
  entity: ResolvedEntity;       // entity_id, domain, area_id, friendly_name, state
  roomLabel?: string;            // nom de la pièce
  breatheVariant?: 1|2|3|4;     // désync animation breathe
}
```

Convention CSS :
- `data-on="true"` quand actif → halo + accent
- `data-alert="true"` pour situations critiques (fumée, eau, alarme déclenchée)
- `data-status` pour binary_sensor (on/off/indisponible)
- Classe `breathe-{1..4}` pour animation pulsée désynchronisée

## Ajouter un domaine

1. Créer `src/widgets/<domain>.tsx` (suivre `light.tsx` ou `switch.tsx`)
2. Ajouter au dispatcher dans `src/views/dashboard.tsx` (`renderWidget`)
3. Ajouter au `SUPPORTED_DOMAINS` Set dans le même fichier
4. Étendre le mock dans `index.html` (states + entityRegistry + handlers `callService`)
5. Ajouter icônes dans `src/icons.tsx` si besoin
6. Ajouter CSS spécifique dans `src/styles.css`

## Domaines supportés (10/11)

light, cover, switch, binary_sensor, climate, lock, vacuum, sensor, media_player, alarm_control_panel.
**Reste** : camera, fan, scene/script (Lot 4).

## Déploiement HA

```yaml
# configuration.yaml
panel_custom:
  - name: nido-panel
    sidebar_title: Nido
    sidebar_icon: mdi:home-heart
    url_path: nido
    module_url: /local/nido/nido.js?v=5
    embed_iframe: false
    require_admin: false
    config: {}
```

Copier `dist/nido.js` → `<config>/www/nido/nido.js`, **incrémenter `?v=N`** à chaque deploy, redémarrer HA (ou rafraîchir pour les changements front uniquement).

## Style et ton du code

- Pas de commentaires dans le code sauf si le **pourquoi** est non-évident.
- Pas de docstrings multi-lignes.
- Préférer `class` (pas `className`) — c'est Preact.
- Icônes : SVG inline 24×24, `stroke="currentColor"`, jamais d'images binaires.
- Animations respectent `prefers-reduced-motion`.
