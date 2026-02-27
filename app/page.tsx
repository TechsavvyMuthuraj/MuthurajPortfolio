// app/page.tsx
// SERVER COMPONENT (no "use client" here) — Page paints fast, client-only pieces hydrate later.

"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";

// ⭐ Optimized Google font (fast, display: swap)
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-inter",
});

// ⭐ Lazy-load heavy components AFTER paint
const LenisSmoothScroll = dynamic(
  () => import("@/components/ui/lenis-smooth-scroll"),
  { ssr: false }
);

const AnimatedShapesWrapper = dynamic(
  () => import("@/components/AnimatedShapesWrapper"),
  { ssr: false, loading: () => null }
);

const MouseFollower = dynamic(
  () => import("@/components/ui/mouse-follower"),
  { ssr: false }
);

// ⭐ Lazy-load lucide-react icons (prevents 30–45 kB of JS on first load)
const Calendar = dynamic(() =>
  import("lucide-react").then((mod) => mod.Calendar)
);
const MapPin = dynamic(() =>
  import("lucide-react").then((mod) => mod.MapPin)
);
const Code2 = dynamic(() =>
  import("lucide-react").then((mod) => mod.Code2)
);
const Users = dynamic(() =>
  import("lucide-react").then((mod) => mod.Users)
);
const Download = dynamic(() =>
  import("lucide-react").then((mod) => mod.Download)
);
const Github = dynamic(() =>
  import("lucide-react").then((mod) => mod.Github)
);
const Linkedin = dynamic(() =>
  import("lucide-react").then((mod) => mod.Linkedin)
);
const Mail = dynamic(() =>
  import("lucide-react").then((mod) => mod.Mail)
);
const ArrowRight = dynamic(() =>
  import("lucide-react").then((mod) => mod.ArrowRight)
);
const Briefcase = dynamic(() =>
  import("lucide-react").then((mod) => mod.Briefcase)
);
const User = dynamic(() =>
  import("lucide-react").then((mod) => mod.User)
);
const Sparkles = dynamic(() =>
  import("lucide-react").then((mod) => mod.Sparkles)
);

