import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Smartphone, Check, ArrowRight, Apple, Play, Zap, Users } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mobil Uygulama Geliştirme - iOS ve Android Uygulamaları | Oniva",
  description:
    "Profesyonel mobil uygulama geliştirme hizmetleri. iOS ve Android platformları için native ve cross-platform mobil uygulamalar. App Store optimizasyonu dahil.",
  keywords: ["mobil uygulama", "iOS uygulama", "Android uygulama", "mobil app geliştirme", "React Native", "Flutter"],
  openGraph: {
    title: "Mobil Uygulama Geliştirme - iOS ve Android Uygulamaları",
    description: "iOS ve Android platformları için profesyonel mobil uygulama geliştirme hizmetleri.",
    url: "https://oniva.com.tr/hizmetlerimiz/mobil-uygulama",
  },
}

export default function MobilUygulamaPage() {
  const platforms = [
    {
      icon: <Apple className="h-12 w-12" />,
      title: "iOS Uygulamaları",
      description: "iPhone ve iPad için native iOS uygulamaları",
      features: ["Swift/Objective-C", "App Store Yayını", "iOS Design Guidelines", "Push Notifications"],
    },
    {
      icon: <Play className="h-12 w-12" />,
      title: "Android Uygulamaları",
      description: "Android cihazlar için native uygulamalar",
      features: ["Java/Kotlin", "Google Play Store", "Material Design", "Firebase Entegrasyonu"],
    },
  ]

  const appTypes = [
    {
      title: "E-Ticaret Uygulamaları",
      description: "Online satış ve alışveriş uygulamaları",
      icon: "🛒",
    },
    {
      title: "Kurumsal Uygulamalar",
      description: "İş süreçlerini optimize eden kurumsal çözümler",
      icon: "🏢",
    },
    {
      title: "Sosyal Medya Uygulamaları",
      description: "Sosyal etkileşim ve paylaşım platformları",
      icon: "📱",
    },
    {
      title: "Oyun Uygulamaları",
      description: "Eğlenceli ve bağımlılık yapan mobil oyunlar",
      icon: "🎮",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-green-100 text-green-700">Mobil Uygulama Geliştirme</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                iOS ve{" "}
                <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                  Android
                </span>{" "}
                Uygulamaları
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Modern mobil uygulama geliştirme teknolojileri ile iOS ve Android platformları için kullanıcı dostu,
                performanslı ve güvenli mobil uygulamalar geliştiriyoruz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="btn-hover-glow bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
                >
                  Uygulama Geliştir
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="btn-scale-glow border-slate-300 hover:bg-slate-50 bg-transparent"
                >
                  Portfolio Görüntüle
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-8">
                <div className="w-full h-full bg-white rounded-2xl shadow-lg flex items-center justify-center">
                  <Smartphone className="h-24 w-24 text-green-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Desteklediğimiz Platformlar</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              iOS ve Android platformları için native ve cross-platform çözümler sunuyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {platforms.map((platform, index) => (
              <Card key={index} className="border-0 bg-white shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white mr-4">
                      {platform.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{platform.title}</h3>
                      <p className="text-slate-600">{platform.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {platform.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-3" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* App Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Uygulama Türleri</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Farklı sektörler ve ihtiyaçlar için çeşitli mobil uygulama türleri geliştiriyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {appTypes.map((type, index) => (
              <Card key={index} className="border-0 bg-white shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{type.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{type.title}</h3>
                  <p className="text-slate-600">{type.description}</p>
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
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Mobil Uygulama Özelliklerimiz</h2>
              <div className="space-y-6">
                {[
                  {
                    icon: <Zap className="h-6 w-6" />,
                    title: "Yüksek Performans",
                    description: "Optimize edilmiş kod yapısı ile hızlı ve akıcı kullanım deneyimi",
                  },
                  {
                    icon: <Users className="h-6 w-6" />,
                    title: "Kullanıcı Dostu Arayüz",
                    description: "Sezgisel ve modern tasarım ile mükemmel kullanıcı deneyimi",
                  },
                  {
                    icon: <Smartphone className="h-6 w-6" />,
                    title: "Cross-Platform Uyumluluk",
                    description: "Tek kod tabanı ile hem iOS hem Android platformlarında çalışma",
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                      <p className="text-slate-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-8">
                <div className="w-full h-full bg-white rounded-2xl shadow-lg flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="w-16 h-24 bg-gradient-to-b from-green-500 to-green-600 rounded-lg"></div>
                    <div className="w-16 h-24 bg-gradient-to-b from-emerald-500 to-emerald-600 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-emerald-600">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Mobil Uygulamanızı Geliştirmeye Başlayalım
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Fikirlerinizi mobil uygulamaya dönüştürmek için uzman ekibimizle görüşün. iOS ve Android için profesyonel
              çözümler sunuyoruz.
            </p>
            <Button size="lg" className="btn-pulse bg-white text-slate-900 hover:bg-slate-100">
              Uygulama Geliştir
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
