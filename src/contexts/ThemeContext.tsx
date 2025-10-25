"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check localStorage and system preference
    const storedTheme = localStorage.getItem("theme") as Theme;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const initialTheme = storedTheme || systemTheme;
    setTheme(initialTheme);

    // Apply theme class explicitly
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    console.log('toggleTheme called, current theme:', theme);
    const newTheme = theme === "light" ? "dark" : "light";
    console.log('New theme will be:', newTheme);
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    console.log('Saved to localStorage:', newTheme);

    // Remove and add class explicitly for reliability
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
      console.log('Added dark class to html element');
    } else {
      document.documentElement.classList.remove("dark");
      console.log('Removed dark class from html element');
    }
    console.log('HTML classList:', document.documentElement.classList.toString());
  };

  // Prevent flash of incorrect theme
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
