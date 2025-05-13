"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import BreathingAnimation from "@/components/breathing-animation"
import { useAuth } from "@/lib/auth-context"

export default function OverviewPage() {
  const { user } = useAuth()

  // Loading state while user data is being fetched
  
  const streakLength = user?.loginStreak || 0
  const maxStreak = 15 // Assume 30 days is the maximum streak length for visual purposes
  const minutesGoal = 30 // Set a goal for minutes spent (adjust as necessary)
  const currentMinutes = user?.minutesSpent || 0

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <Card>
            <CardHeader>
              <CardTitle>Login Streak</CardTitle>
              <CardDescription>Your consistency in logging in</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{streakLength} days</div>
              <div className="mt-4">
                <div className="flex space-x-1">
                  {/* Display a simple visual streak, could be checkmarks or circles */}
                  {[...Array(streakLength)].map((_, index) => (
                    <span key={index} className="text-teal-600">●</span>
                  ))}
                  {/* Fill in the empty streaks with gray circles or checkmarks */}
                  {[...Array(maxStreak - streakLength)].map((_, index) => (
                    <span key={index + streakLength} className="text-gray-300">●</span>
                  ))}
                </div>
                <div className="text-sm text-gray-500 mt-2">{`Max streak: ${maxStreak} days`}</div>
              </div>
            </CardContent>
          </Card>

          {/* Card for Minutes Spent */}
          <Card>
            <CardHeader>
              <CardTitle>Minutes Spent</CardTitle>
              <CardDescription>Total time spent in mindfulness exercises</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{currentMinutes} mins</div>
              <div className="mt-4">
                {/* Visualizing progress using a bar */}
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div
                    className="bg-teal-600 h-2 rounded-full"
                    style={{ width: `${(currentMinutes / minutesGoal) * 100}%` }}
                  ></div>
                </div>
                <div className="text-sm text-gray-500 mt-2">{`Goal: ${minutesGoal} mins`}</div>
              </div>
            </CardContent>
          </Card>

          {/* Chat Assistant Card */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <MessageCircle className="mr-2 h-5 w-5 text-teal-600" /> Chat Assistant
              </CardTitle>
              <CardDescription>Your personal wellness guide</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 mb-4">Get personalized mindfulness recommendations</p>
              <Link href="/chat">
                <Button size="sm" className="w-full bg-teal-600 hover:bg-teal-700">Start chatting</Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Breathing Exercise Card */}
          <Card>
            <CardHeader>
              <CardTitle>Breathing Exercise</CardTitle>
              <CardDescription>Take a moment to breathe and center yourself</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="w-70 h-70">
                <BreathingAnimation />
              </div>
            </CardContent>
          </Card>
          
          {/* Guided Meditation Card */}
          <Card>
            <CardHeader>
              <CardTitle>Guided Meditation</CardTitle>
              <CardDescription>
                A few minutes of guided meditation to help you unwind
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg overflow-hidden mb-4">
                <img
                  src="https://i.pinimg.com/736x/4d/d1/ae/4dd1ae8853100d555f70e8fc4808be13.jpg"
                  alt="Meditation"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="flex justify-center">
                <Link href="/dashboard/meditation">
                  <Button className="bg-teal-600 hover:bg-teal-700">
                    Start Meditation
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  )
}
