import React from 'react'

function About() {
  const portraitUrl =
    'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=1200&q=80'

  return (
    <section id="about" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 p-6 sm:p-8 bg-[#0b0b0d]/60 backdrop-blur">
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {/* Portrait */}
            <div className="relative md:col-span-1">
              <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black">
                <img
                  src={portraitUrl}
                  alt="Portrait of Ayan Das"
                  className="w-full h-64 md:h-72 object-cover object-center"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(155,231,255,0.18), transparent 60%)' }} />
              </div>
            </div>

            {/* Copy */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-semibold tracking-tight text-white">About</h2>
              <p className="mt-4 text-white/80 leading-relaxed">
                I compose images like sentences — each frame a quiet paradox. Noir shadows, soft bloom, and negative space guide the work. Structure supports emotion, never overpowers it.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-medium px-3 py-1 rounded border border-white/10 bg-white/5 text-white/80">Visual Storyteller</span>
                <span className="text-[11px] font-medium px-3 py-1 rounded border border-white/10 bg-white/5 text-white/80">Filmmaker</span>
                <span className="text-[11px] font-medium px-3 py-1 rounded border border-white/10 bg-white/5 text-white/80">Artist</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
