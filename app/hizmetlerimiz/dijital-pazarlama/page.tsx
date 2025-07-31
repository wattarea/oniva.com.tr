import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Zap, Check, ArrowRight, Search, TrendingUp, Target, BarChart } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dijital Pazarlama Hizmetleri - SEO, SEM ve Sosyal Medya | Oniva",
  description:
    "Profesyonel dijital pazarlama hizmetleri ile online görünürlüğünüzü artırın. SEO, Google Ads, sosyal medya yönetimi ve içerik pazarlama hizmetleri.",
  keywords: ["dijital pazarlama", "SEO hizmetleri", "Google Ads", "sosyal medya pazarlama", "içerik pazarlama", "SEM"],
  openGraph: {
    title: "Dijital Pazarlama Hizmetleri - SEO, SEM ve Sosyal Medya",
    description: "Dijital pazarlama stratejileri ile işletmenizi online dünyada öne çıkarın.",
    url: "https://oniva.com.tr/hizmetlerimiz/dijital-pazarlama",
  },
}

export default function DijitalPazarlamaPage() {
  const services = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "SEO Hizmetleri",
      description: "Arama motorlarında üst sıralarda yer alın",
      features: ["Anahtar Kelime Analizi", "On-Page SEO", "Link Building", "Teknik SEO"],
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Google Ads",
      description: "Hedefli reklamlarla hızlı sonuçlar alın",
      features: ["Kampanya Yönetimi", "Anahtar Kelime Optimizasyonu", "A/B Testing", "ROI Optimizasyonu"],
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Sosyal Medya",
      description: "Sosyal medyada marka bilinirliğinizi artırın",
      features: ["İçerik Üretimi", "Topluluk Yönetimi", "Influencer Marketing", "Sosyal Medya Reklamları"],
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Analitik & Raporlama",
      description: "Veriye dayalı kararlar alın",
      features: ["Google Analytics", "Performans Raporları", "Conversion Tracking", "ROI Analizi"],
    },
  ]

  const packages = [
    {
      name: "Başlangıç Paketi",
      price: "₺1.500/ay",
      features: [
        "Temel SEO Optimizasyonu",
        "Google My Business Yönetimi",
        "Aylık Performans Raporu",
        "2 Sosyal Medya Platformu",
        "Temel İçerik Üretimi",
      ],
    },
    {
      name: "Profesyonel Paket",
      price: "₺3.500/ay",
      features: [
        "Kapsamlı SEO Çalışması",
        "Google Ads Kampanya Yönetimi",
        "4 Sosyal Medya Platformu",
        "Haftalık İçerik Üretimi",
        "Detaylı Analitik Raporları",
        "Competitor Analizi",
      ],
      popular: true,
    },
    {
      name: "Kurumsal Paket",
      price: "₺6.500/ay",
      features: [
        "Tam Kapsamlı Dijital Pazarlama",
        "Çoklu Platform Reklam Yönetimi",
        "Günlük İçerik Üretimi",
        "Influencer Marketing",
        "Özel Strateji Geliştirme",
        "7/24 Destek",
        "Aylık Strateji Toplantısı",
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
              <Badge className="bg-purple-100 text-purple-700">Dijital Pazarlama Hizmetleri</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Online{" "}
                <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
                  Görünürlüğünüzü
                </span>{" "}
                Artırın
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                SEO, Google Ads, sosyal medya pazarlama ve içerik stratejileri ile işletmenizi dijital dünyada öne
                çıkarın. Veriye dayalı yaklaşımlarla sürdürülebilir büyüme sağlayın.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="btn-hover-glow bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white"
                >
                  Strateji Danışmanlığı
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="btn-scale-glow border-slate-300 hover:bg-slate-50 bg-transparent"
                >
                  Başarı Hikayeleri
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8">
                <div className="w-full h-full bg-white rounded-2xl shadow-lg flex items-center justify-center">
                  <Zap className="h-24 w-24 text-purple-500" />
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
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Dijital Pazarlama Hizmetlerimiz</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Kapsamlı dijital pazarlama stratejileri ile markanızı güçlendirin ve satışlarınızı artırın.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 bg-white shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mr-4">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{service.title}</h3>
                      <p className="text-slate-600">{service.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
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

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Dijital Pazarlama Paketleri</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              İhtiyacınıza uygun dijital pazarlama paketini seçin ve online başarınızı artırın.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`border-0 shadow-xl ${pkg.popular ? "ring-2 ring-purple-500 scale-105" : ""}`}
              >
                <CardContent className="p-8">
                  {pkg.popular && <Badge className="mb-4 bg-purple-500 text-white">En Popüler</Badge>}
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-purple-600 mb-6">{pkg.price}</div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-3" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${pkg.popular ? "btn-hover-glow bg-purple-500 hover:bg-purple-600 text-white" : "btn-scale-glow"}`}
                    variant={pkg.popular ? "default" : "outline"}
                  >
                    Paketi Seç
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Elde Ettiğimiz Sonuçlar</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Müşterilerimizin dijital pazarlama kampanyalarında elde ettiği başarılar.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { metric: "+250%", label: "Organik Trafik Artışı" },
              { metric: "+180%", label: "Conversion Rate Artışı" },
              { metric: "+320%", label: "Sosyal Medya Etkileşimi" },
              { metric: "+200%", label: "ROI Artışı" },
            ].map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">{result.metric}</div>
                <div className="text-slate-600">{result.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-pink-600">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Dijital Pazarlama Yolculuğunuza Başlayın</h2>
            <p className="text-xl text-white/90 mb-8">
              Uzman ekibimizle birlikte dijital pazarlama stratejinizi oluşturun ve online başarınızı artırın. Ücretsiz
              analiz için hemen iletişime geçin.
            </p>
            <Button size="lg" className="btn-pulse bg-white text-slate-900 hover:bg-slate-100">
              Ücretsiz Analiz Al
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
