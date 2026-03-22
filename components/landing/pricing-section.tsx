"use client"

import { motion } from "framer-motion"
import { Check, Rocket, Zap, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const pricingPoints = [
  "Engenharia artesanal (Zero Plugins pesados)",
  "Hospedagem de alta performance inclusa",
  "Design estratégico focado em conversão",
  "Diagnóstico integrado de funil",
  "Acompanhamento de 30 dias"
]

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Clock className="w-3 h-3" />
            Vagas Limitadas para Validação
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
            Investimento em <span className="gradient-text">Elite.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
             Projetos exclusivos para quem busca sair do amadorismo e escalar com tecnologia de ponta.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Main Pricing Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-card border border-border/50 rounded-4xl p-8 lg:p-12 shadow-2xl relative overflow-hidden group"
          >
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-10">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Estrutura de Conversão</h3>
                  <p className="text-muted-foreground text-sm italic">Construção de cases e validação técnica</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold uppercase text-muted-foreground block mb-1">A partir de</span>
                  <div className="text-4xl lg:text-5xl font-black text-foreground">R$ 1.800</div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {pricingPoints.map((point, i) => (
                  <div key={i} className="flex gap-3 items-center">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-emerald-500" />
                    </div>
                    <span className="text-sm font-medium">{point}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="xl"
                  className="flex-1 bg-linear-to-r from-primary to-accent text-primary-foreground font-black rounded-full text-lg py-8 glow-purple"
                >
                  <Link href="/diagnostics">
                    QUERO MEU DIAGNÓSTICO
                  </Link>
                </Button>
                <div className="flex items-center justify-center px-6 py-4 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                  Trabalhamos com poucos projetos simultaneamente
                </div>
              </div>
            </div>
            
            {/* Pattern */}
            <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          </motion.div>

          {/* Continuity Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-6 h-full"
          >
            <div className="bg-linear-to-br from-zinc-900 to-black border border-white/5 rounded-4xl p-8 flex-1 relative overflow-hidden">
               <div className="relative z-10">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 text-[10px] font-black uppercase tracking-widest mb-6">
                    <Rocket className="w-3 h-3" />
                    Long Term Growth
                  </div>
                  <h3 className="text-xl font-bold mb-4">Continuidade e Otimização</h3>
                  <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                    Após os 30 dias de acompanhamento, garantimos suporte prioritário e melhorias constantes.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center py-3 border-b border-white/5">
                      <span className="text-xs font-bold text-muted-foreground">Ajustes Técnicos</span>
                      <Check className="w-4 h-4 text-emerald-500" />
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-white/5">
                      <span className="text-xs font-bold text-muted-foreground">Suporte Prioritário</span>
                      <Check className="w-4 h-4 text-emerald-500" />
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-white/5">
                      <span className="text-xs font-bold text-muted-foreground">Melhorias Constantes</span>
                      <Check className="w-4 h-4 text-emerald-500" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-[10px] uppercase font-black text-muted-foreground">A partir de</span>
                    <span className="text-2xl font-black">R$ 49,90<span className="text-xs font-normal text-muted-foreground">/mês</span></span>
                  </div>
               </div>
            </div>

            <div className="bg-primary rounded-4xl p-8 flex items-center gap-6 group hover:scale-[1.02] transition-transform cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                <Zap className="w-8 h-8 text-white fill-white" />
              </div>
              <div>
                <h4 className="font-black text-lg text-white">Pronto para o Elite?</h4>
                <p className="text-xs text-white/70">Clique para iniciar seu diagnóstico agora.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
