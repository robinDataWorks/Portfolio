"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, Copy } from "lucide-react"

const roles = [
  "Data Science & LiDAR Specialist",
  "Full Stack Developer",
  "UI/UX Designer",
  "AI/ML Engineer",
  "App Developer",
]

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [roleIndex, setRoleIndex] = useState(0)
  const [roleVisible, setRoleVisible] = useState(true)

  // Mouse parallax
  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { width, height, left, top } = container.getBoundingClientRect()
      const x = (clientX - left - width / 2) / 30
      const y = (clientY - top - height / 2) / 30
      container.style.setProperty("--mouse-x", `${x}px`)
      container.style.setProperty("--mouse-y", `${y}px`)
    }
    container.addEventListener("mousemove", handleMouseMove)
    return () => container.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Role cycling with fade
  useEffect(() => {
    const interval = setInterval(() => {
      // fade out
      setRoleVisible(false)
      setTimeout(() => {
        setRoleIndex((i) => (i + 1) % roles.length)
        setRoleVisible(true)
      }, 400)
    }, 2600)
    return () => clearInterval(interval)
  }, [])

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("souravkunanda12@gmail.com")
  }

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={
        {
          height: "100svh",
          minHeight: "600px",
          background: "#060606",
          "--mouse-x": "0px",
          "--mouse-y": "0px",
        } as React.CSSProperties
      }
    >
      {/* ── Star particles ── */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { top: "10%", left: "12%", size: 2, delay: 0 },
          { top: "7%", left: "48%", size: 1.5, delay: 1.2 },
          { top: "18%", left: "73%", size: 2, delay: 0.5 },
          { top: "22%", left: "30%", size: 1, delay: 2.1 },
          { top: "14%", left: "60%", size: 1.5, delay: 0.9 },
          { top: "28%", left: "88%", size: 1, delay: 1.7 },
          { top: "6%", left: "25%", size: 1, delay: 3 },
          { top: "32%", left: "8%", size: 1.5, delay: 2.5 },
          { top: "40%", left: "92%", size: 1, delay: 1.1 },
          { top: "5%", left: "80%", size: 1, delay: 0.3 },
        ].map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: 0.25,
              animation: `twinkle-star ${3 + i * 0.4}s ease-in-out infinite ${star.delay}s`,
            }}
          />
        ))}
      </div>

      {/* ── ATMOSPHERIC GLOW — separated so it can stretch higher than the planet container ── */}
      <div
        className="absolute inset-x-0 pointer-events-none"
        style={{ bottom: 0, height: "50%" }}
      >
        <div
          className="absolute inset-x-0"
          style={{
            bottom: 0,
            height: "100%",
            background:
              "radial-gradient(ellipse 100% 90% at 50% 100%, rgba(220,80,25,0.35) 0%, rgba(180,60,15,0.2) 30%, rgba(120,40,10,0.08) 55%, transparent 80%)",
          }}
        />
      </div>

      {/* ── PLANET / GLOBE ARC — flatter bend on mobile ── */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none flex justify-center w-full overflow-hidden"
        style={{ height: "28%" }}
      >
        {/* SVG arc — visually widened on mobile to create a gentle curve */}
        <div className="absolute inset-x-0 bottom-0 w-[150%] sm:w-full -ml-[25%] sm:ml-0 h-full">
          <svg
            className="absolute bottom-0 w-full h-full"
            viewBox="0 0 1440 360"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="planet-grad" cx="50%" cy="0%" r="100%">
                <stop offset="0%" stopColor="#1a1a1a" />
                <stop offset="45%" stopColor="#0e0e0e" />
                <stop offset="100%" stopColor="#050505" />
              </radialGradient>
            </defs>
            <ellipse cx="720" cy="380" rx="900" ry="340" fill="url(#planet-grad)" />
            <ellipse
              cx="720" cy="380" rx="900" ry="340"
              fill="none"
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="24"
              style={{ filter: "blur(14px)" }}
            />
            <ellipse
              cx="720" cy="380" rx="900" ry="340"
              fill="none"
              stroke="rgba(255,255,255,1)"
              strokeWidth="1.5"
              style={{ filter: "drop-shadow(0 0 12px rgba(255,255,255,0.9)) drop-shadow(0 0 32px rgba(255,255,255,0.6))" }}
            />
          </svg>
        </div>
      </div>

      {/* ── Main centered content — slightly smaller, more top margin ── */}
      <div
        className="relative z-10 flex flex-col items-center text-center"
        style={{
          paddingTop: "clamp(120px, 18vh, 180px)",
          paddingBottom: "clamp(180px, 28vh, 260px)",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        {/* Announcement Badge */}
        <div
          className="hero-in mb-5 sm:mb-7 inline-flex items-center gap-2 rounded-full border border-white/12 px-3 py-1.5 cursor-pointer group hover:border-white/22 transition-colors duration-300"
          style={{ background: "rgba(255,255,255,0.04)" }}
        >
          {/* <span className="rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-bold text-white leading-tight">
            New
          </span> */}
          <span className="text-xs sm:text-sm text-white/55 group-hover:text-white/75 transition-colors duration-300">
            Open to work!
          </span>
          <ArrowRight size={12} className="text-white/35" />
        </div>

        {/* Main Heading — slightly smaller than before */}
        <h1
          className="hero-up text-white font-extrabold leading-[1.06] tracking-[-0.03em]"
          style={{
            fontSize: "clamp(1.75rem, 4.1vw, 4.2rem)",
            fontFamily: "var(--font-grotesk), 'Space Grotesk', system-ui, sans-serif",
            maxWidth: "1100px",
            animationDelay: "0.12s",
          }}
        >
          I design and build products that
          <br />
          deliver{" "}
          <em
            style={{
              fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif",
              fontStyle: "italic",
              fontWeight: 800,
              letterSpacing: "-0.015em",
              color: "#d4a96a",
              WebkitTextFillColor: "#d4a96a",
            }}
          >
            real impact
          </em>
        </h1>

        {/* Subtitle */}
        <p
          className="hero-up mt-5 sm:mt-6 text-sm sm:text-base"
          style={{ animationDelay: "0.28s", color: "rgba(255,255,255,0.42)" }}
        >
          Hello, I&apos;m{" "}
          <span className="text-white font-semibold">Sourav Kumar</span>
        </p>

        {/* Animated cycling role badge */}
        <div className="hero-up mt-3" style={{ animationDelay: "0.38s", minHeight: "2.2rem" }}>
          <span
            className="inline-block rounded px-4 py-1.5 text-xs sm:text-sm font-semibold text-white role-badge"
            style={{
              background: "rgba(220,50,50,0.95)",
              opacity: roleVisible ? 1 : 0,
              transform: roleVisible ? "translateY(0)" : "translateY(6px)",
              transition: "opacity 0.35s ease, transform 0.35s ease",
            }}
          >
            {roles[roleIndex]}
          </span>
        </div>

        {/* CTAs */}
        <div
          className="hero-up mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-5 sm:gap-7"
          style={{ animationDelay: "0.52s" }}
        >
          <Link
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full border border-white/14 bg-white/[0.03] px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-medium text-white/65 transition-all duration-300 hover:border-white/28 hover:bg-white/[0.06] hover:text-white"
          >
            Let&apos;s Connect
            <span className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-white/10 transition-colors duration-300 group-hover:bg-white/20">
              <ArrowRight size={13} className="text-white/80" />
            </span>
          </Link>

          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 text-sm text-white/38 transition-colors duration-300 hover:text-white/65"
          >
            <Copy size={14} />
            souravkunanda12@gmail.com
          </button>
        </div>
      </div>

      {/* ── Edge vignette ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, transparent 40%, rgba(0,0,0,0.5) 100%)",
        }}
      />

      <style jsx>{`
        @keyframes hero-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes hero-up {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes twinkle-star {
          0%, 100% { opacity: 0.15; }
          50%       { opacity: 0.9; }
        }
        .hero-in {
          opacity: 0;
          animation: hero-in 0.9s ease-out forwards;
        }
        .hero-up {
          opacity: 0;
          animation: hero-up 0.9s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
