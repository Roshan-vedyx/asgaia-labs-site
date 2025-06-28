'use client'

import { useState } from "react"
//import { Button } from "@/components/ui/button"
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"
import { Menu, X } from "lucide-react"

export default function StudioPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#tools", label: "Our Tools" },
    { href: "/#community", label: "Community" },
    { href: "/#contact", label: "Contact" },
  ]

  const products = [
    {
      name: "Asgaia ClarityKey",
      desc: "On-page reading and focus help (Chrome extension)",
      format: "Freemium",
      download: "/downloads/claritykey.zip",
    },
    {
      name: "Asgaia Talk",
      desc: "Dyslexia-friendly TTS for any website",
      format: "Web + embed",
    },
    {
      name: "Asgaia Flash",
      desc: "Flashcards from textbooks or YouTube",
      format: "Web app + API",
    },
    {
      name: "Asgaia Notes",
      desc: "Visual summariser for neurodivergent minds",
      format: "Web + GPT",
    },
    {
      name: "Asgaia Quiet",
      desc: "A calm CRM for ADHD freelancers",
      format: "B2C SaaS",
    },
    {
      name: "Asgaia Forms",
      desc: "Convert complex forms into easy questions",
      format: "API + plugin",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-green-50">
      {/* Navbar */}
      <header className="px-4 lg:px-6 h-16 flex items-center bg-white/80 backdrop-blur-sm border-b border-teal-100">
        <Link href="/" className="flex items-center">
          <Image src="/asgaia.jpg" alt="Asgaia Labs Logo" width={32} height={32} className="rounded" />
          <span className="ml-2 text-xl font-bold text-gray-800">Asgaia Labs</span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          className="ml-auto md:hidden p-2 rounded-md focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {menuOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-4 py-3 text-gray-800 hover:bg-teal-100"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <main className="flex-1 py-16">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-block bg-teal-100 px-4 py-2 text-sm font-medium text-teal-800">Asgaia Studio</div>
            <h1 className="text-4xl font-bold sm:text-5xl text-gray-800">Tools that support your mind</h1>
            <p className="max-w-3xl mx-auto text-gray-600 md:text-xl">
              Explore our growing suite of inclusive products built by and for neurodivergent users.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <Card key={index} className="bg-white/90 border-teal-200">
                <CardHeader>
                  <CardTitle className="text-gray-800 text-lg">{product.name}</CardTitle>
                  <CardDescription className="text-teal-700 text-sm">{product.format}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{product.desc}</p>
                  {product.download && (
                    <a
                      href={product.download}
                      className="inline-block bg-teal-500 text-white text-sm px-4 py-2 rounded shadow hover:bg-teal-600"
                      download
                    >
                      Download Extension
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
