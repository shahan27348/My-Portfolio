import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxLayerProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export const ParallaxLayer: React.FC<ParallaxLayerProps> = ({
  children,
  speed = 0.5,
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      gsap.to(ref.current, {
        y: () => -100 * speed,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        },
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

interface Float3DProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export const Float3D: React.FC<Float3DProps> = ({
  children,
  delay = 0,
  duration = 3,
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      gsap.to(ref.current, {
        y: -20,
        rotateX: 5,
        rotateY: 5,
        duration,
        delay,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: ref },
  );

  return (
    <div
      ref={ref}
      className={className}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
};

interface Tilt3DProps {
  children: React.ReactNode;
  className?: string;
}

export const Tilt3D: React.FC<Tilt3DProps> = ({ children, className = "" }) => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const handleMouseMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        gsap.to(el, {
          rotateX: ((y - centerY) / centerY) * -10,
          rotateY: ((x - centerX) / centerX) * 10,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(el, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.5)",
        });
      };

      el.addEventListener("mousemove", handleMouseMove);
      el.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        el.removeEventListener("mousemove", handleMouseMove);
        el.removeEventListener("mouseleave", handleMouseLeave);
      };
    },
    { scope: ref },
  );

  return (
    <div
      ref={ref}
      className={className}
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
    >
      {children}
    </div>
  );
};

interface ScaleOnScrollProps {
  children: React.ReactNode;
  className?: string;
}

export const ScaleOnScroll: React.FC<ScaleOnScrollProps> = ({
  children,
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      gsap.fromTo(
        ref.current,
        { scale: 0.8, opacity: 0.5 },
        {
          scale: 1,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom",
            end: "center center",
            scrub: 0.5,
          },
        },
      );
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

interface RotateOnScrollProps {
  children: React.ReactNode;
  direction?: "x" | "y" | "z";
  className?: string;
}

export const RotateOnScroll: React.FC<RotateOnScrollProps> = ({
  children,
  direction = "y",
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      const prop =
        direction === "x"
          ? "rotateX"
          : direction === "y"
            ? "rotateY"
            : "rotateZ";

      gsap.to(ref.current, {
        [prop]: 360,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};
