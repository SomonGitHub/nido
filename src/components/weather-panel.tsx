import { useState, useEffect } from "preact/hooks";
import type { HassObject, HassEntity } from "../types";
import { IconAlertTriangle, IconUmbrella, IconSunHigh, IconX } from "../icons";
import { describeCondition } from "../widgets/weather";

interface WeatherPanelProps {
  hass: HassObject;
  weatherEntityId: string;
  onClose: () => void;
}

interface ForecastItem {
  datetime: string;
  condition: string;
  temperature: number;
  templow?: number;
  precipitation?: number;
  precipitation_probability?: number;
}

function parseMeteoFranceSensors(hass: HassObject, weatherEntityId: string) {
  // Try to find the base name, e.g. "weather.paris" -> "paris"
  const baseName = weatherEntityId.split(".")[1] || "";
  
  // To handle the user's specific case: sensor.71_weather_alert
  // We'll scan all sensors for specific Météo France patterns.
  const allSensors = Object.values(hass.states).filter(e => e.entity_id.startsWith("sensor."));
  
  let nextRain: HassEntity | undefined;
  let weatherAlert: HassEntity | undefined;
  let uvIndex: HassEntity | undefined;

  for (const s of allSensors) {
    if (s.entity_id.endsWith("_next_rain")) {
      // If we have a baseName match, prefer it, otherwise take the first one we find
      if (s.entity_id.includes(baseName) || !nextRain) nextRain = s;
    }
    if (s.entity_id.endsWith("_weather_alert")) {
      if (s.entity_id.includes(baseName) || !weatherAlert) weatherAlert = s;
    }
    if (s.entity_id.endsWith("_uv")) {
      if (s.entity_id.includes(baseName) || !uvIndex) uvIndex = s;
    }
  }

  return { nextRain, weatherAlert, uvIndex };
}

