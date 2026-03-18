import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Playfair_Display, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700', '800'],
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
  style: ['normal', 'italic'],
  weight: ['700', '800', '900'],
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-grotesk',
  weight: ['400', '500', '600', '700'],
})

export const viewport: Viewport = {
  themeColor: '#161619',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'SOURAV | Data Scientist • AI Engineer • LiDAR Specialist',
  description: 'Premium portfolio of SOURAV - Data Scientist, AI Engineer, and LiDAR Annotation Specialist. Building intelligent systems and transforming data into actionable insights.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${plusJakarta.variable} ${playfair.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
