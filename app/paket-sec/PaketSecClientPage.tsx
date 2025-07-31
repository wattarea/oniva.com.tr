"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Check, ArrowLeft, Clock, Shield, Headphones, Star, ChevronDown, ChevronUp } from "lucide-react"
import { submitPackageForm } from "./actions"
import { useState } from "react"

// Paket bilgileri
const packageInfo = {
  // Web Tasarım Paketleri
  "web-tasarim-temel": {
    service: "Web Tasarım",
    name: "Temel Paket",
    price: "₺9.000",
    originalPrice: "₺12.000",
    discount: "25%",
    features: [
      "5 Sayfa Web Sitesi",
      "Responsive Tasarım",
      "Temel SEO",
      "İletişim Formu",
      "1 Yıl Hosting",
      "SSL Sertifikası",
    ],
    benefits: ["7 gün içinde teslim", "3 ay ücretsiz destek", "Sınırsız revizyon hakkı"],
    testimonial: {
      text: "Temel paket ile harika bir web sitesi aldık. Çok memnunuz!",
      author: "Mehmet K.",
      company: "Yerel İşletme",
    },
  },
  "web-tasarim-profesyonel": {
    service: "Web Tasarım",
    name: "Profesyonel Paket",
    price: "₺15.000",
    originalPrice: "₺20.000",
    discount: "25%",
    features: [
      "10 Sayfa Web Sitesi",
      "Özel Tasarım",
      "Gelişmiş SEO",
      "İçerik Yönetim Sistemi",
      "Google Analytics",
      "Sosyal Medya Entegrasyonu",
      "1 Yıl Hosting + SSL",
    ],
    benefits: ["10 gün içinde teslim", "6 ay ücretsiz destek", "Sınırsız revizyon hakkı", "Ücretsiz logo tasarımı"],
    testimonial: {
      text: "Profesyonel paket sayesinde satışlarımız %200 arttı!",
      author: "Ayşe Y.",
      company: "E-ticaret Sitesi",
    },
  },
  "web-tasarim-kurumsal": {
    service: "Web Tasarım",
    name: "Kurumsal Paket",
    price: "₺20.000",
    originalPrice: "₺28.000",
    discount: "29%",
    features: [
      "Sınırsız Sayfa",
      "Özel Tasarım & Geliştirme",
      "Profesyonel SEO",
      "Çoklu Dil Desteği",
      "Gelişmiş Analitik",
      "Öncelikli Destek",
      "1 Yıl Hosting + SSL",
    ],
    benefits: [
      "14 gün içinde teslim",
      "1 yıl ücretsiz destek",
      "Sınırsız revizyon hakkı",
      "Ücretsiz marka kimliği",
      "Özel proje yöneticisi",
    ],
    testimonial: {
      text: "Kurumsal paket ile şirket imajımız tamamen değişti. Mükemmel!",
      author: "Can D.",
      company: "Teknoloji Şirketi",
    },
  },
  // Dijital Pazarlama Paketleri
  "dijital-pazarlama-baslangic": {
    service: "Dijital Pazarlama",
    name: "Başlangıç Paketi",
    price: "₺1.500/ay",
    originalPrice: "₺2.000/ay",
    discount: "25%",
    features: [
      "Temel SEO Optimizasyonu",
      "Google My Business Yönetimi",
      "Aylık Performans Raporu",
      "2 Sosyal Medya Platformu",
      "Temel İçerik Üretimi",
    ],
    benefits: ["Hemen başlangıç", "Aylık raporlama", "Esnek sözleşme"],
    testimonial: {
      text: "İlk ayda Google'da ilk sayfaya çıktık!",
      author: "Fatma S.",
      company: "Restoran",
    },
  },
  "dijital-pazarlama-profesyonel": {
    service: "Dijital Pazarlama",
    name: "Profesyonel Paket",
    price: "₺3.500/ay",
    originalPrice: "₺4.500/ay",
    discount: "22%",
    features: [
      "Kapsamlı SEO Çalışması",
      "Google Ads Kampanya Yönetimi",
      "4 Sosyal Medya Platformu",
      "Haftalık İçerik Üretimi",
      "Detaylı Analitik Raporları",
      "Competitor Analizi",
    ],
    benefits: ["Hızlı sonuçlar", "Haftalık raporlama", "Özel strateji", "Öncelikli destek"],
    testimonial: {
      text: "3 ayda online satışlarımız 5 kat arttı!",
      author: "Okan T.",
      company: "E-ticaret",
    },
  },
  "dijital-pazarlama-kurumsal": {
    service: "Dijital Pazarlama",
    name: "Kurumsal Paket",
    price: "₺6.500/ay",
    originalPrice: "₺8.500/ay",
    discount: "24%",
    features: [
      "Tam Kapsamlı Dijital Pazarlama",
      "Çoklu Platform Reklam Yönetimi",
      "Günlük İçerik Üretimi",
      "Influencer Marketing",
      "Özel Strateji Geliştirme",
      "7/24 Destek",
      "Aylık Strateji Toplantısı",
    ],
    benefits: ["Maksimum ROI", "Günlük takip", "Özel ekip", "7/24 destek", "Aylık toplantılar"],
    testimonial: {
      text: "Dijital pazarlama lideri olduk. ROI %400!",
      author: "Zeynep K.",
      company: "Holding",
    },
  },
}

