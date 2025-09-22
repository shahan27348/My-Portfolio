
import { Experience, Project, Skill, SkillCategory } from './types';

export const EXPERIENCES: Experience[] = [
  {
    role: 'Junior Full Stack Developer',
    company: 'Ichonic Inc.',
    duration: 'Sept 2023 - Present',
    description: [
      'Led the development of a new design system using React, TypeScript, and Storybook, improving developer productivity by 30%.',
      'Architected and implemented a scalable micro-frontend architecture for the main e-commerce platform.',
      'Mentored junior developers and conducted code reviews to maintain high code quality standards.',
      'Optimized application performance, reducing load times by 40% through code splitting and lazy loading.',
    ],
  },
  // {
  //   role: 'Frontend Developer',
  //   company: 'Tech Solutions LLC',
  //   duration: 'Jun 2018 - Dec 2020',
  //   description: [
  //     'Developed and maintained responsive user interfaces for client websites using React and Redux.',
  //     'Collaborated with UX/UI designers to translate wireframes into high-quality, functional code.',
  //     'Integrated RESTful APIs to fetch and display dynamic content.',
  //     'Wrote unit and integration tests using Jest and React Testing Library to ensure application stability.',
  //   ],
  // },
  // {
  //   role: 'Junior Web Developer',
  //   company: 'Creative Agency',
  //   duration: 'Jul 2016 - May 2018',
  //   description: [
  //       'Built static and dynamic websites for small to medium-sized businesses using HTML, CSS, and JavaScript.',
  //       'Assisted in the development of a custom WordPress theme for a major client.',
  //       'Learned and applied modern web development practices and version control with Git.'
  //   ]
  // }
];

export const SKILLS: Skill[] = [
  { name: 'React', category: SkillCategory.Frontend },
  { name: 'TypeScript', category: SkillCategory.Frontend },
  { name: 'Next.js', category: SkillCategory.Frontend },
  { name: 'Tailwind CSS', category: SkillCategory.Frontend },
  { name: 'Metrial Ui', category: SkillCategory.Frontend },
  { name: 'Shadcn Ui', category: SkillCategory.Frontend },
  { name: 'Framer Motion', category: SkillCategory.Frontend },
  { name: 'Redux', category: SkillCategory.Frontend },
  { name: 'GraphQL', category: SkillCategory.Frontend },
  { name: 'Node.js', category: SkillCategory.Backend },
  { name: 'Express', category: SkillCategory.Backend },
  { name: 'Python', category: SkillCategory.Backend },
  { name: 'PostgreSQL', category: SkillCategory.Databases },
  { name: 'MongoDB', category: SkillCategory.Databases },
  { name: 'NeonDB', category: SkillCategory.Databases },
  { name: 'SupabaseDB', category: SkillCategory.Databases },
  { name: 'Firebase', category: SkillCategory.Databases },
  { name: 'Docker', category: SkillCategory.Tools },
  { name: 'Git & GitHub', category: SkillCategory.Tools },
  { name: 'Wix App Development', category: SkillCategory.Tools },
  { name: 'Vercel', category: SkillCategory.Tools },
  { name: 'Figma', category: SkillCategory.Tools },
  { name: 'N8N', category: SkillCategory.Ai },
  { name: 'Zapier', category: SkillCategory.Ai },
  { name: 'Make', category: SkillCategory.Ai },
  { name: 'Ai Integrations', category: SkillCategory.Ai },
];

export const PROJECTS: Project[] = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce site with product browsing, a shopping cart, and a checkout process, built with Next.js and Stripe for payments.',
    tags: ['Next.js', 'React', 'TypeScript', 'Stripe', 'Tailwind CSS'],
    imageUrl: 'https://picsum.photos/seed/project1/400/300',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Project Management Tool',
    description: 'A Kanban-style project management application with drag-and-drop functionality, real-time collaboration features using Firebase.',
    tags: ['React', 'Firebase', 'Redux Toolkit', 'Styled Components'],
    imageUrl: 'https://picsum.photos/seed/project2/400/300',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'A dashboard for visualizing complex datasets with interactive charts and graphs, built with React and D3.js.',
    tags: ['React', 'D3.js', 'TypeScript', 'GraphQL'],
    imageUrl: 'https://picsum.photos/seed/project3/400/300',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio site (the one you are looking at!) to showcase my work and skills. Built with React and Tailwind CSS.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    imageUrl: 'https://picsum.photos/seed/project4/400/300',
    githubUrl: '#',
  },
];

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];
