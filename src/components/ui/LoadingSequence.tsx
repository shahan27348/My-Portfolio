import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface LoadingSequenceProps {
  onComplete: () => void;
}

const LoadingSequence: React.FC<LoadingSequenceProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mRef = useRef<HTMLSpanElement>(null);
  const sRef = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const shutterRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial state
    gsap.set([mRef.current, sRef.current], { yPercent: 110, opacity: 0 });
    gsap.set(lineRef.current, { scaleX: 0, transformOrigin: "left center" });

    // 1. Letters slide up with stagger (clip reveal feel)
    tl.to(
      mRef.current,
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      },
      0.2,
    );

    tl.to(
      sRef.current,
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      },
      0.4,
    );

    // 2. Line draws under the letters
    tl.to(
      lineRef.current,
      {
        scaleX: 1,
        duration: 0.6,
        ease: "power2.inOut",
      },
      0.9,
    );

    // 3. Brief hold
    tl.to({}, { duration: 0.5 });

    // 4. Letters scale up + blur out then shrink
    tl.to([mRef.current, sRef.current], {
      scale: 6,
      opacity: 0,
      filter: "blur(20px)",
      duration: 0.6,
      ease: "power3.in",
      stagger: 0.05,
    });

    // 5. Shutter panels wipe upward
    tl.to(
      shutterRefs.current,
      {
        yPercent: -100,
        duration: 0.7,
        stagger: 0.05,
        ease: "power3.inOut",
        onComplete: () => onComplete(),
      },
      "-=0.2",
    );

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[9999]">
      {/* Shutter panels */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) shutterRefs.current[i] = el;
          }}
          className="absolute top-0 h-full bg-[#0d0d0d]"
          style={{
            left: `${i * (100 / 6)}%`,
            width: `calc(100% / 6 + 1px)`,
            zIndex: 10,
          }}
        />
      ))}

      {/* MS centered */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-0">
        <div className="flex items-end leading-none overflow-hidden">
          <span
            ref={mRef}
            className="inline-block text-white select-none"
            style={{
              fontFamily: "'League Gothic', sans-serif",
              fontSize: "clamp(6rem, 18vw, 16rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            M
          </span>
          <span
            ref={sRef}
            className="inline-block text-white select-none"
            style={{
              fontFamily: "'League Gothic', sans-serif",
              fontSize: "clamp(6rem, 18vw, 16rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            S
          </span>
        </div>

        {/* Underline */}
        <div
          ref={lineRef}
          className="bg-white mt-3"
          style={{ height: "2px", width: "clamp(7rem, 19vw, 17rem)" }}
        />
      </div>
    </div>
  );
};

export default LoadingSequence;
