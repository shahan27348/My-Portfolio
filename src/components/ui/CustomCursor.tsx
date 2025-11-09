import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { themeStyle } = useTheme();
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Colorful cursor colors
  const [colorIndex, setColorIndex] = useState(0);
  const colorfulColors = [
    "#ec4899", // pink
    "#8b5cf6", // purple
    "#3b82f6", // blue
    "#22c55e", // green
    "#fb923c", // orange
  ];

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      setIsVisible(true);
      // Change color on movement for colorful theme
      if (themeStyle === "colorful" && Math.random() > 0.95) {
        setColorIndex((prev) => (prev + 1) % colorfulColors.length);
      }
    };

    const hideCursor = () => setIsVisible(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseleave", hideCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseleave", hideCursor);
    };
  }, [cursorX, cursorY, themeStyle, colorfulColors.length]);

  const cursorColor =
    themeStyle === "colorful"
      ? colorfulColors[colorIndex]
      : "var(--color-accent)";

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div
          className="w-full h-full rounded-full border-2"
          style={{ borderColor: cursorColor }}
        />
      </motion.div>

      {/* Cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          opacity: isVisible ? 1 : 0,
          translateX: 11,
          translateY: 11,
        }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{ backgroundColor: cursorColor }}
        />
      </motion.div>

      {/* Trailing effect */}
      <motion.div
        className="fixed top-0 left-0 w-16 h-16 pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: isVisible ? 0.3 : 0,
          translateX: -8,
          translateY: -8,
        }}
      >
        <div
          className="w-full h-full rounded-full blur-xl"
          style={{ backgroundColor: cursorColor, opacity: 0.2 }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
