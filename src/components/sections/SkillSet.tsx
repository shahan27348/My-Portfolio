import React from "react";

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
  return (
    <section id="skills" className="py-24">
      {/* Heading row */}
      <div className="flex flex-wrap items-start justify-between gap-8 mb-16">
        <h2
          className="uppercase text-[#e4e4e4] leading-none tracking-tight m-0"
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

            {/* Title — always visible */}
            <h3
              className="skillset-card__title"
              style={{ fontFamily: "'League Gothic', sans-serif" }}
            >
              {card.title}
            </h3>

            {/* Expanded content — slides down on hover */}
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
  );
};

export default SkillSet;
