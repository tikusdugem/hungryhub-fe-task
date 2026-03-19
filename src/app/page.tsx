'use client'

import { Header } from '@/components/header'
import { Highlight } from '@/components/highlight'
import { Features } from '@/components/features'
import { HowItWorks } from '@/components/how-it-works'
import { MenuShowcase } from '@/components/menu-showcase'
import { Testimonials } from '@/components/testimonials'
import { NotifyMe } from '@/components/notify-me'
import { Footer } from '@/components/footer'

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
