"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "./logo"

const navLinks = [
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#especialista", label: "Especialista" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#faq", label: "FAQ" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Logo iconSize={36} />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-linear-to-r from-primary to-accent hover:opacity-90 transition-opacity text-primary-foreground font-semibold px-6 rounded-full"
            >
              <Link 
                href="https://wa.me/5598985066966?text=Olá! Gostaria de falar com um especialista sobre a performance do meu site."
                target="_blank"
              >
                Falar com Especialista
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="bg-linear-to-r from-primary to-accent hover:opacity-90 transition-opacity text-primary-foreground font-semibold rounded-full mt-2"
              >
                <Link href="https://wa.me/5598985066966?text=Olá! Gostaria de falar com um especialista sobre a performance do meu site." onClick={() => setIsMenuOpen(false)} target="_blank">
                  Falar com Especialista
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
