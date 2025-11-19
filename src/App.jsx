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
      {/* Brutalist grid backdrop */}
      <div className="fixed inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:40px_40px]" />
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
