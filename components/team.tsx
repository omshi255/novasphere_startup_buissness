"use client";

import { useEffect, useRef, useState } from "react";

// ── SVG Icons (fully professional, no emoji) ──────────────────────────────────
const CrownIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 20h20M4 20l2-8 6 4 6-4 2 8" />
    <circle cx="12" cy="8" r="2" />
    <path d="M4 12l2-8M20 12l-2-8" />
  </svg>
);

const ChartIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
    <line x1="2" y1="20" x2="22" y2="20" />
  </svg>
);

const PeopleIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

// ── Team Data ─────────────────────────────────────────────────────────────────
const team = [
  {
    role: "CEO",
    fullRole: "Chief Executive Officer",
    name: "Swati Shrivas",
    bio: "Visionary leader driving NovaSphere's mission to ship world-class digital products. Obsessed with startups, speed, and scalable systems.",
    accent: "#a78bfa",
    accentRgb: "167,139,250",
    Icon: CrownIcon,
    tag: "Founder & Visionary",
    initials: "CEO",
    linkedin: "#",
    stats: [{ label: "Projects Led", value: "3+" }, { label: "Since", value: "2023" }],
  },
  {
    role: "CFO",
    fullRole: "Chief Financial Officer",
    name: "Vishal Panwar",
    bio: "Manages budgets, runway, and financial strategy. Ensures every decision is backed by numbers and every project stays profitable.",
    accent: "#22d3ee",
    accentRgb: "34,211,238",
    Icon: ChartIcon,
    tag: "Finance & Strategy",
    initials: "CFO",
    linkedin: "#",
    stats: [{ label: "Budget Managed", value: "$50k+" }, { label: "Efficiency", value: "100%" }],
  },
  {
    role: "HR",
    fullRole: "Human Resources Lead",
    name: "Srishti sen",
    bio: "Builds culture, attracts talent, and keeps the team thriving. The human core of NovaSphere — making sure people come first.",
    accent: "#34d399",
    accentRgb: "52,211,153",
    Icon: PeopleIcon,
    tag: "People & Culture",
    initials: "HR",
    linkedin: "#",
    stats: [{ label: "Satisfaction", value: "100%" }, { label: "Culture", value: "A+" }],
  },
];

// ── useInView Hook ────────────────────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ── Keyframes ─────────────────────────────────────────────────────────────────
const KEYFRAMES = `
  @keyframes pulse-ring {
    0%, 100% { opacity: 0.5; transform: scale(1); }
    50%       { opacity: 0.15; transform: scale(1.1); }
  }
  @keyframes scan-line {
    0%   { transform: translateX(-100%); }
    100% { transform: translateX(200%); }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-6px); }
  }
`;

