import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Brain, Shield, Zap } from "lucide-react";
function About() {
  return (
    <div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-primary-500/10 rounded-3xl blur-3xl"></div>
      <div className="relative">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 animate-text-glow bg-gradient-to-r from-white via-primary-200 to-primary-200 bg-clip-text">
            About CoffeeNest
          </h2>
          <p className="text-gradient-300 text-lg md:text-xl max-w-3xl mx-auto animate-text-fade-in">
            CoffeeNest is your go-to mobile guide for finding, rating, and
            reviewing coffee shops. Whether you’re hunting for a smooth flat
            white, a strong espresso, or the perfect cold brew, we help you
            discover the best cafes near you — with honest reviews from real
            coffee lovers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <Card className="bg-gradient-800/60 backdrop-blur-xl border-gradient-700/50 hover:border-primary-400/50 hover:bg-gradient-800/80 transition-all duration-500 hover:scale-105 hover:rotate-1 group animate-card-float">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 animate-icon-glow">
                <Brain className="w-6 h-6 text-white animate-brain-pulse" />
              </div>
              <CardTitle className="text-white group-hover:text-primary-200 transition-colors duration-300">
                Local Coffee Shop Finder
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gradient-300 group-hover:text-white transition-colors duration-300">
                Find the best spots nearby instantly.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-800/60 backdrop-blur-xl border-gradient-700/50 hover:border-primary-400/50 hover:bg-gradient-800/80 transition-all duration-500 hover:scale-105 hover:rotate-1 group animate-card-float delay-200">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 animate-icon-glow">
                <Zap className="w-6 h-6 text-white animate-zap-glow" />
              </div>
              <CardTitle className="text-white group-hover:text-primary-200 transition-colors duration-300">
                Community Reviews
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gradient-300 group-hover:text-white transition-colors duration-300">
                Read honest feedback from fellow coffee enthusiasts.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-800/60 backdrop-blur-xl border-gradient-700/50 hover:border-cyan-400/50 hover:bg-gradient-800/80 transition-all duration-500 hover:scale-105 hover:rotate-1 group animate-card-float delay-400">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 animate-icon-glow">
                <Shield className="w-6 h-6 text-white animate-shield-glow" />
              </div>
              <CardTitle className="text-white group-hover:text-cyan-200 transition-colors duration-300">
                Photo Sharing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gradient-300 group-hover:text-white transition-colors duration-300">
                Show off that beautiful latte art.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default About;
