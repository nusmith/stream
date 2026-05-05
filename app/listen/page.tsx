"use client";

import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { SpotifyEmbed } from "@/components/SpotifyEmbed";

const STARTERS = [
  {
    label: "Your queue (playlist)",
    type: "playlist" as const,
    id: "37i9dQZEVXbMDHOHDNepvU",
    note: "Spotify curated — swap for yours after auth",
  },
  {
    label: "Focused track",
    type: "track" as const,
    id: "0VjIjW4GlUZAMYd2uxXUmp",
    note: "Single-track embed",
  },
];

export default function ListenPage() {
  const [starter, setStarter] = useState(STARTERS[0]);

  return (
    <AppShell>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
        Listen now
      </Typography>
      <Typography sx={{ color: "#a1a1aa", mb: 4, maxWidth: 560 }}>
        Simple Spotify playback inside the browser. Embed players work without OAuth; Spotify Web Playback SDK unlocks richer control for Premium users.
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mb: 4 }}>
        {STARTERS.map((s) => (
          <Button
            key={s.id + s.label}
            onClick={() => setStarter(s)}
            variant={starter.id === s.id ? "contained" : "outlined"}
            sx={{
              borderRadius: 999,
              textTransform: "none",
              borderColor: "#3f3f46",
              color: starter.id === s.id ? "#fff" : "#e4e4e7",
              bgcolor: starter.id === s.id ? "#3f3f46" : "transparent",
              "&:hover": { borderColor: "#52525b", bgcolor: "#27272a" },
            }}
          >
            {s.label}
          </Button>
        ))}
      </Box>

      <Box sx={{ maxWidth: 720 }}>
        <SpotifyEmbed
          type={starter.type}
          id={starter.id}
          variant={starter.type === "track" ? "compact" : "compact"}
        />
        <Typography sx={{ mt: 2, fontSize: "0.8125rem", color: "#71717a" }}>
          {starter.note}
        </Typography>
      </Box>
    </AppShell>
  );
}
