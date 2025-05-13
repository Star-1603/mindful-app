"use client"

import { Moon, Music, Headphones, Waves, Bed, PlayCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function SleepPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-100">
      <Navbar />

      {/* Hero */}
      <section className="text-center py-20 px-6">
        <Moon className="mx-auto h-12 w-12 text-indigo-600 mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Sleep Stories</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Wind down and drift off peacefully with our handpicked collection of soothing audio stories and calming soundscapes.
        </p>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Under Development Currently.</p>
      </section>

      {/* Story Cards */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <StoryCard
            title="Moonlight Over Mountains"
            icon={<Waves className="h-8 w-8 text-indigo-500" />}
            description="A gentle journey through a twilight valley, with soft winds and distant rivers."
          />

          <StoryCard
            title="Rainy Cabin Retreat"
            icon={<Headphones className="h-8 w-8 text-indigo-500" />}
            description="Let the patter of rain and a crackling fireplace guide you into a cozy dream."
          />

          <StoryCard
            title="The Whispering Forest"
            icon={<Music className="h-8 w-8 text-indigo-500" />}
            description="A slow-paced story where ancient trees share their calming secrets with you."
          />

          <StoryCard
            title="Ocean Drift"
            icon={<Waves className="h-8 w-8 text-indigo-500" />}
            description="Float along warm ocean tides, listening to waves and distant whale songs."
          />

          <StoryCard
            title="Starry Desert Night"
            icon={<Bed className="h-8 w-8 text-indigo-500" />}
            description="A slow storytelling experience under a sky full of stars in the quiet desert."
          />

          <StoryCard
            title="Mindful Moon Voyage"
            icon={<PlayCircle className="h-8 w-8 text-indigo-500" />}
            description="A spacey, dreamy ride through moonlight and meditation cues for better sleep."
          />

        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 text-white py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Fall asleep with peace of mind</h2>
        <p className="mb-8 text-lg">New stories added regularly — your next night of deep rest is waiting ✨</p>
        <Link href="/dashboard/overview">
          <Button size="lg" className="bg-white text-indigo-700 hover:bg-indigo-100">
            Go to Dashboard
          </Button>
        </Link>
      </section>

      <Footer />
    </div>
  )
}

// Card for each story
function StoryCard({
  title,
  icon,
  description
}: {
  title: string
  icon: React.ReactNode
  description: string
}) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button variant="ghost" className="text-indigo-600 hover:text-indigo-800">
        
        Listen Now
      </Button>
    </div>
  )
}
