"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const handleClick = () => {
    window.open(
      "https://wa.me/5598985066966?text=Olá! Vim através da Landing Page e gostaria de agendar meu Diagnóstico de Performance.",
      "_blank"
    )
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg animate-pulse-glow transition-colors"
      aria-label="Contato via WhatsApp"
      style={{ 
        boxShadow: "0 0 20px rgba(34, 197, 94, 0.5)",
        animation: "pulse-glow 2s ease-in-out infinite"
      }}
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </button>
  )
}
