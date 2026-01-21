
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProjectList from './components/ProjectList';
import Contact from './components/Contact';
import DesignAssistant from './components/DesignAssistant';
import { View } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');

  // Handle Hash Routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as View;
      if (['home', 'projects', 'contact', 'design-assistant'].includes(hash)) {
        setCurrentView(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial load

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <Home onViewChange={setCurrentView} />;
      case 'projects':
        return <ProjectList />;
      case 'contact':
        return <Contact />;
      case 'design-assistant':
        return <DesignAssistant />;
      default:
        return <Home onViewChange={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-cyan-500/30">
      <Navbar currentView={currentView} />
      
      <main className="flex-grow pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {renderView()}
        </div>
      </main>

      <footer className="bg-slate-900/50 border-t border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} Engineer Portfolio. Built with React & Gemini.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
