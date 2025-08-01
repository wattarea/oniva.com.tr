import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function IletisimPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-orange-100 text-orange-700">İletişim</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
              Bizimle{" "}
              <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
                İletişime
              </span>{" "}
              Geçin
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Projeniz hakkında konuşmak için bize ulaşın. Size en uygun çözümü birlikte bulalım.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 bg-white shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Bize Mesaj Gönderin</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Ad Soyad *</label>
                      <Input placeholder="Adınız ve soyadınız" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">E-posta *</label>
                      <Input type="email" placeholder="ornek@email.com" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Telefon</label>
                      <Input placeholder="0xxx xxx xx xx" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Şirket</label>
                      <Input placeholder="Şirket adınız" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Hizmet Türü</label>
                    <select className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                      <option value="">Hizmet seçiniz</option>
                      <option value="web-tasarim">Web Tasarım</option>
                      <option value="web-yazilim">Web Yazılım</option>
                      <option value="mobil-uygulama">Mobil Uygulama</option>
                      <option value="dijital-pazarlama">Dijital Pazarlama</option>
                      <option value="diger">Diğer</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Mesajınız *</label>
                    <Textarea placeholder="Projeniz hakkında detayları paylaşın..." rows={5} required />
                  </div>

                  <Button className="w-full btn-gradient-shift bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                    Mesaj Gönder
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="border-0 bg-white shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">Telefon</h3>
                      <p className="text-slate-600">
                        <a href="tel:08508404411" className="hover:text-orange-500 transition-colors">
                          0850 840 4411
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">E-posta</h3>
                      <p className="text-slate-600">
                        <a href="mailto:info@oniva.com.tr" className="hover:text-blue-500 transition-colors">
                          info@oniva.com.tr
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">Adres</h3>
                      <p className="text-slate-600">
                        Antalya, Türkiye
                        <br />
                        Detaylı adres bilgisi için iletişime geçin.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">Çalışma Saatleri</h3>
                      <p className="text-slate-600">
                        Pazartesi - Cuma: 09:00 - 18:00
                        <br />
                        Cumartesi: 10:00 - 16:00
                        <br />
                        Pazar: Kapalı
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
