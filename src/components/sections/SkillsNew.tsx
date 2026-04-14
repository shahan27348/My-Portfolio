import React from "react";
import { SKILLS, SkillCategory } from "@/constants";
import AnimatedSection from "@/components/ui/AnimatedSection";

const SectionTitle: React.FC<{ number: string; title: string }> = ({
  title,
}) => (
  <h2 className="text-3xl font-bold text-slate-light mb-12 flex items-center whitespace-nowrap">
    {title}
    <span className="block w-full max-w-xs h-px bg-white/30 ml-6"></span>
  </h2>
);

const SkillsNew: React.FC = () => {
  const skillsByCategory = Object.values(SkillCategory).map((category) => ({
    category,
    skills: SKILLS.filter((skill) => skill.category === category),
  }));

  return (
    <AnimatedSection>
      <section id="skills" className="py-24">
        <SectionTitle number="3" title="Skills & Technologies" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsByCategory.map((group) => (
            <div
              key={group.category}
              className="bg-white/5 rounded-lg p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(255,255,255,0.1)] skill-card border border-white/10"
              style={{ transformStyle: "preserve-3d" }}
            >
              <h3 className="text-xl font-bold text-accent mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="bg-white/10 text-slate-light px-3 py-1 rounded-full text-sm transition-all duration-300 hover:scale-110 hover:bg-accent/20 hover:text-accent skill-badge"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
};

export default SkillsNew;
