import React from "react";
import { motion } from "framer-motion";
import { SKILLS, SkillCategory } from "@/constants";
import AnimatedSection from "@/components/ui/AnimatedSection";

const SectionTitle: React.FC<{ number: string; title: string }> = ({
  title,
}) => (
  <h2 className="text-3xl font-bold text-slate-light mb-12 flex items-center whitespace-nowrap">
    {title}
    <span className="block w-full max-w-xs h-px bg-tertiary ml-6"></span>
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
          {skillsByCategory.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              className="bg-secondary rounded-lg p-6 shadow-lg"
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(100, 255, 218, 0.2)",
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.h3
                className="text-xl font-bold text-accent mb-4"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: groupIndex * 0.1 + 0.2 }}
              >
                {group.category}
              </motion.h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill.name}
                    className="bg-tertiary text-slate-light px-3 py-1 rounded-full text-sm font-mono"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: groupIndex * 0.1 + skillIndex * 0.05,
                    }}
                    whileHover={{
                      scale: 1.2,
                      backgroundColor: "rgba(100, 255, 218, 0.2)",
                      color: "#64ffda",
                      rotate: [0, -5, 5, -5, 0],
                      transition: { duration: 0.5 },
                    }}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
};

export default SkillsNew;
