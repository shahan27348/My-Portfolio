import {
  Experience,
  Project,
  Skill,
  SkillCategory,
  NavLink,
  Achievement,
  Course,
  MicroSaaS,
} from "@/types";

// Export SkillCategory for use in components
export { SkillCategory } from "@/types";

export const EXPERIENCES: Experience[] = [
  {
    role: "Junior Full Stack Developer",
    company: "Ichonic Inc.",
    duration: "Sept 2023 - Present",
    description: [
      "Led the development of a new design system using React, TypeScript, and Storybook, improving developer productivity by 30%.",
      "Architected and implemented a scalable micro-frontend architecture for the main e-commerce platform.",
      "Mentored junior developers and conducted code reviews to maintain high code quality standards.",
      "Optimized application performance, reducing load times by 40% through code splitting and lazy loading.",
    ],
  },
  // Add more experiences as needed
];

export const SKILLS: Skill[] = [
  { name: "HTML5", category: SkillCategory.Frontend },
  { name: "React", category: SkillCategory.Frontend },
  { name: "Typescript", category: SkillCategory.Frontend },
  { name: "NextJs", category: SkillCategory.Frontend },
  { name: "Redux", category: SkillCategory.Frontend },
  { name: "CSS3", category: SkillCategory.StyleAndDesign },
  { name: "Sass", category: SkillCategory.StyleAndDesign },
  { name: "Tailwind", category: SkillCategory.StyleAndDesign },
  { name: "MUI", category: SkillCategory.StyleAndDesign },
  { name: "Ant Design", category: SkillCategory.StyleAndDesign },
  { name: "Bootstrap", category: SkillCategory.StyleAndDesign },
  { name: "shadcn ui", category: SkillCategory.StyleAndDesign },
  { name: "Nodejs", category: SkillCategory.Backend },
  { name: "Express", category: SkillCategory.Backend },
  { name: "MongoDb", category: SkillCategory.Databases },
  { name: "NeonDb", category: SkillCategory.Databases },
  { name: "Postgres Sql", category: SkillCategory.Databases },
  { name: "SupaBase", category: SkillCategory.Databases },
  { name: "Vercel", category: SkillCategory.Tools },
  { name: "Figma", category: SkillCategory.Tools },
  { name: "Netlify", category: SkillCategory.Tools },
  { name: "Heroku", category: SkillCategory.Tools },
  { name: "Cursor", category: SkillCategory.Tools },
  { name: "VsCode", category: SkillCategory.Tools },
  { name: "Anti Gravity", category: SkillCategory.Tools },
  { name: "Git/Github", category: SkillCategory.Tools },
  { name: "Sublime Text", category: SkillCategory.Tools },
  { name: "Wix App Development", category: SkillCategory.Tools },
  { name: "N8N", category: SkillCategory.Ai },
  { name: "Zapier", category: SkillCategory.Ai },
  { name: "Make", category: SkillCategory.Ai },
  { name: "AI Integrations", category: SkillCategory.Ai },
  { name: "Framer Motion", category: SkillCategory.Animation },
  { name: "Three.js", category: SkillCategory.Animation },
  { name: "Web Gl", category: SkillCategory.Animation },
  { name: "Gsap", category: SkillCategory.Animation },
];

export const PROJECTS: Project[] = [
  {
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce site with product browsing, a shopping cart, and a checkout process, built with Next.js and Stripe for payments.",
    tags: ["Next.js", "React", "TypeScript", "Stripe", "Tailwind CSS"],
    imageUrl: "https://picsum.photos/seed/project1/400/300",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Project Management Tool",
    description:
      "A Kanban-style project management application with drag-and-drop functionality, real-time collaboration features using Firebase.",
    tags: ["React", "Firebase", "Redux Toolkit", "Styled Components"],
    imageUrl: "https://picsum.photos/seed/project2/400/300",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Data Visualization Dashboard",
    description:
      "A dashboard for visualizing complex datasets with interactive charts and graphs, built with React and D3.js.",
    tags: ["React", "D3.js", "TypeScript", "GraphQL"],
    imageUrl: "https://picsum.photos/seed/project3/400/300",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio site (the one you are looking at!) to showcase my work and skills. Built with React and Tailwind CSS.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    imageUrl: "https://picsum.photos/seed/project4/400/300",
    githubUrl: "#",
  },
];

