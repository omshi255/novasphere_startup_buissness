"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Dribbble } from "lucide-react"

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Stack", href: "#stack" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Privacy", href: "#" },
]

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Dribbble, href: "#", label: "Dribbble" },
]

export function Footer() {
  return (
    <footer className="border-t border-border/30 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <motion.div 
          className="flex flex-col items-center gap-8 md:flex-row md:justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo & tagline */}
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.a
              href="#"
              className="flex items-center justify-center gap-1.5 font-serif text-xl font-bold tracking-tight text-foreground md:justify-start"
              whileHover={{ x: -4 }}
              transition={{ duration: 0.3 }}
            >
              Nova<span className="text-primary">Sphere</span>
              <motion.span 
                className="inline-block h-1.5 w-1.5 rounded-full bg-primary"
                whileHover={{ scale: 1.3 }}
              />
            </motion.a>
            <motion.p 
              className="mt-1 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Code. Build. Ship. Repeat.
            </motion.p>
          </motion.div>

          {/* Links */}
          <motion.nav 
            className="flex flex-wrap items-center justify-center gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {footerLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.08 }}
                whileHover={{ color: "rgb(228, 228, 231)", y: -2 }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.nav>

          {/* Social */}
          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/50 text-muted-foreground transition-all hover:border-border hover:text-foreground"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.08 }}
                whileHover={{ 
                  scale: 1.2, 
                  borderColor: "rgb(59, 130, 246)", 
                  color: "rgb(59, 130, 246)",
                  boxShadow: "0 0 15px rgba(59, 130, 246, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          className="mt-8 border-t border-border/20 pt-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <motion.p 
            className="text-xs text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
          >
            {"© NovaSphere Digital. Built with love in Indore, India."}
          </motion.p>
        </motion.div>
      </div>
    </footer>
  )
}
