/**
 * Server-side Spotify Web API client credentials belong in Route Handlers
 * or Server Actions — never expose the client secret to the browser.
 *
 * Typical env vars:
 * - SPOTIFY_CLIENT_ID
 * - SPOTIFY_CLIENT_SECRET (server only)
 * - SPOTIFY_REDIRECT_URI (OAuth callback)
 */

export function getSpotifyPublicConfig() {
  return {
    clientId: process.env.SPOTIFY_CLIENT_ID ?? "",
    redirectUri: process.env.SPOTIFY_REDIRECT_URI ?? "",
  };
}
