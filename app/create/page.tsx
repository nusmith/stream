"use client";

import {
  Box,
  Button,
  MenuItem,
  Select,
  type SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { useMemo, useState } from "react";
import { AppShell } from "@/components/AppShell";
import { SpotifyEmbed } from "@/components/SpotifyEmbed";
import {
  parseSpotifyInput,
  type SpotifyResourceType,
} from "@/lib/spotify/parse";

type ComposeKind = "song" | "artist" | "event";

/** Spotify embed preview for event posts — track or playlist teasers */
const EVENT_TEASER_TYPES: SpotifyResourceType[] = ["track", "playlist"];

export default function CreatePostPage() {
  const [composeKind, setComposeKind] = useState<ComposeKind>("song");
  const [spotifyLink, setSpotifyLink] = useState(
    "https://open.spotify.com/track/11dFghVXANMlKmJXsNCbNl",
  );
  const [caption, setCaption] = useState("");
  const [eventTitle, setEventTitle] = useState("Summer Nights Tour");
  const [eventVenue, setEventVenue] = useState("Red Rocks Amphitheatre");
  const [eventWhen, setEventWhen] = useState("Aug 14 · doors 7:30pm");

  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

  const parsedEmbed = useMemo(() => {
    const p = parseSpotifyInput(spotifyLink);
    if (!p) return null;
    if (composeKind === "song") {
      return p.type === "track" ? p : null;
    }
    if (composeKind === "artist") {
      return p.type === "artist" ? p : null;
    }
    if (composeKind === "event") {
      return p.type === "track" || p.type === "playlist" ? p : null;
    }
    return null;
  }, [composeKind, spotifyLink]);

  const handleKindChange = (e: SelectChangeEvent<ComposeKind>) => {
    setComposeKind(e.target.value as ComposeKind);
    setSubmittedMessage(null);
  };

  const handleSubmit = () => {
    if (composeKind === "event") {
      if (!eventTitle.trim()) {
        setSubmittedMessage("Add an event title before posting.");
        return;
      }
    } else if (!parsedEmbed) {
      setSubmittedMessage(
        composeKind === "song" ?
          "Paste a valid Spotify track link or URI."
        : "Paste a valid Spotify artist link or URI.",
      );
      return;
    }
    setSubmittedMessage("Queued locally — connect your API to publish for real.");
  };

  const spotifyPlaceholder = {
    song: "Paste a Spotify track link, URI, or ID",
    artist: "Paste a Spotify artist link, URI, or ID",
    event: "Optional: track or playlist to tease the show",
  }[composeKind];

  const eventPreviewParsed = useMemo(() => {
    if (composeKind !== "event") return null;
    const p = parseSpotifyInput(spotifyLink);
    if (!p || !EVENT_TEASER_TYPES.includes(p.type)) return null;
    return p;
  }, [composeKind, spotifyLink]);

  return (
    <AppShell>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
        Create post
      </Typography>
      <Typography sx={{ color: "#a1a1aa", mb: 4, maxWidth: 520 }}>
        Share a Spotify song or artist embed, or an event poster with optional audio. Wire this
        form to your backend + Spotify APIs when ready.
      </Typography>

      <Box
        sx={{
          display: "grid",
          gap: 4,
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          alignItems: "start",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <Box>
            <Typography sx={{ fontWeight: 600, mb: 1 }}>About</Typography>
            <Select<ComposeKind>
              size="small"
              fullWidth
              value={composeKind}
              onChange={handleKindChange}
              sx={{
                bgcolor: "#27272a",
                color: "white",
                borderRadius: 1,
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#3f3f46",
                },
              }}
            >
              <MenuItem value="song">Song</MenuItem>
              <MenuItem value="artist">Artist</MenuItem>
              <MenuItem value="event">Concert / event</MenuItem>
            </Select>
          </Box>

          {composeKind === "event" ?
            <>
              <TextField
                label="Event title"
                value={eventTitle}
                onChange={(e) => setEventTitle(e.target.value)}
                fullWidth
                slotProps={{
                  htmlInput: { sx: { color: "white" } },
                  inputLabel: { sx: { color: "#a1a1aa" } },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    bgcolor: "#27272a",
                  },
                  "& fieldset": { borderColor: "#3f3f46" },
                }}
              />
              <TextField
                label="Venue"
                value={eventVenue}
                onChange={(e) => setEventVenue(e.target.value)}
                fullWidth
                slotProps={{
                  htmlInput: { sx: { color: "white" } },
                  inputLabel: { sx: { color: "#a1a1aa" } },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": { bgcolor: "#27272a" },
                  "& fieldset": { borderColor: "#3f3f46" },
                }}
              />
              <TextField
                label="Date & time"
                value={eventWhen}
                onChange={(e) => setEventWhen(e.target.value)}
                fullWidth
                slotProps={{
                  htmlInput: { sx: { color: "white" } },
                  inputLabel: { sx: { color: "#a1a1aa" } },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": { bgcolor: "#27272a" },
                  "& fieldset": { borderColor: "#3f3f46" },
                }}
              />
            </>
          : null}

          <TextField
            label={
              composeKind === "event" ?
                spotifyPlaceholder
              : "Spotify URL, URI, or ID"
            }
            value={spotifyLink}
            onChange={(e) => setSpotifyLink(e.target.value)}
            fullWidth
            multiline={composeKind === "event"}
            minRows={composeKind === "event" ? 2 : 1}
            slotProps={{
              htmlInput: { sx: { color: "white", fontFamily: "inherit" } },
              inputLabel: { sx: { color: "#a1a1aa" } },
            }}
            sx={{
              "& .MuiOutlinedInput-root": { bgcolor: "#27272a" },
              "& fieldset": { borderColor: "#3f3f46" },
            }}
          />

          <TextField
            label="Caption"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            fullWidth
            multiline
            minRows={3}
            placeholder="Say something about what you're sharing..."
            slotProps={{
              htmlInput: { sx: { color: "white" } },
              inputLabel: { sx: { color: "#a1a1aa" } },
            }}
            sx={{
              "& .MuiOutlinedInput-root": { bgcolor: "#27272a" },
              "& fieldset": { borderColor: "#3f3f46" },
            }}
          />

          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              alignSelf: "flex-start",
              px: 3,
              py: 1.25,
              textTransform: "none",
              fontWeight: 600,
              background: "linear-gradient(to right, #9333ea, #db2777)",
              "&:hover": {
                background: "linear-gradient(to right, #7c3aed, #be185d)",
              },
            }}
          >
            Post
          </Button>

          {submittedMessage ?
            <Typography sx={{ color: submittedMessage.includes("Queued") ? "#86efac" : "#fca5a5" }}>
              {submittedMessage}
            </Typography>
          : null}
        </Box>

        <Box
          sx={{
            position: "sticky",
            top: 96,
            bgcolor: "#18181b",
            border: "1px solid #27272a",
            borderRadius: 3,
            p: 2.5,
          }}
        >
          <Typography sx={{ fontWeight: 700, mb: 2 }}>Preview</Typography>

          {composeKind === "event" ?
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
                <Typography sx={{ fontWeight: 700, mb: 0.5 }}>{eventTitle || "Untitled"}</Typography>
                <Typography sx={{ color: "#a1a1aa", fontSize: "0.875rem" }}>
                  {eventVenue} · {eventWhen}
                </Typography>
              </Box>
              {caption ?
                <Typography sx={{ color: "#e4e4e7", mb: 2, fontSize: "0.9375rem" }}>
                  {caption}
                </Typography>
              : null}
              {eventPreviewParsed ?
                <SpotifyEmbed
                  type={eventPreviewParsed.type}
                  id={eventPreviewParsed.id}
                  variant={eventPreviewParsed.type === "playlist" ? "compact" : "compact"}
                />
              : (
                <Typography sx={{ fontSize: "0.875rem", color: "#71717a" }}>
                  Paste a Spotify track or playlist URL to preview audio for this event.
                </Typography>
              )}
            </>
          : parsedEmbed ?
            <>
              <Typography sx={{ color: "#e4e4e7", mb: 2 }}>{caption || "Your caption"}</Typography>
              <SpotifyEmbed
                type={parsedEmbed.type as "track" | "artist"}
                id={parsedEmbed.id}
              />
            </>
          : (
            <Typography sx={{ fontSize: "0.875rem", color: "#71717a" }}>
              {composeKind === "song" ?
                "Paste a track link to see the Spotify embed preview."
              : "Paste an artist profile link to see the embed preview."}
            </Typography>
          )}
        </Box>
      </Box>
    </AppShell>
  );
}
