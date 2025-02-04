import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://molus.app'),
  title: {
    default: 'Molus - Building the Next 1,000 AI Startups in Michigan',
    template: '%s | Molus',
  },
  description: 'Molus is a Michigan-based AI product studio helping non-technical founders build enterprise-grade applications. Access our exclusive community, proven AI workflows, and rapid development tools to turn your startup idea into reality.',
  applicationName: 'Molus',
  authors: [{ name: 'Molus Team' }],
  generator: 'Next.js',
  keywords: [
    'AI product studio',
    'Michigan startups',
    'startup development',
    'no-code AI tools',
    'enterprise applications',
    'technical advisor',
    'founder community',
    'rapid product development',
    'AI workflows',
    'startup ecosystem',
    'product validation',
    'Michigan tech',
    'AI development',
    'startup resources',
    'founder tools'
  ],
  category: 'Technology',
  openGraph: {
    title: 'Molus - AI Product Studio for the Next 1,000 Michigan Startups',
    description: 'Join Michigan\'s exclusive community of founders building the future with AI. Access proven workflows, rapid development tools, and expert guidance to transform your startup idea into an enterprise-grade application.',
    url: 'https://molus.app',
    siteName: 'Molus',
    images: [
      {
        url: '/images/Molus_Logo_Favicon_Yellow.png',
        width: 1200,
        height: 630,
        alt: 'Molus - Michigan\'s Premier AI Product Studio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'notranslate': true,
    },
  },
  alternates: {
    canonical: 'https://molus.app',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-title': 'Molus',
    'format-detection': 'telephone=no',
    'msapplication-TileColor': '#000000',
    'theme-color': '#000000',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
}

