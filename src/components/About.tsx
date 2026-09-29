import React from 'react';
import { Code2, Cpu, TrendingUp, Sparkles, MapPin, Mail, Award, CheckCircle, Terminal } from 'lucide-react';
import { PROFILE, CORE_PHILOSOPHIES, IMAGES } from '../data/portfolioData';

export const About: React.FC = () => {
  const getPhilosophyIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-6 h-6 text-sky-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-indigo-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-emerald-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-sky-400" />;
    }
  };

  return (
    <section id="about" className="relative py-24 overflow-hidden border-t border-slate-900">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.about}
          alt="About background texture"
          className="w-full h-full object-cover object-center opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050811] via-[#050811]/90 to-[#050811]" />
        <div className="absolute inset-0 bg-grid-cyber opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Crafting Scalable Digital Products with Precision & Passion
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Software Developer and Level 4 Software Development student based in Rwanda, passionate about building intuitive web systems and tackling real-world challenges with modern code.
          </p>
        </div>

        {/* Two-column overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column: Bio & Terminal Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-md shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span>Who I Am</span>
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              </h3>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I'm <strong className="text-sky-300 font-semibold">{PROFILE.name}</strong>, a Software Development student with a deep enthusiasm for designing and building digital systems that solve real-life problems.
                </p>
                <p>
                  My journey began with HTML, CSS, and modern JavaScript, advancing into complex reactive state trees with React and TypeScript, lightning-fast styling with Tailwind CSS, and scalable serverless backends powered by Firebase Firestore and WebSockets.
                </p>
                <p>
                  Whether engineering real-time communication modules, building comprehensive management dashboards, or creating developer collaboration tools, I care deeply about writing clean, maintainable, and high-performance code.
                </p>
              </div>

              {/* Developer stats pills */}
              <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="text-xs font-mono text-slate-400">Current Program</div>
                  <div className="text-sm font-bold text-sky-400 mt-1">L4 Software Dev</div>
                  <div className="text-[11px] text-slate-500">TVET Rwanda</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="text-xs font-mono text-slate-400">Location</div>
                  <div className="text-sm font-bold text-emerald-400 mt-1">Kigali, Rwanda</div>
                  <div className="text-[11px] text-slate-500">Available Globally</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 col-span-2 sm:col-span-1">
                  <div className="text-xs font-mono text-slate-400">Availability</div>
                  <div className="text-sm font-bold text-indigo-400 mt-1">Open for Work</div>
                  <div className="text-[11px] text-slate-500">Freelance & Full-time</div>
                </div>
              </div>
            </div>

            {/* Quick interactive code terminal preview */}
            <div className="rounded-2xl bg-slate-950/90 border border-slate-800 overflow-hidden font-mono text-xs shadow-2xl">
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-sky-400" />
                  <span className="text-slate-400">norbert-profile.ts</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
              </div>

              <div className="p-4 space-y-1 text-slate-300 overflow-x-auto leading-relaxed">
                <div>
                  <span className="text-indigo-400">const</span>{' '}
                  <span className="text-sky-300">developer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">name:</span>{' '}
                  <span className="text-emerald-300">&quot;{PROFILE.name}&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">title:</span>{' '}
                  <span className="text-emerald-300">&quot;{PROFILE.title}&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">location:</span>{' '}
                  <span className="text-emerald-300">&quot;{PROFILE.location}&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">stack:</span> [
                  <span className="text-amber-300">&quot;React&quot;</span>,{' '}
                  <span className="text-amber-300">&quot;TypeScript&quot;</span>,{' '}
                  <span className="text-amber-300">&quot;Tailwind CSS&quot;</span>,{' '}
                  <span className="text-amber-300">&quot;Firebase&quot;</span>,{' '}
                  <span className="text-amber-300">&quot;Socket.IO&quot;</span>],
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">passionateAbout:</span> [
                  <span className="text-amber-300">&quot;Clean Architecture&quot;</span>,{' '}
                  <span className="text-amber-300">&quot;Real-time Systems&quot;</span>,{' '}
                  <span className="text-amber-300">&quot;UX Fidelity&quot;</span>],
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">availableForHire:</span>{' '}
                  <span className="text-indigo-400">true</span>
                </div>
                <div>&#125;;</div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Details & Quick Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-md">
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <Award className="w-4 h-4 text-sky-400" />
                <span>Quick Facts</span>
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-start justify-between py-2 border-b border-slate-800/80">
                  <span className="text-slate-400">Full Name</span>
                  <span className="text-slate-100 font-semibold text-right">{PROFILE.name}</span>
                </div>

                <div className="flex items-start justify-between py-2 border-b border-slate-800/80">
                  <span className="text-slate-400">Education</span>
                  <span className="text-slate-100 font-semibold text-right">{PROFILE.education}</span>
                </div>

                <div className="flex items-start justify-between py-2 border-b border-slate-800/80">
                  <span className="text-slate-400">Institution</span>
                  <span className="text-slate-100 font-semibold text-right">{PROFILE.organization}</span>
                </div>

                <div className="flex items-start justify-between py-2 border-b border-slate-800/80">
                  <span className="text-slate-400">Location</span>
                  <span className="text-slate-100 font-semibold text-right flex items-center gap-1 justify-end">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" />
                    {PROFILE.location}
                  </span>
                </div>

                <div className="flex items-start justify-between py-2 border-b border-slate-800/80">
                  <span className="text-slate-400">Email</span>
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="text-sky-400 hover:text-sky-300 font-mono text-xs text-right break-all"
                  >
                    {PROFILE.email}
                  </a>
                </div>

                <div className="flex items-start justify-between py-2">
                  <span className="text-slate-400">Languages</span>
                  <span className="text-slate-100 font-semibold text-right">English, Kinyarwanda</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-sky-950/30 via-slate-900/60 to-indigo-950/30 border border-sky-500/20 backdrop-blur-md">
              <h4 className="text-sm font-bold text-sky-300 mb-2 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-sky-400" />
                <span>My Mission as a Developer</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                To engineer software solutions that make meaningful differences in daily operations for schools, communities, and businesses, keeping user experiences delightful, fast, and secure.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Core Philosophies Section */}
        <div className="mt-8">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white">Core Engineering Principles</h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">The foundational mindset that drives every project I build</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CORE_PHILOSOPHIES.map((item) => (
              <div
                key={item.title}
                className="group relative p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-sky-500/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/10"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-sky-500/40 flex items-center justify-center mb-4 transition-colors">
                  {getPhilosophyIcon(item.iconName)}
                </div>

                <h4 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                  {item.title}
                </h4>

                <p className="text-xs font-mono text-sky-400/80 mt-1 mb-3">
                  {item.tagline}
                </p>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
