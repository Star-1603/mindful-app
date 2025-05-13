"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, User, Bot } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

type Message = {
  id: number
  text: string
  sender: "user" | "bot"
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Hi there! I'm your mindfulness assistant. How can I help you today?",
    sender: "bot",
  },
]

const botResponses: { [key: string]: string } = {
  anxiety:
    "I understand anxiety can be challenging. Try this simple breathing exercise: breathe in for 4 counts, hold for 2, and exhale for 6. Repeat this 5 times.",
  stress:
    "For stress relief, try the 5-4-3-2-1 technique: acknowledge 5 things you see, 4 things you can touch, 3 things you hear, 2 things you smell, and 1 thing you taste.",
  sleep:
    "To improve sleep, try a body scan meditation before bed. Start at your toes and slowly move attention up through your body, relaxing each part as you go.",
  meditation:
    "For beginners, I recommend starting with a simple 5-minute guided meditation focusing on your breath. Would you like me to guide you through one?",
  breathing:
    "Let's try a simple breathing exercise together. Breathe in through your nose for 4 seconds, hold for 2 seconds, then exhale through your mouth for 6 seconds.",
}

export default function ChatbotDemo() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: "user",
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Simulate bot typing
    setIsTyping(true)

    // Find a response based on keywords
    setTimeout(() => {
      setIsTyping(false)

      let botResponse =
        "I'm here to help with your mindfulness journey. Could you tell me more about what you're looking for?"

      // Check for keywords in the user's message
      const lowercaseInput = input.toLowerCase()
      for (const [keyword, response] of Object.entries(botResponses)) {
        if (lowercaseInput.includes(keyword)) {
          botResponse = response
          break
        }
      }

      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        sender: "bot",
      }

      setMessages((prev) => [...prev, botMessage])
    }, 1500)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <div className="flex flex-col h-[500px]">
      <div className="bg-teal-600 text-white p-4">
        <h3 className="font-medium">Mindful Assistant</h3>
        <p className="text-xs text-teal-100">Available 24/7 for your wellness needs</p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex mb-4 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div className={`flex items-start max-w-[80%] ${message.sender === "user" ? "flex-row-reverse" : ""}`}>
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    message.sender === "user" ? "bg-teal-100 ml-2" : "bg-teal-600 mr-2"
                  }`}
                >
                  {message.sender === "user" ? (
                    <User className="h-4 w-4 text-teal-600" />
                  ) : (
                    <Bot className="h-4 w-4 text-white" />
                  )}
                </div>
                <div
                  className={`p-3 rounded-lg ${
                    message.sender === "user"
                      ? "bg-teal-600 text-white rounded-tr-none"
                      : "bg-white shadow-sm border border-gray-100 rounded-tl-none"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            </motion.div>
          ))}

          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex mb-4 justify-start"
            >
              <div className="flex items-start max-w-[80%]">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center mr-2">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <div className="p-3 rounded-lg bg-white shadow-sm border border-gray-100 rounded-tl-none">
                  <div className="flex space-x-1">
                    <div
                      className="w-2 h-2 bg-teal-600 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-teal-600 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-teal-600 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </AnimatePresence>
      </div>

      <div className="p-4 border-t border-gray-200 bg-white">
        <div className="flex">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="flex-1 mr-2"
          />
          <Button
            onClick={handleSendMessage}
            size="icon"
            className="bg-teal-600 hover:bg-teal-700"
            disabled={!input.trim()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
