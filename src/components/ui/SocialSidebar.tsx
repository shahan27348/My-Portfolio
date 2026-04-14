import React, { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  GitHubIcon,
  LinkedInIcon,
  YouTubeIcon,
  InstagramIcon,
  TikTokIcon,
  FacebookIcon,
} from "@/components/icons";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/shahan27348",
    icon: GitHubIcon,
    color: "#FFF",
    bg: "from-white to-white",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammad-shahan/",
    icon: LinkedInIcon,
    color: "#FFF",
    bg: "from-white to-white",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@ThinkFlowAi",
    icon: YouTubeIcon,
    color: "#FFF",
    bg: "from-white to-white",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/shahan059/",
    icon: InstagramIcon,
    color: "#FFF",
    bg: "from-white to-white",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@shahan_348",
    icon: TikTokIcon,
    color: "#FFF",
    bg: "from-white to-white",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/shahan059/",
    icon: FacebookIcon,
    color: "#FFF",
    bg: "from-white to-white",
  },
];

const SocialSidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLButtonElement>(null);

  // Set initial state for icons (visible when collapsed)
  useEffect(() => {
    if (cardsRef.current) {
      gsap.set(cardsRef.current.children, { opacity: 1, x: 0 });
    }
  }, []);

  useGSAP(
    () => {
      if (!panelRef.current || !cardsRef.current || !arrowRef.current) return;

      if (isExpanded) {
        gsap.to(panelRef.current, {
          width: 260,
          duration: 0.4,
          ease: "power3.out",
        });
        gsap.to(arrowRef.current, {
          rotate: 180,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.fromTo(
          cardsRef.current.children,
          { opacity: 0, x: 30 },
          {
            opacity: 1,
            x: 0,
            stagger: 0.06,
            duration: 0.4,
            delay: 0.15,
            ease: "back.out(1.4)",
          },
        );
      } else {
        gsap.to(panelRef.current, {
          width: 52,
          duration: 0.35,
          ease: "power3.inOut",
        });
        gsap.to(arrowRef.current, {
          rotate: 0,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(cardsRef.current.children, {
          opacity: 1,
          x: 0,
          stagger: 0.03,
          duration: 0.2,
          ease: "power2.out",
        });
      }
    },
    { dependencies: [isExpanded] },
  );

  return (
    <div
      ref={panelRef}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center"
      style={{ width: 52 }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-md rounded-l-2xl border border-white/10 border-r-0" />

      <div className="relative z-10 flex flex-col items-center w-full py-3">
        {/* My Media label (vertical when collapsed) */}
        <div className="px-2 mb-2">
          <span
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-b from-pink-400 to-purple-400"
            style={{
              writingMode: isExpanded ? "horizontal-tb" : "vertical-rl",
              textOrientation: "mixed",
              transition: "writing-mode 0.3s",
            }}
          >
            My Media
          </span>
        </div>

        {/* Arrow toggle button */}
        <button
          ref={arrowRef}
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white mb-3 transition-colors duration-200"
          aria-label={isExpanded ? "Collapse sidebar" : "Expand sidebar"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Icons (collapsed) / Cards (expanded) */}
        <div
          ref={cardsRef}
          className="flex flex-col items-center gap-2 w-full px-2"
        >
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-3 rounded-xl transition-all duration-200 ${
                isExpanded
                  ? "w-full px-3 py-2.5 bg-white/5 hover:bg-white/15 border border-white/5 hover:border-white/20"
                  : "w-9 h-9 justify-center hover:bg-white/10 rounded-lg"
              }`}
            >
              <social.icon
                className={`w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-200 shrink-0`}
              />
              {isExpanded && (
                <span className="text-sm text-white/80 group-hover:text-white font-medium whitespace-nowrap">
                  {social.name}
                </span>
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialSidebar;
