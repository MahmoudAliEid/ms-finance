"use client";

import { BackgroundBeams } from "@/components/ui/aceternity/background-beams";
import { SparklesCore } from "@/components/ui/aceternity/sparkles";
import { TextGenerateEffect } from "@/components/ui/aceternity/text-generate-effect";
import { Button } from "@/components/ui/button";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import {
  Award,
  ChevronRight,
  LineChart,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";

function Counter({
  from,
  to,
  duration = 2,
}: {
  from: number;
  to: number;
  duration?: number;
}) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    const controls = animate(count, to, { duration });
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest);
    });
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [count, to, duration, rounded]);

  return <span>{displayValue}</span>;
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section
      id="hero"
      className="relative w-full mx-auto overflow-hidden bg-gradient-to-br from-gray-50 via-orange-50/30 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <BackgroundBeams className="opacity-20 dark:opacity-30" />
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#f97316"
        />
      </div>

      {/* Main content container with perfect centering */}
      <div className="relative z-10 w-full min-h-screen pt-16 pb-8 md:pt-20 md:pb-12 flex items-center justify-center px-3 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center text-center space-y-6 sm:space-y-8 md:space-y-12">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="space-y-4 sm:space-y-6 md:space-y-8">
              <motion.h1
                className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
                whileInView={{ scale: [0.9, 1.02, 1] }}
                transition={{ duration: 0.6 }}>
                <span className="bg-gradient-to-r from-gray-900 via-orange-500 to-gray-800 dark:from-gray-100 dark:via-orange-400 dark:to-gray-200 bg-clip-text text-transparent">
                  MS.Finance
                </span>
                <br />
                <span className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-700 dark:text-gray-300 font-medium mt-1 sm:mt-2 block">
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
              className="w-full max-w-5xl mx-auto px-3 sm:px-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                {[
                  {
                    icon: TrendingUp,
                    value: 2019,
                    label: "سنة التأسيس",
                    color: "orange",
                  },
                  {
                    icon: Users,
                    value: 500,
                    label: "عميل راضٍ",
                    color: "gray",
                    prefix: "+",
                  },
                  {
                    icon: Award,
                    value: 6,
                    label: "خدمات متخصصة",
                    color: "orange",
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="group relative"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-gray-500/20 rounded-2xl blur opacity-50 group-hover:opacity-70 transition duration-500" />
                    <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}>
                        <stat.icon
                          className={`h-6 w-6 sm:h-8 sm:w-8 md:h-10 lg:h-12 lg:w-12 ${
                            stat.color === "orange"
                              ? "text-orange-500"
                              : "text-gray-600"
                          } mx-auto mb-2 sm:mb-3 md:mb-4`}
                        />
                      </motion.div>
                      <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-1 md:mb-2">
                        {stat.prefix}
                        <Counter
                          from={stat.value === 2019 ? 2015 : 0}
                          to={stat.value}
                          duration={2.5}
                        />
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
              className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center w-full max-w-md sm:max-w-none">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  onClick={() => (window.location.href = "#contact")}
                  className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white font-bold px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 flex items-center justify-center gap-2 group">
                  <Sparkles className="h-4 w-4 group-hover:animate-spin" />
                  تواصل معنا
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => (window.location.href = "#services")}
                  className="w-full sm:w-auto border-2 border-orange-500/30 text-gray-700 dark:text-gray-300 hover:bg-orange-500/50 dark:hover:bg-orange-500/20 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group backdrop-blur-sm">
                  <LineChart className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  الخدمات والاستشارات
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
