import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PRIMARY_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "/contact" },
];

const SOCIAL_LINKS = [
  { name: "GitHub", href: "https://github.com/shahan27348" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-shahan/" },
  { name: "YouTube", href: "https://www.youtube.com/@ThinkFlowAi" },
  { name: "Instagram", href: "https://www.instagram.com/shahan059/" },
  { name: "TikTok", href: "https://www.tiktok.com/@shahan_348" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [onHero, setOnHero] = useState(true);

  useEffect(() => {
    const onScroll = () => setOnHero(window.scrollY < window.innerHeight * 0.8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const close = () => setIsOpen(false);
  const navigate = useNavigate();

  const handlePrimaryClick = (href: string) => {
    close();
    if (href.startsWith("/")) {
      navigate(href);
    }
  };

  /* text colour for the slim bar: dark on the light hero, white elsewhere */
  const barColor = onHero && !isOpen ? "text-[#D3D3D3]" : "text-white";

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* ── Full-screen overlay ── */}
      <div
        className={`fixed inset-0 bg-[#0d0d0d] flex flex-col justify-between
          px-8 md:px-16 lg:px-24 pt-28 pb-12
          ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        style={{
          clipPath: isOpen ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)",
          transition: "clip-path 0.75s cubic-bezier(0.76, 0, 0.24, 1)",
        }}
      >
        {/* Primary links */}
        <nav className="flex flex-col">
          {PRIMARY_LINKS.map((link, i) => (
            <a
              key={link.name}
              href={link.href.startsWith("/") ? undefined : link.href}
              onClick={() => handlePrimaryClick(link.href)}
              className="group relative overflow-hidden border-b border-white/10 py-3 md:py-5 cursor-pointer"
              style={{
                transform: isOpen ? "translateY(0)" : "translateY(2rem)",
                opacity: isOpen ? 1 : 0,
                transition: `transform 0.5s cubic-bezier(0.76,0,0.24,1) ${i * 70 + 150}ms,
                             opacity 0.5s ease ${i * 70 + 150}ms`,
              }}
            >
              {/* visible text */}
              <span
                className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black
                               text-white uppercase tracking-tight leading-none
                               transition-transform duration-300 ease-out
                               group-hover:-translate-y-full"
              >
                {link.name}
              </span>
              {/* hover clone */}
              <span
                className="absolute inset-0 flex items-center
                               text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black
                               text-white/50 uppercase tracking-tight leading-none
                               translate-y-full transition-transform duration-300 ease-out
                               group-hover:translate-y-0"
              >
                {link.name}
              </span>
            </a>
          ))}
        </nav>

        {/* Divider */}
        <div className="h-px bg-white/15 my-6" />

        {/* Social links */}
        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {SOCIAL_LINKS.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden text-xs uppercase tracking-widest text-white/40"
              style={{
                opacity: isOpen ? 1 : 0,
                transition: `opacity 0.4s ease ${i * 50 + 500}ms`,
              }}
            >
              <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                {link.name}
              </span>
              <span
                className="absolute inset-0 text-white/80 translate-y-full
                               transition-transform duration-300 group-hover:translate-y-0"
              >
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* ── Slim nav bar ── */}
      <div className="relative z-10 flex items-center justify-between px-8 md:px-16 lg:px-24 py-6">
        {/* Logo */}
        <a
          href="#home"
          className={`text-2xl font-black uppercase tracking-[0.2em]
            transition-colors duration-300 ${barColor}`}
        >
          MS
        </a>

        {/* Burger */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle navigation"
          className={`flex flex-col gap-[5px] p-1 transition-colors duration-300 ${barColor}`}
        >
          <span
            className={`block h-[1.5px] w-6 bg-current origin-center
              transition-transform duration-300
              ${isOpen ? "rotate-45 translate-y-[3.25px]" : ""}`}
          />
          <span
            className={`block h-[1.5px] w-6 bg-current origin-center
              transition-transform duration-300
              ${isOpen ? "-rotate-45 -translate-y-[3.25px]" : ""}`}
          />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
