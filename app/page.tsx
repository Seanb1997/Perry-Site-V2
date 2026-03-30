// ─── HOMEPAGE ──────────────────────────────────────────────────────────────
// This file stacks all the homepage sections in order.
// To reorder sections: just move the component lines up or down.
// To hide a section: comment out its line (add // at the start).

import Hero from './components/Hero'
import WhoItsFor from './components/WhoItsFor'
import Services from './components/Services'
import Process from './components/Process'
import Credentials from './components/Credentials'
import Testimonials from './components/Testimonials'
import InstagramFeed from './components/InstagramFeed'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhoItsFor />
      <Services />
      <Process />
      <Credentials />
      <Testimonials />
      <CTA />
      <InstagramFeed />
      <Footer />
    </>
  )
}
