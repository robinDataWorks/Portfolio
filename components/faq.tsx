"use client"

import { useEffect, useRef, useState } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "I specialize in machine learning consulting, computer vision solutions, LiDAR data annotation and processing, and end-to-end AI system development. From proof-of-concept to production deployment, I can help at any stage of your ML journey.",
  },
  {
    question: "What industries have you worked in?",
    answer:
      "I've worked across autonomous vehicles, healthcare (medical imaging), finance (fraud detection), manufacturing (quality control), and retail (recommendation systems). My experience spans both research environments and production systems.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary based on complexity. A proof-of-concept typically takes 2-4 weeks, while production-ready systems can take 2-6 months. I provide detailed estimates after understanding your specific requirements.",
  },
  {
    question: "Do you work with remote teams?",
    answer:
      "Absolutely! I've collaborated with teams across different time zones and have extensive experience with remote work. I'm flexible with communication tools and meeting schedules to ensure smooth collaboration.",
  },
  {
    question: "What makes your approach different?",
    answer:
      "I focus on delivering practical, production-ready solutions rather than just research prototypes. My experience in both academia and industry allows me to bridge the gap between cutting-edge research and real-world applications.",
  },
]

export function FAQ() {
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
    <section ref={sectionRef} className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
          {/* Left - Header */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-sm text-accent font-medium tracking-wider uppercase mb-4">
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Have more questions? Feel free to reach out directly. I&apos;m always happy
              to discuss potential collaborations and projects.
            </p>
          </div>

          {/* Right - Accordion */}
          <div
            className={`transition-all duration-700 delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border/50 rounded-xl px-6 bg-card/30 data-[state=open]:border-accent/30 data-[state=open]:bg-card/50 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left text-base font-medium hover:text-accent hover:no-underline py-5 [&[data-state=open]]:text-accent">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
