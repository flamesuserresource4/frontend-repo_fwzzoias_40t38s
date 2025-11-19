import React from 'react'

const cards = [
  {
    title: 'Filmmaking',
    href: 'https://filmmaking.ayan.example.com',
    accent: 'from-cyan-300 to-blue-500'
  },
  {
    title: 'Scriptwriting',
    href: 'https://script.ayan.example.com',
    accent: 'from-cyan-200 to-teal-400'
  },
  {
    title: 'Painting',
    href: 'https://painting.ayan.example.com',
    accent: 'from-teal-300 to-cyan-400'
  },
  {
    title: 'Photography',
    href: 'https://photography.ayan.example.com',
    accent: 'from-blue-300 to-cyan-300'
  }
]

function WorkGrid() {
  return (
    <section id="work" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Selected Work</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              target="_blank"
              rel="noreferrer noopener"
              className="group relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 p-6 aspect-[4/5] flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className={`absolute -inset-12 bg-gradient-to-br ${card.accent} opacity-20 blur-2xl`} />
              </div>

              <div className="relative">
                <div className="h-14 w-14 rounded-lg border border-white/20 bg-white/10 grid place-items-center shadow-[0_0_30px_0_rgba(155,231,255,0.25)]">
                  <span className="text-cyan-100 font-semibold">{card.title.charAt(0)}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{card.title}</h3>
              </div>

              <div className="relative">
                <p className="text-sm text-white/60 group-hover:text-white/70 transition-colors">Enter the surreal noir study →</p>
              </div>

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
