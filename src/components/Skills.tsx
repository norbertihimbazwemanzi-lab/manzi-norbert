import React, { useState } from 'react';
import {
  Code2,
  FileCode,
  Palette,
  Binary,
  FileCode2,
  Atom,
  Flame,
  Wind,
  Database,
  Cloud,
  GitBranch,
  Github,
  Sparkles,
  Layout,
  Smartphone,
  Image as ImageIcon,
  Search,
  Filter
} from 'lucide-react';
import { SKILLS, Skill, IMAGES } from '../data/portfolioData';

type CategoryType = 'All' | 'Frontend' | 'Backend & Cloud' | 'Tooling & Workflow' | 'Design & Practices';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: CategoryType[] = [
    'All',
    'Frontend',
    'Backend & Cloud',
    'Tooling & Workflow',
    'Design & Practices'
  ];

  const getSkillIcon = (iconName: string, color: string) => {
    const props = { className: 'w-5 h-5', style: { color } };
    switch (iconName) {
      case 'FileCode':
        return <FileCode {...props} />;
      case 'Palette':
        return <Palette {...props} />;
      case 'Binary':
        return <Binary {...props} />;
      case 'FileCode2':
        return <FileCode2 {...props} />;
      case 'Atom':
        return <Atom {...props} />;
      case 'Flame':
        return <Flame {...props} />;
      case 'Wind':
        return <Wind {...props} />;
      case 'Database':
        return <Database {...props} />;
      case 'Cloud':
        return <Cloud {...props} />;
      case 'GitBranch':
        return <GitBranch {...props} />;
      case 'Github':
        return <Github {...props} />;
      case 'Sparkles':
      case 'Prompt':
        return <Sparkles {...props} />;
      case 'Layout':
      case 'Figma':
        return <Layout {...props} />;
      case 'Smartphone':
      case 'Responsive':
        return <Smartphone {...props} />;
      case 'Image':
      case 'Photoshop':
        return <ImageIcon {...props} />;
      default:
        return <Code2 {...props} />;
    }
  };

  const filteredSkills = SKILLS.filter((skill) => {
    const matchesCategory = activeCategory === 'All' || skill.category === activeCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="relative py-24 border-t border-slate-900 overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.skills}
          alt="Skills network background"
          className="w-full h-full object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050811] via-[#050811]/92 to-[#050811]" />
        <div className="absolute inset-0 bg-grid-cyber opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Modern Tech Stack
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            A comprehensive overview of the frameworks, cloud infrastructure, and developer tools I leverage to build robust software systems.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow-xs'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 focus:border-sky-500/50 focus:outline-none text-xs text-slate-200 placeholder:text-slate-500 backdrop-blur-md"
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="group relative p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-sky-500/40 backdrop-blur-md transition-all duration-200 hover:shadow-lg hover:shadow-sky-500/10 flex flex-col justify-between"
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform"
                      style={{ borderColor: `${skill.color}30` }}
                    >
                      {getSkillIcon(skill.iconName, skill.color)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                        {skill.name}
                      </h4>
                      <span className="text-[10px] font-mono text-slate-400">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-mono font-bold text-sky-400 px-2 py-0.5 rounded-md bg-sky-950/60 border border-sky-500/30">
                    {skill.percentage}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden mb-3 border border-slate-800/80">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${skill.percentage}%`,
                      backgroundColor: skill.color
                    }}
                  />
                </div>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 bg-slate-900/30 rounded-2xl border border-slate-800">
            <Filter className="w-8 h-8 text-slate-500 mx-auto mb-2" />
            <p className="text-sm text-slate-400 font-medium">No skills found matching &quot;{searchQuery}&quot;</p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-sky-400 hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Competencies Footer Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 flex flex-wrap items-center justify-around gap-6 text-center">
          <div>
            <div className="text-2xl font-bold font-mono text-sky-400">15+</div>
            <div className="text-xs text-slate-400">Mastered Techs</div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-slate-800" />
          <div>
            <div className="text-2xl font-bold font-mono text-emerald-400">100%</div>
            <div className="text-xs text-slate-400">TypeScript / Clean Architecture</div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-slate-800" />
          <div>
            <div className="text-2xl font-bold font-mono text-indigo-400">Real-time</div>
            <div className="text-xs text-slate-400">Firestore & WebSockets</div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-slate-800" />
          <div>
            <div className="text-2xl font-bold font-mono text-amber-400">Full-Stack</div>
            <div className="text-xs text-slate-400">End-to-End Delivery</div>
          </div>
        </div>
      </div>
    </section>
  );
};
