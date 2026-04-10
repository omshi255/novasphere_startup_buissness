"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface SectionWrapperProps {
  children: ReactNode
  id?: string
  className?: string
}

export function SectionWrapper({ children, id, className = "" }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative px-6 py-24 md:py-32 ${className}`}
    >
      {children}
    </motion.section>
  )
}

export function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mx-auto mb-16 max-w-2xl text-center">
      <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-base text-muted-foreground">{subtitle}</p>}
    </div>
  )
}
