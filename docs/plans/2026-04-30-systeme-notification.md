# Plan d'Implémentation du Système de Notification

**But :** Ajouter un système de notification dans Nido basé sur un capteur personnalisé (`sensor.nido_notifications`) pour afficher des alertes riches.

**Architecture :** 
Nous allons écouter les changements d'état du capteur `sensor.nido_notifications` via l'objet `hass.states`. Les attributs contiendront un tableau JSON des notifications. Nous ajouterons un bouton dans la barre supérieure (`nido-topbar__actions` dans `dashboard.tsx`) qui ouvrira un panneau (`NotificationPanel`) affichant la liste.

**Stack Technique :** Preact, TypeScript, CSS (Vanilla), Home Assistant WebSocket API.

---

### Tâche 1 : Ajouter les Icônes pour les Notifications

**Fichiers :**
- Modifier : `src/icons.tsx`

**Étape 1 : Écrire l'implémentation minimale**
Nous avons besoin d'une icône de cloche (`IconBell`) pour le bouton de notification, et des icônes de statuts (`IconInfo`, `IconWarning`, `IconSuccess`).
(Aucun fichier de test car le projet ne contient pas de tests unitaires/composants configurés).

### Tâche 2 : Créer le Composant NotificationPanel

**Fichiers :**
- Créer : `src/components/notification-panel.tsx`
- Modifier : `src/styles.css`

**Étape 1 : Implémentation du Composant**
Ce composant sera une superposition (overlay) similaire au `WeatherPanel` pour afficher une liste d'éléments. Il listera les objets passés en props.

### Tâche 3 : Intégration dans le Tableau de Bord

**Fichiers :**
- Modifier : `src/views/dashboard.tsx`

**Étape 1 : Intégration**
Extraction des notifications depuis `hass.states['sensor.nido_notifications'].attributes.notifications`.
Ajout du bouton avec un "point rouge" ou un compteur s'il y a des nouvelles notifications.
Ouverture du `<NotificationPanel />` au clic.