const faqs = [
  {
    question: "Proje ne kadar sürede teslim edilir?",
    answer: "Paket türüne göre 7-14 gün arasında değişir. Acil projeler için özel çözümler sunabiliriz.",
  },
  {
    question: "Ödeme nasıl yapılır?",
    answer: "Kredi kartı, banka havalesi veya taksitli ödeme seçenekleri mevcuttur. Size en uygun yöntemi sunacağız.",
  },
  {
    question: "Revizyon hakkım var mı?",
    answer: "Evet! Tüm paketlerde sınırsız revizyon hakkınız bulunmaktadır. Memnun kalana kadar çalışırız.",
  },
  {
    question: "Destek hizmeti ne kadar süre?",
    answer: "Paket türüne göre 3 ay ile 1 yıl arasında ücretsiz destek hizmeti sunuyoruz.",
  },
  {
    question: "Hosting ve domain dahil mi?",
    answer: "Evet, tüm paketlerde 1 yıl hosting ve SSL sertifikası dahildir. Domain kaydı da yapabiliriz.",
  },
]

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function PaketSecClientPage({ searchParams }: PageProps) {
  const packageId = searchParams.paket as string
  const selectedPackage = packageId ? packageInfo[packageId as keyof typeof packageInfo] : null
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    try {
      await submitPackageForm(formData)
    } catch (error) {
      console.error("Form submission error:", error)
      alert("Bir hata oluştu. Lütfen tekrar deneyin.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!selectedPackage) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
        <Header />
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-6 text-center">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Paket Bulunamadı</h1>
            <p className="text-slate-600 mb-8">
              Seçtiğiniz paket bulunamadı. Lütfen hizmet sayfalarından tekrar seçim yapın.
            </p>
            <Button onClick={() => window.history.back()} variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Geri Dön
            </Button>
          </div>
        </section>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-orange-100 text-orange-700">Paket Seçimi</Badge>
            <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Seçiminizi Tamamlayın</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Seçtiğiniz paket için detaylı bilgilerinizi paylaşın. Uzman ekibimiz en kısa sürede sizinle iletişime
              geçecek.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Seçilen Paket Bilgisi - Geliştirilmiş */}
            <div className="space-y-6">
              <Card className="border-0 bg-white shadow-xl overflow-hidden">
                <CardContent className="p-0">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white">
                    <Badge className="mb-2 bg-white/20 text-white">Seçilen Paket</Badge>
                    <h2 className="text-2xl font-bold mb-2">{selectedPackage.name}</h2>
                    <div className="text-sm opacity-90 mb-4">{selectedPackage.service}</div>

                    {/* Fiyat */}
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl font-bold">{selectedPackage.price}</div>
                      {selectedPackage.originalPrice && (
                        <>
                          <div className="text-lg line-through opacity-70">{selectedPackage.originalPrice}</div>
                          <Badge className="bg-green-500 text-white">{selectedPackage.discount} İndirim</Badge>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Left Column - Paket İçeriği */}
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-4">📦 Paket İçeriği:</h3>
                        <div className="space-y-3">
                          {selectedPackage.features.map((feature, index) => (
                            <div key={index} className="flex items-center">
                              <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                              <span className="text-slate-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right Column - Ek Avantajlar */}
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-4">🎁 Ek Avantajlar:</h3>
                        <div className="space-y-3">
                          {selectedPackage.benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center">
                              <Star className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                              <span className="text-slate-600">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Garanti Kartları */}
                    <div className="grid grid-cols-3 gap-3 mt-6 mb-6">
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <Clock className="h-6 w-6 text-blue-500 mx-auto mb-1" />
                        <div className="text-xs font-medium text-blue-700">Zamanında Teslimat</div>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <Shield className="h-6 w-6 text-green-500 mx-auto mb-1" />
                        <div className="text-xs font-medium text-green-700">Kalite Garantisi</div>
                      </div>
                      <div className="text-center p-3 bg-purple-50 rounded-lg">
                        <Headphones className="h-6 w-6 text-purple-500 mx-auto mb-1" />
                        <div className="text-xs font-medium text-purple-700">7/24 Destek</div>
                      </div>
                    </div>

                    {/* Müşteri Yorumu */}
                    <div className="bg-slate-50 p-4 rounded-lg mb-6">
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-sm text-slate-600 italic mb-2">"{selectedPackage.testimonial.text}"</p>
                      <div className="text-xs text-slate-500">
                        <strong>{selectedPackage.testimonial.author}</strong> - {selectedPackage.testimonial.company}
                      </div>
                    </div>

                    {/* Özel Not */}
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <p className="text-sm text-orange-800">
                        <strong>💰 Özel Fiyat:</strong> Bu fiyat sadece online siparişler için geçerlidir. KDV dahildir.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Bölümü */}
              <Card className="border-0 bg-white shadow-xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">❓ Sıkça Sorulan Sorular</h3>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-slate-200 last:border-b-0 pb-4 last:pb-0">
                        <button
                          className="flex items-center justify-between w-full text-left py-2 hover:text-orange-600 transition-colors"
                          onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        >
                          <span className="font-medium text-slate-900">{faq.question}</span>
                          {expandedFaq === index ? (
                            <ChevronUp className="h-5 w-5 text-slate-400" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-slate-400" />
                          )}
                        </button>
                        {expandedFaq === index && (
                          <div className="mt-2 text-sm text-slate-600 leading-relaxed">{faq.answer}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* İletişim Formu - Güncellenmiş */}
            <Card className="border-0 bg-white shadow-xl">
              <CardContent className="p-8 pb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">📝 İletişim Bilgileriniz</h2>

                <form action={handleSubmit} className="space-y-6">
                  {/* Hidden fields for package info */}
                  <input type="hidden" name="packageId" value={packageId} />
                  <input type="hidden" name="serviceName" value={selectedPackage.service} />
                  <input type="hidden" name="packageName" value={selectedPackage.name} />
                  <input type="hidden" name="packagePrice" value={selectedPackage.price} />

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Ad Soyad *</label>
                      <Input name="fullName" placeholder="Adınız ve soyadınız" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">E-posta *</label>
                      <Input name="email" type="email" placeholder="ornek@email.com" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Telefon *</label>
                      <Input name="phone" placeholder="0xxx xxx xx xx" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Şirket</label>
                      <Input name="company" placeholder="Şirket adınız (opsiyonel)" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Proje Başlangıç Tarihi</label>
                    <select
                      name="startDate"
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    >
                      <option value="">Tercih etmiyorum</option>
                      <option value="asap">En kısa sürede</option>
                      <option value="1-month">1 ay içinde</option>
                      <option value="2-3-months">2-3 ay içinde</option>
                      <option value="flexible">Esnek</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Sektörünüz</label>
                    <select
                      name="industry"
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    >
                      <option value="">Seçiniz</option>
                      <option value="e-commerce">E-ticaret</option>
                      <option value="healthcare">Sağlık</option>
                      <option value="education">Eğitim</option>
                      <option value="restaurant">Restoran/Cafe</option>
                      <option value="real-estate">Emlak</option>
                      <option value="technology">Teknoloji</option>
                      <option value="manufacturing">İmalat</option>
                      <option value="services">Hizmet</option>
                      <option value="other">Diğer</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Proje Detayları</label>
                    <Textarea
                      name="projectDetails"
                      placeholder="Projeniz hakkında detayları, özel isteklerinizi ve beklentilerinizi paylaşın..."
                      rows={4}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Nasıl duydunuz?</label>
                    <select
                      name="referralSource"
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    >
                      <option value="">Seçiniz</option>
                      <option value="google">Google arama</option>
                      <option value="social-media">Sosyal medya</option>
                      <option value="referral">Arkadaş tavsiyesi</option>
                      <option value="advertisement">Reklam</option>
                      <option value="other">Diğer</option>
                    </select>
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="consent"
                      id="consent"
                      required
                      className="mt-1 h-4 w-4 text-orange-600 focus:ring-orange-500 border-slate-300 rounded"
                    />
                    <label htmlFor="consent" className="text-sm text-slate-600">
                      Kişisel verilerimin işlenmesine ve benimle iletişime geçilmesine onay veriyorum. *
                    </label>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-gradient-shift bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white disabled:opacity-50"
                  >
                    {isSubmitting ? "Gönderiliyor..." : "Talep Gönder"}
                  </Button>
                </form>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>📞 Sonraki Adım:</strong> Talebinizi aldıktan sonra 24 saat içinde sizinle iletişime
                    geçeceğiz ve ödeme seçeneklerini paylaşacağız.
                  </p>
                </div>

                <div className="mt-4 text-center">
                  <p className="text-xs text-slate-500">Güvenli form • SSL korumalı • KVKK uyumlu</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
