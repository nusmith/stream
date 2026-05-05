export type SpotifyResourceType =
  | "track"
  | "artist"
  | "album"
  | "playlist"
  | "episode"
  | "show";

export function parseSpotifyInput(raw: string): {
  type: SpotifyResourceType;
  id: string;
} | null {
  const input = raw.trim();
  if (!input) return null;

  const uri = input.match(
    /^spotify:(track|artist|album|playlist|episode|show):([a-zA-Z0-9]+)$/,
  );
  if (uri) {
    return { type: uri[1] as SpotifyResourceType, id: uri[2] };
  }

  const url = input.match(
    /open\.spotify\.com\/(?:intl-[a-z]{2}\/)?(track|artist|album|playlist|episode|show)\/([a-zA-Z0-9]+)/,
  );
  if (url) {
    return { type: url[1] as SpotifyResourceType, id: url[2] };
  }

  const shorthand = input.match(/^(track|artist|album|playlist|episode|show)\/([a-zA-Z0-9]+)$/);
  if (shorthand) {
    return {
      type: shorthand[1] as SpotifyResourceType,
      id: shorthand[2],
    };
  }

  const idOnly =
    /^[a-zA-Z0-9]{22}$/.test(input) ?
      ({ type: "track" as const, id: input })
    : null;
  return idOnly;
}

export function spotifyEmbedSrc(
  type: SpotifyResourceType,
  id: string,
): string {
  const base = `https://open.spotify.com/embed/${type}/${id}`;
  return `${base}?utm_source=stream-app`;
}