// ── Card ──────────────────────────────────────────────────────────────────────
function TeamCard({ member, index }: { member: (typeof team)[0]; index: number }) {
  const { ref, inView } = useInView();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0) scale(1)" : "translateY(52px) scale(0.96)",
        transition: `opacity 0.75s cubic-bezier(.22,1,.36,1) ${index * 0.17}s,
                     transform 0.75s cubic-bezier(.22,1,.36,1) ${index * 0.17}s`,
        position: "relative",
        borderRadius: "24px",
        padding: "1.5px",
        background: hovered
          ? `linear-gradient(135deg, ${member.accent}70 0%, rgba(255,255,255,0.06) 60%, transparent 100%)`
          : `linear-gradient(135deg, rgba(255,255,255,0.07), rgba(255,255,255,0.01))`,
        boxShadow: hovered
          ? `0 28px 64px rgba(${member.accentRgb},0.18), 0 0 0 0.5px ${member.accent}30`
          : `0 4px 32px rgba(0,0,0,0.35)`,
        willChange: "transform, opacity",
      }}
    >
      <div style={{
        borderRadius: "23px",
        background: "rgba(8,8,16,0.98)",
        padding: "36px",
        position: "relative",
        overflow: "hidden",
        height: "100%",
        boxSizing: "border-box",
      }}>
        {/* Radial glow */}
        <div style={{
          position: "absolute", top: "-80px", left: "-80px",
          width: "260px", height: "260px", borderRadius: "50%",
          background: `radial-gradient(circle, ${member.accent}1a 0%, transparent 70%)`,
          transform: hovered ? "scale(1.5)" : "scale(1)",
          transition: "transform 0.7s ease",
          pointerEvents: "none",
        }} />

        {/* Scan line on hover */}
        {hovered && (
          <div style={{
            position: "absolute",
            top: 0, left: 0, right: 0, height: "100%",
            background: `linear-gradient(90deg, transparent 0%, ${member.accent}10 50%, transparent 100%)`,
            animation: "scan-line 1.4s ease-in-out infinite",
            pointerEvents: "none",
            zIndex: 0,
          }} />
        )}

        {/* Top row */}
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "flex-start", marginBottom: "32px",
          position: "relative", zIndex: 1,
        }}>
          <div style={{
            width: "52px", height: "52px", borderRadius: "14px",
            background: `linear-gradient(135deg, ${member.accent}22, ${member.accent}08)`,
            border: `1px solid ${member.accent}35`,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: member.accent,
            transform: hovered ? "rotate(-8deg) scale(1.1)" : "rotate(0deg) scale(1)",
            transition: "transform 0.45s cubic-bezier(.34,1.56,.64,1)",
            boxShadow: hovered ? `0 8px 24px ${member.accent}25` : "none",
          }}>
            <member.Icon />
          </div>
          <span style={{
            fontSize: "11px", letterSpacing: "0.09em", textTransform: "uppercase",
            color: member.accent, background: `${member.accent}10`,
            border: `1px solid ${member.accent}22`,
            borderRadius: "999px", padding: "5px 14px", fontWeight: 600,
          }}>
            {member.tag}
          </span>
        </div>

        {/* Avatar */}
        <div style={{ position: "relative", marginBottom: "22px", display: "inline-block", zIndex: 1 }}>
          <div style={{
            width: "74px", height: "74px", borderRadius: "50%",
            background: `linear-gradient(135deg, ${member.accent}50, ${member.accent}12)`,
            border: `2px solid ${member.accent}55`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "20px", fontWeight: 800, color: "#fff",
            fontFamily: "'Courier New', monospace",
            position: "relative", zIndex: 1,
            animation: hovered ? "float 2.4s ease-in-out infinite" : "none",
          }}>
            {member.initials}
          </div>
          <div style={{
            position: "absolute", inset: "-7px", borderRadius: "50%",
            border: `1px solid ${member.accent}30`,
            animation: "pulse-ring 2.6s ease-in-out infinite",
          }} />
          <div style={{
            position: "absolute", inset: "-14px", borderRadius: "50%",
            border: `1px solid ${member.accent}14`,
            animation: "pulse-ring 2.6s ease-in-out infinite 0.6s",
          }} />
        </div>

        {/* Name */}
        <h3 style={{
          fontSize: "20px", fontWeight: 800, color: "#fff",
          marginBottom: "5px", letterSpacing: "-0.025em",
          fontFamily: "'Courier New', monospace",
          position: "relative", zIndex: 1,
        }}>
          {member.name}
        </h3>

        {/* Role */}
        <div style={{
          display: "flex", alignItems: "center", gap: "8px",
          marginBottom: "18px", position: "relative", zIndex: 1,
        }}>
          <span style={{ fontSize: "13px", color: member.accent, fontWeight: 700, letterSpacing: "0.05em" }}>
            {member.role}
          </span>
          <span style={{ color: "rgba(255,255,255,0.15)", fontSize: "12px" }}>—</span>
          <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.33)" }}>
            {member.fullRole}
          </span>
        </div>

        {/* Bio */}
        <p style={{
          fontSize: "14px", color: "rgba(255,255,255,0.42)",
          lineHeight: 1.85, marginBottom: "28px",
          position: "relative", zIndex: 1,
        }}>
          {member.bio}
        </p>

        {/* Stats */}
        <div style={{
          display: "flex", gap: "24px",
          paddingTop: "20px", marginBottom: "28px",
          borderTop: "1px solid rgba(255,255,255,0.055)",
          position: "relative", zIndex: 1,
        }}>
          {member.stats.map((s) => (
            <div key={s.label}>
              <div style={{
                fontSize: "19px", fontWeight: 800, color: member.accent,
                letterSpacing: "-0.02em", fontFamily: "'Courier New', monospace",
              }}>
                {s.value}
              </div>
              <div style={{
                fontSize: "10px", color: "rgba(255,255,255,0.28)",
                letterSpacing: "0.08em", textTransform: "uppercase", marginTop: "2px",
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* LinkedIn */}
        <a href={member.linkedin} style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          fontSize: "13px", fontWeight: 600, textDecoration: "none",
          color: hovered ? member.accent : "rgba(255,255,255,0.35)",
          transition: "color 0.3s ease",
          position: "relative", zIndex: 1, letterSpacing: "0.02em",
        }}>
          <LinkedInIcon />
          Connect on LinkedIn
          <span style={{
            display: "inline-flex",
            transform: hovered ? "translate(3px,-3px)" : "translate(0,0)",
            transition: "transform 0.3s cubic-bezier(.34,1.56,.64,1)",
          }}>
            <ArrowIcon />
          </span>
        </a>

        {/* Bottom glow line */}
        <div style={{
          position: "absolute", bottom: 0, left: "36px", right: "36px", height: "1px",
          background: `linear-gradient(90deg, transparent, ${member.accent}55, transparent)`,
          transform: hovered ? "scaleX(1)" : "scaleX(0.3)",
          transition: "transform 0.45s ease", transformOrigin: "center",
        }} />
      </div>
    </div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function TeamSection() {
  const { ref: headerRef, inView: headerInView } = useInView(0.2);

  return (
    <section id="team" style={{
      padding: "120px 24px", position: "relative",
      overflow: "hidden", background: "transparent",
    }}>
      <style>{KEYFRAMES}</style>

      {/* Grid texture */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)
        `,
        backgroundSize: "64px 64px", pointerEvents: "none",
      }} />

      {/* Ambient blobs */}
      <div style={{
        position: "absolute", top: "8%", left: "2%",
        width: "500px", height: "500px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(167,139,250,0.055) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "5%", right: "2%",
        width: "500px", height: "500px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(34,211,238,0.055) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>

        {/* Header */}
        <div ref={headerRef} style={{
          textAlign: "center", marginBottom: "80px",
          opacity: headerInView ? 1 : 0,
          transform: headerInView ? "translateY(0)" : "translateY(36px)",
          transition: "opacity 0.9s cubic-bezier(.22,1,.36,1), transform 0.9s cubic-bezier(.22,1,.36,1)",
        }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "999px", padding: "8px 20px", marginBottom: "28px",
          }}>
            <span style={{
              width: "6px", height: "6px", borderRadius: "50%",
              background: "#a78bfa", display: "inline-block",
              animation: "pulse-ring 2s ease-in-out infinite",
              boxShadow: "0 0 8px #a78bfa88",
            }} />
            <span style={{
              fontSize: "11px", letterSpacing: "0.12em",
              textTransform: "uppercase", color: "rgba(255,255,255,0.38)", fontWeight: 600,
            }}>
              Meet The Team
            </span>
          </div>

          <h2 style={{
            fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
            fontWeight: 800, letterSpacing: "-0.03em",
            lineHeight: 1.08, marginBottom: "20px", color: "#fff",
            fontFamily: "'Courier New', monospace",
          }}>
            The People Behind
            <br />
            <span style={{
              background: "linear-gradient(135deg, #a78bfa 0%, #22d3ee 50%, #34d399 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              NovaSphere
            </span>
          </h2>

          <p style={{
            fontSize: "16px", color: "rgba(255,255,255,0.38)",
            maxWidth: "480px", margin: "0 auto", lineHeight: 1.8,
          }}>
            A small but mighty team obsessed with building products that scale — fast, clean, and without cutting corners.
          </p>
        </div>

        {/* Cards Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "24px", alignItems: "stretch",
        }}>
          {team.map((member, i) => (
            <TeamCard key={member.role} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}