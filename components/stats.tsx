// "use client"

// import { useEffect, useRef, useState } from "react"
// import { motion, useInView } from "framer-motion"

// const stats = [
//   { value: 80, suffix: "+", label: "Projects Delivered" },
//   { value: 55, suffix: "+", label: "Happy Clients" },
//   { value: 6, suffix: "+", label: "Years Experience" },
//   { value: 15, suffix: "+", label: "Tech Experts" },
// ]

// function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
//   const [count, setCount] = useState(0)
//   const ref = useRef<HTMLSpanElement>(null)
//   const isInView = useInView(ref, { once: true })

//   useEffect(() => {
//     if (!isInView) return

//     let start = 0
//     const duration = 2000
//     const increment = target / (duration / 16)

//     const timer = setInterval(() => {
//       start += increment
//       if (start >= target) {
//         setCount(target)
//         clearInterval(timer)
//       } else {
//         setCount(Math.floor(start))
//       }
//     }, 16)

//     return () => clearInterval(timer)
//   }, [isInView, target])

//   return (
//     <span ref={ref}>
//       {count}
//       {suffix}
//     </span>
//   )
// }

// export function Stats() {
//   return (
//     <section className="relative px-6 py-24">
//       <div className="mx-auto max-w-7xl">
//         <motion.div
//           initial={{ opacity: 0, y: 30, scale: 0.98 }}
//           whileInView={{ opacity: 1, y: 0, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//           whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
//           className="glass glow-border rounded-2xl p-8 md:p-12 transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
//         >
//           <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={stat.label}
//                 initial={{ opacity: 0, scale: 0.8, y: 20 }}
//                 whileInView={{ opacity: 1, scale: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
//                 whileHover={{ y: -4, scale: 1.05 }}
//                 className="text-center cursor-default"
//               >
//                 <motion.div 
//                   className="font-serif text-4xl font-bold text-foreground md:text-5xl"
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.15 + 0.2 }}
//                 >
//                   <AnimatedCounter target={stat.value} suffix={stat.suffix} />
//                 </motion.div>
//                 <motion.p 
//                   className="mt-2 text-sm text-muted-foreground"
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.15 + 0.3 }}
//                 >
//                   {stat.label}
//                 </motion.p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }
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

      {/* Orbs */}
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