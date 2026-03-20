"use client"

import { useEffect, useRef } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    category: "Escalabilidade",
    question: "Se eu colocar 50k+ pessoas no site hoje, ele aguenta ou vai cair?",
    answer:
      "Construímos com 'Infraestrutura de Guerra'. Usamos Next.js com Edge Computing e CDNs globais. Seu site não apenas aguenta picos massivos, como mantém a mesma velocidade de sub-1-segundo para todos os usuários simultâneos, garantindo que seu lançamento seja um sucesso sem travamentos.",
  },
  {
    category: "Gestão",
    question: "Vou ficar refém de vocês para sempre ou consigo alterar preços e banners sozinho?",
    answer:
      "Total autonomia de conteúdo. Entregamos o site integrado a um CMS intuitivo onde você pode alterar textos, preços e banners sem tocar em uma linha de código. A engenharia complexa e de alto desempenho fica sob nosso capô; o controle diário do seu negócio é 100% seu.",
  },
  {
    category: "Lucro & ROI",
    question: "Como vou saber se o meu investimento em anúncios está realmente gerando lucro?",
    answer:
      "Rastreamento Blindado. Diferente do rastreamento comum que perde 30% dos dados para adblockers, implementamos Tracking Server-Side via GTM. Você terá precisão absoluta para saber exatamente de onde vêm seus leads e qual o retorno real de cada real investido em Google/Meta Ads.",
  },
  {
    category: "Valor de Mercado",
    question: "Por que investir em arquitetura personalizada se um template de R$ 500 parece igual?",
    answer:
      "Um template de R$ 500 é um ralo de dinheiro disfarçado. Ele vem carregado de 'lixo' técnico que destrói sua velocidade no 4G e afasta clientes qualificados. Nossa arquitetura personalizada é um ativo financeiro: ela carrega instantaneamente, escala sem custos extras e é feita especificamente para maximizar sua taxa de conversão.",
  },
  {
    category: "Segurança",
    question: "E se o site apresentar problemas exatamente no dia do meu lançamento?",
    answer:
      "Monitoramento Ativo e Redundância. Nossa arquitetura distribuída garante que, se um servidor falhar, outro assume instantaneamente em milissegundos. Para grandes operações, oferecemos acompanhamento em tempo real durante o pico de tráfego, garantindo que sua única preocupação seja vender.",
  },
]

export function FAQ() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll(".reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Bubbles */}
      <div className="bubble w-40 h-40 top-32 right-20 animate-swing opacity-20" />
      <div className="bubble w-24 h-24 bottom-40 left-32 animate-float opacity-30" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal opacity-0 text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            Perguntas{" "}
            <span className="gradient-text">Frequentes</span>
          </h2>
        </div>

        <div className="reveal opacity-0" style={{ animationDelay: "0.2s" }}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 data-[state=open]:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left text-foreground font-semibold hover:text-primary transition-colors py-6 data-[state=open]:text-primary group">
                  <div className="flex flex-col gap-1 w-full">
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary/50 group-data-[state=open]:text-primary/70 mb-1">
                      {faq.category}
                    </span>
                    <span className="text-base sm:text-lg pr-4">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
