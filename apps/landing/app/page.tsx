import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { Features } from "@/components/sections/Features"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { Pricing } from "@/components/sections/Pricing"
import { Testimonials } from "@/components/sections/Testimonials"
import { CtaBanner } from "@/components/sections/CtaBanner"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <CtaBanner />
      <Footer />
    </main>
  )
}