export function WeatherPanel({ hass, weatherEntityId, onClose }: WeatherPanelProps) {
  const [daily, setDaily] = useState<ForecastItem[]>([]);
  const [hourly, setHourly] = useState<ForecastItem[]>([]);

  const weatherEntity = hass.states[weatherEntityId];
  const { nextRain, weatherAlert, uvIndex } = parseMeteoFranceSensors(hass, weatherEntityId);

  useEffect(() => {
    let cancelled = false;

    async function fetchForecasts() {
      try {
        const fetchType = async (type: "daily" | "hourly") => {
          try {
            const res = await hass.callWS<any>({
              type: "call_service",
              domain: "weather",
              service: "get_forecasts",
              service_data: { type },
              target: { entity_id: weatherEntityId },
              return_response: true
            });
            return res?.response?.[weatherEntityId]?.forecast || res?.[weatherEntityId]?.forecast || [];
          } catch (err) {
            console.warn(`Failed to fetch ${type} forecast:`, err);
            return [];
          }
        };

        const [dailyData, hourlyData] = await Promise.all([
          fetchType("daily"),
          fetchType("hourly")
        ]);

        if (cancelled) return;
        setDaily(dailyData);
        setHourly(hourlyData);
      } catch (err) {
        console.error("Failed to fetch weather forecasts", err);
      }
    }

    // Fallback: if HA is older and keeps forecast in attributes
    if (weatherEntity?.attributes.forecast) {
      setDaily(weatherEntity.attributes.forecast as ForecastItem[]);
    } else {
      fetchForecasts();
    }

    return () => { cancelled = true; };
  }, [hass, weatherEntityId]);

  if (!weatherEntity) return null;

  const currentCondition = describeCondition(weatherEntity.state);
  const tempUnit = weatherEntity.attributes.temperature_unit || "°C";

  const alertLevel = weatherAlert?.state; // e.g. "Vert", "Jaune", "Orange", "Rouge"
  const alertColor = alertLevel === "Rouge" ? "#ff4d4f" :
                     alertLevel === "Orange" ? "#faad14" :
                     alertLevel === "Jaune" ? "#fadb14" : null;

  const alertPhenomenons = weatherAlert?.attributes ? 
    Object.entries(weatherAlert.attributes)
      .filter(([k, v]) => v === alertLevel && k !== "friendly_name" && k !== "icon")
      .map(([k]) => k)
      .join(", ") : "";

  const alertText = alertPhenomenons ? `Vigilance ${alertLevel} : ${alertPhenomenons}` : `Vigilance ${alertLevel}`;

  // Render
  return (
    <div class="nido-weather-panel">
      <div class="nido-weather-panel__backdrop" onClick={onClose} />
      <div class="nido-weather-panel__content">
        <header class="nido-weather-panel__header">
          <h2>Météo Détaillée</h2>
          <button type="button" class="nido-weather-panel__close" onClick={onClose} aria-label="Fermer">
            <IconX size={20} />
          </button>
        </header>

        <div class="nido-weather-panel__scroll">
          
          <div class="nido-wp-current">
            <currentCondition.Icon size={48} />
            <div class="nido-wp-current-info">
              <span class="nido-wp-temp">{weatherEntity.attributes.temperature}{tempUnit}</span>
              <span class="nido-wp-desc">{currentCondition.label}</span>
            </div>
          </div>

          {alertColor && (
            <div class="nido-wp-alert" style={{ backgroundColor: `${alertColor}22`, color: alertColor, border: `1px solid ${alertColor}55` }}>
              <IconAlertTriangle size={20} />
              <span>{alertText}</span>
            </div>
          )}

          <div class="nido-wp-grid">
            {nextRain && (
              <div class="nido-wp-card">
                <div class="nido-wp-card-head">
                  <IconUmbrella size={18} />
                  <span>Pluie dans l'heure</span>
                </div>
                <div class="nido-wp-card-val">
                  {nextRain.state === "unknown" ? "Pas de pluie prévue" : 
                   new Date(nextRain.state).getTime() > Date.now() ? `Prévue à ${new Date(nextRain.state).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}` : 
                   "Pas de pluie prévue"}
                </div>
              </div>
            )}
            
            {uvIndex && (
              <div class="nido-wp-card">
                <div class="nido-wp-card-head">
                  <IconSunHigh size={18} />
                  <span>Index UV</span>
                </div>
                <div class="nido-wp-card-val">{uvIndex.state}</div>
              </div>
            )}
          </div>

          {hourly.length > 0 && (
            <div class="nido-wp-section">
              <h3>Prochaines heures</h3>
              <div class="nido-wp-hourly">
                {hourly.slice(0, 24).map((f, i) => {
                  const cond = describeCondition(f.condition);
                  const date = new Date(f.datetime);
                  return (
                    <div class="nido-wp-hour" key={i}>
                      <span class="nido-wp-hour-time">{date.getHours()}h</span>
                      <cond.Icon size={24} />
                      <span class="nido-wp-hour-temp">{f.temperature}°</span>
                      {(f.precipitation ?? 0) > 0 && <span class="nido-wp-hour-precip">{f.precipitation}mm</span>}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {daily.length > 0 && (
            <div class="nido-wp-section">
              <h3>Prévisions (5 jours)</h3>
              <div class="nido-wp-daily">
                {daily.slice(0, 5).map((f, i) => {
                  const cond = describeCondition(f.condition);
                  const date = new Date(f.datetime);
                  const dayName = new Intl.DateTimeFormat('fr-FR', { weekday: 'long' }).format(date);
                  return (
                    <div class="nido-wp-day" key={i}>
                      <span class="nido-wp-day-name">{i === 0 ? "Aujourd'hui" : dayName}</span>
                      <cond.Icon size={24} />
                      <div class="nido-wp-day-temps">
                        <span class="nido-wp-day-min">{f.templow}°</span>
                        <div class="nido-wp-day-bar" />
                        <span class="nido-wp-day-max">{f.temperature}°</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
