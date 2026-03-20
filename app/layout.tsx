import type { Metadata, Viewport } from 'next'
import { Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-space-grotesk',
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'Módulo Web Technology',
  description: 'Desenvolvemos Landing Pages de Engenharia de Elite que carregam em menos de 1 segundo. Design premium e código otimizado (Next.js) para garantir que cada clique pago vire venda.',
  generator: 'Módulo Web Technology',
  keywords: ['landing page', 'conversão', 'next.js', 'performance', 'tráfego pago', 'lighthouse'],
  icons: {
    icon: '/icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0D0D0D',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
