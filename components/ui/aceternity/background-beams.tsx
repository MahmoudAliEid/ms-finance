"use client"
import type React from "react"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export const BackgroundBeams = ({
  className,
}: {
  className?: string
}) => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  })

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        setMousePosition({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        })
      }
    }

    const element = ref.current
    if (element) {
      element.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      if (element) {
        element.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  return (
    <div
      ref={ref}
      className={cn("h-full w-full overflow-hidden [--x:50%] [--y:50%]", className)}
      style={
        {
          "--x": `${mousePosition.x}px`,
          "--y": `${mousePosition.y}px`,
        } as React.CSSProperties
      }
    >
      <div className="relative h-full w-full">
        <div
          className="pointer-events-none absolute inset-0 z-0 h-full w-full bg-black [mask-image:radial-gradient(100%_100%_at_var(--x)_var(--y),transparent_30%,white)]"
          aria-hidden="true"
        />
      </div>
    </div>
  )
}
