"use client"

import { Button } from "@mui/material"
import { useState } from "react"

export default function Component() {
  const [isAnimating, setIsAnimating] = useState(false)

  const handleAnimate = () => {
    setIsAnimating(true)
    // Reset animation after it completes
    setTimeout(() => setIsAnimating(false), 2000)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">Emoji Love Animation</h1>
        <p className="text-gray-600 text-center">Watch the emojis come together! 💕</p>
      </div>

      <div className="relative w-80 h-32 mb-8 flex items-center justify-center">
        {/* Left Emoji */}
        <div
          className={`absolute text-6xl transition-all duration-2000 ease-in-out ${
            isAnimating ? "transform translate-x-16" : "transform -translate-x-16"
          }`}
        >
          😊
        </div>

        {/* Right Emoji */}
        <div
          className={`absolute text-6xl transition-all duration-2000 ease-in-out ${
            isAnimating ? "transform -translate-x-16" : "transform translate-x-16"
          }`}
        >
          🥰
        </div>

        {/* Heart that appears when they meet */}
        <div
          className={`absolute text-4xl transition-all duration-500 ${
            isAnimating ? "opacity-100 scale-110 animate-pulse" : "opacity-0 scale-50"
          }`}
          style={{ transitionDelay: isAnimating ? "1.5s" : "0s" }}
        >
          💖
        </div>
      </div>

      <Button
        onClick={handleAnimate}
        disabled={isAnimating}
        className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-2 rounded-full"
      >
        {isAnimating ? "Coming Together..." : "Start Animation"}
      </Button>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">Click the button to see the magic happen!</p>
      </div>
    </div>
  )
}
