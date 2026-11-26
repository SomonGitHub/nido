import { describe, expect, it } from "vitest";
import type { HassEntity } from "../types";
import type { EntityRegistryEntry } from "./entities";
import {
  formatDuration,
  imageOf,
  musicPlayers,
  nextRepeat,
  parseLibrary,
  parseQueue,
  parseSearch,
  parseShortcuts,
  pickActivePlayer,
  playerProgress,
  toggleShortcut,
  emptyShortcuts,
  MAX_SHORTCUTS,
  musicByRoom,
  playingSource,
  groupLeaderOf,
} from "./music-assistant";

function st(entity_id: string, state: string, attributes: Record<string, unknown> = {}, last_changed = ""): HassEntity {
  return { entity_id, state, attributes, last_changed, last_updated: last_changed };
}

function reg(entity_id: string, platform: string, extra: Partial<EntityRegistryEntry> = {}): EntityRegistryEntry {
  return {
    entity_id,
    device_id: null,
    area_id: null,
    name: null,
    original_name: null,
    platform,
    disabled_by: null,
    hidden_by: null,
    ...extra,
  };
}

describe("imageOf", () => {
  it("réduit l'imageproxy de MA à 256 px", () => {
    expect(imageOf("http://192.168.1.47:8095/imageproxy/abc?size=0")).toBe(
      "http://192.168.1.47:8095/imageproxy/abc?size=256",
    );
  });
  it("accepte un objet image et refuse un chemin de fichier local", () => {
    expect(imageOf({ path: "https://i.scdn.co/x.jpg" })).toBe("https://i.scdn.co/x.jpg");
    expect(imageOf("/media/cover.jpg")).toBe("/media/cover.jpg");
    expect(imageOf("cover.jpg")).toBeNull();
    expect(imageOf(null)).toBeNull();
  });
});

describe("parseSearch", () => {
  it("garde l'ordre titres → artistes → albums… et ignore les sections vides", () => {
    const res = {
      context: {},
      response: {
        artists: [{ media_type: "artist", uri: "spotify://artist/1", name: "Daft Punk" }],
        albums: [],
        tracks: [
          {
            media_type: "track",
            uri: "spotify://track/1",
            name: "Instant Crush",
            artists: [{ name: "Daft Punk" }, { name: "Julian Casablancas" }],
            album: { name: "RAM", image: "https://img/ram.jpg" },
          },
        ],
        playlists: [],
        radio: [{ uri: "tunein://fip", name: "FIP" }],
      },
    };
    const sections = parseSearch(res);
    expect(sections.map((s) => s.type)).toEqual(["track", "artist", "radio"]);
    expect(sections[0].items[0]).toEqual({
      uri: "spotify://track/1",
      name: "Instant Crush",
      media_type: "track",
      image: "https://img/ram.jpg",
      subtitle: "Daft Punk, Julian Casablancas · RAM",
    });
    expect(sections[2].items[0].media_type).toBe("radio");
  });
  it("rejette les éléments sans uri ou sans nom, et les doublons", () => {
    const sections = parseSearch({
      tracks: [
        { uri: "a", name: "A" },
        { uri: "a", name: "A bis" },
        { name: "Sans uri" },
        { uri: "b" },
      ],
    });
    expect(sections[0].items.map((i) => i.uri)).toEqual(["a"]);
  });
  it("renvoie une liste vide sur une réponse inattendue", () => {
    expect(parseSearch(null)).toEqual([]);
    expect(parseSearch({ response: "erreur" })).toEqual([]);
  });
});

describe("parseLibrary", () => {
  it("lit la réponse réelle de get_library", () => {
    const items = parseLibrary(
      {
        response: {
          items: [
            {
              media_type: "playlist",
              uri: "library://playlist/4",
              name: "500 Random tracks (from library)",
              version: "",
              image: "http://192.168.1.47:8095/imageproxy/55fa?size=0",
              favorite: false,
            },
          ],
          limit: 3,
          offset: 0,
        },
      },
      "playlist",
    );
    expect(items).toEqual([
      {
        uri: "library://playlist/4",
        name: "500 Random tracks (from library)",
        media_type: "playlist",
        image: "http://192.168.1.47:8095/imageproxy/55fa?size=256",
        subtitle: "Playlist",
      },
    ]);
  });
});

describe("parseQueue", () => {
  it("lit le titre en cours et le suivant de l'entité visée", () => {
    const q = parseQueue(
      {
        response: {
          "media_player.salon": {
            items: 12,
            current_item: {
              name: "M83 - Midnight City",
              duration: 243,
              media_item: { media_type: "track", uri: "x", name: "Midnight City", artists: [{ name: "M83" }] },
            },
            next_item: { name: "Stream radio", duration: 0 },
          },
        },
      },
      "media_player.salon",
    );
    expect(q).toEqual({
      current: { name: "Midnight City", subtitle: "M83", image: null, duration: 243 },
      next: { name: "Stream radio", subtitle: "", image: null, duration: null },
      count: 12,
    });
  });
  it("renvoie null sans réponse", () => {
    expect(parseQueue(undefined, "media_player.x")).toBeNull();
  });
});

describe("musicPlayers", () => {
  it("ne garde que les media_player Music Assistant exposés et actifs", () => {
    const players = musicPlayers(
      [
        reg("media_player.salon_2", "music_assistant", { config_entry_id: "ma1", area_id: "salon" }),
        reg("media_player.cuisine", "music_assistant", { disabled_by: "user" }),
        reg("media_player.salon", "apple_tv"),
        reg("media_player.bureau", "music_assistant"),
      ],
      new Set(["media_player.salon_2", "media_player.cuisine", "media_player.salon"]),
    );
    expect(players).toEqual([{ entity_id: "media_player.salon_2", configEntryId: "ma1", area_id: "salon" }]);
  });
});

describe("pickActivePlayer", () => {
  const players = ["a", "b", "c"].map((id) => ({ entity_id: `media_player.${id}`, configEntryId: "ma", area_id: null }));
  it("préfère le lecteur lancé le plus récemment", () => {
    const states = {
      "media_player.a": st("media_player.a", "playing", { media_title: "x" }, "2026-01-01T10:00:00Z"),
      "media_player.b": st("media_player.b", "playing", { media_title: "y" }, "2026-01-01T11:00:00Z"),
    };
    expect(pickActivePlayer(players, states, "media_player.c")).toBe("media_player.b");
  });
  it("puis le choix de l'appareil, puis un lecteur en pause, puis le premier", () => {
    const states = { "media_player.b": st("media_player.b", "paused", { media_title: "y" }) };
    expect(pickActivePlayer(players, states, "media_player.c")).toBe("media_player.c");
    expect(pickActivePlayer(players, states, "media_player.inconnu")).toBe("media_player.b");
    expect(pickActivePlayer(players, {}, null)).toBe("media_player.a");
    expect(pickActivePlayer([], {}, null)).toBeNull();
  });
});

describe("playerProgress", () => {
  const at = "2026-01-01T10:00:00Z";
  const base = { media_duration: 200, media_position: 50, media_position_updated_at: at };
  it("avance avec le temps pendant la lecture, sans dépasser la durée", () => {
    const now = Date.parse(at) + 30_000;
    expect(playerProgress(st("m", "playing", base), now)).toEqual({ position: 80, duration: 200 });
    expect(playerProgress(st("m", "playing", base), now + 600_000)?.position).toBe(200);
  });
  it("reste figée en pause, absente sans durée (radio)", () => {
    expect(playerProgress(st("m", "paused", base), Date.parse(at) + 30_000)?.position).toBe(50);
    expect(playerProgress(st("m", "playing", { media_position: 10 }), 0)).toBeNull();
  });
});

describe("formatDuration / nextRepeat", () => {
  it("formate en m:ss ou h:mm:ss", () => {
    expect(formatDuration(5)).toBe("0:05");
    expect(formatDuration(243.9)).toBe("4:03");
    expect(formatDuration(3723)).toBe("1:02:03");
  });
  it("fait tourner off → all → one → off", () => {
    expect(nextRepeat("off")).toBe("all");
    expect(nextRepeat("all")).toBe("one");
    expect(nextRepeat("one")).toBe("off");
    expect(nextRepeat(undefined)).toBe("all");
  });
});

describe("raccourcis", () => {
  const item = { uri: "tunein://fip", name: "FIP", media_type: "radio" as const, image: null, subtitle: "Radio" };
  it("épingle puis retire", () => {
    const pinned = toggleShortcut(emptyShortcuts(), item);
    expect(pinned.items).toEqual([{ uri: "tunein://fip", name: "FIP", media_type: "radio", image: null }]);
    expect(toggleShortcut(pinned, item).items).toEqual([]);
  });
  it("limite le nombre et nettoie un message MQTT abîmé", () => {
    const many = { items: Array.from({ length: 20 }, (_, i) => ({ uri: `u${i}`, name: `n${i}`, media_type: "track" })), updatedAt: "t" };
    expect(parseShortcuts(many)?.items).toHaveLength(MAX_SHORTCUTS);
    expect(parseShortcuts({ items: [{ uri: "a", name: "A", media_type: "video" }, "x"] })?.items).toEqual([]);
    expect(parseShortcuts("x")).toBeNull();
  });
});

describe("musique par pièce", () => {
  const players = [
    { entity_id: "media_player.salon_a", configEntryId: "ma", area_id: "salon" },
    { entity_id: "media_player.salon_b", configEntryId: "ma", area_id: "salon" },
    { entity_id: "media_player.cuisine", configEntryId: "ma", area_id: "cuisine" },
    { entity_id: "media_player.sans_piece", configEntryId: "ma", area_id: null },
  ];
  const states = {
    "media_player.salon_a": st("media_player.salon_a", "idle"),
    "media_player.salon_b": st("media_player.salon_b", "playing", { media_title: "Myth", media_artist: "Beach House" }, "2026-01-01T09:00:00Z"),
    "media_player.cuisine": st("media_player.cuisine", "playing", { media_title: "FIP", group_members: ["media_player.cuisine", "media_player.salon_a"] }, "2026-01-01T10:00:00Z"),
    "media_player.sans_piece": st("media_player.sans_piece", "playing", { media_title: "x" }),
  };
  it("met en tête l'enceinte qui joue et ignore celles sans pièce", () => {
    const map = musicByRoom(players, states);
    expect([...map.keys()].sort()).toEqual(["cuisine", "salon"]);
    expect(map.get("salon")).toEqual({
      entityId: "media_player.salon_b",
      playing: true,
      title: "Myth",
      artist: "Beach House",
      others: ["media_player.salon_a"],
    });
  });
  it("trouve la source la plus récente, hors de la pièce visée", () => {
    const withRoom = players.slice(0, 3);
    expect(playingSource(withRoom, states)).toBe("media_player.cuisine");
    expect(playingSource(withRoom, states, "media_player.cuisine")).toBe("media_player.salon_b");
  });
  it("retrouve le chef du groupe", () => {
    expect(groupLeaderOf(players, states, "media_player.salon_a")).toBe("media_player.cuisine");
    expect(groupLeaderOf(players, states, "media_player.cuisine")).toBeNull();
  });
});
