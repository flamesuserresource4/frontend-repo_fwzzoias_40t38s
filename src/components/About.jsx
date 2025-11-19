import React from 'react'

function About() {
  const portraitUrl =
    'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=1200&q=80'

  return (
    <section id="about" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-2 border-white/20 p-6 sm:p-8 bg-[#0b0b0d]">
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {/* Portrait */}
            <div className="relative md:col-span-1">
              <div className="relative overflow-hidden border-2 border-white/20 bg-black">
                <img
                  src={portraitUrl}
                  alt="Portrait of Ayan Das"
                  className="w-full h-64 md:h-72 object-cover object-center"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 mix-blend-screen" style={{ background: 'linear-gradient(135deg, rgba(155,231,255,0.2), transparent 60%)' }} />
              </div>
            </div>

            {/* Copy */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-black uppercase tracking-tight text-white">About</h2>
              <p className="mt-4 text-white/80 leading-relaxed border-l-4 border-white/30 pl-4">
                I compose images like sentences — each frame a quiet paradox. Noir shadows, hard edges, and negative space guide the work. Brutalism as structure; emotion as contrast.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-black uppercase px-3 py-1 border-2 border-white/30">Visual Storyteller</span>
                <span className="text-[11px] font-black uppercase px-3 py-1 border-2 border-white/30">Filmmaker</span>
                <span className="text-[11px] font-black uppercase px-3 py-1 border-2 border-white/30">Artist</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
