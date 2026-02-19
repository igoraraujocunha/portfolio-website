import type { Metadata, Viewport } from 'next'
import { Inter, Fira_Code } from 'next/font/google'
import { LanguageProvider } from '@/hooks/use-language'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
})

export const metadata: Metadata = {
  title: 'Igor de Araujo C. Costa | Computer Scientist & Software Engineer',
  description:
    'Portfolio of Igor — Software Engineer focused on system architecture, scalable solutions, and modern development practices.',
}

export const viewport: Viewport = {
  themeColor: '#0a192f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <LanguageProvider>
      <html className="scroll-smooth">
        <body
          className={`${inter.variable} ${firaCode.variable} font-sans antialiased bg-background text-foreground`}
        >
          {children}
        </body>
      </html>
    </LanguageProvider>
  )
}