import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { HowItWorks } from "@/components/landing/how-it-works"
import { AiDifferential } from "@/components/landing/ai-differential"
import { PerformanceImpact } from "@/components/landing/performance-impact"
import { PortfolioShowcase } from "@/components/landing/portfolio-showcase"
import { SecurityProcess } from "@/components/landing/security-process"
import { FinalReinforcement } from "@/components/landing/final-reinforcement"
import { FAQ } from "@/components/landing/faq"
import { Footer } from "@/components/landing/footer"
import { WhatsAppButton } from "@/components/landing/whatsapp-button"
import { ServiceModels } from "@/components/landing/service-models"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-white">
      <Header />
      <Hero />
      <HowItWorks />
      <AiDifferential />
      <PerformanceImpact />
      <PortfolioShowcase />
      <SecurityProcess />
      <ServiceModels />
      <FinalReinforcement />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
