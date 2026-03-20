"use client"

import { useEffect, useRef } from "react"
import { Zap, Target, Server, Smartphone } from "lucide-react"

const benefits = [
  {
    icon: Zap,
    title: "Velocidade",
    subtitle: "Lighthouse 90+",
    description: "Carregamento instantâneo que mantém o usuário engajado e reduz a taxa de rejeição drasticamente.",
  },
  {
    icon: Target,
    title: "Rastreamento",
    subtitle: "Pixel Blindado",
    description: "Pixel e API de Conversão integrados no servidor. Dados precisos mesmo com bloqueadores de anúncios.",
  },
  {
    icon: Server,
    title: "Infraestrutura",
    subtitle: "Serverless",
    description: "Tecnologia à prova de picos de tráfego. Sua página nunca cai, mesmo em campanhas virais.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First",
    subtitle: "UX Premium",
    description: "Experiência pensada no polegar do usuário. Design que converte em qualquer dispositivo.",
  },
]

export function Benefits() {
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
      id="diferenciais"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Bubbles */}
      <div className="bubble w-40 h-40 top-20 right-10 animate-swing opacity-30" />
      <div className="bubble w-24 h-24 bottom-20 left-20 animate-float opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal opacity-0 text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            Por que a Engenharia da Módulo Web{" "}
            <span className="gradient-text">converte onde as agências falham?</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="reveal opacity-0 group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 border-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{benefit.title}</h3>
                  <p className="text-sm text-primary font-medium">{benefit.subtitle}</p>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
