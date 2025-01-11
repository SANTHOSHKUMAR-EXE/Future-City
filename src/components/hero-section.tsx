import { Button } from "@/components/ui/button"
import { Calculator, MapPin, Shield } from 'lucide-react'
import BlurIn from "@/components/ui/blur-in";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";


export function HeroSection() {
  const floatingIcons = [
    { Icon: Calculator, style: "top-1/4 left-1/4" },
    { Icon: Shield, style: "top-1/3 right-1/4" },
    { Icon: MapPin, style: "bottom-1/4 left-1/3" },
  ]

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#1a0b2e]">
     <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[170%] skew-y-12",
        )}
      />
    
   
      
      {/* Floating icons */}
      {floatingIcons.map(({ Icon, style }, index) => (
        <div
          key={index}
          className={`absolute ${style} hidden md:block animate-float transition-transform hover:scale-110`}
        >
          <div className="group rounded-full border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10">
            <Icon className="h-6 w-6 text-white transition-transform duration-300 group-hover:scale-110" />
          </div>
        </div>
      ))}

      {/* Content */}
      
      <div className="container relative px-4 pt-32 pb-48 md:pt-48 md:pb-64 lg:pt-56 lg:pb-72">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs md:px-4 md:py-1.5 md:text-sm text-white/70 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10">
            AI-Powered Urban Planning Solutions
          </div>
          
          <BlurIn
            word="Building Smart Cities for a Connected Future"
            className="mt-8 md:mt-12 text-white bg-clip-text text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight transition-all duration-300"
          />
            
          
    
          <p className="mt-6 md:mt-8 text-base md:text-lg text-white/70 transition-colors duration-300 hover:text-white/90 px-6 md:px-0">
            Transform urban living with cutting-edge technology. Our Future city solutions 
            integrate sustainability, safety, and convenience for a better tomorrow.
          </p>
          <div className="mt-10 md:mt-12 flex items-center justify-center gap-4 px-4 md:px-0">
            <Button 
              className="group relative h-12 overflow-hidden rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 px-8 text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_0_rgba(139,92,246,0.3)] hover:from-purple-600 hover:to-indigo-700"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Features
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 scale-x-0 bg-gradient-to-r from-indigo-600 to-purple-600 transition-transform duration-300 group-hover:scale-x-100" />
            </Button>
          </div>
        </div>
      </div>

      {/* Stats section - Repositioned to bottom */}
      <div className="container relative mx-auto px-4 md:px-6 mb-16 md:mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {[
            { value: "500+", label: "Smart Buildings Connected" },
            { value: "240+", label: "Active City Zones" },
            { value: "98%", label: "User Satisfaction Rate" },
          ].map((stat, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 md:p-10 text-center backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:scale-105 hover:shadow-[0_0_40px_0_rgba(139,92,246,0.1)]"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-white/0 transition-opacity duration-300 group-hover:opacity-50" />
              <div className="relative space-y-3">
                <div className="text-4xl font-bold text-white transition-transform duration-300 group-hover:scale-110">{stat.value}</div>
                <div className="text-sm text-white/70 transition-colors duration-300 group-hover:text-white/90">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