export const NAV_LINKS: NavLink[] = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Courses", href: "#courses" },
  { name: "Micro SaaS", href: "#microsaas" },
  { name: "Contact", href: "#contact" },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "GitHub Arctic Code Vault Contributor",
    description:
      "Contributed code that was selected for preservation in the GitHub Arctic Code Vault, ensuring its availability for future generations.",
    date: "2024",
    category: "Open Source",
    icon: "🏆",
  },
  {
    title: "Hackathon Winner - Tech Innovation 2024",
    description:
      "First place winner in the national tech hackathon for developing an AI-powered productivity tool that helps teams collaborate more effectively.",
    date: "March 2024",
    category: "Competition",
    icon: "🥇",
  },
  {
    title: "Top Contributor on Stack Overflow",
    description:
      "Reached 5,000+ reputation points by helping developers solve complex programming challenges and sharing knowledge with the community.",
    date: "2024",
    category: "Community",
    icon: "⭐",
  },
  {
    title: "Published Technical Article",
    description:
      "Published a comprehensive guide on building scalable React applications that received 50,000+ views on Medium and Dev.to.",
    date: "January 2024",
    category: "Writing",
    icon: "📝",
  },
  {
    title: "Best Student Project Award",
    description:
      "Awarded for developing an innovative learning management system during final year university project presentation.",
    date: "June 2023",
    category: "Academic",
    icon: "🎓",
  },
  {
    title: "Open Source Contributor - 100+ PRs",
    description:
      "Made significant contributions to popular open-source projects including React, Next.js ecosystem libraries, and developer tools.",
    date: "2023-2024",
    category: "Open Source",
    icon: "💻",
  },
];

export const COURSES: Course[] = [
  {
    title: "Advanced React Patterns & Best Practices",
    platform: "Frontend Masters",
    instructor: "Kent C. Dodds",
    duration: "8 hours",
    completionDate: "October 2024",
    certificateUrl: "#",
    skills: ["React", "TypeScript", "Performance Optimization", "Testing"],
    description:
      "Deep dive into advanced React patterns including compound components, render props, custom hooks, and performance optimization techniques.",
  },
  {
    title: "Full Stack Open 2024",
    platform: "University of Helsinki",
    instructor: "University of Helsinki",
    duration: "14 weeks",
    completionDate: "September 2024",
    certificateUrl: "#",
    skills: ["React", "Node.js", "MongoDB", "GraphQL", "TypeScript"],
    description:
      "Comprehensive full-stack development course covering modern web development with React, Node.js, databases, and deployment.",
  },
  {
    title: "Next.js 14 & Server Components",
    platform: "Udemy",
    instructor: "Maximilian Schwarzmüller",
    duration: "24 hours",
    completionDate: "August 2024",
    certificateUrl: "#",
    skills: ["Next.js", "React Server Components", "App Router", "SEO"],
    description:
      "Master Next.js 14 with App Router, Server Components, Server Actions, and modern full-stack development practices.",
  },
  {
    title: "TypeScript: The Complete Developer's Guide",
    platform: "Udemy",
    instructor: "Stephen Grider",
    duration: "27 hours",
    completionDate: "July 2024",
    certificateUrl: "#",
    skills: ["TypeScript", "Advanced Types", "Decorators", "Generics"],
    description:
      "Comprehensive TypeScript course covering advanced types, generics, decorators, and integration with React and Node.js.",
  },
  {
    title: "AWS Certified Developer - Associate",
    platform: "AWS Training",
    instructor: "AWS",
    duration: "16 weeks",
    completionDate: "May 2024",
    certificateUrl: "#",
    skills: ["AWS", "Lambda", "DynamoDB", "S3", "CloudFormation"],
    description:
      "Official AWS certification program covering cloud development, serverless architectures, and AWS services.",
  },
  {
    title: "System Design for Interviews",
    platform: "Educative.io",
    instructor: "Design Gurus",
    duration: "40 hours",
    completionDate: "April 2024",
    skills: [
      "System Architecture",
      "Scalability",
      "Database Design",
      "Microservices",
    ],
    description:
      "Learn to design scalable systems including social networks, streaming services, and distributed systems.",
  },
];

