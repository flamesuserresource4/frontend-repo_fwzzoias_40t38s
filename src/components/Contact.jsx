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
        <div className="rounded-2xl border border-white/10 p-8 sm:p-10 bg-[#0b0b0d]/60 backdrop-blur">
          <h2 className="text-3xl font-semibold tracking-tight text-white mb-6">Contact</h2>

          {submitted ? (
            <div role="status" className="text-cyan-100">
              Thanks — your message is staged. This is a demo, so no email is sent.
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm text-white/80">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={onChange}
                  className="mt-2 w-full bg-white/[0.02] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-300/30 focus:border-white/20"
                  placeholder="Your name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && <p id="name-error" className="mt-1 text-sm text-rose-300">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-white/80">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={onChange}
                  className="mt-2 w-full bg-white/[0.02] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-300/30 focus:border-white/20"
                  placeholder="you@example.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && <p id="email-error" className="mt-1 text-sm text-rose-300">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-white/80">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={onChange}
                  className="mt-2 w-full bg-white/[0.02] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-300/30 focus:border-white/20 resize-y"
                  placeholder="Tell me about your project…"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && <p id="message-error" className="mt-1 text-sm text-rose-300">{errors.message}</p>}
              </div>

              <div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full sm:w-auto bg-gradient-to-r from-white to-white/90 text-[#0b0b0d] font-semibold tracking-tight px-6 py-3 rounded-lg border border-white/10 shadow-sm hover:from-white/95 active:translate-y-px transition"
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
