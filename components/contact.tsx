"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  ArrowRight,
  Loader2,
  Check,
  User,
  Briefcase,
  DollarSign,
} from "lucide-react";
import { SectionWrapper, SectionHeading } from "./section-wrapper";

export function Contact() {
  const [formState, setFormState] = useState<"idle" | "loading" | "success">(
    "idle",
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("loading");

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      service: formData.get("service"),
      budget: formData.get("budget"),
      brief: formData.get("brief"),
    };

    try {
      const res = await fetch(
        "https://hook.eu1.make.com/v524b8ypr5b6o2revqsd626q1ia6qrdq",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        },
      );

      if (!res.ok) throw new Error("Webhook failed");

      setFormState("success");
      e.currentTarget.reset();
    } catch (error) {
      console.error("Webhook error:", error);
      setFormState("idle");
    }
  };

  return (
    <SectionWrapper id="contact">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Let's Build Something Together"
          subtitle="Have a project in mind? We'd love to hear about it."
        />

        <div className="grid gap-16 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div className="flex flex-col justify-center space-y-6">
            

            <p className="text-muted-foreground text-lg leading-relaxed">
              Whether you need a web app, mobile app, or QA testing, our team is
              ready to bring your vision to life.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-primary" />
               shrivasumii@gmail.com
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-primary" />
                Remote, India
              </div>
            </div>
          </div>

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-xl space-y-6"
          >
            {/* NAME */}
            <div className="relative">
              <User className="absolute left-3 top-3 text-muted-foreground w-4 h-4" />
              <input
                name="name"
                required
                placeholder="Your Name"
                className="w-full rounded-lg bg-black/20 border border-white/10 px-10 py-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
              />
            </div>

            {/* EMAIL */}
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-muted-foreground w-4 h-4" />
              <input
                name="email"
                type="email"
                required
                placeholder="Email Address"
                className="w-full rounded-lg bg-black/20 border border-white/10 px-10 py-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
              />
            </div>

            {/* SERVICE */}
            <div className="relative">
              <Briefcase className="absolute left-3 top-3 text-muted-foreground w-4 h-4" />
              <select
                name="service"
                required
                className="w-full rounded-xl border border-white/10 bg-black/40 px-10 py-3 text-white outline-none backdrop-blur-md transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 appearance-none"
              >
                <option value="" className="bg-[#0f172a] text-white">
                  Select Service
                </option>
                <option value="web" className="bg-[#0f172a] text-white">
                  Web Development
                </option>
                <option value="mobile" className="bg-[#0f172a] text-white">
                  Mobile App
                </option>
                <option value="backend" className="bg-[#0f172a] text-white">
                  Backend / API
                </option>
                <option value="testing" className="bg-[#0f172a] text-white">
                  QA Testing
                </option>
              </select>
            </div>

            {/* BUDGET */}
            <div className="relative">
              <DollarSign className="absolute left-3 top-3 text-muted-foreground w-4 h-4" />
              <select
                name="budget"
                required
                className="w-full rounded-lg bg-black/30 text-white border border-white/10 px-10 py-3 outline-none backdrop-blur-md transition focus:border-primary focus:ring-1 focus:ring-primary appearance-none"
              >
                <option value="" className="bg-[#0f172a] text-white">
                  Budget Range
                </option>
                <option value="5k" className="bg-[#0f172a] text-white">
                  {"<"}$5k
                </option>
                <option value="5k-15k" className="bg-[#0f172a] text-white">
                  $5k–15k
                </option>
                <option value="15k-50k" className="bg-[#0f172a] text-white">
                  $15k–50k
                </option>
                <option value="50k+" className="bg-[#0f172a] text-white">
                  $50k+
                </option>
              </select>
            </div>

            {/* BRIEF */}
            <textarea
              name="brief"
              rows={4}
              required
              placeholder="Tell us about your project..."
              className="w-full rounded-lg bg-black/20 border border-white/10 px-4 py-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition resize-none"
            />

            {/* BUTTON */}
            <motion.button
              type="submit"
              disabled={formState !== "idle"}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 py-3 font-medium text-white shadow-lg hover:shadow-xl transition"
            >
              {formState === "idle" && (
                <>
                  Send Message
                  <ArrowRight className="h-4 w-4" />
                </>
              )}

              {formState === "loading" && (
                <>
                  <Loader2 className="animate-spin h-4 w-4" /> Sending...
                </>
              )}

              {formState === "success" && (
                <>
                  <Check className="h-4 w-4" /> Message Sent
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </SectionWrapper>
  );
}
