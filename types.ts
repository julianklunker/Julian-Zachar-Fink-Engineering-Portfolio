export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: 'Mechanical' | 'Software' | 'Electronics' | 'Research';
  technologies: string[];
  imageUrl: string;
  contributions: string;
  challenges: string;
  impact: string;
  pdfUrl?: string; // URL or path to the project PDF file
  links?: {
    github?: string;
    demo?: string;
    paper?: string;
  };
}

export type View = 'home' | 'projects' | 'contact';

export interface Skill {
  name: string;
  proficiency: number; // 0 to 100
  assessment: string;
  category: 'Languages' | 'Hardware' | 'Software Tools' | 'Analytical';
}

export interface DesignFeedback {
  colors: string[];
  typography: string;
  layoutSuggestions: string;
  tailwindClasses: string;
}
