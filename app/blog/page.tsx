'use client';

import { motion } from 'framer-motion';
import LenisSmoothScroll from '@/components/ui/lenis-smooth-scroll';
import { Azeret_Mono } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Calendar, Clock, ArrowRight, Tag, PenTool, BookOpen } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { blogPosts } from '@/lib/blog-data';

const azeretMono = Azeret_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-azeret-mono',
});

export default function BlogPage() {
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

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);
  const hasPosts = blogPosts.length > 0;

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
              Blog
            </motion.h1>

            <motion.p
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              {hasPosts
                ? "Sharing my journey in Java backend development, SQL optimization, and building real-world applications."
                : "Coming soon: Java backend tutorials, project breakdowns, and lessons from real-world development."}
            </motion.p>

            {!hasPosts && (
              <motion.div
                custom={2}
                initial="hidden"
                animate="visible"
                variants={fadeInVariants}
                className="flex items-center justify-center gap-2 text-muted-foreground"
              >
                <PenTool className="h-5 w-5" />
                <span className="text-lg">Currently preparing my first technical posts...</span>
              </motion.div>
            )}
          </div>
        </section>

        {!hasPosts && (
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto">

              {/* Coming Soon */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <div className="flex items-center justify-center mb-8">
                  <div className="p-6 rounded-full bg-primary/10 border border-primary/20">
                    <BookOpen className="h-12 w-12 text-primary" />
                  </div>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Blog Coming Soon
                </h2>

                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                  I'm preparing to share Java backend tutorials, SQL optimization techniques,
                  and detailed project breakdowns from real-world applications.
                </p>
              </motion.div>

              {/* Upcoming Topics */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid md:grid-cols-2 gap-6 mb-16"
              >
                <div className="p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-foreground mb-4">Upcoming Topics</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-primary rounded-full" /> Java backend development fundamentals</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-primary rounded-full" /> Building CRUD apps with Spring Boot</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-primary rounded-full" /> SQL query optimization techniques</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-primary rounded-full" /> Project breakdown: CRM system</li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-foreground mb-4">What to Expect</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-primary rounded-full" /> Backend architecture explanations</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-primary rounded-full" /> Database design best practices</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-primary rounded-full" /> Clean code & OOP concepts</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-primary rounded-full" /> Lessons learned from projects</li>
                  </ul>
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-center"
              >
                <div className="p-8 rounded-2xl border border-border bg-card/30 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Get Notified</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Want to read my backend development insights first?
                    Drop me a message and I’ll notify you when the blog launches.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="mailto:techsavvy.muthuraj.dev@gmail.com?subject=Blog%20Launch%20Notification"
                      className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
                    >
                      Notify Me
                    </a>

                    <a
                      href="/projects"
                      className="px-6 py-3 border border-border rounded-full font-medium hover:bg-accent transition-colors"
                    >
                      View Projects Instead
                    </a>
                  </div>
                </div>
              </motion.div>

            </div>
          </section>
        )}
      </div>
    </LenisSmoothScroll>
  );
}