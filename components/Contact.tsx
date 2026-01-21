
import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, MapPin, Terminal, Phone, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="animate-in fade-in duration-1000 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div className="space-y-16">
          <div className="space-y-6">
            <h2 className="text-5xl font-extrabold text-white tracking-tighter">Let's <span className="text-blue-500">Connect</span></h2>
            <p className="text-lg text-slate-400 font-light leading-relaxed">
              Ready to collaborate or have questions? Reach out directly via the channels below or send a transmission through the terminal.
            </p>
          </div>

          <div className="space-y-10">
            <div className="flex items-start gap-6 group">
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl text-slate-500 group-hover:text-blue-500 transition-colors">
                <Mail size={24} />
              </div>
              <div className="space-y-1">
                <h4 className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mono">Direct Email</h4>
                <p className="text-slate-100 font-semibold">Julianzf03@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl text-slate-500 group-hover:text-blue-500 transition-colors">
                <Phone size={24} />
              </div>
              <div className="space-y-1">
                <h4 className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mono">Mobile Terminal</h4>
                <p className="text-slate-100 font-semibold">+45 29 72 26 04</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl text-slate-500 group-hover:text-blue-500 transition-colors">
                <Linkedin size={24} />
              </div>
              <div className="space-y-1">
                <h4 className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mono">Network Profile</h4>
                <a 
                  href="https://www.linkedin.com/in/julian-zachar-fink-5574672b9/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-100 font-semibold hover:text-blue-400 transition-colors"
                >
                  linkedin.com/in/julian-zachar-fink
                </a>
              </div>
            </div>
          </div>

          <div className="p-8 bg-slate-950 border border-slate-800 rounded-3xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10">
               <Terminal size={64} className="text-slate-400" />
             </div>
             <p className="text-blue-500 font-mono text-xs mb-3 font-bold uppercase tracking-wider">System Diagnostic</p>
             <p className="text-slate-500 font-mono text-xs leading-[1.8]">
               $ julian --status<br/>
               <span className="text-slate-300">>> Academic: Aalborg University</span><br/>
               <span className="text-slate-300">>> Course: Mechanical Engineering</span><br/>
               <span className="text-slate-300">>> Teamwork: Prioritized</span>
             </p>
          </div>
        </div>

        <div className="bg-slate-900/20 border border-slate-900 p-10 rounded-[2.5rem] shadow-2xl">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20">
              <div className="w-24 h-24 bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center animate-bounce">
                <CheckCircle size={48} />
              </div>
              <h3 className="text-3xl font-bold text-white tracking-tight">Transmission Received</h3>
              <p className="text-slate-400 font-light">Response sequence initiated. Expected latency: 24-48 hours.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-8 text-blue-500 font-bold uppercase tracking-widest text-xs hover:text-blue-400 transition-colors"
              >
                New Transmission
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em] ml-1">Identity</label>
                  <input
                    required
                    type="text"
                    className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 text-slate-100 transition-all font-medium placeholder:text-slate-800"
                    placeholder="Full Name"
                    value={formState.name}
                    onChange={e => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em] ml-1">Digital Address</label>
                  <input
                    required
                    type="email"
                    className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 text-slate-100 transition-all font-medium placeholder:text-slate-800"
                    placeholder="Email"
                    value={formState.email}
                    onChange={e => setFormState({...formState, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em] ml-1">Objective</label>
                <input
                  required
                  type="text"
                  className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 text-slate-100 transition-all font-medium placeholder:text-slate-800"
                  placeholder="Inquiry / Project Request"
                  value={formState.subject}
                  onChange={e => setFormState({...formState, subject: e.target.value})}
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em] ml-1">Payload</label>
                <textarea
                  required
                  rows={4}
                  className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 text-slate-100 transition-all resize-none font-medium placeholder:text-slate-800"
                  placeholder="Technical details..."
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                ></textarea>
              </div>

              <button
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-5 rounded-2xl transition-all shadow-xl shadow-blue-900/20 disabled:opacity-50 flex items-center justify-center gap-3 uppercase tracking-widest text-xs"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Encrypting...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Submit Request
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
