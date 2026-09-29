import React, { useState } from 'react';
import { ExternalLink, Sparkles, Eye, ArrowUpRight, FolderGit2, Plus, Github, Trash2, Code2, Layers } from 'lucide-react';
import { Project, IMAGES } from '../data/portfolioData';

interface ProjectsProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onOpenAddModal: () => void;
  onDeleteProject: (id: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({
  projects,
  onSelectProject,
  onOpenAddModal,
  onDeleteProject
}) => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Web Apps', 'Platforms', 'Systems', 'Mobile'];

  const filteredProjects = projects.filter((p) => {
    if (filter === 'All') return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="relative py-24 border-t border-slate-900 overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.projects}
          alt="Projects background cubes"
          className="w-full h-full object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050811] via-[#050811]/92 to-[#050811]" />
        <div className="absolute inset-0 bg-grid-cyber opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Project Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Works & Applications
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
              Software engineering projects, web applications, and systems developed with clean architecture and modern developer stacks.
            </p>
          </div>

          <button
            onClick={onOpenAddModal}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-semibold text-xs shadow-md shadow-sky-500/25 transition-all self-start md:self-auto shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Add Project</span>
          </button>
        </div>

        {/* Filter Tabs if projects exist */}
        {projects.length > 0 && (
          <div className="flex items-center justify-start sm:justify-center gap-2 mb-10 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                  filter === cat
                    ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow-xs'
                    : 'text-slate-400 hover:text-slate-200 bg-slate-900/60 border border-slate-800'
                }`}
              >
                {cat === 'All' ? 'All Projects' : cat}
              </button>
            ))}
          </div>
        )}

        {/* Empty State when no projects exist yet */}
        {projects.length === 0 ? (
          <div className="max-w-2xl mx-auto p-8 sm:p-12 rounded-3xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-md text-center space-y-5 shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-sky-500/30 flex items-center justify-center text-sky-400 mx-auto shadow-lg shadow-sky-500/10">
              <FolderGit2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">Your Project Showcase</h3>
              <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
                The previous projects have been removed. You can now add your own real projects, repositories, and live applications anytime.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={onOpenAddModal}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-sky-500/25 transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>Add Your First Project</span>
              </button>
            </div>
          </div>
        ) : (
          /* Projects Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-sky-500/40 backdrop-blur-md overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-sky-500/10"
              >
                <div>
                  {/* Thumbnail / Header Graphic */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-950 border-b border-slate-800 flex items-center justify-center">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex flex-col items-center justify-center p-6 text-center">
                        <Code2 className="w-10 h-10 text-sky-400/60 mb-2 group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-bold text-slate-300">{project.title}</span>
                        <span className="text-[11px] font-mono text-slate-500">{project.category}</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                    {/* Category Pill */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium bg-slate-950/80 border border-sky-500/30 text-sky-300 backdrop-blur-md">
                        {project.category}
                      </span>
                    </div>

                    {/* Year Tag & Delete button */}
                    <div className="absolute top-3 right-3 flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-950/80 border border-slate-700 text-slate-300 backdrop-blur-md">
                        {project.year}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (confirm(`Remove project "${project.title}"?`)) {
                            onDeleteProject(project.id);
                          }
                        }}
                        title="Delete project"
                        className="p-1 rounded-lg bg-slate-950/80 hover:bg-rose-950/80 border border-slate-700 hover:border-rose-500/50 text-slate-400 hover:text-rose-400 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Role Overlay Tag */}
                    <div className="absolute bottom-2 left-3 right-3">
                      <div className="px-2.5 py-1 rounded-md bg-slate-950/90 border border-slate-800 text-[11px] font-mono text-emerald-400 truncate">
                        {project.role}
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs font-mono text-sky-400/90 font-medium">
                      {project.tagline}
                    </p>
                    <p className="mt-3 text-xs sm:text-sm text-slate-400 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech stack badges */}
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-950 border border-slate-800 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-950 border border-slate-800 text-slate-500">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="p-6 pt-0 border-t border-slate-800/60 mt-4 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5 text-sky-400" />
                    <span>View Details</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-400 hover:text-white transition-colors"
                        title="GitHub Repository"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-sky-500/15 hover:bg-sky-500/25 border border-sky-500/40 text-sky-300 hover:text-white text-xs font-semibold transition-all"
                      >
                        <span>Demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
