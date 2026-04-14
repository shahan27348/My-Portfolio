import { useRef, useState, ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface Card3DProps {
  children: ReactNode;
  className?: string;
}

const Card3D: React.FC<Card3DProps> = ({ children, className = "" }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useGSAP(
    () => {
      const card = cardRef.current;
      if (!card) return;

      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        gsap.to(card, {
          rotateX: y * -15,
          rotateY: x * 15,
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const handleMouseEnter = () => setIsHovered(true);

      const handleMouseLeave = () => {
        setIsHovered(false);
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          duration: 0.5,
          ease: "elastic.out(1, 0.5)",
        });
      };

      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    },
    { scope: cardRef },
  );

  return (
    <div
      ref={cardRef}
      className={`relative ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-accent/20 rounded-lg blur-xl -z-10 transition-opacity duration-300" />
      )}
      <div style={{ transform: "translateZ(50px)" }}>{children}</div>
    </div>
  );
};

export default Card3D;
