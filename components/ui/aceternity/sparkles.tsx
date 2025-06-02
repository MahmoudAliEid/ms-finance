"use client"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export const SparklesCore = ({
  id,
  background,
  minSize,
  maxSize,
  speed,
  particleColor,
  className,
  particleDensity,
}: {
  id?: string
  background?: string
  minSize?: number
  maxSize?: number
  speed?: number
  particleColor?: string
  className?: string
  particleDensity?: number
}) => {
  const [windowSize, setWindowSize] = useState<{
    width: number
    height: number
  }>({
    width: 0,
    height: 0,
  })
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const particles: Particle[] = []
    const particleCount = particleDensity || 50
    const minSizeValue = minSize || 0.5
    const maxSizeValue = maxSize || 1.5
    const speedValue = speed || 1
    const particleColorValue = particleColor || "#FFF"

    canvas.width = windowSize.width
    canvas.height = windowSize.height

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * (maxSizeValue - minSizeValue) + minSizeValue
        this.speedX = (Math.random() - 0.5) * speedValue
        this.speedY = (Math.random() - 0.5) * speedValue
        this.color = particleColorValue
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) {
          this.x = 0
        } else if (this.x < 0) {
          this.x = canvas.width
        }

        if (this.y > canvas.height) {
          this.y = 0
        } else if (this.y < 0) {
          this.y = canvas.height
        }
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fill()
      }
    }

    const init = () => {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()
      }
      requestAnimationFrame(animate)
    }

    init()
    animate()
  }, [windowSize, minSize, maxSize, speed, particleColor, particleDensity])

  return (
    <canvas
      ref={canvasRef}
      id={id || "tsparticles"}
      style={{
        background: background || "transparent",
      }}
      className={cn("absolute inset-0 -z-10", className)}
    />
  )
}
