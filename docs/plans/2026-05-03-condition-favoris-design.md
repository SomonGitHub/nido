# Design : Visibilité dynamique des favoris par état

Ce document décrit l'implémentation du masquage automatique des capteurs binaires inactifs dans la section "Favoris", tout en préservant l'intégrité de la liste lors du réordonnancement.

## Objectifs

*   **Désencombrement** : Masquer les capteurs binaires (portes, mouvement, etc.) lorsqu'ils sont à l'état `off` dans les favoris.
*   **Persistance** : Ne pas supprimer ces capteurs de la configuration ; ils doivent réapparaître dès qu'ils passent à l'état `on`.
*   **Intégrité du Drag & Drop** : Permettre de réorganiser les favoris visibles sans perdre ou altérer la position des favoris masqués.

## Changements Proposés

### 1. Logique de Filtrage (Dashboard.tsx)

Nous allons modifier le rendu de la section favoris dans `src/views/dashboard.tsx`. Au lieu de filtrer la liste de données en amont, nous filtrerons au moment du rendu pour que le hook de réordonnancement (`useDragReorder`) conserve la connaissance de la liste complète.

#### Règle de visibilité
Une entité favorite est affichée si :
*   Elle n'est pas un `binary_sensor`.
*   OU elle est un `binary_sensor` ET son état est `on`.

### 2. Adaptation du Mode "Hero" et des Variantes

Le premier élément **visible** doit conserver son statut "Hero" (affichage large). Nous devrons donc utiliser un compteur local au rendu pour identifier le premier élément réellement affiché, plutôt que de se baser sur l'index brut de la liste complète.

### 3. Préservation des Favoris Masqués

En passant la liste complète des favoris à `useDragReorder`, mais en n'affichant que les éléments "actifs", le système fonctionnera ainsi :
*   Le "Drag & Drop" ne pourra cibler que les cartes visibles dans le DOM.
*   Lors du relâchement (drop), le nouvel ordre sera calculé sur la liste complète.
*   Les éléments masqués resteront à leur position relative dans le tableau, garantissant qu'aucune donnée n'est perdue lors de la sauvegarde.

## Détails Techniques

### Fichiers impactés
*   `src/views/dashboard.tsx` : Modification de la boucle de rendu des favoris et de la logique du compteur d'affichage.

### Exemple de logique de rendu
```tsx
let visibleCount = 0;
{favoriteEntities.map((e) => {
  const isHiddenBinary = e.domain === "binary_sensor" && e.state.state === "off";
  if (isHiddenBinary) return null;

  visibleCount++;
  const isHero = visibleCount === 1;
  // ... rendu du widget
})}
```

## Vérification

1.  **Test de masquage** : Ajouter un capteur binaire (ex: porte) aux favoris. Vérifier qu'il disparaît quand la porte est fermée (`off`) et réapparaît quand elle s'ouvre (`on`).
2.  **Test de persistance** : Ajouter une lumière et un capteur fermé. Réorganiser les favoris. Vérifier (via la console ou les réglages) que le capteur masqué est toujours présent dans la liste `favorites`.
3.  **Test Hero** : Vérifier que si le premier favori de la liste est masqué, c'est le deuxième (s'il est visible) qui prend l'apparence "Hero".
