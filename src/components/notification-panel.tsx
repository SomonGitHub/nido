import { IconBell, IconX, IconInfo, IconAlertTriangle, IconSuccess } from "../icons";
import type { HassObject } from "../types";

export interface NidoNotification {
  id: string;
  title: string;
  message: string;
  type: "info" | "warning" | "success";
  timestamp: string;
}

interface NotificationPanelProps {
  hass: HassObject;
  notifications: NidoNotification[];
  onClose: () => void;
}

export function NotificationPanel({ hass, notifications, onClose }: NotificationPanelProps) {

  // Fonction de suppression améliorée avec gestion d'erreur
  const dismissNotification = async (id: string) => {
    if (!hass) return;

    try {
      // Envoi de l'événement vers Home Assistant
      await (hass as any).connection.sendMessagePromise({
        type: "fire_event",
        event_type: "nido_notification_event",
        event_data: { action: "dismiss", id: id }
      });
    } catch (err) {
      console.warn("Échec de la suppression via WebSocket, tentative via service...", err);

      // Fallback : Appel de service si la connexion WebSocket directe est capricieuse
      try {
        await hass.callService("script", "nido_dismiss_notification", { id });
      } catch (err2) {
        console.error("Toutes les méthodes de suppression ont échoué", err2);
      }
    }
  };

  return (
    <div class="nido-notification-panel">
      <div class="nido-notification-panel__backdrop" onClick={onClose} />
      <div class="nido-notification-panel__content">
        <header class="nido-notification-panel__header">
          <h2>Notifications</h2>
          <button
            type="button"
            class="nido-notification-panel__close"
            onClick={onClose}
            aria-label="Fermer"
          >
            <IconX size={20} />
          </button>
        </header>

        <div class="nido-notification-panel__scroll">
          {notifications.length === 0 ? (
            <div class="nido-notification-empty">
              <div class="nido-notification-empty__icon">
                <IconBell size={48} />
              </div>
              <p>Aucune notification pour le moment.</p>
            </div>
          ) : (
            <div class="nido-notification-list">
              {[...notifications].reverse().map((n) => {
                const Icon =
                  n.type === "warning" ? IconAlertTriangle : n.type === "success" ? IconSuccess : IconInfo;
                const colorClass = `nido-notification-item--${n.type}`;
                const date = new Date(n.timestamp);
                const timeStr = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

                return (
                  <div key={n.id} class={`nido-notification-item ${colorClass}`}>
                    <div class="nido-notification-item__icon">
                      <Icon size={20} />
                    </div>
                    <div class="nido-notification-item__body">
                      <div class="nido-notification-item__head">
                        <span class="nido-notification-item__title">{n.title}</span>
                        <span class="nido-notification-item__time">{timeStr}</span>
                      </div>
                      <p class="nido-notification-item__message">{n.message}</p>
                    </div>
                    <button
                      type="button"
                      class="nido-notification-item__dismiss"
                      onClick={() => dismissNotification(n.id)}
                      aria-label="Supprimer"
                    >
                      <IconX size={14} />
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
