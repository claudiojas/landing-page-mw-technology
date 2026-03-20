"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowRight, ShieldCheck, Phone, Mail, MapPin } from "lucide-react"

const investmentOptions = [
  { value: "none", label: "Ainda não invisto" },
  { value: "2k", label: "Até R$ 2k" },
  { value: "2k-10k", label: "R$ 2k a R$ 10k" },
  { value: "10k+", label: "Escala +R$ 10k" },
]

export function ContactForm() {
  const sectionRef = useRef<HTMLElement>(null)
  const [phone, setPhone] = useState("")

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

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "")
    if (numbers.length <= 2) return numbers
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
    if (numbers.length <= 11) return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(e.target.value))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const data = Object.fromEntries(formData)
    
    // WhatsApp redirect with form data
    const message = `Olá! Gostaria de falar com um especialista sobre a performance do meu site.\n\nNome: ${data.name}\nEmail: ${data.email}\nTelefone: ${phone}\nInvestimento em tráfego: ${data.investment}`
    const whatsappUrl = `https://wa.me/5598985066966?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section
      ref={sectionRef}
      id="triagem"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Bubbles */}
      <div className="bubble w-52 h-52 -top-20 -right-20 animate-float opacity-20" />
      <div className="bubble w-36 h-36 bottom-20 -left-10 animate-swing opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="reveal opacity-0 space-y-4">
              <p className="text-primary font-semibold uppercase tracking-wider text-sm">
                Triagem Técnica
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
                Entre em <span className="gradient-text">Contato</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Preencha o formulário para falar com um especialista. 
                Vamos analisar sua situação atual e mostrar como podemos aumentar suas conversões.
              </p>
            </div>

            <div className="reveal opacity-0 space-y-4" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Localização</p>
                  <p className="text-foreground font-medium">São Paulo, Brasil</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium">contato@moduloweb.com.br</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">WhatsApp</p>
                  <p className="text-foreground font-medium">+55 (11) 99999-9999</p>
                </div>
              </div>
            </div>

            {/* Guarantee Badge */}
            <div className="reveal opacity-0 inline-flex items-center gap-3 bg-linear-to-r from-primary/10 to-accent/10 rounded-xl p-4 border border-primary/20" style={{ animationDelay: "0.4s" }}>
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-primary to-accent flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Garantia de Performance</p>
                <p className="text-xs text-muted-foreground">Lighthouse 90+ ou trabalhamos de graça</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="reveal opacity-0" style={{ animationDelay: "0.2s" }}>
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-6 sm:p-8 border border-border space-y-6"
            >
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">Nome Completo</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Seu nome"
                  required
                  className="bg-secondary border-border focus:border-primary h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">Email Corporativo</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  required
                  className="bg-secondary border-border focus:border-primary h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground">WhatsApp</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  value={phone}
                  onChange={handlePhoneChange}
                  required
                  className="bg-secondary border-border focus:border-primary h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="investment" className="text-foreground">Investimento em Tráfego</Label>
                <Select name="investment" required>
                  <SelectTrigger className="bg-secondary border-border focus:border-primary h-12">
                    <SelectValue placeholder="Selecione uma opção" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    {investmentOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-linear-to-r from-primary to-accent hover:opacity-90 transition-all text-primary-foreground font-bold py-6 text-base rounded-xl animate-pulse-glow"
              >
                FALAR COM ESPECIALISTA NO WHATSAPP
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                Seus dados estão seguros. Não compartilhamos informações com terceiros.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
