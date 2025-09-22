
export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export interface Skill {
  name: string;
  category: SkillCategory;
}

export enum SkillCategory {
  Frontend = 'Frontend',
  Backend = 'Backend',
  Databases = 'Databases',
  Tools = 'Tools & Platforms',
  Ai = 'Ai Skills'
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}
