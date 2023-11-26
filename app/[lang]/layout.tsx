import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { i18n } from '@/config/i18n'

const inter = Inter({ subsets: ['latin'] })

export const generateStaticParams = () => {
  return i18n.locales.map((locale) => ({
    lang: locale,
  }))
}

export const metadata: Metadata = {
  title: 'i18n',
  description: 'How to do i18n in Next.js 13+ within app directory',
}

export default function RootLayout({ children, params }: { children: React.ReactNode; params: { lang: string } }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
