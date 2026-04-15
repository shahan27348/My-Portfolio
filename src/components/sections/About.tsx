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

const About: React.FC = () => {
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
      </section>
    </AnimatedSection>
  );
};

export default About;
