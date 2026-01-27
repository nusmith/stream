'use client';

import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';

const vibes = [
  { id: 'chill', name: 'Chill', emoji: '🌊', gradient: 'from-blue-500 to-cyan-500' },
  { id: 'energetic', name: 'Energetic', emoji: '⚡', gradient: 'from-yellow-500 to-orange-500' },
  { id: 'focus', name: 'Focus', emoji: '🎯', gradient: 'from-green-500 to-emerald-500' },
  { id: 'party', name: 'Party', emoji: '🎉', gradient: 'from-pink-500 to-purple-500' },
  { id: 'romantic', name: 'Romantic', emoji: '💕', gradient: 'from-rose-500 to-pink-500' },
  { id: 'workout', name: 'Workout', emoji: '💪', gradient: 'from-red-500 to-orange-500' },
  { id: 'sleep', name: 'Sleep', emoji: '😴', gradient: 'from-indigo-500 to-purple-500' },
  { id: 'happy', name: 'Happy', emoji: '😊', gradient: 'from-yellow-400 to-orange-400' },
  { id: 'sad', name: 'Melancholic', emoji: '🌙', gradient: 'from-gray-600 to-blue-600' },
  { id: 'nostalgic', name: 'Nostalgic', emoji: '📻', gradient: 'from-amber-600 to-orange-600' },
];

const recommendedPlaylists = [
  { id: 1, title: 'Chill Vibes Only', artist: 'Curated by Stream', tracks: 45, image: 'from-blue-500 to-cyan-500' },
  { id: 2, title: 'Energy Boost', artist: 'Curated by Stream', tracks: 32, image: 'from-yellow-500 to-orange-500' },
  { id: 3, title: 'Deep Focus', artist: 'Curated by Stream', tracks: 28, image: 'from-green-500 to-emerald-500' },
  { id: 4, title: 'Party Anthems', artist: 'Curated by Stream', tracks: 50, image: 'from-pink-500 to-purple-500' },
  { id: 5, title: 'Romantic Evening', artist: 'Curated by Stream', tracks: 35, image: 'from-rose-500 to-pink-500' },
  { id: 6, title: 'Gym Motivation', artist: 'Curated by Stream', tracks: 40, image: 'from-red-500 to-orange-500' },
  { id: 7, title: 'Sleep Sounds', artist: 'Curated by Stream', tracks: 25, image: 'from-indigo-500 to-purple-500' },
  { id: 8, title: 'Happy Tunes', artist: 'Curated by Stream', tracks: 38, image: 'from-yellow-400 to-orange-400' },
  { id: 9, title: 'Late Night Thoughts', artist: 'Curated by Stream', tracks: 30, image: 'from-gray-600 to-blue-600' },
  { id: 10, title: 'Throwback Hits', artist: 'Curated by Stream', tracks: 42, image: 'from-amber-600 to-orange-600' },
];

const recommendedArtists = [
  { id: 1, name: 'Artist One', genre: 'Pop', followers: '2.5M', image: 'from-purple-500 to-pink-500' },
  { id: 2, name: 'Artist Two', genre: 'Rock', followers: '1.8M', image: 'from-red-500 to-orange-500' },
  { id: 3, name: 'Artist Three', genre: 'Hip Hop', followers: '3.2M', image: 'from-blue-500 to-cyan-500' },
  { id: 4, name: 'Artist Four', genre: 'Electronic', followers: '950K', image: 'from-green-500 to-emerald-500' },
  { id: 5, name: 'Artist Five', genre: 'Jazz', followers: '650K', image: 'from-amber-500 to-yellow-500' },
  { id: 6, name: 'Artist Six', genre: 'Indie', followers: '1.2M', image: 'from-pink-500 to-rose-500' },
];

const newReleases = [
  { id: 1, title: 'Midnight Dreams', artist: 'Artist One', type: 'Album', date: '2 days ago', image: 'from-purple-500 to-pink-500' },
  { id: 2, title: 'Electric Nights', artist: 'Artist Two', type: 'Single', date: '5 days ago', image: 'from-red-500 to-orange-500' },
  { id: 3, title: 'City Lights', artist: 'Artist Three', type: 'EP', date: '1 week ago', image: 'from-blue-500 to-cyan-500' },
  { id: 4, title: 'Summer Vibes', artist: 'Artist Four', type: 'Album', date: '2 weeks ago', image: 'from-green-500 to-emerald-500' },
];

