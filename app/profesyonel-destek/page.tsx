import { ArrowRight, Users, Headphones, Clock, Shield, Award, CheckCircle, Star, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"
import { Footer } from "@/components/layout/footer"

export const metadata: Metadata = {
  title: "Profesyonel Destek - Oniva",
  description:
    "7/24 profesyonel destek hizmeti ile yanınızdayız. Kurumsal web tasarımı, web yazılımı, mobil uygulama geliştirme ve ERP yazılımları için uzman destek.",
  keywords: [
    "profesyonel destek",
    "teknik destek",
    "7/24 destek",
    "uzman destek",
    "müşteri hizmetleri",
    "teknik yardım",
  ],
}

export default function ProfesyonelDestekPage() {
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
            <Badge className="mb-6 bg-green-100 text-green-700">
              <Users className="w-4 h-4 mr-2" />
              Profesyonel Destek
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Her Zaman{" "}
              <span className="bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
                Yanınızdayız
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Kurumsal Web Tasarımı, Web Yazılımı, Mobil Uygulama Geliştirme ve ERP Yazılımları için 7/24 profesyonel
              destek hizmeti sunuyoruz. Uzman ekibimizle her türlü teknik sorununuza çözüm buluyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/iletisim">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
                >
                  Destek Alın
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="tel:08508404411">
                <Button size="lg" variant="outline" className="border-slate-300 hover:bg-slate-50 bg-transparent">
                  Hemen Arayın
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Support Features */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Destek Hizmetlerimiz</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Kapsamlı destek hizmetlerimizle projelerinizin kesintisiz çalışmasını sağlıyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "7/24 Destek",
                description: "Haftanın 7 günü, günün 24 saati kesintisiz teknik destek hizmeti sunuyoruz.",
                color: "from-green-500 to-green-600",
              },
              {
                icon: Headphones,
                title: "Uzman Ekip",
                description: "Alanında uzman teknik personelimiz ile hızlı ve etkili çözümler üretiyoruz.",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Shield,
                title: "Güvenlik Desteği",
                description: "Web sitenizin güvenliğini sürekli izliyor ve gerekli güncellemeleri yapıyoruz.",
                color: "from-purple-500 to-purple-600",
              },
              {
                icon: MessageCircle,
                title: "Hızlı Yanıt",
                description: "Tüm destek taleplerinize en geç 2 saat içinde yanıt veriyoruz.",
                color: "from-orange-500 to-orange-600",
              },
              {
                icon: Award,
                title: "Kalite Garantisi",
                description: "Tüm hizmetlerimizde %100 müşteri memnuniyeti garantisi veriyoruz.",
                color: "from-red-500 to-red-600",
              },
              {
                icon: Star,
                title: "Premium Hizmet",
                description: "Kurumsal müşterilerimize özel premium destek paketleri sunuyoruz.",
                color: "from-yellow-500 to-yellow-600",
              },
            ].map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}
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

      {/* Services We Support */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Destek Verdiğimiz Hizmetler</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Tüm dijital hizmetleriniz için kapsamlı destek sağlıyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                {[
                  {
                    title: "Kurumsal Web Tasarımı",
                    description: "Web sitenizin bakımı, güncellemeleri ve performans optimizasyonu",
                  },
                  {
                    title: "Web Yazılımı",
                    description: "Özel yazılımlarınızın bakımı, hata giderme ve yeni özellik ekleme",
                  },
                  {
                    title: "Mobil Uygulama Geliştirme",
                    description: "iOS ve Android uygulamalarınızın güncellemeleri ve bakımı",
                  },
                  {
                    title: "ERP Yazılımları",
                    description: "Kurumsal kaynak planlama sistemlerinizin desteği ve optimizasyonu",
                  },
                  {
                    title: "E-ticaret Siteleri",
                    description: "Online mağazanızın kesintisiz çalışması için teknik destek",
                  },
                  {
                    title: "Dijital Pazarlama",
                    description: "SEO, SEM ve sosyal medya kampanyalarınızın yönetimi",
                  },
                ].map((service, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-1">{service.title}</h3>
                      <p className="text-slate-600">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl p-8">
                <div className="h-full bg-white rounded-2xl shadow-2xl flex items-center justify-center">
                  <div className="text-center">
                    <Users className="h-24 w-24 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Profesyonel Ekip</h3>
                    <p className="text-slate-600">Her zaman yanınızda</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Packages */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Destek Paketlerimiz</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">İhtiyaçlarınıza uygun destek paketini seçin.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Temel Destek",
                price: "₺299",
                period: "/ay",
                description: "Küçük işletmeler için ideal",
                features: [
                  "İş saatleri destek (09:00-18:00)",
                  "E-mail destek",
                  "Temel bakım hizmetleri",
                  "Aylık performans raporu",
                  "Güvenlik güncellemeleri",
                ],
                color: "from-blue-500 to-blue-600",
                popular: false,
              },
              {
                name: "Profesyonel Destek",
                price: "₺599",
                period: "/ay",
                description: "Orta ölçekli işletmeler için",
                features: [
                  "7/24 destek hizmeti",
                  "Telefon + E-mail destek",
                  "Kapsamlı bakım hizmetleri",
                  "Haftalık performans raporu",
                  "Öncelikli destek",
                  "Ücretsiz küçük değişiklikler",
                ],
                color: "from-green-500 to-green-600",
                popular: true,
              },
              {
                name: "Kurumsal Destek",
                price: "₺999",
                period: "/ay",
                description: "Büyük kurumlar için",
                features: [
                  "7/24 premium destek",
                  "Özel hesap yöneticisi",
                  "Proaktif izleme",
                  "Günlük performans raporu",
                  "Acil müdahale garantisi",
                  "Sınırsız değişiklik hakkı",
                  "Aylık strateji toplantısı",
                ],
                color: "from-purple-500 to-purple-600",
                popular: false,
              },
            ].map((pkg, index) => (
              <Card
                key={index}
                className={`relative ${pkg.popular ? "ring-2 ring-green-500 scale-105" : ""} hover:shadow-xl transition-all duration-300 border-0 bg-white`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-green-500 text-white">En Popüler</Badge>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                    <p className="text-slate-600 mb-4">{pkg.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-slate-900">{pkg.price}</span>
                      <span className="text-slate-600 ml-1">{pkg.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="/iletisim">
                    <Button className={`w-full bg-gradient-to-r ${pkg.color} hover:opacity-90 text-white`}>
                      Paketi Seç
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-green-600">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Profesyonel Destek Almaya Başlayın</h2>
            <p className="text-xl text-white/90 mb-8">
              Uzman ekibimizle birlikte dijital varlıklarınızın kesintisiz çalışmasını sağlayın. Hemen iletişime geçin
              ve size en uygun destek paketini belirleyelim.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/iletisim">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                  Destek Alın
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
