import React, { Suspense } from 'react'
const Spline = React.lazy(() => import('@splinetool/react-spline'))

function FallbackVisual() {
  return (
    <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-[radial-gradient(ellipse_at_top,rgba(155,231,255,0.08),rgba(255,255,255,0.02))]">
      <div className="absolute inset-0 opacity-[0.06] bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2400&auto=format&fit=crop')] bg-cover bg-center mix-blend-screen" />
      <div className="absolute inset-0 grid place-items-center">
        <div className="text-center">
          <p className="text-white/80">Interactive scene is loading…</p>
          <p className="text-cyan-200/70 text-sm">Optimized fallback enabled for low-power devices</p>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="relative pt-16 pb-20" aria-labelledby="hero-heading">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -inset-[30%] opacity-20" aria-hidden>
          <div className="w-full h-full bg-[radial-gradient(circle_at_20%_10%,rgba(155,231,255,0.18),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(155,231,255,0.12),transparent_45%),radial-gradient(circle_at_50%_90%,rgba(155,231,255,0.15),transparent_40%)]" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Ayan Das — <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-cyan-300 to-cyan-100">Visual Storyteller</span>
            </h1>
            <p className="mt-4 text-lg text-white/70">
              Filmmaking · Scriptwriting · Painting · Photography
            </p>
            <p className="mt-6 text-white/60 max-w-xl">
              Surreal + noir worlds framed through light, texture, and narrative. Brutalist structure meets glassmorphism calm.
            </p>
          </div>
          <div className="relative">
            <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl p-2 shadow-2xl shadow-cyan-500/10">
              <Suspense fallback={<FallbackVisual />}>
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden">
                  <Spline default scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
                </div>
              </Suspense>
            </div>
            <div className="absolute -inset-4 -z-[0] blur-2xl bg-cyan-400/10 rounded-3xl pointer-events-none" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
