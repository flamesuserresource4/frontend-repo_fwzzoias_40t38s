import React from 'react'
import { Clapperboard, FileText, Palette, Camera, ExternalLink } from 'lucide-react'

const cards = [
  {
    title: 'Filmmaking',
    subtitle: 'Short film • Reels • Direction',
    href: 'https://filmmaking.ayan.example.com',
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
    href: 'https://script.ayan.example.com',
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
    href: 'https://painting.ayan.example.com',
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
    href: 'https://photography.ayan.example.com',
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
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Selected Work</h2>
          <p className="hidden sm:block text-white/60 text-sm">Hover to preview aura • Press Enter to open</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map(({ title, subtitle, href, accent, description, tags, Icon, image }) => (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${title} — ${subtitle}. Open in new tab.`}
              className="group relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 p-4 aspect-[4/5] flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 transition-transform duration-300 will-change-transform hover:-translate-y-1"
            >
              {/* Image banner */}
              <div className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-black/40 aspect-[16/9]">
                <img
                  src={image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover scale-105 transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${accent} opacity-20 mix-blend-screen`} />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0b0d] via-transparent/40 to-transparent" />
                <div className="absolute left-3 top-3 h-10 w-10 rounded-lg border border-white/20 bg-white/10 grid place-items-center text-cyan-100">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
              </div>

              {/* Title + subtitle */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-white leading-tight">{title}</h3>
                <p className="mt-1 text-xs font-medium tracking-wide text-white/60">{subtitle}</p>
              </div>

              {/* Description */}
              <p className="mt-2 text-sm text-white/70 group-hover:text-white/80 transition-colors">
                {description}
              </p>

              {/* Tags */}
              <div className="mt-3 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] leading-4 text-cyan-100/80 bg-white/5 border border-white/10 rounded-full px-2.5 py-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] group-hover:border-cyan-300/40 group-hover:text-cyan-100 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="mt-auto pt-3 flex items-center justify-between">
                <span className="text-sm text-white/70 group-hover:text-white transition-colors">Explore the collection</span>
                <span className="inline-flex items-center gap-1 text-cyan-200 group-hover:text-white transition-colors">
                  <ExternalLink className="h-4 w-4" aria-hidden />
                </span>
              </div>

              {/* Borders and inner sheen */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-cyan-300/40 transition-all" />
              <div className="absolute inset-0 rounded-2xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]" aria-hidden />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkGrid
