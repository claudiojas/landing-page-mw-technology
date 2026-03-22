"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ChevronRight, 
  ChevronLeft, 
  Send, 
  CheckCircle2, 
  Zap, 
  Upload, 
  Palette, 
  MessageSquare, 
  ShieldCheck, 
  Target, 
  Image as ImageIcon,
  Home,
  FileText
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

const steps = [
  {
    id: "visual",
    title: "Identidade Visual",
    description: "Dados estruturais para a base da sua página.",
    questions: [
      { id: "companyName", label: "Nome da Empresa:", type: "text", placeholder: "Como deve aparecer na LP" },
      { id: "logo", label: "Logotipo:", type: "file", placeholder: "Upload de arquivo PNG/SVG" },
      { id: "colors", label: "Paleta de Cores:", type: "color-picker", placeholder: "Hexadecimal ou escolha um preset" },
      { id: "whatsapp", label: "WhatsApp de Conversão:", type: "tel", placeholder: "Número com DDD para o botão de CTA" },
    ]
  },
  {
    id: "problem_solution",
    title: "Problema e Solução",
    description: "Copy de atração para prender a atenção do visitante.",
    questions: [
      { id: "pain_point", label: "O 'Grito de Socorro':", type: "textarea", placeholder: "Qual é a frase que você mais ouve dos seus clientes quando eles chegam frustrados?" },
      { id: "inertia_risk", label: "Risco da Inércia:", type: "textarea", placeholder: "Se o seu potencial cliente não contratar sua solução hoje, qual o prejuízo em 6 meses?" },
      { id: "differential", label: "Diferencial Real:", type: "textarea", placeholder: "O que você faz que o seu concorrente mais barato não consegue entregar?" },
    ]
  },
  {
    id: "audience",
    title: "Público e Objeções",
    description: "Copy de conversão focada em filtrar e convencer.",
    questions: [
      { id: "anti_persona", label: "Perfil do Cliente Ideal:", type: "textarea", placeholder: "Descreva em uma frase para quem você NÃO quer vender." },
      { id: "objections", label: "Quebra de Objeções (Top 3):", type: "textarea", placeholder: "Quais as 3 perguntas que os clientes sempre fazem antes de fechar? (Seguro? Demora? Garantia?)" },
      { id: "authority", label: "Autoridade:", type: "textarea", placeholder: "Certificações, anos de mercado ou número de projetos entregues." },
    ]
  },
  {
    id: "social_proof",
    title: "Prova Social e Ativos",
    description: "Elementos de confiança para validar sua oferta.",
    questions: [
      { id: "testimonials", label: "Depoimentos:", type: "textarea", placeholder: "Cole aqui 2 ou 3 depoimentos ou link para o Google Meu Negócio." },
      { id: "operation_images", label: "Imagens do Serviço:", type: "file", multiple: true, placeholder: "Upload de fotos reais da operação, equipe ou produtos." },
    ]
  },
  {
    id: "benchmarking",
    title: "Referências",
    description: "Inspiração para alinhar a régua estética.",
    questions: [
      { id: "inspiration", label: "Inspiração (Benchmark):", type: "textarea", placeholder: "Liste 2 ou 3 sites/concorrentes que você considera que têm uma comunicação eficiente." },
    ]
  }
]

const colorPresets = [
  { name: "Confiança", color: "bg-blue-600", value: "#2563eb" },
  { name: "Energia", color: "bg-orange-500", value: "#f97316" },
  { name: "Tecnologia", color: "bg-zinc-800", value: "#27272a" },
]

