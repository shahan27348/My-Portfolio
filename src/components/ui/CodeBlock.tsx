import React from "react";

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
    return "text-white";
  };

  const getSyntaxHighlight = (line: string, index: number) => {
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

    strings.forEach((str, i) => {
      processedLine = processedLine.replace(str, `__STRING_${i}__`);
    });

    comments.forEach((comment, i) => {
      processedLine = processedLine.replace(comment, `__COMMENT_${i}__`);
    });

    keywords.forEach((keyword) => {
      const regex = new RegExp(`\\b${keyword}\\b`, "g");
      processedLine = processedLine.replace(regex, `__KEYWORD_${keyword}__`);
    });

    let finalLine = processedLine;

    keywords.forEach((keyword) => {
      finalLine = finalLine.replace(
        `__KEYWORD_${keyword}__`,
        `<span class="text-white font-semibold">${keyword}</span>`,
      );
    });

    strings.forEach((str, i) => {
      finalLine = finalLine.replace(
        `__STRING_${i}__`,
        `<span class="text-white/80">${str}</span>`,
      );
    });

    comments.forEach((comment, i) => {
      finalLine = finalLine.replace(
        `__COMMENT_${i}__`,
        `<span class="text-gray-500 italic">${comment}</span>`,
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
    <div
      className={`bg-secondary/80 backdrop-blur-sm rounded-lg overflow-hidden border border-tertiary shadow-2xl ${className}`}
    >
      {/* Code Editor Header */}
      <div className="bg-tertiary/50 px-4 py-2 flex items-center justify-between border-b border-tertiary/50">
        <div className="flex items-center space-x-3">
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-white/30" />
            <div className="w-3 h-3 rounded-full bg-white/50" />
            <div className="w-3 h-3 rounded-full bg-white/70" />
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
    </div>
  );
};

export default CodeBlock;
