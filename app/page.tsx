import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Clients from "@/components/clients"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Clients />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  )
}
