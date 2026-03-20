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
    question: "Por que vocês usam Next.js ao invés de WordPress?",
    answer:
      "WordPress é uma ferramenta generalista que carrega plugins desnecessários e código legado. Next.js permite construir páginas otimizadas do zero, com apenas o código necessário. O resultado: páginas 4-5x mais rápidas, melhor SEO e maior taxa de conversão.",
  },
  {
    question: "Quanto tempo leva para entregar uma landing page?",
    answer:
      "O prazo médio é de 7 a 14 dias úteis, dependendo da complexidade do projeto. Páginas simples podem ser entregues em até 5 dias. Cada projeto passa por fases de briefing, design, desenvolvimento e testes de performance antes da entrega.",
  },
  {
    question: "Vocês integram com meu sistema de CRM e automações?",
    answer:
      "Sim! Integramos com as principais ferramentas do mercado: RD Station, HubSpot, ActiveCampaign, Pipedrive, e qualquer ferramenta que possua API. Também configuramos webhooks personalizados para suas automações específicas.",
  },
  {
    question: "Como funciona o rastreamento blindado no servidor?",
    answer:
      "Diferente do pixel tradicional (que roda no navegador do usuário), nosso rastreamento server-side envia os dados diretamente para as plataformas de anúncios. Isso significa dados 30-40% mais precisos, mesmo com bloqueadores de anúncios ou restrições de cookies.",
  },
  {
    question: "Qual a garantia de performance?",
    answer:
      "Garantimos score mínimo de 90 no Google Lighthouse e tempo de carregamento abaixo de 2 segundos. Se não atingirmos essas métricas, trabalhamos de graça até entregar. Nosso padrão interno é atingir 95+ e sub-1-segundo.",
  },
  {
    question: "Vocês oferecem suporte após a entrega?",
    answer:
      "Sim! Oferecemos 30 dias de suporte técnico gratuito após a entrega. Após esse período, temos planos de manutenção mensais que incluem atualizações de segurança, monitoramento de performance e ajustes de conteúdo.",
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
                <AccordionTrigger className="text-left text-foreground font-semibold hover:text-primary transition-colors py-5 [&[data-state=open]]:text-primary">
                  {faq.question}
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
