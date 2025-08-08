import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Rocket } from 'lucide-react'

function Banner() {
      const [isLoaded, setIsLoaded] = useState(false);

       const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-ai");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
        <div
          className={`flex-1 max-w-xl lg:max-w-2xl text-center lg:text-left order-1 lg:order-2 lg:ml-8 xl:ml-12 ${
            isLoaded ? "opacity-100 trangradient-y-0" : "opacity-0 trangradient-y-8"
          }`}
          style={{
            transition: "opacity 1s ease-out 0.5s, transform 1s ease-out 0.5s",
          }}
        >
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 md:mb-8 animate-text-epic">
            <span className="inline-block animate-slide-up-epic delay-600 bg-gradient-to-r from-white via-primary-200 to-primary-200 bg-clip-text text-transparent">
              Find Your Perfect Brew, Anywhere.
            </span>
            <br />
            <span className="inline-block animate-slide-up-epic delay-800 bg-gradient-to-r from-primary-200 via-primary-200 to-cyan-200 bg-clip-text text-transparent">
              with CoffeeNest
            </span>
          </h1>

          <p className="text-gradient-300 text-lg md:text-xl mb-8 md:mb-10 animate-text-fade-in">
            Discover, review, and share the best coffee spots in town — from
            espresso bars to cozy latte corners.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start transition-all duration-500 delay-1000 ${
              isLoaded ? "opacity-100 trangradient-y-0" : "opacity-0 trangradient-y-4"
            }`}
          >
            <Button
              onClick={scrollToAbout}
              size="lg"
              className="relative bg-gradient-to-r from-primary-500 to-primary-500 hover:from-primary-400 hover:to-primary-400 text-white px-6 py-4 md:px-8 md:py-6 text-base md:text-lg rounded-xl font-semibold w-full sm:w-auto hover:scale-110 hover:shadow-2xl transition-all duration-300 animate-button-glow-epic overflow-hidden group border border-primary-400/30"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -trangradient-x-full group-hover:trangradient-x-full transition-transform duration-700"></div>
              <Rocket className="w-5 h-5 mr-2 relative z-10 animate-rocket-glow" />
              <span className="relative z-10">Start Building</span>
            </Button>
          </div>

          {/* Coffee Lovers Button */}
          <div className="mt-8 flex justify-center lg:justify-start">
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="relative text-gradient-300 hover:text-primary-300 px-6 py-3 text-base rounded-xl font-semibold hover:scale-110 hover:bg-gradient-800/50 transition-all duration-300 overflow-hidden group backdrop-blur-sm border border-gradient-700/50 hover:border-primary-400/30"
            >
              <a
                href="https://x.com/FINYRA_?t=_qqOYWCJTw1nvB3_9-PXOA&s=09"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">
                  For Coffee Lovers, By Coffee Lovers
                </span>
              </a>
            </Button>
          </div>
        </div>
    </div>
  )
}

export default Banner
