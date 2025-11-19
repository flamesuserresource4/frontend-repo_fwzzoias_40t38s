import React from 'react'

function About() {
  // Replace this with your real portrait URL when available
  const portraitUrl =
    'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=1200&q=80'

  return (
    <section id="about" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            {/* Portrait */}
            <div className="relative md:col-span-1">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                <img
                  src={portraitUrl}
                  alt="Portrait of Ayan Das"
                  className="w-full h-64 md:h-72 object-cover object-center"
                  loading="lazy"
                />
                {/* neon overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-cyan-300/20 via-transparent to-blue-500/10 mix-blend-screen" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10 rounded-2xl" />
              </div>
              <div className="absolute -inset-6 -z-10 bg-cyan-300/10 blur-3xl rounded-full opacity-40" aria-hidden />
            </div>

            {/* Copy */}
            <div className="md:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">About</h2>
              <p className="mt-3 text-white/70 leading-relaxed">
                I compose images like sentences — each frame a quiet paradox. My work threads the surreal through noir shadows, balancing brutalist rhythm with glass clarity. I look for stories that lean toward the uncanny, guided by texture, negative space, and the pulse of time.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <span className="text-xs font-medium tracking-wide text-white/70 px-3 py-1 rounded-md border border-white/10 bg-white/5">Visual Storyteller</span>
                <span className="text-xs font-medium tracking-wide text-white/70 px-3 py-1 rounded-md border border-white/10 bg-white/5">Filmmaker</span>
                <span className="text-xs font-medium tracking-wide text-white/70 px-3 py-1 rounded-md border border-white/10 bg-white/5">Artist</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
