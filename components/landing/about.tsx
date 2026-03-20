"use client"

import { useEffect, useRef } from "react"
import { Code2, Database, Cpu, Award } from "lucide-react"

const skills = [
  { icon: Code2, label: "Fullstack Developer" },
  { icon: Database, label: "Analista de Sistemas" },
  { icon: Cpu, label: "Arquitetura de Software" },
  { icon: Award, label: "Performance Expert" },
]

export function About() {
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
      id="especialista"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Bubbles */}
      <div className="bubble w-48 h-48 top-20 -right-10 animate-swing opacity-20" />
      <div className="bubble w-28 h-28 bottom-32 left-10 animate-float opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="reveal opacity-0 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 p-1">
                <div className="w-full h-full rounded-3xl bg-card flex items-center justify-center overflow-hidden">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <span className="text-5xl font-bold text-primary-foreground">CS</span>
                    </div>
                    <p className="text-xl font-bold text-foreground">Cláudio Soares</p>
                    <p className="text-sm text-muted-foreground">Fundador & Lead Developer</p>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 lg:bottom-8 lg:-right-8 bg-card rounded-xl p-4 shadow-xl border border-border animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <Award className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Experiência</p>
                    <p className="text-lg font-bold text-foreground">+10 Anos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="reveal opacity-0 space-y-4">
              <p className="text-primary font-semibold uppercase tracking-wider text-sm">
                Sobre o Especialista
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
                A <span className="gradient-text">Engenharia</span> por trás da sua conversão.
              </h2>
            </div>

            <div className="reveal opacity-0 space-y-4" style={{ animationDelay: "0.2s" }}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sou <span className="text-foreground font-semibold">Cláudio Soares</span>, fundador da Módulo Web. 
                Sou desenvolvedor Fullstack e Analista de Sistemas.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Minha missão é entregar o que o marketing ignora:{" "}
                <span className="text-primary font-semibold">a performance técnica extrema</span>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Enquanto agências focam em design bonito, eu construo a engenharia invisível 
                que faz seu investimento em tráfego render mais. Cada milissegundo conta quando 
                você está pagando por clique.
              </p>
            </div>

            {/* Skills */}
            <div className="reveal opacity-0 grid grid-cols-2 gap-4" style={{ animationDelay: "0.4s" }}>
              {skills.map((skill) => (
                <div
                  key={skill.label}
                  className="flex items-center gap-3 bg-card rounded-xl p-3 border border-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <skill.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{skill.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
