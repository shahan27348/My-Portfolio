import React, { useEffect, useState } from "react";

const NewspaperBackground: React.FC = () => {
  const [headlines, setHeadlines] = useState<
    Array<{
      text: string;
      x: number;
      y: number;
      rotation: number;
      opacity: number;
    }>
  >([]);

  // Funny newspaper headlines about the developer
  const funnyHeadlines = [
    "BREAKING: Local Developer Fixes Bug on First Try, Scientists Baffled!",
    "EXCLUSIVE: Man Claims 'It Works On My Machine', World Disagrees",
    "SHOCKING: Developer Actually Reads Documentation Before Asking Questions",
    "LATEST: Console.log() Saves The Day Again, No One Surprised",
    "REPORT: Semicolon Missing, Entire Project Collapses",
    "NEWS FLASH: Stack Overflow Down For 5 Minutes, Productivity Drops 95%",
    "BREAKING: Developer Finally Understands CSS After 10 Years",
    "ALERT: Git Commit Message Says 'Fixed Stuff', Investigation Ongoing",
    "EXCLUSIVE: Code Works After Adding Random Console.log, Nobody Knows Why",
    "LATEST: Developer Promises 'Will Comment Later', Never Does",
    "SHOCKING: Tabs vs Spaces Debate Continues Into 2025",
    "REPORT: Another Developer Falls Victim To Tutorial Hell",
    "NEWS: Junior Dev Discovers Ctrl+Z, Saves Career",
    "BREAKING: Senior Dev Actually Admits 'I Don't Know', Team Faints",
    "EXCLUSIVE: Copy-Paste From StackOverflow Works First Time, Miracle Confirmed",
    "LATEST: Developer Spends 3 Hours Debugging, Realizes Caps Lock Was On",
    "SHOCKING: npm install Completes Without Errors, Reality Questioned",
    "REPORT: Regex Pattern Works, Author Can't Explain How",
    "NEWS FLASH: Developer's Code Actually Runs After Coffee Break",
    "BREAKING: 'Quick Fix' Takes 6 Hours, Surprise Level: Zero",
  ];

  useEffect(() => {
    const generateHeadlines = () => {
      const newHeadlines = [];
      const count = 15; // Number of headlines to display

      for (let i = 0; i < count; i++) {
        newHeadlines.push({
          text: funnyHeadlines[
            Math.floor(Math.random() * funnyHeadlines.length)
          ],
          x: Math.random() * 100,
          y: (i * 100) / count + Math.random() * 10,
          rotation: Math.random() * 4 - 2, // -2 to 2 degrees
          opacity: 0.08 + Math.random() * 0.07, // 0.08 to 0.15 (increased from 0.03-0.08)
        });
      }

      setHeadlines(newHeadlines);
    };

    generateHeadlines();

    // Regenerate headlines every 30 seconds for variety
    const interval = setInterval(generateHeadlines, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Vintage paper texture overlay */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(139, 69, 19, 0.03) 2px,
              rgba(139, 69, 19, 0.03) 4px
            )
          `,
        }}
      />

      {/* Newspaper headlines */}
      <div className="absolute inset-0">
        {headlines.map((headline, index) => (
          <div
            key={index}
            className="absolute whitespace-nowrap font-serif text-slate-dark"
            style={{
              left: `${headline.x}%`,
              top: `${headline.y}%`,
              transform: `rotate(${headline.rotation}deg)`,
              opacity: headline.opacity,
              fontSize: `${12 + Math.random() * 6}px`,
              fontWeight: Math.random() > 0.5 ? 600 : 400,
            }}
          >
            {headline.text}
          </div>
        ))}
      </div>

      {/* Decorative corner ornaments */}
      <div className="absolute top-4 left-4 w-16 h-16 opacity-10">
        <svg viewBox="0 0 100 100" className="text-accent">
          <path
            d="M50 10 L60 30 L80 30 L65 45 L70 65 L50 50 L30 65 L35 45 L20 30 L40 30 Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="absolute top-4 right-4 w-16 h-16 opacity-10">
        <svg viewBox="0 0 100 100" className="text-accent">
          <path
            d="M50 10 L60 30 L80 30 L65 45 L70 65 L50 50 L30 65 L35 45 L20 30 L40 30 Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="absolute bottom-4 left-4 w-16 h-16 opacity-10">
        <svg viewBox="0 0 100 100" className="text-accent">
          <path
            d="M50 10 L60 30 L80 30 L65 45 L70 65 L50 50 L30 65 L35 45 L20 30 L40 30 Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="absolute bottom-4 right-4 w-16 h-16 opacity-10">
        <svg viewBox="0 0 100 100" className="text-accent">
          <path
            d="M50 10 L60 30 L80 30 L65 45 L70 65 L50 50 L30 65 L35 45 L20 30 L40 30 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
};

export default NewspaperBackground;
