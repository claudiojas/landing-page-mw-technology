"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Target, Accessibility, Terminal, Star, Quote, Linkedin, CheckCircle2, Award } from "lucide-react"

const testimonials = [
  {
    quote: "O Cláudio me salvou! Meu sistema estava travado e eu perdendo vendas. Profissional muito técnico e honesto.",
    author: "Cliente Verificado",
    role: "Plataforma de Vendas",
    platform: "99freelas",
    size: "large",
    impact: true
  },
  {
    quote: "Sua precisão no handoff e fidelidade às diretrizes de UX garantiram um produto funcional e impecável.",
    author: "Camila Melo",
    role: "Product Designer @Aurum",
    platform: "LinkedIn",
    size: "small",
    impact: false
  },
  {
    quote: "Possui uma visão estratégica sobre acessibilidade, entendendo que não se trata apenas de normas, mas de incluir pessoas.",
    author: "Victor Kawana",
    role: "Software Engineer",
    platform: "LinkedIn",
    size: "small",
    impact: false
  },
  {
    quote: "Recomendo com entusiasmo por sua competência técnica e compromisso em fazer a diferença na vida das pessoas.",
    author: "Daniel Dutra",
    role: "Founder @Lacrei Saúde",
    platform: "LinkedIn",
    size: "medium",
    impact: false
  }
]

const dnaPoints = [
  {
    icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
    title: "Honestidade Técnica",
    description: "Se algo não for escalável ou trouxer dívida técnica futura, seremos os primeiros a dizer."
  },
  {
    icon: <Accessibility className="w-5 h-5 text-emerald-500" />,
    title: "Acessibilidade Nativa",
    description: "Engenharia inclusiva não é opcional, é o padrão de excelência de toda interface que criamos."
  },
  {
    icon: <Target className="w-5 h-5 text-emerald-500" />,
    title: "Foco no Resultado (ROI)",
    description: "Código bonito não paga as contas. Código que carrega instantaneamente e converte, sim."
  }
]

export function TechnicalDNA() {
  return (
    <section id="dna-tecnico" className="relative py-24 lg:py-40 bg-background overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-500/5 blur-[120px] rounded-full translate-x-1/2 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Side: DNA Manifesto */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 text-[10px] font-black uppercase tracking-widest mb-6">
                <Terminal className="w-3 h-3" />
                Módulo Web Philosophy
              </div>
              <h2 className="text-4xl lg:text-7xl font-black mb-8 leading-none uppercase italic">
                Nosso <br/> <span className="text-emerald-500">DNA</span> <br/> Técnico.
              </h2>
              <p className="text-muted-foreground text-lg lg:text-xl font-medium leading-relaxed max-w-xl">
                Não somos apenas uma agência de design. Somos uma <span className="text-foreground">boutique de engenharia</span> focada em converter tecnologia em lucro sustentável.
              </p>
            </motion.div>

            <div className="grid gap-8">
              {dnaPoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                    {point.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">{point.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="pt-8 border-t border-white/10 flex items-center gap-6"
            >
               <div className="flex -space-x-3">
                  {[1,2,3,4].map(n => (
                    <div key={n} className="w-10 h-10 rounded-full bg-zinc-800 border-2 border-background flex items-center justify-center">
                       <Linkedin className="w-4 h-4 text-emerald-500/50" />
                    </div>
                  ))}
               </div>
               <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                 Validado por <span className="text-foreground">Líderes de Produto e Engenharia</span>
               </div>
            </motion.div>
          </div>

          {/* Right Side: Wall of Love / Testimonials */}
          <div className="relative">
            <div className="grid sm:grid-cols-2 gap-4">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-6 rounded-3xl border transition-all duration-500 relative flex flex-col justify-between group ${
                    t.impact 
                      ? "sm:col-span-2 bg-emerald-500 border-emerald-400 text-emerald-950" 
                      : "bg-card/40 border-border/50 hover:border-emerald-500/30 backdrop-blur-sm"
                  }`}
                >
                  {t.impact && (
                    <div className="absolute top-4 right-6 flex gap-1">
                      {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 fill-emerald-950" />)}
                    </div>
                  )}
                  
                  <div>
                    <Quote className={`w-8 h-8 mb-4 opacity-20 ${t.impact ? 'text-emerald-950' : 'text-emerald-500'}`} />
                    <p className={`font-medium mb-8 leading-relaxed ${t.impact ? 'text-xl font-bold' : 'text-sm'}`}>
                      "{t.quote}"
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-current/10">
                    <div className="flex flex-col">
                      <span className={`text-xs font-black uppercase tracking-tight ${t.impact ? 'text-emerald-900' : 'text-foreground'}`}>
                        {t.author}
                      </span>
                      <span className={`text-[10px] opacity-70 ${t.impact ? 'font-bold' : ''}`}>
                        {t.role}
                      </span>
                    </div>
                    {t.platform === "99freelas" ? (
                      <div className="flex items-center gap-1 bg-black/10 px-2 py-1 rounded text-[9px] font-black uppercase">
                        <Award className="w-3 h-3" /> 99freelas
                      </div>
                    ) : (
                      <Linkedin className={`w-4 h-4 opacity-30 group-hover:opacity-100 transition-opacity ${t.impact ? 'text-emerald-950' : ''}`} />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Achievement Seal */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-10 -right-10 w-24 h-24 hidden lg:block"
            >
              <div className="w-full h-full relative flex items-center justify-center opacity-20 group">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0 " fill="transparent" />
                  <text className="text-[10px] font-black uppercase tracking-[0.2em] fill-current">
                    <textPath xlinkHref="#circlePath">Resultados Verificados • Engenharia Real •</textPath>
                  </text>
                </svg>
                <CheckCircle2 className="absolute w-8 h-8 text-emerald-500 group-hover:scale-110 transition-transform" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
