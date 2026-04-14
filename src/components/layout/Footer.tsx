import React from "react";
import { useNavigate } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "/contact" },
];

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/shahan27348" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-shahan/" },
  { label: "YouTube", href: "https://www.youtube.com/@ThinkFlowAi" },
  { label: "Instagram", href: "https://www.instagram.com/shahan059/" },
  { label: "TikTok", href: "https://www.tiktok.com/@shahan_348" },
];

const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const navigate = useNavigate();

  const handlePrimaryClick = (href: string) => {
    close();
    if (href.startsWith("/")) {
      navigate(href);
    }
  };
  return (
    <footer className="bg-[#D3D3D3] border-t border-white/10">
      {/* â”€â”€ CTA â”€â”€ */}
      <div className="px-8 md:px-16 lg:px-24 pt-20 pb-10">
        <p
          className="uppercase text-[#1A1A1A]  text-2xl mb-4 "
          style={{ fontFamily: "'League Gothic', sans-serif" }}
        >
          Ready to work together?
        </p>

        <div className="flex flex-wrap items-start justify-between gap-6">
          <a
            href="mailto:muhammadshahan059@gmail.com"
            className="footer-cta-link group/cta"
            style={{
              fontFamily: "'League Gothic', sans-serif",
              fontSize: "clamp(3.5rem, 11vw, 12rem)",
              lineHeight: 0.9,
            }}
          >
            {/* visible text */}
            <span className="footer-cta-visible">Drop Me a Line</span>
            {/* hover clone */}
            <span className="footer-cta-clone" aria-hidden>
              Drop Me a Line
            </span>
          </a>

          <p
            className="text-[#1A1A1A] text-lg uppercase self-end mb-4 text-right leading-loose"
            style={{ fontFamily: "'League Gothic', sans-serif" }}
          >
            Available for
            <br />
            new projects
            <br />
            from March&nbsp;2025
          </p>
        </div>
      </div>

      {/* â”€â”€ Divider â”€â”€ */}
      <div className="mx-8 md:mx-16 lg:mx-24 h-12 text-[#1A1A1A] " />

      {/* â”€â”€ Bottom row â”€â”€ */}
      <div className="px-8 md:px-16 lg:px-24 py-12 flex flex-wrap gap-12 justify-between">
        {/* Logo + tagline + back to top */}
        <div className="flex flex-col gap-6">
          <div>
            <p
              className="text-[#1A1A1A] font-black uppercase tracking-[0.1em] text-lg"
              style={{
                fontFamily: "'League Gothic', sans-serif",
                fontSize: "clamp(1.2rem,3vw,2rem)",
              }}
            >
              Muhammad Shahan
            </p>
            <p className="text-[#1A1A1A] text-[11px] uppercase tracking-widest mt-1">
              Full Stack Developer Â· Lahore, PK
            </p>
          </div>

          <button onClick={scrollToTop} className="footer-back-top">
            <span className="footer-back-top__fill" />
            <span className="footer-back-top__text">Back to top</span>
          </button>
        </div>

        {/* Sitemap */}
        <div>
          <p
            className="text-[#1A1A1A] text-xs uppercase tracking-[0.09em] mb-5 font-semibold"
            style={{
              fontFamily: "'League Gothic', sans-serif",
              fontSize: "1.5rem",
            }}
          >
            Sitemap
          </p>
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href.startsWith("/") ? undefined : l.href}
                  onClick={() => handlePrimaryClick(l.href)}
                  className="footer-nav-link cursor-pointer"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <p
            className="text-[#1A1A1A] text-xs uppercase tracking-[0.09em] mb-5 font-semibold"
            style={{
              fontFamily: "'League Gothic', sans-serif",
              fontSize: "1.5rem",
            }}
          >
            Social
          </p>
          <ul className="flex flex-col gap-3 ">
            {SOCIAL_LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-nav-link text-[#1A1A1A]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* â”€â”€ Copyright â”€â”€ */}
      <div className="px-8 md:px-16 lg:px-24 pb-8">
        <p className="text-[#1A1A1A] text-[11px] uppercase tracking-widest">
          Â© {new Date().getFullYear()} Muhammad Shahan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
