"use client"

import { useEffect, useRef, useState } from "react"
import { Shuffle, SkipBack, Pause, SkipForward, Repeat } from "lucide-react"

const steps = [
  { 
    id: "01", 
    label: "Step 01",
    title: "01 Discovery Call",
    description: "functional development. With experience across design systems, user experience, and front-end technologies, I focus on crafting products that are not just beautiful—but intuitive and impactful. Every project I take on is rooted in a belief that good design solves real problems and tells meaningful stories."
  },
  { 
    id: "02", 
    label: "Step 02",
    title: "02 Strategic Planning",
    description: "Once we understand the goals, I map out a comprehensive strategy. This involves user flow mapping, wireframing, and establishing a clear architecture that aligns with both user needs and business objectives."
  },
  { 
    id: "03", 
    label: "Step 03",
    title: "03 Visual Design",
    description: "Here, functionality meets aesthetics. I create high-fidelity designs, establish design systems, and ensure every visual element communicates your brand's core values while maintaining perfect accessibility standards."
  },
  { 
    id: "04", 
    label: "Step 04",
    title: "04 Development",
    description: "Bringing designs to life with clean, scalable code. I focus on semantic HTML, modern CSS architectures, and performant JavaScript to build responsive experiences that work flawlessly across all devices."
  },
  { 
    id: "05", 
    label: "Step 05",
    title: "05 Launch & Iterate",
    description: "The launch is just the beginning. I rigorously test across environments, deploy securely, and monitor performance to ensure continuous improvement based on real user feedback and analytics."
  },
]

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState("01")

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          {/* Left - Large Italic Headline with Sparkle */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-serif italic leading-[1.15] text-foreground">
              From Idea To{" "}
              <span className="relative inline-block">
                Execution,
                {/* Gold Sparkle */}
                <svg
                  className="absolute -top-6 -right-4 w-6 h-6 text-accent"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>
              </span>{" "}
              I Help You Realize The Dream With Design That&apos;s
            </h2>
          </div>

          {/* Right - Detailed Text */}
          <div
            className={`space-y-6 transition-all duration-700 delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-base text-muted-foreground leading-relaxed">
              <span className="text-accent">I&apos;m Sourav</span>, a creative professional who merges thoughtful
              design with clean, By focusing on what truly matters, I create
              work that reflects who you are and where you&apos;re going
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Great design doesn&apos;t need to shout to be heard. With a focus on
              clarity, structure, and emotion, I create digital experiences that
              are both intuitive and impactful—tailored to your goals, and
              rooted in your story.
            </p>
          </div>
        </div>

        {/* Interest Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {/* What I'm Reading Card */}
          <div
            className={`group relative p-5 rounded-2xl bg-card border border-border/50
              transition-all duration-500
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "300ms" }}
          >
            <span className="inline-block px-3 py-1.5 text-xs text-muted-foreground bg-secondary rounded-full mb-4">
              What I&apos;m Reading
            </span>
            <h3 className="text-lg font-semibold text-foreground leading-tight mb-1">
              Dieter Rams The<br />Complete Works
            </h3>
            <p className="text-sm text-muted-foreground mb-4">Klaus Klemp</p>
            
            {/* Book Image */}
            <div className="relative h-44 flex items-end justify-center">
              <div className="relative w-32 h-40 rounded-md shadow-2xl overflow-hidden transform -rotate-2">
                {/* Yellow/Orange striped book cover */}
                <div className="w-full h-full flex">
                  <div className="w-1/4 h-full bg-amber-500" />
                  <div className="w-1/4 h-full bg-amber-400" />
                  <div className="w-1/4 h-full bg-yellow-400" />
                  <div className="w-1/4 h-full bg-yellow-300" />
                </div>
                {/* Book spine shadow */}
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-black/20" />
              </div>
            </div>
          </div>

          {/* My Music Card */}
          <div
            className={`group relative p-5 rounded-2xl bg-card border border-border/50
              transition-all duration-500
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "400ms" }}
          >
            <span className="inline-block px-3 py-1.5 text-xs text-muted-foreground bg-secondary rounded-full mb-4">
              My Music
            </span>
            
            {/* Album Art Stack - Fanned out effect */}
            <div className="relative h-32 flex items-center justify-center mb-4">
              {/* Far left album */}
              <div 
                className="absolute w-12 h-12 rounded-lg overflow-hidden shadow-lg hover:z-20 transition-all duration-300"
                style={{ left: '10%', top: '30%', transform: 'rotate(-20deg)' }}
              >
                <img 
                  src="/music1.png" 
                  alt="Album art 1"
                  className="w-full h-full object-cover rounded-lg hover:scale-110 hover:-translate-y-2 transition-transform duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                />
              </div>
              {/* Left album */}
              <div 
                className="absolute w-14 h-14 rounded-lg overflow-hidden shadow-lg hover:z-20 transition-all duration-300"
                style={{ left: '18%', top: '20%', transform: 'rotate(-12deg)' }}
              >
                <img src="/music2.png" alt="Album 2" className="w-full h-full object-cover rounded-lg hover:scale-110 hover:-translate-y-2 transition-transform duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]" />
              </div>
              {/* Center-left album */}
              <div 
                className="absolute w-16 h-16 rounded-lg overflow-hidden shadow-lg hover:z-20 transition-all duration-300"
                style={{ left: '28%', top: '15%', transform: 'rotate(-5deg)' }}
              >
                <img src="/music3.png" alt="Album 3" className="w-full h-full object-cover rounded-lg hover:scale-110 hover:-translate-y-2 transition-transform duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]" />
              </div>
              {/* Main center album */}
              <div className="relative w-20 h-20 rounded-lg overflow-hidden shadow-2xl z-[5] hover:z-20 transition-all duration-300">
                <img src="/music4.png" alt="Main Album" className="w-full h-full object-cover rounded-lg hover:scale-110 hover:-translate-y-2 transition-transform duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.6)]" />
              </div>
              {/* Center-right album */}
              <div 
                className="absolute w-16 h-16 rounded-lg overflow-hidden shadow-lg hover:z-20 transition-all duration-300"
                style={{ right: '28%', top: '15%', transform: 'rotate(5deg)' }}
              >
                <img src="/music5.png" alt="Album 5" className="w-full h-full object-cover rounded-lg hover:scale-110 hover:-translate-y-2 transition-transform duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]" />
              </div>
              {/* Right album */}
              <div 
                className="absolute w-14 h-14 rounded-lg overflow-hidden shadow-lg hover:z-20 transition-all duration-300"
                style={{ right: '18%', top: '20%', transform: 'rotate(12deg)' }}
              >
                <img src="/music6.png" alt="Album 6" className="w-full h-full object-cover rounded-lg hover:scale-110 hover:-translate-y-2 transition-transform duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]" />
              </div>
              {/* Far right album - with label */}
              <div 
                className="absolute w-12 h-12 rounded-lg overflow-hidden shadow-lg hover:z-20 transition-all duration-300"
                style={{ right: '10%', top: '30%', transform: 'rotate(20deg)' }}
              >
                <img src="/music7.png" alt="Album 7" className="w-full h-full object-cover rounded-lg hover:scale-110 hover:-translate-y-2 transition-transform duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]" />
              </div>
            </div>
            
            <p className="text-center text-sm font-medium text-foreground mb-4">Viel Playlist</p>
            
            {/* Music Controls */}
            <div className="flex items-center justify-center gap-4">
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                <Shuffle className="w-4 h-4" />
              </button>
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                <SkipBack className="w-5 h-5" />
              </button>
              <button className="w-9 h-9 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-foreground/90 transition-colors">
                <Pause className="w-4 h-4" />
              </button>
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                <SkipForward className="w-5 h-5" />
              </button>
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                <Repeat className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* How I Work Card */}
          <div
            className={`group relative p-5 rounded-2xl bg-card border border-border/50
              transition-all duration-500
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "500ms" }}
          >
            <span className="inline-block px-3 py-1.5 text-xs text-muted-foreground bg-secondary rounded-full mb-4">
              How i work
            </span>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">
              {steps.find(s => s.id === activeStep)?.title}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed mb-6 min-h-[5rem]">
              {steps.find(s => s.id === activeStep)?.description}
            </p>
            
            {/* Step Indicators */}
            <div className="flex items-center gap-2 flex-wrap">
              {steps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`px-3 py-1.5 text-xs rounded-full transition-all duration-300 ${
                    activeStep === step.id
                      ? "bg-accent text-accent-foreground font-medium"
                      : "bg-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {step.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
