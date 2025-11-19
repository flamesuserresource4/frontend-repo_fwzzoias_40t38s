import React from 'react'

function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#0b0b0d]/60 bg-[#0b0b0d]/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="inline-flex items-center gap-3 group">
            <div className="w-9 h-9 grid place-items-center rounded-lg bg-white/90 text-[#0b0b0d] font-semibold text-xs leading-none shadow-sm group-hover:shadow transition-shadow">
              AD
            </div>
            <span className="text-white/90 font-semibold tracking-tight text-sm group-hover:text-white transition-colors">
              Ayan Das
            </span>
          </a>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-6">
              <li><a href="#work" className="px-2 py-1 text-white/80 hover:text-white transition-colors text-sm">Work</a></li>
              <li><a href="#about" className="px-2 py-1 text-white/80 hover:text-white transition-colors text-sm">About</a></li>
              <li><a href="#contact" className="px-2 py-1 text-white/80 hover:text-white transition-colors text-sm">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
