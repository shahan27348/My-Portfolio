// Resume data extracted from your PDF
// Update this information to match your actual resume

export const RESUME_DATA = {
  personalInfo: {
    name: "Muhammad Shahan",
    title: "Full Stack Developer",
    email: "muhammadshahan059@gmail.com",
    phone: "+92-322-1227348",
    location: "Lahore, Pakistan",
    linkedin: "linkedin.com/in/muhammadshahan",
    github: "github.com/shahan27348",
    portfolio: "muhammadshahan.me",
  },

  summary: `Passionate Full Stack Developer with expertise in React, TypeScript, and modern web technologies. 
  Experienced in building scalable web applications and delivering high-quality code. Strong problem-solving 
  skills and ability to work in fast-paced environments.`,

  education: [
    {
      degree: "Bachelor's in Computer Science",
      institution: "Virtual University",
      location: "Lahore, Pakistan",
      duration: "2023 - 2027 (Present)",
      gpa: "2.6/4.0",
    },
  ],

  workExperience: [
    {
      position: "Associate Full Stack Developer",
      company: "Ichonic Inc.",
      location: "Remote/onsite",
      duration: "May 2023 - Present",
      responsibilities: [
        "Maintain coding structure and implement new features based on requirements",
        "Collaborate with designers and backend developers to create seamless user experiences",
        "Worked on three products for Wix App Market",
      ],
      technologies: [
        "React",
        "TypeScript",
        "JavaScript",
        "Node.js",
        "MongoDB",
        "MUI",
        "Next.js",
        "Framer Motion",
        "shadcn",
        "Wix authentication",
        "Redux",
      ],
    },
    // Add more work experience here
  ],

  technicalSkills: {
    frontend: [
      "JavaScript (ES6+)",
      "Typescript",
      "React.js",
      "Next.js",
      "Redux",
      "HTML5",
      "CSS3",
      "Material UI",
      "Shadcn UI",
      "Bootstrap",
      "Tailwind CSS",
      "FramerMotion",
      "Stripe",
      "Prisma",
      "Drizzle ORM",
    ],
    backend: ["Node.js", "Express.js", "GraphQL"],
    databases: ["MongoDB", "PostgreSQL", "NeonDB", "SupabaseDB", "Firebase"],
    tools: [
      "Git & GitHub",
      "Vercel",
      "Netlify",
      "Figma",
      "VS Code",
      "Postman",
      "Wix App Development",
      "WixBlocks",
    ],
    ai: ["N8N", "Zapier", "Make", "AI Integrations", "Google Gemini API"],
  },

  projects: [
    {
      name: "E-commerce Platform",
      description:
        "A full-featured e-commerce site with product browsing, shopping cart, and checkout",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Stripe",
        "Tailwind CSS",
      ],
      highlights: [
        "Implemented secure payment processing with Stripe",
        "Built responsive design for mobile and desktop",
        "Integrated real-time inventory management",
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      name: "Project Management Tool",
      description:
        "A Kanban-style project management application with drag-and-drop functionality",
      technologies: ["React", "Firebase", "Redux Toolkit", "Styled Components"],
      highlights: [
        "Real-time collaboration features using Firebase",
        "Drag-and-drop interface for task management",
        "User authentication and role-based access control",
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
    // Add more projects
  ],

  certifications: [
    {
      name: "React - The Complete Guide",
      issuer: "Udemy",
      date: "2023",
      credentialId: "UC-XXXXXXXX",
    },
    {
      name: "Full Stack Web Development",
      issuer: "freeCodeCamp",
      date: "2022",
      credentialId: "fcc-XXXXXXXX",
    },
    // Add more certifications
  ],

  languages: [
    { name: "English", proficiency: "Professional" },
    { name: "Urdu", proficiency: "Native" },
    { name: "Punjabi", proficiency: "Native" },
  ],

  achievements: [
    "GitHub Education Pack recipient",
    "Built and deployed 10+ production-ready web applications",
    "Active contributor to open-source projects",
  ],
};

// Format resume data as detailed text for AI
export const getFormattedResumeText = (): string => {
  const {
    personalInfo,
    summary,
    education,
    workExperience,
    technicalSkills,
    projects,
    certifications,
    languages,
    achievements,
  } = RESUME_DATA;

  return `
PERSONAL INFORMATION:
Name: ${personalInfo.name}
Title: ${personalInfo.title}
Email: ${personalInfo.email}
Phone: ${personalInfo.phone}
Location: ${personalInfo.location}
LinkedIn: ${personalInfo.linkedin}
GitHub: ${personalInfo.github}
Portfolio: ${personalInfo.portfolio}

PROFESSIONAL SUMMARY:
${summary}

EDUCATION:
${education
  .map(
    (edu) => `
- ${edu.degree} at ${edu.institution} (${edu.duration})
  Location: ${edu.location}
  GPA: ${edu.gpa}
`,
  )
  .join("\n")}

WORK EXPERIENCE:
${workExperience
  .map(
    (work) => `
${work.position} at ${work.company}
Duration: ${work.duration} | Location: ${work.location}
Key Responsibilities:
${work.responsibilities.map((r) => `  - ${r}`).join("\n")}
Technologies: ${work.technologies.join(", ")}
`,
  )
  .join("\n")}

TECHNICAL SKILLS:
Frontend: ${technicalSkills.frontend.join(", ")}
Backend: ${technicalSkills.backend.join(", ")}
Databases: ${technicalSkills.databases.join(", ")}
Tools & Platforms: ${technicalSkills.tools.join(", ")}
AI & Automation: ${technicalSkills.ai.join(", ")}

PROJECTS:
${projects
  .map(
    (project) => `
${project.name}
${project.description}
Technologies: ${project.technologies.join(", ")}
Key Features:
${project.highlights.map((h) => `  - ${h}`).join("\n")}
Links: Live: ${project.liveUrl} | GitHub: ${project.githubUrl}
`,
  )
  .join("\n")}

CERTIFICATIONS:
${certifications
  .map((cert) => `- ${cert.name} by ${cert.issuer} (${cert.date})`)
  .join("\n")}

LANGUAGES:
${languages.map((lang) => `- ${lang.name}: ${lang.proficiency}`).join("\n")}

ACHIEVEMENTS:
${achievements.map((achievement) => `- ${achievement}`).join("\n")}
`;
};
