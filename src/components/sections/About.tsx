import React from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const SectionTitle: React.FC<{ title: string }> = ({ title }) => {
  return (
    <h2
      className="uppercase text-[#e4e4e4] leading-none tracking-tight mb-10"
      style={{
        fontFamily: "'League Gothic', sans-serif",
        fontSize: "clamp(2.8rem, 7vw, 7rem)",
      }}
    >
      {title}
    </h2>
  );
};

const SubHeading: React.FC<{ title: string }> = ({ title }) => (
  <h3
    className="uppercase text-[#e4e4e4] leading-none tracking-tight mb-6"
    style={{
      fontFamily: "'League Gothic', sans-serif",
      fontSize: "clamp(2rem, 5vw, 4rem)",
    }}
  >
    {title}
  </h3>
);

interface AboutProps {
  isPage?: boolean;
}

const About: React.FC<AboutProps> = ({ isPage = false }) => {
  return (
    <AnimatedSection>
      <section id="about" className="py-10">
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <SectionTitle title="About Me" />
            <div className="text-sm md:text-base space-y-4 leading-relaxed text-[#888] about-text">
              <p>
                Hello! I'm Shahan, a{" "}
                <span className="text-accent">Full Stack Developer</span> based
                in Lahore, Pakistan with a passion for creating intuitive,
                dynamic user experiences.
              </p>
              <p>
                Fast-forward to today, and I've had the privilege of working at
                a start-up. My main focus these days is building accessible,
                inclusive products and digital experiences at{" "}
                <span className="text-accent">Ichonic Inc</span> for a variety
                of clients.
              </p>
              <p>
                I'm a firm believer in continuous learning and I'm always on the
                lookout for new technologies and frameworks to explore. When I'm
                not at Work, I'm usually exploring the city, playing{" "}
                <span className="text-accent">COD 4 or PUBG Mobile</span>,
                trying new restaurants, and sometimes just relaxing.
              </p>
            </div>
            {!isPage && (
              <div className="flex justify-start py-16 px-6">
                <a href="/about">
                  <button className="about-btn w-full max-w-xl">
                    <span className="about-btn__fill" />
                    <span className="about-btn__text">See More</span>
                  </button>
                </a>
              </div>
            )}
          </div>

          {/* About SVG Illustration */}
          <div className="flex justify-center items-center about-image h-full">
            <div className="relative group w-full max-w-sm">
              <img
                src="/images/shani5.png"
                alt="About Me"
                className="w-full h-auto object-contain transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* ── Extended sections — visible only on the About page ── */}
        {isPage && (
          <div className="mt-24 grid gap-20 grid-cols-1 lg:grid-cols-2">
            {/* Education */}
            <div>
              <SubHeading title="Education" />
              <div className="space-y-8">
                <div className="border-l border-white/10 pl-6">
                  <p className="text-xs uppercase tracking-widest text-white/30 mb-1">
                    2023 – 2027
                  </p>
                  <p className="text-[#e4e4e4] font-semibold text-sm md:text-base">
                    Bachelor of Science in Computer Science
                  </p>
                  <p className="text-[#888] text-sm mt-1">
                    Virtual University of Pakistan, Lahore
                  </p>
                  <p className="text-[#666] text-xs mt-2 leading-relaxed max-w-sm">
                    Focused on software engineering, data structures,
                    algorithms, and web technologies. Graduated with strong
                    practical project experience.
                  </p>
                </div>
                <div className="border-l border-white/10 pl-6">
                  <p className="text-[#e4e4e4] font-semibold text-sm md:text-base">
                    Languages
                  </p>
                  <p className="text-[#888] text-sm mt-1">
                    English, Urdu, Punjabi
                  </p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <SubHeading title="Experience" />
              <div className="space-y-8">
                <div className="border-l border-white/10 pl-6">
                  <p className="text-xs uppercase tracking-widest text-white/30 mb-1">
                    2024 – Present
                  </p>
                  <p className="text-[#e4e4e4] font-semibold text-sm md:text-base">
                    Junior Full Stack Developer -Intern
                  </p>
                  <p className="text-[#888] text-sm mt-1">Ichonic Inc</p>
                  <p className="text-[#666] text-xs mt-2 leading-relaxed max-w-sm">
                    Built and shipped 3 apps on the Wix App Market. Led
                    front-end development using React, Next.js, and TypeScript
                    while collaborating on Node.js back-end services and
                    third-party API integrations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </AnimatedSection>
  );
};

export default About;
