import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type ThemeStyle = "coding" | "colorful" | "newspaper";

interface ThemeContextType {
  themeStyle: ThemeStyle;
  setThemeStyle: (style: ThemeStyle) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const createFaviconHref = (theme: ThemeStyle) => {
  const themeColors = {
    coding: { bg: "#0d1117", text: "#58a6ff" },
    colorful: { bg: "#ffffff", text: "#ff6b6b" },
    newspaper: { bg: "#f5f5dc", text: "#8b0000" },
  };
  const colors = themeColors[theme];

  const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <rect width="100" height="100" rx="15" fill="${encodeURIComponent(
              colors.bg
            )}"/>
            <text x="50" y="55" font-family="monospace" font-size="50" font-weight="bold" fill="${encodeURIComponent(
              colors.text
            )}" text-anchor="middle" dominant-baseline="middle">MS</text>
        </svg>
    `.trim();
  return `data:image/svg+xml,${svg}`;
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [themeStyle, setThemeStyle] = useState<ThemeStyle>("coding");

  useEffect(() => {
    const storedStyle = localStorage.getItem("themeStyle");
    const initialStyle = (storedStyle as ThemeStyle) || "coding";
    setThemeStyle(initialStyle);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;

    // Remove all theme classes
    root.classList.remove("coding", "colorful", "newspaper");

    // Add current theme style
    root.classList.add(themeStyle);

    localStorage.setItem("themeStyle", themeStyle);

    const favicon = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
    if (favicon) {
      favicon.href = createFaviconHref(themeStyle);
    }
  }, [themeStyle]);

  return (
    <ThemeContext.Provider value={{ themeStyle, setThemeStyle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
