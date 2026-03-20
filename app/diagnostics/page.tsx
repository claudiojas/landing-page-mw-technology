import { Logo } from "@/components/landing/logo"
import { DiagnosticForm } from "@/components/landing/diagnostic-form"

export const metadata = {
  title: "Diagnóstico de Performance de Elite | Módulo Web",
  description: "Descubra o potencial real de faturamento do seu negócio com uma análise técnica e de mercado personalizada.",
}

export default function DiagnosticsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="relative py-20 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-8">
            <div className="flex justify-center mb-10">
              <Logo iconSize={54} className="scale-110 sm:scale-125 transition-transform" />
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
                Diagnóstico de <span className="gradient-text">Elite</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Preencha os dados abaixo para receber uma análise técnica e de mercado completa gerada por nossa IA de Engenharia de Vendas.
              </p>
            </div>
          </div>
          
          <div className="bg-card border border-border/50 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-primary/5">
            <DiagnosticForm />
          </div>
        </div>
      </div>
    </main>
  )
}
