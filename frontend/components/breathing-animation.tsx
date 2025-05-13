"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function BreathingAnimation() {
  const [breathingState, setBreathingState] = useState("inhale")
  const [isActive, setIsActive] = useState(true)

  useEffect(() => {
    if (!isActive) return

    const breathingCycle = () => {
      // Inhale for 4 seconds
      setBreathingState("inhale")

      const exhaleTimeout = setTimeout(() => {
        // Hold for 2 seconds then exhale for 6 seconds
        setBreathingState("exhale")

        const resetTimeout = setTimeout(() => {
          // Small pause before starting again
          setBreathingState("pause")

          const restartTimeout = setTimeout(() => {
            if (isActive) breathingCycle()
          }, 1000)

          return () => clearTimeout(restartTimeout)
        }, 6000)

        return () => clearTimeout(resetTimeout)
      }, 6000) // 4s inhale + 2s hold

      return () => clearTimeout(exhaleTimeout)
    }

    breathingCycle()

    return () => setIsActive(false)
  }, [isActive])

  const circleVariants = {
    inhale: {
      scale: 1.3,
      opacity: 0.9,
      transition: { duration: 4, ease: "easeInOut" },
    },
    exhale: {
      scale: 1,
      opacity: 0.6,
      transition: { duration: 6, ease: "easeInOut" },
    },
    pause: {
      scale: 1,
      opacity: 0.6,
      transition: { duration: 1, ease: "easeInOut" },
    },
  }

  const textVariants = {
    inhale: { opacity: 1 },
    exhale: { opacity: 1 },
    pause: { opacity: 0.3 },
  }

  return (
    <div className="relative w-80 h-80 flex items-center justify-center">
      <motion.div
        className="absolute w-64 h-64 bg-gradient-to-br from-teal-300 to-blue-300 rounded-full"
        variants={circleVariants}
        animate={breathingState}
      />

      <motion.div
        className="absolute w-56 h-56 bg-gradient-to-br from-teal-200 to-blue-200 rounded-full"
        variants={circleVariants}
        animate={breathingState}
        transition={{ delay: 0.1 }}
      />

      <motion.div
        className="absolute w-48 h-48 bg-gradient-to-br from-teal-100 to-blue-100 rounded-full"
        variants={circleVariants}
        animate={breathingState}
        transition={{ delay: 0.2 }}
      />

      <motion.div className="absolute z-10 text-center" variants={textVariants} animate={breathingState}>
        <p className="text-teal-800 font-medium text-lg">
          {breathingState === "inhale" ? "Breathe In" : breathingState === "exhale" ? "Breathe Out" : "Pause"}
        </p>
        <button onClick={() => setIsActive(!isActive)} className="mt-4 text-sm text-teal-600 hover:text-teal-800">
          {isActive ? "Pause" : "Resume"}
        </button>
      </motion.div>
    </div>
  )
}
