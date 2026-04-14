import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface LoadingSequenceProps {
  onComplete: () => void;
}

const LoadingSequence: React.FC<LoadingSequenceProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const logoSvgRef = useRef<SVGSVGElement>(null);
  const logoTextRef = useRef<HTMLHeadingElement>(null);
  const ringRef = useRef<SVGCircleElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const shutterRefs = useRef<HTMLDivElement[]>([]);
  const [phase, setPhase] = useState<"loading" | "reveal" | "exit">("loading");

  useEffect(() => {
    const tl = gsap.timeline();
    const counterObj = { val: 0 };

    // --- Phase 1: Loading counter 0→100 with ring + bar ---
    // Animate the circular progress ring
    const ringEl = ringRef.current;
    const circumference = 2 * Math.PI * 54; // radius=54

    if (ringEl) {
      ringEl.style.strokeDasharray = `${circumference}`;
      ringEl.style.strokeDashoffset = `${circumference}`;
    }

    // Logo SVG path draw-in
    if (logoSvgRef.current) {
      const paths = logoSvgRef.current.querySelectorAll(".logo-letter");
      paths.forEach((path) => {
        const p = path as SVGPathElement;
        const len = p.getTotalLength();
        gsap.set(p, {
          strokeDasharray: len,
          strokeDashoffset: len,
          fill: "transparent",
          stroke: "#ffffff",
          strokeWidth: 2,
        });
      });

      // Draw in the letter paths
      tl.to(
        logoSvgRef.current.querySelectorAll(".logo-letter"),
        {
          strokeDashoffset: 0,
          duration: 1.5,
          stagger: 0.2,
          ease: "power2.inOut",
        },
        0,
      );

      // Fill in the letters after draw completes
      tl.to(
        logoSvgRef.current.querySelectorAll(".logo-letter"),
        {
          fill: "#ffffff",
          stroke: "transparent",
          duration: 0.5,
          stagger: 0.1,
          ease: "power1.in",
        },
        1.2,
      );
    }

    // Counter animation 0→100
    tl.to(
      counterObj,
      {
        val: 100,
        duration: 2.2,
        ease: "power2.inOut",
        onUpdate: () => {
          const v = Math.round(counterObj.val);
          if (counterRef.current) {
            counterRef.current.textContent = String(v);
          }
          // Update ring
          if (ringEl) {
            const offset = circumference - (v / 100) * circumference;
            ringEl.style.strokeDashoffset = `${offset}`;
          }
          // Update bottom bar
          if (progressBarRef.current) {
            progressBarRef.current.style.width = `${v}%`;
          }
        },
      },
      0,
    );

    // Logo text fade in
    if (logoTextRef.current) {
      tl.from(
        logoTextRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        0.8,
      );
    }

    // Tagline fade in
    if (taglineRef.current) {
      tl.from(
        taglineRef.current,
        {
          y: 10,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        1.4,
      );
    }

    // --- Phase 2: Brief hold, then logo pulse + shutter exit ---
    tl.to(
      {},
      {
        duration: 0.3,
        onComplete: () => setPhase("reveal"),
      },
    );

    // Logo pulse at completion
    if (logoSvgRef.current) {
      tl.to(logoSvgRef.current, {
        scale: 1.15,
        duration: 0.2,
        ease: "power2.out",
        yoyo: true,
        repeat: 1,
      });
    }

    // Counter + tagline fade out
    tl.to(
      [
        counterRef.current,
        taglineRef.current,
        progressBarRef.current?.parentElement,
      ],
      {
        opacity: 0,
        duration: 0.3,
        ease: "power1.in",
      },
      "-=0.2",
    );

    // --- Phase 3: Shutter panels slide up (staggered) ---
    tl.add(() => setPhase("exit"));
    tl.to(shutterRefs.current, {
      yPercent: -100,
      duration: 0.7,
      stagger: 0.06,
      ease: "power3.inOut",
    });

    // Complete the loading sequence
    tl.add(() => {
      onComplete();
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999]"
      style={{ pointerEvents: phase === "exit" ? "none" : "auto" }}
    >
      {/* Shutter panels (behind content, revealed at exit) */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) shutterRefs.current[i] = el;
          }}
          className="absolute top-0 h-full bg-black"
          style={{
            left: `${i * 12.5}%`,
            width: `12.6%`, // slight overlap to avoid gaps
            zIndex: 10,
          }}
        />
      ))}

      {/* Main loading content (centered) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
        {/* Circular progress ring + logo */}
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 mb-6 flex items-center justify-center">
          {/* Ring background */}
          <svg
            className="absolute inset-0 w-full h-full -rotate-90"
            viewBox="0 0 120 120"
          >
            <circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="2"
            />
            <circle
              ref={ringRef}
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="transition-none"
            />
          </svg>

          {/* MS Logo SVG */}
          <svg
            ref={logoSvgRef}
            width="80"
            height="50"
            viewBox="0 0 100 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative z-10"
          >
            {/* Letter M */}
            <path
              className="logo-letter"
              d="M5 55 L5 10 L20 35 L35 10 L35 55"
            />
            {/* Letter S */}
            <path
              className="logo-letter"
              d="M55 18 C55 10, 95 10, 95 22 C95 35, 55 30, 55 42 C55 55, 95 55, 95 45"
            />
          </svg>
        </div>

        {/* Logo name */}
        <h1
          ref={logoTextRef}
          className="text-white text-2xl sm:text-3xl font-bold tracking-[0.3em] uppercase mb-2"
        >
          Muhammad Shahan
        </h1>

        {/* Tagline */}
        <p
          ref={taglineRef}
          className="text-white/40 text-sm font-mono tracking-widest mb-10"
        >
          Full Stack Developer
        </p>

        {/* Counter */}
        <div className="flex items-baseline gap-1 mb-6">
          <span
            ref={counterRef}
            className="text-white text-6xl sm:text-7xl font-black tabular-nums tracking-tight"
            style={{ fontVariantNumeric: "tabular-nums" }}
          >
            0
          </span>
          <span className="text-white/30 text-2xl sm:text-3xl font-light">
            %
          </span>
        </div>

        {/* Bottom progress bar */}
        <div className="w-64 sm:w-80 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div
            ref={progressBarRef}
            className="h-full bg-white rounded-full"
            style={{ width: "0%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingSequence;
