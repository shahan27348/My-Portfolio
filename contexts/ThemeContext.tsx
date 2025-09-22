import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const createFaviconHref = (theme: Theme) => {
    const lightColors = { bg: '#f0f2f5', text: '#0866ff' };
    const darkColors = { bg: '#0a192f', text: '#64ffda' };
    const colors = theme === 'dark' ? darkColors : lightColors;

    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <rect width="100" height="100" rx="15" fill="${encodeURIComponent(colors.bg)}"/>
            <text x="50" y="55" font-family="monospace" font-size="50" font-weight="bold" fill="${encodeURIComponent(colors.text)}" text-anchor="middle" dominant-baseline="middle">MS</text>
        </svg>
    `.trim();
    return `data:image/svg+xml,${svg}`;
};


export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = (storedTheme as Theme) || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);

    const favicon = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
    if (favicon) {
        favicon.href = createFaviconHref(theme);
    }

  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};