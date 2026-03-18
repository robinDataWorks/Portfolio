"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = ["All", "AI/ML", "Computer Vision", "Data Engineering", "Web"]

const projects = [
  {
    title: "Autonomous Vehicle Perception",
    description:
      "End-to-end LiDAR point cloud processing pipeline for real-time object detection and tracking in autonomous vehicles.",
    category: "AI/ML",
    tags: ["PyTorch", "CUDA", "ROS"],
    image: "/project1.png",
    featured: true,
  },
  {
    title: "Medical Image Segmentation",
    description:
      "Deep learning model for automated tumor detection in MRI scans with 97% accuracy, deployed across 5 hospitals.",
    category: "Computer Vision",
    tags: ["TensorFlow", "OpenCV", "Docker"],
    image: "/project2.png",
    featured: false,
  },
  {
    title: "Real-time Fraud Detection",
    description:
      "Scalable ML pipeline processing 1M+ transactions daily with sub-10ms latency for financial fraud prevention.",
    category: "Data Engineering",
    tags: ["Spark", "Kafka", "AWS"],
    image: "/project3.png",
    featured: false,
  },
  {
    title: "3D Point Cloud Annotation Tool",
    description:
      "Web-based annotation platform for LiDAR data with ML-assisted labeling, reducing annotation time by 60%.",
    category: "Web",
    tags: ["React", "Three.js", "Python"],
    image: "/project4.png",
    featured: false,
  },
]

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState("All")

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 md:py-32"
    >
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm text-accent font-medium tracking-wider uppercase mb-4">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Selected Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in machine learning,
            computer vision, and data engineering.
          </p>
        </div>

        {/* Category Filter */}
        <div
          className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-accent text-accent-foreground"
                  : "bg-card/50 text-muted-foreground hover:bg-card hover:text-foreground border border-border/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative rounded-2xl overflow-hidden bg-card border border-border/50 
                hover:border-accent/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/5
                ${project.featured ? "md:col-span-2" : ""}
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Project Image Layout */}
              <div
                className={`relative ${
                  project.featured ? "h-56 md:h-80" : "h-48 md:h-56"
                } bg-neutral-900 overflow-hidden`}
              >
                {/* The actual image */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                />
                
                {/* Hover overlay that reveals buttons */}
                <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full border-foreground/20 hover:bg-foreground hover:text-background"
                    >
                      Learn More
                      <ArrowUpRight className="w-4 h-4 ml-1" />
                    </Button>
                    <Button
                      size="sm"
                      className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
                    >
                      Live Demo
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-background/80 backdrop-blur-sm text-foreground border border-border/50">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded bg-secondary text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
