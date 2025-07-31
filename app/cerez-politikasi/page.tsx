import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Cookie, Settings, BarChart, Target, Shield, Eye } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Çerez Politikası - Oniva",
  description:
    "Oniva çerez politikası. Web sitemizde kullanılan çerezler ve veri toplama yöntemleri hakkında detaylı bilgiler.",
  robots: { index: true, follow: true },
}

export default function CerezPolitikasiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-orange-100 text-orange-700">
              <Cookie className="w-4 h-4 mr-2" />
              Çerez Politikası
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Çerez{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Kullanımı
              </span>{" "}
              ve Politikamız
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Web sitemizde kullanılan çerezler, amaçları ve bu çerezleri nasıl yönetebileceğiniz hakkında detaylı
              bilgiler. Çerez tercihlerinizi istediğiniz zaman değiştirebilirsiniz.
            </p>
            <div className="mt-8 text-sm text-slate-500">Son güncelleme: 1 Ocak 2024</div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto prose prose-slate max-w-none">
            <div className="space-y-12">
              {/* Çerez Nedir */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                  <Cookie className="h-6 w-6 text-orange-500 mr-3" />
                  1. Çerez Nedir?
                </h2>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <p className="text-slate-700 mb-4">
                    Çerezler, web sitelerinin ziyaretçilerin bilgisayarlarında veya mobil cihazlarında sakladığı küçük
                    metin dosyalarıdır. Bu dosyalar, web sitesinin daha iyi çalışmasını ve kullanıcı deneyiminin
                    iyileştirilmesini sağlar.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700">
                    <div>
                      <strong>Çerezlerin Faydaları:</strong>
                      <ul className="mt-2 space-y-1">
                        <li>• Tercihlerinizi hatırlar</li>
                        <li>• Site performansını iyileştirir</li>
                        <li>• Kişiselleştirilmiş deneyim sunar</li>
                        <li>• Güvenliği artırır</li>
                      </ul>
                    </div>
                    <div>
                      <strong>Çerez Türleri:</strong>
                      <ul className="mt-2 space-y-1">
                        <li>• Oturum çerezleri (geçici)</li>
                        <li>• Kalıcı çerezler (uzun süreli)</li>
                        <li>• Birinci taraf çerezleri</li>
                        <li>• Üçüncü taraf çerezleri</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Kullandığımız Çerezler */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">2. Kullandığımız Çerez Türleri</h2>
                <div className="grid gap-6">
                  {/* Zorunlu Çerezler */}
                  <Card className="border-0 bg-red-50">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Shield className="h-8 w-8 text-red-500 flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-slate-900 mb-3">
                            Zorunlu Çerezler
                            <Badge className="ml-2 bg-red-500 text-white text-xs">Gerekli</Badge>
                          </h3>
                          <p className="text-slate-700 mb-3">
                            Web sitesinin temel işlevlerini yerine getirmesi için gerekli çerezlerdir. Bu çerezler
                            olmadan site düzgün çalışmaz.
                          </p>
                          <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <strong>Amaçları:</strong>
                              <ul className="mt-1 space-y-1 text-slate-600">
                                <li>• Oturum yönetimi</li>
                                <li>• Güvenlik sağlama</li>
                                <li>• Form verilerini koruma</li>
                                <li>• Dil tercihlerini hatırlama</li>
                              </ul>
                            </div>
                            <div>
                              <strong>Saklama Süresi:</strong>
                              <ul className="mt-1 space-y-1 text-slate-600">
                                <li>• Oturum süresi boyunca</li>
                                <li>• Maksimum 24 saat</li>
                                <li>• Tarayıcı kapatıldığında silinir</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Performans Çerezleri */}
                  <Card className="border-0 bg-blue-50">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <BarChart className="h-8 w-8 text-blue-500 flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-slate-900 mb-3">
                            Performans Çerezleri
                            <Badge className="ml-2 bg-blue-500 text-white text-xs">İsteğe Bağlı</Badge>
                          </h3>
                          <p className="text-slate-700 mb-3">
                            Web sitesinin performansını ölçmek ve iyileştirmek için kullanılan çerezlerdir. Anonim veri
                            toplar ve kişisel bilgi içermez.
                          </p>
                          <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <strong>Topladığı Veriler:</strong>
                              <ul className="mt-1 space-y-1 text-slate-600">
                                <li>• Sayfa görüntüleme sayıları</li>
                                <li>• Sayfa yükleme süreleri</li>
                                <li>• Hata raporları</li>
                                <li>• Trafik kaynakları</li>
                              </ul>
                            </div>
                            <div>
                              <strong>Kullanılan Hizmetler:</strong>
                              <ul className="mt-1 space-y-1 text-slate-600">
                                <li>• Google Analytics</li>
                                <li>• Google Search Console</li>
                                <li>• Hotjar (heatmap)</li>
                                <li>• GTM (Tag Manager)</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* İşlevsellik Çerezleri */}
                  <Card className="border-0 bg-green-50">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Settings className="h-8 w-8 text-green-500 flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-slate-900 mb-3">
                            İşlevsellik Çerezleri
                            <Badge className="ml-2 bg-green-500 text-white text-xs">İsteğe Bağlı</Badge>
                          </h3>
                          <p className="text-slate-700 mb-3">
                            Kullanıcı tercihlerini hatırlayarak daha kişiselleştirilmiş bir deneyim sunan çerezlerdir.
                          </p>
                          <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <strong>Hatırladığı Bilgiler:</strong>
                              <ul className="mt-1 space-y-1 text-slate-600">
                                <li>• Dil tercihleri</li>
                                <li>• Tema seçimleri (açık/koyu)</li>
                                <li>• Form bilgileri</li>
                                <li>• Bölge ayarları</li>
                              </ul>
                            </div>
                            <div>
                              <strong>Saklama Süresi:</strong>
                              <ul className="mt-1 space-y-1 text-slate-600">
                                <li>• 30 gün - 1 yıl arası</li>
                                <li>• Kullanıcı silene kadar</li>
                                <li>• Tarayıcı ayarlarına bağlı</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Pazarlama Çerezleri */}
                  <Card className="border-0 bg-purple-50">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Target className="h-8 w-8 text-purple-500 flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-slate-900 mb-3">
                            Pazarlama Çerezleri
                            <Badge className="ml-2 bg-purple-500 text-white text-xs">İsteğe Bağlı</Badge>
                          </h3>
                          <p className="text-slate-700 mb-3">
                            Size daha alakalı reklamlar göstermek ve pazarlama kampanyalarının etkinliğini ölçmek için
                            kullanılır.
                          </p>
                          <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <strong>Kullanım Alanları:</strong>
                              <ul className="mt-1 space-y-1 text-slate-600">
                                <li>• Hedefli reklamlar</li>
                                <li>• Sosyal medya entegrasyonu</li>
                                <li>• Remarketing kampanyaları</li>
                                <li>• Dönüşüm takibi</li>
                              </ul>
                            </div>
                            <div>
                              <strong>Üçüncü Taraf Hizmetler:</strong>
                              <ul className="mt-1 space-y-1 text-slate-600">
                                <li>• Google Ads</li>
                                <li>• Facebook Pixel</li>
                                <li>• LinkedIn Insight</li>
                                <li>• Twitter Analytics</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Çerez Yönetimi */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">3. Çerez Tercihlerinizi Nasıl Yönetirsiniz?</h2>
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-slate-900 mb-3 flex items-center">
                      <Eye className="h-5 w-5 text-blue-500 mr-2" />
                      Tarayıcı Ayarları
                    </h3>
                    <p className="text-slate-700 mb-4">
                      Çoğu tarayıcı çerezleri otomatik olarak kabul eder, ancak bu ayarları değiştirebilirsiniz:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700">
                      <div>
                        <strong>Chrome:</strong>
                        <p>Ayarlar → Gizlilik ve güvenlik → Çerezler</p>

                        <strong className="block mt-3">Firefox:</strong>
                        <p>Ayarlar → Gizlilik ve Güvenlik → Çerezler</p>
                      </div>
                      <div>
                        <strong>Safari:</strong>
                        <p>Tercihler → Gizlilik → Çerezleri yönet</p>

                        <strong className="block mt-3">Edge:</strong>
                        <p>Ayarlar → Site izinleri → Çerezler</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-slate-900 mb-3">Çerez Tercihleri</h3>
                    <p className="text-slate-700 mb-4">
                      Web sitemizde çerez tercihlerinizi aşağıdaki seçeneklerle yönetebilirsiniz:
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-white rounded border">
                        <div>
                          <strong className="text-slate-900">Zorunlu Çerezler</strong>
                          <p className="text-sm text-slate-600">Site işlevselliği için gerekli</p>
                        </div>
                        <div className="text-sm text-slate-500">Her zaman aktif</div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-white rounded border">
                        <div>
                          <strong className="text-slate-900">Performans Çerezleri</strong>
                          <p className="text-sm text-slate-600">Site performansını iyileştirmek için</p>
                        </div>
                        <Button size="sm" variant="outline">
                          Yönet
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-white rounded border">
                        <div>
                          <strong className="text-slate-900">İşlevsellik Çerezleri</strong>
                          <p className="text-sm text-slate-600">Kişiselleştirilmiş deneyim için</p>
                        </div>
                        <Button size="sm" variant="outline">
                          Yönet
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-white rounded border">
                        <div>
                          <strong className="text-slate-900">Pazarlama Çerezleri</strong>
                          <p className="text-sm text-slate-600">Hedefli reklamlar için</p>
                        </div>
                        <Button size="sm" variant="outline">
                          Yönet
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Üçüncü Taraf Çerezleri */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">4. Üçüncü Taraf Çerezleri</h2>
                <div className="space-y-6">
                  <p className="text-slate-700">
                    Web sitemizde bazı üçüncü taraf hizmetler kullanıyoruz. Bu hizmetler kendi çerez politikalarına
                    sahiptir:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-0 bg-slate-50">
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-slate-900 mb-3">Google Hizmetleri</h3>
                        <ul className="text-sm text-slate-700 space-y-2">
                          <li>
                            • <strong>Google Analytics:</strong> Site trafiği analizi
                          </li>
                          <li>
                            • <strong>Google Ads:</strong> Reklam performansı
                          </li>
                          <li>
                            • <strong>Google Fonts:</strong> Web fontları
                          </li>
                          <li>
                            • <strong>reCAPTCHA:</strong> Spam koruması
                          </li>
                        </ul>
                        <a
                          href="https://policies.google.com/privacy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline text-sm mt-3 inline-block"
                        >
                          Google Gizlilik Politikası →
                        </a>
                      </CardContent>
                    </Card>

                    <Card className="border-0 bg-slate-50">
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-slate-900 mb-3">Sosyal Medya</h3>
                        <ul className="text-sm text-slate-700 space-y-2">
                          <li>
                            • <strong>Facebook:</strong> Sosyal medya entegrasyonu
                          </li>
                          <li>
                            • <strong>Instagram:</strong> İçerik paylaşımı
                          </li>
                          <li>
                            • <strong>LinkedIn:</strong> Profesyonel ağ
                          </li>
                          <li>
                            • <strong>Twitter:</strong> Sosyal paylaşım
                          </li>
                        </ul>
                        <p className="text-sm text-slate-600 mt-3">
                          Her platform kendi gizlilik politikasına sahiptir.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Çerez Silme */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">5. Çerezleri Nasıl Silersiniz?</h2>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                  <h3 className="font-semibold text-slate-900 mb-3">Önemli Uyarı</h3>
                  <p className="text-slate-700 mb-4">
                    Çerezleri silerseniz, web sitesinin bazı özellikleri düzgün çalışmayabilir ve tercihleriniz
                    kaybolabilir.
                  </p>
                  <div className="space-y-3 text-sm text-slate-700">
                    <div>
                      <strong>Tüm Çerezleri Silmek İçin:</strong>
                      <p>Tarayıcınızın ayarlarından "Tarama verilerini temizle" seçeneğini kullanın.</p>
                    </div>
                    <div>
                      <strong>Belirli Çerezleri Silmek İçin:</strong>
                      <p>Tarayıcınızın geliştirici araçlarından veya çerez yönetimi bölümünden silebilirsiniz.</p>
                    </div>
                    <div>
                      <strong>Otomatik Silme:</strong>
                      <p>Tarayıcınızı her kapatışınızda çerezlerin silinmesi için ayar yapabilirsiniz.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Güncellemeler */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">6. Politika Güncellemeleri</h2>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <p className="text-slate-700 mb-4">
                    Bu çerez politikası zaman zaman güncellenebilir. Önemli değişiklikler olduğunda:
                  </p>
                  <ul className="text-slate-700 space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      Web sitemizde güncel politikayı yayınlarız
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      E-posta ile bilgilendirme yaparız (gerekirse)
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      Yeni çerez onayı isteyebiliriz
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      Değişiklik tarihi sayfada belirtilir
                    </li>
                  </ul>
                </div>
              </div>

              {/* İletişim */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">7. İletişim</h2>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <p className="text-slate-700 mb-4">
                    Çerez politikamız hakkında sorularınız varsa bizimle iletişime geçebilirsiniz:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Genel Sorular</h3>
                      <p className="text-slate-700 text-sm">
                        E-posta: info@oniva.com.tr
                        <br />
                        Telefon: 0850 840 4411
                        <br />
                        Konu: "Çerez Politikası"
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Veri Koruma</h3>
                      <p className="text-slate-700 text-sm">
                        E-posta: kvkk@oniva.com.tr
                        <br />
                        Konu: "Çerez Yönetimi"
                        <br />
                        Yanıt süresi: 5 iş günü
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Son Notlar */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">8. Son Notlar</h2>
                <div className="space-y-4 text-slate-700">
                  <p>
                    Bu çerez politikası, web sitemizde kullanılan tüm çerez türlerini kapsar ve KVKK (Kişisel Verilerin
                    Korunması Kanunu) ile uyumludur.
                  </p>
                  <p>
                    Çerezleri reddetmeniz durumunda web sitemizin bazı özelliklerini kullanamayabilirsiniz, ancak temel
                    işlevler çalışmaya devam edecektir.
                  </p>
                  <p>
                    Daha detaylı bilgi için{" "}
                    <a href="/gizlilik-politikasi" className="text-blue-600 hover:underline">
                      Gizlilik Politikamızı
                    </a>{" "}
                    inceleyebilirsiniz.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mt-6">
                    <p className="font-semibold text-blue-900 mb-2">Yürürlük Tarihi:</p>
                    <p className="text-blue-800">Bu çerez politikası 1 Ocak 2024 tarihinden itibaren yürürlüktedir.</p>
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
