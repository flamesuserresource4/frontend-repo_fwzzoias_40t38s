import React from 'react'

function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="group inline-flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-cyan-300/70 to-blue-500/50 ring-1 ring-white/20 shadow-[0_0_30px_0_rgba(155,231,255,0.35)]" />
            <span className="text-white/90 group-hover:text-white transition-colors font-semibold tracking-wider uppercase text-sm">
              Ayan Das
            </span>
          </a>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-6">
              <li><a href="#work" className="text-white/70 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 rounded px-1">Work</a></li>
              <li><a href="#about" className="text-white/70 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 rounded px-1">About</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 rounded px-1">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
