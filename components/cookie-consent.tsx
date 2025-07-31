"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Cookie, X, Settings, Shield, BarChart, Target } from "lucide-react"

interface CookiePreferences {
  necessary: boolean
  performance: boolean
  functionality: boolean
  marketing: boolean
}

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, cannot be disabled
    performance: false,
    functionality: false,
    marketing: false,
  })

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("cookie-consent")
    if (!cookieConsent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      performance: true,
      functionality: true,
      marketing: true,
    }
    setPreferences(allAccepted)
    saveCookiePreferences(allAccepted)
    setIsVisible(false)
  }

  const handleAcceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      performance: false,
      functionality: false,
      marketing: false,
    }
    setPreferences(necessaryOnly)
    saveCookiePreferences(necessaryOnly)
    setIsVisible(false)
  }

  const handleSaveCustom = () => {
    saveCookiePreferences(preferences)
    setIsVisible(false)
    setShowSettings(false)
  }

  const saveCookiePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem("cookie-consent", JSON.stringify(prefs))
    localStorage.setItem("cookie-consent-date", new Date().toISOString())

    // Here you would typically initialize/disable tracking services based on preferences
    if (prefs.performance) {
      // Initialize Google Analytics, etc.
      console.log("Performance cookies enabled")
    }
    if (prefs.functionality) {
      // Initialize functionality cookies
      console.log("Functionality cookies enabled")
    }
    if (prefs.marketing) {
      // Initialize marketing cookies (Facebook Pixel, Google Ads, etc.)
      console.log("Marketing cookies enabled")
    }
  }

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === "necessary") return // Cannot disable necessary cookies
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  if (!isVisible) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50" />

      {/* Cookie Consent Modal */}
      <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50">
        <Card className="border-0 bg-white shadow-2xl">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <Cookie className="h-8 w-8 text-orange-500 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-slate-900">Bu site çerezleri kullanır</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0 text-slate-400 hover:text-slate-600"
                    onClick={() => setIsVisible(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm text-slate-600 mb-4">
                  Web sitemizde deneyiminizi iyileştirmek, site performansını analiz etmek ve size özel içerik sunmak
                  için çerezler kullanıyoruz.
                </p>

                {!showSettings ? (
                  <div className="flex flex-col gap-2">
                    <Button onClick={handleAcceptAll} className="bg-orange-500 hover:bg-orange-600 text-white w-full">
                      Tümünü Kabul Et
                    </Button>
                    <div className="flex gap-2">
                      <Button
                        onClick={handleAcceptNecessary}
                        variant="outline"
                        className="border-slate-300 bg-transparent flex-1"
                      >
                        Sadece Gerekli
                      </Button>
                      <Button onClick={() => setShowSettings(true)} variant="ghost" className="text-slate-600 flex-1">
                        <Settings className="h-4 w-4 mr-2" />
                        Ayarlar
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <h4 className="font-semibold text-slate-900 text-sm">Çerez Tercihlerinizi Seçin:</h4>

                    {/* Necessary Cookies */}
                    <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Shield className="h-5 w-5 text-red-500" />
                        <div>
                          <div className="font-medium text-sm text-slate-900">Zorunlu Çerezler</div>
                          <div className="text-xs text-slate-600">Site işlevselliği için gerekli</div>
                        </div>
                      </div>
                      <div className="text-xs text-slate-500 bg-red-100 px-2 py-1 rounded">Her zaman aktif</div>
                    </div>

                    {/* Performance Cookies */}
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <BarChart className="h-5 w-5 text-blue-500" />
                        <div>
                          <div className="font-medium text-sm text-slate-900">Performans Çerezleri</div>
                          <div className="text-xs text-slate-600">Site performansını iyileştirmek için</div>
                        </div>
                      </div>
                      <button
                        onClick={() => togglePreference("performance")}
                        className={`w-10 h-6 rounded-full transition-colors ${
                          preferences.performance ? "bg-green-500" : "bg-slate-300"
                        }`}
                      >
                        <div
                          className={`w-4 h-4 bg-white rounded-full transition-transform ${
                            preferences.performance ? "translate-x-5" : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>

                    {/* Functionality Cookies */}
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Settings className="h-5 w-5 text-green-500" />
                        <div>
                          <div className="font-medium text-sm text-slate-900">İşlevsellik Çerezleri</div>
                          <div className="text-xs text-slate-600">Kişiselleştirilmiş deneyim için</div>
                        </div>
                      </div>
                      <button
                        onClick={() => togglePreference("functionality")}
                        className={`w-10 h-6 rounded-full transition-colors ${
                          preferences.functionality ? "bg-green-500" : "bg-slate-300"
                        }`}
                      >
                        <div
                          className={`w-4 h-4 bg-white rounded-full transition-transform ${
                            preferences.functionality ? "translate-x-5" : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>

                    {/* Marketing Cookies */}
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Target className="h-5 w-5 text-purple-500" />
                        <div>
                          <div className="font-medium text-sm text-slate-900">Pazarlama Çerezleri</div>
                          <div className="text-xs text-slate-600">Hedefli reklamlar için</div>
                        </div>
                      </div>
                      <button
                        onClick={() => togglePreference("marketing")}
                        className={`w-10 h-6 rounded-full transition-colors ${
                          preferences.marketing ? "bg-green-500" : "bg-slate-300"
                        }`}
                      >
                        <div
                          className={`w-4 h-4 bg-white rounded-full transition-transform ${
                            preferences.marketing ? "translate-x-5" : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button
                        onClick={handleSaveCustom}
                        className="bg-orange-500 hover:bg-orange-600 text-white flex-1"
                      >
                        Seçimleri Kaydet
                      </Button>
                      <Button
                        onClick={() => setShowSettings(false)}
                        variant="outline"
                        className="border-slate-300 bg-transparent"
                      >
                        Geri
                      </Button>
                    </div>
                  </div>
                )}

                <div className="mt-3 pt-3 border-t border-slate-200">
                  <p className="text-xs text-slate-500">
                    Daha fazla bilgi için{" "}
                    <a href="/cerez-politikasi" className="text-blue-600 hover:underline">
                      Çerez Politikamızı
                    </a>{" "}
                    inceleyebilirsiniz.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
