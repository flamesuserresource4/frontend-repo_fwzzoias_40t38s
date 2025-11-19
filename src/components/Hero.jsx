import React, { Suspense } from 'react'
const Spline = React.lazy(() => import('@splinetool/react-spline'))

function FallbackVisual() {
  return (
    <div className="relative w-full aspect-[16/9] overflow-hidden border-2 border-white/20 bg-[#0b0b0d]">
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2400&auto=format&fit=crop')] bg-cover bg-center" />
      <div className="absolute inset-0 grid place-items-center">
        <div className="text-center">
          <p className="text-white font-black uppercase tracking-wider">Loading Interactive Scene</p>
          <p className="text-cyan-200/70 text-xs">Fallback active for low-power devices</p>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="relative pt-16 pb-20" aria-labelledby="hero-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
              Ayan Das — <span className="underline decoration-4 decoration-cyan-300 underline-offset-4">Visual Storyteller</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/80 font-semibold uppercase tracking-wider">
              Filmmaking • Scriptwriting • Painting • Photography
            </p>
            <p className="mt-6 text-white/70 max-w-xl border-l-4 border-white/30 pl-4">
              Surreal noir, hard edges, and unapologetic grids. Brutalist rhythm structured for clarity.
            </p>
          </div>
          <div className="relative">
            <div className="bg-[#0b0b0d] border-2 border-white/20 p-2">
              <Suspense fallback={<FallbackVisual />}>
                <div className="relative w-full aspect-[16/10] overflow-hidden">
                  <Spline default scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
                </div>
              </Suspense>
            </div>
            <div className="absolute -inset-2 pointer-events-none border-2 border-cyan-300/20" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
