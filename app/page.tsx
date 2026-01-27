'use client';

import { something } from "./test";
import { Box, Button, Typography } from '@mui/material';

// Helper function to convert Tailwind gradient classes to CSS gradient
const getGradient = (gradientClass: string) => {
  const gradientMap: Record<string, string> = {
    'from-blue-500 to-cyan-500': 'linear-gradient(to bottom right, #3b82f6, #06b6d4)',
    'from-green-500 to-emerald-500': 'linear-gradient(to bottom right, #22c55e, #10b981)',
    'from-orange-500 to-red-500': 'linear-gradient(to bottom right, #f97316, #ef4444)',
    'from-pink-500 to-rose-500': 'linear-gradient(to bottom right, #ec4899, #f43f5e)',
    'from-purple-500 to-pink-500': 'linear-gradient(to bottom right, #a855f7, #ec4899)',
    'from-purple-500 via-pink-500 to-orange-500': 'linear-gradient(to right, #a855f7, #ec4899, #f97316)',
    'from-purple-600 via-pink-600 to-orange-500': 'linear-gradient(to right, #9333ea, #db2777, #f97316)',
    'from-pink-500 to-indigo-500': 'linear-gradient(to bottom right, #ec4899, #6366f1)',
    'from-cyan-500 to-blue-500': 'linear-gradient(to bottom right, #06b6d4, #3b82f6)',
    'from-amber-500 to-yellow-500': 'linear-gradient(to bottom right, #f59e0b, #eab308)',
    'from-gray-500 to-zinc-500': 'linear-gradient(to bottom right, #6b7280, #71717a)',
    'from-violet-500 to-purple-500': 'linear-gradient(to bottom right, #8b5cf6, #a855f7)',
  };
  return gradientMap[gradientClass] || 'linear-gradient(to bottom right, #a855f7, #ec4899)';
};

