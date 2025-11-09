import React, { useEffect, useRef } from "react";
import { useTheme } from "@/contexts/ThemeContext";

const CodeEditorBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { themeStyle } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Code lines to display
    const codeSnippets = [
      "const developer = {",
      '  name: "Muhammad Shahan",',
      '  role: "Full Stack Developer",',
      '  skills: ["React", "Node.js", "TypeScript"],',
      '  passion: "Building amazing things",',
      "};",
      "",
      "function createMagic() {",
      "  const ideas = brainstorm();",
      "  const code = ideas.map(i => implement(i));",
      "  return code.filter(c => c.isAwesome);",
      "}",
      "",
      "class Portfolio extends React.Component {",
      "  render() {",
      "    return <Amazing projects={this.projects} />;",
      "  }",
      "}",
      "",
      "export default Portfolio;",
    ];

    // Line numbers and code lines
    const lines: Array<{
      number: number;
      code: string;
      y: number;
      opacity: number;
      speed: number;
    }> = [];
    const padding = 60;

    // Initialize lines
    for (let i = 0; i < 50; i++) {
      lines.push({
        number: Math.floor(Math.random() * 999) + 1,
        code: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        y: Math.random() * canvas.height,
        opacity: Math.random() * 0.3 + 0.05,
        speed: Math.random() * 0.3 + 0.1,
      });
    }

    // Get CSS custom properties for colors
    const getColor = () => {
      const isDark = document.documentElement.classList.contains("dark");
      return isDark ? "rgba(100, 255, 218, " : "rgba(8, 102, 255, ";
    };

    const getSecondaryColor = () => {
      const isDark = document.documentElement.classList.contains("dark");
      return isDark ? "rgba(136, 146, 176, " : "rgba(101, 103, 107, ";
    };

    // Animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid lines (like code editor)
      ctx.strokeStyle = getSecondaryColor() + "0.03)";
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = 0; x < canvas.width; x += 100) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Draw code lines
      lines.forEach((line) => {
        // Line number
        ctx.fillStyle = getSecondaryColor() + line.opacity + ")";
        ctx.font = '14px "Fira Code", "Courier New", monospace';
        ctx.textAlign = "right";
        ctx.fillText(
          line.number.toString().padStart(3, " "),
          padding - 10,
          line.y
        );

        // Code
        ctx.fillStyle = getColor() + line.opacity + ")";
        ctx.textAlign = "left";
        ctx.fillText(line.code, padding, line.y);

        // Move line down
        line.y += line.speed;

        // Reset line if it goes off screen
        if (line.y > canvas.height + 50) {
          line.y = -50;
          line.number = Math.floor(Math.random() * 999) + 1;
          line.code =
            codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [themeStyle]);

  // Only render in coding theme
  if (themeStyle !== "coding") {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-100"
      style={{ zIndex: 0 }}
    />
  );
};

export default CodeEditorBackground;
