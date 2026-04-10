"use client"

import { useRef, useState, useCallback } from "react"
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion"
import { Globe, Server, Smartphone, Diamond, ShieldCheck, Plug } from "lucide-react"
import { SectionWrapper, SectionHeading } from "./section-wrapper"

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Next.js, React.js, Tailwind — blazing-fast, SEO-ready web applications built for performance and scale.",
    tags: ["Next.js", "React.js", "Tailwind CSS", "TypeScript"],
    accent: "#3b82f6",
    accentRgb: "59, 130, 246",
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Robust RESTful & GraphQL APIs with Node.js, Express, and scalable database architecture.",
    tags: ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL"],
    accent: "#8b5cf6",
    accentRgb: "139, 92, 246",
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps (React Native)",
    description:
      "Cross-platform mobile apps for iOS and Android using React Native with native-level performance.",
    tags: ["React Native", "Expo", "iOS", "Android"],
    accent: "#06b6d4",
    accentRgb: "6, 182, 212",
    gradient: "from-cyan-500/20 via-sky-500/10 to-transparent",
  },
  {
    icon: Diamond,
    title: "Mobile Apps (Flutter)",
    description:
      "Create visually stunning and fast applications with a single codebase powered by Google’s Flutter framework. Flutter",
    tags: ["Flutter", "Dart", "Firebase", "iOS", "Android"],
    accent: "#ec4899",
    accentRgb: "236, 72, 153",
    gradient: "from-pink-500/20 via-rose-500/10 to-transparent",
  },
  {
    icon: ShieldCheck,
    title: "QA & Testing",
    description:
      "End-to-end manual and automated testing for web and mobile to ship with confidence.",
    tags: ["Jest", "Cypress", "Playwright", "Appium", "Postman"],
    accent: "#10b981",
    accentRgb: "16, 185, 129",
    gradient: "from-emerald-500/20 via-green-500/10 to-transparent",
  },
  {
    icon: Plug,
    title: "API Development & Integration",
    description:
      "Custom API design, third-party integrations (Stripe, Firebase, AWS, Twilio) and microservices.",
    tags: ["REST", "GraphQL", "Stripe", "Firebase", "AWS"],
    accent: "#f59e0b",
    accentRgb: "245, 158, 11",
    gradient: "from-amber-500/20 via-yellow-500/10 to-transparent",
  },
]

