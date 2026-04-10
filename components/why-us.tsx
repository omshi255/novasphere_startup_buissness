"use client"

import { useRef, useState, useCallback } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Zap, Shield, Globe, MessageCircle } from "lucide-react"
import { SectionWrapper, SectionHeading } from "./section-wrapper"

const features = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Sprint-based, 2-week cycles. We ship fast without cutting corners.",
    accent: "#6366f1",
    accentRgb: "99, 102, 241",
    stat: "2 week",
    statLabel: "avg. cycle",
    gradient: "from-indigo-500/25 via-violet-500/10 to-transparent",
  },
  {
    icon: Shield,
    title: "Quality First",
    description: "100% test coverage standard. Every line of code is battle-tested.",
    accent: "#8b5cf6",
    accentRgb: "139, 92, 246",
    stat: "100%",
    statLabel: "test coverage",
    gradient: "from-violet-500/25 via-purple-500/10 to-transparent",
  },
  {
    icon: Globe,
    title: "Cross-Platform",
    description: "Web, iOS, Android from one team. Unified experience everywhere.",
    accent: "#06b6d4",
    accentRgb: "6, 182, 212",
    stat: "3×",
    statLabel: "platforms",
    gradient: "from-cyan-500/25 via-sky-500/10 to-transparent",
  },
  {
    icon: MessageCircle,
    title: "Transparent",
    description: "Daily updates, open communication. You always know where things stand.",
    accent: "#3b82f6",
    accentRgb: "59, 130, 246",
    stat: "24h",
    statLabel: "response time",
    gradient: "from-blue-500/25 via-indigo-500/10 to-transparent",
  },
]

function AnimatedStat({ value, label, accent }: { value: string; label: string; accent: string }) {
  return (
    <motion.div
      className="mb-5 flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
    >
      <motion.span
        className="text-3xl font-black tracking-tight"
        style={{ color: accent, textShadow: `0 0 20px ${accent}55` }}
      >
        {value}
      </motion.span>
      <span className="mt-0.5 text-[10px] font-medium uppercase tracking-widest text-slate-500">
        {label}
      </span>
    </motion.div>
  )
}

function ParticleBurst({ accent, trigger }: { accent: string; trigger: boolean }) {
  const particles = Array.from({ length: 8 }, (_, i) => i)
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      {particles.map((i) => {
        const angle = (i / particles.length) * 360
        const rad = (angle * Math.PI) / 180
        return (
          <motion.div
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full"
            style={{ background: accent }}
            initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
            animate={
              trigger
                ? { x: Math.cos(rad) * 40, y: Math.sin(rad) * 40, opacity: [0, 1, 0], scale: [0, 1.5, 0] }
                : { x: 0, y: 0, opacity: 0, scale: 0 }
            }
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        )
      })}
    </div>
  )
}

