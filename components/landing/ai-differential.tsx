"use client"

import { motion } from "framer-motion"
import { Sparkles, Brain, Cpu, Database, Zap } from "lucide-react"

const features = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Seu Nicho",
    text: "Análise profunda de concorrência e comportamento de compra específico do seu mercado."
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Seu Ticket",
    text: "Estratégias de persuasão ajustadas para o valor do seu produto ou serviço."
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Modelo de Venda",
    text: "Otimização para WhatsApp, VSL, Direct ou E-commerce direto."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Desafios Atuais",
    text: "Soluções práticas para leads desqualificados, falta de escala ou baixa retenção."
  }
]

export function AiDifferential() {
  return (
    <section id="diferenciais" className="relative py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12 lg:mb-0"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles className="w-3 h-3" />
              Não é um e-book genérico
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight">
              Um Diagnóstico <span className="gradient-text">Único</span> para o seu Negócio.
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed italic">
              "Você não recebe um PDF padrão. Recebe uma varredura completa do seu ecossistema digital gerada por nossa IA de Engenharia de Vendas."
            </p>
            <div className="flex items-center gap-6 p-6 rounded-3xl bg-secondary/30 border border-border/50 backdrop-blur-sm">
               <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <Brain className="w-6 h-6 text-primary-foreground" />
               </div>
               <div>
                 <h4 className="font-bold text-foreground">Inteligência Real aplicada ao Funil</h4>
                 <p className="text-xs text-muted-foreground mt-1">Nossa IA cruza dados de mais de 50 nichos para encontrar vulnerabilidades.</p>
               </div>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-4xl bg-card border border-border/50 hover:border-primary/30 transition-all flex flex-col gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
