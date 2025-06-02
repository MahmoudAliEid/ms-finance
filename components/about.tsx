"use client"
import { SectionHeading } from "@/components/section-heading"
import { CardHoverEffect } from "@/components/ui/aceternity/card-hover-effect"
import { TracingBeam } from "@/components/ui/aceternity/tracing-beam"
import { motion } from "framer-motion"
import { Building2, Eye, Target, Users } from "lucide-react"
import { useInView } from "react-intersection-observer"

// SVG Icons for Values
const InnovationIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="innovationGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgb(59, 130, 246)" />
        <stop offset="100%" stopColor="rgb(34, 211, 238)" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="35" r="15" fill="none" stroke="url(#innovationGradient)" strokeWidth="3" />
    <path
      d="M40 50L45 55L60 40"
      stroke="url(#innovationGradient)"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="35" y="65" width="30" height="20" rx="3" fill="url(#innovationGradient)" opacity="0.3" />
    <path
      d="M45 20L50 10L55 20"
      stroke="url(#innovationGradient)"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M65 25L75 15L70 30"
      stroke="url(#innovationGradient)"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M35 25L25 15L30 30"
      stroke="url(#innovationGradient)"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const TrustIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="trustGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgb(34, 211, 238)" />
        <stop offset="100%" stopColor="rgb(20, 184, 166)" />
      </linearGradient>
    </defs>
    <path d="M50 15L30 25V45C30 60 50 75 50 75C50 75 70 60 70 45V25L50 15Z" fill="url(#trustGradient)" opacity="0.3" />
    <path
      d="M50 15L30 25V45C30 60 50 75 50 75C50 75 70 60 70 45V25L50 15Z"
      stroke="url(#trustGradient)"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M40 45L47 52L60 35"
      stroke="url(#trustGradient)"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const SpeedIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="speedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgb(20, 184, 166)" />
        <stop offset="100%" stopColor="rgb(59, 130, 246)" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="30" fill="none" stroke="url(#speedGradient)" strokeWidth="3" />
    <path d="M50 50L65 35" stroke="url(#speedGradient)" strokeWidth="3" strokeLinecap="round" />
    <circle cx="50" cy="50" r="3" fill="url(#speedGradient)" />
    <path d="M20 50L30 45L30 55Z" fill="url(#speedGradient)" />
    <path d="M25 30L35 25L30 35Z" fill="url(#speedGradient)" />
    <path d="M25 70L35 75L30 65Z" fill="url(#speedGradient)" />
  </svg>
)

const QualityIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="qualityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgb(59, 130, 246)" />
        <stop offset="50%" stopColor="rgb(34, 211, 238)" />
        <stop offset="100%" stopColor="rgb(20, 184, 166)" />
      </linearGradient>
    </defs>
    <path
      d="M50 20L60 40L80 40L65 55L70 75L50 65L30 75L35 55L20 40L40 40Z"
      fill="url(#qualityGradient)"
      opacity="0.3"
    />
    <path
      d="M50 20L60 40L80 40L65 55L70 75L50 65L30 75L35 55L20 40L40 40Z"
      stroke="url(#qualityGradient)"
      strokeWidth="2"
      fill="none"
    />
    <circle cx="50" cy="50" r="8" fill="url(#qualityGradient)" />
  </svg>
)

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const aboutItems = [
    {
      title: "نبذة عن الشركة",
      description:
        "تأسست شركة MS.Finance في عام 2019 بمدينة السادس من أكتوبر – الجيزة، لتكون شريكًا موثوقًا في تقديم خدمات الاستشارات المالية والإدارية للشركات ورواد الأعمال، من خلال حلول عملية مبنية على التحليل العميق والمعرفة الدقيقة بالسوق المحلي والإقليمي.",
      icon: <Building2 className="h-12 w-12 text-primary" />,
      gradient: "from-primary/20 to-secondary/20",
    },
    {
      title: "رؤيتنا",
      description:
        "أن نكون الخيار الأول كمستشار مالي واستراتيجي موثوق به في مصر والمنطقة العربية، من خلال الابتكار، والجودة، والتزامنا بنجاح عملائنا.",
      icon: <Eye className="h-12 w-12 text-secondary" />,
      gradient: "from-secondary/20 to-accent/20",
    },
    {
      title: "فريق العمل",
      description:
        "يتكون فريق MS.Finance من نخبة من المحللين الماليين، والمحاسبين المعتمدين، والاستشاريين ذوي خلفيات مهنية وأكاديمية قوية. نحرص على التطوير المستمر لأدواتنا ومعرفتنا لضمان تقديم حلول حديثة تتماشى مع تطورات السوق.",
      icon: <Users className="h-12 w-12 text-accent" />,
      gradient: "from-accent/20 to-primary/20",
    },
    {
      title: "أهدافنا",
      description:
        "نسعى لتقديم حلول مالية مبتكرة ومتطورة تساعد عملائنا على تحقيق أهدافهم وتطوير أعمالهم. نركز على بناء علاقات طويلة الأمد مع عملائنا من خلال تقديم خدمات عالية الجودة وحلول مخصصة تناسب احتياجاتهم الفريدة.",
      icon: <Target className="h-12 w-12 text-primary" />,
      gradient: "from-primary/20 to-secondary/20",
    },
  ]

  const values = [
    {
      icon: <InnovationIcon />,
      title: "الابتكار",
      description: "نستخدم أحدث التقنيات والأساليب المبتكرة",
    },
    {
      icon: <TrustIcon />,
      title: "الثقة",
      description: "نبني علاقات قائمة على الشفافية والمصداقية",
    },
    {
      icon: <SpeedIcon />,
      title: "السرعة",
      description: "نقدم حلول سريعة وفعالة لعملائنا",
    },
    {
      icon: <QualityIcon />,
      title: "الجودة",
      description: "نلتزم بأعلى معايير الجودة في جميع خدماتنا",
    },
  ]

  return (
    <section id="about" className="py-12 md:py-16 lg:py-20 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="من نحن" subtitle="تعرف على شركة MS.Finance" />

        <TracingBeam>
          <div ref={ref} className="mt-8 md:mt-12">
            <CardHoverEffect items={aboutItems} className="grid-cols-1 md:grid-cols-2" />
          </div>
        </TracingBeam>

        {/* Values Section with SVG Icons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 md:mt-20"
        >
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                قيمنا الأساسية
              </span>
            </h3>
            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mx-auto mb-4 md:mb-6" />
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
              المبادئ التي نؤمن بها ونطبقها في جميع أعمالنا
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="relative h-52 bg-white dark:bg-gray-800 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-lg flex items-center justify-center mb-3 md:mb-4 mx-auto"
                    >
                      {value.icon}
                    </motion.div>
                    <h4 className="text-base md:text-lg font-bold text-gray-800 dark:text-white mb-2 text-center">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base text-center">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
