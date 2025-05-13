"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ProgressPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Your Progress</h1>
        <p className="text-gray-600 mb-6">Track how far you've come in your mindfulness journey.</p>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Weekly Mindful Minutes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-gray-500">Charts and progress tracking coming soon!</p>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  )
}
