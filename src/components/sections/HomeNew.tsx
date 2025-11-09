import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import useTypewriter from "@/hooks/useTypewriter";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import TypingCodeAnimation from "@/components/ui/TypingCodeAnimation";
import TerminalWindow from "@/components/ui/TerminalWindow";
import { useTheme } from "@/contexts/ThemeContext";

const Home: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { themeStyle } = useTheme();
  const isVisible = useIntersectionObserver(
    sectionRef,
    { threshold: 0.6 },
    false
  );

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  const nameText = "Muhammad Shahan.";
  const roleText = "I build things for the web.";

  const codeSnippet = [
    "// Welcome to my portfolio",
    "const developer = {",
    '  name: "Muhammad Shahan",',
    '  role: "Full Stack Developer",',
    '  location: "Pakistan",',
    '  skills: ["React", "Node.js", "TypeScript", "MongoDB"],',
    '  passion: () => "Building amazing digital experiences"',
    "};",
    "",
    "function createInnovation() {",
    "  const ideas = brainstorm();",
    "  const solutions = ideas.map(idea => implement(idea));",
    "  return solutions.filter(s => s.isAwesome());",
    "}",
  ];

  const { displayText: displayName, isFinished: nameIsFinished } =
    useTypewriter(nameText, 100, isVisible);
  const { displayText: displayRole, isFinished: roleIsFinished } =
    useTypewriter(roleText, 75, nameIsFinished && isVisible);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* 3D Floating Background Elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y, opacity }}
      >
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 360],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      <motion.div
        className="text-center md:text-left relative z-10 px-6 max-w-4xl"
        style={{ scale }}
      >
        {/* Left side - Text content */}
        <div>
          <motion.p
            className={`text-lg mb-4 ${
              themeStyle === "newspaper"
                ? "font-serif"
                : "text-accent font-mono"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {themeStyle === "coding" && (
              <span className="text-slate-dark">&gt;</span>
            )}
            {themeStyle === "newspaper"
              ? "Greetings, Reader"
              : " Hi, my name is"}
          </motion.p>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-light mb-4 min-h-[2.5rem] sm:min-h-[3.75rem] md:min-h-[4.5rem]"
            initial={{ opacity: 0, y: 20, rotateX: -15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <span
              className={
                isVisible && !nameIsFinished ? "typewriter-cursor" : ""
              }
            >
              {displayName}
            </span>
          </motion.h1>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-dark mb-8 min-h-[4rem] sm:min-h-[3rem] md:min-h-[4rem]"
            initial={{ opacity: 0, y: 20, rotateX: -15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {nameIsFinished && (
              <span
                className={
                  isVisible && !roleIsFinished ? "typewriter-cursor" : ""
                }
              >
                {displayRole}
              </span>
            )}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              roleIsFinished && isVisible
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p
              className={`max-w-xl mx-auto md:mx-0 mb-8 text-base md:text-lg leading-relaxed ${
                themeStyle === "newspaper"
                  ? "font-serif text-slate-light text-justify"
                  : "text-slate-dark"
              }`}
            >
              {themeStyle === "coding" && (
                <span className="text-accent font-mono">//</span>
              )}{" "}
              I'm a senior Full Stack Developer specializing in building
              exceptional digital experiences. Currently focused on creating
              accessible, human-centered products.
            </p>
            <motion.a
              href="/assets/pdf.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block bg-transparent text-accent border border-accent px-8 py-4 hover:bg-accent/10 transition-colors duration-300 text-lg ${
                themeStyle === "coding"
                  ? "font-mono rounded"
                  : themeStyle === "colorful"
                  ? "colorful-button rounded-full font-bold"
                  : "font-serif newspaper-border"
              }`}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px var(--color-accent)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {themeStyle === "coding" && (
                <span className="text-slate-dark mr-2">$</span>
              )}
              {themeStyle === "newspaper" && <span className="mr-2">📄</span>}
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
