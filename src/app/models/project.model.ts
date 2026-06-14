export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  icon?: string;
  category?: 'ml' | 'data-viz' | 'ai' | 'analytics';
}

export interface Talk {
  year: number;
  type: 'Workshop' | 'Talk';
  title: string;
  venue: string;
  description: string;
}

export interface Skill {
  name: string;
  icon?: string;
  category: 'language' | 'ml' | 'data' | 'infra' | 'devops';
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  org: string;
}
