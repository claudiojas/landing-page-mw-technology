"use client"

import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { motion } from "framer-motion"
import { Shield, Lock, Eye, FileText } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-24 lg:pt-48 lg:pb-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-20 mb-16 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-black uppercase tracking-widest mb-6">
              <Shield className="w-3 h-3" />
              Privacidade Garantida
            </div>
            <h1 className="text-3xl lg:text-5xl font-black mb-6 italic uppercase leading-none">
              Política de <br/> <span className="text-emerald-500 text-5xl lg:text-7xl">Privacidade</span>
            </h1>
            <p className="text-muted-foreground text-lg italic">Última atualização: 20 de Março de 2026</p>
          </motion.div>

          <div className="prose prose-invert prose-emerald max-w-none space-y-12 text-muted-foreground/90 font-medium">
            <section className="space-y-4">
              <h2 className="text-2xl font-black text-foreground uppercase tracking-tight flex items-center gap-3">
                <Lock className="w-5 h-5 text-emerald-500" /> 1. Compromisso com a Segurança
              </h2>
              <p>
                Na Módulo Web Technology, a privacidade e a segurança dos dados de nossos parceiros e seus usuários finais são tratados com o mesmo rigor que nossa engenharia de código. Esta política descreve como coletamos, usamos e protegemos as informações em nossos dois modelos de operação: Consultoria de Infraestrutura e Ecossistema Gerenciado.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-foreground uppercase tracking-tight flex items-center gap-3">
                <Eye className="w-5 h-5 text-emerald-500" /> 2. Coleta de Dados
              </h2>
              <p>
                Coletamos apenas o estritamente necessário para a funcionalidade do produto e mensuração de ROI (Retorno sobre Investimento). Isso inclui:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Dados de contato para orçamentos e consultoria.</li>
                <li>Informações técnicas de performance e rastreamento (Server-Side Tracking) para otimização de campanhas de tráfego pago.</li>
                <li>No modelo de Ecossistema, logs de segurança e performance para garantir 100% de uptime.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-foreground uppercase tracking-tight flex items-center gap-3">
                <FileText className="w-5 h-5 text-emerald-500" /> 3. Tratamento LGPD
              </h2>
              <p>
                Em conformidade com a Lei Geral de Proteção de Dados (LGPD):
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Direito ao Acesso:</strong> Você pode solicitar a qualquer momento os dados que possuímos sobre sua empresa ou projeto.</li>
                <li><strong>Eliminação:</strong> Após a rescisão contratuais ou handoff total, os dados sensíveis são removidos de nossos servidores internos, permanecendo apenas sob sua custódia.</li>
                <li><strong>Criptografia:</strong> Todo dado trafegado em nossas aplicações utiliza criptografia de ponta (TLS/SSL).</li>
              </ul>
            </section>

            <section className="space-y-4 border-l-2 border-emerald-500/30 pl-8 italic">
              <h2 className="text-xl font-bold text-foreground">Aviso sobre Tracking Server-Side</h2>
              <p>
                Nossos projetos utilizam rastreamento via servidor para proteger a privacidade do usuário contra scripts invasivos de terceiros, garantindo que os dados sejam enviados de forma segura e controlada para as plataformas de ads.
              </p>
            </section>

            <section className="space-y-4 pt-12 border-t border-white/5">
              <h2 className="text-2xl font-black text-foreground uppercase">4. Contato</h2>
              <p>
                Para dúvidas sobre sua privacidade, entre em contato via <a href="mailto:contato.moduloweb@gmail.com" className="text-emerald-500 hover:underline">contato.moduloweb@gmail.com</a> ou através do seu Gerente de Projetos dedicado.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
