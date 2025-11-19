import React from 'react'

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#0b0b0d]/90 border-b-2 border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="inline-flex items-center gap-3">
            <div className="w-9 h-9 grid place-items-center bg-white text-[#0b0b0d] font-black text-xs leading-none tracking-tight border-2 border-white shadow-[4px_4px_0_0_#9be7ff]">
              AD
            </div>
            <span className="text-white font-black uppercase tracking-[0.2em] text-sm">
              Ayan Das
            </span>
          </a>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-6">
              <li><a href="#work" className="px-2 py-1 border-2 border-white/30 hover:border-white transition-colors font-semibold uppercase text-xs">Work</a></li>
              <li><a href="#about" className="px-2 py-1 border-2 border-white/30 hover:border-white transition-colors font-semibold uppercase text-xs">About</a></li>
              <li><a href="#contact" className="px-2 py-1 border-2 border-white/30 hover:border-white transition-colors font-semibold uppercase text-xs">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
