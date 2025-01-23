export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  longDescription?: string;
  features?: string[];
  technologies?: string[];
  demoLink?: string;
  githubLink?: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  points: string[];
}

export interface Education {
  degree: string;
  field: string;
  school: string;
  period: string;
  location: string;
  points: string[];
}

export interface Skill {
  title: string;
  icon: any;
  skills: string[];
} 