import React, { useState, useEffect } from "react";

interface TypingCodeAnimationProps {
  code: string[];
  speed?: number;
  className?: string;
}

const TypingCodeAnimation: React.FC<TypingCodeAnimationProps> = ({
  code,
  speed = 50,
  className = "",
}) => {
  const [displayedCode, setDisplayedCode] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex >= code.length) return;

    const currentLine = code[currentLineIndex];

    if (currentCharIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayedCode((prev) => {
          const newCode = [...prev];
          if (newCode[currentLineIndex]) {
            newCode[currentLineIndex] += currentLine[currentCharIndex];
          } else {
            newCode[currentLineIndex] = currentLine[currentCharIndex];
          }
          return newCode;
        });
        setCurrentCharIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (currentLineIndex < code.length - 1) {
      const timeout = setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }, speed * 5);

      return () => clearTimeout(timeout);
    }
  }, [currentCharIndex, currentLineIndex, code, speed]);

  const getSyntaxColor = (line: string) => {
    if (!line) return "text-slate-light";

    if (
      line.includes("const") ||
      line.includes("let") ||
      line.includes("var")
    ) {
      return "text-purple-400";
    }
    if (
      line.includes("function") ||
      line.includes("class") ||
      line.includes("export")
    ) {
      return "text-blue-400";
    }
    if (line.includes("return")) {
      return "text-pink-400";
    }
    if (line.includes("//")) {
      return "text-gray-500 italic";
    }
    return "text-green-400";
  };

  return (
    <div className={`font-mono text-sm md:text-base ${className}`}>
      {displayedCode.map((line, index) => (
        <div
          key={index}
          className={`${getSyntaxColor(line || "")} leading-relaxed`}
        >
          <span className="text-slate-dark mr-4 select-none">
            {(index + 1).toString().padStart(2, "0")}
          </span>
          {line || ""}
          {index === currentLineIndex &&
            currentCharIndex === (line?.length || 0) && (
              <span className="inline-block w-2 h-5 bg-accent ml-1 animate-pulse" />
            )}
        </div>
      ))}
    </div>
  );
};

export default TypingCodeAnimation;
