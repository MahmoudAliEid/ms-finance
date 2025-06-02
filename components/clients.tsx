"use client"

import { SectionHeading } from "@/components/section-heading"
import { motion } from "framer-motion"
import { Factory, Heart, TrendingUp, User } from "lucide-react"
import { useState } from "react"
import { useInView } from "react-intersection-observer"

// SVG Icons for Client Types
const StartupIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="startupGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgb(59, 130, 246)" />
        <stop offset="100%" stopColor="rgb(34, 211, 238)" />
      </linearGradient>
    </defs>
    <path d="M50 20L45 35L50 50L55 35Z" fill="url(#startupGradient)" />
    <circle cx="50" cy="60" r="8" fill="url(#startupGradient)" opacity="0.7" />
    <path d="M30 70L50 60L70 70L65 80L35 80Z" fill="url(#startupGradient)" opacity="0.5" />
    <path d="M40 25L35 15L45 10" stroke="url(#startupGradient)" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M60 25L65 15L55 10" stroke="url(#startupGradient)" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M25 45L15 40L20 50" stroke="url(#startupGradient)" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M75 45L85 40L80 50" stroke="url(#startupGradient)" strokeWidth="2" fill="none" strokeLinecap="round" />
  </svg>
)

const CorporateIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="corporateGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgb(34, 211, 238)" />
        <stop offset="100%" stopColor="rgb(20, 184, 166)" />
      </linearGradient>
    </defs>
    <rect x="25" y="30" width="50" height="50" fill="url(#corporateGradient)" opacity="0.3" />
    <rect x="25" y="30" width="50" height="50" stroke="url(#corporateGradient)" strokeWidth="2" fill="none" />
    <rect x="35" y="40" width="8" height="8" fill="url(#corporateGradient)" />
    <rect x="57" y="40" width="8" height="8" fill="url(#corporateGradient)" />
    <rect x="35" y="52" width="8" height="8" fill="url(#corporateGradient)" />
    <rect x="57" y="52" width="8" height="8" fill="url(#corporateGradient)" />
    <rect x="46" y="64" width="8" height="8" fill="url(#corporateGradient)" />
    <rect x="40" y="20" width="20" height="10" fill="url(#corporateGradient)" opacity="0.7" />
  </svg>
)

export default function Clients() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeTab, setActiveTab] = useState(0)

  const clientTypes = [
    {
      title: "شركات ناشئة",
      description: "تبحث عن انطلاقة مدروسة",
      icon: <StartupIcon />,
      details: "نساعد الشركات الناشئة في وضع الأسس المالية السليمة وإعداد خطط العمل اللازمة للنمو والتوسع.",
    },
    {
      title: "مؤسسات قائمة",
      description: "ترغب في إعادة تنظيم أعمالها",
      icon: <CorporateIcon />,
      details: "نقدم خدمات إعادة الهيكلة المالية والإدارية للمؤسسات القائمة لتحسين كفاءتها وأدائها.",
    },
    {
      title: "مستثمرون",
      description: "يبحثون عن فرص ذات جدوى حقيقية",
      icon: <TrendingUp className="h-12 w-12 text-accent" />,
      details: "نوفر تحليلات استثمارية شاملة ودراسات جدوى دقيقة لمساعدة المستثمرين في اتخاذ قرارات مدروسة.",
    },
    {
      title: "منظمات غير ربحية",
      description: "تسعى لتحقيق كفاءة مالية",
      icon: <Heart className="h-12 w-12 text-primary" />,
      details: "نساعد المنظمات غير الربحية في تحسين إدارتها المالية وتطوير استراتيجيات التمويل المستدام.",
    },
    {
      title: "شركات متوسطة",
      description: "تخطط للتوسع والنمو",
      icon: <Factory className="h-12 w-12 text-secondary" />,
      details: "نقدم استشارات مالية متخصصة للشركات المتوسطة التي تسعى للتوسع ودخول أسواق جديدة.",
    },
    {
      title: "رواد أعمال",
      description: "يحتاجون لتخطيط مالي سليم",
      icon: <User className="h-12 w-12 text-accent" />,
      details: "نوفر الدعم المالي والاستشاري لرواد الأعمال لتحويل أفكارهم إلى مشاريع ناجحة ومربحة.",
    },
  ]

  return (
    <section
      id="clients"
      className="py-12 md:py-16 lg:py-20 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="عملاؤنا"
          subtitle="خدمنا أكثر من 500 عميل من قطاعات مختلفة"
        />

        <div
          ref={ref}
          className="mt-8 md:mt-12">
          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-10 px-4">
            {clientTypes.map((client, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveTab(index)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`px-3 md:px-5 py-2 md:py-3 rounded-xl text-xs md:text-sm font-medium transition-all duration-300 ${
                  activeTab === index
                    ? "bg-gradient-to-r from-primary via-secondary to-accent text-white shadow-lg shadow-primary/25"
                    : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/70 border border-gray-200/50 dark:border-gray-700/50"
                }`}>
                {client.title}
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 max-w-4xl mx-auto border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 dark:from-primary/10 dark:via-secondary/10 dark:to-accent/10" />

            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 relative z-10">
              <motion.div
                className="flex-shrink-0 p-3 md:p-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                {clientTypes[activeTab].icon}
              </motion.div>
              <div className="text-center md:text-right">
                <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-2 md:mb-3">
                  {clientTypes[activeTab].title}
                </h3>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-3 md:mb-4">
                  {clientTypes[activeTab].description}
                </p>
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  {clientTypes[activeTab].details}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Statistics */}
          <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {[
              { value: "+500", label: "عميل راضٍ", color: "primary" },
              { value: "6", label: "قطاعات مختلفة", color: "primary" },
              { value: "5+", label: "سنوات خبرة", color: "primary" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * index, duration: 0.8 }}
                whileHover={{ y: -10 }}
                className="group relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-${
                    stat.color
                  }/20 to-${
                    stat.color === "primary"
                      ? "secondary"
                      : stat.color === "secondary"
                      ? "accent"
                      : "primary"
                  }/20 rounded-2xl blur opacity-50 group-hover:opacity-70 transition duration-500`}
                />
                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 md:p-8 text-center shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500">
                  <div
                    className={`text-3xl md:text-4xl font-bold bg-gradient-to-r from-${
                      stat.color
                    } via-${
                      stat.color === "primary"
                        ? "secondary"
                        : stat.color === "secondary"
                        ? "accent"
                        : "primary"
                    } to-${
                      stat.color === "primary"
                        ? "accent"
                        : stat.color === "secondary"
                        ? "primary"
                        : "secondary"
                    } bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-12 md:mt-16 text-center">
            <div className="relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-md p-6 md:p-10 rounded-2xl max-w-4xl mx-auto border border-gray-200/30 dark:border-gray-700/30 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl" />
              <div className="relative z-10">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-gray-800 dark:text-white mb-3 md:mb-4">
                  <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    نفخر بثقة عملائنا
                  </span>
                </h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
                  نسعى دائمًا لتقديم حلول مالية مبتكرة تناسب احتياجاتهم الفريدة
                  وتساعدهم على تحقيق أهدافهم بأفضل الطرق الممكنة.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
