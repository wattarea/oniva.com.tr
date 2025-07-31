import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight, Clock } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog - Dijital Pazarlama ve Web Teknolojileri | Oniva",
  description:
    "Web tasarım, yazılım geliştirme, dijital pazarlama ve teknoloji trendleri hakkında güncel makaleler. Uzman görüşleri ve ipuçları için Oniva blog'unu takip edin.",
  keywords: [
    "web tasarım blog",
    "dijital pazarlama makaleleri",
    "yazılım geliştirme",
    "SEO ipuçları",
    "teknoloji blog",
    "web teknolojileri",
  ],
  openGraph: {
    title: "Blog - Dijital Pazarlama ve Web Teknolojileri",
    description: "Web tasarım, yazılım geliştirme ve dijital pazarlama hakkında güncel makaleler.",
    url: "https://oniva.com.tr/blog",
  },
}

export default function BlogPage() {
  const blogPosts = [
    {
      title: "2024'te Web Tasarım Trendleri",
      excerpt: "Bu yıl web tasarımında öne çıkan trendler ve gelecek yıl için beklentiler.",
      author: "Oniva Ekibi",
      date: "15 Aralık 2024",
      readTime: "5 dk",
      category: "Web Tasarım",
      image: "/placeholder.svg?height=200&width=400&text=Web+Tasarım+Trendleri",
      slug: "2024-web-tasarim-trendleri",
    },
    {
      title: "SEO'da Yapılan En Yaygın 10 Hata",
      excerpt: "Web sitenizin arama motorlarında görünürlüğünü artırmak için kaçınmanız gereken hatalar.",
      author: "Oniva Ekibi",
      date: "10 Aralık 2024",
      readTime: "7 dk",
      category: "Dijital Pazarlama",
      image: "/placeholder.svg?height=200&width=400&text=SEO+Hataları",
      slug: "seo-yapilan-en-yaygin-hatalar",
    },
    {
      title: "Mobil Uygulama Geliştirmede React Native vs Flutter",
      excerpt: "İki popüler cross-platform framework'ün detaylı karşılaştırması.",
      author: "Oniva Ekibi",
      date: "5 Aralık 2024",
      readTime: "8 dk",
      category: "Mobil Geliştirme",
      image: "/placeholder.svg?height=200&width=400&text=React+Native+vs+Flutter",
      slug: "react-native-vs-flutter-karsilastirma",
    },
    {
      title: "E-Ticaret Sitesi Kurarken Dikkat Edilmesi Gerekenler",
      excerpt: "Başarılı bir e-ticaret sitesi için gerekli özellikler ve stratejiler.",
      author: "Oniva Ekibi",
      date: "1 Aralık 2024",
      readTime: "6 dk",
      category: "E-Ticaret",
      image: "/placeholder.svg?height=200&width=400&text=E-Ticaret+Rehberi",
      slug: "e-ticaret-sitesi-kurma-rehberi",
    },
    {
      title: "Yapay Zeka ve Web Geliştirme",
      excerpt: "AI teknolojilerinin web geliştirme süreçlerine etkisi ve gelecek öngörüleri.",
      author: "Oniva Ekibi",
      date: "25 Kasım 2024",
      readTime: "9 dk",
      category: "Teknoloji",
      image: "/placeholder.svg?height=200&width=400&text=AI+ve+Web+Geliştirme",
      slug: "yapay-zeka-web-gelistirme",
    },
    {
      title: "Google Analytics 4 Rehberi",
      excerpt: "GA4'ün özelliklerini keşfedin ve web sitenizin performansını ölçün.",
      author: "Oniva Ekibi",
      date: "20 Kasım 2024",
      readTime: "10 dk",
      category: "Analitik",
      image: "/placeholder.svg?height=200&width=400&text=Google+Analytics+4",
      slug: "google-analytics-4-rehberi",
    },
  ]

  const categories = [
    "Tümü",
    "Web Tasarım",
    "Dijital Pazarlama",
    "Mobil Geliştirme",
    "E-Ticaret",
    "Teknoloji",
    "Analitik",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-orange-100 text-orange-700">Blog</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
              Dijital Dünyadan{" "}
              <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
                Haberler
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Web tasarım, yazılım geliştirme, dijital pazarlama ve teknoloji trendleri hakkında güncel makaleler ve
              uzman görüşleri.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-10 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={`${
                  index === 0
                    ? "bg-orange-500 hover:bg-orange-600 text-white"
                    : "border-slate-300 hover:bg-orange-50 hover:border-orange-500 hover:text-orange-600"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-orange-500 text-white">{post.category}</Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 mb-4 line-clamp-3">{post.excerpt}</p>

                    <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-slate-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </div>
                      <Button variant="ghost" className="text-orange-500 hover:text-orange-600 hover:bg-orange-50 p-2">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-blue-600">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Blog Güncellemelerini Kaçırmayın</h2>
            <p className="text-xl text-white/90 mb-8">
              Yeni makalelerimizden haberdar olmak için e-posta listemize katılın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button className="bg-white text-slate-900 hover:bg-slate-100 px-6">Abone Ol</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
