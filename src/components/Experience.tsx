import React from 'react';
import { GraduationCap, Briefcase, Milestone, Sparkles, Calendar, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES, ExperienceItem, IMAGES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const getTypeBadge = (type: ExperienceItem['type']) => {
    switch (type) {
      case 'Education':
        return (
          <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
            <GraduationCap className="w-3 h-3" />
            <span>Education</span>
          </span>
        );
      case 'Experience':
        return (
          <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-sky-500/20 text-sky-300 border border-sky-500/40">
            <Briefcase className="w-3 h-3" />
            <span>Experience</span>
          </span>
        );
      case 'Milestone':
        return (
          <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
            <Milestone className="w-3 h-3" />
            <span>Milestone</span>
          </span>
        );
    }
  };

  return (
    <section id="experience" className="relative py-24 border-t border-slate-900 overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.journey}
          alt="Developer journey background"
          className="w-full h-full object-cover object-center opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050811] via-[#050811]/92 to-[#050811]" />
        <div className="absolute inset-0 bg-grid-cyber opacity-40" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Developer Pathway</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Journey & Practical Experience
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            The formative timeline of my software development training, personal project builds, and milestone achievements.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-32 space-y-12 pb-4">
          {EXPERIENCES.map((item) => (
            <div key={item.id} className="relative pl-8 md:pl-10 group">
              {/* Timeline Node Point */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-sky-400 group-hover:scale-125 group-hover:bg-sky-400 transition-all duration-300 shadow-md shadow-sky-500/50" />

              {/* Date stamp positioned on the left in md screens */}
              <div className="md:absolute md:-left-32 md:top-1 text-xs font-mono font-bold text-sky-400 mb-2 md:mb-0 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-500 md:hidden" />
                <span>{item.date}</span>
              </div>

              {/* Card Container */}
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 group-hover:border-sky-500/40 backdrop-blur-md transition-all duration-300 shadow-lg">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h3>
                  {getTypeBadge(item.type)}
                </div>

                <div className="text-xs font-mono text-slate-400 mb-4 flex items-center gap-2">
                  <span className="text-sky-400 font-semibold">{item.organization}</span>
                  <span>&bull;</span>
                  <span>{item.highlight}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/80">
                  <div className="text-[11px] font-mono text-slate-500">Focus:</div>
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-950 border border-slate-800 text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
