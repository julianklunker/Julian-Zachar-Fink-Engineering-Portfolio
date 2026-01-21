
import { Project, Skill } from './types';

export const SKILLS_DATA: Skill[] = [
  { name: 'Engineering Mathematics', proficiency: 92, assessment: 'Expert: Statics, dynamics, materials, calculus, and Linear Algebra through AAU courses.', category: 'Analytical' },
  { name: 'Python (CS50)', proficiency: 88, assessment: 'Advanced: Completed Harvard CS50P with a focus on structured problem solving and clean code.', category: 'Languages' },
  { name: 'SolidWorks', proficiency: 85, assessment: 'Advanced: Used extensively for 2nd and 3rd semester project modeling and part outsourcing.', category: 'Software Tools' },
  { name: 'Project Planning', proficiency: 90, assessment: 'Expert: Skilled in executing optimal project workflows using the Aalborg PBL model.', category: 'Software Tools' },
  { name: 'PBL Problem Solving', proficiency: 95, assessment: 'Expert: Real-world problem solving through the Problem Based Learning (PBL) framework at AAU.', category: 'Analytical' },
  { name: 'Materials Engineering', proficiency: 82, assessment: 'Advanced: Selection and analysis of materials for structural mechanical projects.', category: 'Hardware' },
  { name: 'Mechanical Design', proficiency: 87, assessment: 'Advanced: Designing complex systems like trash compactors and carbon fiber machines.', category: 'Hardware' },
  { name: 'Teamwork & Leadership', proficiency: 95, assessment: 'Expert: Prioritizing strong collaboration in high-stakes engineering group environments.', category: 'Analytical' },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: '1',
    title: '2. Semester Project: Trash Compactor',
    shortDescription: 'Analysis, design, and calculation of a residential trash compactor prototype.',
    fullDescription: 'During the 2nd semester at AAU, my group analyzed, designed, calculated, and outsourced parts to create a functional at-home trash compactor. We focused on mechanical efficiency and user safety in a domestic environment.',
    contributions: 'Handled mechanical calculations for compaction force and managed the outsourcing process for custom manufactured components.',
    challenges: 'Designing a compact drive system that could deliver sufficient compaction force while remaining safe for household use.',
    impact: 'Successfully prototyped a unit demonstrating a significant reduction in waste volume for residential use cases.',
    category: 'Mechanical',
    technologies: ['SolidWorks', 'Mechanical Calculation', 'Material Selection', 'Outsourcing'],
    imageUrl: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    title: '3. Semester Project: Towpreg Machine',
    shortDescription: 'Designing a specialized machine for carbon fiber towpreg production.',
    fullDescription: 'My current ongoing project at AAU involves the design and engineering of a carbon fiber towpreg machine. This requires precise control over tension and resin impregnation.',
    contributions: 'Leading the mechanical design of the impregnation bath and the fiber guiding system.',
    challenges: 'Ensuring uniform resin distribution across carbon fiber strands without compromising the structural integrity of the individual fibers.',
    impact: 'Ongoing research aiming to streamline the production of high-performance composite materials at a lower cost.',
    category: 'Mechanical',
    technologies: ['SolidWorks', 'Composite Materials', 'Machine Design', 'Aalborg PBL'],
    imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    title: 'CS50 Python Final Project',
    shortDescription: 'A comprehensive software application developed for Harvard’s CS50P course.',
    fullDescription: 'The culmination of Harvard’s CS50 Introduction to Programming with Python. This project demonstrates high-level proficiency in Python logic, data structures, and functional programming.',
    contributions: 'Sole developer. Responsible for the entire software architecture, logic implementation, and unit testing suite.',
    challenges: 'Implementing robust error handling and meeting strict PEP-8 coding standards for a complex logical application.',
    impact: 'Received distinction for the final project, confirming deep technical knowledge in the Python ecosystem.',
    category: 'Software',
    technologies: ['Python', 'Unit Testing', 'SQL', 'Harvard CS50'],
    imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=800',
    links: { github: 'https://github.com/me50/julianklunker/tree/cs50/problems/2022/python/project' }
  }
];
