import React from 'react'
import { Instagram, Video, Palette, Linkedin } from 'lucide-react'

function Footer() {
  return (
    <footer className="mt-24 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/70 text-sm">© {new Date().getFullYear()} Ayan Das — Visual Storyteller & Artist</p>
            <div className="flex items-center gap-3">
              <a href="https://instagram.com" aria-label="Instagram" className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/10">
                <Instagram size={18} />
              </a>
              <a href="https://vimeo.com" aria-label="Vimeo" className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/10">
                <Video size={18} />
              </a>
              <a href="https://behance.net" aria-label="Portfolio" className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/10">
                <Palette size={18} />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/10">
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
