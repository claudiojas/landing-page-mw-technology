"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Eye, RefreshCcw, Users, ArrowRight } from "lucide-react"

const points = [
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "30 Dias de Acompanhamento",
    text: "Não sumimos após o 'go-live'. Monitoramos performance e estabilidade."
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Análise de Comportamento",
    text: "Ajustes baseados em como os usuários realmente interagem com sua página."
  },
  {
    icon: <RefreshCcw className="w-5 h-5" />,
    title: "Refinamento Contínuo",
    text: "Polimento de copywriting e design para espremer cada gota de conversão."
  }
]

export function SecurityProcess() {
  return (
    <section className="relative py-24 bg-primary/5 border-y border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-black mb-6">
              Você não recebe apenas uma página.<br/>
              <span className="text-primary">Recebe um processo.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Diferente de agências que entregam o arquivo e desaparecem, nossa Engenharia de Elite garante que sua estrutura performe sob fogo real.
            </p>
            
            <div className="space-y-6">
              {points.map((point, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                    {point.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{point.title}</h4>
                    <p className="text-sm text-muted-foreground">{point.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border/50 rounded-4xl p-8 lg:p-12 relative overflow-hidden shadow-2xl shadow-primary/5"
          >
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6">
                 <Users className="w-10 h-10 text-emerald-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 italic">Acompanhamento de Elite</h3>
              <p className="text-muted-foreground mb-8">
                Garantimos que sua página não seja apenas "bonita", mas uma máquina de vendas operando no ápice.
              </p>
              <div className="py-3 px-6 rounded-full bg-emerald-500/20 text-emerald-500 text-xs font-black uppercase tracking-widest">
                Proteção Pós-Entrega Ativa
              </div>
            </div>
            
            {/* Decoration */}
            <div className="absolute -bottom-10 -right-10 opacity-5 rotate-12">
               <ShieldCheck size={240} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
