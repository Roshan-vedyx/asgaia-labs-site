"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function Footer() {
  const [year, setYear] = useState<number | null>(null)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-teal-200 bg-white/80 backdrop-blur-sm">
      <p className="text-xs text-gray-600">
        © {year ?? "2024"} Asgaia Labs. Built with 💚 for neurodivergent minds.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link
          href="/privacy-policy"
          className="text-xs hover:underline underline-offset-4 text-gray-600"
        >
          Privacy Policy
        </Link>
        <Link
          href="/accessibility"
          className="text-xs hover:underline underline-offset-4 text-gray-600"
        >
          Accessibility Statement
        </Link>
        <Link
          href="/community-guidelines"
          className="text-xs hover:underline underline-offset-4 text-gray-600"
        >
          Community Guidelines
        </Link>
      </nav>
    </footer>
  )
}
