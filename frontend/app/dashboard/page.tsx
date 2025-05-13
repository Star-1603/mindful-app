"use client"

import { useAuth } from "@/lib/auth-context"
import ProtectedRoute from "@/components/protected-route"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import OverviewPage from "./overview/page"

export default function DashboardPage() {
  const { user, logout } = useAuth()

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Welcome, {user?.email}</h1>
              <p className="text-gray-600">Your mindfulness dashboard hub</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <Link href="/dashboard/overview">
              <Card className="cursor-pointer hover:shadow-lg transition">
              <img
      src="https://i.pinimg.com/736x/e9/0a/3a/e90a3a76ccf1b73d33830631e3971c9c.jpg"
      alt="Overview illustration"
      className="w-full h-32 object-cover rounded-t-xl"
    />
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                  <CardDescription>See your daily stats and habits at a glance</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">Mindful minutes, streaks, and recommendations</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/dashboard/exercises">
              <Card className="cursor-pointer hover:shadow-lg transition">
              <img
      src="https://i.pinimg.com/736x/0f/bd/53/0fbd53c826baa95aae48b5fa97dd8ece.jpg"
      alt="Overview illustration"
      className="w-full h-32 object-cover rounded-t-xl"
    />
                <CardHeader>
                  <CardTitle>Exercises</CardTitle>
                  <CardDescription>Guided practices and breathing sessions</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">Find the right mindfulness technique for today</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/chat">
              <Card className="cursor-pointer hover:shadow-lg transition">
              <img
      src="https://i.pinimg.com/736x/de/e5/37/dee537fa0eae747804b29683e763ca39.jpg"
      alt="Overview illustration"
      className="w-full h-32 object-cover rounded-t-xl"
    />
                <CardHeader>
                  <CardTitle>Chat Assistant</CardTitle>
                  <CardDescription>Your personal mindfulness assistant</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">Chat for wellness tips, journaling, and support</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/dashboard/progress">
              <Card className="cursor-pointer hover:shadow-lg transition">
              <img
      src="https://i.pinimg.com/736x/00/df/8e/00df8e20053c262248ba8e20e5117fc8.jpg"
      alt="Overview illustration"
      className="w-full h-32 object-cover rounded-t-xl"
    />
                <CardHeader>
                  <CardTitle>Progress</CardTitle>
                  <CardDescription>Track your mindfulness journey</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">Visualize your growth over time</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/dashboard/meditation">
              <Card className="cursor-pointer hover:shadow-lg transition">
              <img
      src="https://i.pinimg.com/736x/ce/5a/d1/ce5ad11eaeaf9579290aac7a5b609ffa.jpg"
      alt="Overview illustration"
      className="w-full h-32 object-cover rounded-t-xl"
    />
                <CardHeader>
                  <CardTitle>Meditation</CardTitle>
                  <CardDescription>Take five minutes for yourself</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">Guided meditation paths</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/sleep">
  <Card className="cursor-pointer hover:shadow-lg transition">
    <img
      src="https://i.pinimg.com/736x/41/51/44/41514455036b14a410ae5a0d3b37ebc0.jpg"
      alt="Sleep Stories illustration"
      className="w-full h-32 object-cover rounded-t-xl"
    />
    <CardHeader>
      <CardTitle>Sleep Stories</CardTitle>
      <CardDescription>Relaxing audio to help you wind down</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-gray-500">Listen to bedtime stories and fall asleep with ease</p>
    </CardContent>
  </Card>
</Link>

          </div>
        </div>
        <Footer />
      </div>
    </ProtectedRoute>
  )
}
