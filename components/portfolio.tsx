"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Download } from "lucide-react"
import { SectionWrapper, SectionHeading } from "./section-wrapper"

const projects = [
  {
    title: "Omkala",
    category: "Web App",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    gradient: "from-primary/20 to-secondary/20",
    screenshot: "/pro1.png",
    demoUrl: "https://omkalanotebook.com/",
    downloadUrl: null,
  },
  {
    title: "Novasphere",
    category: "Agency Website",
    tech: ["Next.js", "Stripe", "Vercel"],
    gradient: "from-accent/20 to-primary/20",
    screenshot: "/pro2.png",
    demoUrl: "https://novasphere-lake.vercel.app/",
    downloadUrl: null,
  },
  {
    title: "Tiffin CRM",
    category: "Tiffin Management System",
    tech: ["flutter", "Dart", "Firebase"],
    gradient: "from-primary/20 to-accent/20",
    screenshot: "/pro3.jpeg",
    demoUrl: "c:\\Users\\DELL\\Documents\\Tiffin_CRM_app\\client\\build\\app\\outputs\\apk\\release\\app-release.apk",
    downloadUrl: "/public/pro3.jpeg",
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
              className="group relative cursor-pointer overflow-hidden rounded-xl border border-border/30"
            >
              {/* Screenshot or gradient fallback */}
              {project.screenshot ? (
                <img
                  src={project.screenshot}
                  alt={`${project.title} screenshot`}
                  className="aspect-[4/3] w-full object-cover"
                />
              ) : (
                <div
                  className={`aspect-[4/3] bg-gradient-to-br ${project.gradient} flex items-center justify-center p-8`}
                >
                  <span className="font-serif text-2xl font-bold text-foreground/60">
                    {project.title}
                  </span>
                </div>
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex translate-y-full flex-col justify-end bg-gradient-to-t from-black/90 via-black/60 to-transparent p-5 transition-transform duration-300 group-hover:translate-y-0">
                <div className="flex flex-col gap-3">
                  <div>
                    <span className="inline-block rounded-full bg-white/20 px-2.5 py-1 text-xs font-medium text-white">
                      {project.category}
                    </span>
                    <h3 className="mt-2 font-serif text-lg font-bold text-white">
                      {project.title}
                    </h3>
                    <div className="mt-1 flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs text-white/60">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 rounded-md bg-white px-3 py-1.5 text-xs font-medium text-black hover:bg-white/90"
                      >
                        Live Demo <ArrowUpRight className="h-3 w-3" />
                      </a>
                    )}
                    {project.downloadUrl && (
                      
                      <a
                        href={project.downloadUrl}
                        download
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 rounded-md border border-white/30 bg-white/15 px-3 py-1.5 text-xs font-medium text-white hover:bg-white/25"
                      >
                        Download <Download className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Footer bar */}
              <div className="glass border-t border-border/30 px-5 py-3 transition-opacity duration-300 group-hover:opacity-0">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">
                    {project.title}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {project.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}