"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ExercisesPage() {
  const [breathingStep, setBreathingStep] = useState<number | null>(null)
  const [isBreathing, setIsBreathing] = useState(false)
  const [gratitudeNote, setGratitudeNote] = useState("")
  const [gratitudeSaved, setGratitudeSaved] = useState(false)

  const steps = ["Inhale", "Hold", "Exhale", "Hold"]
  const duration = 4 // seconds per step

  // Breathing cycle effect
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isBreathing) {
      interval = setInterval(() => {
        setBreathingStep(prev => (prev === null ? 0 : (prev + 1) % steps.length))
      }, duration * 1000)
    } else {
      setBreathingStep(null)
    }
    return () => clearInterval(interval)
  }, [isBreathing])

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Mindfulness Exercises</h1>
        <p className="text-gray-600 mb-6">Practice mindfulness with these guided activities.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* Box Breathing */}
          <Card className="p-8 rounded-2xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">Box Breathing</CardTitle>
              <CardDescription className="text-base md:text-lg">A technique to calm your mind and body</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 mb-4">Inhale 4s – Hold 4s – Exhale 4s – Hold 4s</p>
              {isBreathing && breathingStep !== null && (
                <div className="text-center text-xl font-semibold text-teal-700 mb-4 animate-pulse">
                  {steps[breathingStep]}
                </div>
              )}
              <Button 
                className="w-full bg-teal-600 hover:bg-teal-700" 
                onClick={() => setIsBreathing(!isBreathing)}
              >
                {isBreathing ? "Stop" : "Start"}
              </Button>
            </CardContent>
          </Card>

          {/* Gratitude Reflection */}
          <Card className="p-8 rounded-2xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">Gratitude Reflection</CardTitle>
              <CardDescription className="text-base md:text-lg">Feel good by focusing on the positive</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Today I'm grateful for..."
                className="mb-4"
                value={gratitudeNote}
                onChange={(e) => {
                  setGratitudeNote(e.target.value)
                  setGratitudeSaved(false)
                }}
              />
              <Button
                className="w-full bg-teal-600 hover:bg-teal-700"
                onClick={() => {
                  setGratitudeSaved(true)
                  // Optional: send to backend/localStorage
                }}
              >
                Save Entry
              </Button>
              {gratitudeSaved && (
                <p className="mt-2 text-sm text-green-600">Saved! 🌱</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  )
}
