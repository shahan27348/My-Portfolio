/**
 * Site-wide configuration
 * Centralized configuration for metadata, SEO, and social links
 */

export const siteConfig = {
  name: "Muhammad Shahan",
  title: "Muhammad Shahan - Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, TypeScript, Next.js, and modern web technologies. Building exceptional digital experiences.",
  url: import.meta.env.VITE_SITE_URL || "https://yourname.me",
  ogImage: "/og-image.jpg",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "TypeScript",
    "Next.js",
    "Frontend Development",
    "Web Development",
    "Portfolio",
  ],
  author: {
    name: "Muhammad Shahan",
    email: import.meta.env.VITE_EMAIL || "your.email@example.com",
    github: "https://github.com/shahan27348",
    linkedin:
      import.meta.env.VITE_LINKEDIN_URL ||
      "https://linkedin.com/in/yourprofile",
  },
  links: {
    github: "https://github.com/shahan27348",
    linkedin: "https://linkedin.com/in/yourprofile",
    // Add more social links as needed
  },
} as const;

export type SiteConfig = typeof siteConfig;