const events = [
  { id: 1, artist: 'Artist One', venue: 'Madison Square Garden', city: 'New York, NY', date: 'Mar 15, 2024', time: '8:00 PM', image: 'from-purple-500 to-pink-500' },
  { id: 2, artist: 'Artist Two', venue: 'The Forum', city: 'Los Angeles, CA', date: 'Mar 22, 2024', time: '7:30 PM', image: 'from-red-500 to-orange-500' },
  { id: 3, artist: 'Artist Three', venue: 'Red Rocks Amphitheatre', city: 'Morrison, CO', date: 'Apr 5, 2024', time: '8:00 PM', image: 'from-blue-500 to-cyan-500' },
  { id: 4, artist: 'Artist Four', venue: 'The Fillmore', city: 'San Francisco, CA', date: 'Apr 12, 2024', time: '9:00 PM', image: 'from-green-500 to-emerald-500' },
];

// Helper function to convert Tailwind gradient classes to CSS gradient
const getGradient = (gradientClass: string) => {
  const gradientMap: Record<string, string> = {
    'from-blue-500 to-cyan-500': 'linear-gradient(to bottom right, #3b82f6, #06b6d4)',
    'from-yellow-500 to-orange-500': 'linear-gradient(to bottom right, #eab308, #f97316)',
    'from-green-500 to-emerald-500': 'linear-gradient(to bottom right, #22c55e, #10b981)',
    'from-pink-500 to-purple-500': 'linear-gradient(to bottom right, #ec4899, #a855f7)',
    'from-rose-500 to-pink-500': 'linear-gradient(to bottom right, #f43f5e, #ec4899)',
    'from-red-500 to-orange-500': 'linear-gradient(to bottom right, #ef4444, #f97316)',
    'from-indigo-500 to-purple-500': 'linear-gradient(to bottom right, #6366f1, #a855f7)',
    'from-yellow-400 to-orange-400': 'linear-gradient(to bottom right, #facc15, #fb923c)',
    'from-gray-600 to-blue-600': 'linear-gradient(to bottom right, #4b5563, #2563eb)',
    'from-amber-600 to-orange-600': 'linear-gradient(to bottom right, #d97706, #ea580c)',
    'from-purple-500 to-pink-500': 'linear-gradient(to bottom right, #a855f7, #ec4899)',
    'from-amber-500 to-yellow-500': 'linear-gradient(to bottom right, #f59e0b, #eab308)',
    'from-pink-500 to-rose-500': 'linear-gradient(to bottom right, #ec4899, #f43f5e)',
  };
  return gradientMap[gradientClass] || 'linear-gradient(to bottom right, #a855f7, #ec4899)';
};

