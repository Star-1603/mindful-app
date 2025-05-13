"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/lib/auth-context"
import router from "next/router"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user } = useAuth()
  const { logout } = useAuth();
  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-teal-600">Uplift</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-teal-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-teal-600 transition-colors">
              About Us
            </Link>
            {user && (
              <Link href="/dashboard" className="text-gray-600 hover:text-teal-600 transition-colors">
                Dashboard
              </Link>
            )}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <Button onClick={() => {
  logout();
  router.push("/login");
}}>
  Sign Out
</Button>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                    Log in
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button className="bg-teal-600 hover:bg-teal-700">Sign up</Button>
                </Link>
              </>
            )}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-teal-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <Link href="/" className="block text-gray-600 hover:text-teal-600 py-2">
              Home
            </Link>
            <Link href="/about" className="block text-gray-600 hover:text-teal-600 py-2">
              About Us
            </Link>
            {user && (
              <Link href="/dashboard" className="block text-gray-600 hover:text-teal-600 py-2">
                Dashboard
              </Link>
            )}
            <div className="pt-4 flex flex-col space-y-3">
              {user ? (
                <Button onClick={logout} className="bg-teal-600 hover:bg-teal-700 w-full">
                  Sign out
                </Button>
              ) : (
                <>
                  <Link href="/login">
                    <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50 w-full">
                      Log in
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button className="bg-teal-600 hover:bg-teal-700 w-full">Sign up</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
