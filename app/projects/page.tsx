'use client'

import { useState, useMemo } from "react"
import { Carousel, Card } from "@/components/ui/apple-cards-carousel"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"
import React from "react"

type Project = {
  id: number
  name: string
  description: string
  image: string
  link?: string
  technologies?: string[]
  category: string
  content: React.ReactNode
}

const projects: Project[] = [
  {
    id: 6,
    name: "Venturo Technologies CRM System",
    description: "A web-based Customer Relationship Management (CRM) system for managing client interactions and business workflows.",
    image: "/card/crm.png",
    category: "Full Stack Web Development",
    technologies: ["Java", "Spring Boot", "MySQL", "HTML", "CSS", "JavaScript", "Netlify"],

    content: (
      <div className="space-y-4">
        <p className="text-neutral-600 dark:text-neutral-400">
          Developed a CRM system to streamline customer data management,
          track interactions, and improve internal business workflow efficiency.
        </p>

        <div className="space-y-2">
          <h3 className="font-semibold">Key Contributions:</h3>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Designed and implemented backend modules using Java and Spring Boot</li>
            <li>Integrated MySQL database with structured schema and optimized queries</li>
            <li>Built responsive frontend interface for managing client records</li>
            <li>Implemented CRUD operations for customer and sales data</li>
            <li>Deployed and hosted application for public access</li>
          </ul>
        </div>

        {/* 🔥 Live Project Button */}
        <div className="pt-4">
          <a
            href="https://venturo-technologies-crm.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-all"
          >
            View Live Project →
          </a>
        </div>
      </div>
    )
  },
  {
    id: 7,
    name: "Anim Cloud – Modern Cloud Storage UI",
    description: "A visually engaging cloud storage web interface with smooth animations and modern SaaS design principles.",
    image: "/card/animdrive.png",
    category: "Frontend Web Development",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Vercel"],

    content: (
      <div className="space-y-4">
        <p className="text-neutral-600 dark:text-neutral-400">
          Designed and developed a modern cloud storage landing page
          focused on user experience, smooth animations, and responsive design.
        </p>

        <div className="space-y-2">
          <h3 className="font-semibold">Key Features:</h3>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Built responsive UI using Next.js and Tailwind CSS</li>
            <li>Implemented smooth animations using Framer Motion</li>
            <li>Designed SaaS-style hero section with call-to-action components</li>
            <li>Optimized layout for desktop and mobile devices</li>
            <li>Deployed on Vercel for fast global performance</li>
          </ul>
        </div>
        {/* 🔥 Live Demo Button */}
        <div className="pt-4">
          <a
            href="https://anim-cloud.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-pink-600 text-white rounded-full font-medium hover:bg-pink-700 transition-all"
          >
            View Live Project →
          </a>
        </div>
      </div>
    )
  },
  {
    id: 8,
    name: "Pearl Sensi – Responsive Landing Page",
    description: "A visually engaging, responsive landing page built for Pearl Sensi with smooth animations and clean UI.",
    image: "/card/pearl-sensi.png",
    category: "Frontend Web Development",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design", "Animations"],

    content: (
      <div className="space-y-4">
        <p className="text-neutral-600 dark:text-neutral-400">
          Developed a modern and responsive landing page for Pearl Sensi using core web technologies.
          Focused on UI design, user experience, and fluid transitions.
        </p>

        <div className="space-y-2">
          <h3 className="font-semibold">Key Highlights:</h3>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Built with semantic HTML and clean CSS structure</li>
            <li>Implemented smooth animations and interactive elements</li>
            <li>Ensured full responsiveness across devices</li>
            <li>Optimized page load performance and layout consistency</li>
            <li>Deployed via GitHub Pages for live access</li>
          </ul>
        </div>

        {/* 🔗 Live Demo Button */}
        <div className="pt-4">
          <a
            href="https://darkcybercse.github.io/Pearl-Sensi/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-all"
          >
            View Live Project →
          </a>
        </div>
      </div>
    )
  },
  {
    id: 9,
    name: "Valentine’s Day Gify Generator",
    description: "A fun and interactive web app that lets users generate and share animated Valentine’s Day GIFs.",
    image: "/card/valentine.png",
    category: "Frontend Web Project",
    technologies: ["HTML", "CSS", "JavaScript", "Netlify", "Responsive Design"],

    content: (
      <div className="space-y-4">
        <p className="text-neutral-600 dark:text-neutral-400">
          Built an interactive Valentine’s Day GIF generator that allows users to generate themed GIFs with custom text and styles.
        </p>

        <div className="space-y-2">
          <h3 className="font-semibold">Key Features:</h3>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Responsive user interface built using HTML, CSS, and vanilla JavaScript</li>
            <li>Animated GIF generation with custom text and styling</li>
            <li>Mobile-friendly layout and UX</li>
            <li>Fast performance and intuitive interaction</li>
            <li>Deployed live on Netlify for instant access</li>
          </ul>
        </div>

        {/* 🔗 Live Demo Button */}
        <div className="pt-4">
          <a
            href="https://valentinesdaygify.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-all"
          >
            View Live Project →
          </a>
        </div>
      </div>
    )
  },
  {
    id: 10,
    name: "ProctorExam / Assessment Web App",
    description: "A web application for conducting assessments and managing exam interfaces with proctoring features.",
    image: "/card/proctorexam.png",
    category: "Web Application Development",
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel", "Responsive Design"],

    content: (
      <div className="space-y-4">
        <p className="text-neutral-600 dark:text-neutral-400">
          Developed a responsive assessment web application that allows users to take exams and interact with a proctored interface,
          focusing on usability, performance, and accessibility.
        </p>

        <div className="space-y-2">
          <h3 className="font-semibold">Key Features:</h3>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Responsive UX built using Next.js and Tailwind CSS</li>
            <li>Exam interface with smooth flow and intuitive layouts</li>
            <li>Interactive question components with real-time UI feedback</li>
            <li>Fast performance and minimal load times</li>
            <li>Deployed live on Vercel for global access</li>
          </ul>
        </div>

        {/* 🔗 Live Demo Button */}
        <div className="pt-4">
          <a
            href="https://proctorexam-assessment.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-all"
          >
            View Live Project →
          </a>
        </div>
      </div>
    )
  },
  {
    id: 11,
    name: "TechSavvy Muthuraj – Personal Portfolio Website",
    description: "A personal portfolio website to showcase my skills, projects, and professional journey.",
    image: "/card/portfolio.png",
    category: "Frontend Web Development",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design", "GitHub Pages"],

    content: (
      <div className="space-y-4">
        <p className="text-neutral-600 dark:text-neutral-400">
          Developed my personal portfolio site to highlight my development journey, showcase projects, and provide professional contact links.
        </p>

        <div className="space-y-2">
          <h3 className="font-semibold">Key Features:</h3>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Clean and responsive UI using core web technologies (HTML, CSS, JavaScript)</li>
            <li>Organized sections for About, Skills, Projects, Testimonials, and Contact</li>
            <li>Optimized for desktop and mobile viewing</li>
            <li>Hosted live on GitHub Pages for instant access</li>
            <li>Includes live demo buttons and interactive navigation</li>
          </ul>
        </div>

        {/* 🔗 Live Demo Button */}
        <div className="pt-4">
          <a
            href="https://techsavvymuthuraj.github.io/Website/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-all"
          >
            View Live Project →
          </a>
        </div>
      </div>
    )
  }
]


