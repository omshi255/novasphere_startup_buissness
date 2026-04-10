import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { TechStack } from "@/components/tech-stack"
import { Portfolio } from "@/components/portfolio"
import { Process } from "@/components/process"
import { WhyUs } from "@/components/why-us"
import { Stats } from "@/components/stats"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <TechStack />
      <Portfolio />
      <Process />
      <WhyUs />
      <Stats />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
