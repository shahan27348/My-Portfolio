import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

const ThemeStyleSelector: React.FC = () => {
  const { themeStyle, setThemeStyle } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    {
      id: "coding" as const,
      name: "Coding",
      icon: "💻",
      description: "Dark Developer Theme",
      gradient: "from-gray-800 to-blue-600",
      bg: "#0d1117",
    },
    {
      id: "colorful" as const,
      name: "Colorful",
      icon: "🎨",
      description: "Vibrant & Modern",
      gradient: "from-pink-500 via-purple-500 to-indigo-500",
      bg: "#ffffff",
    },
    {
      id: "newspaper" as const,
      name: "Newspaper",
      icon: "📰",
      description: "Classic Print Style",
      gradient: "from-amber-100 via-yellow-50 to-red-900",
      bg: "#faf8f3",
    },
  ];

  const currentTheme = themes.find((t) => t.id === themeStyle);

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-secondary border border-tertiary rounded-lg hover:bg-tertiary transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Select theme style"
      >
        <span className="text-xl">{currentTheme?.icon}</span>
        <span className="text-sm font-medium text-slate-light hidden md:inline">
          {currentTheme?.name}
        </span>
        <motion.svg
          className="w-4 h-4 text-slate-dark"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </motion.svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-64 bg-secondary border border-tertiary rounded-lg shadow-2xl overflow-hidden z-50"
            >
              <div className="p-2 space-y-1">
                {themes.map((theme) => (
                  <motion.button
                    key={theme.id}
                    onClick={() => {
                      setThemeStyle(theme.id);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
                      themeStyle === theme.id
                        ? "bg-accent/20 border border-accent"
                        : "hover:bg-tertiary border border-transparent"
                    }`}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-br ${theme.gradient} flex items-center justify-center text-xl`}
                    >
                      {theme.icon}
                    </div>
                    <div className="flex-1 text-left">
                      <div className="font-medium text-slate-light">
                        {theme.name}
                      </div>
                      <div className="text-xs text-slate-dark">
                        {theme.description}
                      </div>
                    </div>
                    {themeStyle === theme.id && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-5 h-5 rounded-full bg-accent flex items-center justify-center"
                      >
                        <svg
                          className="w-3 h-3 text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>

              <div className="px-4 py-3 bg-tertiary/50 border-t border-tertiary">
                <p className="text-xs text-slate-dark text-center">
                  Choose your preferred theme style
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeStyleSelector;