export default function Discover() {
  const [selectedVibe, setSelectedVibe] = useState<string | null>(null);
  const [followedArtists, setFollowedArtists] = useState<Set<number>>(new Set());

  const toggleFollow = (artistId: number) => {
    setFollowedArtists((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(artistId)) {
        newSet.delete(artistId);
      } else {
        newSet.add(artistId);
      }
      return newSet;
    });
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #18181b, #27272a, #18181b)',
        color: 'white',
        pb: '96px',
      }}
    >
      {/* Header */}
      <Box
        component="header"
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          backgroundColor: 'rgba(24, 24, 27, 0.8)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid #27272a',
        }}
      >
        <Box
          sx={{
            maxWidth: '1280px',
            mx: 'auto',
            px: 3,
            py: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              sx={{
                width: 40,
                height: 40,
                background: 'linear-gradient(to bottom right, #a855f7, #ec4899)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '1.25rem',
              }}
            >
              S
            </Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                background: 'linear-gradient(to right, #a78bfa, #f472b6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Stream
            </Typography>
          </Box>
          <Box
            component="nav"
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: 4,
            }}
          >
            <Typography
              component="a"
              href="/"
              sx={{
                color: '#a1a1aa',
                textDecoration: 'none',
                '&:hover': { color: 'white' },
                transition: 'color 0.2s',
              }}
            >
              Home
            </Typography>
            <Typography
              component="a"
              href="/discover"
              sx={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              Discover
            </Typography>
            <Typography
              component="a"
              href="/social"
              sx={{
                color: '#a1a1aa',
                textDecoration: 'none',
                '&:hover': { color: 'white' },
                transition: 'color 0.2s',
              }}
            >
              Social
            </Typography>
            <Typography
              component="a"
              href="/create"
              sx={{
                color: '#a1a1aa',
                textDecoration: 'none',
                '&:hover': { color: 'white' },
                transition: 'color 0.2s',
              }}
            >
              Create
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button
              variant="contained"
              sx={{
                px: 2,
                py: 1,
                fontSize: '0.875rem',
                fontWeight: 500,
                color: 'white',
                bgcolor: '#27272a',
                borderRadius: '9999px',
                textTransform: 'none',
                '&:hover': { bgcolor: '#3f3f46' },
              }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        component="main"
        sx={{
          maxWidth: '1280px',
          mx: 'auto',
          px: 3,
          py: 4,
        }}
      >
        {/* Select Your Vibe Section */}
        <Box component="section" sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
            Select Your Vibe
          </Typography>
          <Box sx={{ position: 'relative' }}>
            <Box
              sx={{
                overflowX: 'auto',
                pb: 2,
                mx: -3,
                px: 3,
                '&::-webkit-scrollbar': { display: 'none' },
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              <Box sx={{ display: 'flex', gap: 2, minWidth: 'max-content' }}>
                {vibes.map((vibe) => (
                  <Button
                    key={vibe.id}
                    onClick={() => setSelectedVibe(selectedVibe === vibe.id ? null : vibe.id)}
                    sx={{
                      flexShrink: 0,
                      width: 128,
                      height: 160,
                      borderRadius: '16px',
                      background: getGradient(vibe.gradient),
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s',
                      transform: selectedVibe === vibe.id ? 'scale(1.1)' : 'scale(1)',
                      boxShadow: selectedVibe === vibe.id ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' : 'none',
                      outline: selectedVibe === vibe.id ? '4px solid rgba(255, 255, 255, 0.5)' : 'none',
                      position: 'relative',
                      '&:hover': {
                        transform: selectedVibe === vibe.id ? 'scale(1.1)' : 'scale(1.05)',
                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                      },
                      textTransform: 'none',
                    }}
                  >
                    <Typography sx={{ fontSize: '2.25rem', mb: 1 }}>{vibe.emoji}</Typography>
                    <Typography sx={{ fontSize: '0.875rem', fontWeight: 600, color: 'white' }}>
                      {vibe.name}
                    </Typography>
                    {selectedVibe === vibe.id && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 8,
                          right: 8,
                          width: 24,
                          height: 24,
                          bgcolor: 'white',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <svg width="16" height="16" fill="#9333ea" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                      </Box>
                    )}
                  </Button>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Recommended Playlists Feed */}
        <Box component="section">
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
              {selectedVibe
                ? `Recommended for ${vibes.find((v) => v.id === selectedVibe)?.name}`
                : 'Recommended Playlists'}
            </Typography>
            {selectedVibe && (
              <Button
                onClick={() => setSelectedVibe(null)}
                sx={{
                  fontSize: '0.875rem',
                  color: '#a1a1aa',
                  textTransform: 'none',
                  '&:hover': { color: 'white', bgcolor: 'transparent' },
                }}
              >
                Clear filter
              </Button>
            )}
          </Box>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(2, 1fr)',
                lg: 'repeat(3, 1fr)',
                xl: 'repeat(4, 1fr)',
              },
              gap: 3,
            }}
          >
            {recommendedPlaylists.map((playlist) => (
              <Box
                key={playlist.id}
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '12px',
                  bgcolor: '#27272a',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  '&:hover': { bgcolor: '#3f3f46' },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    aspectRatio: '1 / 1',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background: getGradient(playlist.image),
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      bgcolor: 'rgba(0, 0, 0, 0.2)',
                      transition: 'background-color 0.3s',
                      '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.3)' },
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.3s',
                      '&:hover': { opacity: 1 },
                    }}
                  >
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        bgcolor: 'white',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                        transform: 'scale(1)',
                        transition: 'transform 0.3s',
                        '&:hover': { transform: 'scale(1.1)' },
                      }}
                    >
                      <svg width="32" height="32" fill="#9333ea" viewBox="0 0 24 24" style={{ marginLeft: '4px' }}>
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ p: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 0.5, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {playlist.title}
                  </Typography>
                  <Typography sx={{ fontSize: '0.875rem', color: '#a1a1aa', mb: 1 }}>
                    {playlist.artist}
                  </Typography>
                  <Typography sx={{ fontSize: '0.75rem', color: '#71717a' }}>
                    {playlist.tracks} tracks
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Recommended Artists Section */}
        <Box component="section" sx={{ mt: 6, mb: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
            Recommended Artists
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
                lg: 'repeat(6, 1fr)',
              },
              gap: 3,
            }}
          >
            {recommendedArtists.map((artist) => {
              const isFollowing = followedArtists.has(artist.id);
              return (
                <Box key={artist.id} sx={{ cursor: 'pointer' }}>
                  <Box
                    sx={{
                      position: 'relative',
                      aspectRatio: '1 / 1',
                      borderRadius: '50%',
                      mb: 1.5,
                      overflow: 'hidden',
                      transform: 'scale(1)',
                      transition: 'transform 0.3s',
                      '&:hover': { transform: 'scale(1.05)' },
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        background: getGradient(artist.image),
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        bgcolor: 'rgba(0, 0, 0, 0.2)',
                        transition: 'background-color 0.3s',
                        '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.3)' },
                      }}
                    />
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                      fontSize: '0.875rem',
                      textAlign: 'center',
                      mb: 0.5,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {artist.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '0.75rem',
                      color: '#a1a1aa',
                      textAlign: 'center',
                      mb: 1.5,
                    }}
                  >
                    {artist.genre}
                  </Typography>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFollow(artist.id);
                    }}
                    fullWidth
                    sx={{
                      py: 1,
                      px: 2,
                      borderRadius: '9999px',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      textTransform: 'none',
                      ...(isFollowing
                        ? {
                          bgcolor: 'white',
                          color: 'black',
                          '&:hover': { bgcolor: '#e4e4e7' },
                        }
                        : {
                          bgcolor: '#27272a',
                          color: 'white',
                          border: '1px solid #3f3f46',
                          '&:hover': { bgcolor: '#3f3f46' },
                        }),
                    }}
                  >
                    {isFollowing ? 'Following' : 'Follow'}
                  </Button>
                </Box>
              );
            })}
          </Box>
        </Box>

        {/* New Releases Section */}
        <Box component="section" sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
            New Releases
          </Typography>
          <Typography sx={{ color: '#a1a1aa', mb: 3 }}>
            Latest releases from artists you follow
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(2, 1fr)',
                lg: 'repeat(4, 1fr)',
              },
              gap: 3,
            }}
          >
            {newReleases.map((release) => (
              <Box
                key={release.id}
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '12px',
                  bgcolor: '#27272a',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  '&:hover': { bgcolor: '#3f3f46' },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    aspectRatio: '1 / 1',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background: getGradient(release.image),
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      bgcolor: 'rgba(0, 0, 0, 0.2)',
                      transition: 'background-color 0.3s',
                      '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.3)' },
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.3s',
                      '&:hover': { opacity: 1 },
                    }}
                  >
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        bgcolor: 'white',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                        transform: 'scale(1)',
                        transition: 'transform 0.3s',
                        '&:hover': { transform: 'scale(1.1)' },
                      }}
                    >
                      <svg width="32" height="32" fill="#9333ea" viewBox="0 0 24 24" style={{ marginLeft: '4px' }}>
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ p: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 0.5, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {release.title}
                  </Typography>
                  <Typography sx={{ fontSize: '0.875rem', color: '#a1a1aa', mb: 1 }}>
                    {release.artist}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontSize: '0.75rem', color: '#71717a' }}>
                      {release.type}
                    </Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#71717a' }}>
                      {release.date}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Events Section */}
        <Box component="section" sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
            Events
          </Typography>
          <Typography sx={{ color: '#a1a1aa', mb: 3 }}>
            Upcoming concerts from artists you follow
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(2, 1fr)',
              },
              gap: 3,
            }}
          >
            {events.map((event) => (
              <Box
                key={event.id}
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '12px',
                  bgcolor: '#27272a',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  '&:hover': { bgcolor: '#3f3f46' },
                }}
              >
                <Box sx={{ display: 'flex', gap: 2, p: 3 }}>
                  <Box
                    sx={{
                      position: 'relative',
                      width: 96,
                      height: 96,
                      borderRadius: '8px',
                      background: getGradient(event.image),
                      flexShrink: 0,
                      overflow: 'hidden',
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        bgcolor: 'rgba(0, 0, 0, 0.2)',
                      }}
                    />
                  </Box>
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                      {event.artist}
                    </Typography>
                    <Typography sx={{ fontSize: '0.875rem', color: '#a1a1aa', mb: 1 }}>
                      {event.venue}
                    </Typography>
                    <Typography sx={{ fontSize: '0.875rem', color: '#71717a', mb: 2 }}>
                      {event.city}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2, fontSize: '0.875rem' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#a1a1aa' }}>
                        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <Typography sx={{ fontSize: '0.875rem', color: '#a1a1aa' }}>
                          {event.date}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#a1a1aa' }}>
                        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <Typography sx={{ fontSize: '0.875rem', color: '#a1a1aa' }}>
                          {event.time}
                        </Typography>
                      </Box>
                    </Box>
                    <Button
                      sx={{
                        mt: 2,
                        px: 3,
                        py: 1,
                        bgcolor: 'white',
                        color: 'black',
                        borderRadius: '9999px',
                        fontWeight: 600,
                        textTransform: 'none',
                        '&:hover': { bgcolor: '#e4e4e7' },
                      }}
                    >
                      Get Tickets
                    </Button>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Now Playing Bar */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          bgcolor: '#18181b',
          borderTop: '1px solid #27272a',
          p: 2,
        }}
      >
        <Box
          sx={{
            maxWidth: '1280px',
            mx: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1, minWidth: 0 }}>
            <Box
              sx={{
                width: 56,
                height: 56,
                background: 'linear-gradient(to bottom right, #a855f7, #ec4899)',
                borderRadius: '4px',
                flexShrink: 0,
              }}
            />
            <Box sx={{ minWidth: 0, flex: 1 }}>
              <Typography sx={{ fontWeight: 600, fontSize: '0.875rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                Currently Playing
              </Typography>
              <Typography sx={{ fontSize: '0.75rem', color: '#a1a1aa', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                Artist Name
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button
              sx={{
                minWidth: 40,
                width: 40,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                color: 'white',
                '&:hover': { bgcolor: '#27272a' },
              }}
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 6h2v12H6zm10 0h2v12h-2z" />
              </svg>
            </Button>
            <Button
              sx={{
                minWidth: 48,
                width: 48,
                height: 48,
                bgcolor: 'white',
                color: 'black',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '&:hover': {
                  bgcolor: 'white',
                  transform: 'scale(1.05)',
                },
                transition: 'transform 0.2s',
              }}
            >
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" style={{ marginLeft: '4px' }}>
                <path d="M8 5v14l11-7z" />
              </svg>
            </Button>
            <Button
              sx={{
                minWidth: 40,
                width: 40,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                color: 'white',
                '&:hover': { bgcolor: '#27272a' },
              }}
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
              </svg>
            </Button>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', lg: 'flex' },
              alignItems: 'center',
              gap: 2,
              flex: 1,
              justifyContent: 'flex-end',
            }}
          >
            <Box
              sx={{
                width: 96,
                height: 4,
                bgcolor: '#3f3f46',
                borderRadius: '9999px',
              }}
            >
              <Box
                sx={{
                  width: '30%',
                  height: 4,
                  bgcolor: 'white',
                  borderRadius: '9999px',
                }}
              />
            </Box>
            <Typography sx={{ fontSize: '0.75rem', color: '#a1a1aa', width: 48, textAlign: 'right' }}>
              1:23 / 3:45
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
