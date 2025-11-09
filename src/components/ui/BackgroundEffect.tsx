import React, { useRef, useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import NewspaperBackground from "./NewspaperBackground";

const BackgroundEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { themeStyle } = useTheme();

  useEffect(() => {
    // Skip canvas animation for newspaper theme
    if (themeStyle === "newspaper") return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const style = getComputedStyle(canvas);
    const particleColorRgb = style
      .getPropertyValue("--color-slate-dark-rgb")
      .trim();
    const accentColorRgb = style.getPropertyValue("--color-accent-rgb").trim();

    let animationFrameId: number;
    let particles: Particle[] = [];
    const mouse = { x: -200, y: -200 };

    // Colorful theme: multiple colors for particles
    const colorfulParticles = [
      "236, 72, 153", // pink
      "139, 92, 246", // purple
      "59, 130, 246", // blue
      "34, 197, 94", // green
      "251, 146, 60", // orange
    ];

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor(
        x: number,
        y: number,
        size: number,
        speedX: number,
        speedY: number
      ) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
        // Assign random color for colorful theme
        this.color =
          themeStyle === "colorful"
            ? colorfulParticles[
                Math.floor(Math.random() * colorfulParticles.length)
              ]
            : particleColorRgb;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = `rgba(${this.color}, 0.6)`;
        ctx.fill();
      }

      update() {
        if (!canvas) return;
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }
        this.x += this.speedX;
        this.y += this.speedY;
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      const numberOfParticles = (canvas.height * canvas.width) / 11000;
      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 1.5 + 1;
        const x = Math.random() * (innerWidth - size * 2) + size;
        const y = Math.random() * (innerHeight - size * 2) + size;
        const speedX = Math.random() * 0.4 - 0.2;
        const speedY = Math.random() * 0.4 - 0.2;
        if (speedX !== 0 || speedY !== 0) {
          particles.push(new Particle(x, y, size, speedX, speedY));
        }
      }
    };

    const connect = () => {
      if (!ctx) return;
      const connectDistance = 140;
      const connectDistanceSq = connectDistance * connectDistance;
      const mouseConnectDistance = 160;
      const mouseConnectDistanceSq =
        mouseConnectDistance * mouseConnectDistance;

      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distanceSq = dx * dx + dy * dy;

          if (distanceSq < connectDistanceSq) {
            const opacityValue = 1 - distanceSq / connectDistanceSq;
            // Colorful theme: gradient line between particles
            if (themeStyle === "colorful") {
              const gradient = ctx.createLinearGradient(
                particles[a].x,
                particles[a].y,
                particles[b].x,
                particles[b].y
              );
              gradient.addColorStop(
                0,
                `rgba(${particles[a].color}, ${opacityValue * 0.3})`
              );
              gradient.addColorStop(
                1,
                `rgba(${particles[b].color}, ${opacityValue * 0.3})`
              );
              ctx.strokeStyle = gradient;
            } else {
              ctx.strokeStyle = `rgba(${particleColorRgb}, ${
                opacityValue * 0.2
              })`;
            }
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }

      for (let i = 0; i < particles.length; i++) {
        const dx = particles[i].x - mouse.x;
        const dy = particles[i].y - mouse.y;
        const mouseDistanceSq = dx * dx + dy * dy;
        if (mouseDistanceSq < mouseConnectDistanceSq) {
          const opacityValue = 1 - mouseDistanceSq / mouseConnectDistanceSq;
          ctx.strokeStyle = `rgba(${accentColorRgb}, ${opacityValue * 0.3})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      init();
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseOut = () => {
      mouse.x = -200;
      mouse.y = -200;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);

    init();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [themeStyle]);

  // Render newspaper background for newspaper theme
  if (themeStyle === "newspaper") {
    return <NewspaperBackground />;
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0"
      aria-hidden="true"
    />
  );
};

export default BackgroundEffect;
