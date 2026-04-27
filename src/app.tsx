import { useEffect, useMemo, useRef, useState } from "preact/hooks";
import type { HassObject } from "./types";
import { fetchAreas, type Area } from "./core/areas";
import {
  fetchDeviceRegistry,
  fetchEntityRegistry,
  resolveEntities,
  type DeviceRegistryEntry,
  type EntityRegistryEntry,
} from "./core/entities";
import {
  isOnboarded,
  loadExcludedUsers,
  loadExposed,
  loadFavorites,
  loadRoomEntitiesOrder,
  loadRoomsOrder,
  loadTheme,
  saveFavorites,
  saveRoomEntitiesOrder,
  saveRoomsOrder,
  type ThemeMode,
  type ThemeName,
} from "./core/storage";
import { Dashboard } from "./views/dashboard";
import { RoomDetail } from "./views/room-detail";
import { Onboarding } from "./components/onboarding";

interface PanelHost {
  applyTheme?: (theme: string, mode: string) => void;
}

interface AppProps {
  hass: HassObject | null;
  host?: PanelHost;
}

const REGISTRY_EVENTS = [
  "area_registry_updated",
  "entity_registry_updated",
  "device_registry_updated",
] as const;

export function App({ hass, host }: AppProps) {
  const [areas, setAreas] = useState<Area[] | null>(null);
  const [registry, setRegistry] = useState<EntityRegistryEntry[] | null>(null);
  const [devices, setDevices] = useState<DeviceRegistryEntry[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const initialTheme = useMemo(() => loadTheme(), []);
  const [favorites, setFavorites] = useState<string[]>(() => loadFavorites());
  const [exposed, setExposed] = useState<string[]>(() => loadExposed());
  const [excludedUsers, setExcludedUsers] = useState<string[]>(() => loadExcludedUsers());
  const [roomsOrder, setRoomsOrder] = useState<string[]>(() => loadRoomsOrder());
  const [roomEntitiesOrder, setRoomEntitiesOrder] = useState<Record<string, string[]>>(
    () => loadRoomEntitiesOrder(),
  );
  const [showOnboarding, setShowOnboarding] = useState(() => !isOnboarded());
  const [view, setView] = useState<{ kind: "dashboard" } | { kind: "room"; areaId: string }>(
    { kind: "dashboard" },
  );

  const reorderFavorites = (ids: string[]) => {
    setFavorites(ids);
    saveFavorites(ids);
  };
  const reorderRooms = (ids: string[]) => {
    setRoomsOrder(ids);
    saveRoomsOrder(ids);
  };
  const reorderRoomEntities = (areaId: string, ids: string[]) => {
    setRoomEntitiesOrder((prev) => {
      const next = { ...prev, [areaId]: ids };
      saveRoomEntitiesOrder(next);
      return next;
    });
  };

  const hassRef = useRef<HassObject | null>(hass);
  hassRef.current = hass;

  useEffect(() => {
    if (!hass) return;
    let cancelled = false;
    const unsubscribers: Array<() => void> = [];

    const load = async () => {
      const ref = hassRef.current;
      if (!ref) return;
      try {
        const [a, e, d] = await Promise.all([
          fetchAreas(ref),
          fetchEntityRegistry(ref),
          fetchDeviceRegistry(ref),
        ]);
        if (cancelled) return;
        setAreas(a);
        setRegistry(e);
        setDevices(d);
      } catch (err: unknown) {
        if (cancelled) return;
        setError(err instanceof Error ? err.message : String(err));
      }
    };

    load();

    Promise.all(
      REGISTRY_EVENTS.map((evt) =>
        hass.connection.subscribeEvents(() => {
          if (!cancelled) load();
        }, evt),
      ),
    )
      .then((unsubs) => {
        if (cancelled) {
          unsubs.forEach((u) => u());
          return;
        }
        unsubscribers.push(...unsubs);
      })
      .catch((err) => console.warn("Nido: subscribeEvents failed", err));

    return () => {
      cancelled = true;
      unsubscribers.forEach((u) => u());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hass != null]);

  const entities = useMemo(() => {
    if (!hass || !registry || !devices) return [];
    return resolveEntities(hass, registry, devices);
  }, [hass?.states, registry, devices]);

  const applyTheme = (theme: ThemeName, mode: ThemeMode) => {
    host?.applyTheme?.(theme, mode);
  };

  if (!hass) {
    return <div class="nido-loading">Connexion à Home Assistant…</div>;
  }
  if (error) {
    return <div class="nido-loading nido-loading--error">Erreur : {error}</div>;
  }
  if (!areas || !registry || !devices) {
    return <div class="nido-loading">Chargement des pièces et entités…</div>;
  }

  const userExcluded = !!hass.user && excludedUsers.includes(hass.user.id);
  if (userExcluded) {
    return (
      <div class="nido-shell">
        <div class="nido-dashboard nido-denied">
          <h1 class="n-ob__h1">
            Nido n'est pas pour <em>vous</em>.
          </h1>
          <p class="n-ob__lead">
            Votre compte n'a pas accès à ce tableau de bord. Vous pouvez continuer à utiliser
            Home Assistant normalement.
          </p>
        </div>
      </div>
    );
  }

  const exposedSet = useMemo(() => new Set(exposed), [exposed]);
  const currentArea =
    view.kind === "room" ? areas.find((a) => a.area_id === view.areaId) ?? null : null;
  const currentRoomEntities = useMemo(
    () =>
      currentArea
        ? entities.filter(
            (e) => e.area_id === currentArea.area_id && exposedSet.has(e.entity_id),
          )
        : [],
    [entities, currentArea, exposedSet],
  );

  return (
    <>
      {view.kind === "dashboard" || !currentArea ? (
        <Dashboard
          hass={hass}
          areas={areas}
          entities={entities}
          favorites={favorites}
          exposed={exposed}
          roomsOrder={roomsOrder}
          onConfigure={() => setShowOnboarding(true)}
          onOpenRoom={(areaId) => setView({ kind: "room", areaId })}
          onReorderFavorites={reorderFavorites}
          onReorderRooms={reorderRooms}
        />
      ) : (
        <RoomDetail
          hass={hass}
          area={currentArea}
          entities={currentRoomEntities}
          entitiesOrder={roomEntitiesOrder[currentArea.area_id] ?? []}
          onBack={() => setView({ kind: "dashboard" })}
          onReorderEntities={(ids) => reorderRoomEntities(currentArea.area_id, ids)}
        />
      )}
      {showOnboarding && (
        <Onboarding
          hass={hass}
          entities={entities}
          areas={areas}
          initialTheme={initialTheme.theme}
          initialMode={initialTheme.mode}
          initialExposed={exposed}
          initialFavorites={favorites}
          initialExcludedUsers={excludedUsers}
          isReturning={isOnboarded()}
          onApplyTheme={applyTheme}
          onClose={() => setShowOnboarding(false)}
          onDone={(state) => {
            setExposed(state.exposed);
            setFavorites(state.favorites);
            setExcludedUsers(state.excludedUsers);
            setShowOnboarding(false);
          }}
        />
      )}
    </>
  );
}
