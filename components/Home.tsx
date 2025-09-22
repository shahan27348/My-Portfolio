import React, { useRef } from 'react';
import useTypewriter from '../hooks/useTypewriter';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Home: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  // Re-trigger animation every time the section is visible
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.6 }, false);

  const nameText = "Muhammad Shahan.";
  const roleText = "I build things for the web.";
  
  const { displayText: displayName, isFinished: nameIsFinished } = useTypewriter(nameText, 100, isVisible);
  const { displayText: displayRole, isFinished: roleIsFinished } = useTypewriter(roleText, 75, nameIsFinished && isVisible);

  return (
    <section id="home" ref={sectionRef} className="min-h-screen flex items-center justify-center">
      <div className="text-center md:text-left max-w-4xl">
        <p className="text-accent font-mono text-lg mb-4">Hi, my name is</p>
        
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-light mb-4 min-h-[2.5rem] sm:min-h-[3.75rem] md:min-h-[4.5rem]">
          <span className={isVisible && !nameIsFinished ? 'typewriter-cursor' : ''}>{displayName}</span>
        </h1>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-dark mb-8 min-h-[5rem] sm:min-h-[3.75rem] md:min-h-[4.5rem]">
          {nameIsFinished && <span className={isVisible && !roleIsFinished ? 'typewriter-cursor' : ''}>{displayRole}</span>}
        </h2>

        <div className={`transition-all duration-700 ease-in-out ${roleIsFinished && isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-slate-dark max-w-xl mx-auto md:mx-0 mb-8 text-lg">
              I’m a senior Full Stack Developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Ichonic Inc.
            </p>
            <a 
              href="/assets/pdf.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-transparent text-accent font-mono border border-accent rounded px-8 py-4 hover:bg-accent/10 transition-colors duration-300 text-lg"
            >
              Resume
            </a>
        </div>
      </div>
    </section>
  );
};

export default Home;