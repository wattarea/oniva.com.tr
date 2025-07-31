"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Star } from "lucide-react"

export default function ReferanslarimizPage() {
  const portfolioItems = [
    {
      title: "Sea Life Hotels",
      category: "Web Tasarım",
      description: "Lüks otel zinciri için responsive web tasarımı",
      image: "/portfolio/sealife-hotels.png",
      url: "https://sealifehotels.com",
      tags: ["HTML5", "CSS3", "JavaScript", "Booking System"],
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Senay Haspolat",
      category: "Web Tasarım",
      description: "Prof. Dr. Şenay Haspolat | Çocuk Noroloji Uzmanı",
      image: "/portfolio/senay-haspolat.png",
      url: "https://senayhaspolat.com",
      tags: ["Laravel", "Custom Design", "Kurumsal"],
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "The Oli Hotel",
      category: "Web Tasarım",
      description: "Butik otel için özel tasarım web sitesi",
      image: "/portfolio/theoli-hotel.png",
      url: "https://theolihotel.com",
      tags: ["React", "Booking API", "Responsive"],
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Travel to Turkey",
      category: "Web Yazılım",
      description: "Türkiye turizm rehberi ve tur rezervasyon platformu",
      image: "/portfolio/travel-turkey.png",
      url: "https://traveltoturkey.uk",
      tags: ["Next.js", "Payment Gateway", "Multi-language"],
      color: "from-green-500 to-green-600",
    },
    {
      title: "Upsun Transfer",
      category: "Web Yazılım",
      description: "Havalimanı transfer hizmeti rezervasyon sistemi",
      image: "/portfolio/upsun-transfer.png",
      url: "https://upsuntransfer.com",
      tags: ["Vue.js", "Real-time Booking", "GPS Integration"],
      color: "from-indigo-500 to-indigo-600",
    },
    {
      title: "Kaptan Yuva Anaokulları",
      category: "Web Tasarım",
      description: "Kaptan Yuva Anaokulları Kurumsal Web Sitesi",
      image: "/portfolio/kaptan-yuva.png",
      url: "https://kaptanyuva.com",
      tags: ["Laravel", "Menu Management", "Kurumsal"],
      color: "from-red-500 to-red-600",
    },
    {
      title: "Formül Sigorta",
      category: "Web Yazılım",
      description: "Sigorta şirketi web sitesi ve teklif alma sistemi",
      image: "/portfolio/formul-sigorta.png",
      url: "https://formulsigorta.com.tr",
      tags: ["Laravel", "Quote System", "CRM Integration"],
      color: "from-teal-500 to-teal-600",
    },
    {
      title: "Antalya Dog Club",
      category: "Web Tasarım",
      description: "Antalya'da faaliyet gösteren Köpek Eğitim Merkezi",
      image: "/portfolio/antalya-dog-club.png",
      url: "https://antalyadogclub.com",
      tags: ["Laravel", "Event Management", "Gallery"],
      color: "from-yellow-500 to-yellow-600",
    },
    {
      title: "Balonland",
      category: "Web Tasarım",
      description: "Şişme Oyun Ürünleri Üreticisi",
      image: "/portfolio/balonland.png",
      url: "https://balonland.com",
      tags: ["HTML5", "CSS3", "E-Ticaret"],
      color: "from-pink-500 to-pink-600",
    },
    {
      title: "Bintez UK",
      category: "Web Yazılım",
      description: "İngiltere merkezli Seyehat Turizm Ajansı",
      image: "/portfolio/bintez.png",
      url: "https://bintez.co.uk",
      tags: ["Shopify", "E-commerce", "Multi-currency"],
      color: "from-slate-500 to-slate-600",
    },
  ]

  const testimonials = [
    {
      name: "Ahmet Yılmaz",
      company: "Buelife Hotels",
      text: "Oniva ekibi ile çalışmak harika bir deneyimdi. Otel rezervasyon sistemimiz beklentilerimizi fazlasıyla karşıladı. Rezervasyonlarımız %150 arttı.",
      rating: 5,
    },
    {
      name: "Kerem Canpolat",
      company: "Kişisel Website",
      text: "Profesyonel portfolio web sitem sayesinde yeni müşteriler kazandım. Tasarım ve işlevsellik mükemmel bir şekilde birleştirilmiş.",
      rating: 5,
    },
    {
      name: "Mehmet Demir",
      company: "Travel to Turkey",
      text: "Turizm platformumuz sayesinde online satışlarımız %300 arttı. Çok dilli yapı ve ödeme sistemi kusursuz çalışıyor.",
      rating: 5,
    },
    {
      name: "Elif Kaya",
      company: "123 Sigorta",
      text: "Sigorta teklif sistemimiz müşteri memnuniyetini büyük ölçüde artırdı. Otomatik süreçler iş yükümüzü azalttı.",
      rating: 5,
    },
    {
      name: "Can Özkan",
      company: "UC Travel",
      text: "Tur rezervasyon sistemimiz 7/24 sorunsuz çalışıyor. Araçlardaki GPS entegrasyonu ve gerçek zamanlı takip mükemmel.",
      rating: 5,
    },
    {
      name: "Ayşe Yıldız",
      company: "Etkinlix Organizasyon",
      text: "Restoran web sitemiz ve rezervasyon sistemi müşteri deneyimini çok iyileştirdi. Online rezervasyonlar %200 arttı.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-orange-100 text-orange-700">Referanslarımız</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
              Başarı{" "}
              <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
                Hikayelerimiz
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Müşterilerimizle birlikte hayata geçirdiğimiz gerçek projeler ve elde ettiğimiz başarılı sonuçlar.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card
                key={index}
                className="group border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center`}
                    >
                      <Button
                        variant="ghost"
                        className="btn-ripple text-white border-white hover:bg-white hover:text-slate-900"
                        onClick={() => window.open(item.url, "_blank")}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Siteyi Ziyaret Et
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <Badge className="mb-2 text-xs">{item.category}</Badge>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4">Müşteri Yorumları</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Müşterilerimiz Ne Diyor?</h2>
            <p className="text-lg text-slate-600">Gerçek müşterilerimizden gelen samimi değerlendirmeler</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-500">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-orange-500 mb-2">10+</div>
              <div className="text-slate-600">Tamamlanan Proje</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-blue-500 mb-2">100%</div>
              <div className="text-slate-600">Müşteri Memnuniyeti</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-green-500 mb-2">5+</div>
              <div className="text-slate-600">Yıl Deneyim</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-purple-500 mb-2">24/7</div>
              <div className="text-slate-600">Teknik Destek</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
