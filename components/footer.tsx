"use client"

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5"></div>

      {/* Animated particles */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 7,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link
              href="/"
              className="flex items-center group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="relative">
                <div className="relative w-32 h-12 md:w-40 md:h-14">
                  <Image
                    src="/logo.jpeg"
                    alt="MS Finance Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/10 via-gray-500/10 to-orange-500/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </Link>

            <p className="text-gray-400 mb-6">
              شريكك الموثوق في تقديم خدمات الاستشارات المالية والإدارية للشركات
              ورواد الأعمال.
            </p>
            {/* <div className="flex space-x-4 space-x-reverse">
              {[
                { icon: <Facebook className="h-5 w-5" />, href: "#", color: "primary" },
                { icon: <Twitter className="h-5 w-5" />, href: "#", color: "secondary" },
                { icon: <Instagram className="h-5 w-5" />, href: "#", color: "accent" },
                { icon: <Linkedin className="h-5 w-5" />, href: "#", color: "primary" },
              ].map((social, index) => (
                <motion.div key={index} whileHover={{ y: -5 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={social.href}
                    className={`flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-${social.color}/20 text-gray-400 hover:text-${social.color} transition-all duration-300`}
                  >
                    {social.icon}
                  </Link>
                </motion.div>
              ))}
            </div> */}
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              روابط سريعة
            </h3>
            <ul className="space-y-3">
              {[
                { name: "الرئيسية", href: "#hero" },
                { name: "من نحن", href: "#about" },
                { name: "خدماتنا", href: "#services" },
                { name: "عملاؤنا", href: "#clients" },
                { name: "تواصل معنا", href: "#contact" },
              ].map((link, index) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2 group-hover:bg-primary transition-colors"></span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              معلومات التواصل
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mt-1 ml-2 flex-shrink-0" />
                <span>
                  الجيزة - السادس من أكتوبر - المحور المركزي - مبنى أ15 بجوار
                  النيابة الإدارية
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-secondary ml-2 flex-shrink-0" />
                <span>01110888965 / 01055550813</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-accent ml-2 flex-shrink-0" />
                <span>info@msfinance-eg.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© {currentYear} MS.Finance. جميع الحقوق محفوظة.</p>
          <div className="mt-2 flex justify-center space-x-4 space-x-reverse">
            <Link
              href="https://shimaamohamed.bio.link/"
              target="_blank"
              className="hover:text-gray-400 transition-colors">
              تصميم وتطوير بواسطة MS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
