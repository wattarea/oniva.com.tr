"use server"

import { redirect } from "next/navigation"

export async function submitPackageForm(formData: FormData) {
  // Simulate processing time
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Form verilerini al
  const packageData = {
    // Paket bilgileri
    packageId: formData.get("packageId"),
    serviceName: formData.get("serviceName"),
    packageName: formData.get("packageName"),
    packagePrice: formData.get("packagePrice"),

    // Müşteri bilgileri
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    company: formData.get("company"),

    // Proje bilgileri
    startDate: formData.get("startDate"),
    industry: formData.get("industry"),
    projectDetails: formData.get("projectDetails"),
    referralSource: formData.get("referralSource"),

    // Meta bilgiler
    consent: formData.get("consent"),
    submittedAt: new Date().toISOString(),
    userAgent: formData.get("userAgent") || "Unknown",
    ipAddress: "Unknown", // Server-side'da req.ip ile alınabilir
  }

  // Validation
  if (!packageData.fullName || !packageData.email || !packageData.phone) {
    throw new Error("Zorunlu alanlar eksik")
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(packageData.email as string)) {
    throw new Error("Geçersiz e-posta adresi")
  }

  // Burada normalde:
  // 1. Veritabanına kaydetme
  // 2. E-posta gönderme
  // 3. CRM entegrasyonu
  // 4. Slack/Discord bildirim

  console.log("📦 YENİ PAKET TALEBİ ALINDI:")
  console.log("=" * 50)
  console.log(`📋 Paket: ${packageData.packageName} (${packageData.serviceName})`)
  console.log(`💰 Fiyat: ${packageData.packagePrice}`)
  console.log(`👤 Müşteri: ${packageData.fullName}`)
  console.log(`📧 E-posta: ${packageData.email}`)
  console.log(`📱 Telefon: ${packageData.phone}`)
  console.log(`🏢 Şirket: ${packageData.company || "Belirtilmemiş"}`)
  console.log(`🏭 Sektör: ${packageData.industry || "Belirtilmemiş"}`)
  console.log(`📅 Başlangıç: ${packageData.startDate || "Esnek"}`)
  console.log(`📝 Detaylar: ${packageData.projectDetails || "Yok"}`)
  console.log(`📢 Kaynak: ${packageData.referralSource || "Belirtilmemiş"}`)
  console.log(`⏰ Tarih: ${packageData.submittedAt}`)
  console.log("=" * 50)

  // E-posta gönderme simülasyonu
  console.log("📧 E-posta gönderiliyor...")

  // Müşteriye otomatik yanıt
  console.log(`✅ Otomatik yanıt gönderildi: ${packageData.email}`)

  // Size bildirim
  console.log("🔔 Admin bildirim gönderildi")

  // Başarı sayfasına yönlendir
  redirect("/paket-sec/tesekkurler?paket=" + encodeURIComponent(packageData.packageName as string))
}
