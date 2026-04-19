import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CookieBanner from '@/components/layout/CookieBanner'
import MobileBottomNav from '@/components/layout/MobileBottomNav'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://vulkanspiele-casino-pl.pl'),
  title: {
    default: 'VulkanSpiele Casino PL — Automaty, Live Casino & Zakłady Sportowe',
    template: '%s | VulkanSpiele PL',
  },
  description: 'Zagraj w najlepsze automaty online, kasyno na żywo i obstaw zakłady sportowe w VulkanSpiele. Bonus powitalny do 2500€ + 350 darmowych spinów.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    siteName: 'VulkanSpiele PL',
    locale: 'pl_PL',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={inter.variable}>
      <head>
        <meta name="google-site-verification" content="pHUu9ASMrURLfschf-Hpz-2J30ylTXtvg4frOx3NQRE" />
      </head>
      <body className="bg-bgDark text-white antialiased font-sans min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <Footer />
        <CookieBanner />
        <MobileBottomNav />
      </body>
    </html>
  )
}
