import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, Code, Smartphone, Zap, ArrowRight, Check } from "lucide-react"

export default function HizmetlerimizPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-orange-100 text-orange-700">Hizmetlerimiz</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
              Dijital{" "}
              <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
                Çözümlerimiz
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Modern teknolojiler ve yaratıcı yaklaşımlarla işletmenizi dijital dünyada öne çıkaracak kapsamlı hizmetler
              sunuyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Web Tasarım */}
            <Card className="group border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mr-4 group-hover:bg-blue-100 transition-colors">
                      <Globe className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-1">Web Tasarım</h3>
                      <p className="text-slate-600">Modern, responsive ve kullanıcı dostu web siteleri</p>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">Responsive (Mobil Uyumlu) Tasarım</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">SEO Optimizasyonu</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">Hızlı Yükleme Süreleri</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">Modern UI/UX Tasarım</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">İçerik Yönetim Sistemi</span>
                    </li>
                  </ul>

                  <a href="/hizmetlerimiz/web-tasarim">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white group-hover:shadow-lg transition-all">
                      Detaylı Bilgi Al <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Web Yazılım */}
            <Card className="group border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mr-4 group-hover:bg-orange-100 transition-colors">
                      <Code className="h-8 w-8 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-1">Web Yazılım</h3>
                      <p className="text-slate-600">Özel ihtiyaçlarınıza yönelik yazılım çözümleri</p>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">E-Ticaret Sistemleri</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">Kurumsal Web Uygulamaları</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">API Entegrasyonları</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">Veritabanı Yönetimi</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">Güvenlik ve Performans</span>
                    </li>
                  </ul>

                  <a href="/hizmetlerimiz/web-yazilim">
                    <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white group-hover:shadow-lg transition-all">
                      Detaylı Bilgi Al <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Mobil Uygulama */}
            <Card className="group border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mr-4 group-hover:bg-green-100 transition-colors">
                      <Smartphone className="h-8 w-8 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-1">Mobil Uygulama</h3>
                      <p className="text-slate-600">iOS ve Android platformları için native uygulamalar</p>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">iOS ve Android Geliştirme</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">Cross-Platform Çözümler</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">App Store Optimizasyonu</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">Push Notification Sistemi</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">Analitik ve Raporlama</span>
                    </li>
                  </ul>

                  <a href="/hizmetlerimiz/mobil-uygulama">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white group-hover:shadow-lg transition-all">
                      Detaylı Bilgi Al <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Dijital Pazarlama */}
            <Card className="group border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mr-4 group-hover:bg-purple-100 transition-colors">
                      <Zap className="h-8 w-8 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-1">Dijital Pazarlama</h3>
                      <p className="text-slate-600">Online görünürlüğünüzü artıran pazarlama stratejileri</p>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">SEO ve SEM Hizmetleri</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">Sosyal Medya Yönetimi</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">Google Ads Kampanyaları</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">İçerik Pazarlama</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">Analitik ve Raporlama</span>
                    </li>
                  </ul>

                  <a href="/hizmetlerimiz/dijital-pazarlama">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white group-hover:shadow-lg transition-all">
                      Detaylı Bilgi Al <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Neden Oniva'yı Seçmelisiniz?</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              20+ yıllık deneyimimiz ve uzman ekibimizle dijital dönüşüm yolculuğunuzda güvenilir partneriniziz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "500+",
                subtitle: "Tamamlanan Proje",
                description: "Başarıyla teslim ettiğimiz projeler",
              },
              {
                title: "98%",
                subtitle: "Müşteri Memnuniyeti",
                description: "Yüksek kalite ve hizmet standardı",
              },
              {
                title: "20+",
                subtitle: "Yıl Deneyim",
                description: "Sektördeki köklü tecrübemiz",
              },
              {
                title: "7/24",
                subtitle: "Destek Hizmeti",
                description: "Kesintisiz teknik destek",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-slate-900 mb-2">{stat.title}</div>
                <div className="text-lg font-semibold text-orange-600 mb-2">{stat.subtitle}</div>
                <div className="text-slate-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-blue-600">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Hangi Hizmete İhtiyacınız Var?</h2>
            <p className="text-xl text-white/90 mb-8">
              Uzman ekibimizle birlikte projenizi değerlendirin ve size en uygun çözümü bulalım.
            </p>
            <a href="/iletisim">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                Ücretsiz Konsültasyon Al
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
