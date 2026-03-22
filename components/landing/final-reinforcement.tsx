"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Target, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FinalReinforcement() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-background">
      {/* Background Graphic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full -z-10 opacity-[0.03] pointer-events-none">
        <Target className="w-full h-full" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-linear-to-br from-zinc-900 via-zinc-900 to-black border border-white/5 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden shadow-2xl"
        >
          <div className="relative z-10 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mx-auto">
              Diferenciação Clara
            </div>
            
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tighter">
              Não criamos páginas bonitas.<br/>
              <span className="gradient-text uppercase">Criamos estruturas que lucram.</span>
            </h2>
            
            <p className="text-muted-foreground text-lg sm:text-xl font-medium max-w-2xl mx-auto">
              Transformamos visitantes aleatórios em clientes fiéis através de engenharia real e psicologia de vendas.
            </p>

            <div className="pt-8">
              <Button
                asChild
                size="xl"
                className="rounded-full px-12 py-8 text-lg bg-linear-to-r from-primary to-accent font-black transition-all hover:scale-105 glow-purple group"
              >
                <Link href="/diagnostics">
                  QUERO MEU DIAGNÓSTICO GRATUITO
                  <ArrowRight className="ml-2 w-6 h-6 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            
            <div className="pt-12 grid grid-cols-2 sm:grid-cols-3 gap-8 opacity-40">
               <div className="flex flex-col items-center gap-2">
                  <ShieldCheck className="w-6 h-6" />
                  <span className="text-[10px] font-black uppercase tracking-wider">Segurança Real</span>
               </div>
               <div className="flex flex-col items-center gap-2">
                  <Target className="w-6 h-6" />
                  <span className="text-[10px] font-black uppercase tracking-wider">FOCO EM ROI</span>
               </div>
               <div className="flex flex-col items-center gap-2 col-span-2 sm:col-span-1">
                  <span className="text-xl font-black italic">v1.2</span>
                  <span className="text-[10px] font-black uppercase tracking-wider">VERSION LEVEL</span>
               </div>
            </div>
          </div>

          {/* Patterns */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-primary/20 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent/20 blur-[100px] pointer-events-none" />
        </motion.div>
      </div>
    </section>
  )
}
