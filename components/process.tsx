"use client"

import { motion } from "framer-motion"
import { Search, Palette, Code2, TestTube, Rocket } from "lucide-react"
import { SectionWrapper, SectionHeading } from "./section-wrapper"

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Requirements, scope, architecture planning",
    icon: Search,
  },
  {
    number: "02",
    title: "Design",
    description: "Wireframes, UI mockups, prototyping",
    icon: Palette,
  },
  {
    number: "03",
    title: "Development",
    description: "Sprint-based agile development",
    icon: Code2,
  },
  {
    number: "04",
    title: "Testing",
    description: "Manual + automated QA across devices",
    icon: TestTube,
  },
  {
    number: "05",
    title: "Launch",
    description: "Deployment, monitoring, ongoing support",
    icon: Rocket,
  },
]

export function Process() {
  return (
    <SectionWrapper id="process">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="How We Work"
          subtitle="A proven process that delivers results every time."
        />

        {/* Desktop horizontal timeline */}
        <div className="hidden lg:block">
          <div className="relative flex items-start justify-between">
            {/* Connecting line */}
            <div className="absolute top-12 right-12 left-12 h-px bg-gradient-to-r from-primary/50 via-secondary/50 to-accent/50" />

            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                whileHover={{ y: -4, scale: 1.05 }}
                className="relative flex w-1/5 flex-col items-center text-center cursor-default"
              >
                <motion.div 
                  className="glass glow-border relative z-10 mb-6 flex h-24 w-24 flex-col items-center justify-center rounded-2xl transition-shadow hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    whileHover={{ rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <step.icon className="h-6 w-6 text-primary" />
                  </motion.div>
                </motion.div>
                <motion.span 
                  className="mb-1 font-serif text-4xl font-bold text-muted/80"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.1 }}
                >
                  {step.number}
                </motion.span>
                <motion.h3 
                  className="mb-1 font-serif text-lg font-semibold text-foreground"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.15 }}
                >
                  {step.title}
                </motion.h3>
                <motion.p 
                  className="text-sm text-muted-foreground"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.2 }}
                >
                  {step.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden">
          <div className="relative flex flex-col gap-8 pl-8">
            {/* Connecting line */}
            <div className="absolute top-0 bottom-0 left-3 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-accent/50" />

            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 4 }}
                className="relative flex gap-4 cursor-default"
              >
                <motion.div 
                  className="glass glow-border absolute -left-8 flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-shadow hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  whileHover={{ scale: 1.2 }}
                >
                  <motion.span 
                    className="h-2 w-2 rounded-full bg-primary"
                    whileHover={{ scale: 1.5 }}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.1 }}
                >
                  <motion.span 
                    className="text-xs font-semibold text-muted-foreground"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.15 }}
                  >
                    Step {step.number}
                  </motion.span>
                  <motion.h3 
                    className="mb-1 font-serif text-lg font-semibold text-foreground"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {step.title}
                  </motion.h3>
                  <motion.p 
                    className="text-sm text-muted-foreground"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.25 }}
                  >
                    {step.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
