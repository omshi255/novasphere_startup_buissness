"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

const stats = [
  { value: 3, suffix: "+", label: "Projects Delivered", tag: "and growing" },
  { value: 3, suffix: "+", label: "Happy Clients", tag: "100% satisfaction" },
  { value: 2, suffix: "+", label: "Years Experience", tag: "since 2023" },
  { value: 1, suffix: "", label: "Dedicated Founder", tag: "wearing all hats" },
]

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 900
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section className="relative px-6 py-24 bg-[#080a0c] overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="absolute -top-20 -left-16 w-72 h-72 rounded-full bg-[#4f6ef7] blur-[60px] opacity-[0.12] pointer-events-none" />
      <div className="absolute -bottom-16 right-[10%] w-48 h-48 rounded-full bg-[#c084fc] blur-[60px] opacity-[0.12] pointer-events-none" />

      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid grid-cols-2 lg:grid-cols-4 rounded-2xl"
          style={{
            border: "0.5px solid rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.025)",
            backdropFilter: "blur(12px)",
          }}
        >
          {stats.map((stat, index) => {
            const gradients = [
              "linear-gradient(135deg,#fff 30%,#a5b4fc)",
              "linear-gradient(135deg,#fff 30%,#c084fc)",
              "linear-gradient(135deg,#fff 30%,#86efac)",
              "linear-gradient(135deg,#fff 30%,#fbbf24)",
            ]

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.13, ease: "easeOut" }}
                className="relative flex flex-col items-center px-6 py-8 cursor-default"
                style={{
                  borderRight:
                    index < stats.length - 1
                      ? "0.5px solid rgba(255,255,255,0.08)"
                      : "none",
                }}
              >
                {/* Number */}
                <div className="flex items-baseline gap-0.5">
                  <span
                    className="font-bold leading-none tracking-tight"
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "3rem",
                      background: gradients[index],
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </span>
                </div>

                {/* Label */}
                <span
                  className="mt-2 uppercase tracking-widest"
                  style={{
                    fontSize: "0.62rem",
                    color: "rgba(255,255,255,0.3)",
                    letterSpacing: "0.14em",
                  }}
                >
                  {stat.label}
                </span>

                {/* Tag */}
                <span
                  className="mt-2 px-2 py-0.5 rounded-full"
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.58rem",
                    letterSpacing: "0.08em",
                    color: "rgba(255,255,255,0.2)",
                    border: "0.5px solid rgba(255,255,255,0.1)",
                  }}
                >
                  {stat.tag}
                </span>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}