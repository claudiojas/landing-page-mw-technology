import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { PerformanceImpact } from "@/components/landing/performance-impact"
import { PortfolioShowcase } from "@/components/landing/portfolio-showcase"
import { TechnicalEducation } from "@/components/landing/technical-education"
import { TechnicalDNA } from "@/components/landing/technical-dna"
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
      <TechnicalDNA />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
