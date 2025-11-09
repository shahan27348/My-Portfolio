import React from "react";
import { cn } from "@/utils/cn";
import { useTheme } from "@/contexts/ThemeContext";

interface SectionTitleProps {
  number?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  number,
  title,
  subtitle,
  className,
}) => {
  const { themeStyle } = useTheme();

  // Colorful theme: gradient text based on section number
  const getColorfulClass = () => {
    const gradients = [
      "bg-gradient-to-r from-pink-500 via-rose-500 to-red-500",
      "bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500",
      "bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500",
      "bg-gradient-to-r from-green-500 via-emerald-500 to-lime-500",
      "bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500",
      "bg-gradient-to-r from-red-500 via-pink-500 to-purple-500",
    ];
    const index = number ? parseInt(number) % gradients.length : 0;
    return gradients[index];
  };

  return (
    <div className="mb-12">
      <h2
        className={cn(
          "text-3xl font-bold flex items-center whitespace-nowrap",
          themeStyle === "newspaper"
            ? "font-serif newspaper-heading text-slate-light"
            : themeStyle === "colorful"
            ? `font-bold ${getColorfulClass()} bg-clip-text text-transparent`
            : "font-mono text-slate-light",
          className
        )}
      >
        {themeStyle === "coding" && number && (
          <>
            <span className="text-accent text-2xl mr-2">{number}.</span>
            <span className="text-slate-dark mr-2">//</span>
          </>
        )}
        {themeStyle === "newspaper" && (
          <span className="text-accent text-2xl mr-2">◆</span>
        )}
        {themeStyle === "colorful" && number && (
          <span className="text-accent text-2xl mr-2 bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
            {number}.
          </span>
        )}
        {title}
        <span
          className={`block w-full max-w-xs h-px ml-6 ${
            themeStyle === "colorful"
              ? "bg-gradient-to-r from-accent to-purple-500"
              : "bg-tertiary"
          }`}
        ></span>
      </h2>
      {subtitle && (
        <p
          className={`text-lg mt-2 ${
            themeStyle === "colorful"
              ? "text-purple-500 font-semibold"
              : "text-accent"
          } ${
            themeStyle === "newspaper"
              ? "font-serif"
              : themeStyle === "colorful"
              ? "font-bold"
              : "font-mono"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
