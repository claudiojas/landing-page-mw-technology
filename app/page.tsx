import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { Benefits } from "@/components/landing/benefits"
import { Comparison } from "@/components/landing/comparison"
import { About } from "@/components/landing/about"
import { Portfolio } from "@/components/landing/portfolio"
import { FAQ } from "@/components/landing/faq"
import { ContactForm } from "@/components/landing/contact-form"
import { Footer } from "@/components/landing/footer"
import { WhatsAppButton } from "@/components/landing/whatsapp-button"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Benefits />
      <Comparison />
      <About />
      <Portfolio />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
