"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Lock,
  Phone,
  Mail,
  Coins,
  TrendingUp,
  Users,
  Sparkles,
  Rocket,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";
import Faq from "@/components/home/Faq";
import About from "@/components/home/About";
import Banner from "@/components/home/Banner";

export default function FinyraLanding() {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number; size: number; speed: number }>
  >([]);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);

    // Initialize particles
    const newParticles = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 1.5 + 0.3,
    }));
    setParticles(newParticles);

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

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
        }))
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    const particleInterval = setInterval(animateParticles, 60);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(particleInterval);
    };
  }, []);

 
  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-gradient-900 via-gradient-800 to-gray-900 relative overflow-hidden"
      style={{
        background: `
    radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(20, 184, 166, 0.15) 0%, transparent 50%),
    linear-gradient(135deg, #F3E5AB 0%, #E6CFA8 25%, #E6CFA8 50%, #E6CFA8 75%, #C7A17A 100%)
  `,
      }}
    >
      {/* Dynamic Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-primary-400/30 animate-pulse"
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
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-mega-float"></div>
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary-400/20 rounded-full blur-3xl animate-mega-float-reverse"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-cyan-500/15 rounded-full blur-2xl animate-pulse-mega"></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-primary-400/15 rounded-full blur-2xl animate-bounce-mega"></div>

        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-primary-400/40 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-primary-400/40 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-32 left-16 w-3 h-3 bg-cyan-400/50 animate-ping"></div>
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-primary-500/40 rotate-45 animate-spin-reverse"></div>
      </div>

      {/* Header */}
      <header
        className={`flex justify-between items-center p-4 md:p-6 transition-all duration-1000 backdrop-blur-sm ${
          isLoaded ? "opacity-100 trangradient-y-0" : "opacity-0 -trangradient-y-4"
        }`}
      >
        <div></div>
        <div className="flex items-center gap-2 md:gap-4">
          <span className="text-white font-bold text-sm md:text-base animate-glow-text cursor-pointer hover:scale-110 transition-transform duration-300">
            Finyra
          </span>
          <Badge
            variant="secondary"
            className="bg-gradient-to-r from-primary to-gradient text-white border-secondary px-3 py-1 md:px-5 md:py-2 font-medium text-sm cursor-pointer md:text-base animate-badge-glow hover:scale-110 hover:rotate-3 transition-all duration-300 backdrop-blur-sm"
          >
            <Sparkles className="w-3 h-3 mr-1 animate-spin-slow" />
            AI Powered
          </Badge>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 md:px-6 lg:px-12 xl:px-16 py-8 lg:py-4 gap-12 md:gap-16 lg:gap-8 xl:gap-12 max-w-7xl mx-auto">
        <Banner />
      </div>

      {/* About the AI Section */}
      <section
        id="about-ai"
        className="py-16 md:py-24 px-4 md:px-6 lg:px-12 xl:px-16 max-w-7xl mx-auto relative"
      >
        <About />
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-12 xl:px-16 max-w-7xl mx-auto relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-primary-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 animate-text-glow bg-gradient-to-r from-primary-200 via-primary-200 to-cyan-200 bg-clip-text ">
              Frequently Asked Questions
            </h2>
            <p className="text-gradient-300 text-lg md:text-xl max-w-3xl mx-auto animate-text-fade-in">
              Everything you need to know about Finyra
            </p>
          </div>

          <div className="max-w-4xl mx-auto ">
            <Faq />
          </div>
        </div>
      </section>

    </div>
  );
}
