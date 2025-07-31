import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Eye, Lock, Database, UserCheck, FileText } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gizlilik Politikası - Oniva",
  description: "Oniva gizlilik politikası. Kişisel verilerinizin korunması ve işlenmesi hakkında detaylı bilgiler.",
  robots: { index: true, follow: true },
}

export default function GizlilikPolitikasiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-700">
              <Shield className="w-4 h-4 mr-2" />
              Gizlilik Politikası
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Kişisel Verilerinizin{" "}
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                Korunması
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Oniva olarak kişisel verilerinizin korunmasına büyük önem veriyoruz. Bu politika, verilerinizin nasıl
              toplandığı, kullanıldığı ve korunduğu hakkında detaylı bilgi sağlar.
            </p>
            <div className="mt-8 text-sm text-slate-500">Son güncelleme: 1 Ocak 2024</div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Özet Bilgiler</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 bg-white shadow-lg">
                <CardContent className="p-6 text-center">
                  <Eye className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="font-semibold text-slate-900 mb-2">Şeffaflık</h3>
                  <p className="text-sm text-slate-600">
                    Verilerinizi neden ve nasıl kullandığımızı açık şekilde belirtiyoruz
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 bg-white shadow-lg">
                <CardContent className="p-6 text-center">
                  <Lock className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="font-semibold text-slate-900 mb-2">Güvenlik</h3>
                  <p className="text-sm text-slate-600">Verilerinizi en yüksek güvenlik standartlarıyla koruyoruz</p>
                </CardContent>
              </Card>
              <Card className="border-0 bg-white shadow-lg">
                <CardContent className="p-6 text-center">
                  <UserCheck className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                  <h3 className="font-semibold text-slate-900 mb-2">Kontrol</h3>
                  <p className="text-sm text-slate-600">Verileriniz üzerinde tam kontrol sahibi olursunuz</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto prose prose-slate max-w-none">
            <div className="space-y-12">
              {/* Veri Sorumlusu */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                  <FileText className="h-6 w-6 text-orange-500 mr-3" />
                  1. Veri Sorumlusu
                </h2>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <p className="text-slate-700 mb-4">
                    Bu gizlilik politikası kapsamında veri sorumlusu <strong>Oniva</strong>'dır.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong>İletişim Bilgileri:</strong>
                      <br />
                      E-posta: info@oniva.com.tr
                      <br />
                      Telefon: 0850 840 4411
                      <br />
                      Adres: Antalya, Türkiye
                    </div>
                    <div>
                      <strong>Veri Koruma Sorumlusu:</strong>
                      <br />
                      E-posta: kvkk@oniva.com.tr
                      <br />
                      KVKK ile ilgili tüm taleplerinizi bu adrese iletebilirsiniz.
                    </div>
                  </div>
                </div>
              </div>

              {/* Toplanan Veriler */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                  <Database className="h-6 w-6 text-blue-500 mr-3" />
                  2. Toplanan Kişisel Veriler
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">2.1. Doğrudan Toplanan Veriler</h3>
                    <ul className="list-disc list-inside space-y-2 text-slate-700">
                      <li>
                        <strong>Kimlik Bilgileri:</strong> Ad, soyad, e-posta adresi, telefon numarası
                      </li>
                      <li>
                        <strong>İletişim Bilgileri:</strong> Adres, şehir, ülke bilgileri
                      </li>
                      <li>
                        <strong>Şirket Bilgileri:</strong> Şirket adı, sektör, pozisyon (isteğe bağlı)
                      </li>
                      <li>
                        <strong>Proje Bilgileri:</strong> Hizmet talepleri, proje detayları, özel istekler
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">2.2. Otomatik Toplanan Veriler</h3>
                    <ul className="list-disc list-inside space-y-2 text-slate-700">
                      <li>
                        <strong>Teknik Bilgiler:</strong> IP adresi, tarayıcı türü, işletim sistemi
                      </li>
                      <li>
                        <strong>Kullanım Bilgileri:</strong> Ziyaret edilen sayfalar, tıklama verileri, oturum süresi
                      </li>
                      <li>
                        <strong>Çerez Verileri:</strong> Tercihler, oturum bilgileri, analitik veriler
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Veri İşleme Amaçları */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">3. Kişisel Verilerin İşlenme Amaçları</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-0 bg-blue-50">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-slate-900 mb-3">Hizmet Sunumu</h3>
                      <ul className="text-sm text-slate-700 space-y-1">
                        <li>• Talep edilen hizmetlerin sunulması</li>
                        <li>• Müşteri destek hizmetleri</li>
                        <li>• Proje yönetimi ve iletişim</li>
                        <li>• Teknik destek sağlanması</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-0 bg-green-50">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-slate-900 mb-3">İletişim ve Pazarlama</h3>
                      <ul className="text-sm text-slate-700 space-y-1">
                        <li>• Müşteri iletişimi</li>
                        <li>• Hizmet güncellemeleri</li>
                        <li>• Pazarlama faaliyetleri (onay ile)</li>
                        <li>• Anket ve geri bildirim toplama</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-0 bg-purple-50">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-slate-900 mb-3">Analiz ve Geliştirme</h3>
                      <ul className="text-sm text-slate-700 space-y-1">
                        <li>• Web sitesi performans analizi</li>
                        <li>• Kullanıcı deneyimi iyileştirme</li>
                        <li>• Hizmet kalitesi artırma</li>
                        <li>• İstatistiksel analizler</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-0 bg-orange-50">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-slate-900 mb-3">Yasal Yükümlülükler</h3>
                      <ul className="text-sm text-slate-700 space-y-1">
                        <li>• Yasal gerekliliklerin yerine getirilmesi</li>
                        <li>• Vergi ve muhasebe işlemleri</li>
                        <li>• Denetim ve raporlama</li>
                        <li>• Hukuki süreçlerin yürütülmesi</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Veri Paylaşımı */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">4. Kişisel Verilerin Paylaşılması</h2>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                  <p className="text-slate-700">
                    <strong>Önemli:</strong> Kişisel verilerinizi üçüncü taraflarla ticari amaçlarla paylaşmayız.
                    Verileriniz yalnızca aşağıdaki durumlarda ve gerekli güvenlik önlemleri alınarak paylaşılabilir.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h3 className="font-semibold text-slate-900 mb-2">Hizmet Sağlayıcılar</h3>
                    <p className="text-slate-700">
                      Hosting, e-posta, analitik ve ödeme hizmetleri sunan güvenilir üçüncü taraf sağlayıcılar
                    </p>
                  </div>

                  <div className="border-l-4 border-green-400 pl-4">
                    <h3 className="font-semibold text-slate-900 mb-2">Yasal Gereklilikler</h3>
                    <p className="text-slate-700">
                      Mahkeme kararı, yasal düzenleme veya kamu otoritelerinin talebi durumunda
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-400 pl-4">
                    <h3 className="font-semibold text-slate-900 mb-2">İş Ortakları</h3>
                    <p className="text-slate-700">
                      Proje gereksinimleri doğrultusunda, gizlilik sözleşmesi imzalanmış iş ortakları
                    </p>
                  </div>
                </div>
              </div>

              {/* Veri Güvenliği */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">5. Veri Güvenliği</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Teknik Önlemler</h3>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        SSL/TLS şifreleme
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        Güvenli sunucu altyapısı
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        Düzenli güvenlik güncellemeleri
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        Veri yedekleme sistemleri
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">İdari Önlemler</h3>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        Erişim kontrolü ve yetkilendirme
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        Personel eğitimi ve farkındalık
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        Gizlilik sözleşmeleri
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        Düzenli güvenlik denetimleri
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Haklarınız */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">6. Kişisel Veri Sahibi Olarak Haklarınız</h2>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-slate-700 mb-4">KVKK Kanunu kapsamında aşağıdaki haklara sahipsiniz:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-slate-700">
                      <li>✓ Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                      <li>✓ İşlenen kişisel verileriniz hakkında bilgi talep etme</li>
                      <li>✓ İşleme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                      <li>✓ Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme</li>
                    </ul>
                    <ul className="space-y-2 text-slate-700">
                      <li>
                        ✓ Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme
                      </li>
                      <li>✓ Kişisel verilerin silinmesini veya yok edilmesini isteme</li>
                      <li>
                        ✓ Düzeltme, silme ve yok etme işlemlerinin aktarıldığı üçüncü kişilere bildirilmesini isteme
                      </li>
                      <li>
                        ✓ İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi sonucu aleyhte bir
                        sonuçla karşılaşma durumunda itiraz etme
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* İletişim */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">7. İletişim ve Başvuru</h2>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <p className="text-slate-700 mb-4">
                    Kişisel verilerinizle ilgili sorularınız veya haklarınızı kullanmak için aşağıdaki kanallardan bize
                    ulaşabilirsiniz:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">KVKK Başvuruları</h3>
                      <p className="text-slate-700 text-sm">
                        E-posta: kvkk@oniva.com.tr
                        <br />
                        Konu: "KVKK Başvurusu"
                        <br />
                        Yanıt süresi: 30 gün
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Genel İletişim</h3>
                      <p className="text-slate-700 text-sm">
                        E-posta: info@oniva.com.tr
                        <br />
                        Telefon: 0850 840 4411
                        <br />
                        Adres: Antalya, Türkiye
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Değişiklikler */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">8. Politika Değişiklikleri</h2>
                <div className="border-l-4 border-orange-400 pl-6">
                  <p className="text-slate-700">
                    Bu gizlilik politikası gerektiğinde güncellenebilir. Önemli değişiklikler durumunda size e-posta
                    yoluyla bilgi vereceğiz. Politikanın güncel versiyonu her zaman web sitemizde yayınlanacaktır.
                  </p>
                  <p className="text-sm text-slate-500 mt-4">Son güncelleme: 1 Ocak 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
