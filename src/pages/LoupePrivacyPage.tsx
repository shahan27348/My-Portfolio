import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const SECTION = [
  {
    title: "Data Collection",
    paragraphs: [
      "Loupe does not collect, sell, or transfer personal information or other user data to external servers or third parties.",
      "Loupe does not use analytics, advertising trackers, or telemetry services.",
    ],
  },
  {
    title: "Color History",
    paragraphs: [
      "Loupe may store recently selected colors using Chrome's local storage. This information remains locally on the user's device and is not transmitted to any server.",
    ],
  },
  {
    title: "Page Color Picking",
    paragraphs: [
      'When the user explicitly starts the "Pick on Page" feature, Loupe temporarily accesses the visible area of the active tab to determine the color at the selected position.',
      "The captured image is processed locally to determine the selected color. It is not uploaded to a server, stored remotely, or shared with third parties.",
    ],
  },
  {
    title: "Permissions",
    paragraphs: [
      "Loupe uses Chrome permissions only to provide its core color-picking functionality:",
    ],
    bullets: [
      "activeTab: Used to access the currently active webpage after the user explicitly starts the page color picker.",
      "scripting: Used to display the interactive color picker on the active webpage.",
      "storage: Used to save recently selected colors locally.",
    ],
  },
  {
    title: "Third-Party Services",
    paragraphs: [
      "Loupe does not use external servers, analytics services, advertising networks, or third-party data processing services.",
    ],
  },
  {
    title: "Changes to This Policy",
    paragraphs: [
      "This privacy policy may be updated when the extension's functionality or data practices change. Any updates will be published on this page.",
    ],
  },
];

const LoupePrivacyPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-primary text-slate-light min-h-screen antialiased overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 lg:px-24 py-6 bg-primary/80 backdrop-blur-sm">
        <button
          onClick={() => navigate("/")}
          className="text-base font-black uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-60"
          style={{ fontFamily: "'League Gothic', sans-serif" }}
        >
          MS
        </button>
        <button
          onClick={() => navigate(-1)}
          className="text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors"
        >
          ← Back
        </button>
      </header>

      <main className="pt-28 pb-20 px-6 md:px-12 lg:px-24 page-enter">
        <div className="max-w-3xl mx-auto">
          <p className="text-white/35 text-xs uppercase tracking-[0.3em] mb-4 font-mono">
            Chrome Extension
          </p>
          <h1
            className="uppercase text-[#e4e4e4] leading-none tracking-tight mb-4"
            style={{
              fontFamily: "'League Gothic', sans-serif",
              fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
            }}
          >
            Loupe — Privacy Policy
          </h1>
          <p className="text-white/40 text-xs uppercase tracking-widest mb-10">
            Last updated: August 22, 2026
          </p>

          <p className="text-[#888] text-sm md:text-base leading-relaxed mb-12">
            Loupe is a Chrome extension that allows users to pick colors from
            webpages or their screen and view color values such as HEX, RGB,
            HSL, OKLCH, and CMYK.
          </p>

          <div className="space-y-12">
            {SECTION.map((section) => (
              <section key={section.title}>
                <h2
                  className="uppercase text-[#e4e4e4] leading-none mb-5"
                  style={{
                    fontFamily: "'League Gothic', sans-serif",
                    fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                  }}
                >
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-[#888] text-sm md:text-base leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.bullets && (
                  <ul className="mt-4 space-y-3">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="text-[#888] text-sm md:text-base leading-relaxed border-l border-white/15 pl-4"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <section>
              <h2
                className="uppercase text-[#e4e4e4] leading-none mb-5"
                style={{
                  fontFamily: "'League Gothic', sans-serif",
                  fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                }}
              >
                Contact
              </h2>
              <p className="text-[#888] text-sm md:text-base leading-relaxed mb-3">
                If you have questions about this privacy policy, contact:
              </p>
              <a
                href="mailto:muhammadshahan059@gmail.com"
                className="text-[#e4e4e4] text-sm md:text-base hover:text-white underline underline-offset-4 decoration-white/30"
              >
                muhammadshahan059@gmail.com
              </a>
            </section>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default LoupePrivacyPage;
