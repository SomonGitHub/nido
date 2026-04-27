# Nido

Dashboard familial pour Home Assistant — un compagnon doux et lisible pour la maison.

## Ce que vous obtenez

- **Onboarding guidé** en 5 étapes : connexion, choix des entités exposées, ambiance, accès famille
- **Quatre ambiances** (Terracotta, Miel, Sauge, Cosy) en mode clair ou sombre
- **Section Favoris + grille de pièces** avec récap température / humidité par pièce
- **Page pièce** dédiée avec filtres par type d'entité
- **Réorganisation drag-and-drop** des cards (favoris, pièces, entités d'une pièce)
- **13 types de widgets** : lumières, volets, prises, capteurs, climat, serrures, aspirateurs, lecteurs média, alarmes, caméras, ventilateurs, scènes, scripts
- **Gestion d'accès** par utilisateur Home Assistant

## Confidentialité

Tout est local : aucune donnée ne sort de votre Home Assistant. La configuration de Nido est stockée dans le `localStorage` de votre navigateur.

## Configuration minimale

Après installation via HACS, ajoutez dans `configuration.yaml` :

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

Redémarrez Home Assistant. Une nouvelle entrée « Nido » apparaît dans la barre latérale.
