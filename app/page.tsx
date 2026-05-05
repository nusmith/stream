"use client";

import { Box, Typography } from "@mui/material";
import { AppShell } from "@/components/AppShell";
import { FeedPostCard } from "@/components/FeedPostCard";
import { SpotifyEmbed } from "@/components/SpotifyEmbed";
import { MOCK_FEED, MOCK_SIMILAR_TO_LIKES } from "@/lib/mock-feed";

export default function DiscoverHomePage() {
  const friendsPosts = MOCK_FEED.filter((p) => p.scope === "friend");
  const recentPosts = MOCK_FEED.filter((p) => p.scope === "recent");

  return (
    <AppShell>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
          Discover
        </Typography>
        <Typography sx={{ color: "#a1a1aa", maxWidth: 560 }}>
          A social feed built around Spotify—friends, recent posts about songs & shows, and
          picks inspired by tracks you liked.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1.5 }}>
          Tracks like ones you liked
        </Typography>
        <Typography sx={{ fontSize: "0.875rem", color: "#71717a", mb: 2 }}>
          From Spotify recommendation APIs once you wire your account (mock data below).
        </Typography>
        <Box
          sx={{
            display: "grid",
            gap: 2,
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          }}
        >
          {MOCK_SIMILAR_TO_LIKES.slice(0, 4).map((t) => (
            <Box key={t.id}>
              <SpotifyEmbed type="track" id={t.id} />
              <Typography sx={{ mt: 1, fontSize: "0.8125rem", color: "#a1a1aa" }}>
                {t.title} · {t.artist}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ mb: 5 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
          From friends
        </Typography>
        {friendsPosts.map((post) => (
          <FeedPostCard key={post.id} post={post} />
        ))}
      </Box>

      <Box sx={{ pb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
          Recent posts
        </Typography>
        {recentPosts.map((post) => (
          <FeedPostCard key={post.id} post={post} />
        ))}
      </Box>
    </AppShell>
  );
}
