export default function Social() {
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
            <a href="/" className="text-zinc-400 hover:text-white transition-colors">Home</a>
            <a href="/discover" className="text-zinc-400 hover:text-white transition-colors">Discover</a>
            <a href="/social" className="text-white transition-colors">Social</a>
            <a href="/create" className="text-zinc-400 hover:text-white transition-colors">Create</a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 text-sm font-medium text-white bg-zinc-800 hover:bg-zinc-700 rounded-full transition-colors">
              Sign In
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-4">Social</h1>
        <p className="text-zinc-400">Connect with friends and see what they're listening to.</p>
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
