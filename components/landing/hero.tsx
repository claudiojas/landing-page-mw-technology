"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Gauge, ShieldCheck } from "lucide-react"
import { PerformanceMockup } from "./performance-mockup"
import { motion } from "framer-motion"

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden border-b border-border/5 pt-32 lg:pt-20"
    >
      {/* Subtle Background Elements */}
      <div className="bubble w-72 h-72 -top-20 -left-20 animate-swing opacity-[0.08]" />
      <div className="bubble w-48 h-48 bottom-1/4 -right-10 animate-float opacity-[0.06]" style={{ animationDelay: "2s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-10 lg:py-12 w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">

          {/* Column: Text Content (Now first on all devices for maximum impact) */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left lg:max-w-2xl flex flex-col items-center lg:items-start">
            {/* Main Headline Group */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-3 sm:space-y-4 lg:space-y-6"
            >
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] mx-auto lg:mx-0">
                <Zap className="w-2.5 h-2.5" />
                Engenharia de Elite
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-black leading-[1.1] tracking-tighter">
                <span className="block mb-2 text-balance text-white">O problema não é o seu tráfego.</span>
                <span className="gradient-text block text-balance">É a sua página.</span>
              </h1>
              <p className="text-sm sm:text-base lg:text-xl text-muted-foreground/80 leading-relaxed font-medium max-w-xl text-balance mx-auto lg:mx-0">
                Pare de queimar dinheiro com tráfego que não converte. Receba uma análise técnica completa do seu funil gerada por nossa IA de Engenharia.
              </p>
            </motion.div>

            {/* CTA + Badges Group (Centered relative to each other) */}
            <div className="flex flex-col items-center lg:items-center w-full lg:w-fit gap-4 sm:gap-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="w-full sm:w-auto"
              >
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-linear-to-r from-primary to-accent hover:opacity-90 transition-all text-primary-foreground font-bold px-8 sm:px-10 py-5 sm:py-7 text-sm sm:text-base rounded-full glow-purple group"
                >
                  <Link
                    href="/diagnostics"
                  >
                    👉 Quero meu diagnóstico gratuito
                    <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>

              {/* Authority Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 opacity-70"
              >
                <div className="flex items-center gap-2">
                  <Gauge className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                  <span className="text-[10px] sm:text-[12px] font-extrabold uppercase tracking-tight text-white whitespace-nowrap">100% Score</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  <span className="text-[10px] sm:text-[12px] font-extrabold uppercase tracking-tight text-white whitespace-nowrap">SEO de Elite</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Column: Visual Mockup */}
          <div className="relative w-full flex justify-center lg:justify-end lg:scale-110 xl:scale-125 origin-center lg:origin-right mt-12 sm:mt-6 lg:mt-0">
            <div className="w-full max-w-[340px] sm:max-w-md lg:max-w-[500px]">
              <PerformanceMockup />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
