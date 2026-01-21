
import React from 'react';
import { View } from '../types';
import { Cpu, Briefcase, Mail, Home, Zap } from 'lucide-react';

interface NavbarProps {
  currentView: View;
}

const Navbar: React.FC<NavbarProps> = ({ currentView }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: <Home size={16} /> },
    { id: 'projects', label: 'Projects', icon: <Briefcase size={16} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={16} /> },
    { id: 'design-assistant', label: 'Design Lab', icon: <Zap size={16} /> },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/70 backdrop-blur-lg border-b border-slate-900/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700">
              <Cpu className="text-blue-400" size={18} />
            </div>
            <span className="font-semibold text-lg tracking-tight hidden sm:block text-slate-100">JULIAN.<span className="text-blue-500">ENGINEERING</span></span>
          </div>

          <div className="flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  currentView === item.id
                    ? 'bg-slate-900 text-blue-400 border border-slate-800 shadow-sm'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-slate-900/50'
                }`}
              >
                {item.icon}
                <span className="hidden md:inline">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
