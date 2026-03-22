"use client"

import { motion } from "framer-motion"
import { Check, Shield, Zap, Globe, Server, MousePointer2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const infraFeatures = [
  "Infraestrutura completa (Vercel ou sua preferência)",
  "Ambiente escalável (Firebase, Supabase, Cloudflare)",
  "Controle total de domínio e repositório",
  "Tudo no seu nome, com acesso completo",
  "Documentação completa e entrega organizada",
  "30 dias de acompanhamento gratuito"
]

const simplifiedFeatures = [
  "Hospedagem dentro do ecossistema Módulo Web",
  "Infraestrutura pronta e otimizada",
  "Manutenção simplificada e automática",
  "Foco total no seu negócio",
  "Suporte técnico especializado"
]

export function ServiceModels() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 lg:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-6"
          >
            Como você quer <span className="gradient-text">operar sua landing?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Escolha o modelo ideal para o seu momento e nível de escala.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Own Infrastructure Model */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative bg-card border border-border/50 rounded-4xl p-8 lg:p-12 shadow-2xl flex flex-col hover:border-primary/30 transition-colors"
          >
            <div className="absolute top-0 right-0 p-8 pt-10 opacity-10 group-hover:opacity-20 transition-opacity">
              <Server className="w-24 h-24" />
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mb-4">
                  Controle Total
                </div>
                <h3 className="text-2xl font-black mb-4">Infraestrutura Própria</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Ideal para empresas que buscam autonomia total e um ambiente altamente escalável para o longo prazo.
                </p>
              </div>

              <div className="space-y-4 mb-10 grow">
                {infraFeatures.map((feature, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="mt-1 w-4 h-4 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 text-emerald-500" />
                    </div>
                    <span className="text-sm font-medium text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <div className="p-4 rounded-2xl bg-muted/30 border border-border/50">
                  <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">Investimento Inicial</p>
                  <p className="text-3xl font-black tracking-tight">A partir de R$ 1.800</p>
                  <p className="text-[10px] text-muted-foreground mt-2 italic">Manutenção sob demanda disponível conforme necessidade do projeto.</p>
                </div>
                <Button asChild size="xl" className="w-full rounded-full bg-foreground text-background font-black hover:bg-foreground/90 transition-all">
                  <Link href="/diagnostics">
                    QUERO ESTE MODELO
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Simplified Model */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative bg-linear-to-br from-zinc-900 to-black border border-white/5 rounded-4xl p-8 lg:p-12 shadow-2xl flex flex-col hover:border-accent/30 transition-colors"
          >
            <div className="absolute top-0 right-0 p-8 pt-10 opacity-10 group-hover:opacity-20 transition-opacity">
              <Zap className="w-24 h-24" />
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-widest mb-4">
                  Início Rápido
                </div>
                <h3 className="text-2xl font-black mb-4">Modelo Simplificado</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Ideal para validar rápido sem se preocupar com complexidade técnica. Nós cuidamos de toda a infraestrutura técnica.
                </p>
              </div>

              <div className="space-y-4 mb-10 grow">
                {simplifiedFeatures.map((feature, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="mt-1 w-4 h-4 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 text-accent" />
                    </div>
                    <span className="text-sm font-medium text-white/80">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                   <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">Desenvolvimento</p>
                      <p className="text-xl font-black text-white">R$ 1.200</p>
                   </div>
                   <div className="p-4 rounded-2xl bg-accent/10 border border-accent/20">
                      <p className="text-[10px] font-black text-accent/60 uppercase tracking-widest mb-1">Manutenção</p>
                      <p className="text-xl font-black text-accent">R$ 49,90<span className="text-[10px] font-normal">/mês</span></p>
                   </div>
                </div>
                <Button asChild size="xl" className="w-full rounded-full bg-primary text-primary-foreground font-black glow-purple">
                  <Link href="/diagnostics">
                    QUERO ESTE MODELO
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Closing Help Section */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-6 sm:p-4 rounded-4xl bg-muted/20 border border-border/50 backdrop-blur-sm">
            <p className="text-sm font-bold ml-4">🎯 Não sabe qual escolher?</p>
            <p className="text-sm text-muted-foreground">Nós te ajudamos no diagnóstico inicial a definir o melhor modelo para o seu cenário.</p>
            <Button variant="ghost" className="rounded-full group font-bold" asChild>
              <Link href="/diagnostics">
                Falar com especialista <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 opacity-30" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-2xl -z-10 opacity-20" />
    </section>
  )
}