function FeatureCard({ feature, index }: { feature: (typeof features)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [14, -14]), { stiffness: 250, damping: 25 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-14, 14]), { stiffness: 250, damping: 25 })
  const shineX = useSpring(useTransform(mouseX, [-0.5, 0.5], ["10%", "90%"]), { stiffness: 150, damping: 20 })
  const shineY = useSpring(useTransform(mouseY, [-0.5, 0.5], ["10%", "90%"]), { stiffness: 150, damping: 20 })

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }, [mouseX, mouseY])

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }, [mouseX, mouseY])

  const handleClick = () => {
    setClicked(true)
    setTimeout(() => setClicked(false), 700)
  }

  const Icon = feature.icon

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      initial={{ opacity: 0, y: 80, filter: "blur(10px)", scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: "1000px" }}
      className="relative cursor-pointer select-none"
    >
      {/* Spinning border */}
      <motion.div
        className="absolute -inset-[1.5px] rounded-2xl"
        animate={
          isHovered
            ? {
                opacity: 1,
                background: [
                  `conic-gradient(from 0deg at 50% 50%, transparent 0deg, ${feature.accent} 60deg, transparent 120deg)`,
                  `conic-gradient(from 120deg at 50% 50%, transparent 0deg, ${feature.accent} 60deg, transparent 120deg)`,
                  `conic-gradient(from 240deg at 50% 50%, transparent 0deg, ${feature.accent} 60deg, transparent 120deg)`,
                  `conic-gradient(from 360deg at 50% 50%, transparent 0deg, ${feature.accent} 60deg, transparent 120deg)`,
                ],
              }
            : { opacity: 0 }
        }
        transition={
          isHovered
            ? { background: { duration: 2.5, repeat: Infinity, ease: "linear" }, opacity: { duration: 0.3 } }
            : { opacity: { duration: 0.4 } }
        }
      />

      {/* Static border */}
      <div
        className="absolute -inset-[1px] rounded-2xl"
        style={{
          background: `linear-gradient(135deg, rgba(${feature.accentRgb},0.18), rgba(255,255,255,0.03), rgba(${feature.accentRgb},0.06))`,
        }}
      />

      {/* Card body */}
      <div
        className="relative flex flex-col items-center overflow-hidden rounded-2xl p-6 text-center"
        style={{
          background: "linear-gradient(160deg, rgba(14,14,22,0.97) 0%, rgba(9,9,16,0.99) 100%)",
          backdropFilter: "blur(24px)",
          transformStyle: "preserve-3d",
          minHeight: "280px",
        }}
      >
        {/* Ambient bg — contained inside card only */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-b ${feature.gradient}`}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />

        {/* Cursor shine */}
        <motion.div
          className="pointer-events-none absolute h-32 w-32 rounded-full"
          style={{
            background: `radial-gradient(circle, rgba(${feature.accentRgb},0.2) 0%, transparent 70%)`,
            left: shineX,
            top: shineY,
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Particle burst */}
        <div className="absolute left-1/2 top-[60px] -translate-x-1/2">
          <ParticleBurst accent={feature.accent} trigger={clicked} />
        </div>

        {/* Icon */}
        <div className="relative mb-4 mt-2" style={{ transform: "translateZ(24px)" }}>
          <motion.div
            className="absolute inset-0 rounded-2xl"
            animate={
              isHovered
                ? { boxShadow: [`0 0 0 0px rgba(${feature.accentRgb}, 0)`, `0 0 0 8px rgba(${feature.accentRgb}, 0.12)`, `0 0 0 16px rgba(${feature.accentRgb}, 0)`] }
                : { boxShadow: "0 0 0 0px rgba(0,0,0,0)" }
            }
            transition={{ duration: 1.6, repeat: isHovered ? Infinity : 0, ease: "easeOut" }}
          />
          <motion.div
            animate={isHovered ? { scale: 1.12, rotate: [0, -8, 8, 0] } : { scale: 1, rotate: 0 }}
            transition={
              isHovered
                ? { scale: { type: "spring", stiffness: 300, damping: 15 }, rotate: { duration: 0.5 } }
                : { type: "spring", stiffness: 300, damping: 20 }
            }
          >
            <div
              className="flex h-14 w-14 items-center justify-center rounded-2xl"
              style={{
                background: `linear-gradient(135deg, rgba(${feature.accentRgb},0.22), rgba(${feature.accentRgb},0.07))`,
                border: `1px solid rgba(${feature.accentRgb},0.35)`,
              }}
            >
              <Icon
                className="h-6 w-6"
                style={{
                  color: feature.accent,
                  filter: isHovered ? `drop-shadow(0 0 8px ${feature.accent})` : "none",
                  transition: "filter 0.3s",
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Stat */}
        <div style={{ transform: "translateZ(18px)" }}>
          <AnimatedStat value={feature.stat} label={feature.statLabel} accent={feature.accent} />
        </div>

        {/* Title */}
        <motion.h3
          className="relative mb-2 font-serif text-lg font-semibold tracking-tight text-white"
          style={{ transform: "translateZ(14px)" }}
          animate={isHovered ? { letterSpacing: "0.04em" } : { letterSpacing: "normal" }}
          transition={{ duration: 0.3 }}
        >
          {feature.title}
          <motion.span
            className="absolute -bottom-1 left-1/2 h-px -translate-x-1/2"
            style={{ background: `linear-gradient(90deg, transparent, ${feature.accent}, transparent)` }}
            initial={{ width: "0%" }}
            animate={{ width: isHovered ? "80%" : "0%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </motion.h3>

        {/* Description */}
        <motion.p
          className="relative text-sm leading-relaxed text-slate-400"
          style={{ transform: "translateZ(10px)" }}
          animate={{ color: isHovered ? "rgba(203,213,225,1)" : "rgba(148,163,184,1)" }}
          transition={{ duration: 0.3 }}
        >
          {feature.description}
        </motion.p>

        {/* Bottom sweep bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] rounded-b-2xl"
          style={{ background: `linear-gradient(90deg, transparent, ${feature.accent}, transparent)` }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
        />

        {/* Top glint */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px"
          style={{
            background: `linear-gradient(90deg, transparent, rgba(${feature.accentRgb},0.4), transparent)`,
            opacity: isHovered ? 1 : 0.2,
            transition: "opacity 0.4s",
          }}
        />
      </div>
    </motion.div>
  )
}

export function WhyUs() {
  return (
    <SectionWrapper>
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <SectionHeading
            title="Why NovaSphere"
            subtitle="What makes us different from every other agency."
          />
        </motion.div>

        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}