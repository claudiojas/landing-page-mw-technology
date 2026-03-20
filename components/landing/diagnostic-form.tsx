"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ChevronLeft, Send, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const steps = [
  {
    id: "identification",
    title: "Identificação",
    questions: [
      { id: "name", label: "Seu Nome Completo:", type: "text", placeholder: "Ex: João Silva" },
      { id: "email", label: "Seu melhor e-mail:", type: "email", placeholder: "nome@empresa.com.br" },
      { id: "phone", label: "WhatsApp (com DDD):", type: "tel", placeholder: "(98) 9 8506-6966" },
    ]
  },
  {
    id: "business",
    title: "Seu Negócio",
    questions: [
      { id: "niche", label: "Qual o seu nicho de atuação? (Ex: Estética, Infoprodutos, Advocacia)", type: "text", placeholder: "Sua área de atuação principal" },
      { id: "ticket", label: "Qual o seu ticket médio (valor do produto/serviço)?", type: "text", placeholder: "Ex: R$ 5.000,00 (Ajuda a IA calcular o ROI)" },
    ]
  },
  {
    id: "operation",
    title: "Operação",
    questions: [
      { id: "traffic", label: "Você já investe em tráfego pago (Google/Meta)?", type: "text", placeholder: "Se sim, a dor da LP é urgente" },
      { id: "service", label: "Qual a sua principal forma de atendimento hoje? (Direct, Site antigo, Indicação)", type: "text", placeholder: "Ex: 80% Indicação e 20% Instagram" },
    ]
  },
  {
    id: "challenges",
    title: "Desafios",
    questions: [
      { id: "challenge", label: "Qual o seu maior desafio de vendas atual? (Escala, falta de leads, leads desqualificados)", type: "textarea", placeholder: "Descreva o que te impede de vender mais hoje..." },
    ]
  }
]

export function DiagnosticForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (id: string, value: string) => {
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
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log("Form Data:", formData)
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-10 space-y-6"
      >
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto text-green-500">
          <CheckCircle2 size={40} />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Diagnóstico Solicitado!</h2>
          <p className="text-muted-foreground">
            A Módulo Web Technology agradece suas respostas. Em breve mandaremos para seu e-mail o diagnóstico técnico de sua empresa.
          </p>
        </div>
        <Button asChild className="rounded-full px-10 py-7 text-base bg-linear-to-r from-primary to-accent font-bold glow-purple">
          <a href="/">Conheça nossa Landing Page</a>
        </Button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Progress Bar */}
      <div className="relative h-1 bg-secondary rounded-full overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 h-full bg-primary"
          initial={{ width: "0%" }}
          animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
        />
      </div>

      <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-muted-foreground">
        <span>Passo {currentStep + 1} de {steps.length}</span>
        <span>{steps[currentStep].title}</span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          {steps[currentStep].questions.map((q) => (
            <div key={q.id} className="space-y-2">
              <Label htmlFor={q.id} className="text-sm font-semibold">{q.label}</Label>
              {q.type === "textarea" ? (
                <Textarea
                  id={q.id}
                  placeholder={q.placeholder}
                  className="bg-background/50 border-border/50 focus:border-primary min-h-[100px] rounded-xl resize-none"
                  value={formData[q.id] || ""}
                  onChange={(e) => handleInputChange(q.id, e.target.value)}
                  required
                />
              ) : (
                <Input
                  id={q.id}
                  type={q.type}
                  placeholder={q.placeholder}
                  className="bg-background/50 border-border/50 focus:border-primary h-12 rounded-xl"
                  value={formData[q.id] || ""}
                  onChange={(e) => handleInputChange(q.id, e.target.value)}
                  required
                />
              )}
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-between pt-6">
        <Button
          type="button"
          variant="ghost"
          onClick={prevStep}
          disabled={currentStep === 0 || isSubmitting}
          className="rounded-full"
        >
          <ChevronLeft className="mr-2 h-4 w-4" /> Anterior
        </Button>
        
        {currentStep < steps.length - 1 ? (
          <Button
            type="button"
            onClick={nextStep}
            className="rounded-full px-8 bg-linear-to-r from-primary to-accent text-primary-foreground font-bold"
          >
            Próximo <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        ) : (
          <Button
            type="submit"
            disabled={isSubmitting}
            className="rounded-full px-8 bg-linear-to-r from-primary to-accent text-primary-foreground font-bold glow-purple"
          >
            {isSubmitting ? "Processando..." : (
              <>
                Finalizar Diagnóstico <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        )}
      </div>
    </form>
  )
}
