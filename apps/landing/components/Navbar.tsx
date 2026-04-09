"use client"

import Link from "next/link"
import { Button } from "@workspace/ui/components/button"

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-pink-100 bg-white backdrop-blur supports-[backdrop-filter]:bg-white/95">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-yellow-400">
            <span className="text-sm font-bold text-white">JT</span>
          </div>
          <span className="text-lg font-semibold text-gray-900">Job Tracker</span>
        </div>

        {/* Links */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="#features"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-pink-600"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-pink-600"
          >
            Pricing
          </Link>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
            Login
          </Button>
          <Button size="sm" variant="default">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  )
}
