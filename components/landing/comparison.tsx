"use client"

import { useEffect, useRef, useState } from "react"
import { AlertTriangle, CheckCircle2, TrendingUp } from "lucide-react"

export function Comparison() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            if (entry.target.id === "comparison-bars") {
              setIsVisible(true)
            }
          }
        })
      },
      { threshold: 0.3 }
    )

    const elements = sectionRef.current?.querySelectorAll(".reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="prova"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Bubbles */}
      <div className="bubble w-56 h-56 -top-10 -left-20 animate-float opacity-20" />
      <div className="bubble w-32 h-32 bottom-10 right-20 animate-swing opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal opacity-0 text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            Engenharia de Elite vs.{" "}
            <span className="gradient-text">Amadorismo Técnico</span>
          </h2>
        </div>

        <div
          id="comparison-bars"
          className="reveal opacity-0 max-w-4xl mx-auto space-y-12"
        >
          {/* WordPress/Elementor */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">WordPress / Elementor</p>
                  <p className="text-sm text-muted-foreground">Páginas tradicionais</p>
                </div>
              </div>
              <span className="text-2xl font-bold text-red-500">4.2s</span>
            </div>
            <div className="h-4 bg-secondary rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full transition-all duration-[4200ms] ease-out ${
                  isVisible ? "w-full" : "w-0"
                }`}
              />
            </div>
          </div>

          {/* Módulo Web */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Módulo Web</p>
                  <p className="text-sm text-muted-foreground">Engenharia Next.js</p>
                </div>
              </div>
              <span className="text-2xl font-bold text-primary">0.8s</span>
            </div>
            <div className="h-4 bg-secondary rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-[800ms] ease-out ${
                  isVisible ? "w-[19%]" : "w-0"
                }`}
              />
            </div>
          </div>

          {/* Result Card */}
          <div className="reveal opacity-0 mt-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
                <TrendingUp className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-foreground">
                  Páginas <span className="gradient-text">4x mais rápidas</span>
                </p>
                <p className="text-lg text-muted-foreground">
                  aumentam o ROI em até <span className="text-primary font-bold">30%</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
