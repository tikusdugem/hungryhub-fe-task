'use client'

import {
  Features,
  Footer,
  Header,
  Highlight,
  HowItWorks,
  MenuShowcase,
  NotifyMe,
  Testimonials,
} from '@/components'

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Highlight />
      <Features />
      <HowItWorks />
      <MenuShowcase />
      <Testimonials />
      <NotifyMe />
      <Footer />
    </main>
  )
}
