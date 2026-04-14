import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ACHIEVEMENTS } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

const SectionTitle: React.FC<{
  number: string;
  title: string;
  subtitle: string;
}> = ({ number, title, subtitle }) => (
  <div className="text-center mb-16">
    <h2 className="text-3xl font-bold text-slate-light flex items-center justify-center gap-2">
      <span className="text-accent font-mono text-xl">{number}.</span>
      {title}
    </h2>
    <p className="text-accent mt-2">{subtitle}</p>
  </div>
);

const AchievementCard: React.FC<{
  title: string;
  description: string;
  date: string;
  category: string;
  icon?: string;
}> = ({ title, description, date, category, icon }) => (
  <div className="group relative bg-black rounded-lg p-6 hover:transform hover:-translate-y-2 transition-all duration-300 border border-white/10 hover:border-white/30">
    <div className="flex items-start gap-4">
      {icon && (
        <div className="text-4xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      )}
      <div className="flex-1">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className="text-xl font-semibold text-slate-light group-hover:text-accent transition-colors">
            {title}
          </h3>
          <span className="text-sm text-accent font-mono whitespace-nowrap">
            {date}
          </span>
        </div>
        <div className="inline-block bg-accent/10 text-accent text-xs px-3 py-1 rounded-full mb-3">
          {category}
        </div>
        <p className="text-slate-dark leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

const Achievements: React.FC = () => {
  const statsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!statsRef.current) return;

      // Animate stat numbers counting up
      const statNumbers = statsRef.current.querySelectorAll(".stat-number");
      statNumbers.forEach((el) => {
        const target = parseInt(el.getAttribute("data-value") || "0", 10);
        const suffix = el.getAttribute("data-suffix") || "";
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            (el as HTMLElement).textContent = Math.round(obj.val) + suffix;
          },
        });
      });
    },
    { scope: statsRef },
  );

  return (
    <AnimatedSection>
      <section id="achievements" className="py-24">
        <SectionTitle
          number="5"
          title="Achievements"
          subtitle="Milestones & Recognition"
        />

        <div className="max-w-4xl mx-auto space-y-6">
          {ACHIEVEMENTS.map((achievement, index) => (
            <AchievementCard key={index} {...achievement} />
          ))}
        </div>

        {/* Stats Section */}
        <div
          ref={statsRef}
          className="max-w-4xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center">
            <div
              className="stat-number text-4xl font-bold text-accent mb-2"
              data-value="100"
              data-suffix="+"
            >
              0
            </div>
            <div className="text-slate-dark text-sm">
              Open Source Contributions
            </div>
          </div>
          <div className="text-center">
            <div
              className="stat-number text-4xl font-bold text-accent mb-2"
              data-value="5"
              data-suffix=""
            >
              0
            </div>
            <div className="text-slate-dark text-sm">Certifications</div>
          </div>
          <div className="text-center">
            <div
              className="stat-number text-4xl font-bold text-accent mb-2"
              data-value="50"
              data-suffix="K+"
            >
              0
            </div>
            <div className="text-slate-dark text-sm">Article Views</div>
          </div>
          <div className="text-center">
            <div
              className="stat-number text-4xl font-bold text-accent mb-2"
              data-value="3"
              data-suffix=""
            >
              0
            </div>
            <div className="text-slate-dark text-sm">Awards Won</div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Achievements;
