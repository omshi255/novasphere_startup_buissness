"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star } from "lucide-react"
import { SectionWrapper, SectionHeading } from "./section-wrapper"

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "CTO, FinFlow",
    initials: "AM",
    stars: 5,
    text: "NovaSphere transformed our vision into a production-ready SaaS platform in just 8 weeks. Their technical depth and communication are unmatched. We scaled to 10k users in the first month.",
  },
  {
    name: "Sarah Chen",
    role: "Founder, MediBook",
    initials: "SC",
    stars: 5,
    text: "Working with NovaSphere felt like having a senior engineering team in-house. The React Native app they built for us has a 4.9-star rating on both app stores. Incredible attention to detail.",
  },
  {
    name: "Rajiv Kapoor",
    role: "Head of Engineering, ShopVibe",
    initials: "RK",
    stars: 5,
    text: "From architecture planning to deployment, NovaSphere delivered a flawless e-commerce platform. Their testing practices caught issues we never would have found. Truly quality-first.",
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <SectionWrapper>
      <div className="mx-auto max-w-3xl">
        <SectionHeading title="What Clients Say" />

        <div className="relative min-h-[260px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="glass glow-border rounded-2xl p-8 text-center transition-all hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]"
            >
              {/* Stars */}
              <motion.div 
                className="mb-4 flex items-center justify-center gap-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {Array.from({ length: testimonials[activeIndex].stars }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                  >
                    <Star
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  </motion.div>
                ))}
              </motion.div>

              <motion.p 
                className="mb-6 text-base leading-relaxed text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {`"${testimonials[activeIndex].text}"`}
              </motion.p>

              <motion.div 
                className="flex items-center justify-center gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-sm font-semibold text-primary transition-all hover:scale-110 hover:bg-primary/30"
                  whileHover={{ scale: 1.2 }}
                >
                  {testimonials[activeIndex].initials}
                </motion.div>
                <div className="text-left">
                  <motion.p 
                    className="text-sm font-semibold text-foreground"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 }}
                  >
                    {testimonials[activeIndex].name}
                  </motion.p>
                  <motion.p 
                    className="text-xs text-muted-foreground"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {testimonials[activeIndex].role}
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <motion.div 
          className="mt-6 flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-8 bg-primary"
                  : "w-2 bg-muted-foreground/30"
              }`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
