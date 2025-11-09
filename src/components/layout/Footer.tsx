import React from "react";
import {
  GitHubIcon,
  LinkedInIcon,
  YouTubeIcon,
  InstagramIcon,
  TikTokIcon,
  FacebookIcon,
} from "@/components/icons";

const Footer: React.FC = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center text-slate-dark">
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="https://github.com/shahan27348"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors duration-300"
          >
            <GitHubIcon className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-shahan/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors duration-300"
          >
            <LinkedInIcon className="w-6 h-6" />
          </a>
          <a
            href="https://www.youtube.com/@ThinkFlowAi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors duration-300"
          >
            <YouTubeIcon className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/shahan059/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors duration-300"
          >
            <InstagramIcon className="w-6 h-6" />
          </a>
          <a
            href="https://www.tiktok.com/@shahan_348"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors duration-300"
          >
            <TikTokIcon className="w-6 h-6" />
          </a>
          <a
            href="https://www.facebook.com/shahan059/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors duration-300"
          >
            <FacebookIcon className="w-6 h-6" />
          </a>
        </div>
        <p className="font-mono text-sm">Designed & Built by Muhammad Shahan</p>
        <p className="font-mono text-xs mt-2">
          © 2025 Muhammad Shahan. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
