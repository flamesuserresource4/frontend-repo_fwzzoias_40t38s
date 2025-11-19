import React from 'react'
import { Clapperboard, FileText, Palette, Camera, ExternalLink } from 'lucide-react'

const cards = [
  {
    title: 'Filmmaking',
    subtitle: 'Short film • Reels • Direction',
    href: 'https://film.ayandas.art/',
    accent: 'from-cyan-300 to-blue-500',
    description:
      'Narrative shorts blending surreal noir with emotive pacing. Direction, cinematography, and edit experiments.',
    tags: ['Direction', 'Edit', 'Cinematography', 'Color'],
    Icon: Clapperboard,
    image:
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1400&q=80'
  },
  {
    title: 'Scriptwriting',
    subtitle: 'Spec • Microfiction • Screenplays',
    href: 'https://script.ayandas.art/',
    accent: 'from-cyan-200 to-teal-400',
    description:
      'Character-first stories, minimal dialogue, and visual metaphors. Treatments, beat sheets, and drafts.',
    tags: ['Spec', 'Beats', 'Dialogue', 'Structure'],
    Icon: FileText,
    image:
      'https://images.unsplash.com/photo-1513185041617-8ab03f83d6c5?auto=format&fit=crop&w=1400&q=80'
  },
  {
    title: 'Painting',
    subtitle: 'Ink • Mixed Media • Brutalist Forms',
    href: 'https://paint.ayandas.art/',
    accent: 'from-teal-300 to-cyan-400',
    description:
      'Noir palettes and neon accents across abstract portraits and brutalist shapes on textured canvas.',
    tags: ['Acrylic', 'Ink', 'Surreal', 'Noir'],
    Icon: Palette,
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80'
  },
  {
    title: 'Photography',
    subtitle: 'Street • Portrait • Low-light',
    href: 'https://photography.ayandas.art/',
    accent: 'from-blue-300 to-cyan-300',
    description:
      'Grain, vignette, and long exposure studies exploring light as a character in urban spaces.',
    tags: ['35mm', 'Long Exposure', 'Monochrome', 'Cyan Glow'],
    Icon: Camera,
    image:
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1400&q=80'
  }
]

function WorkGrid() {
  return (
    <section id="work" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="text-3xl font-semibold tracking-tight text-white">Selected Work</h2>
          <p className="hidden sm:block text-white/60 text-sm">Hover for details</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map(({ title, subtitle, href, accent, description, tags, Icon, image }) => (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${title} — ${subtitle}. Open in new tab.`}
              className="group relative overflow-hidden rounded-xl border border-white/10 p-4 aspect-[4/5] flex flex-col focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/30 transition-transform duration-200 will-change-transform hover:-translate-y-1 bg-[#0b0b0d]/50 backdrop-blur"
            >
              {/* Image banner */}
              <div className="relative w-full overflow-hidden rounded-lg border border-white/10 bg-black/40 aspect-[16/9]">
                <img
                  src={image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover scale-105 transition-transform duration-300 group-hover:scale-110"
                />
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${accent} opacity-20`} />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0b0d] via-transparent/40 to-transparent" />
                <div className="absolute left-3 top-3 h-10 w-10 grid place-items-center rounded-md bg-white text-[#0b0b0d] font-semibold text-xs shadow-sm">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
              </div>

              {/* Title + subtitle */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-white leading-tight">{title}</h3>
                <p className="mt-1 text-xs text-white/70">{subtitle}</p>
              </div>

              {/* Description */}
              <p className="mt-3 text-sm text-white/80">
                {description}
              </p>

              {/* Tags */}
              <div className="mt-3 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] leading-4 text-white/80 bg-white/5 border border-white/10 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="mt-auto pt-3 flex items-center justify-between">
                <span className="text-xs text-white/70">Open</span>
                <span className="inline-flex items-center gap-1 text-cyan-200">
                  <ExternalLink className="h-4 w-4" aria-hidden />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkGrid
