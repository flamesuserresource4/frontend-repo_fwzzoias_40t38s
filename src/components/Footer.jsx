import React from 'react'
import { Instagram, Video, Palette, Linkedin } from 'lucide-react'

function Footer() {
  return (
    <footer className="mt-24 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-2 border-white/20 p-6 bg-[#0b0b0d]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/80 text-xs uppercase font-black">© {new Date().getFullYear()} Ayan Das — Visual Storyteller & Artist</p>
            <div className="flex items-center gap-3">
              <a href="https://instagram.com" aria-label="Instagram" className="p-2 border-2 border-white/30 text-white hover:border-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://vimeo.com" aria-label="Vimeo" className="p-2 border-2 border-white/30 text-white hover:border-white transition-colors">
                <Video size={18} />
              </a>
              <a href="https://behance.net" aria-label="Portfolio" className="p-2 border-2 border-white/30 text-white hover:border-white transition-colors">
                <Palette size={18} />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="p-2 border-2 border-white/30 text-white hover:border-white transition-colors">
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
