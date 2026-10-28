import { useEffect, useMemo, useRef, useState } from "preact/hooks";
import type { HassObject } from "./types";
import { fetchAreas, fetchFloors, type Area, type Floor } from "./core/areas";
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
  loadEnergyConfig,
  loadKidsEnabled,
  loadAnnounce,
  loadAiDigestEnabled,
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
import { EnergyPage } from "./views/energy";
import { resolveEnergyConfig, type StoredEnergyConfig } from "./core/energy-config";
import { Onboarding } from "./components/onboarding";
import { CompactDashboard } from "./views/compact";
import { useCompactLayout } from "./core/use-compact-layout";
import { usePlanSync } from "./core/plan-store";
import { useAnnouncements } from "./core/use-announcements";
import { useAiDigest } from "./core/use-ai-digest";

interface PanelHost {
  applyTheme?: (theme: string, mode: string) => void;
}

interface AppProps {
  hass: HassObject | null;
  host?: PanelHost;
}

type RegistryKind = "areas" | "entities" | "devices" | "floors";

const REGISTRY_EVENTS: Record<string, RegistryKind> = {
  area_registry_updated: "areas",
  entity_registry_updated: "entities",
  device_registry_updated: "devices",
  floor_registry_updated: "floors",
};

/* Les événements de registre arrivent en rafale (une intégration qui démarre
   met à jour des dizaines d'entités) : on attend que ça se calme. */
const REGISTRY_RELOAD_MS = 500;

