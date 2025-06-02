"use client"

import { SectionHeading } from "@/components/section-heading";
import { SparklesCore } from "@/components/ui/aceternity/sparkles";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
    // Show success message
    alert("تم إرسال رسالتك بنجاح!");
  };

  return (
    <section
      id="contact"
      className="py-20 relative overflow-hidden bg-gray-50/50 dark:bg-gray-900/50">
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="tsparticles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={70}
          className="w-full h-full"
          particleColor="#3b82f6"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="تواصل معنا"
          subtitle="نحن هنا للإجابة على استفساراتك"
        />

        <div
          ref={ref}
          className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur opacity-50 group-hover:opacity-70 transition duration-500" />
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  معلومات التواصل
                </h3>

                <div className="space-y-6">
                  <motion.div
                    className="flex items-start group"
                    whileHover={{ x: 5 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}>
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-lg flex items-center justify-center shrink-0 mt-1 group-hover:from-primary/20 group-hover:via-secondary/20 group-hover:to-accent/20 transition-all duration-300">
                      <MapPin className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="mr-4">
                      <h4 className="font-medium text-gray-800 dark:text-white">
                        العنوان
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">
                        الجيزة - السادس من أكتوبر - المحور المركزي - مبنى أ15
                        بجوار النيابة الإدارية
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start group"
                    whileHover={{ x: 5 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}>
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-lg flex items-center justify-center shrink-0 mt-1 group-hover:from-primary/20 group-hover:via-secondary/20 group-hover:to-accent/20 transition-all duration-300">
                      <Phone className="h-6 w-6 text-secondary group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="mr-4">
                      <h4 className="font-medium text-gray-800 dark:text-white">
                        الهاتف
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">
                        01110888965 / 01055550813
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start group"
                    whileHover={{ x: 5 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}>
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-lg flex items-center justify-center shrink-0 mt-1 group-hover:from-primary/20 group-hover:via-secondary/20 group-hover:to-accent/20 transition-all duration-300">
                      <Mail className="h-6 w-6 text-accent group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="mr-4">
                      <h4 className="font-medium text-gray-800 dark:text-white">
                        البريد الإلكتروني
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">
                        info@msfinance.com
                      </p>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="font-medium text-gray-800 dark:text-white mb-4">
                    ساعات العمل
                  </h4>
                  <div className="grid grid-cols-2 gap-4 text-gray-600 dark:text-gray-400">
                    <div>الأحد - الخميس</div>
                    <div>9:00 ص - 5:00 م</div>
                    <div>الجمعة</div>
                    <div>مغلق</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur opacity-50 group-hover:opacity-70 transition duration-500" />
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  أرسل رسالة
                </h3>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                      الاسم
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="الاسم الكامل"
                      className="bg-white/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-primary dark:focus:border-primary dark:focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                      البريد الإلكتروني
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="example@example.com"
                      className="bg-white/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-primary dark:focus:border-primary dark:focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                      رقم الهاتف
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="رقم الهاتف"
                      className="bg-white/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-primary dark:focus:border-primary dark:focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                      الرسالة
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="اكتب رسالتك هنا..."
                      rows={4}
                      className="bg-white/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-primary dark:focus:border-primary dark:focus:ring-primary"
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:from-primary/90 hover:via-secondary/90 hover:to-accent/90 text-white font-bold py-3 rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group">
                      <Sparkles className="h-4 w-4 ml-2 group-hover:animate-spin" />
                      إرسال الرسالة
                      <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
