"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function MeditationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Navbar />
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Guided Meditation</h1>
        <p className="text-gray-600 mb-8 max-w-2xl">
          Take a moment to breathe and reconnect with yourself. Choose from our collection of calming guided meditations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Meditation Video 1 */}
          <Card>
            <CardHeader>
              <CardTitle>Morning Calm</CardTitle>
              <CardDescription>Start your day with clarity and peace</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-w-16 aspect-h-9">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/zSkFFW--Ma0?si=aYmVkIqgJGHQavcO" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </CardContent>
          </Card>

          {/* Meditation Video 2 */}
          <Card>
            <CardHeader>
              <CardTitle>Evening Unwind</CardTitle>
              <CardDescription>Let go of your day with this 10-minute wind-down</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-w-16 aspect-h-9">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/ssss7V1_eyA?si=p2EGZwbfeV1E_OMw" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  )
}