export function DiagnosticForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<Record<string, any>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleInputChange = (id: string, value: any) => {
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-10 space-y-8"
      >
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto text-green-500">
          <CheckCircle2 size={40} />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Diagnóstico Estratégico Enviado!</h2>
          <p className="text-muted-foreground text-sm max-w-sm mx-auto leading-relaxed">
            Recebemos seus ativos e diretrizes. Nossa IA está processando sua estrutura para gerar o melhor diagnóstico de funil possível.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Button asChild className="rounded-full px-8 py-6 text-sm bg-linear-to-r from-primary to-accent font-bold glow-purple">
            <Link href="/">Voltar para a Home</Link>
          </Button>
          <Button variant="outline" asChild className="rounded-full px-8 py-6 text-sm font-bold border-border/50">
            <Link href="/diagnostics">Novo Diagnóstico</Link>
          </Button>
        </div>
      </motion.div>
    )
  }

  const renderQuestion = (q: any) => {
    switch (q.type) {
      case "textarea":
        return (
          <Textarea
            id={q.id}
            placeholder={q.placeholder}
            className="bg-background/50 border-border/50 focus:border-primary min-h-[120px] rounded-2xl resize-none transition-all"
            value={formData[q.id] || ""}
            onChange={(e) => handleInputChange(q.id, e.target.value)}
            required
          />
        )
      case "file":
        return (
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="relative border-2 border-dashed border-border/50 rounded-2xl p-8 flex flex-col items-center justify-center gap-3 bg-background/30 hover:bg-background/50 hover:border-primary/50 transition-all cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Upload className="w-6 h-6" />
            </div>
            <div className="text-center">
              <p className="text-sm font-bold">{formData[q.id] ? "Arquivo Selecionado" : "Clique para fazer upload"}</p>
              <p className="text-[10px] text-muted-foreground mt-1">{q.placeholder}</p>
            </div>
            <input 
              type="file" 
              className="hidden" 
              multiple={q.multiple}
              onChange={(e) => handleInputChange(q.id, e.target.files?.[0]?.name || "Arquivo")}
              ref={fileInputRef}
            />
            {formData[q.id] && (
              <div className="mt-2 text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">
                {formData[q.id]}
              </div>
            )}
          </div>
        )
      case "color-picker":
        return (
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {colorPresets.map((preset) => (
                <button
                  key={preset.name}
                  type="button"
                  onClick={() => handleInputChange(q.id, preset.value)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl border transition-all ${
                    formData[q.id] === preset.value ? "border-primary bg-primary/10" : "border-border/50 bg-background/50"
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full ${preset.color}`} />
                  <span className="text-xs font-bold">{preset.name}</span>
                </button>
              ))}
            </div>
            <div className="relative">
              <Palette className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id={q.id}
                placeholder="#HEXADECIMAL"
                className="bg-background/50 border-border/50 focus:border-primary h-12 rounded-xl pl-10 uppercase font-mono"
                value={formData[q.id] || ""}
                onChange={(e) => handleInputChange(q.id, e.target.value)}
                required
              />
            </div>
          </div>
        )
      default:
        return (
          <Input
            id={q.id}
            type={q.type}
            placeholder={q.placeholder}
            className="bg-background/50 border-border/50 focus:border-primary h-12 rounded-xl transition-all"
            value={formData[q.id] || ""}
            onChange={(e) => handleInputChange(q.id, e.target.value)}
            required
          />
        )
    }
  }

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Header with quick back link */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-xs font-black uppercase tracking-[0.2em] text-primary">Diagnóstico Estratégico</h1>
              <p className="text-[10px] text-muted-foreground font-bold">Respostas detalhadas = Diagnóstico preciso</p>
            </div>
          </div>
          <Link href="/" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5">
            <Home className="w-3 h-3" />
            Home
          </Link>
        </div>

        {/* Progress Display */}
        <div className="bg-muted/30 p-4 rounded-3xl border border-border/50">
          <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.15em] mb-4">
            <span className="text-primary">Etapa {currentStep + 1} de {steps.length}</span>
            <span className="text-muted-foreground">{steps[currentStep].title}</span>
          </div>
          <div className="relative h-1.5 bg-background rounded-full overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-linear-to-r from-primary to-accent"
              initial={{ width: "0%" }}
              animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-1">
               <h2 className="text-xl sm:text-2xl font-black tracking-tight">{steps[currentStep].title}</h2>
               <p className="text-sm text-muted-foreground">{steps[currentStep].description}</p>
            </div>

            <div className="space-y-6">
              {steps[currentStep].questions.map((q) => (
                <div key={q.id} className="space-y-3">
                  <Label htmlFor={q.id} className="text-xs font-black uppercase tracking-widest opacity-70 flex items-center gap-2">
                    {q.type === 'color-picker' && <Palette className="w-3 h-3 text-primary" />}
                    {q.type === 'file' && <Upload className="w-3 h-3 text-primary" />}
                    {q.type === 'textarea' && <MessageSquare className="w-3 h-3 text-primary" />}
                    {q.label}
                  </Label>
                  {renderQuestion(q)}
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center gap-4 pt-4 border-t border-border/30">
          <Button
            type="button"
            variant="ghost"
            onClick={prevStep}
            disabled={currentStep === 0 || isSubmitting}
            className="h-14 rounded-2xl flex-1 font-bold text-muted-foreground hover:bg-muted/50"
          >
            <ChevronLeft className="mr-2 h-4 w-4" /> Anterior
          </Button>
          
          {currentStep < steps.length - 1 ? (
            <Button
              type="button"
              onClick={nextStep}
              className="h-14 rounded-2xl flex-2 bg-foreground text-background font-black hover:bg-foreground/90 transition-all flex items-center justify-center gap-2"
            >
              PRÓXIMO PASSO <ChevronRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={isSubmitting}
              className="h-14 rounded-2xl flex-2 bg-linear-to-r from-primary to-accent text-primary-foreground font-black glow-purple flex items-center justify-center gap-2"
            >
              {isSubmitting ? "SOLICITANDO..." : (
                <>
                  ENVIAR ATIVOS <Send className="h-4 w-4" />
                </>
              )}
            </Button>
          )}
        </div>
      </form>
    </div>
  )
}
