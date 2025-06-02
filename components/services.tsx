"use client"
import { SectionHeading } from "@/components/section-heading"
import { HoverEffect } from "@/components/ui/aceternity/card-hover-effect"
import { motion } from "framer-motion"
import { BarChart3, BarChart4, Building, FileText, LineChart, TrendingUp } from "lucide-react"
import { useInView } from "react-intersection-observer"

// SVG Icons for Work Methodology
const AnalysisIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="analysisGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgb(59, 130, 246)" />
        <stop offset="100%" stopColor="rgb(34, 211, 238)" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="45" fill="url(#analysisGradient)" opacity="0.1" />
    <path
      d="M25 70L40 55L55 65L75 35"
      stroke="url(#analysisGradient)"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="25" cy="70" r="3" fill="url(#analysisGradient)" />
    <circle cx="40" cy="55" r="3" fill="url(#analysisGradient)" />
    <circle cx="55" cy="65" r="3" fill="url(#analysisGradient)" />
    <circle cx="75" cy="35" r="3" fill="url(#analysisGradient)" />
    <rect x="20" y="75" width="60" height="2" fill="url(#analysisGradient)" opacity="0.5" />
    <rect x="18" y="30" width="2" height="47" fill="url(#analysisGradient)" opacity="0.5" />
  </svg>
)

const PlanningIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="planningGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgb(34, 211, 238)" />
        <stop offset="100%" stopColor="rgb(20, 184, 166)" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="45" fill="url(#planningGradient)" opacity="0.1" />
    <rect x="25" y="20" width="50" height="60" rx="5" fill="none" stroke="url(#planningGradient)" strokeWidth="2" />
    <rect x="30" y="30" width="40" height="3" fill="url(#planningGradient)" opacity="0.7" />
    <rect x="30" y="40" width="30" height="3" fill="url(#planningGradient)" opacity="0.7" />
    <rect x="30" y="50" width="35" height="3" fill="url(#planningGradient)" opacity="0.7" />
    <rect x="30" y="60" width="25" height="3" fill="url(#planningGradient)" opacity="0.7" />
    <circle cx="65" cy="40" r="2" fill="url(#planningGradient)" />
    <circle cx="65" cy="50" r="2" fill="url(#planningGradient)" />
    <circle cx="60" cy="60" r="2" fill="url(#planningGradient)" />
  </svg>
)

const ImplementationIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="implementationGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgb(20, 184, 166)" />
        <stop offset="100%" stopColor="rgb(59, 130, 246)" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="45" fill="url(#implementationGradient)" opacity="0.1" />
    <rect
      x="30"
      y="25"
      width="40"
      height="50"
      rx="3"
      fill="none"
      stroke="url(#implementationGradient)"
      strokeWidth="2"
    />
    <rect x="35" y="35" width="8" height="8" fill="url(#implementationGradient)" opacity="0.7" />
    <rect x="47" y="35" width="8" height="8" fill="url(#implementationGradient)" opacity="0.7" />
    <rect x="59" y="35" width="8" height="8" fill="url(#implementationGradient)" opacity="0.7" />
    <rect x="35" y="47" width="8" height="8" fill="url(#implementationGradient)" opacity="0.7" />
    <rect x="47" y="47" width="8" height="8" fill="url(#implementationGradient)" opacity="0.7" />
    <rect x="59" y="47" width="8" height="8" fill="url(#implementationGradient)" opacity="0.7" />
    <rect x="35" y="59" width="8" height="8" fill="url(#implementationGradient)" opacity="0.7" />
    <rect x="47" y="59" width="8" height="8" fill="url(#implementationGradient)" opacity="0.7" />
    <path d="M20 50L30 50" stroke="url(#implementationGradient)" strokeWidth="2" strokeLinecap="round" />
    <path d="M70 50L80 50" stroke="url(#implementationGradient)" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const MonitoringIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="monitoringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgb(59, 130, 246)" />
        <stop offset="50%" stopColor="rgb(34, 211, 238)" />
        <stop offset="100%" stopColor="rgb(20, 184, 166)" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="45" fill="url(#monitoringGradient)" opacity="0.1" />
    <circle cx="50" cy="50" r="25" fill="none" stroke="url(#monitoringGradient)" strokeWidth="2" />
    <circle cx="50" cy="50" r="15" fill="none" stroke="url(#monitoringGradient)" strokeWidth="2" opacity="0.7" />
    <circle cx="50" cy="50" r="5" fill="url(#monitoringGradient)" />
    <path d="M50 25L50 35" stroke="url(#monitoringGradient)" strokeWidth="2" strokeLinecap="round" />
    <path d="M75 50L65 50" stroke="url(#monitoringGradient)" strokeWidth="2" strokeLinecap="round" />
    <path d="M50 75L50 65" stroke="url(#monitoringGradient)" strokeWidth="2" strokeLinecap="round" />
    <path d="M25 50L35 50" stroke="url(#monitoringGradient)" strokeWidth="2" strokeLinecap="round" />
    <path d="M45 45L55 55" stroke="url(#monitoringGradient)" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      title: "الاستشارات المالية",
      description: "إعداد وتحليل القوائم المالية، إدارة التدفقات النقدية، وتحسين الهيكل المالي للشركة.",
      icon: <LineChart className="h-12 w-12 text-primary" />,
      gradient: "from-primary/20 to-secondary/20",
    },
    {
      title: "التمويل البنكي للشركات",
      description: "إعداد ملف التمويل بالكامل، وتجهيز الدراسات والبيانات المطلوبة للتقديم على التمويل البنكي.",
      icon: <Building className="h-12 w-12 text-secondary" />,
      gradient: "from-secondary/20 to-accent/20",
    },
    {
      title: "دراسات الجدوى الاقتصادية",
      description: "تقديم دراسات شاملة تتضمن تحليل السوق، التكاليف، العوائد، ونقاط المخاطر.",
      icon: <FileText className="h-12 w-12 text-accent" />,
      gradient: "from-accent/20 to-primary/20",
    },
    {
      title: "الاستشارات الإدارية",
      description: "تقييم الأداء التشغيلي، تحسين الكفاءة، وإعادة هيكلة الشركات.",
      icon: <BarChart3 className="h-12 w-12 text-primary" />,
      gradient: "from-primary/20 to-secondary/20",
    },
    {
      title: "خطط الأعمال والتوسع",
      description: "وضع خطط استراتيجية للنمو وجذب التمويل أو الشراكات.",
      icon: <TrendingUp className="h-12 w-12 text-secondary" />,
      gradient: "from-secondary/20 to-accent/20",
    },
    {
      title: "تقييم المشاريع والاستثمارات",
      description: "تقديم دراسات وتحليلات للمستثمرين لتقدير الجدوى والعوائد المتوقعة.",
      icon: <BarChart4 className="h-12 w-12 text-accent" />,
      gradient: "from-accent/20 to-primary/20",
    },
  ]

  return (
    <section id="services" className="py-12 md:py-16 lg:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="خدماتنا" subtitle="مجالات عملنا الأساسية" />

        <motion.div
          ref={ref}
          className="mt-8 md:mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <HoverEffect
            items={services.map((service) => ({
              title: service.title,
              description: service.description,
              icon: service.icon,
              gradient: service.gradient,
            }))}
          />
        </motion.div>

        {/* Work Methodology Section with SVG Icons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 md:mt-20"
        >
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                منهجية العمل
              </span>
            </h3>
            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mx-auto mb-4 md:mb-6" />
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
              نتبع منهجية علمية مدروسة لضمان تحقيق أفضل النتائج
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { step: "01", title: "التحليل", description: "دراسة شاملة للوضع الحالي", icon: <AnalysisIcon /> },
              { step: "02", title: "التخطيط", description: "وضع استراتيجية مخصصة", icon: <PlanningIcon /> },
              { step: "03", title: "التنفيذ", description: "تطبيق الحلول المقترحة", icon: <ImplementationIcon /> },
              { step: "04", title: "المتابعة", description: "مراقبة النتائج والتحسين", icon: <MonitoringIcon /> },
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="text-center relative">
                  {/* Step number */}
                  <div className="relative mx-auto w-16 h-16 md:w-20 md:h-20 mb-4 md:mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                    <div className="relative w-full h-full bg-gradient-to-br from-primary via-secondary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg">
                      {process.step}
                    </div>
                  </div>

                  {/* SVG Icon */}
                  <motion.div
                    className="mb-4 md:mb-6 flex justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {process.icon}
                  </motion.div>

                  {/* Content */}
                  <h4 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-2 md:mb-3">
                    {process.title}
                  </h4>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 px-2">{process.description}</p>
                </div>

                
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
