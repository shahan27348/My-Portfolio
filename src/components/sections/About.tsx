import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { useTheme } from "@/contexts/ThemeContext";

const SectionTitle: React.FC<{ number: string; title: string }> = ({
  number,
  title,
}) => {
  const { themeStyle } = useTheme();

  // Colorful theme: gradient text
  const getColorfulClass = () => {
    const gradients = [
      "bg-gradient-to-r from-pink-500 to-purple-500",
      "bg-gradient-to-r from-purple-500 to-blue-500",
      "bg-gradient-to-r from-blue-500 to-green-500",
      "bg-gradient-to-r from-green-500 to-yellow-500",
      "bg-gradient-to-r from-orange-500 to-red-500",
    ];
    const index = parseInt(number) % gradients.length;
    return gradients[index];
  };

  return (
    <h2
      className={`text-3xl font-bold mb-8 flex items-center whitespace-nowrap ${
        themeStyle === "newspaper"
          ? "font-serif newspaper-heading text-slate-light"
          : themeStyle === "colorful"
          ? `font-bold ${getColorfulClass()} bg-clip-text text-transparent`
          : "font-mono text-slate-light"
      }`}
    >
      {themeStyle === "coding" && (
        <>
          <span className="text-accent text-2xl mr-2">{number}.</span>
          <span className="text-slate-dark mr-2">//</span>
        </>
      )}
      {themeStyle === "newspaper" && (
        <span className="text-accent text-2xl mr-2">◆</span>
      )}
      {title}
      <span className="block w-full max-w-xs h-px bg-tertiary ml-6"></span>
    </h2>
  );
};

const About: React.FC = () => {
  const { themeStyle } = useTheme();

  return (
    <AnimatedSection>
      <section id="about" className="py-24">
        <SectionTitle number="01" title="About Me" />
        <div className="grid gap-12 grid-cols-1 lg:grid-cols-2">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`text-base md:text-lg space-y-4 leading-relaxed ${
                themeStyle === "newspaper"
                  ? "text-slate-light font-serif text-justify"
                  : "text-slate-dark"
              }`}
            >
              <p>
                {themeStyle === "coding" && (
                  <span className="text-accent font-mono">{">"}</span>
                )}{" "}
                Hello! I'm Shahan, a Full Stack Developer based in Lahore,
                Pakistan with a passion for creating intuitive, dynamic user
                experiences. My journey into web development started back in
                2023 when I decided to try editing a custom Tumblr theme — turns
                out hacking together a custom reblog button taught me a lot
                about React!
              </p>
              <p>
                {themeStyle === "coding" && (
                  <span className="text-accent font-mono">{">"}</span>
                )}{" "}
                Fast-forward to today, and I've had the privilege of working at
                a start-up. My main focus these days is building accessible,
                inclusive products and digital experiences at{" "}
                <span
                  className={
                    themeStyle === "newspaper"
                      ? "text-accent font-semibold"
                      : "text-accent font-mono"
                  }
                >
                  Ichonic Inc
                </span>{" "}
                for a variety of clients.
              </p>
              <p>
                {themeStyle === "coding" && (
                  <span className="text-accent font-mono">{">"}</span>
                )}{" "}
                I'm a firm believer in continuous learning and I'm always on the
                lookout for new technologies and frameworks to explore. When I'm
                not at the computer, I'm usually exploring the city, playing{" "}
                <span
                  className={
                    themeStyle === "newspaper"
                      ? "text-accent font-semibold"
                      : "text-accent font-mono"
                  }
                >
                  COD 4 or PUBG Mobile
                </span>
                , trying new restaurants, and sometimes just relaxing.
              </p>
            </motion.div>
          </div>

          {/* Image - Coding theme */}
          {themeStyle === "coding" && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-center items-start"
            >
              <div className="relative group max-w-md">
                <div className="absolute inset-0 bg-accent/20 rounded-lg transform transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2 blur-sm"></div>
                <img
                  src="/images/coding.png"
                  alt="Coding"
                  className="relative w-full h-auto object-cover rounded-lg transform transition-transform duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2 border border-accent/30 shadow-xl shadow-accent/20"
                />
              </div>
            </motion.div>
          )}

          {/* Image - Colorful theme */}
          {themeStyle === "colorful" && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-center items-start"
            >
              <div className="relative group max-w-md">
                <div className="absolute inset-0 bg-gradient-to-r from-accent via-purple-500 to-blue-500 rounded-2xl transform transition-transform duration-300 group-hover:scale-105 blur-sm"></div>
                <img
                  src="/images/colorfull.png"
                  alt="Colorful"
                  className="relative w-full h-auto object-cover rounded-2xl transform transition-transform duration-300 group-hover:scale-105 shadow-2xl"
                />
              </div>
            </motion.div>
          )}

          {/* Image - Newspaper theme */}
          {themeStyle === "newspaper" && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-center items-start"
            >
              <div className="relative group max-w-sm">
                <div className="absolute inset-0 newspaper-border border-accent transform transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                <img
                  src="/images/newspaper.png"
                  alt="Newspaper"
                  className="relative w-full h-auto object-cover transform transition-transform duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2 newspaper-border border-tertiary"
                />
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </AnimatedSection>
  );
};

export default About;
