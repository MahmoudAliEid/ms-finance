"use client"
import { cn } from "@/lib/utils"
import type React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string
    description: string
    icon?: React.ReactNode
    gradient?: string
  }[]
  className?: string
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", className)}>
      {items.map((item, idx) => (
        <motion.div
          key={item.title + idx}
          className="group relative block h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: idx * 0.1 }}
          whileHover={{ y: -10 }}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className={cn(
                  "absolute inset-0 block h-full w-full rounded-2xl blur-sm",
                  item.gradient || "bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20",
                )}
                layoutId="hoverBackground"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.3 },
                }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  transition: { duration: 0.3 },
                }}
              />
            )}
          </AnimatePresence>

          <div className="relative rounded-2xl border border-gray-200/50 dark:border-gray-700/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-8 h-full flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:border-primary/30">
            <motion.div
              className="mb-6 relative"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl flex items-center justify-center group-hover:from-primary/20 group-hover:via-secondary/20 group-hover:to-accent/20 transition-all duration-300">
                {item.icon}
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
            </motion.div>

            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white group-hover:text-primary transition-colors duration-300">
              {item.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed flex-grow">{item.description}</p>

            <motion.div
              className="mt-6 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: hoveredIndex === idx ? 1 : 0 }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export const CardHoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string
    description: string
    icon?: React.ReactNode
    gradient?: string
  }[]
  className?: string
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className={cn("grid gap-6", className)}>
      {items.map((item, idx) => (
        <motion.div
          key={item.title + idx}
          className="group relative block h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: idx * 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className={cn(
                  "absolute inset-0 block h-full w-full rounded-2xl blur-sm",
                  item.gradient || "bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20",
                )}
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.3 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.3 },
                }}
              />
            )}
          </AnimatePresence>

          <div className="relative rounded-2xl border border-gray-200/50 dark:border-gray-700/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-8 h-full flex items-start gap-6 shadow-lg hover:shadow-2xl transition-all duration-500">
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-xl flex items-center justify-center group-hover:from-primary/20 group-hover:via-secondary/20 group-hover:to-accent/20 transition-all duration-300">
                {item.icon}
              </div>
            </motion.div>

            <div className="flex-grow">
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
