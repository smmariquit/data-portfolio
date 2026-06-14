import { Injectable } from '@angular/core';
import { Project, Talk, Skill } from '../models/project.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: 'barlo',
      title: 'BARLO: Typhoon Impact Predictor',
      description: 'Predicts a storm\'s economic impact from typhoon forecast data using PyTorch and scikit-learn. Built for the Philippine Junior Data Science Competition to assist in pre-emptive disaster logistics placement.',
      tags: ['Python', 'PyTorch', 'scikit-learn', 'Streamlit', 'Pandas'],
      githubUrl: 'https://github.com/smmariquit/pjdsc-economic-impact',
      liveUrl: 'https://barlo-pjdsc.streamlit.app',
      featured: true,
      icon: '🌪️',
      category: 'ml'
    },
    {
      id: 'typhoonomics',
      title: 'Typhoonomics',
      description: 'Geospatial analysis platform for studying the economic impact of typhoons on Philippine provinces. Combines meteorological forecasts with economic and geographic data for actionable insights.',
      tags: ['Python', 'Pandas', 'Geospatial', 'Streamlit'],
      githubUrl: 'https://github.com/smmariquit/typhoonomics',
      featured: true,
      icon: '📊',
      category: 'analytics'
    },
    {
      id: 'vybechange',
      title: 'VybeChange',
      description: 'Agentic-AI donation layer for BPI\'s Vybe app. Routes round-up micro-donations to hyperlocal Philippine causes using autonomous LangChain + Gemini agents, with a Streamlit admin dashboard and FastAPI backend.',
      tags: ['Python', 'LangChain', 'Gemini AI', 'FastAPI', 'Streamlit'],
      githubUrl: 'https://github.com/smmariquit/VybeChange',
      featured: true,
      icon: '🤖',
      category: 'ai'
    },
    {
      id: 'dsg-reporting',
      title: 'DSG Reporting Dashboard',
      description: 'Interactive data collection and visualization app for the UPLB Data Science Guild — featuring interactive province maps, word clouds, histograms, and a PWA-ready frontend.',
      tags: ['React', 'D3.js', 'Express', 'Firebase'],
      githubUrl: 'https://github.com/smmariquit/dsg-reporting',
      icon: '🗺️',
      category: 'data-viz'
    },
    {
      id: 'diet-problem-solver',
      title: 'Diet Problem Solver',
      description: 'R Shiny dashboard that solves the classic diet optimization problem using the Simplex Method. Finds the cheapest combination of foods meeting nutritional requirements through linear programming.',
      tags: ['R', 'R Shiny', 'Linear Programming', 'Optimization'],
      githubUrl: 'https://github.com/smmariquit/diet-problem-solver',
      icon: '🧮',
      category: 'analytics'
    },
    {
      id: 'graph-centrality',
      title: 'Graph Centrality Explorations',
      description: 'Jupyter notebook explorations of graph centrality measures — degree, betweenness, closeness, eigenvector — applied to complex network analysis.',
      tags: ['Python', 'Jupyter', 'NetworkX', 'Graph Theory'],
      githubUrl: 'https://github.com/smmariquit/graph-centrality',
      icon: '🕸️',
      category: 'analytics'
    }
  ];

  private talks: Talk[] = [
    {
      year: 2025,
      type: 'Talk',
      title: 'AI Use Cases That Actually Matter',
      venue: 'Data Engineering Pilipinas',
      description: 'Practical AI applications with real-world impact across industries'
    },
    {
      year: 2025,
      type: 'Workshop',
      title: 'Machine Learning with Python',
      venue: 'JPCS QCU — Logic Unlocked',
      description: 'Hands-on ML workshop using Python, Pandas, and scikit-learn with the Iris dataset'
    },
    {
      year: 2025,
      type: 'Talk',
      title: 'Winning by Talking',
      venue: 'NextStep Hacks 2025',
      description: 'Hackathon pitching strategies and presentation techniques'
    },
    {
      year: 2025,
      type: 'Talk',
      title: 'Agile Edge: Swift Project Workflows',
      venue: 'DLSU ECES',
      description: 'Agile methodologies and rapid project management for tech teams'
    },
    {
      year: 2024,
      type: 'Workshop',
      title: 'What is Data Science?',
      venue: 'UPLB DSG × UPRHS CodeIT',
      description: 'Introductory data science fundamentals for high school students'
    },
    {
      year: 2024,
      type: 'Workshop',
      title: 'Storytelling with Data',
      venue: 'UPLB DSG × UPRHS CodeIT',
      description: 'Data visualization and narrative communication techniques'
    },
    {
      year: 2024,
      type: 'Workshop',
      title: 'Data Storytelling with Canva',
      venue: 'UPLB Data Science Guild',
      description: 'Creating compelling data visualizations using accessible design tools'
    }
  ];

  private skills: Skill[] = [
    { name: 'Python', category: 'language' },
    { name: 'R', category: 'language' },
    { name: 'SQL', category: 'language' },
    { name: 'TypeScript', category: 'language' },
    { name: 'JavaScript', category: 'language' },
    { name: 'PyTorch', category: 'ml' },
    { name: 'scikit-learn', category: 'ml' },
    { name: 'LangChain', category: 'ml' },
    { name: 'Gemini AI', category: 'ml' },
    { name: 'scikit-image', category: 'ml' },
    { name: 'Pandas', category: 'data' },
    { name: 'NumPy', category: 'data' },
    { name: 'Streamlit', category: 'data' },
    { name: 'Jupyter', category: 'data' },
    { name: 'NetworkX', category: 'data' },
    { name: 'D3.js', category: 'data' },
    { name: 'Manim', category: 'data' },
    { name: 'R Shiny', category: 'data' },
    { name: 'FastAPI', category: 'infra' },
    { name: 'Firebase', category: 'infra' },
    { name: 'Selenium', category: 'infra' },
    { name: 'Docker', category: 'devops' },
    { name: 'GitHub Actions', category: 'devops' },
    { name: 'Linux', category: 'devops' },
    { name: 'Vercel', category: 'devops' },
  ];

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  getFeaturedProjects(): Observable<Project[]> {
    return of(this.projects.filter(p => p.featured));
  }

  getTalks(): Observable<Talk[]> {
    return of(this.talks);
  }

  getSkills(): Observable<Skill[]> {
    return of(this.skills);
  }

  getSkillsByCategory(category: string): Observable<Skill[]> {
    return of(this.skills.filter(s => s.category === category));
  }
}
