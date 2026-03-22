"use client"

import { motion } from "framer-motion"
import { ArrowRight, Zap, Gauge, Flame, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FinalReinforcement() {
  return (
    <section className="relative py-10 sm:py-16 overflow-hidden bg-background">
      {/* Background Decorative Mesh */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none appearance-none translate-y-[-10%]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid-small" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-small)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-linear-to-br from-zinc-900/90 via-zinc-900/60 to-black border border-white/10 rounded-4xl p-8 sm:p-12 overflow-hidden shadow-2xl border-glow group"
        >
          {/* Internal Glows */}
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary/10 blur-[80px] pointer-events-none opacity-40" />
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-accent/10 blur-[80px] pointer-events-none opacity-40" />

          <div className="relative z-10 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[9px] font-black uppercase tracking-widest mx-auto">
              <Sparkles className="w-2.5 h-2.5" />
              Impacto Estratégico
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-[1.1] tracking-tighter">
              Pare de tentar adivinhar.<br/>
              <span className="gradient-text uppercase leading-tight">Escolha Engenharia de Elite.</span>
            </h2>
            
            <p className="text-muted-foreground text-sm sm:text-base font-medium max-w-xl mx-auto leading-relaxed">
              Enquanto seus concorrentes criam apenas "páginas bonitas", nós construímos estruturas de lucro baseadas em psicologia de vendas e dados reais.
            </p>

            <div className="pt-2">
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 py-6 text-sm bg-linear-to-r from-primary to-accent font-black transition-all hover:scale-105 glow-purple"
              >
                <Link href="/diagnostics">
                  RECEBER MEU DIAGNÓSTICO AGORA
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
            
            <div className="pt-6 sm:pt-8 grid grid-cols-3 gap-2 sm:gap-4 border-t border-white/5 bg-white/1 -mx-8 sm:-mx-12 px-8 sm:px-12 pb-0 mt-6">
                <div className="flex flex-col items-center gap-1.5 py-4">
                   <div className="p-1.5 rounded-lg bg-primary/5 border border-primary/10 text-primary">
                      <Zap size={16} />
                   </div>
                   <span className="text-[7px] sm:text-[9px] font-bold uppercase tracking-widest text-muted-foreground/80 leading-tight">Velocidade <br /> Extrema</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 py-4 border-x border-white/5 text-primary">
                   <div className="p-1.5 rounded-lg bg-primary/5 border border-primary/10">
                      <Gauge size={16} />
                   </div>
                   <span className="text-[7px] sm:text-[9px] font-bold uppercase tracking-widest text-muted-foreground/80 leading-tight">Foco <br /> em ROI</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 py-4 text-primary">
                   <div className="p-1.5 rounded-lg bg-primary/5 border border-primary/10">
                      <Flame size={16} />
                   </div>
                   <span className="text-[7px] sm:text-[9px] font-bold uppercase tracking-widest text-muted-foreground/80 leading-tight">30 Dias de <br /> Suporte</span>
                </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