export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [selectedTech, setSelectedTech] = useState<string[]>([])

  // Extract unique categories and technologies
  const categories = ["All", ...new Set(projects.map(p => p.category))]
  const allTechnologies = [...new Set(projects.flatMap(p => p.technologies || []))]

  // Filter projects based on selected category and technologies
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const categoryMatch = selectedCategory === "All" || project.category === selectedCategory
      const techMatch = selectedTech.length === 0 ||
        (project.technologies && selectedTech.every(tech => project.technologies?.includes(tech)))
      return categoryMatch && techMatch
    })
  }, [selectedCategory, selectedTech])

  const toggleTechnology = (tech: string) => {
    setSelectedTech(prev =>
      prev.includes(tech)
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    )
  }

  const clearFilters = () => {
    setSelectedCategory("All")
    setSelectedTech([])
  }

  // Prepare card items for the Apple Cards Carousel
  const cardItems = filteredProjects.map((project, index) => (
    <Card
      key={project.id}
      card={{
        src: project.image,
        title: project.name,
        category: project.category,
        content: project.content,
        link: project.link
      }}
      index={index}
      layout={true}
    />
  ))


  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Projects</h1>
        <p className="text-lg text-muted-foreground">
          Showing {filteredProjects.length} of {projects.length} projects
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8">
        {/* Category Filter */}
        <div className="mb-4">
          <h3 className="text-sm font-medium text-muted-foreground mb-3">Filter by Category</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1 text-sm rounded-full transition-colors ${selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Technology Filter */}
        <div className="mb-4">
          <h3 className="text-sm font-medium text-muted-foreground mb-3">Filter by Technology</h3>
          <div className="flex flex-wrap gap-2">
            {allTechnologies.map(tech => (
              <button
                key={tech}
                onClick={() => toggleTechnology(tech)}
                className={`px-3 py-1 text-sm rounded-full transition-colors ${selectedTech.includes(tech)
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Active Filters & Clear */}
        {(selectedCategory !== "All" || selectedTech.length > 0) && (
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-medium text-muted-foreground">Active filters:</span>
            {selectedCategory !== "All" && (
              <Badge variant="secondary" className="gap-1">
                {selectedCategory}
                <button
                  onClick={() => setSelectedCategory("All")}
                  className="hover:bg-secondary-foreground/10 rounded-full p-0.5"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            {selectedTech.map(tech => (
              <Badge key={tech} variant="secondary" className="gap-1">
                {tech}
                <button
                  onClick={() => toggleTechnology(tech)}
                  className="hover:bg-secondary-foreground/10 rounded-full p-0.5"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
            <button
              onClick={clearFilters}
              className="text-sm text-muted-foreground hover:text-foreground underline"
            >
              Clear all
            </button>
          </div>
        )}
      </div>

      <Carousel items={cardItems} />
    </div>
  )
}

