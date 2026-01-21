
import React, { useState } from 'react';
import { PROJECTS_DATA } from '../constants';
import { Project } from '../types';
import { ExternalLink, Github, ChevronDown, ChevronUp, Layers, Tag, ShieldCheck, AlertTriangle, BarChart3 } from 'lucide-react';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`bg-slate-900/50 border transition-all duration-300 rounded-xl overflow-hidden group ${
        isExpanded ? 'border-cyan-500 ring-1 ring-cyan-500/20' : 'border-slate-800'
      }`}
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 h-48 md:h-auto relative overflow-hidden">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <span className="px-2 py-1 bg-slate-950/80 backdrop-blur-md text-xs font-bold text-cyan-400 rounded border border-cyan-500/30 uppercase tracking-widest">
              {project.category}
            </span>
          </div>
        </div>
        
        <div className="p-6 md:w-2/3 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-cyan-400 transition-colors"
              >
                {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </button>
            </div>
            <p className="text-slate-400 mb-4">{project.shortDescription}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, 4).map(tech => (
                <span key={tech} className="flex items-center gap-1 text-[10px] mono px-2 py-0.5 bg-slate-800 text-slate-300 rounded-full">
                  <Tag size={10} /> {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="text-[10px] mono px-2 py-0.5 text-slate-500">+{project.technologies.length - 4} more</span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-4">
            {project.links?.github && (
              <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
            )}
            {project.links?.demo && (
              <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <ExternalLink size={20} />
              </a>
            )}
            {project.links?.paper && (
              <a href={project.links.paper} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors text-sm">
                <Layers size={18} /> Research
              </a>
            )}
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="p-6 border-t border-slate-800 bg-slate-950/50 animate-in slide-in-from-top duration-300 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-widest">
                <ShieldCheck size={16} /> My Contributions
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.contributions}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-amber-500 font-bold text-xs uppercase tracking-widest">
                <AlertTriangle size={16} /> Key Challenges
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.challenges}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-emerald-500 font-bold text-xs uppercase tracking-widest">
                <BarChart3 size={16} /> Final Impact
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.impact}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Full Description</h4>
            <div className="prose prose-invert max-w-none text-slate-400 leading-relaxed text-sm">
              {project.fullDescription}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map(tech => (
              <span key={tech} className="px-3 py-1 bg-slate-900 border border-slate-700 text-slate-400 text-xs rounded-lg mono">
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const ProjectList: React.FC = () => {
  const [filter, setFilter] = useState<Project['category'] | 'All'>('All');

  const filteredProjects = filter === 'All' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === filter);

  const categories: (Project['category'] | 'All')[] = ['All', 'Software', 'Mechanical', 'Electronics', 'Research'];

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold text-white tracking-tight">Project Portfolio</h2>
          <p className="text-slate-400">A collection of engineering initiatives spanning 4 years of study.</p>
        </div>
        
        <div className="flex flex-wrap gap-2 bg-slate-900/50 p-1.5 rounded-xl border border-slate-800">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                filter === cat 
                  ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-900/40' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
