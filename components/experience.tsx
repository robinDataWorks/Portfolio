"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight } from "lucide-react"

const experiences = [
  {
    company: "Imerit",
    role: "Senior Data Scientist",
    duration: "2023 — Present",
    description:
      "Leading the development of autonomous vehicle perception systems. Built end-to-end ML pipelines for LiDAR point cloud processing, achieving 15% improvement in object detection accuracy.",
    technologies: ["Python", "PyTorch", "AWS", "Kubernetes"],
    link: "#",
  },
  {
    company: "Quonscious",
    role: "Machine Learning Engineer",
    duration: "2021 — 2023",
    description:
      "Developed computer vision solutions for industrial quality control. Designed and deployed real-time inference systems processing 10K+ images daily with 99.2% accuracy.",
    technologies: ["TensorFlow", "OpenCV", "Docker", "GCP"],
    link: "#",
  },
]

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

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
      id="experience"
      ref={sectionRef}
      className="relative py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div
          className={`mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <p className="text-sm text-accent font-medium tracking-wider uppercase mb-4">
            Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            Where I&apos;ve worked
          </h2>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className={`group relative transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <a
                href={exp.link}
                className="block p-6 md:p-8 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm
                  hover:border-accent/30 hover:bg-card/80 transition-all duration-500"
              >
                <div className="grid md:grid-cols-[200px_1fr] gap-6">
                  {/* Timeline */}
                  <div className="flex md:flex-col gap-4 md:gap-0">
                    <p className="text-sm text-muted-foreground">{exp.duration}</p>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground flex items-center gap-2 group-hover:text-accent transition-colors">
                          {exp.role}
                          <span className="text-muted-foreground font-normal">·</span>
                          {exp.company}
                          <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                        </h3>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent border border-accent/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
