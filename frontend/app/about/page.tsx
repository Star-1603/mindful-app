"use client"

import { Sparkles, Heart, Wind, MessageCircle, Moon, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-teal-50">
      <Navbar />

      {/* Hero */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About <span className="text-teal-600">Uplift</span></h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Uplift is your daily wellness companion, blending mindfulness tools and AI-powered support to help you stay emotionally balanced, focused, and calm.
        </p>
      </section>

      {/* Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <Sparkles className="mx-auto h-10 w-10 text-teal-600 mb-4" />
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            We believe mental health should be accessible, supportive, and part of your everyday life. Uplift empowers you to build mindfulness habits through a blend of calming design, expert guidance, and meaningful insights — all in one place.
          </p>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 bg-teal-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Uplift Offers</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Wind className="h-8 w-8 text-teal-600" />}
              title="Guided Breathing"
              description="Slow down with interactive breathing exercises designed to reduce anxiety and restore calm in minutes."
            />
            <FeatureCard
              icon={<Heart className="h-8 w-8 text-teal-600" />}
              title="Meditation Library"
              description="Access a growing library of guided meditations to help you sleep, focus, or de-stress anytime."
            />
            <FeatureCard
              icon={<MessageCircle className="h-8 w-8 text-teal-600" />}
              title="Wellness Assistant"
              description="Get quick mental health tips and emotional support from our friendly AI-powered assistant."
            />
            <FeatureCard
              icon={<Sparkles className="h-8 w-8 text-teal-600" />}
              title="Mood Tracking"
              description="Log your emotions daily and uncover trends to better understand your inner world."
            />
            <FeatureCard
              icon={<Moon className="h-8 w-8 text-teal-600" />}
              title="Sleep Stories"
              description="Fall asleep peacefully with calming narrations and ambient soundscapes made to soothe your mind."
            />
            <FeatureCard
              icon={<Users className="h-8 w-8 text-teal-600" />}
              title="Community Coming Soon"
              description="We're building a safe space where users can share experiences, tips, and encouragement."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-teal-500 to-teal-600 text-white py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Uplift Your Mind?</h2>
        <p className="mb-8 text-lg">Start your journey today with just a few mindful minutes.</p>
        <Link href="/dashboard/overview">
          <Button size="lg" className="bg-white text-teal-700 hover:bg-teal-100">
            Get Started
          </Button>
        </Link>
      </section>

      <Footer />
    </div>
  )
}

// Simple FeatureCard component inline for reuse
function FeatureCard({
  icon,
  title,
  description
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
