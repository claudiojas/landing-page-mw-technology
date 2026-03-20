"use client"

import { useEffect, useRef } from "react"
import { ExternalLink, Gauge, Clock, Smartphone } from "lucide-react"

const projects = [
  {
    name: "Karcash",
    description: "Landing page de alta conversão para fintech de crédito veicular",
    metrics: {
      lighthouse: 98,
      loadTime: "0.9s",
      mobile: "100%",
    },
    gradient: "from-blue-500/20 to-cyan-500/20",
    accentColor: "text-cyan-500",
  },
  {
    name: "Sakura",
    description: "E-commerce otimizado para restaurante japonês premium",
    metrics: {
      lighthouse: 95,
      loadTime: "1.1s",
      mobile: "100%",
    },
    gradient: "from-pink-500/20 to-rose-500/20",
    accentColor: "text-pink-500",
  },
  {
    name: "Mister Salgados",
    description: "Catálogo digital com sistema de pedidos integrado",
    metrics: {
      lighthouse: 97,
      loadTime: "0.8s",
      mobile: "100%",
    },
    gradient: "from-orange-500/20 to-amber-500/20",
    accentColor: "text-orange-500",
  },
]

export function Portfolio() {
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
      id="portfolio"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Bubbles */}
      <div className="bubble w-44 h-44 top-10 left-20 animate-float opacity-20" />
      <div className="bubble w-36 h-36 bottom-20 right-10 animate-swing opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal opacity-0 text-center mb-16">
          <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-4">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            Projetos que não aceitam{" "}
            <span className="gradient-text">mediocridade técnica</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="reveal opacity-0 group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 border-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Preview */}
              <div className={`aspect-video bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}>
                <div className="text-4xl font-bold text-foreground/20">{project.name[0]}</div>
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-foreground">{project.name}</h3>
                  <button className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <ExternalLink className="w-4 h-4 text-primary" />
                  </button>
                </div>
                <p className="text-sm text-muted-foreground">{project.description}</p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-border">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Gauge className={`w-3 h-3 ${project.accentColor}`} />
                      <span className="text-lg font-bold text-foreground">{project.metrics.lighthouse}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Lighthouse</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Clock className={`w-3 h-3 ${project.accentColor}`} />
                      <span className="text-lg font-bold text-foreground">{project.metrics.loadTime}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Load Time</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Smartphone className={`w-3 h-3 ${project.accentColor}`} />
                      <span className="text-lg font-bold text-foreground">{project.metrics.mobile}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Mobile</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
