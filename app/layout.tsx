import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CookieConsent } from "@/components/cookie-consent"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Oniva - Profesyonel Web Tasarım ve Yazılım Hizmetleri",
    template: "%s | Oniva",
  },
  description:
    "Oniva ile profesyonel web tasarım, web yazılım, mobil uygulama ve dijital pazarlama hizmetleri. Modern, responsive ve SEO uyumlu çözümler.",
  keywords: ["web tasarım", "web yazılım", "mobil uygulama", "dijital pazarlama", "SEO", "responsive tasarım"],
  authors: [{ name: "Oniva" }],
  creator: "Oniva",
  publisher: "Oniva",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://oniva.com.tr"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://oniva.com.tr",
    title: "Oniva - Profesyonel Web Tasarım ve Yazılım Hizmetleri",
    description:
      "Oniva ile profesyonel web tasarım, web yazılım, mobil uygulama ve dijital pazarlama hizmetleri. Modern, responsive ve SEO uyumlu çözümler.",
    siteName: "Oniva",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oniva - Profesyonel Web Tasarım ve Yazılım Hizmetleri",
    description:
      "Oniva ile profesyonel web tasarım, web yazılım, mobil uygulama ve dijital pazarlama hizmetleri. Modern, responsive ve SEO uyumlu çözümler.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FXCV8VPXDP"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FXCV8VPXDP');
            `,
          }}
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Oniva",
              url: "https://oniva.com.tr",
              logo: "https://oniva.com.tr/oniva-logo.png",
              description: "Profesyonel web tasarım, web yazılım, mobil uygulama ve dijital pazarlama hizmetleri",
              address: {
                "@type": "PostalAddress",
                addressCountry: "TR",
                addressLocality: "İstanbul",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+90-XXX-XXX-XXXX",
                contactType: "customer service",
              },
              sameAs: [
                "https://www.linkedin.com/company/oniva",
                "https://twitter.com/oniva",
                "https://www.instagram.com/oniva",
              ],
              services: ["Web Tasarım", "Web Yazılım", "Mobil Uygulama", "Dijital Pazarlama"],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}
