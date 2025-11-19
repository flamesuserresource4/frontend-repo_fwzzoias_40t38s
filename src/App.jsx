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
