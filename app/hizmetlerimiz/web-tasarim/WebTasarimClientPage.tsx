"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, Check, ArrowRight, Palette, Smartphone, Search, Zap } from "lucide-react"

export default function WebTasarimClientPage() {
  const features = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Modern Tasarım",
      description: "Güncel tasarım trendleri ve kullanıcı deneyimi odaklı arayüzler",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Responsive Tasarım",
      description: "Tüm cihazlarda mükemmel görünüm ve kullanım deneyimi",
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "SEO Optimizasyonu",
      description: "Arama motorlarında üst sıralarda yer almak için optimize edilmiş yapı",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Hızlı Yükleme",
      description: "Optimize edilmiş kodlama ile hızlı yüklenen web siteleri",
    },
  ]

  const packages = [
    {
      id: "web-tasarim-temel",
      name: "Temel Paket",
      price: "₺9.000",
      features: [
        "5 Sayfa Web Sitesi",
        "Responsive Tasarım",
        "Temel SEO",
        "İletişim Formu",
        "1 Yıl Hosting",
        "SSL Sertifikası",
      ],
    },
    {
      id: "web-tasarim-profesyonel",
      name: "Profesyonel Paket",
      price: "₺15.000",
      features: [
        "10 Sayfa Web Sitesi",
        "Özel Tasarım",
        "Gelişmiş SEO",
        "İçerik Yönetim Sistemi",
        "Google Analytics",
        "Sosyal Medya Entegrasyonu",
        "1 Yıl Hosting + SSL",
      ],
      popular: true,
    },
    {
      id: "web-tasarim-kurumsal",
      name: "Kurumsal Paket",
      price: "₺20.000",
      features: [
        "Sınırsız Sayfa",
        "Özel Tasarım & Geliştirme",
        "Profesyonel SEO",
        "Çoklu Dil Desteği",
        "Gelişmiş Analitik",
        "Öncelikli Destek",
        "1 Yıl Hosting + SSL",
      ],
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
              <Badge className="bg-blue-100 text-blue-700">Web Tasarım Hizmetleri</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Modern ve{" "}
                <span className="bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">
                  Responsive
                </span>{" "}
                Web Tasarım
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                İşletmenizi dijital dünyada temsil edecek modern, kullanıcı dostu ve SEO uyumlu web siteleri
                tasarlıyoruz. Mobil uyumlu tasarımlarımızla her cihazda mükemmel görünüm sağlıyoruz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="btn-hover-glow bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
                >
                  Ücretsiz Teklif Al
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="btn-scale-glow border-slate-300 hover:bg-slate-50 bg-transparent"
                >
                  Portfolio İncele
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-8">
                <div className="w-full h-full bg-white rounded-2xl shadow-lg flex items-center justify-center">
                  <Globe className="h-24 w-24 text-blue-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Web Tasarım Özelliklerimiz</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Modern web tasarım standartlarına uygun, kullanıcı deneyimi odaklı çözümler sunuyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 bg-white shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Web Tasarım Paketleri</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              İhtiyacınıza uygun web tasarım paketimizi seçin ve dijital varlığınızı güçlendirin.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`border-0 shadow-xl ${pkg.popular ? "ring-2 ring-blue-500 scale-105" : ""}`}>
                <CardContent className="p-8">
                  {pkg.popular && <Badge className="mb-4 bg-blue-500 text-white">En Popüler</Badge>}
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-6">{pkg.price}</div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-3" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${pkg.popular ? "btn-hover-glow bg-blue-500 hover:bg-blue-600 text-white" : "btn-scale-glow"}`}
                    variant={pkg.popular ? "default" : "outline"}
                    onClick={() => (window.location.href = `/paket-sec?paket=${pkg.id}`)}
                  >
                    Paketi Seç
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Website Builder Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-green-100 text-green-700">Ekonomik Çözüm</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                Daha ekonomik bir web sitesi mi arıyorsunuz?
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                O zaman <span className="font-semibold text-orange-600">Oniva Web Site Builder</span> ile tanışın!
                Sadece birkaç tıklamayla tamamen işlevsel web sitenizi oluşturun. Güçlü temalar, yerleşik modüller ve
                anında yayına alma özelliği ile web siteniz saniyeler içinde hazır!
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-slate-600">Birkaç tıklamayla web sitesi oluşturma</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-slate-600">15 günlük ücretsiz deneme</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-slate-600">Kredi kartı gerektirmez</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-slate-600">Anında yayına alma</span>
                </div>
              </div>
              <Button
                size="lg"
                className="btn-hover-glow bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                onClick={() => window.open("https://oniva.net", "_blank")}
              >
                Ücretsiz Deneyin - Kredi Kartı Yok
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <Card className="border-0 shadow-xl overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src="/oniva-net-hero.jpeg"
                    alt="Oniva Web Site Builder - Launch Your Website in Seconds"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </CardContent>
              </Card>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">DIY</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Çalışma Sürecimiz</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Web tasarım projenizi adım adım nasıl hayata geçirdiğimizi öğrenin.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Analiz & Planlama",
                desc: "İhtiyaçlarınızı analiz ediyor ve proje planını oluşturuyoruz.",
              },
              { step: "02", title: "Tasarım", desc: "Modern ve kullanıcı dostu tasarım mockup'larını hazırlıyoruz." },
              {
                step: "03",
                title: "Geliştirme",
                desc: "Tasarımı responsive ve SEO uyumlu kod yapısına dönüştürüyoruz.",
              },
              { step: "04", title: "Test & Yayın", desc: "Kapsamlı testlerden sonra sitenizi yayına alıyoruz." },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{process.title}</h3>
                <p className="text-slate-600">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-cyan-600">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Web Sitenizi Yenilemeye Hazır mısınız?</h2>
            <p className="text-xl text-white/90 mb-8">
              Modern ve etkili bir web sitesi ile dijital varlığınızı güçlendirin. Ücretsiz konsültasyon için hemen
              iletişime geçin.
            </p>
            <Button size="lg" className="btn-pulse bg-white text-slate-900 hover:bg-slate-100">
              Hemen Başlayalım
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
