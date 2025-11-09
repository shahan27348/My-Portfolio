import React from "react";
import { SKILLS, SkillCategory } from "@/constants";
import AnimatedSection from "@/components/ui/AnimatedSection";

const SectionTitle: React.FC<{ number: string; title: string }> = ({
  number,
  title,
}) => (
  <h2 className="text-3xl font-bold text-slate-light mb-12 flex items-center whitespace-nowrap">
    {title}
    <span className="block w-full max-w-xs h-px bg-tertiary ml-6"></span>
  </h2>
);

const Skills: React.FC = () => {
  const categories = Object.values(SkillCategory);

  return (
    <AnimatedSection>
      <section id="skills" className="py-24">
        <SectionTitle number="3" title="My Skills" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category}
              className="bg-secondary p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold text-accent mb-4">{category}</h3>
              <ul className="space-y-2">
                {SKILLS.filter((skill) => skill.category === category).map(
                  (skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center text-slate-dark font-mono"
                    >
                      <span className="text-accent mr-3">▹</span>
                      {skill.name}
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Skills;
