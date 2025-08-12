import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { MapPin, Star, Camera, Users, Coffee, Heart } from "lucide-react"

function About() {
  const features = [
    {
      icon: MapPin,
      title: "Local Coffee Shop Finder",
      description: "Find the best spots nearby instantly with our smart location-based search.",
      color: "from-[#0F430F] to-[#0F430F]/80",
    },
    {
      icon: Star,
      title: "Community Reviews",
      description: "Read honest feedback from fellow coffee enthusiasts and share your experiences.",
      color: "from-red-600 to-red-700",
    },
    {
      icon: Camera,
      title: "Photo Sharing",
      description: "Show off that beautiful latte art and cozy cafe atmospheres.",
      color: "from-[#ACBDA8] to-[#ACBDA8]/80",
    },
    {
      icon: Users,
      title: "Coffee Community",
      description: "Connect with other coffee lovers and discover new favorites together.",
      color: "from-[#0F430F] to-[#0F430F]/80",
    },
    {
      icon: Coffee,
      title: "Detailed Profiles",
      description: "Get comprehensive info about each cafe - menu, hours, wifi, and atmosphere.",
      color: "from-red-600 to-red-700",
    },
    {
      icon: Heart,
      title: "Personal Favorites",
      description: "Save your favorite spots and create personalized coffee shop collections.",
      color: "from-[#ACBDA8] to-[#ACBDA8]/80",
    },
  ]

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F430F]/10 to-red-600/5 rounded-3xl blur-3xl" />

      <div className="relative">
        <div className="text-center mb-16">
          <h1 className="text-3xl lg:text-5xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-[#0F430F] via-[#ACBDA8] via-white via-red-400 to-[#0F430F] bg-clip-text text-transparent animate-text-glow bg-[length:200%_200%] animate-gradient-x">
              About
            </span>
            <br />
            <span className="text-white text-4xl lg:text-6xl">CoffeeNest</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            CoffeeNest is your go-to mobile guide for finding, rating, and reviewing coffee shops. Whether you're
            hunting for a smooth flat white, a strong espresso, or the perfect cold brew, we help you discover the best
            cafes near you — with honest reviews from real coffee lovers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-black/50 border-[#ACBDA8]/20 hover:border-[#ACBDA8]/40 hover:shadow-lg hover:shadow-[#0F430F]/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 group shadow-sm backdrop-blur-sm"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <CardHeader>
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-white group-hover:text-gray-200 transition-colors duration-300 text-lg">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