// ─── Animated gradient border via conic-gradient rotation ───────────────────
const BORDER_ANIM = `
@keyframes spin-border {
  from { --angle: 0deg; }
  to   { --angle: 360deg; }
}
@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}
`

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  // Mouse position for 3D tilt
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth springs for tilt
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), { stiffness: 300, damping: 30 })

  // Shine position
  const shineX = useSpring(useTransform(mouseX, [-0.5, 0.5], ["-20%", "120%"]), { stiffness: 200, damping: 30 })
  const shineY = useSpring(useTransform(mouseY, [-0.5, 0.5], ["-20%", "120%"]), { stiffness: 200, damping: 30 })

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return
      const rect = cardRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      mouseX.set(x)
      mouseY.set(y)
    },
    [mouseX, mouseY]
  )

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }, [mouseX, mouseY])

  const Icon = service.icon

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: "1200px",
      }}
      className="relative cursor-default h-full"
    >
      {/* ── Animated glow border ─────────────────────────────────────── */}
      <motion.div
        className="absolute -inset-[1.5px] rounded-2xl"
        animate={
          isHovered
            ? {
                opacity: 1,
                background: [
                  `conic-gradient(from 0deg at 50% 50%, transparent 0deg, ${service.accent} 60deg, transparent 120deg)`,
                  `conic-gradient(from 90deg at 50% 50%, transparent 0deg, ${service.accent} 60deg, transparent 120deg)`,
                  `conic-gradient(from 180deg at 50% 50%, transparent 0deg, ${service.accent} 60deg, transparent 120deg)`,
                  `conic-gradient(from 270deg at 50% 50%, transparent 0deg, ${service.accent} 60deg, transparent 120deg)`,
                  `conic-gradient(from 360deg at 50% 50%, transparent 0deg, ${service.accent} 60deg, transparent 120deg)`,
                ],
              }
            : { opacity: 0 }
        }
        transition={
          isHovered
            ? { background: { duration: 3, repeat: Infinity, ease: "linear" }, opacity: { duration: 0.3 } }
            : { opacity: { duration: 0.3 } }
        }
      />

      {/* ── Static border (always visible, subtle) ───────────────────── */}
      <div
        className="absolute -inset-[1px] rounded-2xl"
        style={{
          background: `linear-gradient(135deg, rgba(${service.accentRgb}, 0.15), rgba(255,255,255,0.04), rgba(${service.accentRgb}, 0.08))`,
        }}
      />

      {/* ── Card body ────────────────────────────────────────────────── */}
      <div
        className="relative overflow-hidden rounded-2xl p-6 h-full flex flex-col"
        style={{
          background:
            "linear-gradient(145deg, rgba(15,15,25,0.95) 0%, rgba(10,10,18,0.98) 100%)",
          backdropFilter: "blur(20px)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Ambient gradient bg */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-500`}
          animate={{ opacity: isHovered ? 1 : 0 }}
        />

        {/* Travelling shine */}
        <motion.div
          className="pointer-events-none absolute h-40 w-40 rounded-full"
          style={{
            background: `radial-gradient(circle, rgba(${service.accentRgb}, 0.18) 0%, transparent 70%)`,
            left: shineX,
            top: shineY,
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Corner decoration */}
        <motion.div
          className="absolute right-4 top-4 h-16 w-16 rounded-full opacity-0"
          style={{
            background: `radial-gradient(circle, rgba(${service.accentRgb}, 0.25) 0%, transparent 70%)`,
          }}
          animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1.5 : 0.8 }}
          transition={{ duration: 0.4 }}
        />

        {/* ── Icon ─────────────────────────────────────────────────── */}
        <div className="relative mb-5" style={{ transform: "translateZ(20px)" }}>
          <motion.div
            className="relative inline-flex items-center justify-center"
            animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            {/* Icon glow ring */}
            <motion.div
              className="absolute inset-0 rounded-xl"
              animate={
                isHovered
                  ? {
                      boxShadow: [
                        `0 0 0 0px rgba(${service.accentRgb}, 0)`,
                        `0 0 0 6px rgba(${service.accentRgb}, 0.15)`,
                        `0 0 0 12px rgba(${service.accentRgb}, 0)`,
                      ],
                    }
                  : { boxShadow: "0 0 0 0px rgba(0,0,0,0)" }
              }
              transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0, ease: "easeOut" }}
            />

            <div
              className="relative flex h-12 w-12 items-center justify-center rounded-xl"
              style={{
                background: `linear-gradient(135deg, rgba(${service.accentRgb}, 0.2), rgba(${service.accentRgb}, 0.08))`,
                border: `1px solid rgba(${service.accentRgb}, 0.3)`,
              }}
            >
              <Icon
                className="h-5 w-5 transition-all duration-300"
                style={{ color: service.accent, filter: isHovered ? `drop-shadow(0 0 6px ${service.accent})` : "none" }}
              />
            </div>
          </motion.div>
        </div>

        {/* ── Title ────────────────────────────────────────────────── */}
        <motion.h3
          className="relative mb-3 font-serif text-lg font-semibold tracking-tight text-white"
          style={{ transform: "translateZ(15px)" }}
          animate={isHovered ? { x: 4 } : { x: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          {service.title}
          {/* Underline sweep */}
          <motion.span
            className="absolute -bottom-1 left-0 h-px"
            style={{ background: `linear-gradient(90deg, ${service.accent}, transparent)` }}
            initial={{ width: "0%" }}
            animate={{ width: isHovered ? "70%" : "0%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </motion.h3>

        {/* ── Description ──────────────────────────────────────────── */}
        <motion.p
          className="relative mb-5 text-sm leading-relaxed text-slate-400"
          style={{ transform: "translateZ(10px)" }}
          animate={isHovered ? { color: "rgba(203, 213, 225, 1)" } : { color: "rgba(148, 163, 184, 1)" }}
          transition={{ duration: 0.3 }}
        >
          {service.description}
        </motion.p>

        {/* ── Tags ─────────────────────────────────────────────────── */}
        <motion.div className="relative flex flex-wrap gap-2 mt-auto" style={{ transform: "translateZ(8px)" }}>
          {service.tags.map((tag, tagIndex) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.75, y: 8 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08 + tagIndex * 0.06 + 0.3,
                type: "spring",
                stiffness: 400,
                damping: 20,
              }}
              whileHover={{
                scale: 1.08,
                y: -2,
                backgroundColor: `rgba(${service.accentRgb}, 0.15)`,
                borderColor: `rgba(${service.accentRgb}, 0.5)`,
                color: service.accent,
                transition: { duration: 0.15 },
              }}
              className="rounded-lg border border-white/8 bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-400 backdrop-blur-sm transition-colors"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {/* ── Bottom accent line ────────────────────────────────────── */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] rounded-b-2xl"
          style={{ background: `linear-gradient(90deg, ${service.accent}, transparent)` }}
          initial={{ width: "0%" }}
          animate={{ width: isHovered ? "100%" : "0%" }}
          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
        />
      </div>
    </motion.div>
  )
}

// ─── Floating orbs background ───────────────────────────────────────────────
function FloatingOrb({ color, size, x, y, duration }: { color: string; size: number; x: string; y: string; duration: number }) {
  return (
    <motion.div
      className="pointer-events-none absolute rounded-full opacity-20 blur-3xl"
      style={{ width: size, height: size, left: x, top: y, background: color }}
      animate={{ y: ["0%", "-15%", "0%"], x: ["0%", "8%", "0%"], scale: [1, 1.1, 1] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    />
  )
}

export function Services() {
  return (
    <SectionWrapper id="services">
      {/* Inject CSS for @property animation */}
      <style>{BORDER_ANIM}</style>

      <div className="relative mx-auto max-w-7xl">
        {/* Background ambiance */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <FloatingOrb color="#3b82f6" size={400} x="10%" y="20%" duration={8} />
          <FloatingOrb color="#8b5cf6" size={300} x="70%" y="10%" duration={10} />
          <FloatingOrb color="#06b6d4" size={250} x="85%" y="60%" duration={9} />
          <FloatingOrb color="#ec4899" size={200} x="5%" y="70%" duration={11} />
        </div>

        {/* Heading with staggered reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <SectionHeading
            title="Everything You Need to Ship"
            subtitle="Full-service development for web, mobile, and beyond."
          />
        </motion.div>

        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
