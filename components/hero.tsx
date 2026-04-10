"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

const words = ["React Apps", "Next.js Websites", "Flutter Apps", "Node.js APIs", "React Native Apps", "QA Testing"]

const techBadges = [
  { label: "React", x: "10%", y: "20%", delay: 0 },
  { label: "Node.js", x: "85%", y: "15%", delay: 0.2 },
  { label: "Flutter", x: "5%", y: "70%", delay: 0.4 },
  { label: "Next.js", x: "80%", y: "65%", delay: 0.6 },
  { label: "TypeScript", x: "15%", y: "45%", delay: 0.8 },
  { label: "Tailwind", x: "88%", y: "40%", delay: 1 },
]

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentWord.slice(0, displayText.length + 1))
          if (displayText.length === currentWord.length) {
            setTimeout(() => setIsDeleting(true), 1500)
          }
        } else {
          setDisplayText(currentWord.slice(0, displayText.length - 1))
          if (displayText.length === 0) {
            setIsDeleting(false)
            setWordIndex((prev) => (prev + 1) % words.length)
          }
        }
      },
      isDeleting ? 40 : 80
    )
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, wordIndex])

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      {/* Animated gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-blob absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]" />
        <div
          className="animate-blob absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-secondary/20 blur-[120px]"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="animate-blob absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-accent/15 blur-[120px]"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Floating tech badges - hidden on mobile */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        {techBadges.map((badge) => (
          <motion.div
            key={badge.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: badge.delay + 0.8, duration: 0.5 }}
            className="animate-float absolute"
            style={{
              left: badge.x,
              top: badge.y,
              animationDelay: `${badge.delay * 2}s`,
            }}
          >
            <span className="glass glow-border inline-block rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground">
              {badge.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-muted/50 px-4 py-1.5 text-xs font-medium text-muted-foreground"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Currently accepting projects for Q1 2026
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-serif text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
        >
          We Build Digital
          <br />
          Products That{" "}
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Scale
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          {"From web apps to mobile apps — we design, develop, test, and deliver. Fast."}
        </motion.p>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground"
        >
          <span>{"We build"}</span>
          <span className="inline-flex min-w-[140px] justify-start font-medium text-primary">
            {displayText}
            <span className="ml-0.5 animate-pulse text-primary">|</span>
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.a
            href="#work"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center rounded-lg bg-primary px-7 py-3 text-sm font-medium text-primary-foreground shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:brightness-110"
          >
            See Our Work
          </motion.a>
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05, y: -2, backgroundColor: "rgba(24, 24, 27, 0.8)" }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center rounded-lg border border-border/50 bg-transparent px-7 py-3 text-sm font-medium text-foreground transition-all hover:border-border"
          >
            View Services
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown className="h-5 w-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  )
}
