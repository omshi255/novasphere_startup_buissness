import type { Metadata, Viewport } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'NovaSphere Digital | Code. Build. Ship. Repeat.',
  description:
    'NovaSphere Digital is a premium tech agency specializing in Web Development, App Development, and Software Testing. From web apps to mobile apps — we design, develop, test, and deliver.',
  keywords: [
    'web development',
    'app development',
    'software testing',
    'React',
    'Next.js',
    'Flutter',
    'React Native',
    'Node.js',
  ],
  openGraph: {
    title: 'NovaSphere Digital | Code. Build. Ship. Repeat.',
    description:
      'Premium tech agency specializing in Web Development, App Development, and Software Testing.',
    type: 'website',
    locale: 'en_US',
  },
}

export const viewport: Viewport = {
  themeColor: '#050508',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased noise-overlay grid-bg">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
