import { Code, Menu } from 'lucide-react';
import React, { useState, useEffect } from 'react';

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'stack', 'projects', 'engineering', 'contact'];
      let current = 'home';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };
    
    // Call once to set initial state
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'stack', label: 'Stack' },
    { id: 'projects', label: 'Projects' },
    { id: 'engineering', label: 'Engineering' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
        <a className="font-display text-xl font-bold tracking-tighter text-text-main" href="#">
          Manoel Vieira
        </a>
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={`#${link.id}`}
              className={`font-sans text-sm transition-colors relative pb-1 ${
                activeSection === link.id ? 'text-primary font-bold' : 'text-text-muted hover:text-text-main'
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-t-full" style={{ viewTransitionName: 'active-nav-indicator' }} />
              )}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <a className="btn-primary font-mono text-[13px]" href="https://github.com/Manoeldv" target="_blank" rel="noreferrer">
            <Code size={16} />
            GitHub
          </a>
        </div>
        <button aria-label="Toggle Menu" className="md:hidden text-text-main p-2">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className="w-full py-8 mt-24 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-mono text-[12px] uppercase tracking-widest text-text-muted">
          © 2026 Manoel Dutra Vieira.
        </span>
        <div className="flex gap-6">
          <a className="font-sans text-sm text-text-muted hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4" href="https://www.linkedin.com/in/manoel-vieira-6ba422273" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="font-sans text-sm text-text-muted hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4" href="https://github.com/Manoeldv" target="_blank" rel="noreferrer">GitHub</a>
          <a className="font-sans text-sm text-text-muted hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4" href="mailto:manoeldv@hotmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
};
