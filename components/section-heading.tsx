"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-8 sm:mb-12 md:mb-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">
        <span className="bg-gradient-to-r from-orange-500 via-gray-600 to-orange-500 bg-clip-text text-transparent">
          {title}
        </span>
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-orange-500 via-gray-500 to-orange-500 rounded-full mx-auto mb-3 sm:mb-4 md:mb-6"
      />
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
        {subtitle}
      </motion.p>
    </div>
  );
}
