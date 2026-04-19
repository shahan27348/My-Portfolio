import React, { ReactNode, useEffect, useRef } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number; // optional extra delay in ms
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  delay = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("is-visible");
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.08 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className="reveal-section">
      {children}
    </div>
  );
};

export default AnimatedSection;