export function App({ hass, host }: AppProps) {
  const [areas, setAreas] = useState<Area[] | null>(null);
  const [floors, setFloors] = useState<Floor[]>([]);
  const [registry, setRegistry] = useState<EntityRegistryEntry[] | null>(null);
  const [devices, setDevices] = useState<DeviceRegistryEntry[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const initialTheme = useMemo(() => loadTheme(), []);
  const [favorites, setFavorites] = useState<string[]>(() => loadFavorites());
  const [exposed, setExposed] = useState<string[]>(() => loadExposed());
  const [excludedUsers, setExcludedUsers] = useState<string[]>(() => loadExcludedUsers());
  const [kidsEnabled, setKidsEnabled] = useState<boolean>(() => loadKidsEnabled());
  const [announce, setAnnounce] = useState<boolean>(() => loadAnnounce());
  const [aiDigestEnabled, setAiDigestEnabled] = useState<boolean>(() => loadAiDigestEnabled());
  const [energyStored, setEnergyStored] = useState<StoredEnergyConfig>(() => loadEnergyConfig());
  const [roomsOrder, setRoomsOrder] = useState<string[]>(() => loadRoomsOrder());
  const [roomEntitiesOrder, setRoomEntitiesOrder] = useState<Record<string, string[]>>(
    () => loadRoomEntitiesOrder(),
  );
  const [showOnboarding, setShowOnboarding] = useState(() => !isOnboarded());
  const [view, setView] = useState<
    { kind: "dashboard" } | { kind: "room"; areaId: string } | { kind: "energy" }
  >({ kind: "dashboard" });
  const compact = useCompactLayout();
  const [housePlan, saveHousePlan, planSynced] = usePlanSync(hass);

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
        const [a, e, d, f] = await Promise.all([
          fetchAreas(ref),
          fetchEntityRegistry(ref),
          fetchDeviceRegistry(ref),
          fetchFloors(ref),
        ]);
        if (cancelled) return;
        setAreas(a);
        setFloors(f);
        setRegistry(e);
        setDevices(d);
      } catch (err: unknown) {
        if (cancelled) return;
        setError(err instanceof Error ? err.message : String(err));
      }
    };

    const reloaders: Record<RegistryKind, (ref: HassObject) => Promise<void>> = {
      areas: (ref) => fetchAreas(ref).then((v) => { if (!cancelled) setAreas(v); }),
      entities: (ref) => fetchEntityRegistry(ref).then((v) => { if (!cancelled) setRegistry(v); }),
      devices: (ref) => fetchDeviceRegistry(ref).then((v) => { if (!cancelled) setDevices(v); }),
      floors: (ref) => fetchFloors(ref).then((v) => { if (!cancelled) setFloors(v); }),
    };
    const pending = new Set<RegistryKind>();
    let timer: number | undefined;

    /* Un échec ici garde les registres déjà chargés plutôt que de remplacer
       tout le tableau de bord par l'écran d'erreur. */
    const flush = () => {
      timer = undefined;
      const ref = hassRef.current;
      if (cancelled || !ref) return;
      for (const kind of pending) {
        reloaders[kind](ref).catch((err) => console.warn(`Nido: reload ${kind} failed`, err));
      }
      pending.clear();
    };

    load();

    Promise.all(
      Object.entries(REGISTRY_EVENTS).map(([evt, kind]) =>
        hass.connection.subscribeEvents(() => {
          if (cancelled) return;
          pending.add(kind);
          window.clearTimeout(timer);
          timer = window.setTimeout(flush, REGISTRY_RELOAD_MS);
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
      window.clearTimeout(timer);
      unsubscribers.forEach((u) => u());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hass != null]);

  const entities = useMemo(() => {
    if (!hass || !registry || !devices) return [];
    return resolveEntities(hass, registry, devices);
  }, [hass?.states, registry, devices]);

  const exposedEntities = useMemo(() => {
    const set = new Set(exposed);
    return entities.filter((e) => set.has(e.entity_id));
  }, [entities, exposed]);
  const areasRef = useRef(areas);
  areasRef.current = areas;
  useAnnouncements(
    hass,
    exposedEntities,
    (areaId) => areasRef.current?.find((a) => a.area_id === areaId)?.name ?? null,
    announce,
  );
  const areaNameById = useMemo(() => new Map((areas ?? []).map((a) => [a.area_id, a.name])), [areas]);
  const aiDigest = useAiDigest(hass, exposedEntities, areaNameById, aiDigestEnabled);

  const energy = useMemo(
    () => resolveEnergyConfig(energyStored, hass?.states ?? {}),
    [energyStored, hass?.states],
  );

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

  const energyAvailable =
    !!energy.power && !!hass.states[energy.power] && exposedSet.has(energy.power);

  return (
    <>
      {compact && (view.kind === "dashboard" || !currentArea) ? (
        <CompactDashboard
          hass={hass}
          areas={areas}
          floors={floors}
          entities={entities}
          favorites={favorites}
          exposed={exposed}
          roomsOrder={roomsOrder}
          plan={housePlan}
          energy={energy}
          onOpenRoom={(areaId) => setView({ kind: "room", areaId })}
        />
      ) : view.kind === "energy" ? (
        <EnergyPage
          hass={hass}
          energy={energy}
          entities={entities}
          exposed={exposed}
          areas={areas}
          onBack={() => setView({ kind: "dashboard" })}
        />
      ) : view.kind === "dashboard" || !currentArea ? (
        <Dashboard
          hass={hass}
          energy={energy}
          areas={areas}
          floors={floors}
          entities={entities}
          favorites={favorites}
          exposed={exposed}
          roomsOrder={roomsOrder}
          plan={housePlan}
          planSynced={planSynced}
          onSavePlan={saveHousePlan}
          kidsEnabled={kidsEnabled}
          aiDigest={aiDigest}
          onConfigure={() => setShowOnboarding(true)}
          onOpenRoom={(areaId) => setView({ kind: "room", areaId })}
          onOpenEnergy={
            energyAvailable ? () => setView({ kind: "energy" }) : undefined
          }
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
          initialKidsEnabled={kidsEnabled}
          initialAnnounce={announce}
          initialAiDigest={aiDigestEnabled}
          initialEnergy={energyStored}
          isReturning={isOnboarded()}
          onApplyTheme={applyTheme}
          onClose={() => setShowOnboarding(false)}
          onDone={(state) => {
            setExposed(state.exposed);
            setFavorites(state.favorites);
            setExcludedUsers(state.excludedUsers);
            setKidsEnabled(state.kidsEnabled);
            setAnnounce(state.announce);
            setAiDigestEnabled(state.aiDigest);
            setEnergyStored(state.energy);
            setShowOnboarding(false);
          }}
        />
      )}
    </>
  );
}