// Helper
function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function HomePage() {
  return (
    // Lenis is a client component; rendering it here does not block server paint.
    <LenisSmoothScroll>
      <div
        className={cn(
          "bg-background relative w-full overflow-hidden",
          inter.variable
        )}
      >
        {/* Hero Section */}
        <section className="relative flex min-h-screen w-full items-center justify-center">
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-rose-500/10 pointer-events-none" />

          {/* Animated background (lazy, hydrates AFTER hero paint) */}
          <AnimatedShapesWrapper />

          <div className="relative z-10 container mx-auto max-w-6xl px-6 py-20">
            <div className="text-center space-y-12">

              {/* HEADER - No animation on h1 (LCP must be static), fade allowed on wrapper */}
              <div className="space-y-6 animate-fade-up" style={{ animationDelay: "0.15s" }}>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight font-serif">
                  <span className="bg-gradient-to-r from-foreground via-foreground/95 to-foreground/85 bg-clip-text text-transparent">
                    Muthuraj C
                  </span>
                </h1>

                <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium max-w-3xl mx-auto">
                  Precision. Performance. Scalability.
                </p>

                <div className="flex items-center justify-center gap-6 text-sm md:text-base text-muted-foreground flex-wrap">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>Chennai, India</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>B.E(Honours) CSE, 2025</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Briefcase className="h-4 w-4" />
                    <span>Open to Work | Immediate Joiner</span>
                  </div>
                </div>
              </div>

              {/* CTAs – fade up AFTER hero text */}
              <div
                className="flex flex-wrap justify-center gap-4 md:gap-6 animate-fade-up"
                style={{ animationDelay: "0.28s" }}
              >
                <a
                  href="/whoami"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-marron-600 to-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 shadow-md text-lg group"
                >
                  <User className="h-5 w-5" />
                  Who Am I?
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="/experience"
                  className="inline-flex items-center gap-2 bg-green-600 text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:scale-105 shadow-md text-lg group"
                >
                  <Briefcase className="h-5 w-5" />
                  Experience
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="/projects"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 shadow-md text-lg group"
                >
                  <Code2 className="h-5 w-5" />
                  Projects
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Scroll to explore – with CLEAN bobbing animation */}
              <div
                className="pt-8 animate-fade-up"
                style={{ animationDelay: "0.45s" }}
              >
                <div className="flex flex-col items-center gap-2 text-muted-foreground animate-bob">
                  <span className="text-sm font-medium">Scroll to explore</span>
                  <ArrowRight className="h-5 w-5 rotate-90" />
                </div>
              </div>

            </div>
          </div>

          {/* Top fade overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent dark:from-black/80" />
        </section>

        {/* Value Proposition Section */}
        <section id="bring-to-team" className="relative min-h-screen flex items-center py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/8 via-transparent to-violet-500/8 pointer-events-none" />
          <div className="relative z-10 container mx-auto max-w-6xl px-6">
            <div className="space-y-16">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Continuous Learning & Growth</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Actively learning Spring Boot, scalable architecture, and modern backend technologies to improve every day
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                <div className="bg-card border border-border/40 rounded-2xl p-8 text-left group hover:bg-card/50 transition-all hover:scale-[1.02]">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500/10 p-4 rounded-xl">
                      <Code2 className="h-7 w-7 text-blue-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-xl mb-3">Clean & Structured Code</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Strong foundation in Java and SQL with focus on writing clean, maintainable, and performance-oriented applications.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border/40 rounded-2xl p-8 text-left group hover:bg-card/50 transition-all hover:scale-[1.02]">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-500/10 p-4 rounded-xl">
                      <Users className="h-7 w-7 text-green-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-xl mb-3">Team Collaboration</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Worked on academic and personal projects, collaborating with peers and sharing ideas to build effective solutions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border/40 rounded-2xl p-8 text-left group hover:bg-card/50 transition-all hover:scale-[1.02]">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-500/10 p-4 rounded-xl">
                      <Briefcase className="h-7 w-7 text-purple-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-xl mb-3">Technical Growth</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Continuously improving backend development skills by building real-world projects and exploring scalable architectures.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border/40 rounded-2xl p-8 text-left group hover:bg-card/50 transition-all hover:scale-[1.02]">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-500/10 p-4 rounded-xl">
                      <Sparkles className="h-7 w-7 text-orange-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-xl mb-3">Continuous Learning</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Actively improving backend development skills by learning Spring Boot, scalable architecture, and modern development practices.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="relative min-h-screen flex items-center py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-500/8 via-transparent to-amber-500/8 pointer-events-none" />
          <div className="relative z-10 container mx-auto max-w-6xl px-6">
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold">Tools & Technologies I Work With</h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A strong foundation in core technologies and development tools used to build efficient and maintainable software solutions.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
                {[
                  // Core Stack
                  { name: "TypeScript", color: "border-blue-500/30 hover:border-blue-500" },
                  { name: "Next.js", color: "border-neutral-500/30 hover:border-neutral-500" },
                  { name: "Tailwind CSS", color: "border-cyan-500/30 hover:border-cyan-500" },
                  { name: "FastAPI", color: "border-emerald-500/30 hover:border-emerald-500" },

                  // Core Programming
                  { name: "Java", color: "border-orange-500/30 hover:border-orange-500" },
                  { name: "SQL", color: "border-blue-500/30 hover:border-blue-500" },
                  { name: "OOP Concepts", color: "border-purple-500/30 hover:border-purple-500" },
                  { name: "Data Structures", color: "border-pink-500/30 hover:border-pink-500" },

                  // Backend Development
                  { name: "Spring Boot (Learning)", color: "border-emerald-500/30 hover:border-emerald-500" },
                  { name: "REST APIs", color: "border-green-500/30 hover:border-green-500" },
                  { name: "JDBC", color: "border-indigo-500/30 hover:border-indigo-500" },

                  // Database
                  { name: "MySQL", color: "border-sky-500/30 hover:border-sky-500" },
                  { name: "PostgreSQL (Basics)", color: "border-cyan-500/30 hover:border-cyan-500" },

                  // Tools
                  { name: "Git", color: "border-red-500/30 hover:border-red-500" },
                  { name: "GitHub", color: "border-zinc-500/30 hover:border-zinc-500" },
                  { name: "IntelliJ IDEA", color: "border-orange-400/30 hover:border-orange-400" },
                  { name: "VS Code", color: "border-blue-400/30 hover:border-blue-400" },
                  { name: "Postman", color: "border-orange-500/30 hover:border-orange-500" },

                  // Environment
                  { name: "Docker (Basics)", color: "border-sky-400/30 hover:border-sky-400" },
                  { name: "Linux (Basics)", color: "border-gray-400/30 hover:border-gray-400" },
                ].map((tech, i) => (
                  <span
                    key={tech.name}
                    className={`px-6 py-3 text-base rounded-full border-2 font-medium transition-all hover:scale-110 ${tech.color}`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative min-h-screen flex items-center py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10 pointer-events-none" />
          <div className="relative z-10 container mx-auto max-w-4xl px-6">
            <div className="space-y-12 text-center">
              <div className="bg-card border border-primary/20 rounded-3xl p-10 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Build Something Amazing</h2>
                <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                  <span className="text-foreground font-semibold">Ready to contribute</span> to your next big project.
                </p>

                <div className="pt-6 border-t border-border/30 mb-8">
                  <p className="text-sm text-muted-foreground">Open to: Full-time roles, internships, and exciting projects</p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <a href="/uploads/Resume.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-card border-2 border-primary/50 text-foreground px-6 py-3 rounded-xl font-semibold">
                    <Download className="h-5 w-5" /> Download Resume
                  </a>
                  <a href="mailto:techsavvy.muthuraj@gmail.com" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold">
                    <Mail className="h-5 w-5" /> Get in Touch
                  </a>
                </div>

                <div className="flex justify-center gap-4">
                  <a href="https://github.com/DARKCYBERCSE" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center bg-card rounded-xl">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/Muthurajc/" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center bg-card rounded-xl">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="mailto:techsavvy.muthuraj@gmail.com" className="w-12 h-12 flex items-center justify-center bg-card rounded-xl">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </LenisSmoothScroll>
  );
}
