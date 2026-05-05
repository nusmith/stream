export type FeedPostKind = "track" | "artist" | "event";

export type FeedPost = {
  id: string;
  scope: "friend" | "recent";
  author: { displayName: string; handle: string };
  kind: FeedPostKind;
  caption: string;
  timeLabel: string;
  /** Spotify resource when kind is track or artist */
  spotify?: { type: "track" | "artist"; id: string };
  /** When kind is event — optional teaser track */
  event?: {
    title: string;
    venue: string;
    when: string;
    spotify?: { type: "track"; id: string };
  };
};

/** Demo feed — swap for API data wired to Spotify + your backend */
export const MOCK_FEED: FeedPost[] = [
  {
    id: "1",
    scope: "friend",
    author: { displayName: "Alex Rivera", handle: "alexr" },
    kind: "track",
    caption: "This chorus hits different after midnight.",
    timeLabel: "2h ago",
    spotify: { type: "track", id: "0VjIjW4GlUZAMYd2uxXUmp" },
  },
  {
    id: "2",
    scope: "friend",
    author: { displayName: "Jordan Lee", handle: "jordo" },
    kind: "artist",
    caption: "Seeing them live changed how I hear the albums.",
    timeLabel: "5h ago",
    spotify: { type: "artist", id: "1Xyo4uRuVi5PnRBszY8ZSi" },
  },
  {
    id: "3",
    scope: "recent",
    author: { displayName: "Taylor Kim", handle: "taykim" },
    kind: "event",
    caption: "Tickets go fast — who's going?",
    timeLabel: "Yesterday",
    event: {
      title: "Arena tour · night 1",
      venue: "Madison Square Garden",
      when: "Mar 22 · doors 7pm",
      spotify: { type: "track", id: "11dFghVXANMlKmJXsNCbNl" },
    },
  },
  {
    id: "4",
    scope: "friend",
    author: { displayName: "Sam Okonkwo", handle: "samok" },
    kind: "track",
    caption: "Producer went crazy on the low end.",
    timeLabel: "Yesterday",
    spotify: { type: "track", id: "4iV5W9uYEdYUVa79Axb7Rh" },
  },
  {
    id: "5",
    scope: "recent",
    author: { displayName: "Priya Patel", handle: "priyam" },
    kind: "artist",
    caption: "New era, new palette — looping this tonight.",
    timeLabel: "2d ago",
    spotify: { type: "artist", id: "06HL4z0CvFAxYT27PHye08" },
  },
];

export const MOCK_SIMILAR_TO_LIKES: {
  title: string;
  artist: string;
  type: "track";
  id: string;
}[] = [
  { title: "Blinding Lights", artist: "The Weeknd", type: "track", id: "0VjIjW4GlUZAMYd2uxXUmp" },
  { title: "Save Your Tears", artist: "The Weeknd", type: "track", id: "5QO79kh1waicV47BqGRL3g" },
  { title: "Levitating", artist: "Dua Lipa", type: "track", id: "39LLxExYz6ewLAcYRZdRyW" },
  { title: "As It Was", artist: "Harry Styles", type: "track", id: "7I6DceMT3vtTY8jxKvfYMS" },
];
