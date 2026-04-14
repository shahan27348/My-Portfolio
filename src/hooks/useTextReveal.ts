import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealOptions {
  type?: "chars" | "words" | "lines";
  stagger?: number;
  duration?: number;
  y?: number;
  scrollTrigger?: boolean;
}

export const useTextReveal = (options: TextRevealOptions = {}) => {
  const {
    type = "chars",
    stagger = 0.03,
    duration = 0.8,
    y = 40,
    scrollTrigger = true,
  } = options;

  const elementRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!elementRef.current) return;

      const split = new SplitType(elementRef.current, { types: type });
      const targets = split[type] || [];

      gsap.set(targets, { y, opacity: 0 });

      const animationConfig: gsap.TweenVars = {
        y: 0,
        opacity: 1,
        stagger,
        duration,
        ease: "power4.out",
      };

      if (scrollTrigger) {
        animationConfig.scrollTrigger = {
          trigger: elementRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        };
      }

      gsap.to(targets, animationConfig);

      return () => {
        split.revert();
      };
    },
    { scope: elementRef },
  );

  return elementRef;
};
