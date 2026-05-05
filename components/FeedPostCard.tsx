"use client";

import { Avatar, Box, Chip, Typography } from "@mui/material";
import type { FeedPost } from "@/lib/mock-feed";
import { SpotifyEmbed } from "@/components/SpotifyEmbed";

export function FeedPostCard({ post }: { post: FeedPost }) {
  return (
    <Box
      sx={{
        bgcolor: "#18181b",
        border: "1px solid #27272a",
        borderRadius: 3,
        p: 2.5,
        mb: 2,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2, mb: 2 }}>
        <Avatar
          sx={{
            bgcolor: "#3f3f46",
            color: "#e4e4e7",
            fontWeight: 600,
            width: 44,
            height: 44,
          }}
        >
          {post.author.displayName.slice(0, 1)}
        </Avatar>
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 1 }}>
            <Typography sx={{ fontWeight: 700 }}>{post.author.displayName}</Typography>
            <Typography sx={{ color: "#71717a", fontSize: "0.875rem" }}>
              @{post.author.handle}
            </Typography>
            <Chip
              label={post.scope === "friend" ? "Following" : "Everyone"}
              size="small"
              sx={{
                height: 22,
                fontSize: "0.7rem",
                bgcolor: post.scope === "friend" ? "rgba(168, 85, 247, 0.18)" : "#27272a",
                color: post.scope === "friend" ? "#e9d5ff" : "#a1a1aa",
                border: "none",
              }}
            />
            <Typography sx={{ color: "#52525b", fontSize: "0.75rem", ml: "auto" }}>
              {post.timeLabel}
            </Typography>
          </Box>
          <Typography sx={{ mt: 1, fontSize: "0.9375rem", color: "#e4e4e7" }}>
            {post.caption}
          </Typography>
        </Box>
      </Box>

      {post.kind === "event" && post.event ?
        <>
          <Box
            sx={{
              mb: 2,
              p: 2,
              borderRadius: 2,
              bgcolor: "#27272a",
              border: "1px solid #3f3f46",
            }}
          >
            <Typography sx={{ fontWeight: 700, mb: 0.5 }}>{post.event.title}</Typography>
            <Typography sx={{ color: "#a1a1aa", fontSize: "0.875rem" }}>
              {post.event.venue} · {post.event.when}
            </Typography>
          </Box>
          {post.event.spotify ?
            <SpotifyEmbed type={post.event.spotify.type} id={post.event.spotify.id} />
          : null}
        </>
      : null}

      {(post.kind === "track" || post.kind === "artist") && post.spotify ?
        <SpotifyEmbed type={post.spotify.type} id={post.spotify.id} />
      : null}
    </Box>
  );
}
