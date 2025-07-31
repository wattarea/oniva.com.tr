"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Phone, Mail, ArrowRight } from "lucide-react"

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function TesekkurlerClientPage({ searchParams }: PageProps) {
  const packageName = searchParams.paket as string

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Header />

      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>

            <Badge className="mb-4 bg-green-100 text-green-700">Talep Alındı</Badge>
            <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Teşekkürler!</h1>
            <p className="text-xl text-slate-600 mb-8">
              {packageName && `"${packageName}" için`} talebiniz başarıyla alındı. Uzman ekibimiz 24 saat içinde sizinle
              iletişime geçecek.
            </p>

            <Card className="border-0 bg-white shadow-lg mb-8">
              <CardContent className="p-8">
                <h2 className="text-xl font-bold text-slate-900 mb-6">Sonraki Adımlar</h2>
                <div className="space-y-4 text-left">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-orange-600 text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">İletişim</h3>
                      <p className="text-slate-600 text-sm">24 saat içinde uzman ekibimiz sizinle iletişime geçecek</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-orange-600 text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Detaylı Görüşme</h3>
                      <p className="text-slate-600 text-sm">
                        Proje detaylarını konuşacak ve özel ihtiyaçlarınızı belirleyeceğiz
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-orange-600 text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Teklif & Ödeme</h3>
                      <p className="text-slate-600 text-sm">Size özel teklif ve ödeme seçeneklerini sunacağız</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-orange-600 text-sm font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Proje Başlangıcı</h3>
                      <p className="text-slate-600 text-sm">Ödeme sonrası projenize hemen başlayacağız</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-0 bg-white shadow-lg">
                <CardContent className="p-6 text-center">
                  <Phone className="h-8 w-8 text-orange-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-slate-900 mb-2">Acil Durumlar</h3>
                  <p className="text-slate-600 text-sm mb-3">Acil bir durumunuz varsa direkt arayabilirsiniz</p>
                  <a href="tel:08508404411" className="text-orange-600 font-semibold hover:text-orange-700">
                    0850 840 4411
                  </a>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white shadow-lg">
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 text-blue-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-slate-900 mb-2">E-posta</h3>
                  <p className="text-slate-600 text-sm mb-3">Sorularınız için e-posta gönderebilirsiniz</p>
                  <a href="mailto:info@oniva.com.tr" className="text-blue-600 font-semibold hover:text-blue-700">
                    info@oniva.com.tr
                  </a>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => (window.location.href = "/")}
                className="btn-hover-glow bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
              >
                Ana Sayfaya Dön
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                onClick={() => (window.location.href = "/hizmetlerimiz")}
                variant="outline"
                className="btn-scale-glow border-slate-300 hover:bg-slate-50"
              >
                Diğer Hizmetler
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
