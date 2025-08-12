"use client"

import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import Faq from "@/components/home/Faq"
import About from "@/components/home/About"
import Hero from "@/components/home/Hero"

export default function CoffeeNestLandingPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const [particles, setParticles] = useState<
    Array<{
      id: number
      x: number
      y: number
      size: number
      speed: number
    }>
  >([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsLoaded(true)

    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 2 + 1,
      speed: Math.random() * 0.8 + 0.2,
    }))
    setParticles(newParticles)

    const handleMouseMove = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY })

    const animateParticles = () => {
      setParticles((prev) =>
        prev.map((p) => ({
          ...p,
          y: p.y - p.speed,
          x: p.x + Math.sin(p.y * 0.01) * 0.3,
          ...(p.y < -10 && {
            y: window.innerHeight + 10,
            x: Math.random() * window.innerWidth,
          }),
        })),
      )
    }

    window.addEventListener("mousemove", handleMouseMove)
    const id = setInterval(animateParticles, 100)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(id)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black"
      style={{
        background: `
          radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(15, 67, 15, 0.15), rgba(220, 38, 38, 0.05), transparent 70%), 
          linear-gradient(135deg, 
            #000000 0%, 
            #0a0a0a 25%, 
            #111111 50%, 
            #0f0f0f 75%, 
            #000000 100%
          )
        `,
      }}
    >
      {/* Header */}
      <div className="h-20 w-full bg-black/95 backdrop-blur-xl border-b border-[#ACBDA8]/20 sticky top-0 z-50 shadow-lg">
        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {particles.map((p) => (
            <div
              key={p.id}
              className="absolute rounded-full"
              style={{
                left: p.x,
                top: p.y,
                width: p.size,
                height: p.size,
                backgroundColor: Math.random() > 0.8 ? "rgba(220, 38, 38, 0.3)" : "rgba(15, 67, 15, 0.2)",
                boxShadow: `0 0 ${p.size * 3}px ${Math.random() > 0.8 ? "rgba(220, 38, 38, 0.4)" : "rgba(15, 67, 15, 0.3)"}`,
              }}
            />
          ))}
        </div>

        {/* Subtle Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0F430F]/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-600/5 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#ACBDA8]/5 rounded-full blur-3xl animate-bounce-slow" />
        </div>

        <header
          className={`flex justify-between items-center px-6 py-4 h-full transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg overflow-hidden bg-white/10 border border-[#ACBDA8]/30 backdrop-blur-sm">
              <img src="/logo.svg" alt="CoffeeNest" className="w-10 h-10" />
            </div>
            <span className="text-white font-bold text-xl">CoffeeNest</span>
          </div>

          <div className="flex items-center gap-4">
            <Badge className="bg-gradient-to-r from-[#0F430F] via-red-600/20 to-[#0F430F] text-white border border-red-500/20 px-4 py-2 font-medium hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg hover:shadow-red-500/20 animate-pulse">
              <Sparkles className="w-4 h-4 mr-2 animate-spin-slow" />
              AI Powered
            </Badge>
          </div>
        </header>
      </div>

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section id="about" className="py-20 px-6 lg:px-12 xl:px-16 max-w-7xl mx-auto relative">
        <About />
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 lg:px-12 xl:px-16 max-w-7xl mx-auto relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F430F]/10 to-red-600/5 rounded-3xl blur-3xl" />
        <div className="relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#0F430F] via-[#ACBDA8] via-white via-red-400 to-[#0F430F] bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient-x">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">Everything you need to know about CoffeeNest</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Faq />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-[#ACBDA8]/20 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden bg-white/10 border border-[#ACBDA8]/20">
              <img src="/logo.svg" alt="CoffeeNest" className="w-8 h-8 brightness-0 invert" />
            </div>
            <span className="text-2xl font-bold">CoffeeNest</span>
          </div>
          <p className="text-[#ACBDA8] mb-6">
            Your personal coffee companion for discovering amazing coffee experiences
          </p>
          <div className="text-gray-400 text-sm">© 2024 CoffeeNest. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}
