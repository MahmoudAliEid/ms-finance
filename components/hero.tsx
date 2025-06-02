"use client"

import { BackgroundBeams } from "@/components/ui/aceternity/background-beams"
import { SparklesCore } from "@/components/ui/aceternity/sparkles"
import { TextGenerateEffect } from "@/components/ui/aceternity/text-generate-effect"
import { Button } from "@/components/ui/button"
import { animate, motion, useMotionValue, useTransform } from "framer-motion"
import { Award, ChevronRight, LineChart, Sparkles, TrendingUp, Users } from "lucide-react"
import { useEffect, useState } from "react"

function Counter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
  const count = useMotionValue(from)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const [displayValue, setDisplayValue] = useState(from)

  useEffect(() => {
    const controls = animate(count, to, { duration })
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest)
    })
    return () => {
      controls.stop()
      unsubscribe()
    }
  }, [count, to, duration, rounded])

  return <span>{displayValue}</span>
}

// SVG Logo Component
const MSLogo = ({ className = "w-32 h-32 md:w-40 md:h-40" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgb(59, 130, 246)" />
        <stop offset="50%" stopColor="rgb(34, 211, 238)" />
        <stop offset="100%" stopColor="rgb(20, 184, 166)" />
      </linearGradient>
      <linearGradient id="innerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgb(20, 184, 166)" />
        <stop offset="50%" stopColor="rgb(34, 211, 238)" />
        <stop offset="100%" stopColor="rgb(59, 130, 246)" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Outer ring */}
    <circle cx="100" cy="100" r="95" fill="url(#logoGradient)" filter="url(#glow)" />

    {/* Inner circle */}
    <circle cx="100" cy="100" r="75" fill="white" className="dark:fill-gray-900" />

    {/* MS Text */}
    <text
      x="100"
      y="115"
      textAnchor="middle"
      className="text-4xl md:text-5xl font-bold fill-current"
      fill="url(#innerGradient)"
    >
      MS
    </text>

    {/* Decorative elements */}
    <circle
      cx="100"
      cy="100"
      r="85"
      fill="none"
      stroke="url(#logoGradient)"
      strokeWidth="2"
      strokeDasharray="10,5"
      opacity="0.5"
    >
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        from="0 100 100"
        to="360 100 100"
        dur="20s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
)

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section
      id="hero"
      className="relative w-full mx-auto overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/50 to-cyan-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <BackgroundBeams className="opacity-20 dark:opacity-30" />
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#3b82f6"
        />
      </div>

      {/* Main content container with perfect centering */}
      <div className="relative z-10 w-full h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center text-center space-y-8 md:space-y-12">
            {/* Vector Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute -inset-8 md:-inset-12 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-full blur-3xl opacity-50 animate-pulse" />
              <motion.div
                whileHover={{ scale: 1.1, rotateY: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative"
              >
                <MSLogo className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48" />
              </motion.div>
            </motion.div>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="space-y-6 md:space-y-8"
            >
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
                whileInView={{ scale: [0.9, 1.02, 1] }}
                transition={{ duration: 0.6 }}
              >
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  MS.Finance
                </span>
                <br />
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-700 dark:text-gray-300 font-medium mt-2 block">
                  للاستشارات والخدمات المالية
                </span>
              </motion.h1>

              <div className="max-w-4xl mx-auto px-4">
                <TextGenerateEffect
                  words="شريكك الموثوق في تقديم خدمات الاستشارات المالية والإدارية للشركات ورواد الأعمال"
                  className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed"
                />
              </div>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="w-full max-w-5xl mx-auto"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {[
                  { icon: TrendingUp, value: 2019, label: "سنة التأسيس", color: "primary" },
                  { icon: Users, value: 500, label: "عميل راضٍ", color: "secondary", prefix: "+" },
                  { icon: Award, value: 6, label: "خدمات متخصصة", color: "accent" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="group relative"
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r from-${stat.color}/20 to-${stat.color === "primary" ? "secondary" : stat.color === "secondary" ? "accent" : "primary"}/20 rounded-2xl blur opacity-50 group-hover:opacity-70 transition duration-500`}
                    />
                    <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-4 md:p-6 lg:p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500">
                      <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.6 }}>
                        <stat.icon
                          className={`h-8 w-8 md:h-10 md:h-10 lg:h-12 lg:w-12 text-${stat.color} mx-auto mb-3 md:mb-4`}
                        />
                      </motion.div>
                      <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-1 md:mb-2">
                        {stat.prefix}
                        <Counter from={stat.value === 2019 ? 2015 : 0} to={stat.value} duration={2.5} />
                      </div>
                      <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center w-full max-w-md sm:max-w-none"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-primary via-secondary to-accent hover:from-primary/90 hover:via-secondary/90 hover:to-accent/90 text-white font-bold px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-6 text-sm md:text-base lg:text-lg rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <Sparkles className="h-4 w-4 md:h-5 md:w-5 group-hover:animate-spin" />
                  تواصل معنا
                  <ChevronRight className="h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-primary/30 text-gray-700 dark:text-gray-300 hover:bg-primary/10 dark:hover:bg-primary/20 px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-6 text-sm md:text-base lg:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group backdrop-blur-sm"
                >
                  <LineChart className="h-4 w-4 md:h-5 md:w-5 group-hover:scale-110 transition-transform" />
                  خدماتنا
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
