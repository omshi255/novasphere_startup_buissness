"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { SectionWrapper, SectionHeading } from "./section-wrapper"

const projects = [
  {
    title: "FinFlow SaaS",
    category: "Web App",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    gradient: "from-primary/20 to-secondary/20",
  },
  {
    title: "MediBook",
    category: "Mobile App",
    tech: ["React Native", "Firebase"],
    gradient: "from-secondary/20 to-accent/20",
  },
  {
    title: "ShopVibe",
    category: "E-commerce",
    tech: ["Next.js", "Stripe", "MongoDB"],
    gradient: "from-accent/20 to-primary/20",
  },
  {
    title: "PulseTest Suite",
    category: "QA Platform",
    tech: ["Cypress", "Playwright", "Postman"],
    gradient: "from-primary/20 to-accent/20",
  },
  {
    title: "BuildTrack",
    category: "Flutter App",
    tech: ["Flutter", "Dart", "Firebase"],
    gradient: "from-secondary/20 to-primary/20",
  },
  {
    title: "NovaCMS",
    category: "Web App",
    tech: ["React", "GraphQL", "Node.js"],
    gradient: "from-accent/20 to-secondary/20",
  },
]

export function Portfolio() {
  return (
    <SectionWrapper id="work">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Work That Speaks"
          subtitle="A selection of projects we're proud of."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative cursor-pointer overflow-hidden rounded-xl"
            >
              {/* Card background */}
              <div
                className={`aspect-[4/3] bg-gradient-to-br ${project.gradient} flex items-center justify-center p-8`}
              >
                <span className="font-serif text-2xl font-bold text-foreground/60">
                  {project.title}
                </span>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 flex translate-y-full flex-col justify-end bg-gradient-to-t from-background via-background/95 to-transparent p-6 transition-transform duration-300 group-hover:translate-y-0">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="mb-2 inline-block rounded-md bg-primary/20 px-2.5 py-1 text-xs font-medium text-primary">
                      {project.category}
                    </span>
                    <h3 className="mt-2 font-serif text-xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs text-muted-foreground">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-full border border-border/50 p-2 transition-colors group-hover:border-primary group-hover:bg-primary/10">
                    <ArrowUpRight className="h-4 w-4 text-foreground" />
                  </div>
                </div>
              </div>

              {/* Bottom info always visible */}
              <div className="glass border-t border-border/30 px-5 py-3 transition-opacity duration-300 group-hover:opacity-0">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">{project.title}</span>
                  <span className="text-xs text-muted-foreground">{project.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
