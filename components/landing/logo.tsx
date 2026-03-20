import Image from "next/image"
import Link from "next/link"
import logoIcon from "@/app/assets/logoIcon.png"

interface LogoProps {
  className?: string
  iconSize?: number
  showTechnology?: boolean
}

export function Logo({ className = "", iconSize = 40, showTechnology = true }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-3 ${className}`}>
      <Image 
        src={logoIcon} 
        alt="Módulo Web Logo" 
        width={iconSize} 
        height={iconSize} 
        className="opacity-90 transition-opacity"
        priority
      />
      <div className="flex flex-col items-start leading-tight">
        <span className="font-bold text-xl sm:text-2xl text-foreground tracking-tight">
          Módulo<span className="gradient-text">Web</span>
        </span>
        {showTechnology && (
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground/60">
            Technology
          </span>
        )}
      </div>
    </Link>
  )
}
