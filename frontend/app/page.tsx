"use client";
import { Button } from "@/components/ui/button"
import { ChevronRight, Heart, MessageCircle, Wind, Sparkles } from "lucide-react"
import BreathingAnimation from "@/components/breathing-animation"
import FeatureCard from "@/components/feature-card"
import ChatPage from "./chat/page"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-teal-100 rounded-full opacity-30 blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-100 rounded-full opacity-40 blur-3xl animate-float"></div>
        </div>

        <div className="container mx-auto px-4 py-24 md:py-32 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight animate-fade-in">
              Find Peace in Every <span className="text-teal-600">Breath.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-md animate-fade-in-delay">
              Your daily companion for mindfulness, meditation, and mental wellness. Take a moment to breathe and
              reconnect with yourself.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
              <Link href='/dashboard/overview'></Link>
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                Get Started <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                Learn More
              </Button>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center animate-fade-in-delay">
            <BreathingAnimation />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">Mindful Features</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Discover tools designed to help you manage stress, improve focus, and find balance in your daily life.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Wind className="h-10 w-10 text-teal-600" />}
              title="Guided Breathing"
              description="Interactive breathing exercises to help you relax and reduce anxiety in just a few minutes."
              delay={0}
            />
            <FeatureCard
              icon={<Heart className="h-10 w-10 text-teal-600" />}
              title="Meditation Library"
              description="Access hundreds of guided meditations for sleep, stress, focus and more."
              delay={1}
            />
            <FeatureCard
              icon={<MessageCircle className="h-10 w-10 text-teal-600" />}
              title="Wellness Assistant"
              description="Chat with our AI assistant for quick mental health tips and personalized guidance."
              delay={2}
            />
            <FeatureCard
              icon={<Sparkles className="h-10 w-10 text-teal-600" />}
              title="Mood Tracking"
              description="Track your emotional patterns and receive insights to better understand your mental wellbeing."
              delay={3}
            />
            <FeatureCard
              icon={<Wind className="h-10 w-10 text-teal-600" />}
              title="Sleep Stories"
              description="Drift off to sleep with calming stories and soundscapes designed to improve sleep quality."
              delay={4}
            />
            <FeatureCard
              icon={<Heart className="h-10 w-10 text-teal-600" />}
              title="Community Support"
              description="Connect with others on their mindfulness journey through our supportive community forums."
              delay={5}
            />
          </div>
        </div>
      </section>

      {/* Chatbot Demo Section */}
      <section className="py-20 bg-teal-50">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row items-center">
      
      {/* LEFT: Text Content */}
      <div className="md:w-1/2 mb-12 md:mb-0 pr-0 md:pr-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Meet Your Wellness Assistant</h2>
        <p className="text-gray-600 mb-8">
          Our AI-powered chatbot is here to provide guidance, answer questions, and offer support whenever you
          need it. Whether you're looking for a quick breathing exercise or need help managing stress, your
          assistant is just a message away.
        </p>
        <ul className="space-y-4">
          <li className="flex items-start">
            <div className="bg-teal-100 p-1 rounded-full mr-3 mt-1">
              <ChevronRight className="h-4 w-4 text-teal-600" />
            </div>
            <span className="text-gray-700">Get personalized mindfulness recommendations</span>
          </li>
          <li className="flex items-start">
            <div className="bg-teal-100 p-1 rounded-full mr-3 mt-1">
              <ChevronRight className="h-4 w-4 text-teal-600" />
            </div>
            <span className="text-gray-700">Learn quick techniques for anxiety relief</span>
          </li>
          <li className="flex items-start">
            <div className="bg-teal-100 p-1 rounded-full mr-3 mt-1">
              <ChevronRight className="h-4 w-4 text-teal-600" />
            </div>
            <span className="text-gray-700">Track your progress and set wellness goals</span>
          </li>
        </ul>
        <div className="mt-6">
          <Link href="/chat">
            <Button className="bg-teal-600 hover:bg-teal-700">
              <MessageCircle className="mr-2 h-4 w-4" />
              Try the Chat Assistant
            </Button>
          </Link>
        </div>
      </div>

      {/* RIGHT: Image Content */}
      <div className="md:w-1/2">
        <div className="relative w-full h-96 overflow-hidden rounded-xl">
          {/* Blur aesthetic effect */}
          <div className="absolute inset-0 bg-teal-100 opacity-20 filter blur-xl transform -translate-y-4 scale-110"></div>

          {/* Image */}
          <img 
            src="https://i.pinimg.com/736x/06/c3/2e/06c32ed79173e4d860cc5911a6609c40.jpg" 
            alt="Wellness Assistant Visualization" 
            className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg z-10"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-2 bg-gradient-to-t from-teal-500/10 to-transparent z-20 rounded-xl"></div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Healthy Mind Journey Today</h2>
        </div>
      </section>

      <Footer />
    </div>
  )
}
