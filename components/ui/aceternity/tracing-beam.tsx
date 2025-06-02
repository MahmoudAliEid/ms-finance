"use client"
import type React from "react"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setIsVisible(true)
            setHasAnimated(true)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [hasAnimated])

  return (
    <motion.div ref={ref} className={cn("relative", className)}>
      <motion.div
        animate={
          isVisible
            ? {
                height: "100%",
              }
            : {
                height: "0%",
              }
        }
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="absolute left-10 top-0 w-[1px] bg-gradient-to-b from-transparent via-primary-gold to-transparent"
      />
      <div className="relative">{children}</div>
    </motion.div>
  )
}
