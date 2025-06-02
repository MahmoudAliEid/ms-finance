"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string
  className?: string
}) => {
  const [renderedText, setRenderedText] = useState("")
  const [isGenerating, setIsGenerating] = useState(true)
  const [startGeneration, setStartGeneration] = useState(false)

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>
    let currentIndex = 0

    if (startGeneration) {
      interval = setInterval(() => {
        if (currentIndex <= words.length) {
          setRenderedText(words.slice(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(interval)
          setIsGenerating(false)
        }
      }, 30)
    }

    return () => clearInterval(interval)
  }, [words, startGeneration])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStartGeneration(true)
    }, 1000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className={cn("font-medium", className)}>
      <div className="mt-4">
        <div className={className}>
          {renderedText}
          {isGenerating && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              className="inline-block rounded-sm w-[4px] h-4 ml-1 bg-cyan-400"
            />
          )}
        </div>
      </div>
    </div>
  )
}
