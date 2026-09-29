import React, { useEffect } from 'react';
import { X, ExternalLink, Sparkles, CheckCircle2, Layers, AlertCircle, Calendar, User, Zap } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#050811]/85 backdrop-blur-md transition-opacity duration-300"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-4xl my-8 bg-slate-950 border border-slate-800 rounded-3xl shadow-2xl shadow-black overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-slate-300 hover:text-white transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Thumbnail Hero Banner */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-slate-900 border-b border-slate-800">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          {/* Banner Meta Badges */}
          <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-sky-500/20 text-sky-300 border border-sky-500/40 backdrop-blur-md">
                {project.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                {project.title}
              </h3>
            </div>

            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs shadow-lg shadow-sky-500/30 transition-all"
              >
                <span>Live Preview</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : project.isComingSoon ? (
              <span className="px-3 py-1.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/40 font-mono text-xs font-medium">
                Under Active Development
              </span>
            ) : null}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Tagline & Subtitle */}
          <div>
            <p className="text-sm font-mono text-sky-400 font-medium">
              {project.tagline}
            </p>
            <p className="mt-1 text-sm text-slate-300 leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          {/* Quick Meta Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs">
            <div>
              <div className="text-slate-500 flex items-center gap-1.5 font-mono mb-1">
                <Calendar className="w-3.5 h-3.5 text-sky-400" />
                <span>Timeline</span>
              </div>
              <div className="font-semibold text-slate-200">{project.year}</div>
            </div>

            <div>
              <div className="text-slate-500 flex items-center gap-1.5 font-mono mb-1">
                <User className="w-3.5 h-3.5 text-indigo-400" />
                <span>My Role</span>
              </div>
              <div className="font-semibold text-slate-200">{project.role}</div>
            </div>

            <div>
              <div className="text-slate-500 flex items-center gap-1.5 font-mono mb-1">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Context</span>
              </div>
              <div className="font-semibold text-slate-200">{project.clientOrContext}</div>
            </div>

            <div>
              <div className="text-slate-500 flex items-center gap-1.5 font-mono mb-1">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Metrics</span>
              </div>
              <div className="font-semibold text-slate-200 truncate">{project.metrics}</div>
            </div>
          </div>

          {/* Problem Solved */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-sky-400" />
              <span>Problem Solved & Purpose</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-900/40 p-4 rounded-xl border border-slate-800/80">
              {project.problemSolved}
            </p>
          </div>

          {/* Key Features */}
          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Core Features & Capabilities</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/40 border border-slate-800/60 text-xs text-slate-200"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Architecture Notes */}
          {project.architectureNotes && (
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-400" />
                <span>Architecture & Engineering Notes</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-900/40 p-4 rounded-xl border border-slate-800/80">
                {project.architectureNotes}
              </p>
            </div>
          )}

          {/* Challenges & Solutions */}
          {project.challengesAndSolutions && project.challengesAndSolutions.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Technical Challenges & Solutions</span>
              </h4>
              <div className="space-y-2.5">
                {project.challengesAndSolutions.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800 text-xs text-slate-300 leading-relaxed whitespace-pre-line"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="pt-2">
            <div className="text-xs font-mono uppercase text-slate-400 mb-2">Technologies Used</div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-900 border border-slate-700/80 text-sky-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between">
          <div className="text-xs text-slate-500 font-mono">
            {project.role} &bull; {project.year}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors"
            >
              Close
            </button>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition-colors"
              >
                <span>Launch App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
