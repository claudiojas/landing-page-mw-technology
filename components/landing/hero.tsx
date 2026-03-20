"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Zap, Gauge, ShieldCheck } from "lucide-react"

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll(".reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-border/5"
    >
      {/* Subtle Background Elements */}
      <div className="bubble w-96 h-96 -top-20 -left-20 animate-swing opacity-[0.15]" />
      <div className="bubble w-64 h-64 bottom-1/4 -right-10 animate-float opacity-[0.1]" style={{ animationDelay: "2s" }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 text-center">
        <div className="space-y-12">
          {/* Main Headline Group */}
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tighter mx-auto">
              <span className="block mb-2">Seu site leva 3 segundos para carregar?</span>
              <span className="gradient-text block">Parabéns, você acaba de perder 50% do seu lucro.</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground/80 leading-relaxed max-w-3xl mx-auto font-medium">
              Enquanto você tenta &quot;vender&quot;, o Google e o Meta cobram pelo clique de leads que nunca chegam a ver sua oferta. Na Módulo Web, trocamos o amadorismo do WordPress pela Engenharia de Elite para que seu orçamento pare de escorrer pelo ralo.
            </p>
          </div>

          {/* Call to Action Group */}
          <div className="flex flex-col items-center gap-10 pt-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button
                asChild
                size="lg"
                className="bg-linear-to-r from-primary to-accent hover:opacity-90 transition-all text-primary-foreground font-bold px-10 py-7 text-base rounded-full glow-purple"
              >
                <Link 
                  href="https://wa.me/5598985066966?text=Olá! Gostaria de agendar o meu Diagnóstico de Performance de Elite."
                  target="_blank"
                >
                  AGENDAR DIAGNÓSTICO DE PERFORMANCE
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border hover:bg-secondary text-foreground font-semibold px-10 py-7 text-base rounded-full"
              >
                <Link href="#prova">
                  <Play className="mr-2 h-5 w-5" />
                  Ver Performance
                </Link>
              </Button>
            </div>

            {/* Authority Badges - Integrated Under CTA */}
            <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-12 pt-4 opacity-70 scale-90 sm:scale-100">
              <div className="flex items-center gap-2">
                <Gauge className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium">100% Lighthouse Score</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Next.js Speed Optimized</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Foco Total em ROI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
