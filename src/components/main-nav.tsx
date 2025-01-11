"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { BriefcaseMedical, Calculator, MapPin, Shield, Menu, X } from 'lucide-react'
import { useState } from "react"

export function MainNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  
  const routes = [
    {
      href: "/carbon-calculator",
      label: "Carbon Calculator",
      icon: Calculator,
      active: pathname === "/carbon-calculator",
    },
    {
      href: "/women-safety",
      label: "Women and Child Safety",
      icon: Shield,
      active: pathname === "/women-safety",
    },
    {
      href: "/nearby-amenities",
      label: "Nearby Amenities",
      icon: MapPin,
      active: pathname === "/nearby-amenities",
    },
    {
      href: "/DDoS-Mitigation",
      label: "DDoS Mitigation",
      icon: Shield,
      active: pathname === "/DDoS-Mitigation",
    },
    {
      href: "/health",
      label: "Health",
      icon: BriefcaseMedical,
      active: pathname === "/health",
    },
  ]

  return (
    <nav className="relative">
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-white"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-12 left-0 right-0 bg-black/90 p-4 rounded-lg md:hidden">
          <div className="flex flex-col space-y-4">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "group flex items-center gap-2 text-sm transition-all duration-300 hover:scale-105",
                  route.active ? "text-white" : "text-white/70 hover:text-white"
                )}
              >
                <route.icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                <span className="relative">
                  {route.label}
                  <span className="absolute inset-x-0 -bottom-1 h-px scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "group flex items-center gap-2 text-sm transition-all duration-300 hover:scale-105",
              route.active ? "text-white" : "text-white/70 hover:text-white"
            )}
          >
            <route.icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
            <span className="relative">
              {route.label}
              <span className="absolute inset-x-0 -bottom-1 h-px scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
            </span>
          </Link>
        ))}
      </div>
    </nav>
  )
}

