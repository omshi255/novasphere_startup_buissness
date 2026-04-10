"use client"

import { motion } from "framer-motion"
import { SectionWrapper, SectionHeading } from "./section-wrapper"

const row1 = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "GraphQL",
]

const row2 = [
  "Flutter",
  "React Native",
  "PostgreSQL",
  "MongoDB",
  "Firebase",
  "Docker",
  "AWS",
  "Figma",
  "Jest",
  "Cypress",
  "Postman",
  "Prisma",
]

function MarqueeRow({
  items,
  direction,
}: {
  items: string[]
  direction: "left" | "right"
}) {
  const doubled = [...items, ...items]

  return (
    <motion.div 
      className="relative overflow-hidden py-3"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div
        className={`flex gap-4 ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
        style={{ width: "max-content" }}
      >
        {doubled.map((item, i) => (
          <motion.div
            key={`${item}-${i}`}
            className="glass glow-border flex shrink-0 items-center gap-2.5 rounded-full px-5 py-2.5 transition-all duration-300 hover:glow-blue cursor-default"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: (i % items.length) * 0.05 }}
            whileHover={{ scale: 1.08, backgroundColor: "rgba(59, 130, 246, 0.15)" }}
          >
            <span className="text-sm font-medium text-foreground">{item}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export function TechStack() {
  return (
    <SectionWrapper id="stack">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Our Tech Arsenal"
          subtitle="Battle-tested tools and frameworks we use to build world-class products."
        />
        <div className="flex flex-col gap-4">
          <MarqueeRow items={row1} direction="left" />
          <MarqueeRow items={row2} direction="right" />
        </div>
      </div>
    </SectionWrapper>
  )
}
