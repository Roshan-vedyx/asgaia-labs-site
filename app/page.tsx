'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Heart, Users, Lightbulb, Shield, Mail, Phone, MapPin, Menu, X,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navItems = [
    { href: "#about", label: "About" },
    { href: "#tools", label: "Our Tools" },
    { href: "#community", label: "Community" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-green-50">
      {/* Navbar */}
      <header className="px-4 lg:px-6 h-16 flex items-center bg-white/80 backdrop-blur-sm border-b border-teal-100">
        <Link href="/" className="flex items-center">
          <Image src="/asgaia.jpg" alt="Asgaia Labs Logo" width={32} height={32} className="rounded" />
          <span className="ml-2 text-xl font-bold text-gray-800">Asgaia Labs</span>
        </Link>
        
        {/* Desktop nav */}
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="ml-auto md:hidden p-2 rounded-md focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile menu */}
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

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full pt-20 sm:pt-32 pb-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
              <div className="flex flex-col justify-center space-y-6">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl text-gray-800 leading-tight">
                  Technology that{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-green-600">
                    understands
                  </span>{" "}
                  you
                </h1>
                <p className="max-w-[600px] text-gray-600 md:text-xl leading-relaxed">
                  At Asgaia Labs, we create tools built by and for neurodivergent minds — helping you learn, focus, and thrive.
                </p>
                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <Button size="lg" className="bg-gradient-to-r from-teal-500 to-green-600 text-white shadow-lg">
                    Explore Our Tools
                  </Button>
                  <Button variant="outline" size="lg" className="border-teal-300 text-teal-700 hover:bg-teal-50">
                    Join Our Community
                  </Button>
                </div>
              </div>
              <div className="mx-auto mt-6">
                <Image
                  src="/people_working.jpg"
                  width={500}
                  height={500}
                  alt="Diverse people using assistive technology"
                  className="aspect-square overflow-hidden rounded-3xl object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="w-full py-16 bg-white/60">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-full bg-teal-100 px-4 py-2 text-sm font-medium text-teal-800">Our Mission</div>
              <h2 className="text-3xl font-bold sm:text-5xl text-gray-800">Built with empathy, designed for everyone</h2>
              <p className="max-w-3xl mx-auto text-gray-600 md:text-xl">
                We believe neurodiversity is a strength. That&apos;s why we build simple, beautiful tools that support the way your brain works — not how someone else thinks it should.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-8">
              {[
                { icon: <Heart className="w-12 h-12 mx-auto text-teal-500 mb-2" />, title: "Human-Centered", desc: "Our tools are grounded in real needs and lived experiences." },
                { icon: <Users className="w-12 h-12 mx-auto text-teal-500 mb-2" />, title: "Community-Driven", desc: "Built alongside neurodivergent testers, families, and educators." },
                { icon: <Lightbulb className="w-12 h-12 mx-auto text-teal-500 mb-2" />, title: "Innovation Through Inclusion", desc: "When you build for everyone, everyone benefits." },
              ].map(({ icon, title, desc }, i) => (
                <Card key={i} className="border-teal-200 bg-gradient-to-br from-teal-50 to-green-50">
                  <CardHeader className="text-center">{icon}<CardTitle className="text-gray-800">{title}</CardTitle></CardHeader>
                  <CardContent><p className="text-gray-600 text-center">{desc}</p></CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tools */}
        <section id="tools" className="w-full py-24">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center space-y-4 mb-12">
              <div className="inline-block bg-teal-100 px-4 py-2 text-sm font-medium text-teal-800">Our Tools</div>
              <h2 className="text-3xl font-bold sm:text-5xl text-gray-800">Designed for different minds</h2>
              <p className="max-w-3xl mx-auto text-gray-600 md:text-xl">From focus aids to reading helpers, our suite works with your brain, not against it.</p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <Image
                src="/using_laptop.jpg"
                width={600}
                height={400}
                alt="Accessible tools screenshot"
                className="w-full max-h-[600px] object-cover rounded-2xl shadow-xl"
              />
              <ul className="space-y-6">
                {[
                  { icon: <Shield className="w-5 h-5 text-teal-500 mt-1" />, title: "Sensory-Friendly Interfaces", desc: "Customizable layouts and colors that feel good, not overwhelming." },
                  { icon: <Lightbulb className="w-5 h-5 text-teal-500 mt-1" />, title: "Flexible Workflows", desc: "You get to choose how you learn and work. We just make it easier." },
                  { icon: <Heart className="w-5 h-5 text-teal-500 mt-1" />, title: "Stress-Reducing Design", desc: "Minimal cognitive load, maximum calm." },
                ].map(({ icon, title, desc }, i) => (
                  <li key={i} className="flex items-start gap-3">
                    {icon}
                    <div>
                      <h4 className="font-semibold text-gray-800">{title}</h4>
                      <p className="text-gray-600">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Community */}
        <section id="community" className="w-full py-24 bg-gradient-to-r from-teal-100 to-green-100">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <div className="space-y-2 mb-12">
              <div className="inline-block rounded-full bg-white px-4 py-2 text-sm font-medium text-teal-800">Community</div>
              <h2 className="text-3xl font-bold sm:text-5xl text-gray-800">You&apos;re not alone in this journey</h2>
              <p className="max-w-3xl mx-auto text-gray-600 md:text-xl">Join thousands of neurodivergent individuals shaping the future of accessibility.</p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
              {[
                { name: "Pavithra M.", role: "ADHD, Advocate & Aspiring Musician", quote: "Finally, tools that work with my brain. The focus modes are a game-changer." },
                { name: "David V.", role: "Autistic, Games Developer", quote: "Being part of the beta community helped shape tools that *actually* work for me." },
                { name: "Akshat S.", role: "Dyslexic, BBA student", quote: "I have never felt so confident reading online before. Thank you!" },
              ].map(({ name, role, quote }, i) => (
                <Card key={i} className="bg-white/80 border-teal-200">
                  <CardHeader>
                    <CardTitle className="text-gray-800">{name}</CardTitle>
                    <CardDescription className="text-gray-600">{role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{quote}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="w-full py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto grid gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">Let&apos;s connect</h2>
              <p className="text-gray-600 text-lg">Interested in our tools? Have feedback or ideas? We&apos;d love to hear from you.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-teal-500" />
                  <span className="text-gray-700">connect@asgaialabs.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-teal-500" />
                  <span className="text-gray-700">+91 9745261213</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal-500 mt-1" />
                  <span className="text-gray-700">
                    Asgaia Labs Private Limited,<br/> #17, 2nd Floor, 7th Main,<br />
                    II Stage, Indiranagar, Bengaluru, Karnataka 560038
                  </span>
                </div>
              </div>
            </div>
            <Card className="border-teal-200">
              <CardHeader>
                <CardTitle className="text-gray-800">Get in touch</CardTitle>
                <CardDescription className="text-gray-600">Send us a message and we&apos;ll get back to you soon.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                    <Input id="name" placeholder="Your name" className="border-teal-200" />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                    <Input id="email" type="email" placeholder="you@example.com" className="border-teal-200" />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                    <textarea id="message" placeholder="Tell us more..." className="min-h-[100px] w-full rounded-md border border-teal-200 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal-400" />
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-teal-500 to-green-600 text-white">Send Message</Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
