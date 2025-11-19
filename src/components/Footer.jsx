import React from 'react'
import { Instagram, Video, Palette, Linkedin } from 'lucide-react'

function Footer() {
  return (
    <footer className="mt-24 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 p-6 bg-[#0b0b0d]/60 backdrop-blur">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/70 text-sm">© {new Date().getFullYear()} Ayan Das — Visual Storyteller & Artist</p>
            <div className="flex items-center gap-3">
              <a href="https://instagram.com" aria-label="Instagram" className="p-2 rounded-lg border border-white/10 text-white/80 hover:text-white hover:border-white/20 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://vimeo.com" aria-label="Vimeo" className="p-2 rounded-lg border border-white/10 text-white/80 hover:text-white hover:border-white/20 transition-colors">
                <Video size={18} />
              </a>
              <a href="https://behance.net" aria-label="Portfolio" className="p-2 rounded-lg border border-white/10 text-white/80 hover:text-white hover:border-white/20 transition-colors">
                <Palette size={18} />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="p-2 rounded-lg border border-white/10 text-white/80 hover:text-white hover:border-white/20 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
