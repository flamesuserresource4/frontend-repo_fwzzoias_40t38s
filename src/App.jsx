import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import WorkGrid from './components/WorkGrid'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0d] text-white selection:bg-cyan-300/30">
      {/* Subtle grain + vignette */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.06] mix-blend-soft-light bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" aria-hidden />
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(155,231,255,0.10),transparent_70%)]" aria-hidden />
      </div>

      <Header />

      <main>
        <Hero />
        <WorkGrid />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
