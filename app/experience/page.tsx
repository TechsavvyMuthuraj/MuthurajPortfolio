'use client';

import { motion } from 'framer-motion';
import LenisSmoothScroll from '@/components/ui/lenis-smooth-scroll';
import { Azeret_Mono } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Calendar, MapPin, ExternalLink, Award, Users, Code, Lightbulb } from 'lucide-react';

const azeretMono = Azeret_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-azeret-mono',
});

const experiences = [
  {
    id: 1,
    title: "Software Testing Intern",
    company: "8Queens Software Technologies",
    location: "Chennai, Tamil Nadu",
    duration: "Nov 2023 - Dec 2023",
    type: "Internship",
    description: "Worked on manual and automated testing processes to ensure software quality, stability, and functional accuracy before release.",

    achievements: [
      "Executed manual, regression, and functional test cases to validate application workflows",
      "Performed API testing using Postman to verify backend responses",
      "Used Selenium to automate repetitive test cases and improve testing efficiency",
      "Identified and reported bugs with structured documentation to assist developers"
    ],

    technologies: [
      "Selenium",
      "Postman",
      "Manual Testing",
      "API Testing",
      "Regression Testing"
    ],

    highlights: [
      {
        icon: Code,
        title: "Functional Testing",
        description: "Validated application workflows through structured test cases"
      },
      {
        icon: Award,
        title: "Automation Exposure",
        description: "Automated repetitive tests using Selenium"
      },
      {
        icon: Users,
        title: "Team Collaboration",
        description: "Worked with developers to identify and resolve defects"
      },
      {
        icon: Lightbulb,
        title: "Quality Assurance",
        description: "Ensured application stability before deployment"
      }
    ]
  }
];

export default function ExperiencePage() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.1,
        ease: [0.23, 1, 0.32, 1] as any,
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
              Experience
            </motion.h1>
            <motion.p
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
            >
              Building backend systems. Learning continuously. Growing consistently.
            </motion.p>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="min-h-screen flex items-center px-4 py-20">
          <div className="max-w-6xl mx-auto w-full">
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] as any }}
              className="text-4xl md:text-5xl font-bold text-center mb-20"
            >
              Professional Timeline
            </motion.h2>

            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2,
                    ease: [0.23, 1, 0.32, 1] as any
                  }}
                  className="relative"
                >
                  {/* Timeline Line */}
                  <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-border hidden md:block" />

                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-12 w-5 h-5 bg-primary rounded-full border-4 border-background shadow-lg hidden md:block" />

                  {/* Content Card */}
                  <div className="md:ml-20 p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {experience.title}
                        </h3>
                        <div className="flex items-center gap-2 text-lg text-primary mb-2">
                          <span className="font-semibold">{experience.company}</span>
                          <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                            {experience.type}
                          </span>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center gap-2 text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{experience.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{experience.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {experience.description}
                    </p>

                    {/* Key Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-foreground mb-4">Key Achievements</h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-foreground mb-4">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-4">Highlights</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {experience.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-muted/50">
                            <highlight.icon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <h5 className="font-semibold text-foreground mb-1">{highlight.title}</h5>
                              <p className="text-sm text-muted-foreground">{highlight.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Future Goals Section */}
        <section className="min-h-screen flex items-center px-4 py-20 bg-muted/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] as any }}
              className="text-4xl md:text-5xl font-bold mb-8"
            >
              Looking Forward
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] as any }}
              className="text-xl text-muted-foreground mb-12 leading-relaxed"
            >
              I’m focused on developing clean, scalable backend solutions using Java and SQL.
              Driven by continuous learning, I enjoy solving real-world problems and building reliable software systems.
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
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                Let&apos;s Collaborate
              </a>
              <a
                href="/projects"
                className="px-8 py-4 border border-border rounded-full font-medium hover:bg-accent transition-colors"
              >
                View My Projects
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </LenisSmoothScroll>
  );
}
