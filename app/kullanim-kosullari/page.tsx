import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, AlertTriangle, CheckCircle, XCircle, Scale } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kullanım Koşulları - Oniva",
  description:
    "Oniva web sitesi ve hizmetlerinin kullanım koşulları. Hak ve yükümlülükleriniz hakkında detaylı bilgiler.",
  robots: { index: true, follow: true },
}

export default function KullanimKosullariPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-green-100 text-green-700">
              <FileText className="w-4 h-4 mr-2" />
              Kullanım Koşulları
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Hizmet{" "}
              <span className="bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
                Kullanım Koşulları
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Oniva web sitesi ve hizmetlerini kullanırken uymanız gereken kurallar ve koşullar. Lütfen hizmetlerimizi
              kullanmadan önce bu koşulları dikkatlice okuyun.
            </p>
            <div className="mt-8 text-sm text-slate-500">Son güncelleme: 1 Ocak 2024</div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Önemli Noktalar</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 bg-white shadow-lg">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="font-semibold text-slate-900 mb-2">Kabul Edilmiş Koşullar</h3>
                  <p className="text-sm text-slate-600">Siteyi kullanarak bu koşulları kabul etmiş sayılırsınız</p>
                </CardContent>
              </Card>
              <Card className="border-0 bg-white shadow-lg">
                <CardContent className="p-6 text-center">
                  <Scale className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="font-semibold text-slate-900 mb-2">Yasal Çerçeve</h3>
                  <p className="text-sm text-slate-600">Türkiye Cumhuriyeti yasalarına tabidir</p>
                </CardContent>
              </Card>
              <Card className="border-0 bg-white shadow-lg">
                <CardContent className="p-6 text-center">
                  <AlertTriangle className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="font-semibold text-slate-900 mb-2">Güncellemeler</h3>
                  <p className="text-sm text-slate-600">Koşullar önceden haber verilmeksizin güncellenebilir</p>
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
              {/* Genel Hükümler */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                  <FileText className="h-6 w-6 text-green-500 mr-3" />
                  1. Genel Hükümler
                </h2>
                <div className="space-y-4 text-slate-700">
                  <p>
                    Bu kullanım koşulları ("Koşullar"), Oniva ("Şirket", "biz", "bizim") tarafından sunulan web sitesi
                    (oniva.com.tr) ve hizmetlerin kullanımını düzenler.
                  </p>
                  <p>
                    Web sitemizi ziyaret ederek veya hizmetlerimizi kullanarak, bu Koşulları okuduğunuzu, anladığınızı
                    ve bunlara uymayı kabul ettiğinizi beyan edersiniz.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <p className="font-semibold text-blue-900 mb-2">Önemli Not:</p>
                    <p className="text-blue-800">
                      Bu koşulları kabul etmiyorsanız, lütfen web sitemizi kullanmayın ve hizmetlerimizden
                      yararlanmayın.
                    </p>
                  </div>
                </div>
              </div>

              {/* Hizmet Tanımı */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">2. Hizmet Tanımı</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-0 bg-green-50">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-slate-900 mb-3">Sunduğumuz Hizmetler</h3>
                      <ul className="text-sm text-slate-700 space-y-2">
                        <li>• Web tasarım ve geliştirme</li>
                        <li>• Web yazılım çözümleri</li>
                        <li>• Mobil uygulama geliştirme</li>
                        <li>• Dijital pazarlama hizmetleri</li>
                        <li>• Teknik destek ve bakım</li>
                        <li>• Danışmanlık hizmetleri</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-0 bg-orange-50">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-slate-900 mb-3">Hizmet Kapsamı</h3>
                      <ul className="text-sm text-slate-700 space-y-2">
                        <li>• Özel proje geliştirme</li>
                        <li>• Kurumsal çözümler</li>
                        <li>• E-ticaret sistemleri</li>
                        <li>• SEO ve dijital pazarlama</li>
                        <li>• Hosting ve domain hizmetleri</li>
                        <li>• Eğitim ve workshop'lar</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Kullanıcı Yükümlülükleri */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">3. Kullanıcı Yükümlülükleri</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Yapmanız Gerekenler
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                      <li>Doğru ve güncel bilgiler sağlamak</li>
                      <li>Hizmet sözleşmesi koşullarına uymak</li>
                      <li>Ödeme yükümlülüklerini zamanında yerine getirmek</li>
                      <li>Telif hakları ve fikri mülkiyet haklarına saygı göstermek</li>
                      <li>Geri bildirim ve onay süreçlerine katılmak</li>
                      <li>Proje gereksinimlerini net şekilde belirtmek</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                      <XCircle className="h-5 w-5 text-red-500 mr-2" />
                      Yapmamanız Gerekenler
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                      <li>Yasadışı, zararlı veya etik olmayan içerik talep etmek</li>
                      <li>Başkalarının telif haklarını ihlal eden materyaller kullanmak</li>
                      <li>Hizmetlerimizi kötüye kullanmak veya suistimal etmek</li>
                      <li>Yanıltıcı veya yanlış bilgiler vermek</li>
                      <li>Spam, virüs veya zararlı kod yaymak</li>
                      <li>Diğer kullanıcıları rahatsız etmek veya taciz etmek</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Ödeme ve Faturalama */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">4. Ödeme ve Faturalama</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Ödeme Koşulları</h3>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                        <span>Projeler için %50 peşin, %50 teslimde ödeme</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                        <span>Aylık hizmetler için ayın başında ödeme</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                        <span>Kredi kartı, banka havalesi veya EFT ile ödeme</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                        <span>Tüm fiyatlara KDV dahildir</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">İptal ve İade</h3>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></div>
                        <span>Proje başlamadan önce %100 iade</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></div>
                        <span>Proje başladıktan sonra kısmi iade</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></div>
                        <span>Teslim edilen projeler için iade yok</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></div>
                        <span>İade süreci 5-10 iş günü</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Fikri Mülkiyet */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">5. Fikri Mülkiyet Hakları</h2>
                <div className="space-y-6">
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-slate-900 mb-3">Müşteri Hakları</h3>
                    <p className="text-slate-700 mb-3">Teslim edilen ve ödemesi tamamlanan projeler için:</p>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>✓ Kaynak kodlar ve tasarım dosyaları size aittir</li>
                      <li>✓ Ticari kullanım hakkına sahip olursunuz</li>
                      <li>✓ İstediğiniz değişiklikleri yapabilirsiniz</li>
                      <li>✓ Başka geliştiricilerle çalışabilirsiniz</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-slate-900 mb-3">Oniva Hakları</h3>
                    <p className="text-slate-700 mb-3">Geliştirdiğimiz projeler için:</p>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>✓ Portfolio olarak kullanma hakkımız vardır</li>
                      <li>✓ Referans olarak gösterebiliriz</li>
                      <li>✓ Geliştirdiğimiz framework'lerin hakları bizde kalır</li>
                      <li>✓ Açık kaynak kütüphanelerin hakları sahiplerine aittir</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Sorumluluk Sınırlaması */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">6. Sorumluluk Sınırlaması</h2>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                  <h3 className="font-semibold text-slate-900 mb-3">Önemli Uyarı</h3>
                  <p className="text-slate-700 mb-4">
                    Hizmetlerimizi mümkün olan en iyi kalitede sunmaya çalışsak da, aşağıdaki durumlardan sorumlu
                    tutulamayız:
                  </p>
                  <ul className="text-sm text-slate-700 space-y-2">
                    <li>• Üçüncü taraf hizmetlerden kaynaklanan sorunlar</li>
                    <li>• İnternet bağlantısı veya sunucu arızaları</li>
                    <li>• Müşteri kaynaklı veri kayıpları</li>
                    <li>• Doğal afetler ve mücbir sebepler</li>
                    <li>• Yasalar gereği engellenmiş içerikler</li>
                    <li>• Müşterinin yanlış bilgi vermesinden kaynaklanan sorunlar</li>
                  </ul>
                </div>
              </div>

              {/* Hizmet Sürekliliği */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">7. Hizmet Sürekliliği ve Destek</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-0 bg-green-50">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-slate-900 mb-3">Garanti Kapsamı</h3>
                      <ul className="text-sm text-slate-700 space-y-2">
                        <li>• Web siteleri için 1 yıl teknik destek</li>
                        <li>• Mobil uygulamalar için 6 ay garanti</li>
                        <li>• Kritik hataların ücretsiz düzeltilmesi</li>
                        <li>• Güvenlik güncellemelerinin yapılması</li>
                        <li>• 7/24 acil durum desteği</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-0 bg-blue-50">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-slate-900 mb-3">Ek Hizmetler</h3>
                      <ul className="text-sm text-slate-700 space-y-2">
                        <li>• İçerik güncellemeleri (ücretli)</li>
                        <li>• Yeni özellik eklemeleri (ücretli)</li>
                        <li>• Tasarım değişiklikleri (ücretli)</li>
                        <li>• Performans optimizasyonu</li>
                        <li>• SEO iyileştirmeleri</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Gizlilik */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">8. Gizlilik ve Veri Koruma</h2>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <p className="text-slate-700 mb-4">
                    Kişisel verilerinizin korunması bizim için önemlidir. Detaylı bilgi için
                    <a href="/gizlilik-politikasi" className="text-blue-600 hover:underline ml-1">
                      Gizlilik Politikamızı
                    </a>{" "}
                    inceleyebilirsiniz.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700">
                    <div>
                      <strong>Taahhütlerimiz:</strong>
                      <ul className="mt-2 space-y-1">
                        <li>• Verilerinizi üçüncü taraflarla paylaşmayız</li>
                        <li>• Güvenli şifreleme kullanırız</li>
                        <li>• KVKK'ya tam uyum sağlarız</li>
                      </ul>
                    </div>
                    <div>
                      <strong>Haklarınız:</strong>
                      <ul className="mt-2 space-y-1">
                        <li>• Verilerinizi görme hakkı</li>
                        <li>• Düzeltme ve silme hakkı</li>
                        <li>• İşleme itiraz etme hakkı</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Uyuşmazlık Çözümü */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">9. Uyuşmazlık Çözümü</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-400 pl-4">
                    <h3 className="font-semibold text-slate-900 mb-2">1. Dostane Çözüm</h3>
                    <p className="text-slate-700">
                      Öncelikle doğrudan iletişim kurarak sorunları çözmeye çalışırız. Çoğu sorun bu aşamada çözülür.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-400 pl-4">
                    <h3 className="font-semibold text-slate-900 mb-2">2. Arabuluculuk</h3>
                    <p className="text-slate-700">
                      Dostane çözüm sağlanamazsa, tarafsız bir arabulucu ile sorunu çözmeye çalışırız.
                    </p>
                  </div>

                  <div className="border-l-4 border-orange-400 pl-4">
                    <h3 className="font-semibold text-slate-900 mb-2">3. Yasal Süreç</h3>
                    <p className="text-slate-700">
                      Son çare olarak Antalya Mahkemeleri ve İcra Müdürlükleri yetkili olacaktır. Türkiye Cumhuriyeti
                      yasaları uygulanır.
                    </p>
                  </div>
                </div>
              </div>

              {/* İletişim */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">10. İletişim</h2>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <p className="text-slate-700 mb-4">
                    Bu kullanım koşulları hakkında sorularınız varsa bizimle iletişime geçebilirsiniz:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
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
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Hukuki İşler</h3>
                      <p className="text-slate-700 text-sm">
                        E-posta: hukuk@oniva.com.tr
                        <br />
                        Konu: "Kullanım Koşulları"
                        <br />
                        Yanıt süresi: 5 iş günü
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Son Hükümler */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">11. Son Hükümler</h2>
                <div className="space-y-4 text-slate-700">
                  <p>
                    Bu kullanım koşulları, taraflar arasındaki tüm anlaşmayı oluşturur ve önceki tüm sözlü veya yazılı
                    anlaşmaların yerini alır.
                  </p>
                  <p>
                    Koşulların herhangi bir maddesi geçersiz sayılırsa, diğer maddeler geçerliliğini korumaya devam
                    eder.
                  </p>
                  <p>Bu koşullar Türkiye Cumhuriyeti yasalarına tabidir ve Türkçe versiyonu geçerlidir.</p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mt-6">
                    <p className="font-semibold text-blue-900 mb-2">Yürürlük Tarihi:</p>
                    <p className="text-blue-800">
                      Bu kullanım koşulları 1 Ocak 2024 tarihinden itibaren yürürlüktedir.
                    </p>
                  </div>
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
