"use client"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-white to-teal-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-bold text-teal-600 mb-2">Uplift</h3>
            <p className="text-gray-600 max-w-sm">A gentle space for mindfulness, calm, and clarity 🌱</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-800 font-medium mb-3">Explore</h4>
            <ul className="space-y-1">
              <li>
                <Link href="/dashboard/meditation" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Meditation
                </Link>
              </li>
              <li>
                <Link href="/dashboard/exercises" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Mind Exercises
                </Link>
              </li>
              <li>
                <Link href="/chat" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Chat Assistant
                </Link>
              </li>
              <li>
                <Link href="/dashboard/progress" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Progress
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-gray-800 font-medium mb-3">Stay Connected</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-teal-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-teal-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-teal-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-teal-600 transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Uplift • Breathe Easy. Be You.
        </div>
      </div>
    </footer>
  )
}
