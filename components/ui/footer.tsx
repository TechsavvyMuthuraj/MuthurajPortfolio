'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import {
  Home,
  User,
  FolderOpen,
  FileText,
  Sun,
  Moon,
  Monitor,
  Github,
  Linkedin,
  Mail,
  Users,
  Youtube,
  Briefcase,
  Menu,
  X,
  BookOpen,
  ChevronUp,
} from 'lucide-react';
import { FloatingDock } from '@/components/ui/floating-dock';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark' | 'system';

type SocialLink = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

const Footer = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [themePopoverOpen, setThemePopoverOpen] = useState(false);
  const [socialPopoverOpen, setSocialPopoverOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isNearBottom, setIsNearBottom] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const distanceFromBottom = scrollHeight - scrollTop - clientHeight;
      setIsNearBottom(distanceFromBottom <= 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getThemeIcon = () => {
    if (!mounted) return <Monitor className="h-4 w-4" />;

    switch (theme) {
      case 'light':
        return <Sun className="h-4 w-4" />;
      case 'dark':
        return <Moon className="h-4 w-4" />;
      default:
        return <Monitor className="h-4 w-4" />;
    }
  };

  const themes: Theme[] = ['light', 'dark', 'system'];

  const socialLinks: SocialLink[] = [
    {
      name: 'GitHub',
      href: 'https://github.com/DARKCYBERCSE',
      icon: <Github className="h-4 w-4" />,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/muthurajc/',
      icon: <Linkedin className="h-4 w-4" />,
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@acesubash',
      icon: <Youtube className="h-4 w-4" />,
    },
    {
      name: 'Email',
      href: 'mailto:techsavvy.muthuraj.dev@gmail.com',
      icon: <Mail className="h-4 w-4" />,
    },
  ];

  const dockItems = [
    { title: 'Home', icon: <Home className="h-4 w-4" />, href: '/' },
    { title: 'Who Am I?', icon: <User className="h-4 w-4" />, href: '/whoami' },
    { title: 'Projects', icon: <FolderOpen className="h-4 w-4" />, href: '/projects' },
    { title: 'Experience', icon: <Briefcase className="h-4 w-4" />, href: '/experience' },
    { title: 'Blog', icon: <BookOpen className="h-4 w-4" />, href: '/blog' },
    { title: 'Resume', icon: <FileText className="h-4 w-4" />, href: '/uploads/Resume.pdf' },
  ];

  return (
    <>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <div className="md:hidden fixed bottom-4 left-4 z-50">
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="h-12 w-12 flex items-center justify-center rounded-full bg-background border shadow-lg"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <motion.footer
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-4">

          {/* Scroll To Top */}
          {isNearBottom && (
            <button
              onClick={scrollToTop}
              className="h-12 w-12 flex items-center justify-center rounded-full bg-background border shadow-lg"
            >
              <ChevronUp className="h-5 w-5" />
            </button>
          )}

          {/* Floating Dock */}
          {!isNearBottom && (
            <FloatingDock items={dockItems} />
          )}

          {/* Social Popover */}
          <Popover open={socialPopoverOpen} onOpenChange={setSocialPopoverOpen}>
            <PopoverTrigger asChild>
              <button className="h-12 w-12 flex items-center justify-center rounded-full bg-background border shadow-lg">
                <Users className="h-4 w-4" />
              </button>
            </PopoverTrigger>
            <PopoverContent align="center" side="top" className="w-56">
              <div className="space-y-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted transition-colors"
                  >
                    {social.icon}
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </PopoverContent>
          </Popover>

          {/* Theme Switcher */}
          <Popover open={themePopoverOpen} onOpenChange={setThemePopoverOpen}>
            <PopoverTrigger asChild>
              <button className="h-12 w-12 flex items-center justify-center rounded-full bg-background border shadow-lg">
                {getThemeIcon()}
              </button>
            </PopoverTrigger>
            <PopoverContent align="center" side="top" className="w-40">
              {themes.map((t) => (
                <button
                  key={t}
                  onClick={() => {
                    setTheme(t);
                    setThemePopoverOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded-md hover:bg-muted capitalize"
                >
                  {t}
                </button>
              ))}
            </PopoverContent>
          </Popover>

        </div>
      </motion.footer>
    </>
  );
};

export default Footer;