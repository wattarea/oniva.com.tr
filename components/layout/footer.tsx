import { Facebook, Instagram, Twitter, Linkedin, Shield, CreditCard } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="space-y-4">
            <img src="/oniva-logo.png" alt="Oniva Logo" className="h-10 w-auto brightness-0 invert" />
            <p className="text-slate-400">Dijital dünyada fark yaratan çözümler üretiyoruz.</p>

            {/* Sosyal Medya */}
            <div>
              <h4 className="font-semibold mb-3 text-white">Sosyal Medya</h4>
              <div className="flex space-x-3">
                <a
                  href="https://facebook.com/oniva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Facebook className="h-4 w-4 text-white" />
                </a>
                <a
                  href="https://instagram.com/oniva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
                >
                  <Instagram className="h-4 w-4 text-white" />
                </a>
                <a
                  href="https://twitter.com/oniva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors"
                >
                  <Twitter className="h-4 w-4 text-white" />
                </a>
                <a
                  href="https://linkedin.com/company/oniva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <Linkedin className="h-4 w-4 text-white" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Hizmetler</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a
                  href="/hizmetlerimiz/web-tasarim"
                  className="relative inline-block py-1 transition-all duration-300 hover:text-white hover:pl-2 group"
                >
                  Web Tasarım
                  <span className="absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-300 w-0 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a
                  href="/hizmetlerimiz/web-yazilim"
                  className="relative inline-block py-1 transition-all duration-300 hover:text-white hover:pl-2 group"
                >
                  Web Yazılım
                  <span className="absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-300 w-0 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a
                  href="/hizmetlerimiz/mobil-uygulama"
                  className="relative inline-block py-1 transition-all duration-300 hover:text-white hover:pl-2 group"
                >
                  Mobil Uygulama
                  <span className="absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-300 w-0 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a
                  href="/hizmetlerimiz/dijital-pazarlama"
                  className="relative inline-block py-1 transition-all duration-300 hover:text-white hover:pl-2 group"
                >
                  Dijital Pazarlama
                  <span className="absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-300 w-0 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Şirket</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a
                  href="/hakkimizda"
                  className="relative inline-block py-1 transition-all duration-300 hover:text-white hover:pl-2 group"
                >
                  Hakkımızda
                  <span className="absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-300 w-0 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a
                  href="/referanslarimiz"
                  className="relative inline-block py-1 transition-all duration-300 hover:text-white hover:pl-2 group"
                >
                  Referanslar
                  <span className="absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-300 w-0 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="relative inline-block py-1 transition-all duration-300 hover:text-white hover:pl-2 group"
                >
                  Blog
                  <span className="absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-300 w-0 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a
                  href="/iletisim"
                  className="relative inline-block py-1 transition-all duration-300 hover:text-white hover:pl-2 group"
                >
                  İletişim
                  <span className="absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-300 w-0 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">İletişim</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a
                  href="mailto:info@oniva.com.tr"
                  className="relative inline-block py-1 transition-all duration-300 hover:text-white hover:pl-2 group"
                >
                  info@oniva.com.tr
                  <span className="absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-300 w-0 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a
                  href="tel:08508404411"
                  className="relative inline-block py-1 transition-all duration-300 hover:text-white hover:pl-2 group"
                >
                  0850 840 4411
                  <span className="absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-300 w-0 group-hover:w-full"></span>
                </a>
              </li>
              <li>Antalya, Türkiye</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Güvenli Ödeme</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-slate-400">
                <Shield className="h-5 w-5 text-green-400" />
                <span className="text-sm">SSL Sertifikalı</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-400">
                <CreditCard className="h-5 w-5 text-blue-400" />
                <span className="text-sm">256-bit Şifreleme</span>
              </div>

              {/* Ödeme Yöntemleri */}
              <div>
                <p className="text-sm text-slate-400 mb-2">Kabul Edilen Kartlar:</p>
                <div className="flex space-x-2">
                  <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                    VISA
                  </div>
                  <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">
                    MC
                  </div>
                  <div className="w-8 h-5 bg-blue-800 rounded text-white text-xs flex items-center justify-center font-bold">
                    AMEX
                  </div>
                </div>
              </div>

              <div className="text-xs text-slate-500">
                <p>✓ PCI DSS Uyumlu</p>
                <p>✓ 3D Secure Korumalı</p>
                <p>✓ Güvenli Ödeme Garantisi</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
            <p>&copy; 2024 Oniva. Tüm hakları saklıdır.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="/gizlilik-politikasi" className="hover:text-white transition-colors">
                Gizlilik Politikası
              </a>
              <a href="/kullanim-kosullari" className="hover:text-white transition-colors">
                Kullanım Koşulları
              </a>
              <a href="/cerez-politikasi" className="hover:text-white transition-colors">
                Çerez Politikası
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
