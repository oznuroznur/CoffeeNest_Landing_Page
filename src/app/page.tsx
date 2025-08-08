"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Lock,
  BarChart3,
  Bell,
  User,
  Brain,
  Zap,
  Shield,
  Phone,
  Mail,
  Coins,
  TrendingUp,
  Users,
  Sparkles,
  Rocket,
  Star,
  Twitter,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Code,
  Layers,
} from "lucide-react"
import { useEffect, useState, useRef } from "react"

export default function FinyraLanding() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isEarlyAccessOpen, setIsEarlyAccessOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; speed: number }>>(
    [],
  )
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsLoaded(true)

    // Initialize particles
    const newParticles = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 1.5 + 0.3,
    }))
    setParticles(newParticles)

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    // Particle animation
    const animateParticles = () => {
      setParticles((prev) =>
        prev.map((particle) => ({
          ...particle,
          y: particle.y - particle.speed,
          x: particle.x + Math.sin(particle.y * 0.008) * 0.3,
          ...(particle.y < -10 && {
            y: window.innerHeight + 10,
            x: Math.random() * window.innerWidth,
          }),
        })),
      )
    }

    window.addEventListener("mousemove", handleMouseMove)
    const particleInterval = setInterval(animateParticles, 60)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(particleInterval)
    }
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-ai")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const faqData = [
    {
      question: "What is Finyra?",
      answer:
        "Finyra is a revolutionary platform that uses artificial intelligence to help developers build mobile applications faster and more efficiently. Our AI understands your requirements and generates optimized, production-ready code.",
    },
    {
      question: "How does the AI code generation work?",
      answer:
        "Our advanced AI models analyze your project requirements, design patterns, and best practices to generate clean, maintainable code. The AI can create complete app structures, UI components, business logic, and even handle complex integrations.",
    },
    {
      question: "What platforms does Finyra support?",
      answer:
        "Finyra supports all major mobile development frameworks including React Native, Flutter, Swift (iOS), and Kotlin (Android). We also provide cross-platform solutions for maximum compatibility.",
    },
    {
      question: "Is my code and data secure?",
      answer:
        "We implement enterprise-grade security measures including end-to-end encryption, secure cloud infrastructure, and compliance with industry standards like SOC 2 and GDPR. Your code and data remain private and secure.",
    },
    {
      question: "How much does Finyra cost?",
      answer:
        "We offer flexible pricing plans to suit different needs, from individual developers to enterprise teams. Our basic plan starts free with limited features, and premium plans include advanced AI capabilities, priority support, and team collaboration tools.",
    },
    {
      question: "Can I integrate Finyra with my existing development workflow?",
      answer:
        "Yes! Finyra seamlessly integrates with popular development tools like GitHub, GitLab, VS Code, and CI/CD pipelines. You can incorporate our AI assistance into your existing workflow without disruption.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "We offer comprehensive support including 24/7 chat support, detailed documentation, video tutorials, community forums, and for enterprise customers, dedicated account managers and priority support.",
    },
    {
      question: "How do I get started with Finyra?",
      answer:
        "Getting started is easy! Simply sign up for early access, and you'll receive an invitation to our beta program. We'll guide you through the onboarding process and help you build your first AI-powered app.",
    },
  ]

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 relative overflow-hidden"
      style={{
        background: `
    radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(20, 184, 166, 0.15) 0%, transparent 50%),
    linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #475569 75%, #64748b 100%)
  `,
      }}
    >
      {/* Dynamic Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-teal-400/30 animate-pulse"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              boxShadow: `0 0 ${particle.size * 3}px rgba(45, 212, 191, 0.4)`,
            }}
          />
        ))}
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-mega-float"></div>
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl animate-mega-float-reverse"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-cyan-500/15 rounded-full blur-2xl animate-pulse-mega"></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-teal-400/15 rounded-full blur-2xl animate-bounce-mega"></div>

        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-teal-400/40 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-emerald-400/40 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-32 left-16 w-3 h-3 bg-cyan-400/50 animate-ping"></div>
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-teal-500/40 rotate-45 animate-spin-reverse"></div>
      </div>

      {/* Header */}
      <header
        className={`flex justify-between items-center p-4 md:p-6 transition-all duration-1000 backdrop-blur-sm ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
      >
        <div></div>
        <div className="flex items-center gap-2 md:gap-4">
          <span className="text-white font-bold text-sm md:text-base animate-glow-text cursor-pointer hover:scale-110 transition-transform duration-300">
            Finyra
          </span>
          <Badge
            variant="secondary"
            className="bg-gradient-to-r from-teal-500/30 to-emerald-500/30 text-white border-teal-400/30 px-3 py-1 md:px-5 md:py-2 font-medium text-sm cursor-pointer md:text-base animate-badge-glow hover:scale-110 hover:rotate-3 transition-all duration-300 backdrop-blur-sm"
          >
            <Sparkles className="w-3 h-3 mr-1 animate-spin-slow" />
            AI Powered
          </Badge>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 md:px-6 lg:px-12 xl:px-16 py-8 lg:py-4 gap-12 md:gap-16 lg:gap-8 xl:gap-12 max-w-7xl mx-auto">
        {/* Phone Mockup */}
        <div
          className={`relative flex-shrink-0 order-2 lg:order-1 ${isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"}`}
          style={{
            transition: "opacity 1s ease-out 0.3s, transform 1s ease-out 0.3s",
          }}
        >
          <div className="relative">
            {/* Phone glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/40 to-emerald-500/40 rounded-[3rem] blur-xl animate-phone-glow"></div>

            <div className="relative w-64 h-[512px] md:w-72 md:h-[576px] lg:w-80 lg:h-[640px] bg-slate-900 rounded-[2.5rem] lg:rounded-[3rem] p-1.5 lg:p-2 shadow-2xl hover:shadow-3xl transition-all duration-500 animate-phone-mega-float hover:scale-105 hover:rotate-1 border border-teal-500/20">
              <div className="w-full h-full bg-gradient-to-br from-slate-800 via-slate-700 to-gray-800 rounded-[2rem] lg:rounded-[2.5rem] relative overflow-hidden">
                {/* Animated overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-teal-400/10 to-transparent animate-shimmer-overlay"></div>

                {/* Status Bar */}
                <div
                  className={`flex justify-between items-center px-4 lg:px-6 pt-3 lg:pt-4 pb-2 transition-all duration-500 delay-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}
                >
                  <span className="text-white font-bold text-sm lg:text-base animate-text-glow">9:41</span>
                  <div className="flex items-center gap-1">
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-teal-400 rounded-full animate-pulse-dot-epic delay-100"></div>
                      <div className="w-1 h-1 bg-teal-400 rounded-full animate-pulse-dot-epic delay-200"></div>
                      <div className="w-1 h-1 bg-teal-400 rounded-full animate-pulse-dot-epic delay-300"></div>
                      <div className="w-1 h-1 bg-teal-400 rounded-full animate-pulse-dot-epic delay-400"></div>
                    </div>
                    <div className="w-5 lg:w-6 h-2.5 lg:h-3 border border-teal-400 rounded-sm animate-battery-pulse">
                      <div className="w-3 lg:w-4 h-1 lg:h-1.5 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-sm m-0.5 animate-battery-fill-epic"></div>
                    </div>
                  </div>
                </div>

                {/* App Header */}
                <div
                  className={`px-4 lg:px-6 py-3 lg:py-4 transition-all duration-500 delay-800 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
                >
                  <div className="flex items-center gap-2 lg:gap-3">
                    <div className="w-8 lg:w-10 h-8 lg:h-10 bg-gradient-to-br from-teal-500/40 to-emerald-500/40 rounded-full flex items-center justify-center animate-icon-mega-bounce backdrop-blur-sm border border-teal-400/30">
                      <Code className="w-4 lg:w-5 h-4 lg:h-5 text-teal-300 animate-brain-pulse" />
                    </div>
                    <h1 className="text-white text-xl lg:text-2xl font-bold bg-gradient-to-r from-teal-300 to-emerald-300 bg-clip-text text-transparent">
                      Finyra
                    </h1>
                  </div>
                </div>

                {/* AI Features Section */}
                <div className="px-4 lg:px-6 py-2">
                  <h2
                    className={`text-teal-300 text-base lg:text-lg font-semibold mb-3 lg:mb-4 transition-all duration-500 delay-900 animate-text-glow ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                  >
                    AI Features
                  </h2>

                  {/* Feature Items with Epic Animations */}
                  <div className="space-y-2 lg:space-y-3">
                    {/* Feature 1 - Smart Builder */}
                    <div
                      className={`flex items-center gap-2 lg:gap-3 bg-gradient-to-r from-slate-700/60 to-slate-600/40 rounded-lg lg:rounded-xl p-2 lg:p-3 hover:from-teal-800/40 hover:to-emerald-800/40 hover:scale-105 cursor-pointer group backdrop-blur-sm border border-slate-600/40 hover:border-teal-400/40 transition-all duration-300`}
                      style={{
                        opacity: 0,
                        transform: "translateX(-48px) scale(0.9) rotateY(-15deg)",
                        animation: isLoaded
                          ? "noteSlideInEpic 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.9s forwards, noteHoverEpic 3s ease-in-out 3.9s infinite"
                          : "none",
                      }}
                    >
                      <div className="w-6 lg:w-8 h-6 lg:h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                        <Zap className="w-3 lg:w-4 h-3 lg:h-4 text-white relative z-10 group-hover:rotate-12 transition-transform duration-300 animate-zap-glow" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      </div>
                      <div className="flex-1 relative">
                        <div
                          className="h-1.5 lg:h-2 bg-gradient-to-r from-slate-500/60 to-slate-400/40 rounded w-3/4 relative overflow-hidden"
                          style={{
                            animation: isLoaded ? "loadingBarFillEpic 1.0s ease-out 1.1s forwards" : "none",
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-teal-400/80 to-emerald-400/80 rounded transform -translate-x-full animate-shimmer-epic"></div>
                        </div>
                      </div>
                      <span
                        className="text-slate-400 text-xs lg:text-sm transition-all duration-300 group-hover:text-teal-300 group-hover:translate-x-1 group-hover:scale-110"
                        style={{
                          animation: isLoaded ? "arrowBounceEpic 0.5s ease-out 1.7s" : "none",
                        }}
                      >
                        {">"}
                      </span>
                    </div>

                    {/* Feature 2 - AI Assistant */}
                    <div
                      className={`flex items-center gap-2 lg:gap-3 bg-gradient-to-r from-slate-700/60 to-slate-600/40 rounded-lg lg:rounded-xl p-2 lg:p-3 hover:from-teal-800/40 hover:to-emerald-800/40 hover:scale-105 cursor-pointer group backdrop-blur-sm border border-slate-600/40 hover:border-teal-400/40 transition-all duration-300`}
                      style={{
                        opacity: 0,
                        transform: "translateX(-48px) scale(0.9) rotateY(-15deg)",
                        animation: isLoaded
                          ? "noteSlideInEpic 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 1.05s forwards, noteHoverEpic 3s ease-in-out 4.05s infinite"
                          : "none",
                      }}
                    >
                      <div className="w-6 lg:w-8 h-6 lg:h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                        <Brain className="w-3 lg:w-4 h-3 lg:h-4 text-white relative z-10 group-hover:rotate-12 transition-transform duration-300 animate-brain-pulse" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      </div>
                      <div className="flex-1 relative">
                        <div
                          className="h-1.5 lg:h-2 bg-gradient-to-r from-slate-500/60 to-slate-400/40 rounded w-2/3 relative overflow-hidden"
                          style={{
                            animation: isLoaded ? "loadingBarFillEpic 1.0s ease-out 1.25s forwards" : "none",
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/80 to-cyan-400/80 rounded transform -translate-x-full animate-shimmer-epic delay-200"></div>
                        </div>
                      </div>
                      <span
                        className="text-slate-400 text-xs lg:text-sm transition-all duration-300 group-hover:text-teal-300 group-hover:translate-x-1 group-hover:scale-110"
                        style={{
                          animation: isLoaded ? "arrowBounceEpic 0.5s ease-out 1.85s" : "none",
                        }}
                      >
                        {">"}
                      </span>
                    </div>

                    {/* Feature 3 - Smart Templates */}
                    <div
                      className={`flex items-center gap-2 lg:gap-3 bg-gradient-to-r from-slate-700/60 to-slate-600/40 rounded-lg lg:rounded-xl p-2 lg:p-3 hover:from-teal-800/40 hover:to-emerald-800/40 hover:scale-105 cursor-pointer group backdrop-blur-sm border border-slate-600/40 hover:border-teal-400/40 transition-all duration-300`}
                      style={{
                        opacity: 0,
                        transform: "translateX(-48px) scale(0.9) rotateY(-15deg)",
                        animation: isLoaded
                          ? "noteSlideInEpic 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 1.2s forwards, noteHoverEpic 3s ease-in-out 4.2s infinite"
                          : "none",
                      }}
                    >
                      <div className="w-6 lg:w-8 h-6 lg:h-8 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                        <Layers className="w-3 lg:w-4 h-3 lg:h-4 text-white relative z-10 group-hover:rotate-12 transition-transform duration-300 animate-folder-glow" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      </div>
                      <div className="flex-1 relative">
                        <div
                          className="h-1.5 lg:h-2 bg-gradient-to-r from-slate-500/60 to-slate-400/40 rounded w-1/2 relative overflow-hidden"
                          style={{
                            animation: isLoaded ? "loadingBarFillEpic 1.0s ease-out 1.4s forwards" : "none",
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/80 to-teal-400/80 rounded transform -translate-x-full animate-shimmer-epic delay-400"></div>
                        </div>
                      </div>
                      <span
                        className="text-slate-400 text-xs lg:text-sm transition-all duration-300 group-hover:text-teal-300 group-hover:translate-x-1 group-hover:scale-110"
                        style={{
                          animation: isLoaded ? "arrowBounceEpic 0.5s ease-out 2s" : "none",
                        }}
                      >
                        {">"}
                      </span>
                    </div>

                    {/* Feature 4 - Security */}
                    <div
                      className={`flex items-center gap-2 lg:gap-3 bg-gradient-to-r from-slate-700/60 to-slate-600/40 rounded-lg lg:rounded-xl p-2 lg:p-3 hover:from-teal-800/40 hover:to-emerald-800/40 hover:scale-105 cursor-pointer group backdrop-blur-sm border border-slate-600/40 hover:border-teal-400/40 transition-all duration-300`}
                      style={{
                        opacity: 0,
                        transform: "translateX(-48px) scale(0.9) rotateY(-15deg)",
                        animation: isLoaded
                          ? "noteSlideInEpic 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 1.35s forwards, noteHoverEpic 3s ease-in-out 4.35s infinite"
                          : "none",
                      }}
                    >
                      <div className="w-6 lg:w-8 h-6 lg:h-8 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-full flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                        <Shield className="w-3 lg:w-4 h-3 lg:h-4 text-white relative z-10 group-hover:rotate-12 transition-transform duration-300 animate-shield-glow" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      </div>
                      <div className="flex-1 relative">
                        <div
                          className="h-1.5 lg:h-2 bg-gradient-to-r from-slate-500/60 to-slate-400/40 rounded w-3/5 relative overflow-hidden"
                          style={{
                            animation: isLoaded ? "loadingBarFillEpic 1.0s ease-out 1.55s forwards" : "none",
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-teal-400/80 to-emerald-400/80 rounded transform -translate-x-full animate-shimmer-epic delay-600"></div>
                        </div>
                      </div>
                      <span
                        className="text-slate-400 text-xs lg:text-sm transition-all duration-300 group-hover:text-teal-300 group-hover:translate-x-1 group-hover:scale-110"
                        style={{
                          animation: isLoaded ? "arrowBounceEpic 0.5s ease-out 2.15s" : "none",
                        }}
                      >
                        {">"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Navigation */}
                <div
                  className={`absolute bottom-6 lg:bottom-8 left-0 right-0 px-4 lg:px-6 transition-all duration-500 delay-1400 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                >
                  <div className="flex justify-around items-center bg-gradient-to-r from-slate-700/60 to-slate-600/40 rounded-xl lg:rounded-2xl py-2 lg:py-3 backdrop-blur-sm border border-slate-600/40">
                    <BarChart3 className="w-5 lg:w-6 h-5 lg:h-6 text-slate-400 hover:text-teal-300 hover:scale-125 transition-all duration-300 cursor-pointer animate-chart-glow" />
                    <Bell className="w-5 lg:w-6 h-5 lg:h-6 text-teal-300 hover:scale-125 transition-all duration-300 cursor-pointer animate-bell-ring-epic" />
                    <User className="w-5 lg:w-6 h-5 lg:h-6 text-slate-400 hover:text-teal-300 hover:scale-125 transition-all duration-300 cursor-pointer animate-user-glow" />
                  </div>
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-1.5 lg:bottom-2 left-1/2 transform -translate-x-1/2 w-24 lg:w-32 h-0.5 lg:h-1 bg-slate-600/50 rounded-full animate-pulse-mega"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Content - Mobile First */}
        <div
          className={`flex-1 max-w-xl lg:max-w-2xl text-center lg:text-left order-1 lg:order-2 lg:ml-8 xl:ml-12 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{
            transition: "opacity 1s ease-out 0.5s, transform 1s ease-out 0.5s",
          }}
        >
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 md:mb-8 animate-text-epic">
            <span className="inline-block animate-slide-up-epic delay-600 bg-gradient-to-r from-white via-teal-200 to-emerald-200 bg-clip-text text-transparent">
              Build Smart Apps
            </span>
            <br />
            <span className="inline-block animate-slide-up-epic delay-800 bg-gradient-to-r from-emerald-200 via-teal-200 to-cyan-200 bg-clip-text text-transparent">
              with Finyra
            </span>
          </h1>

          <p className="text-slate-300 text-lg md:text-xl mb-8 md:mb-10 animate-text-fade-in">
            Revolutionary AI-powered platform that transforms mobile app development with intelligent code generation
            and seamless workflow integration.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start transition-all duration-500 delay-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <Button
              onClick={scrollToAbout}
              size="lg"
              className="relative bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-white px-6 py-4 md:px-8 md:py-6 text-base md:text-lg rounded-xl font-semibold w-full sm:w-auto hover:scale-110 hover:shadow-2xl transition-all duration-300 animate-button-glow-epic overflow-hidden group border border-teal-400/30"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <Rocket className="w-5 h-5 mr-2 relative z-10 animate-rocket-glow" />
              <span className="relative z-10">Start Building</span>
            </Button>
            <Dialog open={isEarlyAccessOpen} onOpenChange={setIsEarlyAccessOpen}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  variant="outline"
                  className="relative bg-transparent border-2 border-teal-400/50 hover:bg-teal-500/10 text-teal-300 hover:text-white px-6 py-4 md:px-8 md:py-6 text-base md:text-lg rounded-xl font-semibold w-full sm:w-auto hover:scale-110 hover:shadow-2xl transition-all duration-300 overflow-hidden group backdrop-blur-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <Star className="w-5 h-5 mr-2 relative z-10 animate-star-glow" />
                  <span className="relative z-10">Get Early Access</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md bg-slate-900/95 backdrop-blur-xl border-teal-500/30">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2 text-white">
                    <Code className="w-5 h-5 text-teal-400 animate-brain-pulse" />
                    Get Early Access to Finyra
                  </DialogTitle>
                  <DialogDescription className="text-slate-300">
                    Be among the first to experience the future of AI-powered mobile app development.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      className="bg-slate-800/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-teal-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="bg-slate-800/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-teal-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-white">
                      Company (Optional)
                    </Label>
                    <Input
                      id="company"
                      placeholder="Your company name"
                      className="bg-slate-800/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-teal-400"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-white font-semibold py-3 rounded-lg hover:scale-105 transition-all duration-300 animate-button-glow-epic">
                    <Sparkles className="w-4 h-4 mr-2 animate-spin-slow" />
                    Join Waitlist
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Twitter Button */}
          <div className="mt-8 flex justify-center lg:justify-start">
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="relative text-slate-300 hover:text-teal-300 px-6 py-3 text-base rounded-xl font-semibold hover:scale-110 hover:bg-slate-800/50 transition-all duration-300 overflow-hidden group backdrop-blur-sm border border-slate-700/50 hover:border-teal-400/30"
            >
              <a href="https://x.com/FINYRA_?t=_qqOYWCJTw1nvB3_9-PXOA&s=09" target="_blank" rel="noopener noreferrer">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Twitter className="w-5 h-5 mr-2 relative z-10 animate-twitter-glow" />
                <span className="relative z-10">Follow us on Twitter</span>
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* About the AI Section */}
      <section id="about-ai" className="py-16 md:py-24 px-4 md:px-6 lg:px-12 xl:px-16 max-w-7xl mx-auto relative">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 animate-text-glow bg-gradient-to-r from-white via-teal-200 to-emerald-200 bg-clip-text text-transparent">
              About Finyra
            </h2>
            <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto animate-text-fade-in">
              Revolutionary AI technology that transforms how you build mobile applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="bg-slate-800/60 backdrop-blur-xl border-slate-700/50 hover:border-teal-400/50 hover:bg-slate-800/80 transition-all duration-500 hover:scale-105 hover:rotate-1 group animate-card-float">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 animate-icon-glow">
                  <Brain className="w-6 h-6 text-white animate-brain-pulse" />
                </div>
                <CardTitle className="text-white group-hover:text-teal-200 transition-colors duration-300">
                  Intelligent Code Generation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 group-hover:text-white transition-colors duration-300">
                  Our AI understands your requirements and generates optimized, production-ready code for your mobile
                  applications.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/60 backdrop-blur-xl border-slate-700/50 hover:border-emerald-400/50 hover:bg-slate-800/80 transition-all duration-500 hover:scale-105 hover:rotate-1 group animate-card-float delay-200">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 animate-icon-glow">
                  <Zap className="w-6 h-6 text-white animate-zap-glow" />
                </div>
                <CardTitle className="text-white group-hover:text-emerald-200 transition-colors duration-300">
                  Lightning Fast Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 group-hover:text-white transition-colors duration-300">
                  Reduce development time by 90% with our AI-powered automation and smart template generation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/60 backdrop-blur-xl border-slate-700/50 hover:border-cyan-400/50 hover:bg-slate-800/80 transition-all duration-500 hover:scale-105 hover:rotate-1 group animate-card-float delay-400">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 animate-icon-glow">
                  <Shield className="w-6 h-6 text-white animate-shield-glow" />
                </div>
                <CardTitle className="text-white group-hover:text-cyan-200 transition-colors duration-300">
                  Enterprise Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 group-hover:text-white transition-colors duration-300">
                  Built with enterprise-grade security features and compliance standards to protect your applications.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-12 xl:px-16 max-w-7xl mx-auto relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 animate-text-glow bg-gradient-to-r from-emerald-200 via-teal-200 to-cyan-200 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto animate-text-fade-in">
              Everything you need to know about Finyra
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <Collapsible
                key={index}
                open={openFAQ === index}
                onOpenChange={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <Card className="bg-slate-800/60 backdrop-blur-xl border-slate-700/50 hover:border-teal-400/50 transition-all duration-500 hover:scale-[1.02] group animate-card-float">
                  <CollapsibleTrigger asChild>
                    <CardHeader className="cursor-pointer hover:bg-slate-800/40 transition-colors duration-300 rounded-t-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-icon-glow">
                            <HelpCircle className="w-4 h-4 text-white animate-help-glow" />
                          </div>
                          <CardTitle className="text-white text-left group-hover:text-teal-200 transition-colors duration-300">
                            {faq.question}
                          </CardTitle>
                        </div>
                        {openFAQ === index ? (
                          <ChevronUp className="w-5 h-5 text-slate-400 group-hover:text-teal-300 transition-all duration-300 animate-chevron-glow" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-slate-400 group-hover:text-teal-300 transition-all duration-300 animate-chevron-glow" />
                        )}
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="pt-0">
                      <p className="text-slate-300 leading-relaxed animate-text-fade-in">{faq.answer}</p>
                    </CardContent>
                  </CollapsibleContent>
                </Card>
              </Collapsible>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-12 xl:px-16 max-w-7xl mx-auto relative">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 animate-text-glow bg-gradient-to-r from-teal-200 via-emerald-200 to-cyan-200 bg-clip-text text-transparent">
              Tokenomics
            </h2>
            <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto animate-text-fade-in">
              Powering the future of AI development with our native token ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
            <Card className="bg-slate-800/60 backdrop-blur-xl border-slate-700/50 text-center hover:scale-110 transition-all duration-500 group animate-card-float">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 animate-coin-spin">
                  <Coins className="w-8 h-8 text-white animate-coin-glow" />
                </div>
                <CardTitle className="text-white text-2xl animate-number-glow">1B</CardTitle>
                <p className="text-slate-300">Total Supply</p>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/60 backdrop-blur-xl border-slate-700/50 text-center hover:scale-110 transition-all duration-500 group animate-card-float delay-100">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 animate-trend-bounce">
                  <TrendingUp className="w-8 h-8 text-white animate-trend-glow" />
                </div>
                <CardTitle className="text-white text-2xl animate-number-glow">40%</CardTitle>
                <p className="text-slate-300">Development & Rewards</p>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/60 backdrop-blur-xl border-slate-700/50 text-center hover:scale-110 transition-all duration-500 group animate-card-float delay-200">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 animate-users-pulse">
                  <Users className="w-8 h-8 text-white animate-users-glow" />
                </div>
                <CardTitle className="text-white text-2xl animate-number-glow">30%</CardTitle>
                <p className="text-slate-300">Community & Ecosystem</p>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/60 backdrop-blur-xl border-slate-700/50 text-center hover:scale-110 transition-all duration-500 group animate-card-float delay-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 animate-lock-shake">
                  <Lock className="w-8 h-8 text-white animate-lock-glow" />
                </div>
                <CardTitle className="text-white text-2xl animate-number-glow">30%</CardTitle>
                <p className="text-slate-300">Team & Advisors</p>
              </CardHeader>
            </Card>
          </div>

          <Card className="bg-slate-800/60 backdrop-blur-xl border-slate-700/50 hover:border-teal-400/50 transition-all duration-500 hover:scale-105 group">
            <CardHeader>
              <CardTitle className="text-white text-xl group-hover:text-teal-200 transition-colors duration-300 animate-text-glow">
                Token Utility
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group/item hover:scale-105 transition-transform duration-300">
                  <h4 className="text-white font-semibold mb-2 group-hover/item:text-teal-200 transition-colors duration-300">
                    Platform Access
                  </h4>
                  <p className="text-slate-300 text-sm group-hover/item:text-white transition-colors duration-300">
                    Use tokens to access premium AI features and advanced development tools.
                  </p>
                </div>
                <div className="group/item hover:scale-105 transition-transform duration-300">
                  <h4 className="text-white font-semibold mb-2 group-hover/item:text-emerald-200 transition-colors duration-300">
                    Governance
                  </h4>
                  <p className="text-slate-300 text-sm group-hover/item:text-white transition-colors duration-300">
                    Participate in platform governance and vote on future developments.
                  </p>
                </div>
                <div className="group/item hover:scale-105 transition-transform duration-300">
                  <h4 className="text-white font-semibold mb-2 group-hover/item:text-cyan-200 transition-colors duration-300">
                    Staking Rewards
                  </h4>
                  <p className="text-slate-300 text-sm group-hover/item:text-white transition-colors duration-300">
                    Stake tokens to earn rewards and unlock exclusive features.
                  </p>
                </div>
                <div className="group/item hover:scale-105 transition-transform duration-300">
                  <h4 className="text-white font-semibold mb-2 group-hover/item:text-teal-200 transition-colors duration-300">
                    Marketplace
                  </h4>
                  <p className="text-slate-300 text-sm group-hover/item:text-white transition-colors duration-300">
                    Trade AI-generated templates and components in our marketplace.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Customer Support Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-12 xl:px-16 max-w-7xl mx-auto relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 animate-text-glow bg-gradient-to-r from-emerald-200 via-teal-200 to-cyan-200 bg-clip-text text-transparent">
              Customer Support
            </h2>
            <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto animate-text-fade-in">
              We're here to help you succeed with Finyra
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <Card className="bg-slate-800/60 backdrop-blur-xl border-slate-700/50 hover:border-emerald-400/50 hover:bg-slate-800/80 transition-all duration-500 hover:scale-105 hover:rotate-1 group animate-card-float">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 animate-phone-ring">
                  <Phone className="w-8 h-8 text-white animate-phone-glow" />
                </div>
                <CardTitle className="text-white text-xl text-center group-hover:text-emerald-200 transition-colors duration-300">
                  Phone Support
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-300 mb-4 group-hover:text-white transition-colors duration-300">
                  Speak directly with our AI specialists for immediate assistance
                </p>
                <div className="space-y-2">
                  <p className="text-white font-semibold text-lg animate-phone-number-glow">+1 555 927538</p>
                  <p className="text-slate-400 text-sm">Monday - Friday: 9AM - 6PM PST</p>
                  <p className="text-slate-400 text-sm">Saturday: 10AM - 4PM PST</p>
                </div>
                <Button className="mt-6 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white hover:scale-110 transition-all duration-300 animate-button-glow-epic">
                  <Phone className="w-4 h-4 mr-2 animate-phone-glow" />
                  Call Now
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/60 backdrop-blur-xl border-slate-700/50 hover:border-teal-400/50 hover:bg-slate-800/80 transition-all duration-500 hover:scale-105 hover:rotate-1 group animate-card-float delay-200">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 animate-mail-bounce">
                  <Mail className="w-8 h-8 text-white animate-mail-glow" />
                </div>
                <CardTitle className="text-white text-xl text-center group-hover:text-teal-200 transition-colors duration-300">
                  Email Support
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-300 mb-4 group-hover:text-white transition-colors duration-300">
                  Get detailed help and documentation via email
                </p>
                <div className="space-y-2">
                  <p className="text-white font-semibold animate-email-glow">support@finyra.ai</p>
                  <p className="text-slate-400 text-sm">Response time: Within 2 hours</p>
                  <p className="text-slate-400 text-sm">Available 24/7</p>
                </div>
                <Button className="mt-6 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-white hover:scale-110 transition-all duration-300 animate-button-glow-epic">
                  <Mail className="w-4 h-4 mr-2 animate-mail-glow" />
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-slate-800/60 backdrop-blur-xl border-slate-700/50 mt-8 hover:border-teal-400/50 transition-all duration-500 hover:scale-105 group">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="group/item hover:scale-110 transition-transform duration-300">
                  <h4 className="text-white font-semibold mb-2 group-hover/item:text-teal-200 transition-colors duration-300">
                    Enterprise Support
                  </h4>
                  <p className="text-slate-300 text-sm group-hover/item:text-white transition-colors duration-300">
                    Dedicated account manager and priority support for enterprise customers
                  </p>
                </div>
                <div className="group/item hover:scale-110 transition-transform duration-300">
                  <h4 className="text-white font-semibold mb-2 group-hover/item:text-emerald-200 transition-colors duration-300">
                    Developer Resources
                  </h4>
                  <p className="text-slate-300 text-sm group-hover/item:text-white transition-colors duration-300">
                    Comprehensive documentation, tutorials, and community forums
                  </p>
                </div>
                <div className="group/item hover:scale-110 transition-transform duration-300">
                  <h4 className="text-white font-semibold mb-2 group-hover/item:text-cyan-200 transition-colors duration-300">
                    Live Chat
                  </h4>
                  <p className="text-slate-300 text-sm group-hover/item:text-white transition-colors duration-300">
                    Instant support through our website chat for quick questions
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
