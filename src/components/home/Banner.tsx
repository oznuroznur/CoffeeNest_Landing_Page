import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star, Users, Coffee } from "lucide-react"

function Hero() {
  return (
    <section className="relative py-20 px-6 lg:px-12 xl:px-16 max-w-7xl mx-auto">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-green-400 rounded-full animate-ping" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
        <div className="absolute bottom-20 left-20 w-4 h-4 bg-green-300 rotate-45 animate-spin-slow" />
        <div className="absolute bottom-40 right-10 w-2 h-2 bg-green-600 rounded-full animate-bounce" />
      </div>

      <div className="text-center relative z-10">
        {/* Hero Badge */}
        <Badge className="mb-6 bg-green-100 text-green-800 border-green-200 px-4 py-2 text-sm font-medium hover:bg-green-200 transition-colors">
          <Coffee className="w-4 h-4 mr-2" />
          Discover Amazing Coffee Experiences
        </Badge>

        {/* Main Heading */}
        <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
          <span className="bg-gradient-to-r from-green-800 via-green-600 to-green-800 bg-clip-text text-transparent animate-text-glow">
            Find Your Perfect
          </span>
          <br />
          <span className="text-green-900">Coffee Spot</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl lg:text-2xl text-green-700 mb-12 max-w-4xl mx-auto leading-relaxed">
          CoffeeNest helps you discover, review, and share the best coffee shops near you. Join thousands of coffee
          lovers finding their next favorite brew.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <MapPin className="w-5 h-5 mr-2" />
            Find Coffee Shops
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 bg-transparent"
          >
            Learn More
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Coffee className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-green-800 mb-1">10K+</div>
            <div className="text-green-600">Coffee Shops</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-green-800 mb-1">50K+</div>
            <div className="text-green-600">Reviews</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-green-800 mb-1">25K+</div>
            <div className="text-green-600">Users</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
