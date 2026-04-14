import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TerminalWindowProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const TerminalWindow: React.FC<TerminalWindowProps> = ({
  title = "terminal",
  children,
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      gsap.from(ref.current, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: ref },
  );

  return (
    <div
      ref={ref}
      className={`bg-secondary/50 backdrop-blur-sm rounded-lg overflow-hidden border border-tertiary shadow-xl ${className}`}
    >
      {/* Terminal Header */}
      <div className="bg-tertiary/50 px-4 py-3 flex items-center justify-between border-b border-tertiary/50">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="text-slate-dark text-sm font-mono">{title}</div>
        <div className="w-20" />
      </div>

      {/* Terminal Content */}
      <div className="p-6 font-mono text-sm md:text-base">{children}</div>
    </div>
  );
};

export default TerminalWindow;
