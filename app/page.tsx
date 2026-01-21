import { something } from "./test";

export default function Home() {
  something()

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 text-white">
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
            <a href="/" className="text-white transition-colors">Home</a>
            <a href="/discover" className="text-zinc-400 hover:text-white transition-colors">Discover</a>
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
        {/* Hero Section */}
        <section className="mb-12">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 p-12">
            <div className="relative z-10 max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                Discover Your Sound
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Stream millions of songs, discover new artists, and create the perfect playlist for every moment.
              </p>
              <div className="flex gap-4">
                <button className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-white/90 transition-colors">
                  Start Listening
                </button>
                <button className="px-8 py-4 bg-white/10 text-white rounded-full font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm">
                  Explore
                </button>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
          </div>
        </section>

        {/* Recently Played */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Recently Played</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="relative aspect-square rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 mb-3 overflow-hidden group-hover:scale-105 transition-transform">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <h3 className="font-semibold text-sm truncate">Song Title {item}</h3>
                <p className="text-xs text-zinc-400 truncate">Artist Name</p>
              </div>
            ))}
          </div>
        </section>

        {/* Made for You */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Made for You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Daily Mix 1", subtitle: "Based on your recent listening", color: "from-blue-500 to-cyan-500" },
              { title: "Discover Weekly", subtitle: "Your weekly mixtape of fresh music", color: "from-green-500 to-emerald-500" },
              { title: "Release Radar", subtitle: "New releases from artists you follow", color: "from-orange-500 to-red-500" },
            ].map((playlist, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-xl bg-zinc-800 hover:bg-zinc-700 transition-colors p-6 cursor-pointer">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${playlist.color} rounded-full blur-2xl opacity-20`}></div>
                <div className="relative z-10 flex items-center gap-4">
                  <div className={`w-20 h-20 rounded-lg bg-gradient-to-br ${playlist.color} flex-shrink-0`}></div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg mb-1">{playlist.title}</h3>
                    <p className="text-sm text-zinc-400">{playlist.subtitle}</p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Artists */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Popular Artists</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Artist One", genre: "Pop" },
              { name: "Artist Two", genre: "Rock" },
              { name: "Artist Three", genre: "Hip Hop" },
              { name: "Artist Four", genre: "Electronic" },
              { name: "Artist Five", genre: "Jazz" },
              { name: "Artist Six", genre: "Indie" },
            ].map((artist, idx) => (
              <div key={idx} className="group cursor-pointer text-center">
                <div className="relative w-full aspect-square rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 mb-3 overflow-hidden group-hover:scale-105 transition-transform">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                </div>
                <h3 className="font-semibold">{artist.name}</h3>
                <p className="text-xs text-zinc-400">{artist.genre}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Browse by Genre */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Browse by Genre</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
              <div key={idx} className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${genre.color} p-8 cursor-pointer group hover:scale-105 transition-transform`}>
                <h3 className="text-2xl font-bold relative z-10">{genre.name}</h3>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Now Playing Bar (Fixed at bottom) */}
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
                <path d="M6 6h2v12H6zm10 0h2v12h-2z" />
              </svg>
            </button>
            <button className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:scale-105 transition-transform">
              <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            <button className="w-10 h-10 flex items-center justify-center hover:bg-zinc-800 rounded-full transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
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
