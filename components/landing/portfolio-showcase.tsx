"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { ExternalLink, Gauge, Zap, Layout, ShieldCheck } from "lucide-react"

const projects = [
  {
    title: "KarCash Fintech",
    type: "Fintech de Alto Ticket",
    description: "Estrutura focada em conversão direta para crédito veicular, com carregamento sub-segundo.",
    image: "/assets/lp-exemple/lp-karcash.png",
    metrics: { lighthouse: 99, load: "0.8s", seo: "100%" },
    color: "from-blue-600/20 to-cyan-500/20",
    tilt: -5
  },
  {
    title: "Fitness & Performance",
    type: "Personal Branding & Vendas",
    description: "Design agressivo e storytelling otimizado para lançamentos de alta escala.",
    image: "/assets/lp-exemple/lp-feetnes.png",
    metrics: { lighthouse: 98, load: "0.9s", seo: "100%" },
    color: "from-purple-600/20 to-pink-500/20",
    tilt: 5
  },
  {
    title: "Advocacia de Elite",
    type: "Corporativo & Jurídico",
    description: "Autoridade e sobriedade combinadas com a velocidade da Engenharia Módulo Web.",
    image: "/assets/lp-exemple/lp-juridico.png",
    metrics: { lighthouse: 100, load: "0.7s", seo: "100%" },
    color: "from-amber-600/20 to-orange-500/20",
    tilt: -3
  }
]

export function PortfolioShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section id="portfolio" ref={containerRef} className="relative py-24 lg:py-40 bg-background overflow-hidden border-t border-border/5">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Layout className="w-3 h-3" />
            Engenharia Aplicada
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black tracking-tight text-balance mb-8">
            Landing Pages que <span className="gradient-text">destroem a concorrência.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto italic">
            Não entregamos apenas "sites bonitos". Entregamos máquinas de guerra com código limpo e performance extrema.
          </p>
        </div>

        {/* MOBILE & TABLET LAYOUT: The "Kinetic" Showcase (Already approved) */}
        <div className="lg:hidden space-y-32">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl aspect-4/3"
              >
                <div className="absolute inset-0 overflow-hidden">
                   <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={1200}
                    className="w-full h-auto object-cover"
                  />
                </div>
                {/* Score badge for mobile */}
                <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-md rounded-xl p-3 border border-border items-center flex flex-col">
                  <span className="text-green-500 font-black text-xl leading-none">{project.metrics.lighthouse}</span>
                  <span className="text-[8px] font-bold opacity-60 uppercase">Score</span>
                </div>
              </motion.div>
              
              <div className="space-y-4">
                <span className="text-primary font-bold text-xs uppercase tracking-widest">{project.type}</span>
                <h3 className="text-2xl font-black">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
                   <div>
                     <span className="text-[10px] font-bold uppercase opacity-50 block">Load Time</span>
                     <p className="text-xl font-black text-primary">{project.metrics.load}</p>
                   </div>
                   <div>
                     <span className="text-[10px] font-bold uppercase opacity-50 block">SEO Score</span>
                     <p className="text-xl font-black text-green-500">100%</p>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP LAYOUT: Scrolling Card Grid (User requested pivot) */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(var(--primary-rgb),0.1)] flex flex-col h-full"
            >
              {/* Scrolling Image Header */}
              <div className="relative h-[450px] overflow-hidden bg-black/20">
                <div className="w-full h-full cursor-pointer overflow-hidden">
                  <motion.div
                    className="w-full"
                    initial={{ y: 0 }}
                    whileHover={{ y: "-70%" }}
                    transition={{ 
                      duration: 8, 
                      ease: "easeInOut",
                    }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={2000}
                      className="w-full h-auto object-cover"
                      priority={index === 0}
                    />
                  </motion.div>
                </div>
                
                {/* Floating Metrics Overlay (Desktop) */}
                <div className="absolute top-4 left-4 right-4 flex justify-between pointer-events-none">
                  <div className="bg-background/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
                    <Gauge className="w-3 h-3 text-green-500" />
                    <span className="text-[10px] font-black text-white">{project.metrics.lighthouse} Lighthouse</span>
                  </div>
                  <div className="bg-primary/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2 text-primary-foreground">
                    <Zap className="w-3 h-3" />
                    <span className="text-[10px] font-black">{project.metrics.load}</span>
                  </div>
                </div>

                {/* Hover Indicator */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center justify-center">
                    <div className="bg-background/90 px-4 py-2 rounded-full border border-primary/20 scale-90 group-hover:scale-100 transition-transform">
                        <span className="text-[10px] font-bold text-primary">SCROLLING PREVIEW</span>
                    </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 flex flex-col grow space-y-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">{project.type}</span>
                  <h3 className="text-2xl font-black tracking-tight group-hover:text-primary transition-colors">{project.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                
                <div className="pt-6 mt-auto flex items-center justify-start border-t border-border/30">
                  <div className="flex items-center gap-2">
                     <ShieldCheck className="w-4 h-4 text-green-500" />
                     <span className="text-xs font-bold opacity-70">SEO 100%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Structural Bridge to Education */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-32 lg:mt-56 relative"
        >
          {/* Asymmetrical Narrative Hook */}
          <div className="grid lg:grid-cols-2 gap-12 items-end text-left border-t border-primary/10 pt-16">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-6xl font-black leading-tight tracking-tighter">
                Pronto para <br/>
                <span className="text-primary italic">performar?</span>
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground text-sm lg:text-lg font-medium leading-relaxed">
                No mercado, você encontrará promessas de "sites rápidos" por R$ 500. 
                Mas na prática, o custo invisível do amadorismo é um buraco no seu ROI.
              </p>
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                <div className="w-8 h-px bg-primary" />
                Desça para entender o risco
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
