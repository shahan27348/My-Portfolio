import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NAV_LINKS } from "@/constants";
import ThemeStyleSelector from "@/components/ui/ThemeStyleSelector";
import { useTheme } from "@/contexts/ThemeContext";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { themeStyle } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-secondary/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      } ${
        themeStyle === "coding"
          ? "border-b border-tertiary/50"
          : themeStyle === "colorful"
          ? "border-b-4 border-accent/20"
          : "border-b-2 border-slate-dark/30"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        <motion.div
          className={`text-2xl font-bold text-accent transition-transform duration-300 ${
            themeStyle === "coding"
              ? "font-mono"
              : themeStyle === "colorful"
              ? "font-bold"
              : "font-serif"
          }`}
          whileHover={{ scale: 1.05 }}
        >
          <a href="#home" className="flex items-center gap-2">
            {themeStyle === "coding" && (
              <>
                <span className="text-slate-dark">&lt;</span>
                MS
                <span className="text-slate-dark">/&gt;</span>
              </>
            )}
            {themeStyle === "colorful" && (
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                Muhammad Shahan
              </span>
            )}
            {themeStyle === "newspaper" && (
              <span className="newspaper-heading text-lg">MS Paper</span>
            )}
          </a>
        </motion.div>
        <nav className="hidden md:flex items-center space-x-6">
          {NAV_LINKS.map((link, index) => {
            // Colorful theme: different color for each link
            const colorfulColors = [
              "text-pink-500 hover:text-pink-600",
              "text-purple-500 hover:text-purple-600",
              "text-blue-500 hover:text-blue-600",
              "text-green-500 hover:text-green-600",
              "text-orange-500 hover:text-orange-600",
              "text-indigo-500 hover:text-indigo-600",
              "text-yellow-500 hover:text-yellow-600",
              "text-red-500 hover:text-red-600",
            ];

            return (
              <motion.a
                key={link.name}
                href={link.href}
                className={`transition-colors duration-300 text-sm relative group ${
                  themeStyle === "coding"
                    ? "font-mono text-slate-light hover:text-accent"
                    : themeStyle === "colorful"
                    ? `font-semibold ${
                        colorfulColors[index % colorfulColors.length]
                      }`
                    : "font-serif text-slate-light hover:text-accent"
                }`}
                whileHover={{ y: -2 }}
              >
                
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    themeStyle === "colorful" ? "bg-current" : "bg-accent"
                  }`}
                />
              </motion.a>
            );
          })}
          <motion.a
            href="/assets/pdf.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm text-accent border border-accent px-4 py-2 hover:bg-accent/10 transition-all duration-300 ${
              themeStyle === "coding"
                ? "font-mono rounded"
                : themeStyle === "colorful"
                ? "colorful-button rounded-full font-bold"
                : "font-serif newspaper-border"
            }`}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px var(--color-accent)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            {themeStyle === "coding" && (
              <span className="text-slate-dark mr-1">$</span>
            )}
            {themeStyle === "newspaper" && <span className="mr-1">📄</span>}
            Resume
          </motion.a>
          <ThemeStyleSelector />
        </nav>
        <div className="md:hidden flex items-center gap-2">
          <ThemeStyleSelector />
          <button
            onClick={toggleMenu}
            className="text-accent focus:outline-none z-50 ml-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed inset-0 bg-primary/98 backdrop-blur-md transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-40 border-l border-tertiary/50`}
        initial={false}
        animate={{ x: isMenuOpen ? 0 : "100%" }}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <nav className="flex flex-col items-center space-y-8">
            {NAV_LINKS.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={toggleMenu}
                className="font-mono text-2xl text-slate-light hover:text-accent transition-colors duration-300"
                initial={{ opacity: 0, x: 50 }}
                animate={
                  isMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
                }
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-accent mr-2">
                  {String(index + 1).padStart(2, "0")}.
                </span>
                {link.name}
              </motion.a>
            ))}
          </nav>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;
