import React, { useRef, ReactNode } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface AnimatedSectionProps {
  children: ReactNode;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;