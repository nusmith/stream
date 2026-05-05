"use client";

import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/", label: "Discover" },
  { href: "/create", label: "Create" },
  { href: "/listen", label: "Listen" },
] as const;

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const active = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #18181b, #27272a, #18181b)",
        color: "white",
        pb: 3,
      }}
    >
      <Box
        component="header"
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backgroundColor: "rgba(24, 24, 27, 0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #27272a",
        }}
      >
        <Box
          sx={{
            maxWidth: "960px",
            mx: "auto",
            px: 3,
            py: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Box
              sx={{
                width: 40,
                height: 40,
                background: "linear-gradient(to bottom right, #a855f7, #ec4899)",
                borderRadius: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                fontSize: "1.25rem",
              }}
            >
              S
            </Box>
            <Box>
              <Typography
                component={Link}
                href="/"
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  background: "linear-gradient(to right, #a78bfa, #f472b6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textDecoration: "none",
                }}
              >
                Stream
              </Typography>
              <Typography sx={{ fontSize: "0.7rem", color: "#a1a1aa", lineHeight: 1.2 }}>
                Powered by Spotify
              </Typography>
            </Box>
          </Box>
          <Box
            component="nav"
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              gap: 3,
            }}
          >
            {NAV_ITEMS.map(({ href, label }) => (
              <Typography
                key={href}
                component={Link}
                href={href}
                sx={{
                  color: active(href) ? "white" : "#a1a1aa",
                  textDecoration: "none",
                  fontWeight: active(href) ? 600 : 400,
                  fontSize: "0.9375rem",
                  transition: "color 0.15s",
                  "&:hover": { color: "white" },
                }}
              >
                {label}
              </Typography>
            ))}
          </Box>
          <Button
            variant="contained"
            sx={{
              px: 2,
              py: 1,
              fontSize: "0.875rem",
              fontWeight: 500,
              color: "white",
              bgcolor: "#27272a",
              borderRadius: "9999px",
              textTransform: "none",
              "&:hover": { bgcolor: "#3f3f46" },
            }}
          >
            Connect Spotify
          </Button>
        </Box>
        <Box
          sx={{
            display: { xs: "flex", sm: "none" },
            borderTop: "1px solid #27272a",
            px: 2,
            py: 1,
            gap: 2,
            justifyContent: "center",
          }}
        >
          {NAV_ITEMS.map(({ href, label }) => (
            <Typography
              key={href}
              component={Link}
              href={href}
              sx={{
                color: active(href) ? "white" : "#a1a1aa",
                textDecoration: "none",
                fontSize: "0.875rem",
                fontWeight: active(href) ? 600 : 400,
              }}
            >
              {label}
            </Typography>
          ))}
        </Box>
      </Box>
      <Box sx={{ maxWidth: "960px", mx: "auto", px: 3, py: 4 }}>{children}</Box>
    </Box>
  );
}
