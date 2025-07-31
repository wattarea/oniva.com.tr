import { ArrowRight, Globe, CheckCircle, Star, Users, Award, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"
import { Footer } from "@/components/layout/footer"

export const metadata: Metadata = {
  title: "Kurumsal Çözümler - Oniva",
  description:
    "İşletmenizin marka değerini artıracak kurumsal web tasarım ve dijital çözümler. Profesyonel hizmet garantisi ile kurumsal kimliğinizi güçlendirin.",
  keywords: [
    "kurumsal web tasarım",
    "kurumsal çözümler",
    "marka kimliği",
    "profesyonel web sitesi",
    "kurumsal hizmetler",
  ],
}

export default function KurumsalCozumlerPage() {
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
            <Badge className="mb-6 bg-orange-100 text-orange-700">
              <Globe className="w-4 h-4 mr-2" />
              Kurumsal Çözümler
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              İşletmenizin{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Marka Değerini
              </span>{" "}
              Artırıyoruz
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Kurumsal kimliğinizi dijital dünyada güçlendiren profesyonel web tasarım ve dijital çözümlerle işletmenizi
              rakiplerinizden öne çıkarın. 20+ yıllık deneyimimizle marka değerinizi artırıyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/iletisim">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                >
                  Ücretsiz Konsültasyon
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="/referanslarimiz">
                <Button size="lg" variant="outline" className="border-slate-300 hover:bg-slate-50 bg-transparent">
                  Referanslarımızı İnceleyin
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Kurumsal Çözümlerimiz</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              İşletmenizin ihtiyaçlarına özel tasarlanmış profesyonel çözümlerle dijital varlığınızı güçlendirin.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Kurumsal Web Tasarım",
                description: "Marka kimliğinizi yansıtan, profesyonel ve modern web siteleri tasarlıyoruz.",
                color: "from-orange-500 to-orange-600",
              },
              {
                icon: Shield,
                title: "Güvenlik & SSL",
                description: "Web sitenizin güvenliğini en üst seviyede tutarak müşteri güvenini artırıyoruz.",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Zap,
                title: "Hızlı Performans",
                description: "Optimize edilmiş kodlama ile hızlı yüklenen, SEO dostu web siteleri geliştiriyoruz.",
                color: "from-green-500 to-green-600",
              },
              {
                icon: Users,
                title: "Kullanıcı Deneyimi",
                description: "Ziyaretçilerinizin kolayca gezinebileceği, kullanıcı dostu arayüzler tasarlıyoruz.",
                color: "from-purple-500 to-purple-600",
              },
              {
                icon: Award,
                title: "Marka Kimliği",
                description: "Kurumsal kimliğinizi dijital ortamda güçlü bir şekilde yansıtan tasarımlar üretiyoruz.",
                color: "from-red-500 to-red-600",
              },
              {
                icon: Star,
                title: "Premium Destek",
                description: "7/24 teknik destek ve sürekli güncelleme hizmetiyle yanınızdayız.",
                color: "from-yellow-500 to-yellow-600",
              },
            ].map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-orange-100 text-orange-700">Neden Oniva?</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Kurumsal Çözümlerimizin Avantajları
              </h2>
              <div className="space-y-4">
                {[
                  "20+ yıllık sektör deneyimi",
                  "500+ başarılı kurumsal proje",
                  "7/24 teknik destek hizmeti",
                  "SEO optimizasyonu dahil",
                  "Mobil uyumlu responsive tasarım",
                  "Hızlı teslimat garantisi",
                  "Ücretsiz 1 yıl bakım desteği",
                  "Google Analytics entegrasyonu",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <a href="/iletisim">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                  >
                    Hemen Başlayın
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-orange-100 to-blue-100 rounded-3xl p-8">
                <div className="h-full bg-white rounded-2xl shadow-2xl flex items-center justify-center">
                  <div className="text-center">
                    <Globe className="h-24 w-24 text-orange-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Kurumsal Kimlik</h3>
                    <p className="text-slate-600">Profesyonel dijital varlık</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Kurumsal Dijital Dönüşümünüze Başlayın</h2>
            <p className="text-xl text-white/90 mb-8">
              Uzman ekibimizle birlikte işletmenizin dijital kimliğini güçlendirin. Ücretsiz konsültasyon için hemen
              iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/iletisim">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                  Ücretsiz Konsültasyon
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
