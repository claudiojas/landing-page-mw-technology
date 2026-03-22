"use client"

import { motion } from "framer-motion"
import { ClipboardList, Search, Mail, TrendingUp, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const steps = [
  {
    icon: <ClipboardList className="w-6 h-6" />,
    title: "1. Perguntas Rápidas",
    description: "Você responde algumas perguntas estratégicas sobre seu negócio e desafios atuais.",
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "2. Análise Inteligente",
    description: "Nosso sistema de IA analisa seu cenário, nicho e modelo de venda em tempo real.",
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "3. Diagnóstico no E-mail",
    description: "Você recebe um relatório técnico completo com os pontos de ruptura do seu site.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "4. Plano de Ação",
    description: "Mostramos exatamente como corrigir as falhas e maximizar sua conversão.",
    color: "text-orange-500",
    bg: "bg-orange-500/10"
  }
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative py-24 bg-background/50 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-black mb-4"
          >
            Como funciona o <span className="gradient-text">Diagnóstico de Elite?</span>
          </motion.h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Processo simplificado para identificar onde seu lucro está escorrendo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-6 rounded-3xl bg-card border border-border/50 hover:border-primary/30 transition-all group"
            >
              <div className={`w-12 h-12 rounded-2xl ${step.bg} ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {step.icon}
              </div>
              <h3 className="text-lg font-bold mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
              
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-10 opacity-20">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            asChild
            size="lg"
            className="rounded-full px-10 py-7 text-base bg-linear-to-r from-primary to-accent font-bold glow-purple group"
          >
            <Link href="/diagnostics">
              QUERO MEU DIAGNÓSTICO
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
