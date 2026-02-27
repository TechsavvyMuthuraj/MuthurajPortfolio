'use client';

import { motion } from 'framer-motion';
import LenisSmoothScroll from '@/components/ui/lenis-smooth-scroll';
import { Azeret_Mono } from 'next/font/google';
import { cn } from '@/lib/utils';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import BlurVignette from '@/components/ui/blur-vignette';
import { SocialSection } from '@/components/ui/text-effect-flipper';


const azeretMono = Azeret_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-azeret-mono',
});

export default function WhoAmIPage() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.1,
        ease: [0.23, 1, 0.32, 1] as any, // Fixed: Added 'as any' to bypass TypeScript strict typing
      },
    }),
  };

  return (
    <LenisSmoothScroll
      options={{
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        mouseMultiplier: 0.8,
      }}
    >
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              className={cn(
                "text-6xl md:text-8xl font-bold text-foreground mb-8",
                azeretMono.className
              )}
            >
              Who Am I?
            </motion.h1>
            <motion.p
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
            >
              Engineering scalable solutions through continuous learning and practical development.
            </motion.p>
          </div>
        </section>

        {/* About Section */}
        <section className="min-h-screen flex items-center px-4 py-20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] as any }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">The Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I&apos;m a passionate Vibe Coder focused on building practical, scalable, and high-performance applications.
                What started as curiosity about technology has grown into a strong commitment to crafting efficient,
                reliable, and impactful digital solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Writing clean, scalable, and performance-driven code is not just my skill — it’s my mindset.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] as any }}
              className="h-full w-full flex justify-center"
            >
              <div className="w-72 h-72 md:w-96 md:h-96 relative rounded-2xl overflow-hidden shadow-lg border border-border">
                <BlurVignette>
                  <img
                    src="/MuthurajC.webp"
                    alt="Muthuraj C"
                    className="w-full h-full object-cover"
                  />
                </BlurVignette>
              </div>
            </motion.div>
          </div>
        </section>


        {/* Skills Section */}
        <section className="min-h-screen flex items-center px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] as any }}
              className="text-4xl md:text-5xl font-bold text-center mb-16"
            >
              What I Do
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Frontend Development",
                  description: "Creating responsive, interactive user interfaces with modern frameworks and tools.",
                  technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
                },
                {
                  title: "Backend Development",
                  description: "Building robust APIs and server-side applications with scalable architecture.",
                  technologies: ["Node.js", "PostgreSQL", "Spring Boot"]
                },
                {
                  title: "Core Java & OOP",
                  description: "Strong foundation in object-oriented programming with focus on clean, maintainable, and efficient code.",
                  technologies: ["Java", "OOP", "Exception Handling", "Collections"]
                },
                {
                  title: "Database & Query Optimization",
                  description: "Writing optimized SQL queries and designing structured databases for scalable applications.",
                  technologies: ["MySQL", "PostgreSQL", "Indexes", "Joins", "Stored Procedures"]
                },
                {
                  title: "Engineering Tools",
                  description: "Modern development and deployment tools used for efficient coding, version control, and backend testing.",
                  technologies: [
                    "Git",
                    "GitHub",
                    "IntelliJ IDEA",
                    "VS Code",
                    "Postman (API Testing)",
                    "MySQL Workbench",
                    "Docker (Containerization)",
                    "Linux Environment"
                  ]
                }

              ].map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: [0.23, 1, 0.32, 1] as any
                  }}
                  className="p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm"
                >
                  <h3 className="text-2xl font-bold mb-4">{skill.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {skill.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Testimonials Section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-muted/10">
          <div className="max-w-6xl mx-auto w-full">
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] as any }}
              className="text-4xl md:text-5xl font-bold text-center mb-16"
            >
              What People Say
            </motion.h2>
            <AnimatedTestimonials
              testimonials={[
                {
                  quote: "Muthuraj is a passionate Vibe Coder with strong technical knowledge and a clear understanding of backend development concepts. His curiosity and dedication to learning stand out.",
                  name: "Ajay Abhishek T. K",
                  designation: "System Engineer at Infosys",
                  src: "/testimonials/Ajay.webp",
                },
                {
                  quote: "Dedicated developer with strong Java fundamentals and a continuous learning attitude. He brings clarity and structure to backend development.",
                  name: "Aruljothi S",
                  designation: "Computer Science Graduate",
                  src: "/testimonials/aruljothi.webp",
                },
                {
                  quote: "Technically strong Vibe Coder with solid backend knowledge.",
                  name: "Thamaraiselvan S",
                  designation: "Associate Software Engineer at Solverminds",
                  src: "/testimonials/thamaraiselvan.webp",
                },
              ]}
            />
          </div>
        </section>

        {/* Social Section */}
        <SocialSection />

        {/* Contact Section */}
        <section className="min-h-screen flex items-center px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] as any }}
              className="text-4xl md:text-5xl font-bold mb-8"
            >
              Let&apos;s Connect
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] as any }}
              className="text-xl text-muted-foreground mb-12"
            >
              Ready to build something amazing together?
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] as any }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="mailto:techsavvy.muthuraj.dev@gmail.com"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                Get In Touch
              </a>
              <a
                href="/projects"
                className="px-8 py-4 border border-border rounded-full font-medium hover:bg-accent transition-colors"
              >
                View My Work
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </LenisSmoothScroll>
  );
}
