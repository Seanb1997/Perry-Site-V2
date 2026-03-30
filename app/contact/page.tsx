'use client'

// ─── CONTACT PAGE ──────────────────────────────────────────────────────────
// Two-column layout: context left, form right.
// Clean bottom-border-only inputs — no boxy form fields.
//
// !! SETUP — do this once before going live !!
//   1. Go to https://web3forms.com
//   2. Enter your email and click "Create Access Key"
//   3. Find the line: value="YOUR_WEB3FORMS_KEY_HERE"
//   4. Replace YOUR_WEB3FORMS_KEY_HERE with your actual key

import { useState } from 'react'
import type { FormEvent } from 'react'
import Footer from '../components/Footer'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setError('')
    const form = event.currentTarget
    const data = new FormData(form)
    try {
      const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })
      if (response.ok) { setSubmitted(true); form.reset() }
      else setError('Something went wrong. Please try again or reach out on Instagram.')
    } catch {
      setError('Could not send your message. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <section id="contact" className="bg-cream min-h-screen py-24 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

            {/* ── LEFT: Context ── */}
            <div className="lg:col-span-4">
              <p className="label text-mid mb-5">Get in touch</p>
              {/* EDIT THIS TEXT: Contact page heading */}
              <h1 className="font-cormorant font-light text-ink leading-tight mb-6"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                Let's talk
              </h1>
              <div className="w-8 h-px bg-amber mb-6" />
              {/* EDIT THIS TEXT: Contact page intro paragraph */}
              <p className="font-dm text-mid text-sm leading-relaxed font-light mb-10">
                Fill in the form and I'll get back to you within 24 hours.
                There's no commitment and no hard sell — just an honest conversation
                about where you are and how I can help.
              </p>

              {/* Direct contact details */}
              <div className="flex flex-col gap-4 mb-12">
                <a
                  href="mailto:advancedfitnesstraining@hotmail.co.uk"
                  className="flex items-center gap-3 text-mid hover:text-ink transition-colors group"
                >
                  <span className="label text-amber group-hover:opacity-70 transition-opacity">E</span>
                  <span className="font-dm text-sm font-light break-all">advancedfitnesstraining@hotmail.co.uk</span>
                </a>
                <a
                  href="https://www.instagram.com/perryhowardpt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-mid hover:text-ink transition-colors group"
                >
                  <span className="label text-amber group-hover:opacity-70 transition-opacity">IG</span>
                  <span className="font-dm text-sm font-light">@perryhowardpt</span>
                </a>
              </div>

            </div>

            {/* ── RIGHT: Form ── */}
            <div className="lg:col-span-7 lg:col-start-6">

              {/* ── SUCCESS STATE ── */}
              {submitted ? (
                <div className="pt-2 border-t border-sand">
                  {/* EDIT THIS TEXT: Thank-you heading shown after form submission */}
                  <h2 className="font-cormorant font-light text-ink text-4xl mb-3 mt-8">
                    Message sent.
                  </h2>
                  {/* EDIT THIS TEXT: Thank-you body text */}
                  <p className="font-dm text-mid text-sm font-light">
                    I'll be in touch within 24 hours.
                  </p>
                </div>
              ) : (

                /* ── FORM ── */
                <form onSubmit={handleSubmit} className="border-t border-sand">

                  {/* Web3Forms config — hidden fields */}
                  {/* EDIT THIS: Replace YOUR_WEB3FORMS_KEY_HERE with your key from web3forms.com */}
                  <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_KEY_HERE" />
                  {/* EDIT THIS TEXT: Email subject line you'll receive */}
                  <input type="hidden" name="subject" value="New enquiry from Perry Howard PT website" />
                  <input type="hidden" name="redirect" value="false" />
                  {/* Honeypot — catches spam bots, leave as-is */}
                  <input type="checkbox" name="botcheck" className="hidden" />

                  {/* ── Name ── */}
                  <div className="py-6">
                    {/* EDIT THIS TEXT: Name field label */}
                    <label htmlFor="name" className="label text-mid block mb-3">
                      Your Name *
                    </label>
                    <input
                      type="text" id="name" name="name" required
                      placeholder="e.g. Sarah Johnson"
                      className="w-full bg-transparent font-dm text-ink text-base font-light placeholder:text-mid placeholder:opacity-50 focus:outline-none py-2 border-b border-sand focus:border-amber transition-colors duration-150"
                    />
                  </div>

                  {/* ── Email ── */}
                  <div className="py-6">
                    {/* EDIT THIS TEXT: Email field label */}
                    <label htmlFor="email" className="label text-mid block mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email" id="email" name="email" required
                      placeholder="e.g. sarah@example.com"
                      className="w-full bg-transparent font-dm text-ink text-base font-light placeholder:text-mid placeholder:opacity-50 focus:outline-none py-2 border-b border-sand focus:border-amber transition-colors duration-150"
                    />
                  </div>

                  {/* ── Message ── */}
                  <div className="py-6">
                    {/* EDIT THIS TEXT: Message field label */}
                    <label htmlFor="message" className="label text-mid block mb-3">
                      Your Message *
                    </label>
                    {/* EDIT THIS TEXT: Message placeholder text */}
                    <textarea
                      id="message" name="message" required rows={4}
                      placeholder="Tell me a bit about where you are and what you're looking to achieve..."
                      className="w-full bg-transparent font-dm text-ink text-base font-light placeholder:text-mid placeholder:opacity-50 focus:outline-none resize-none py-2 border-b border-sand focus:border-amber transition-colors duration-150"
                    />
                  </div>

                  {/* Error */}
                  {error && (
                    <p className="font-dm text-red-700 text-sm py-4 font-light">{error}</p>
                  )}

                  {/* ── Submit ── */}
                  <div className="pt-8">
                    <button
                      type="submit" disabled={loading}
                      className="label text-cream bg-ink px-10 py-4 hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      {/* EDIT THIS TEXT: Submit button text */}
                      {loading ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>

                </form>
              )}

              {/* Availability */}
              <div className="mt-16 pt-10 border-t border-sand">
                <p className="label text-mid mb-3">Availability</p>
                <p className="font-dm text-mid text-xs font-light mb-5">
                  Here's when I'm available — if none of these work for you, get in touch anyway.
                </p>
                <div className="h-px bg-sand mb-0" />

                {/* Mon */}
                <div className="flex justify-between items-baseline py-3 border-b border-sand">
                  <span className="font-dm text-ink text-sm font-light">Monday</span>
                  <div className="text-right">
                    <span className="font-plex text-xs text-mid block">6:00 – 7:30am</span>
                    <span className="font-plex text-xs text-mid block">5:30 – 9:30pm</span>
                  </div>
                </div>

                {/* Tue */}
                <div className="flex justify-between items-baseline py-3 border-b border-sand">
                  <span className="font-dm text-ink text-sm font-light">Tuesday</span>
                  <div className="text-right">
                    <span className="font-plex text-xs text-mid block">6:00 – 7:30am</span>
                    <span className="font-plex text-xs text-mid block">7:30 – 9:30pm</span>
                  </div>
                </div>

                {/* Wed */}
                <div className="flex justify-between items-baseline py-3 border-b border-sand">
                  <span className="font-dm text-ink text-sm font-light">Wednesday</span>
                  <span className="font-plex text-xs text-mid opacity-40 italic">Unavailable</span>
                </div>

                {/* Thu */}
                <div className="flex justify-between items-baseline py-3 border-b border-sand">
                  <span className="font-dm text-ink text-sm font-light">Thursday</span>
                  <div className="text-right">
                    <span className="font-plex text-xs text-mid block">6:00 – 7:30am</span>
                    <span className="font-plex text-xs text-mid block">5:30 – 9:30pm</span>
                  </div>
                </div>

                {/* Fri */}
                <div className="flex justify-between items-baseline py-3 border-b border-sand">
                  <span className="font-dm text-ink text-sm font-light">Friday</span>
                  <div className="text-right">
                    <span className="font-plex text-xs text-mid block">6:00 – 7:30am</span>
                    <span className="font-plex text-xs text-mid block">4:30 – 6:30pm</span>
                  </div>
                </div>

                {/* Sat / Sun */}
                <div className="flex justify-between items-baseline py-3 border-b border-sand">
                  <span className="font-dm text-ink text-sm font-light">Weekend</span>
                  <span className="font-plex text-xs text-mid opacity-40 italic">Unavailable</span>
                </div>

                {/* Session length note */}
                <p className="font-dm text-mid text-xs font-light mt-4 opacity-70">
                  Sessions are typically 60 minutes. Get in touch to check current availability.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
