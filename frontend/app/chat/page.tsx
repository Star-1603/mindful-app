"use client"

import React, { useState, useRef, useEffect } from "react"
import { useAuth } from "@/lib/auth-context"
import ProtectedRoute from "@/components/protected-route"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, User, Bot } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

type Message = {
  id: string
  content: string
  role: "user" | "assistant"
}

const initialMessages: Message[] = [
  {
    id: "welcome",
    content: "Hi there! I'm your mindfulness assistant. How can I help you today?",
    role: "assistant",
  },
]

export default function ChatPage() {
  const { user } = useAuth()
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement | null>(null)

  const handleSendMessage = async () => {
    if (!input.trim()) return
  
    const userMessage: Message = {
      id: `user_${Date.now()}`,
      content: input,
      role: "user",
    }
  
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)
  
    try {
      const res = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: input,
          email: user?.email,
          timeSpent: 5, // Replace this with your actual logic to track time
        }),
      })
  
      const data = await res.json()
  
      const botMessage: Message = {
        id: `bot_${Date.now()}`,
        content: data.reply || "Sorry, something went wrong.",
        role: "assistant",
      }
  
      setMessages((prev) => [...prev, botMessage])
    } catch (err) {
      const errorMsg: Message = {
        id: `error_${Date.now()}`,
        content: "Oops! Uplift is taking a nap right now.",
        role: "assistant",
      }
      setMessages((prev) => [...prev, errorMsg])
    } finally {
      setIsLoading(false)
    }
  }
  

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const clearChat = () => {
    setMessages(initialMessages)
    if (user) {
      localStorage.removeItem(`chat_history_${user.email}`)
    }
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isLoading])

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white flex flex-col">
        <Navbar />
        <div className="container mx-auto px-4 py-8 flex-1 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Wellness Assistant</h1>
              <p className="text-gray-600">Chat with our AI assistant for mindfulness guidance</p>
            </div>
            <Button variant="outline" onClick={clearChat}>Clear Chat</Button>
          </div>

          <div className="bg-white rounded-lg shadow-md flex-1 flex flex-col overflow-hidden border border-gray-100">
            <div className="flex-1 overflow-y-auto p-4">
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex mb-4 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`flex items-start max-w-[80%] ${message.role === "user" ? "flex-row-reverse" : ""}`}
                    >
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                          message.role === "user" ? "bg-teal-100 ml-2" : "bg-teal-600 mr-2"
                        }`}
                      >
                        {message.role === "user" ? (
                          <User className="h-4 w-4 text-teal-600" />
                        ) : (
                          <Bot className="h-4 w-4 text-white" />
                        )}
                      </div>
                      <div
                        className={`p-3 rounded-lg ${
                          message.role === "user"
                            ? "bg-teal-600 text-white rounded-tr-none"
                            : "bg-white shadow-sm border border-gray-100 rounded-tl-none"
                        }`}
                      >
                        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {isLoading && (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex mb-4 justify-start"
                  >
                    <div className="flex items-start max-w-[80%]">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 mr-2 flex items-center justify-center">
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                      <div className="p-3 rounded-lg bg-white shadow-sm border border-gray-100 rounded-tl-none">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-teal-600 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                          <div className="w-2 h-2 bg-teal-600 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                          <div className="w-2 h-2 bg-teal-600 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t border-gray-200">
              <div className="flex">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  className="flex-1 mr-2"
                  disabled={isLoading}
                />
                <Button
                  onClick={handleSendMessage}
                  size="icon"
                  className="bg-teal-600 hover:bg-teal-700"
                  disabled={!input.trim() || isLoading}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </ProtectedRoute>
  )
}
