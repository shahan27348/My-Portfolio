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
  Frontend = "Frontend",
  StyleAndDesign = "Style & Design",
  Backend = "Backend",
  Databases = "Databases",
  Tools = "Tools & Platforms",
  Ai = "Ai Skills",
  Animation = "Animation",
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface Message {
  role: "user" | "model";
  text: string;
}

export interface Achievement {
  title: string;
  description: string;
  date: string;
  category: string;
  icon?: string;
}

export interface Course {
  title: string;
  platform: string;
  instructor?: string;
  duration: string;
  completionDate?: string;
  certificateUrl?: string;
  skills: string[];
  description: string;
}

export interface MicroSaaS {
  name: string;
  tagline: string;
  description: string;
  technologies: string[];
  features: string[];
  status: "Live" | "In Development" | "Planning" | "Archived";
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  users?: string;
  revenue?: string;
}
