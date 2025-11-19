import React, { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter your name'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (form.message.trim().length < 10) e.message = 'Message should be at least 10 characters'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function onChange(ev) {
    setForm({ ...form, [ev.target.name]: ev.target.value })
  }

  function onSubmit(ev) {
    ev.preventDefault()
    if (!validate()) return
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-6">Contact</h2>

          {submitted ? (
            <div role="status" className="text-cyan-100">
              Thanks — your message is staged. This is a demo, so no email is sent.
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/80">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={onChange}
                  className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-300/60"
                  placeholder="Your name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && <p id="name-error" className="mt-1 text-sm text-rose-300">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={onChange}
                  className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-300/60"
                  placeholder="you@example.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && <p id="email-error" className="mt-1 text-sm text-rose-300">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={onChange}
                  className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-300/60 resize-y"
                  placeholder="Tell me about your project…"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && <p id="message-error" className="mt-1 text-sm text-rose-300">{errors.message}</p>}
              </div>

              <div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full sm:w-auto rounded-xl bg-gradient-to-b from-white/30 to-white/10 text-black/90 font-semibold px-6 py-3 backdrop-blur-md border border-white/40 shadow-[0_10px_40px_-15px_rgba(155,231,255,0.6)] hover:shadow-[0_10px_50px_-10px_rgba(155,231,255,0.9)] transition-shadow"
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact
