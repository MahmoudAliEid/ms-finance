import type React from "react"
import type { Metadata } from "next"
import { Inter, Tajawal } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  variable: "--font-tajawal",
})

export const metadata: Metadata = {
  title: "MS.Finance - الاستشارات والخدمات المالية",
  description:
    "شركة MS.Finance للاستشارات والخدمات المالية - شريكك الموثوق في تقديم خدمات الاستشارات المالية والإدارية للشركات ورواد الأعمال",
  keywords: "استشارات مالية, تمويل بنكي, دراسات جدوى, استشارات إدارية, خطط أعمال, تقييم مشاريع, مصر",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${inter.variable} ${tajawal.variable} font-tajawal`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
