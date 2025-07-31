import { ArrowRight, Code, Smartphone, Globe, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"
import { Footer } from "@/components/layout/footer"

export const metadata: Metadata = {
  title: "Oniva - Profesyonel Web Tasarım, Yazılım ve Dijital Pazarlama Hizmetleri",
  description:
    "İstanbul merkezli Oniva ile web tasarım, web yazılım, mobil uygulama geliştirme ve dijital pazarlama hizmetlerinde profesyonel çözümler. 500+ başarılı proje deneyimi.",
  keywords: [
    "web tasarım İstanbul",
    "web yazılım",
    "mobil uygulama geliştirme",
    "dijital pazarlama",
    "SEO hizmetleri",
    "e-ticaret sitesi",
  ],
  openGraph: {
    title: "Oniva - Profesyonel Dijital Çözümler",
    description:
      "Web tasarım, yazılım geliştirme ve dijital pazarlama hizmetleri ile işletmenizi dijital dünyada öne çıkarın.",
    url: "https://oniva.com.tr",
    images: ["/oniva-logo.png"],
  },
}

export default function HomePage() {
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">
                  🚀 Profesyonel Dijital Çözümler
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Biliyoruz,{" "}
                  <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
                    Profesyonel
                  </span>{" "}
                  bir Hizmet arıyorsunuz!
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Kurumsal Web Tasarımları, Web Yazılımları, Mobil Uygulama Geliştirme Hizmeti (iOS ve Android
                  Uygulamaları) ve daha fazlası için doğru adrestesiniz.
                </p>
                <p className="text-lg text-slate-500">Hemen şimdi profesyonel hizmet almaya başlayın.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/iletisim">
                  <Button
                    size="lg"
                    className="btn-hover-glow btn-gradient-shift bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white w-full"
                  >
                    İletişime Geçin
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <a href="/hizmetlerimiz">
                  <Button
                    size="lg"
                    variant="outline"
                    className="btn-scale-glow border-slate-300 hover:bg-slate-50 bg-transparent hover:border-orange-500 w-full"
                  >
                    Hizmetlerimize Göz Atın
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">500+</div>
                  <div className="text-sm text-slate-600">Tamamlanan Proje</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">98%</div>
                  <div className="text-sm text-slate-600">Müşteri Memnuniyeti</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">20+</div>
                  <div className="text-sm text-slate-600">Yıl Deneyim</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <Card className="p-4 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                      <CardContent className="p-0">
                        <div className="aspect-[4/3] bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                          <div className="relative">
                            <Globe className="h-12 w-12 text-white" />
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-3">
                          <h3 className="font-semibold text-slate-900">Web Tasarım</h3>
                          <p className="text-sm text-slate-600">Modern ve responsive</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="p-4 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                      <CardContent className="p-0">
                        <div className="aspect-[4/3] bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                          <div className="relative">
                            <Code className="h-12 w-12 text-white" />
                            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-white rounded-sm flex items-center justify-center">
                              <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-3">
                          <h3 className="font-semibold text-slate-900">Web Yazılım</h3>
                          <p className="text-sm text-slate-600">Özel çözümler</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="space-y-4 pt-8">
                    <Card className="p-4 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                      <CardContent className="p-0">
                        <div className="aspect-[4/3] bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                          <div className="relative">
                            <Smartphone className="h-12 w-12 text-white" />
                            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-white/30 rounded-full"></div>
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white/50 rounded-full"></div>
                          </div>
                        </div>
                        <div className="mt-3">
                          <h3 className="font-semibold text-slate-900">Mobil App</h3>
                          <p className="text-sm text-slate-600">iOS & Android</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="p-4 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                      <CardContent className="p-0">
                        <div className="aspect-[4/3] bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <div className="relative">
                            <Zap className="h-12 w-12 text-white fill-white" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-300 rounded-full animate-pulse"></div>
                          </div>
                        </div>
                        <div className="mt-3">
                          <h3 className="font-semibold text-slate-900">Dijital Pazarlama</h3>
                          <p className="text-sm text-slate-600">SEO & Reklam</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-blue-100 rounded-3xl transform rotate-3 scale-105 opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4">Hizmetlerimiz</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Dijital Dünyanızı Şekillendiriyoruz</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Modern teknolojiler ve yaratıcı çözümlerle işletmenizi dijital dünyada öne çıkarıyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Kurumsal Çözümler</h3>
                <p className="text-slate-600 mb-6">
                  İşletmenizin marka değerini artıracak çözümler ile tanışın. Kurumsal Web Tasarım hizmeti alın.
                </p>
                <a href="/kurumsal-cozumler">
                  <Button
                    variant="ghost"
                    className="btn-ripple text-orange-500 hover:text-orange-600 hover:bg-orange-50"
                  >
                    Detayları Gör <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Gelişmiş Projeler</h3>
                <p className="text-slate-600 mb-6">
                  Mükemmel fikirlerinizi hayata geçirecek yenilikler ve teknolojilere Oniva ile sahip olabilirsiniz.
                </p>
                <a href="/gelismis-projeler">
                  <Button variant="ghost" className="btn-ripple text-blue-500 hover:text-blue-600 hover:bg-blue-50">
                    Detayları Gör <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Profesyonel Destek</h3>
                <p className="text-slate-600 mb-6">
                  Kurumsal Web Tasarımı, Web Yazılımı, Mobil Uygulama Geliştirme, ERP Yazılımları ve daha fazlası.
                </p>
                <a href="/profesyonel-destek">
                  <Button variant="ghost" className="btn-ripple text-green-500 hover:text-green-600 hover:bg-green-50">
                    Detayları Gör <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-blue-600">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Projenizi Hayata Geçirmeye Hazır mısınız?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Uzman ekibimizle birlikte dijital dönüşüm yolculuğunuza başlayın. Ücretsiz konsültasyon için hemen
              iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-hover-glow bg-white text-slate-900 hover:bg-slate-100">
                Ücretsiz Konsültasyon
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="btn-pulse border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
              >
                Portfolyomuzu İnceleyin
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
