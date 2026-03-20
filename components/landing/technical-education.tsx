"use client"

import { motion } from "framer-motion"
import { ShieldAlert, Zap, Gauge, Rocket, TrendingDown, TrendingUp, AlertTriangle, CheckCircle2, CloudLightning } from "lucide-react"

const stats = [
  {
    label: "Baixo Custo Genérico",
    subtitle: "Amadorismo Técnico",
    status: "crítico",
    color: "text-red-500",
    bg: "bg-red-500/5",
    border: "border-red-500/20",
    items: [
      { icon: <AlertTriangle className="w-5 h-5" />, title: "Dívida Técnica Alta", text: "Código legado e plugins inchados que travam o navegador." },
      { icon: <TrendingDown className="w-5 h-5" />, title: "Evasão de Clientes", text: "Cada 1s de atraso mata 20% das suas conversões." },
      { icon: <ShieldAlert className="w-5 h-5" />, title: "Vulnerabilidade", text: "Estruturas genéricas são alvos fáceis para ataques." }
    ],
    metrics: [
      { label: "Carregamento", value: "4.8s", score: 45 },
      { label: "SEO Score", value: "62/100", score: 62 },
      { label: "Segurança", value: "Baixa", score: 30 }
    ]
  },
  {
    label: "Engenharia de Elite",
    subtitle: "Módulo Web Elite",
    status: "excelência",
    color: "text-emerald-500",
    bg: "bg-emerald-500/5",
    border: "border-emerald-500/20",
    items: [
      { icon: <Zap className="w-5 h-5" />, title: "Performance Extrema", text: "Código artesanal em Next.js para carga instantânea." },
      { icon: <TrendingUp className="w-5 h-5" />, title: "Crédito de Conversão", text: "Estrutura otimizada para maximizar cada centavo de tráfego." },
      { icon: <Rocket className="w-5 h-5" />, title: "Escalabilidade", text: "Infraestrutura pronta para receber milhões de acessos." }
    ],
    metrics: [
      { label: "Carregamento", value: "0.7s", score: 99 },
      { label: "SEO Score", value: "100/100", score: 100 },
      { label: "Segurança", value: "Bancária", score: 100 }
    ]
  }
]

export function TechnicalEducation() {
  return (
    <section id="educacao" className="relative pb-24 lg:pb-40 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6"
          >
            <CloudLightning className="w-3 h-3" />
            Decisão Estratégica
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
            O Custo Invisível do <span className="gradient-text">Amadorismo Digital.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Economizar na fundação do seu negócio online é o caminho mais rápido para o prejuízo silencioso. Explore a diferença técnica:
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
          {stats.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative flex flex-col p-8 lg:p-12 rounded-[2.5rem] border ${card.border} ${card.bg} backdrop-blur-sm overflow-hidden group`}
            >
              {/* Card Header */}
              <div className="mb-10">
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${card.color}`}>{card.status}</span>
                  {i === 1 && (
                    <div className="bg-emerald-500/20 text-emerald-500 px-3 py-1 rounded-full text-[10px] font-black animate-pulse">
                      INVESTIMENTO DE ALTO ROI
                    </div>
                  )}
                </div>
                <h3 className="text-3xl lg:text-4xl font-black mb-2">{card.label}</h3>
                <p className="text-muted-foreground font-bold italic">{card.subtitle}</p>
              </div>

              {/* Progress Gauges */}
              <div className="grid grid-cols-3 gap-4 mb-12">
                {card.metrics.map((metric, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between items-end">
                      <span className="text-[8px] font-bold opacity-50 uppercase">{metric.label}</span>
                      <span className={`text-[10px] font-black ${card.color}`}>{metric.value}</span>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${metric.score}%` }}
                        transition={{ duration: 1.5, delay: 0.5 + idx * 0.1 }}
                        className={`h-full ${i === 0 ? "bg-red-500" : "bg-emerald-500"}`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* List Items */}
              <div className="space-y-8 mb-12 grow">
                {card.items.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className={`mt-1 shrink-0 w-10 h-10 rounded-xl ${card.bg} border ${card.border} flex items-center justify-center ${card.color}`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-black text-sm mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-xs leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Decoration for "Elite" card */}
              {i === 1 ? (
                <div className="pt-8 border-t border-emerald-500/20">
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((n) => (
                        <div key={n} className="w-8 h-8 rounded-full border-2 border-background bg-zinc-800 flex items-center justify-center overflow-hidden">
                          <div className="w-full h-full bg-emerald-500/20 flex items-center justify-center">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                          </div>
                        </div>
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-emerald-500 italic">+50 empresas escaladas</span>
                  </div>
                </div>
              ) : (
                <div className="pt-8 border-t border-red-500/20">
                  <p className="text-[10px] text-red-500/70 font-bold italic">Causa comum de falência em negócios digitais que não escalam.</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-red-500/10 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-emerald-500/10 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none" />
      </div>
    </section>
  )
}
