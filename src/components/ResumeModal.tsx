import React, { useEffect } from 'react';
import { X, Printer, MapPin, Mail, Phone, GraduationCap, Code2, Briefcase } from 'lucide-react';
import { PROFILE, Project } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects?: Project[];
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, projects = [] }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto print:p-0">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#050811]/90 backdrop-blur-md transition-opacity duration-300 print:hidden"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl my-6 bg-slate-950 border border-slate-800 rounded-3xl shadow-2xl shadow-black overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200 print:border-none print:shadow-none print:m-0 print:max-w-none print:bg-white print:text-black">
        {/* Header Actions (hidden during print) */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900/90 border-b border-slate-800 print:hidden">
          <div className="flex items-center gap-2 text-xs font-mono text-sky-400">
            <span>Curriculum Vitae</span>
            <span className="text-slate-600">&bull;</span>
            <span className="text-slate-400">{PROFILE.name}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500/20 text-sky-300 hover:bg-sky-500/30 border border-sky-500/40 text-xs font-medium transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto space-y-6 text-slate-200 print:max-h-none print:p-0 print:text-black">
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 print:border-black">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight print:text-black">
              {PROFILE.name}
            </h2>
            <p className="text-sm font-semibold text-sky-400 mt-1 print:text-sky-800">
              {PROFILE.title}
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-slate-400 print:text-gray-700 font-mono">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-rose-400 print:text-black" />
                {PROFILE.location}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-sky-400 print:text-black" />
                {PROFILE.email}
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-emerald-400 print:text-black" />
                {PROFILE.phone}
              </span>
              <span className="flex items-center gap-1">
                <span className="text-slate-500 font-bold">GH:</span>
                github.com/norbertihimbazwemanzi-lab
              </span>
              <span className="flex items-center gap-1">
                <span className="text-sky-500 font-bold">IN:</span>
                linkedin.com/in/manzi-norbert
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="text-xs uppercase font-mono font-bold tracking-wider text-sky-400 mb-2 print:text-black">
              Professional Summary
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed print:text-gray-800">
              {PROFILE.aboutBio}
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs uppercase font-mono font-bold tracking-wider text-sky-400 mb-3 flex items-center gap-1.5 print:text-black">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Education</span>
            </h3>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 print:bg-gray-100 print:border-gray-300">
              <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-white print:text-black">
                <span>{PROFILE.education}</span>
                <span className="text-xs font-mono text-sky-400 print:text-gray-600">2026 - Present</span>
              </div>
              <div className="text-xs text-slate-400 print:text-gray-700 mt-0.5 font-medium">
                {PROFILE.organization}
              </div>
              <p className="text-xs text-slate-300 print:text-gray-800 mt-2">
                Specialized coursework in algorithms, relational and cloud databases, modern component frameworks, reactive software architectures, and automated testing.
              </p>
            </div>
          </div>

          {/* Core Projects */}
          <div>
            <h3 className="text-xs uppercase font-mono font-bold tracking-wider text-sky-400 mb-3 flex items-center gap-1.5 print:text-black">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Key Software Projects</span>
            </h3>
            <div className="space-y-3">
              {projects.length > 0 ? (
                projects.map((proj) => (
                  <div
                    key={proj.id}
                    className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 print:bg-gray-50 print:border-gray-300"
                  >
                    <div className="flex flex-wrap items-center justify-between text-xs font-bold text-white print:text-black">
                      <span className="text-sm">{proj.title}</span>
                      <span className="text-slate-400 font-mono print:text-gray-600">
                        {proj.year} &bull; {proj.role}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 print:text-gray-700 mt-1 leading-relaxed">
                      {proj.description}
                    </p>
                    <div className="mt-2 text-[11px] font-mono text-sky-400 print:text-sky-900">
                      Stack: {proj.technologies.join(', ')}
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 print:bg-gray-50 print:border-gray-300">
                  <div className="flex flex-wrap items-center justify-between text-xs font-bold text-white print:text-black">
                    <span className="text-sm">Full-Stack Web Applications & Modules</span>
                    <span className="text-slate-400 font-mono print:text-gray-600">2026 &bull; Lead Developer</span>
                  </div>
                  <p className="text-xs text-slate-300 print:text-gray-700 mt-1 leading-relaxed">
                    Engineering scalable web applications, real-time message feeds, database schemas, and clean user interfaces using modern full-stack workflows.
                  </p>
                  <div className="mt-2 text-[11px] font-mono text-sky-400 print:text-sky-900">
                    Stack: React, TypeScript, Tailwind CSS, Firebase, Vite
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-xs uppercase font-mono font-bold tracking-wider text-sky-400 mb-3 flex items-center gap-1.5 print:text-black">
              <Code2 className="w-3.5 h-3.5" />
              <span>Technical Skills</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 print:bg-gray-50 print:border-gray-300">
                <span className="font-bold text-sky-300 block mb-1 print:text-black">Frontend</span>
                <span className="text-slate-400 print:text-gray-700 text-[11px]">
                  React, TypeScript, JavaScript, Tailwind CSS, Vue, HTML5, CSS3
                </span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 print:bg-gray-50 print:border-gray-300">
                <span className="font-bold text-sky-300 block mb-1 print:text-black">Backend & Cloud</span>
                <span className="text-slate-400 print:text-gray-700 text-[11px]">
                  Firebase Firestore, Firebase Auth, Cloud Storage, WebSockets, Node.js
                </span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 print:bg-gray-50 print:border-gray-300">
                <span className="font-bold text-sky-300 block mb-1 print:text-black">Tools & Practices</span>
                <span className="text-slate-400 print:text-gray-700 text-[11px]">
                  Git, GitHub, Vite, AI Prompting, Clean Code, CI/CD Workflows
                </span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 print:bg-gray-50 print:border-gray-300">
                <span className="font-bold text-sky-300 block mb-1 print:text-black">Design & UX</span>
                <span className="text-slate-400 print:text-gray-700 text-[11px]">
                  UI / UX Prototyping, Responsive Web Layouts, Photoshop, Accessibility
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
