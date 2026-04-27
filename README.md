# Nido — Dashboard Home Assistant

> Un compagnon doux et lisible pour votre maison connectée.

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg)](https://github.com/hacs/integration)

Nido est un **custom panel** pour Home Assistant qui transforme vos entités HA en un tableau de bord familial : section Favoris, grille de pièces avec recap température/humidité, page pièce dédiée, drag-and-drop pour réorganiser, 4 thèmes en clair/sombre, onboarding guidé.

## Installation via HACS (custom repository)

1. Dans Home Assistant, ouvrez **HACS → ⋮ (menu) → Dépôts personnalisés**
2. Ajoutez l'URL : `https://github.com/SomonGitHub/nido`
3. Type : **Lovelace** (ou **Frontend / Plugin** selon votre version HACS)
4. Cliquez **Ajouter**, puis cherchez « Nido » dans HACS et **Téléchargez**
5. Ajoutez ceci à votre `configuration.yaml` :

   ```yaml
   panel_custom:
     - name: nido-panel
       sidebar_title: Nido
       sidebar_icon: mdi:home-heart
       url_path: nido
       module_url: /hacsfiles/nido/nido.js
       embed_iframe: false
       require_admin: false
   ```

6. Redémarrez Home Assistant
7. Cliquez sur **Nido** dans la barre latérale → l'onboarding démarre

## Fonctionnalités

| | |
|---|---|
| 🎨 4 ambiances | Terracotta, Miel, Sauge, Cosy — clair et sombre |
| ⭐ Favoris | Mise en avant des entités les plus utilisées |
| 🏠 Pièces | Grille avec recap appareils / actifs / température / humidité |
| 🔍 Page pièce | Filtres par domaine, vue détaillée |
| 🖐️ Drag-and-drop | Réorganisation des cards en direct |
| 👨‍👩‍👧 Multi-utilisateur | Choix des comptes HA autorisés à voir Nido |
| 🧩 14 domaines | light, switch, cover, climate, lock, vacuum, sensor, binary_sensor, media_player, alarm, camera, fan, scene, script |

## Configuration

Toute la configuration se fait **dans l'UI** via le bouton « Personnaliser » :

1. **Bienvenue** — récap de la configuration actuelle
2. **Connexion** — détection auto des pièces et entités HA
3. **Vos appareils** — sélection des entités à exposer + favoris (étoile)
4. **Ambiance** — choix du thème + mode clair/sombre, aperçu live
5. **Famille** — utilisateurs HA autorisés

La configuration est stockée localement dans le navigateur (clés `nido.*`).

## Domaines supportés

`light` · `switch` · `cover` · `binary_sensor` · `climate` · `lock` · `vacuum` · `sensor` · `media_player` · `alarm_control_panel` · `camera` · `fan` · `scene` · `script`

## Développement

Stack : **Preact 10**, **TypeScript 5**, **Vite 6**, **Custom Element + Shadow DOM**.

```bash
npm install
npm run dev          # serveur Vite avec mock hass (port 5173+)
npm run typecheck    # tsc --noEmit
npm run build        # bundle prod → ./nido.js (à la racine)
```

Architecture : voir [CLAUDE.md](CLAUDE.md).

## Publier une nouvelle release

```bash
npm version patch     # ou minor / major
npm run release       # typecheck + build → ./nido.js
git add nido.js nido.js.map package.json
git commit -m "release: v$(node -p \"require('./package.json').version\")"
git push
git push --tags       # déclenche le workflow Release qui crée la GitHub Release
```

## Roadmap

- [x] Palier 0 — squelette + custom element + build
- [x] Palier 1 — chargement HA via `panel_custom`
- [x] Palier 2 — registries (areas + entities) + 1 widget
- [x] Palier 3 — 14 widgets industrialisés
- [x] Palier 4 — favoris + onboarding 5 étapes + drag-and-drop
- [x] Palier 5 — publication HACS

## Licence

[MIT](LICENSE) · © 2026 Simon Vernusse