export const MICRO_SAAS_PROJECTS: MicroSaaS[] = [
  {
    name: "AI Content Generator",
    tagline: "Generate high-quality content in seconds",
    description:
      "A micro SaaS tool that helps content creators, marketers, and businesses generate blog posts, social media content, and marketing copy using advanced AI models. Features include tone customization, SEO optimization, and multi-language support.",
    technologies: [
      "Next.js",
      "TypeScript",
      "OpenAI API",
      "Stripe",
      "Prisma",
      "PostgreSQL",
    ],
    features: [
      "AI-powered content generation",
      "Multiple content types (blogs, social media, emails)",
      "Tone and style customization",
      "SEO optimization suggestions",
      "Export to multiple formats",
      "Team collaboration features",
    ],
    status: "Live",
    liveUrl: "https://ai-content-gen.example.com",
    githubUrl: "#",
    imageUrl: "https://picsum.photos/seed/saas1/800/400",
    users: "1,200+",
    revenue: "$3,500 MRR",
  },
  {
    name: "Screenshot API Pro",
    tagline: "Programmatic website screenshots",
    description:
      "Developer-focused API service that captures high-quality screenshots of websites. Perfect for portfolio generators, monitoring tools, and documentation. Offers various customization options including viewport size, device emulation, and full-page captures.",
    technologies: ["Node.js", "Puppeteer", "Redis", "Docker", "Stripe"],
    features: [
      "RESTful API with simple integration",
      "Multiple output formats (PNG, JPEG, PDF)",
      "Custom viewport and device emulation",
      "Full-page or element-specific captures",
      "Webhook support for async operations",
      "99.9% uptime SLA",
    ],
    status: "Live",
    liveUrl: "https://screenshot-api.example.com",
    githubUrl: "#",
    imageUrl: "https://picsum.photos/seed/saas2/800/400",
    users: "850+",
    revenue: "$2,800 MRR",
  },
  {
    name: "Form Builder Studio",
    tagline: "Beautiful forms, no code required",
    description:
      "Drag-and-drop form builder for creating professional forms, surveys, and questionnaires. Includes advanced features like conditional logic, payment integration, and detailed analytics. Perfect for businesses, educators, and researchers.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "SendGrid"],
    features: [
      "Drag-and-drop form builder",
      "Conditional logic and branching",
      "Payment collection (Stripe integration)",
      "Custom themes and branding",
      "Email notifications and autoresponders",
      "Advanced analytics and reporting",
    ],
    status: "Live",
    liveUrl: "https://formbuilder.example.com",
    imageUrl: "https://picsum.photos/seed/saas3/800/400",
    users: "2,500+",
    revenue: "$5,200 MRR",
  },
  {
    name: "Social Media Scheduler",
    tagline: "Schedule posts across all platforms",
    description:
      "All-in-one social media management tool that helps businesses and creators schedule, publish, and analyze content across multiple platforms. Features include AI-powered caption suggestions, content calendar, and performance analytics.",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Bull Queue",
    ],
    features: [
      "Multi-platform scheduling (Twitter, LinkedIn, Facebook, Instagram)",
      "AI caption generation and hashtag suggestions",
      "Visual content calendar",
      "Performance analytics and insights",
      "Team collaboration and approval workflows",
      "Bulk upload and CSV import",
    ],
    status: "In Development",
    liveUrl: "https://socialsched.example.com",
    githubUrl: "#",
    imageUrl: "https://picsum.photos/seed/saas4/800/400",
    users: "Beta - 150+",
    revenue: "Pre-revenue",
  },
  {
    name: "Invoice Generator Plus",
    tagline: "Professional invoices in minutes",
    description:
      "Simple yet powerful invoicing tool for freelancers and small businesses. Create, send, and track professional invoices with payment integration. Includes expense tracking, client management, and financial reporting.",
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Stripe",
      "PDF Generation",
    ],
    features: [
      "Professional invoice templates",
      "Online payment collection",
      "Recurring invoices and subscriptions",
      "Expense tracking and categorization",
      "Client portal for easy access",
      "Tax calculation and reporting",
    ],
    status: "Live",
    liveUrl: "https://invoice-plus.example.com",
    imageUrl: "https://picsum.photos/seed/saas5/800/400",
    users: "950+",
    revenue: "$2,100 MRR",
  },
  {
    name: "Link Shortener Analytics",
    tagline: "Smart link management with insights",
    description:
      "Advanced URL shortener with detailed analytics, QR code generation, and custom domains. Perfect for marketers who want to track link performance and audience engagement across campaigns.",
    technologies: ["Next.js", "Redis", "PostgreSQL", "Vercel", "Analytics"],
    features: [
      "Custom branded short links",
      "QR code generation",
      "Detailed click analytics",
      "Geographic and device tracking",
      "Link expiration and password protection",
      "API access for automation",
    ],
    status: "Planning",
    imageUrl: "https://picsum.photos/seed/saas6/800/400",
    users: "Coming Soon",
    revenue: "N/A",
  },
];
