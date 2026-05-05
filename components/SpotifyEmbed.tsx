"use client";

import { Box } from "@mui/material";
import type { SpotifyResourceType } from "@/lib/spotify/parse";
import { spotifyEmbedSrc } from "@/lib/spotify/parse";

type SpotifyEmbedProps = {
  type: SpotifyResourceType;
  id: string;
  /** Compact player (~152); artist/show often looks better taller */
  variant?: "compact" | "tall";
};

const heights: Record<NonNullable<SpotifyEmbedProps["variant"]>, number> = {
  compact: 152,
  tall: 352,
};

export function SpotifyEmbed({
  type,
  id,
  variant = type === "artist" || type === "show" ? "tall" : "compact",
}: SpotifyEmbedProps) {
  const src = spotifyEmbedSrc(type, id);
  const height = heights[variant];

  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: 2,
        overflow: "hidden",
        border: "1px solid #27272a",
      }}
    >
      <iframe
        title={`Spotify ${type}`}
        style={{ border: 0 }}
        src={src}
        width="100%"
        height={height}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </Box>
  );
}
