"use client"

import { motion } from "framer-motion"
import { AlertCircle, TrendingDown, Users, Zap, Timer, ArrowDownRight, Percent } from "lucide-react"

const bounceData = [
  { time: "1-3s", increase: "+32%", active: false },
  { time: "1-5s", increase: "+90%", active: true },
  { time: "1-10s", increase: "+123%", active: false },
]

export function PerformanceImpact() {
  return (
    <section id="performance-impact" className="relative py-24 lg:py-32 overflow-hidden bg-background">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <AlertCircle className="w-3 h-3" />
            Dados críticos 2025/2026
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-balance mb-6"
          >
            Por que a Engenharia Módulo Web converte onde{" "}
            <span className="text-muted-foreground/40 line-through decoration-red-500/50">outras agências falham?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-3xl mx-auto"
          >
            A paciência do usuário no digital evaporou. Cada milissegundo de atraso é uma hemorragia direta no seu faturamento.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Visual: The Rule of 3 Seconds */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-card/40 backdrop-blur-sm border border-border/50 rounded-3xl p-8 lg:p-12 relative overflow-hidden flex flex-col justify-between"
          >
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 flex items-center gap-3">
                <Timer className="text-red-500 w-8 h-8" />
                O "Ponto de Ruptura"
              </h3>
              <p className="text-muted-foreground text-lg mb-16 max-w-lg">
                <span className="text-foreground font-bold italic">A Regra dos 3 Segundos:</span> Cerca de 53% dos usuários abandonam o site se ele não carregar nesse tempo.
              </p>

              {/* Visualization: Loading Bar of loss */}
              <div className="relative h-4 sm:h-6 w-full bg-secondary/30 rounded-full mb-16 px-1 flex items-center">
                <motion.div 
                   initial={{ width: 0 }}
                   whileInView={{ width: "100%" }}
                   viewport={{ once: true }}
                   transition={{ duration: 2, ease: "easeOut" }}
                   className="h-2 sm:h-3 rounded-full bg-linear-to-r from-green-500 via-yellow-500 to-red-500 relative"
                >
                  {/* Markers */}
                  <div className="absolute top-[-30px] left-0 text-[10px] font-bold text-green-500">0s</div>
                  
                  {/* Expectation Marker (Higher) */}
                  <div className="absolute top-[-33px] left-[20%] -translate-x-1/2 flex flex-col items-center">
                    <span className="text-[10px] font-bold text-green-500 whitespace-nowrap">2s<span className="hidden lg:inline"> (Expectativa)</span></span>
                    <div className="w-px h-3 bg-green-500/30" />
                  </div>

                  {/* Rupture Point (Lower) */}
                  <div className="absolute top-[-40px] left-[30%] h-12 w-px bg-red-500/50 z-0 flex flex-col items-center">
                    <div className="absolute top-[-15px] whitespace-nowrap bg-red-500 text-white px-2 py-0.5 rounded text-[10px] animate-pulse">
                      53% ABANDONO
                    </div>
                  </div>
                  <div className="absolute top-[-30px] left-[30%] -translate-x-1/2 text-[10px] font-bold text-red-500">3s</div>
                  <div className="absolute top-[-30px] left-full text-[10px] font-bold text-red-500 -translate-x-full">10s+</div>

                  {/* Indicator pulse */}
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                  />
                </motion.div>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <div className="text-4xl font-black text-red-500">16%</div>
                  <div className="text-sm font-bold uppercase tracking-wider opacity-60">Menos Satisfação</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    A cada 1 segundo extra, a frustração do cliente se torna irreversível.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-black text-primary">-7%</div>
                  <div className="text-sm font-bold uppercase tracking-wider opacity-60">Em Conversões</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Menos vendas, menos leads, menos ROI. Seu lucro escorrendo pelo ralo.
                  </p>
                </div>
              </div>
            </div>

            {/* Subtle background graphic */}
            <div className="absolute right-[-10%] bottom-[-10%] opacity-[0.03] rotate-12 pointer-events-none">
              <TrendingDown className="w-96 h-96" />
            </div>
          </motion.div>

          {/* Right Cards: Bounce Rate & Stats */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 bg-linear-to-br from-card to-card/50 border border-border/50 rounded-3xl p-8 relative overflow-hidden group"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Users className="text-primary w-5 h-5" />
                Escala da Rejeição (Bounce Rate)
              </h3>
              
              <div className="space-y-4">
                {bounceData.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`flex items-center justify-between p-4 rounded-2xl border transition-all duration-500 ${
                      item.active 
                        ? "bg-primary/10 border-primary/30 shadow-[0_0_20px_rgba(var(--primary),0.1)]" 
                        : "bg-background/20 border-border/50 grayscale opacity-60"
                    }`}
                  >
                    <span className="font-bold">{item.time}</span>
                    <div className="flex items-center gap-2">
                      <ArrowDownRight className={`w-4 h-4 ${item.active ? "text-red-500" : "text-muted-foreground"}`} />
                      <span className={`text-xl font-black ${item.active ? "text-red-500" : "text-muted-foreground"}`}>
                        {item.increase}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
              <p className="mt-6 text-xs text-muted-foreground italic text-center">
                Quanto mais tempo passa, maior a probabilidade do usuário "quicar" do seu site.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-primary rounded-3xl p-8 text-primary-foreground relative overflow-hidden"
            >
              <div className="relative z-10 flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <Zap className="w-8 h-8 text-white fill-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-black leading-tight">Elite Performance</h4>
                  <p className="text-primary-foreground/80 font-medium">
                    Nossa engenharia fixa seu site na zona de segurança (sub 2s).
                  </p>
                </div>
              </div>
              {/* Pattern */}
              <div className="absolute right-0 top-0 w-32 h-32 opacity-10 pointer-events-none">
                 <Percent className="w-full h-full" />
              </div>
            </motion.div>
          </div>

        </div>

        {/* Sources Footer */}
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 0.4 }}
           viewport={{ once: true }}
           className="mt-12 pt-8 border-t border-border/50 flex flex-wrap justify-center gap-8 text-[10px] font-bold uppercase tracking-widest text-muted-foreground"
        >
          <span>Google Performance Reports</span>
          <span>Hostinger 2025 Analytics</span>
          <span>Tooltester Speed Index</span>
          <span>Hubspot Conversion Data</span>
        </motion.div>
      </div>
    </section>
  )
}
