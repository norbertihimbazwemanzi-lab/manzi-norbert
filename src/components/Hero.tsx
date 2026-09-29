import React, { useState, useEffect } from 'react';
import { ArrowDown, Send, FileText, Github, Linkedin, Facebook, Instagram, Mail, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { PROFILE, IMAGES } from '../data/portfolioData';
import { VisitorCounter } from './VisitorCounter';

interface HeroProps {
  onOpenResume: () => void;
}

const JOB_TITLES = [
  PROFILE.title,
  "React & TypeScript Developer",
  "Cloud & Real-Time Web Specialist",
  "UI / UX & Responsive Interfaces Craftsman",
  "TVET Rwanda Software Engineering Student"
];

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullTitle = JOB_TITLES[titleIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (displayedText.length < currentFullTitle.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentFullTitle.substring(0, displayedText.length + 1));
        }, 75);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentFullTitle.substring(0, displayedText.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % JOB_TITLES.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, titleIndex]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.offsetTop - 80;
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    }
  };

  const TECH_STACK = [
    { name: 'React.js', color: 'text-sky-400 border-sky-500/30' },
    { name: 'TypeScript', color: 'text-blue-400 border-blue-500/30' },
    { name: 'Tailwind CSS', color: 'text-cyan-400 border-cyan-500/30' },
    { name: 'Firebase Firestore', color: 'text-amber-400 border-amber-500/30' },
    { name: 'Socket.IO', color: 'text-indigo-400 border-indigo-500/30' },
    { name: 'Vite', color: 'text-purple-400 border-purple-500/30' },
    { name: 'Node.js', color: 'text-emerald-400 border-emerald-500/30' },
    { name: 'AI Engineering', color: 'text-sky-300 border-sky-400/30' }
  ];

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Graphic with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="Workspace ambient background"
          className="w-full h-full object-cover object-center opacity-30 select-none scale-105 transform motion-safe:animate-pulse-subtle"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050811]/70 via-[#050811]/90 to-[#050811]" />
        <div className="absolute inset-0 bg-grid-cyber opacity-60" />
        {/* Glowing radial ambient spots */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Badges Row: Availability + Real-Time Live Visitor Indicator */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 backdrop-blur-md text-emerald-400 text-xs font-mono shadow-lg shadow-emerald-950/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>{PROFILE.availability}</span>
          </div>

          <VisitorCounter variant="inline" />
        </div>

        {/* Name & Headline */}
        <div className="space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-mono text-sky-400 font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>Hello, I am</span>
            <span className="inline-flex items-center gap-1 text-slate-400 ml-2">
              <MapPin className="w-3.5 h-3.5 text-rose-400" />
              {PROFILE.location}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            <span className="bg-gradient-to-r from-sky-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-sm">
              {PROFILE.name}
            </span>
          </h1>

          <div className="min-h-[2.5rem] sm:min-h-[3rem] flex items-center justify-center">
            <p
              className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight max-w-2xl mx-auto flex items-center justify-center font-mono"
              aria-label={`Current title: ${JOB_TITLES[titleIndex]}`}
            >
              <span className="bg-gradient-to-r from-sky-200 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
                {displayedText}
              </span>
              <span
                className="inline-block w-[3px] h-[1.15em] ml-1.5 bg-sky-400 rounded-full animate-pulse shadow-[0_0_10px_#38bdf8]"
                aria-hidden="true"
              />
            </p>
          </div>
        </div>

        {/* Bio paragraph */}
        <p className="mt-6 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
          {PROFILE.bioShort} Specializing in building scalable, responsive web architectures, modern interactive user interfaces, and robust cloud-integrated applications.
        </p>

        {/* CTA Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => scrollTo('projects')}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-sky-500/25 transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <span>Explore Projects</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-sky-500/40 text-slate-200 font-medium text-sm transition-all duration-200"
          >
            <Send className="w-4 h-4 text-sky-400" />
            <span>Get In Touch</span>
          </button>

          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-sky-300 text-sm font-medium transition-all duration-200"
          >
            <FileText className="w-4 h-4 text-sky-400" />
            <span>View CV</span>
          </button>
        </div>

        {/* Social Links */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-sky-500/40 text-slate-400 hover:text-white transition-all shadow-sm"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-sky-500/40 text-slate-400 hover:text-sky-400 transition-all shadow-sm"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={PROFILE.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Profile"
            className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-blue-500/40 text-slate-400 hover:text-blue-400 transition-all shadow-sm"
          >
            <Facebook className="w-4 h-4" />
          </a>
          <a
            href={PROFILE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-pink-500/40 text-slate-400 hover:text-pink-400 transition-all shadow-sm"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            aria-label="Direct Email"
            className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/40 text-slate-400 hover:text-emerald-400 transition-all shadow-sm"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Tech Stack Pills Marquee / Grid */}
        <div className="mt-12 w-full pt-8 border-t border-slate-800/60">
          <p className="text-xs uppercase tracking-widest text-slate-500 font-mono mb-4">
            Core Technologies & Toolset
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-3xl mx-auto">
            {TECH_STACK.map((tech) => (
              <span
                key={tech.name}
                className={`px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-900/80 border ${tech.color} shadow-xs backdrop-blur-xs`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Quick Highlights Row */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-4xl">
          <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm text-left">
            <div className="flex items-center gap-2 text-sky-400 mb-1">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-xs font-mono uppercase text-slate-400">Focus</span>
            </div>
            <div className="text-sm font-semibold text-slate-100">Full-Stack Web</div>
            <div className="text-[11px] text-slate-400">React + Firebase + TS</div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm text-left">
            <div className="flex items-center gap-2 text-emerald-400 mb-1">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-xs font-mono uppercase text-slate-400">Real-Time</span>
            </div>
            <div className="text-sm font-semibold text-slate-100">&lt;50ms Sync</div>
            <div className="text-[11px] text-slate-400">WebSockets & Listeners</div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm text-left">
            <div className="flex items-center gap-2 text-indigo-400 mb-1">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-xs font-mono uppercase text-slate-400">Education</span>
            </div>
            <div className="text-sm font-semibold text-slate-100">L4 Software Dev</div>
            <div className="text-[11px] text-slate-400">TVET Rwanda</div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm text-left">
            <div className="flex items-center gap-2 text-cyan-400 mb-1">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-xs font-mono uppercase text-slate-400">Code Quality</span>
            </div>
            <div className="text-sm font-semibold text-slate-100">Clean Architecture</div>
            <div className="text-[11px] text-slate-400">Modular & Scalable</div>
          </div>
        </div>
      </div>
    </section>
  );
};
