import React, { useState } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const SKILL_CARDS = [
  {
    number: "01.",
    title: "Frontend",
    accent: "#4ade80",
    description:
      "Building fast, accessible, and pixel-perfect interfaces with modern frameworks and solid HTML/CSS fundamentals.",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "HTML5 / CSS3",
    ],
  },
  {
    number: "02.",
    title: "UI Libraries",
    accent: "#60a5fa",
    description:
      "Speeding up delivery with battle-tested component systems while keeping designs consistent and on-brand.",
    items: ["Material UI", "shadcn/ui", "Ant Design", "Bootstrap", "Sass"],
  },
  {
    number: "03.",
    title: "Backend",
    accent: "#f472b6",
    description:
      "Designing and building RESTful APIs, real-time services, and scalable server-side architecture.",
    items: ["Node.js", "Express.js", "GraphQL", "REST APIs", "JWT / Auth"],
  },
  {
    number: "04.",
    title: "Databases",
    accent: "#fb923c",
    description:
      "Modelling data for both relational and document-based systems, picking the right tool for each use case.",
    items: ["MongoDB", "PostgreSQL", "Supabase", "NeonDB", "Firebase"],
  },
  {
    number: "05.",
    title: "AI & Automation",
    accent: "#a78bfa",
    description:
      "Integrating AI models and no-code automation flows to unlock velocity and smarter products.",
    items: ["N8N", "Zapier", "Make", "Google Gemini API", "AI Integrations"],
  },
];

const SkillSet: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <AnimatedSection>
      <section id="skills" className="py-24">
        {/* Heading row */}
        <div className="flex flex-wrap items-start justify-between gap-8 mb-16">
          <h2
            className="uppercase bg-gradient-to-b from-[#e4e4e4] to-black bg-clip-text text-transparent leading-none tracking-tight m-0"
            style={{
              fontFamily: "'League Gothic', sans-serif",
              fontSize: "clamp(3rem, 9vw, 9rem)",
            }}
          >
            My
            <br />
            Skill Set
          </h2>
          <p className="text-[#888] text-sm leading-relaxed max-w-[220px] self-end">
            A breakdown of my core competencies — the tools and technologies I
            reach for on every project.
          </p>
        </div>

        {/* Stacked cards */}
        <div className="relative">
          {SKILL_CARDS.map((card, i) => (
            <div
              key={card.title}
              className="skillset-card"
              data-open={openIndex === i ? "true" : "false"}
              onClick={() => toggle(i)}
              style={
                {
                  "--accent": card.accent,
                  marginLeft: `${i * 150}px`,
                  marginTop: i === 0 ? "0" : "-250px",
                  zIndex: i + 1,
                } as React.CSSProperties
              }
            >
              {/* Number */}
              <span className="skillset-card__num">{card.number}</span>

              {/* Title row — always visible */}
              <div className="skillset-card__header">
                <h3
                  className="skillset-card__title"
                  style={{ fontFamily: "'League Gothic', sans-serif" }}
                >
                  {card.title}
                </h3>
                {/* Plus / minus icon — visible only on mobile */}
                <span className="skillset-card__toggle-icon">
                  {openIndex === i ? (
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <circle
                        cx="11"
                        cy="11"
                        r="10.5"
                        stroke="currentColor"
                        strokeOpacity="0.5"
                      />
                      <rect
                        x="5"
                        y="10"
                        width="12"
                        height="2"
                        rx="1"
                        fill="currentColor"
                      />
                    </svg>
                  ) : (
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <circle
                        cx="11"
                        cy="11"
                        r="10.5"
                        stroke="currentColor"
                        strokeOpacity="0.5"
                      />
                      <rect
                        x="10"
                        y="5"
                        width="2"
                        height="12"
                        rx="1"
                        fill="currentColor"
                      />
                      <rect
                        x="5"
                        y="10"
                        width="12"
                        height="2"
                        rx="1"
                        fill="currentColor"
                      />
                    </svg>
                  )}
                </span>
              </div>

              {/* Expanded content — slides down on hover (desktop) or click (mobile) */}
              <div className="skillset-card__body">
                <div>
                  <p className="skillset-card__desc">{card.description}</p>
                  <ul className="skillset-card__list">
                    {card.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
};

export default SkillSet;
