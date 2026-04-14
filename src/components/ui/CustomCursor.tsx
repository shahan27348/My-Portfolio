import { useEffect, useRef, useState } from "react";

const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  const colorfulColors = [
    "#ec4899", // pink
    "#8b5cf6", // purple
    "#3b82f6", // blue
    "#22c55e", // green
    "#fb923c", // orange
  ];

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    const trail = trailRef.current;
    if (!cursor || !dot || !trail) return;

    let cursorX = -100;
    let cursorY = -100;
    let springX = -100;
    let springY = -100;
    let trailX = -100;
    let trailY = -100;
    let rafId: number;

    const moveCursor = (e: MouseEvent) => {
      cursorX = e.clientX - 16;
      cursorY = e.clientY - 16;
      setIsVisible(true);
      // Instant dot position
      dot.style.transform = `translate(${e.clientX - 4 + 11}px, ${e.clientY - 4 + 11}px)`;
      if (Math.random() > 0.95) {
        setColorIndex((prev) => (prev + 1) % 5);
      }
    };

    const hideCursor = () => setIsVisible(false);

    const animate = () => {
      // Spring-like interpolation for outer ring
      springX += (cursorX - springX) * 0.15;
      springY += (cursorY - springY) * 0.15;
      cursor.style.transform = `translate(${springX}px, ${springY}px)`;

      // Slower interpolation for trail
      trailX += (cursorX - trailX) * 0.08;
      trailY += (cursorY - trailY) * 0.08;
      trail.style.transform = `translate(${trailX - 8}px, ${trailY - 8}px)`;

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseleave", hideCursor);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseleave", hideCursor);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const cursorColor = colorfulColors[colorIndex];

  return (
    <>
      {/* Main cursor ring */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference"
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        <div
          className="w-full h-full rounded-full border-2"
          style={{ borderColor: cursorColor }}
        />
      </div>

      {/* Cursor dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-[9999] mix-blend-difference"
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{ backgroundColor: cursorColor }}
        />
      </div>

      {/* Trailing effect */}
      <div
        ref={trailRef}
        className="fixed top-0 left-0 w-16 h-16 pointer-events-none z-[9998]"
        style={{ opacity: isVisible ? 0.3 : 0 }}
      >
        <div
          className="w-full h-full rounded-full blur-xl"
          style={{ backgroundColor: cursorColor, opacity: 0.2 }}
        />
      </div>
    </>
  );
};

export default CustomCursor;
