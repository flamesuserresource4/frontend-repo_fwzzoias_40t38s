import React from 'react'
import { Clapperboard, FileText, Palette, Camera, ExternalLink } from 'lucide-react'

const cards = [
  {
    title: 'Filmmaking',
    subtitle: 'Shorts • Reels • Direction',
    href: 'https://filmmaking.ayan.example.com',
    accent: 'from-cyan-300 to-blue-500',
    description:
      'Narrative shorts blending surreal noir with emotive pacing. Direction, cinematography, and edit experiments.',
    tags: ['Direction', 'Edit', 'Cinematography', 'Color'],
    Icon: Clapperboard
  },
  {
    title: 'Scriptwriting',
    subtitle: 'Spec • Microfiction • Screenplays',
    href: 'https://script.ayan.example.com',
    accent: 'from-cyan-200 to-teal-400',
    description:
      'Character-first stories, minimal dialogue, and visual metaphors. Treatments, beat sheets, and drafts.',
    tags: ['Spec', 'Beats', 'Dialogue', 'Structure'],
    Icon: FileText
  },
  {
    title: 'Painting',
    subtitle: 'Ink • Mixed Media • Brutalist Forms',
    href: 'https://painting.ayan.example.com',
    accent: 'from-teal-300 to-cyan-400',
    description:
      'Noir palettes and neon accents across abstract portraits and brutalist shapes on textured canvas.',
    tags: ['Acrylic', 'Ink', 'Surreal', 'Noir'],
    Icon: Palette
  },
  {
    title: 'Photography',
    subtitle: 'Street • Portrait • Low-light',
    href: 'https://photography.ayan.example.com',
    accent: 'from-blue-300 to-cyan-300',
    description:
      'Grain, vignette, and long exposure studies exploring light as a character in urban spaces.',
    tags: ['35mm', 'Long Exposure', 'Monochrome', 'Cyan Glow'],
    Icon: Camera
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
          {cards.map(({ title, subtitle, href, accent, description, tags, Icon }) => (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${title} — ${subtitle}. Open in new tab.`}
              className="group relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 p-6 aspect-[4/5] flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 transition-transform duration-300 will-change-transform hover:-translate-y-1"
            >
              {/* Glow backdrop */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className={`absolute -inset-12 bg-gradient-to-br ${accent} opacity-20 blur-2xl`} />
              </div>

              {/* Top: Icon + Subtitle */}
              <div className="relative flex items-start justify-between">
                <div className="h-12 w-12 rounded-lg border border-white/20 bg-white/10 grid place-items-center shadow-[0_0_30px_0_rgba(155,231,255,0.25)] text-cyan-100">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <span className="text-[11px] font-medium tracking-wide text-white/60 px-2 py-1 rounded-md border border-white/10 bg-white/5">
                  {subtitle}
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-5 text-xl font-semibold text-white leading-tight">
                {title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-white/70 group-hover:text-white/80 transition-colors">
                {description}
              </p>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
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
              <div className="mt-auto pt-4 flex items-center justify-between">
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
