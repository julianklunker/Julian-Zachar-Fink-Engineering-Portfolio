
import React, { useState, useRef } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { Upload, Camera, Sparkles, Code, Palette, Layout, Loader2, Info, BookOpen, Download } from 'lucide-react';

const DesignAssistant: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setFeedback(null);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeDesign = async () => {
    if (!image) return;

    setLoading(true);
    setError(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const base64Data = image.split(',')[1];
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: {
          parts: [
            {
              inlineData: {
                mimeType: 'image/png',
                data: base64Data,
              },
            },
            {
              text: "You are a world-class senior frontend engineer and UI/UX designer. Analyze this design image (likely from a tool called 'Stich' or similar). Provide detailed feedback on how to implement this in a React + Tailwind portfolio. Return the response in a structured JSON format with: 'colors' (array of hex codes found), 'typography' (suggested Google Fonts), 'layoutSuggestions' (how to structure the HTML/React components), and 'tailwindClasses' (useful Tailwind utility classes to replicate this look).",
            },
          ],
        },
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              colors: { type: Type.ARRAY, items: { type: Type.STRING } },
              typography: { type: Type.STRING },
              layoutSuggestions: { type: Type.STRING },
              tailwindClasses: { type: Type.STRING }
            },
            required: ["colors", "typography", "layoutSuggestions", "tailwindClasses"]
          }
        }
      });

      const result = JSON.parse(response.text);
      setFeedback(result);
    } catch (err: any) {
      console.error(err);
      setError("Failed to analyze design. Ensure your image is clear and you have an active internet connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h2 className="text-4xl font-bold text-white tracking-tight">Design <span className="text-cyan-500">Lab</span></h2>
        <p className="text-slate-400">
          Translate your visual concepts from tools like <span className="text-cyan-400 font-bold">Stich</span> into production-ready React code using Gemini Vision.
        </p>
      </div>

      {/* Integration Guide Section */}
      <section className="bg-cyan-500/5 border border-cyan-500/10 rounded-3xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <BookOpen className="text-cyan-500" />
          <h3 className="text-xl font-bold text-white">Stich Integration Guide</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center text-sm font-bold text-white">1</div>
            <h4 className="text-white font-semibold">Export Assets</h4>
            <p className="text-slate-400 text-sm">Export your Stitch design as a high-res PNG or take a screenshot of the specific component you want to build.</p>
          </div>
          <div className="space-y-3">
            <div className="w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center text-sm font-bold text-white">2</div>
            <h4 className="text-white font-semibold">Extract Tokens</h4>
            <p className="text-slate-400 text-sm">Upload the image below. Our AI identifies color hex codes, spacing ratios, and typography families from the visual data.</p>
          </div>
          <div className="space-y-3">
            <div className="w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center text-sm font-bold text-white">3</div>
            <h4 className="text-white font-semibold">Apply Tailwind</h4>
            <p className="text-slate-400 text-sm">Map the suggested Tailwind classes to your React components. Use <code className="text-cyan-500 text-xs">flex</code>, <code className="text-cyan-500 text-xs">grid</code>, and custom colors in <code className="text-cyan-500 text-xs">tailwind.config.js</code>.</p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Upload Column */}
        <div className="space-y-6">
          <div 
            onClick={() => fileInputRef.current?.click()}
            className={`aspect-video w-full rounded-2xl border-2 border-dashed transition-all cursor-pointer flex flex-col items-center justify-center p-8 text-center ${
              image ? 'border-cyan-500/50 bg-cyan-500/5' : 'border-slate-800 bg-slate-900/50 hover:border-slate-700 hover:bg-slate-900'
            }`}
          >
            {image ? (
              <img src={image} alt="Uploaded Design" className="max-h-full rounded-lg shadow-xl" />
            ) : (
              <div className="space-y-4">
                <div className="p-4 bg-slate-800 rounded-full w-fit mx-auto text-slate-400 group-hover:text-cyan-400 transition-colors">
                  <Upload size={32} />
                </div>
                <div>
                  <p className="text-white font-bold">Upload your Stich screenshot</p>
                  <p className="text-sm text-slate-500">PNG, JPG, or WEBP supported</p>
                </div>
              </div>
            )}
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              className="hidden" 
              accept="image/*"
            />
          </div>

          <div className="flex gap-4">
            <button
              onClick={analyzeDesign}
              disabled={!image || loading}
              className="flex-grow bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-cyan-900/20 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Decoding Design...
                </>
              ) : (
                <>
                  <Sparkles size={20} />
                  Analyze Components
                </>
              )}
            </button>
            {image && !loading && (
              <button
                onClick={() => {setImage(null); setFeedback(null);}}
                className="px-6 bg-slate-800 hover:bg-slate-700 text-white rounded-xl border border-slate-700 transition-all"
              >
                Clear
              </button>
            )}
          </div>

          {error && (
             <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm flex items-center gap-2">
                <Info size={16} />
                {error}
             </div>
          )}
        </div>

        {/* Feedback Column */}
        <div className="space-y-6">
          {!feedback && !loading && (
            <div className="h-full flex flex-col items-center justify-center text-center p-12 bg-slate-900/30 border border-slate-800 rounded-2xl border-dashed">
              <Layout size={48} className="text-slate-700 mb-4" />
              <p className="text-slate-500">Analysis results will appear here.<br/>Upload your design to get implementation advice.</p>
            </div>
          )}

          {loading && (
            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-32 bg-slate-900/50 animate-pulse rounded-2xl border border-slate-800" />
              ))}
            </div>
          )}

          {feedback && (
            <div className="space-y-6 animate-in slide-in-from-right duration-500">
              {/* Colors */}
              <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <Palette className="text-cyan-500" size={20} />
                  <h3 className="text-lg font-bold text-white">Extracted Palette</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {feedback.colors.map((color: string) => (
                    <div key={color} className="flex flex-col items-center gap-2">
                      <div 
                        className="w-12 h-12 rounded-lg border border-slate-700 shadow-lg" 
                        style={{ backgroundColor: color }}
                      />
                      <span className="text-[10px] mono text-slate-400 uppercase">{color}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Suggestions */}
              <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <Layout className="text-purple-500" size={20} />
                  <h3 className="text-lg font-bold text-white">Layout & Typography</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-1">Fonts</span>
                    <p className="text-slate-300">{feedback.typography}</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-1">Structure</span>
                    <p className="text-slate-300 text-sm leading-relaxed">{feedback.layoutSuggestions}</p>
                  </div>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <Code className="text-emerald-500" size={20} />
                  <h3 className="text-lg font-bold text-white">Tailwind Shortcuts</h3>
                </div>
                <div className="bg-slate-900 p-4 rounded-lg overflow-x-auto relative group">
                   <code className="text-cyan-400 text-sm mono whitespace-pre-wrap">
                      {feedback.tailwindClasses}
                   </code>
                </div>
                <p className="mt-4 text-xs text-slate-500 italic">
                  Tip: Copy these utility classes to match the visual hierarchy of your Stitch design.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DesignAssistant;
