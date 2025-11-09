import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HomeNew from "@/components/sections/HomeNew";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import SkillsNew from "@/components/sections/SkillsNew";
import ProjectsNew from "@/components/sections/ProjectsNew";
import Achievements from "@/components/sections/Achievements";
import Courses from "@/components/sections/Courses";
import MicroSaaS from "@/components/sections/MicroSaaS";
import Contact from "@/components/sections/Contact";
import BackgroundEffect from "@/components/ui/BackgroundEffect";
import CodeEditorBackground from "@/components/ui/CodeEditorBackground";
import Scene3D from "@/components/3d/Scene3D";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import ChatAssistant from "@/components/ui/ChatAssistant";
import ErrorBoundary from "@/components/shared/ErrorBoundary";
import { ThemeProvider } from "@/contexts/ThemeContext";

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <div className="bg-primary text-slate-light font-mono leading-relaxed antialiased selection:bg-accent selection:text-primary overflow-x-hidden">
          {/* Code Editor Background Effect */}
          <CodeEditorBackground />
          {/* Molecule/Particle Effect (Canvas) */}
          <BackgroundEffect />
          {/* 3D Animated Background */}
          <Scene3D />
          {/* Custom Cursor */}
          <CustomCursor />
          <div className="relative z-10">
            <Navbar />
            <main className="container mx-auto px-6 md:px-12 lg:px-24">
              <HomeNew />
              <About />
              <Experience />
              <SkillsNew />
              <ProjectsNew />
              <Achievements />
              <Courses />
              <MicroSaaS />
              <Contact />
            </main>
            <Footer />
            <ScrollToTopButton />
            <ChatAssistant />
          </div>
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
