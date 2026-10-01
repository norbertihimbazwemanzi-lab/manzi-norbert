import React, { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Facebook, Instagram, Mail, Heart } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { BrandLogo } from './BrandLogo';
import { VisitorCounter } from './VisitorCounter';
import { TrafficAnalytics } from './TrafficAnalytics';

export const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.offsetTop - 80;
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      {/* Background cyber grid */}
      <div className="absolute inset-0 bg-grid-cyber opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-12 border-b border-slate-900">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <button onClick={scrollToTop} className="focus:outline-none text-left">
              <BrandLogo />
            </button>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              {PROFILE.bioShort} Designing modern web interfaces, low-latency sync systems, and maintainable software architectures.
            </p>
            <div className="text-xs font-mono text-slate-500">
              Kigali, Rwanda &bull; {PROFILE.email} &bull; {PROFILE.phone}
            </div>
          </div>

          {/* Quick Nav Col */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => scrollTo('hero')} className="hover:text-sky-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('about')} className="hover:text-sky-400 transition-colors">
                  About Me
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('skills')} className="hover:text-sky-400 transition-colors">
                  Technical Skills
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('projects')} className="hover:text-sky-400 transition-colors">
                  Featured Projects
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('experience')} className="hover:text-sky-400 transition-colors">
                  Experience & Journey
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('contact')} className="hover:text-sky-400 transition-colors">
                  Contact & Hire
                </button>
              </li>
            </ul>
          </div>

          {/* Visitor Counter & Socials Col */}
          <div className="md:col-span-4 space-y-4">
            <VisitorCounter variant="card" />

            <div className="pt-2">
              <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                Connect With Me
              </h4>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-sky-500/40 text-slate-400 hover:text-sky-400 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={PROFILE.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-blue-500/40 text-slate-400 hover:text-blue-400 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={PROFILE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-pink-500/40 text-slate-400 hover:text-pink-400 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PROFILE.email}`}
                  aria-label="Email"
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500/40 text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Real-time Traffic Analytics Section */}
        <div className="py-10 border-b border-slate-900">
          <TrafficAnalytics />
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1">
            <span>&copy; {new Date().getFullYear()}</span>
            <span className="font-semibold text-slate-400">{PROFILE.name}</span>
            <span>&bull; Built with clean code & modern web standards.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-[11px] text-slate-500">
              Crafted in Kigali, Rwanda
            </span>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 hover:border-sky-500/40 text-slate-400 hover:text-sky-400 text-xs transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-sky-500/90 hover:bg-sky-400 text-slate-950 shadow-lg shadow-sky-500/30 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none"
        >
          <ArrowUp className="w-5 h-5 font-bold" />
        </button>
      )}
    </footer>
  );
};
