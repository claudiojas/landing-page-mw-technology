"use client"

import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { motion } from "framer-motion"
import { Gavel, Database, Cpu, Layers, CheckCircle2 } from "lucide-react"

export default function TermsOfUse() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      
      <section className="pt-32 pb-24 lg:pt-48 lg:pb-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mb-6">
              <Gavel className="w-3 h-3" />
              Compliance & Ética
            </div>
            <h1 className="text-4xl lg:text-7xl font-black mb-6 italic uppercase leading-none">
              Termos de <br/> <span className="gradient-text text-6xl lg:text-8xl">Serviço</span>
            </h1>
            <p className="text-muted-foreground text-lg italic">Edição 2024</p>
          </motion.div>

          <div className="space-y-16">
            {/* Business Models Section */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="p-8 rounded-3xl border border-white/5 bg-zinc-900/50">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                   <Cpu className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase italic">Modelo Setup + Handoff</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Infraestrutura configurada sob propriedade do cliente em contas Vercel, AWS, Cloudflare ou GCP. Entrega total do ecossistema funcionando.
                </p>
              </div>
              <div className="p-8 rounded-3xl border border-primary/20 bg-primary/5">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                   <Layers className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase italic">Ecossistema Módulo Web</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Infraestrutura gerenciada, hospedada e otimizada continuamente dentro de nossos servidores de elite por uma mensalidade recorrente.
                </p>
              </div>
            </div>

            <div className="prose prose-invert prose-primary max-w-none space-y-12 text-muted-foreground/90 font-medium">
              <section className="space-y-4">
                <h2 className="text-2xl font-black text-foreground uppercase tracking-tight flex items-center gap-3">
                  <span className="text-primary opacity-20 text-4xl font-black">01</span> Escopo de Engenharia
                </h2>
                <p>
                  A Módulo Web Technology compromete-se a entregar código de elite, otimizado para performance (score 90+ no Google Lighthouse) e escalabilidade. O serviço inclui o design de interface, implementação de backend, configuração de APIs e rastreamento de dados.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black text-foreground uppercase tracking-tight flex items-center gap-3">
                  <span className="text-primary opacity-20 text-4xl font-black">02</span> Modelo A: Setup & Independência
                </h2>
                <ul className="list-none space-y-4">
                  <li className="flex gap-4">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <div><strong>Propriedade de Contas:</strong> Todas as contas de infraestrutura (Vercel, Supabase, Cloudflare, etc.) serão criadas utilizando o e-mail fornecido pelo cliente, garantindo soberania total sobre o projeto.</div>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <div><strong>Garantia Proativa:</strong> Após a entrega em produção, oferecemos 30 dias de manutenção técnica gratuita. Após este período, a manutenção passa a ser cobrada sob demanda ou via SLA mensal.</div>
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black text-foreground uppercase tracking-tight flex items-center gap-3">
                  <span className="text-primary opacity-20 text-4xl font-black">03</span> Modelo B: Gestão Continuada
                </h2>
                <ul className="list-none space-y-4">
                  <li className="flex gap-4">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <div><strong>Disponibilidade (SLA):</strong> No modelo de mensalidade, garantimos 99.9% de uptime e atualizações constantes de segurança e performance sem custos adicionais.</div>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <div><strong>Vigência:</strong> O serviço permanece ativo enquanto houver a adimplência da mensalidade. Em caso de cancelamento, o cliente pode solicitar o handoff para o Modelo A mediante taxa de migração.</div>
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black text-foreground uppercase tracking-tight flex items-center gap-3">
                  <Database className="w-5 h-5 text-primary" /> Propriedade Intelectual
                </h2>
                <p>
                  No Modelo A, após o pagamento total, o código fonte gerado é de propriedade do cliente para uso comercial. No Modelo B, o cliente possui licença de uso exclusiva enquanto durar a assinatura.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