export default function Home() {
  something()

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #18181b, #27272a, #18181b)',
        color: 'white',
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
                color: 'white',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
            >
              Home
            </Typography>
            <Typography
              component="a"
              href="/discover"
              sx={{
                color: '#a1a1aa',
                textDecoration: 'none',
                '&:hover': { color: 'white' },
                transition: 'color 0.2s',
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
        {/* Hero Section */}
        <Box component="section" sx={{ mb: 6 }}>
          <Box
            sx={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '16px',
              background: 'linear-gradient(to right, #9333ea, #db2777, #f97316)',
              p: 6,
            }}
          >
            <Box sx={{ position: 'relative', zIndex: 10, maxWidth: '42rem' }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '3rem', md: '4.5rem' },
                  fontWeight: 'bold',
                  mb: 2,
                }}
              >
                Discover Your Sound
              </Typography>
              <Typography
                sx={{
                  fontSize: '1.25rem',
                  color: 'rgba(255, 255, 255, 0.9)',
                  mb: 4,
                }}
              >
                Stream millions of songs, discover new artists, and create the perfect playlist for every moment.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  sx={{
                    px: 4,
                    py: 2,
                    bgcolor: 'white',
                    color: '#9333ea',
                    borderRadius: '9999px',
                    fontWeight: 600,
                    textTransform: 'none',
                    '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.9)' },
                  }}
                >
                  Start Listening
                </Button>
                <Button
                  sx={{
                    px: 4,
                    py: 2,
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    borderRadius: '9999px',
                    fontWeight: 600,
                    textTransform: 'none',
                    backdropFilter: 'blur(4px)',
                    '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.2)' },
                  }}
                >
                  Explore
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: 384,
                height: 384,
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                filter: 'blur(96px)',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: 384,
                height: 384,
                bgcolor: 'rgba(168, 85, 247, 0.2)',
                borderRadius: '50%',
                filter: 'blur(96px)',
              }}
            />
          </Box>
        </Box>

        {/* Recently Played */}
        <Box component="section" sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
            Recently Played
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(2, 1fr)',
                md: 'repeat(4, 1fr)',
                lg: 'repeat(6, 1fr)',
              },
              gap: 2,
            }}
          >
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Box key={item} sx={{ cursor: 'pointer' }}>
                <Box
                  sx={{
                    position: 'relative',
                    aspectRatio: '1 / 1',
                    borderRadius: '8px',
                    background: 'linear-gradient(to bottom right, #a855f7, #ec4899)',
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
                        width: 48,
                        height: 48,
                        bgcolor: 'white',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <svg width="24" height="24" fill="#9333ea" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </Box>
                  </Box>
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Song Title {item}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '0.75rem',
                    color: '#a1a1aa',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Artist Name
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Made for You */}
        <Box component="section" sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
            Made for You
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(2, 1fr)',
                lg: 'repeat(3, 1fr)',
              },
              gap: 3,
            }}
          >
            {[
              { title: "Daily Mix 1", subtitle: "Based on your recent listening", color: "from-blue-500 to-cyan-500" },
              { title: "Discover Weekly", subtitle: "Your weekly mixtape of fresh music", color: "from-green-500 to-emerald-500" },
              { title: "Release Radar", subtitle: "New releases from artists you follow", color: "from-orange-500 to-red-500" },
            ].map((playlist, idx) => (
              <Box
                key={idx}
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '12px',
                  bgcolor: '#27272a',
                  p: 3,
                  cursor: 'pointer',
                  transition: 'background-color 0.3s',
                  '&:hover': { bgcolor: '#3f3f46' },
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: 128,
                    height: 128,
                    background: getGradient(playlist.color),
                    borderRadius: '50%',
                    filter: 'blur(64px)',
                    opacity: 0.2,
                  }}
                />
                <Box sx={{ position: 'relative', zIndex: 10, display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '8px',
                      background: getGradient(playlist.color),
                      flexShrink: 0,
                    }}
                  />
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                      {playlist.title}
                    </Typography>
                    <Typography sx={{ fontSize: '0.875rem', color: '#a1a1aa' }}>
                      {playlist.subtitle}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      opacity: 0,
                      transition: 'opacity 0.3s',
                      '&:hover': { opacity: 1 },
                    }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        bgcolor: '#22c55e',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Popular Artists */}
        <Box component="section" sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
            Popular Artists
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(2, 1fr)',
                md: 'repeat(4, 1fr)',
                lg: 'repeat(6, 1fr)',
              },
              gap: 3,
            }}
          >
            {[
              { name: "Artist One", genre: "Pop" },
              { name: "Artist Two", genre: "Rock" },
              { name: "Artist Three", genre: "Hip Hop" },
              { name: "Artist Four", genre: "Electronic" },
              { name: "Artist Five", genre: "Jazz" },
              { name: "Artist Six", genre: "Indie" },
            ].map((artist, idx) => (
              <Box key={idx} sx={{ cursor: 'pointer', textAlign: 'center' }}>
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '1 / 1',
                    borderRadius: '50%',
                    background: 'linear-gradient(to bottom right, #a855f7, #ec4899, #f97316)',
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
                      bgcolor: 'rgba(0, 0, 0, 0.2)',
                      transition: 'background-color 0.3s',
                      '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.3)' },
                    }}
                  />
                </Box>
                <Typography sx={{ fontWeight: 600 }}>{artist.name}</Typography>
                <Typography sx={{ fontSize: '0.75rem', color: '#a1a1aa' }}>
                  {artist.genre}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Browse by Genre */}
        <Box component="section" sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
            Browse by Genre
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(2, 1fr)',
                md: 'repeat(4, 1fr)',
              },
              gap: 2,
            }}
          >
            {[
              { name: "Pop", color: "from-pink-500 to-rose-500" },
              { name: "Rock", color: "from-red-500 to-orange-500" },
              { name: "Hip Hop", color: "from-purple-500 to-indigo-500" },
              { name: "Electronic", color: "from-cyan-500 to-blue-500" },
              { name: "Jazz", color: "from-amber-500 to-yellow-500" },
              { name: "Classical", color: "from-gray-500 to-zinc-500" },
              { name: "Country", color: "from-green-500 to-emerald-500" },
              { name: "R&B", color: "from-violet-500 to-purple-500" },
            ].map((genre, idx) => (
              <Box
                key={idx}
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '12px',
                  background: getGradient(genre.color),
                  p: 4,
                  cursor: 'pointer',
                  transform: 'scale(1)',
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'scale(1.05)' },
                }}
              >
                <Typography variant="h4" sx={{ fontWeight: 'bold', position: 'relative', zIndex: 10 }}>
                  {genre.name}
                </Typography>
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    width: 96,
                    height: 96,
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '50%',
                    filter: 'blur(64px)',
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Now Playing Bar (Fixed at bottom) */}
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
