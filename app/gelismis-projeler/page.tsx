import { ArrowRight, Code, Rocket, Cpu, Database, Cloud, Layers, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"
import { Footer } from "@/components/layout/footer"

export const metadata: Metadata = {
  title: "Gelişmiş Projeler - Oniva",
  description:
    "Mükemmel fikirlerinizi hayata geçirecek yenilikçi teknolojiler ve gelişmiş yazılım çözümleri. Web uygulamaları, API geliştirme ve özel yazılım projeleri.",
  keywords: [
    "gelişmiş projeler",
    "özel yazılım",
    "web uygulaması",
    "API geliştirme",
    "yazılım çözümleri",
    "teknoloji projeleri",
  ],
}

export default function GelismisProjelerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <a href="/" className="transform hover:scale-105 transition-transform duration-300">
                <img src="/oniva-logo.png" alt="Oniva Logo" className="h-10 w-auto" />
              </a>
              <div className="hidden sm:flex items-center space-x-2 text-slate-600">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:08508404411" className="font-medium hover:text-orange-500 transition-colors duration-300">
                  0850 840 4411
                </a>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-1">
              {[
                { href: "/", label: "Anasayfa" },
                { href: "/hakkimizda", label: "Bizi Tanıyın" },
                { href: "/hizmetlerimiz", label: "Hizmetlerimiz" },
                { href: "/referanslarimiz", label: "Referanslarımız" },
                { href: "/iletisim", label: "Bize Ulaşın" },
              ].map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2 font-medium text-slate-600 transition-all duration-300 hover:text-slate-900 rounded-lg hover:bg-slate-50 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 h-0.5 bg-orange-500 transition-all duration-300 transform -translate-x-1/2 w-0 group-hover:w-8" />
                </a>
              ))}
            </nav>

            <Button
              variant="ghost"
              className="md:hidden hover:bg-orange-50 hover:text-orange-500 transition-all duration-300"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-700">
              <Code className="w-4 h-4 mr-2" />
              Gelişmiş Projeler
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Fikirlerinizi{" "}
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">Gerçeğe</span>{" "}
              Dönüştürüyoruz
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              En son teknolojiler ve yenilikçi yaklaşımlarla mükemmel fikirlerinizi hayata geçiriyoruz. Özel yazılım
              çözümleri, web uygulamaları ve kompleks sistemler geliştiriyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/iletisim">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
                >
                  Projenizi Tartışalım
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="/referanslarimiz">
                <Button size="lg" variant="outline" className="border-slate-300 hover:bg-slate-50 bg-transparent">
                  Projelerimizi İnceleyin
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Kullandığımız Teknolojiler</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              En güncel ve güvenilir teknolojilerle projelerinizi hayata geçiriyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Code,
                title: "Modern Frameworks",
                description: "React, Next.js, Vue.js, Angular ile modern web uygulamaları",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Database,
                title: "Veritabanı Yönetimi",
                description: "PostgreSQL, MongoDB, MySQL ile güvenli veri saklama",
                color: "from-green-500 to-green-600",
              },
              {
                icon: Cloud,
                title: "Cloud Çözümleri",
                description: "AWS, Google Cloud, Azure ile ölçeklenebilir altyapı",
                color: "from-purple-500 to-purple-600",
              },
              {
                icon: Cpu,
                title: "Backend Geliştirme",
                description: "Node.js, Python, PHP ile güçlü sunucu tarafı çözümleri",
                color: "from-orange-500 to-orange-600",
              },
            ].map((tech, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <tech.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{tech.title}</h3>
                  <p className="text-slate-600 text-sm">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Gelişmiş Proje Hizmetlerimiz</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Kompleks ihtiyaçlarınıza özel tasarlanmış profesyonel çözümler sunuyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Rocket,
                title: "Web Uygulamaları",
                description: "Dinamik, etkileşimli ve ölçeklenebilir web uygulamaları geliştiriyoruz.",
                features: ["SPA Uygulamaları", "PWA Geliştirme", "Real-time Özellikler"],
              },
              {
                icon: Layers,
                title: "API Geliştirme",
                description: "RESTful ve GraphQL API'ler ile sistemler arası entegrasyon sağlıyoruz.",
                features: ["REST API", "GraphQL", "Mikroservis Mimarisi"],
              },
              {
                icon: Database,
                title: "Veri Yönetimi",
                description: "Büyük veri setlerini yönetmek için optimize edilmiş çözümler üretiyoruz.",
                features: ["Veri Analizi", "Raporlama Sistemleri", "Dashboard Geliştirme"],
              },
              {
                icon: Cloud,
                title: "Cloud Entegrasyonu",
                description: "Bulut tabanlı çözümlerle ölçeklenebilir ve güvenli sistemler kuruyoruz.",
                features: ["AWS Entegrasyonu", "Auto Scaling", "Load Balancing"],
              },
              {
                icon: Zap,
                title: "Performans Optimizasyonu",
                description: "Uygulamalarınızın hızını ve performansını maksimum seviyeye çıkarıyoruz.",
                features: ["Kod Optimizasyonu", "Caching Stratejileri", "CDN Entegrasyonu"],
              },
              {
                icon: Cpu,
                title: "Özel Yazılım",
                description: "İşletmenizin özel ihtiyaçlarına göre tamamen özelleştirilmiş yazılımlar.",
                features: ["ERP Sistemleri", "CRM Çözümleri", "Özel Modüller"],
              },
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-500">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Geliştirme Sürecimiz</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Projelerinizi baştan sona profesyonel bir süreçle yönetiyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Analiz & Planlama",
                description: "Projenizin gereksinimlerini detaylı analiz ediyor ve teknik planlamayı yapıyoruz.",
              },
              {
                step: "02",
                title: "Tasarım & Prototip",
                description: "Kullanıcı deneyimini ön planda tutarak tasarım ve prototip geliştiriyoruz.",
              },
              {
                step: "03",
                title: "Geliştirme & Test",
                description: "En son teknolojilerle kodlama yapıyor ve kapsamlı testler gerçekleştiriyoruz.",
              },
              {
                step: "04",
                title: "Yayınlama & Destek",
                description: "Projenizi yayınlıyor ve sürekli destek ile bakım hizmeti sağlıyoruz.",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{process.title}</h3>
                <p className="text-slate-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Hayalinizdeki Projeyi Gerçekleştirelim</h2>
            <p className="text-xl text-white/90 mb-8">
              Uzman ekibimizle birlikte en karmaşık projelerinizi bile başarıyla hayata geçirebiliriz. Ücretsiz
              konsültasyon için hemen iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/iletisim">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                  Projenizi Tartışalım
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="tel:08508404411">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
                >
                  Hemen Arayın
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
