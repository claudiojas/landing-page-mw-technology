"use client"

import { motion } from "framer-motion"
import { Gauge, Zap, ShieldCheck, ArrowUpRight, Globe, MousePointer2 } from "lucide-react"

export function PerformanceMockup() {
  return (
    <div className="relative w-full max-w-[500px] mx-auto lg:ml-auto">
      {/* Decorative Glow Background */}
      <div className="absolute -inset-4 bg-linear-to-r from-primary/20 to-accent/20 blur-3xl rounded-full opacity-50" />
      
      {/* Main Browser Window Mockup */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative bg-card/60 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl overflow-hidden glass-card max-h-[70vh] sm:max-h-none"
      >
        {/* Browser Header */}
        <div className="bg-muted/50 px-4 py-3 border-b border-border/50 flex items-center justify-between">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-background/50 rounded-md text-[10px] text-muted-foreground font-mono w-1/2">
            <Globe className="w-3 h-3" />
            moduloweb.com.br
          </div>
          <div className="w-10" /> {/* Spacer */}
        </div>

        {/* Browser Content */}
        <div className="p-6 space-y-6">
          {/* Lighthouse Score Circle */}
          <div className="flex flex-col items-center justify-center py-4 relative">
             <motion.div 
               initial={{ scale: 0.8, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ delay: 0.5, duration: 0.5 }}
               className="relative w-32 h-32 flex items-center justify-center"
             >
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="58"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    className="text-muted/20"
                  />
                  <motion.circle
                    cx="64"
                    cy="64"
                    r="58"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={364.4}
                    initial={{ strokeDashoffset: 364.4 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
                    className="text-green-500"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-black text-foreground">100</span>
                  <span className="text-[8px] uppercase tracking-widest font-bold text-green-500">Performance</span>
                </div>
             </motion.div>
             
             {/* Labels under score */}
             <div className="grid grid-cols-3 gap-4 mt-6 w-full">
                <div className="flex flex-col items-center">
                   <div className="w-2 h-2 rounded-full bg-green-500 mb-1" />
                   <span className="text-[10px] font-bold">Acessibilidade</span>
                   <span className="text-[9px] text-muted-foreground font-mono">100</span>
                </div>
                <div className="flex flex-col items-center">
                   <div className="w-2 h-2 rounded-full bg-green-500 mb-1" />
                   <span className="text-[10px] font-bold">Best Practices</span>
                   <span className="text-[9px] text-muted-foreground font-mono">100</span>
                </div>
                <div className="flex flex-col items-center">
                   <div className="w-2 h-2 rounded-full bg-green-500 mb-1" />
                   <span className="text-[10px] font-bold">SEO</span>
                   <span className="text-[9px] text-muted-foreground font-mono">100</span>
                </div>
             </div>
          </div>

          {/* Speed Metrics Grid */}
          <div className="grid grid-cols-2 gap-3">
             <motion.div 
               whileHover={{ y: -2 }}
               className="bg-background/40 border border-border/50 p-3 rounded-xl flex items-center gap-3"
             >
                <div className="p-2 rounded-lg bg-primary/10">
                   <Zap className="w-4 h-4 text-primary" />
                </div>
                <div>
                   <p className="text-[10px] text-muted-foreground">FCP</p>
                   <p className="text-xs font-bold font-mono">0.4s</p>
                </div>
             </motion.div>
             <motion.div 
               whileHover={{ y: -2 }}
               className="bg-background/40 border border-border/50 p-3 rounded-xl flex items-center gap-3"
             >
                <div className="p-2 rounded-lg bg-accent/10">
                   <Gauge className="w-4 h-4 text-accent" />
                </div>
                <div>
                   <p className="text-[10px] text-muted-foreground">LCP</p>
                   <p className="text-xs font-bold font-mono">0.6s</p>
                </div>
             </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Floating Speed Badge Overlay */}
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute -right-6 top-1/2 -translate-y-1/2 bg-linear-to-br from-primary to-accent p-4 rounded-2xl shadow-xl text-primary-foreground hidden sm:block"
      >
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-xl">
             <ArrowUpRight className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider opacity-80">Conversão</p>
            <p className="text-xl font-black">+42%</p>
          </div>
        </div>
      </motion.div>

      {/* Mouse Cursor Interaction Hint */}
      <motion.div
        animate={{ 
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-10 left-1/4 pointer-events-none opacity-40"
      >
        <MousePointer2 className="w-6 h-6 text-primary fill-primary" />
      </motion.div>
    </div>
  )
}
