import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Award, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HakkimizdaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-orange-100 text-orange-700">Hakkımızda</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
              Dijital Dünyada{" "}
              <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
                Fark Yaratan
              </span>{" "}
              Çözümler
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              2019 yılından bu yana, işletmelerin dijital dönüşüm yolculuğunda güvenilir partneri olarak modern
              teknolojiler ve yaratıcı çözümlerle hizmet veriyoruz.
            </p>
            <Button
              size="lg"
              className="btn-gradient-shift bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white mt-8"
            >
              İletişime Geçin
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">500+</div>
              <div className="text-slate-600">Mutlu Müşteri</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">750+</div>
              <div className="text-slate-600">Tamamlanan Proje</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">98%</div>
              <div className="text-slate-600">Müşteri Memnuniyeti</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">20+</div>
              <div className="text-slate-600">Yıl Deneyim</div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Hikayemiz</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Teknoloji ve Yaratıcılığın Buluştuğu Nokta
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  Oniva olarak, dijital dünyada işletmelerin başarısını artırmak için kurulduk. Ekibimiz, web tasarımı,
                  yazılım geliştirme ve dijital pazarlama alanlarında uzman profesyonellerden oluşuyor.
                </p>
                <p>
                  Her projede müşterilerimizin ihtiyaçlarını anlayarak, onlara özel çözümler geliştiriyoruz. Amacımız,
                  sadece güzel görünen değil, aynı zamanda işlevsel ve kullanıcı dostu dijital deneyimler yaratmak.
                </p>
                <p>
                  Teknolojinin hızla geliştiği bu dönemde, sürekli kendimizi yeniliyor ve en güncel trendleri takip
                  ederek müşterilerimize en iyi hizmeti sunuyoruz.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-orange-100 to-blue-100 rounded-3xl p-8">
                <div className="w-full h-full bg-white rounded-2xl shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">O</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Oniva Ekibi</h3>
                    <p className="text-slate-600">Yaratıcı & Teknoloji Odaklı</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4">Değerlerimiz</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Neden Oniva'yı Seçmelisiniz?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 bg-white shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Kalite Odaklı</h3>
                <p className="text-slate-600">
                  Her projede en yüksek kalite standartlarını uygulayarak, müşterilerimizin beklentilerini aşmayı
                  hedefliyoruz.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Zamanında Teslimat</h3>
                <p className="text-slate-600">
                  Belirlenen sürelere uyarak projelerinizi zamanında teslim ediyor, iş planlarınızı aksatmıyoruz.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Müşteri Memnuniyeti</h3>
                <p className="text-slate-600">
                  Müşteri memnuniyeti bizim için öncelik. Proje sonrası destek hizmetlerimizle yanınızda olmaya devam
                  ediyoruz.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
