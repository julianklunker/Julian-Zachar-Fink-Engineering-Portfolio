
import React from 'react';
import { View } from '../types';
import { SKILLS_DATA } from '../constants';
import { ArrowRight, Code, Box, Radio, FlaskConical, Target, CheckCircle2, ChevronRight } from 'lucide-react';

interface HomeProps {
  onViewChange: (view: View) => void;
}

const Home: React.FC<HomeProps> = ({ onViewChange }) => {
  const categories = Array.from(new Set(SKILLS_DATA.map(s => s.category)));

  return (
    <div className="space-y-32 animate-in fade-in duration-1000">
      {/* Hero Section */}
      <section className="relative py-8">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-10" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-900 border border-slate-800 rounded-full text-slate-400 text-[10px] uppercase tracking-[0.2em] font-bold mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Mechanical Engineering Student
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white leading-[1.1]">
              Julian <span className="bg-gradient-to-r from-blue-400 via-blue-200 to-slate-400 bg-clip-text text-transparent">Zachar-Fink</span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-lg leading-relaxed font-light">
              Mechanical Engineering student at Aalborg University. Dedicated to strong teamwork and real-life problem solving through the Problem Based Learning model.
            </p>
            
            <div className="flex flex-wrap gap-5 pt-4">
              <a
                href="#projects"
                className="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all flex items-center gap-2 shadow-xl shadow-blue-900/20"
              >
                Project Repository
                <ChevronRight size={18} />
              </a>
              <a
                href="#contact"
                className="px-10 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold border border-slate-800 transition-all"
              >
                Let's Talk
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full aspect-square max-w-md mx-auto relative group">
              <div className="absolute inset-0 bg-blue-500/10 rounded-[2.5rem] -rotate-3 transition-transform duration-700 group-hover:rotate-0" />
              <div className="absolute inset-0 border border-slate-800 rounded-[2.5rem] z-10" />
              <img
                src="/CV billede.jpg"
                alt="Julian Zachar-Fink"
                className="relative rounded-[2.5rem] object-cover h-full w-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Arsenal */}
      <section className="space-y-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Skills & Expertise</h2>
          <p className="text-slate-400 text-lg">Core competencies that drive technical results and innovation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {categories.map(category => (
            <div key={category} className="space-y-8 bg-slate-900/20 p-10 rounded-3xl border border-slate-900/50 hover:border-slate-800 transition-colors">
              <h3 className="text-xs font-black text-slate-500 uppercase tracking-[0.25em] flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                {category}
              </h3>
              <div className="space-y-10">
                {SKILLS_DATA.filter(s => s.category === category).map(skill => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-end mb-3">
                      <span className="text-slate-200 font-semibold text-sm flex items-center gap-2 group-hover:text-blue-400 transition-colors">
                        {skill.name}
                        {skill.proficiency > 90 && <CheckCircle2 size={14} className="text-blue-500/50" />}
                      </span>
                    </div>
                    {/* Proficiency bars and percentage text removed from all categories */}
                    <p className="mt-3 text-[13px] text-slate-500 leading-relaxed font-medium border-l-2 border-slate-800 pl-4 py-1">
                      {skill.assessment}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-slate-900/20 border border-slate-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden group">
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] group-hover:bg-blue-600/10 transition-colors duration-700" />
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full" />
          <p className="text-2xl md:text-3xl text-slate-200 leading-[1.6] font-light italic">
            "My approach combines technical expertise with creative problem-solving, ensuring that every project I work on delivers exceptional results."
          </p>
          <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-1">
              <div className="text-slate-100 font-bold text-2xl tracking-tight">3.9 GPA</div>
              <div className="text-slate-500 text-[10px] uppercase tracking-widest font-bold mono">Academic Excellence</div>
            </div>
            <div className="space-y-1">
              <div className="text-slate-100 font-bold text-2xl tracking-tight">AAU PBL</div>
              <div className="text-slate-500 text-[10px] uppercase tracking-widest font-bold mono">Model Expertise</div>
            </div>
            <div className="space-y-1">
              <div className="text-slate-100 font-bold text-2xl tracking-tight">Harvard CS50</div>
              <div className="text-slate-500 text-[10px] uppercase tracking-widest font-bold mono">Python Certified</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
