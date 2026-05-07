interface SubscriptionGuardWidgetProps {
  currentPower: number;
  subscribedKva?: number;
}

const R = 64;
const CX = 80;
const CY = 80;
const ARC_LEN = (270 / 360) * 2 * Math.PI * R;
const FULL = 2 * Math.PI * R;

export function SubscriptionGuardWidget({
  currentPower,
  subscribedKva = 9,
}: SubscriptionGuardWidgetProps) {
  const loadKva = Math.max(0, currentPower) / 1000;
  const pct = Math.min(1, loadKva / subscribedKva);
  const danger = pct >= 0.85;
  const watch = !danger && pct >= 0.7;
  const ringColor = danger ? "var(--warning)" : watch ? "var(--accent-deep)" : "var(--accent)";

  const dash = `${(ARC_LEN * pct).toFixed(1)} ${FULL.toFixed(1)}`;
  const trackDash = `${ARC_LEN.toFixed(1)} ${FULL.toFixed(1)}`;

  const pillLabel = danger ? "Risque coupure" : watch ? "À surveiller" : "Marge ok";
  const message = danger
    ? "Coupez un gros poste pour éviter la disjonction."
    : watch
      ? "Évitez de cumuler four + lave-linge maintenant."
      : "Tout est sous contrôle, rien à signaler.";

  return (
    <div class="n-card n-subscription-guard">
      <div class="n-subscription-guard__head">
        <div>
          <div class="n-eyebrow">Puissance souscrite</div>
          <div class="n-title">Garde compteur</div>
        </div>
        <span
          class={`n-pill-btn n-pill-btn--ghost n-subscription-guard__pill ${danger ? "is-danger" : watch ? "is-watch" : ""}`}
        >
          {pillLabel}
        </span>
      </div>

      <div class="n-subscription-guard__chart">
        <svg width="160" height="160" viewBox="0 0 160 160">
          <circle
            cx={CX}
            cy={CY}
            r={R}
            fill="none"
            stroke="var(--bg-inset)"
            stroke-width="12"
            stroke-linecap="round"
            stroke-dasharray={trackDash}
            transform={`rotate(135 ${CX} ${CY})`}
          />
          <circle
            cx={CX}
            cy={CY}
            r={R}
            fill="none"
            stroke={ringColor}
            stroke-width="12"
            stroke-linecap="round"
            stroke-dasharray={dash}
            transform={`rotate(135 ${CX} ${CY})`}
            class="n-subscription-guard__arc"
          />
        </svg>
        <div class="n-subscription-guard__readout">
          <div class="n-subscription-guard__value" style={{ color: ringColor }}>
            {loadKva.toFixed(1).replace(".", ",")}
            <span class="n-subscription-guard__unit">kVA</span>
          </div>
          <div class="n-eyebrow n-subscription-guard__sub">
            sur {subscribedKva} kVA · {Math.round(pct * 100)}%
          </div>
        </div>
      </div>

      <div class="n-subscription-guard__msg">{message}</div>
    </div>
  );
}
