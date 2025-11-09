import React from "react";
import { motion } from "framer-motion";

interface CodeBlockProps {
  code: string[];
  language?: string;
  fileName?: string;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = "tsx",
  fileName = "component.tsx",
  className = "",
}) => {
  const getLanguageColor = () => {
    switch (language.toLowerCase()) {
      case "tsx":
      case "typescript":
        return "text-blue-400";
      case "jsx":
      case "javascript":
        return "text-yellow-400";
      case "python":
        return "text-green-400";
      case "css":
        return "text-purple-400";
      default:
        return "text-accent";
    }
  };

  const getSyntaxHighlight = (line: string, index: number) => {
    // Simple syntax highlighting
    const keywords = [
      "const",
      "let",
      "var",
      "function",
      "class",
      "export",
      "import",
      "from",
      "return",
      "if",
      "else",
      "for",
      "while",
    ];
    const strings = line.match(/["'`][^"'`]*["'`]/g) || [];
    const comments = line.match(/\/\/.*/g) || [];

    let processedLine = line;

    // Highlight strings
    strings.forEach((str, i) => {
      processedLine = processedLine.replace(str, `__STRING_${i}__`);
    });

    // Highlight comments
    comments.forEach((comment, i) => {
      processedLine = processedLine.replace(comment, `__COMMENT_${i}__`);
    });

    // Highlight keywords
    keywords.forEach((keyword) => {
      const regex = new RegExp(`\\b${keyword}\\b`, "g");
      processedLine = processedLine.replace(regex, `__KEYWORD_${keyword}__`);
    });

    // Reconstruct with colors
    let finalLine = processedLine;

    // Replace keywords
    keywords.forEach((keyword) => {
      finalLine = finalLine.replace(
        `__KEYWORD_${keyword}__`,
        `<span class="text-purple-400 font-semibold">${keyword}</span>`
      );
    });

    // Replace strings
    strings.forEach((str, i) => {
      finalLine = finalLine.replace(
        `__STRING_${i}__`,
        `<span class="text-green-400">${str}</span>`
      );
    });

    // Replace comments
    comments.forEach((comment, i) => {
      finalLine = finalLine.replace(
        `__COMMENT_${i}__`,
        `<span class="text-gray-500 italic">${comment}</span>`
      );
    });

    return (
      <div
        key={index}
        dangerouslySetInnerHTML={{ __html: finalLine }}
        className="text-slate-light"
      />
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`bg-secondary/80 backdrop-blur-sm rounded-lg overflow-hidden border border-tertiary shadow-2xl ${className}`}
    >
      {/* Code Editor Header */}
      <div className="bg-tertiary/50 px-4 py-2 flex items-center justify-between border-b border-tertiary/50">
        <div className="flex items-center space-x-3">
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="text-slate-light text-sm font-mono">{fileName}</div>
        </div>
        <div
          className={`text-xs font-mono px-2 py-1 rounded ${getLanguageColor()} bg-tertiary/50`}
        >
          {language.toUpperCase()}
        </div>
      </div>

      {/* Code Content */}
      <div className="p-6 overflow-x-auto">
        <div className="font-mono text-sm md:text-base leading-relaxed">
          {code.map((line, index) => (
            <div
              key={index}
              className="flex hover:bg-tertiary/30 transition-colors duration-200"
            >
              <span className="text-slate-dark mr-6 select-none text-right w-8">
                {(index + 1).toString().padStart(2, "0")}
              </span>
              {getSyntaxHighlight(line, index)}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CodeBlock;
