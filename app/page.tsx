import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { PerformanceImpact } from "@/components/landing/performance-impact"
import { About } from "@/components/landing/about"
import { PortfolioShowcase } from "@/components/landing/portfolio-showcase"
import { TechnicalEducation } from "@/components/landing/technical-education"
import { FAQ } from "@/components/landing/faq"
import { Footer } from "@/components/landing/footer"
import { WhatsAppButton } from "@/components/landing/whatsapp-button"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <PerformanceImpact />
      <PortfolioShowcase />
      <TechnicalEducation />
      <About />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
