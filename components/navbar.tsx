"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Work" },
]

const moreLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#tech-stack", label: "Tech Stack" },
  { href: "#faq", label: "FAQ" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMoreOpen, setIsMoreOpen] = useState(false)
  const moreRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
        setIsMoreOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 pointer-events-none">
      {/* Desktop Floating Pill Navbar */}
      <nav
        className={cn(
          "hidden md:flex items-center gap-1 px-2 py-2 rounded-full border border-border/50 pointer-events-auto transition-all duration-500",
          isScrolled
            ? "bg-background/80 backdrop-blur-xl shadow-lg shadow-background/20"
            : "bg-background/40 backdrop-blur-lg"
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="relative text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/5"
          >
            {link.label}
          </Link>
        ))}

        {/* More Dropdown */}
        <div className="relative" ref={moreRef}>
          <button
            onClick={() => setIsMoreOpen(!isMoreOpen)}
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/5"
          >
            More
            <ChevronDown
              size={14}
              className={cn(
                "transition-transform duration-200",
                isMoreOpen && "rotate-180"
              )}
            />
          </button>
          <div
            className={cn(
              "absolute top-full mt-2 left-1/2 -translate-x-1/2 min-w-[160px] bg-background/90 backdrop-blur-xl border border-border/50 rounded-xl py-2 shadow-xl transition-all duration-200",
              isMoreOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2 pointer-events-none"
            )}
          >
            {moreLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors duration-200"
                onClick={() => setIsMoreOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-px h-5 bg-border/50 mx-1" />

        {/* CTA Button */}
        <Button
          asChild
          className="bg-accent text-accent-foreground hover:bg-accent/90 px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
        >
          <Link href="#contact">Book a Call</Link>
        </Button>
      </nav>

      {/* Mobile Navbar */}
      <nav
        className={cn(
          "md:hidden flex items-center justify-between w-[calc(100%-2rem)] mx-4 px-4 py-3 rounded-full border border-border/50 pointer-events-auto transition-all duration-500",
          isScrolled
            ? "bg-background/80 backdrop-blur-xl shadow-lg shadow-background/20"
            : "bg-background/40 backdrop-blur-lg"
        )}
      >
        <span className="text-sm font-medium text-foreground">Menu</span>
        <button
          className="text-foreground p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={cn(
          "md:hidden fixed top-20 left-4 right-4 bg-background/95 backdrop-blur-xl border border-border/50 rounded-2xl pointer-events-auto transition-all duration-300 shadow-xl",
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {[...navLinks, ...moreLinks].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 py-2.5 px-3 rounded-lg hover:bg-white/5"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-2 pt-2 border-t border-border/50">
            <Button
              asChild
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full"
            >
              <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Book a Call
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
