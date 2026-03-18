"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Github, Linkedin, Mail, Twitter } from "lucide-react"

const footerLinks = {
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  resources: [
    { label: "Blog", href: "#" },
    { label: "Resume", href: "#" },
    { label: "Case Studies", href: "#" },
  ],
  social: [
    { label: "GitHub", href: "#", icon: Github },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sourav-kumar-nanda/", icon: Linkedin },
    { label: "Twitter", href: "#", icon: Twitter },
    { label: "Email", href: "mailto:souravkunanda12@gmail.com", icon: Mail },
  ],
}

export function Footer() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

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

  return (
    <footer id="contact" ref={sectionRef} className="relative overflow-hidden">
      {/* Decorative accent shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

      {/* CTA Section */}
      <div className="relative border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div
            className={`text-center max-w-3xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Let&apos;s Build Something{" "}
              <span className="text-accent">Great</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
              Ready to transform your data into intelligent solutions? Let&apos;s discuss
              how I can help bring your AI vision to life.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 group"
              >
                <Link href="mailto:hello@sourav.dev">
                  Get Started
                  <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 border-border hover:bg-card hover:text-foreground"
              >
                <Link href="#projects">View Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="relative max-w-6xl mx-auto px-6 py-12">
        <div
          className={`grid md:grid-cols-4 gap-10 mb-12 transition-all duration-700 delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              href="#home"
              className="text-xl font-bold text-foreground hover:text-accent transition-colors"
            >
              SOURAV
            </Link>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              Data Scientist & AI Engineer crafting intelligent solutions.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-3">
              {footerLinks.social.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-10 h-10 rounded-full bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/30 transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className={`pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 transition-all duration-700 delay-200 ${isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SOURAV. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Designed & built with precision
          </p>
        </div>
      </div>
    </footer>
  )
}
