import type { Metadata } from "next"
import WebTasarimClientPage from "./WebTasarimClientPage"

export const metadata: Metadata = {
  title: "Web Tasarım Hizmetleri - Modern ve Responsive Web Siteleri | Oniva",
  description:
    "Profesyonel web tasarım hizmetleri ile modern, responsive ve SEO uyumlu web siteleri. Kurumsal web tasarım, e-ticaret sitesi ve kişisel web sayfaları için Oniva'ya güvenin.",
  keywords: [
    "web tasarım",
    "responsive web tasarım",
    "kurumsal web sitesi",
    "modern web tasarım",
    "web tasarım İstanbul",
    "SEO uyumlu web tasarım",
  ],
  openGraph: {
    title: "Web Tasarım Hizmetleri - Modern ve Responsive Web Siteleri",
    description: "Profesyonel web tasarım hizmetleri ile işletmenizi dijital dünyada öne çıkarın.",
    url: "https://oniva.com.tr/hizmetlerimiz/web-tasarim",
  },
}

export default function WebTasarimPage() {
  return <WebTasarimClientPage />
}
