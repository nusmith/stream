'use client';

import { useState } from 'react';

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
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 text-white pb-24">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center font-bold text-xl">
              S
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Stream
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="text-zinc-400 hover:text-white transition-colors">Home</a>
            <a href="/discover" className="text-white transition-colors">Discover</a>
            <a href="/social" className="text-zinc-400 hover:text-white transition-colors">Social</a>
            <a href="/create" className="text-zinc-400 hover:text-white transition-colors">Create</a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 text-sm font-medium text-white bg-zinc-800 hover:bg-zinc-700 rounded-full transition-colors">
              Sign In
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        {/* Select Your Vibe Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Select Your Vibe</h2>
          <div className="relative">
            <div className="overflow-x-auto scrollbar-hide pb-4 -mx-6 px-6">
              <div className="flex gap-4 min-w-max">
                {vibes.map((vibe) => (
                  <button
                    key={vibe.id}
                    onClick={() => setSelectedVibe(selectedVibe === vibe.id ? null : vibe.id)}
                    className={`group relative flex-shrink-0 w-32 h-40 rounded-2xl bg-gradient-to-br ${vibe.gradient} p-4 flex flex-col items-center justify-center transition-all duration-300 ${
                      selectedVibe === vibe.id
                        ? 'scale-110 ring-4 ring-white/50 shadow-2xl'
                        : 'hover:scale-105 hover:shadow-xl'
                    }`}
                  >
                    <div className="text-4xl mb-2">{vibe.emoji}</div>
                    <span className="text-sm font-semibold text-white">{vibe.name}</span>
                    {selectedVibe === vibe.id && (
                      <div className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Recommended Playlists Feed */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">
              {selectedVibe
                ? `Recommended for ${vibes.find((v) => v.id === selectedVibe)?.name}`
                : 'Recommended Playlists'}
            </h2>
            {selectedVibe && (
              <button
                onClick={() => setSelectedVibe(null)}
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Clear filter
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {recommendedPlaylists.map((playlist) => (
              <div
                key={playlist.id}
                className="group relative overflow-hidden rounded-xl bg-zinc-800 hover:bg-zinc-700 transition-all duration-300 cursor-pointer"
              >
                <div className="relative aspect-square">
                  <div className={`absolute inset-0 bg-gradient-to-br ${playlist.image}`}></div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-purple-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1 truncate">{playlist.title}</h3>
                  <p className="text-sm text-zinc-400 mb-2">{playlist.artist}</p>
                  <p className="text-xs text-zinc-500">{playlist.tracks} tracks</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recommended Artists Section */}
        <section className="mt-12 mb-12">
          <h2 className="text-2xl font-bold mb-6">Recommended Artists</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {recommendedArtists.map((artist) => {
              const isFollowing = followedArtists.has(artist.id);
              return (
                <div key={artist.id} className="group cursor-pointer">
                  <div className="relative aspect-square rounded-full bg-gradient-to-br mb-3 overflow-hidden group-hover:scale-105 transition-transform">
                    <div className={`absolute inset-0 bg-gradient-to-br ${artist.image}`}></div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                  </div>
                  <h3 className="font-semibold text-sm truncate text-center mb-1">{artist.name}</h3>
                  <p className="text-xs text-zinc-400 text-center mb-3">{artist.genre}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFollow(artist.id);
                    }}
                    className={`w-full py-2 px-4 rounded-full text-sm font-semibold transition-all ${
                      isFollowing
                        ? 'bg-white text-black hover:bg-zinc-200'
                        : 'bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700'
                    }`}
                  >
                    {isFollowing ? 'Following' : 'Follow'}
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* New Releases Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">New Releases</h2>
          <p className="text-zinc-400 mb-6">Latest releases from artists you follow</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newReleases.map((release) => (
              <div
                key={release.id}
                className="group relative overflow-hidden rounded-xl bg-zinc-800 hover:bg-zinc-700 transition-all duration-300 cursor-pointer"
              >
                <div className="relative aspect-square">
                  <div className={`absolute inset-0 bg-gradient-to-br ${release.image}`}></div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-purple-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1 truncate">{release.title}</h3>
                  <p className="text-sm text-zinc-400 mb-2">{release.artist}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-zinc-500">{release.type}</span>
                    <span className="text-xs text-zinc-500">{release.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Events Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Events</h2>
          <p className="text-zinc-400 mb-6">Upcoming concerts from artists you follow</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="group relative overflow-hidden rounded-xl bg-zinc-800 hover:bg-zinc-700 transition-all duration-300 cursor-pointer"
              >
                <div className="flex gap-4 p-6">
                  <div className={`relative w-24 h-24 rounded-lg bg-gradient-to-br ${event.image} flex-shrink-0 overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-xl mb-1">{event.artist}</h3>
                    <p className="text-sm text-zinc-400 mb-2">{event.venue}</p>
                    <p className="text-sm text-zinc-500 mb-4">{event.city}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2 text-zinc-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{event.time}</span>
                      </div>
                    </div>
                    <button className="mt-4 px-6 py-2 bg-white text-black rounded-full font-semibold hover:bg-zinc-200 transition-colors">
                      Get Tickets
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Now Playing Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-800 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1 min-w-0">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded flex-shrink-0"></div>
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-sm truncate">Currently Playing</p>
              <p className="text-xs text-zinc-400 truncate">Artist Name</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 flex items-center justify-center hover:bg-zinc-800 rounded-full transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 6h2v12H6zm10 0h2v12h-2z"/>
              </svg>
            </button>
            <button className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:scale-105 transition-transform">
              <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>
            <button className="w-10 h-10 flex items-center justify-center hover:bg-zinc-800 rounded-full transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex items-center gap-4 flex-1 justify-end">
            <div className="w-24 bg-zinc-700 rounded-full h-1">
              <div className="bg-white h-1 rounded-full" style={{ width: "30%" }}></div>
            </div>
            <span className="text-xs text-zinc-400 w-12 text-right">1:23 / 3:45</span>
          </div>
        </div>
      </div>
    </div>
  );
}
