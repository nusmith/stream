'use client';

import { Box, Button, Typography } from '@mui/material';

export default function Social() {
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
                color: 'white',
                textDecoration: 'none',
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
          py: 6,
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
          Social
        </Typography>
        <Typography sx={{ color: '#a1a1aa' }}>
          Connect with friends and see what they're listening to.
        </Typography>
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
