import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Check, ArrowRight, Database, Shield, Cog, Cloud } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Web Yazılım Geliştirme Hizmetleri - Özel Yazılım Çözümleri | Oniva",
  description:
    "Profesyonel web yazılım geliştirme hizmetleri. E-ticaret sistemleri, kurumsal web uygulamaları, API entegrasyonları ve özel yazılım çözümleri için Oniva'ya güvenin.",
  keywords: [
    "web yazılım",
    "yazılım geliştirme",
    "e-ticaret sistemi",
    "kurumsal yazılım",
    "API geliştirme",
    "özel yazılım",
  ],
  openGraph: {
    title: "Web Yazılım Geliştirme Hizmetleri - Özel Yazılım Çözümleri",
    description: "İhtiyaçlarınıza özel web yazılım çözümleri ile işletmenizi dijitalleştirin.",
    url: "https://oniva.com.tr/hizmetlerimiz/web-yazilim",
  },
}

export default function WebYazilimPage() {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "E-Ticaret Sistemleri",
      description: "Modern ve güvenli online satış platformları",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Kurumsal Web Uygulamaları",
      description: "İş süreçlerinizi optimize eden özel yazılımlar",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "API Entegrasyonları",
      description: "Farklı sistemleri birbirine bağlayan güvenli API'ler",
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Bulut Tabanlı Çözümler",
      description: "Ölçeklenebilir ve güvenli bulut uygulamaları",
    },
  ]

  const technologies = [
    { name: "React.js", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "PHP", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-orange-100 text-orange-700">Web Yazılım Geliştirme</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Özel{" "}
                <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                  Yazılım
                </span>{" "}
                Çözümleri
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                İşletmenizin ihtiyaçlarına özel web yazılımları geliştiriyoruz. E-ticaret sistemlerinden kurumsal
                uygulamalara kadar geniş yelpazede profesyonel çözümler sunuyoruz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="btn-hover-glow bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                >
                  Proje Danışmanlığı
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="btn-scale-glow border-slate-300 hover:bg-slate-50 bg-transparent"
                >
                  Teknolojilerimiz
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl p-8">
                <div className="w-full h-full bg-white rounded-2xl shadow-lg flex items-center justify-center">
                  <Code className="h-24 w-24 text-orange-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Yazılım Geliştirme Hizmetlerimiz</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Modern teknolojiler kullanarak güvenli, ölçeklenebilir ve performanslı yazılım çözümleri geliştiriyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 bg-white shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Kullandığımız Teknolojiler</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              En güncel ve güvenilir teknolojilerle projelerinizi hayata geçiriyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <Card key={index} className="border-0 bg-white shadow-lg">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{tech.name}</h3>
                  <Badge variant="secondary" className="text-xs">
                    {tech.category}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Neden Oniva Web Yazılım?</h2>
              <div className="space-y-4">
                {[
                  "Güvenli ve ölçeklenebilir kod yapısı",
                  "Modern teknolojiler ve best practices",
                  "Kapsamlı test süreçleri",
                  "Sürekli destek ve bakım hizmetleri",
                  "Hızlı geliştirme süreci",
                  "Şeffaf proje yönetimi",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl p-8">
                <div className="w-full h-full bg-white rounded-2xl shadow-lg flex items-center justify-center">
                  <Cog className="h-24 w-24 text-orange-500 animate-spin" style={{ animationDuration: "10s" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-600">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Yazılım Projenizi Hayata Geçirelim</h2>
            <p className="text-xl text-white/90 mb-8">
              Özel ihtiyaçlarınıza uygun yazılım çözümleri için uzman ekibimizle görüşün. Ücretsiz proje analizi ve
              teklif alın.
            </p>
            <Button size="lg" className="btn-pulse bg-white text-slate-900 hover:bg-slate-100">
              Proje Başlat
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
