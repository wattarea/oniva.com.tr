"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Header() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const menuItems = [
    { href: "/", label: "Anasayfa", color: "from-orange-500 to-red-500" },
    { href: "/hakkimizda", label: "Bizi Tanıyın", color: "from-blue-500 to-cyan-500" },
    { href: "/hizmetlerimiz", label: "Hizmetlerimiz", color: "from-green-500 to-emerald-500" },
    { href: "/referanslarimiz", label: "Referanslarımız", color: "from-purple-500 to-pink-500" },
    { href: "/iletisim", label: "Bize Ulaşın", color: "from-indigo-500 to-blue-500" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <a href="/" className="transform hover:scale-105 transition-transform duration-300">
              <img src="/oniva-logo.png" alt="Oniva Logo" className="h-10 w-auto" />
            </a>
            <div className="hidden sm:flex items-center space-x-2 text-slate-600">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <a href="tel:08508404411" className="font-medium hover:text-orange-500 transition-colors duration-300">
                0850 840 4411
              </a>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 font-medium text-slate-600 transition-all duration-300 hover:text-slate-900 rounded-lg hover:bg-slate-50"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-1/2 h-0.5 bg-orange-500 transition-all duration-300 transform -translate-x-1/2 ${
                    hoveredIndex === index ? "w-8" : "w-0"
                  }`}
                />
              </a>
            ))}
          </nav>

          <Button
            variant="ghost"
            className="md:hidden hover:bg-orange-50 hover:text-orange-500 transition-all duration-300"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  )
}
