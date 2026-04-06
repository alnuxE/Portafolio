"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Verificar estado inicial en la carga
    const root = document.documentElement;
    if (root.classList.contains("dark")) {
      setIsDark(true);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDark(true);
      root.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-5 sm:px-7 py-2.5 sm:py-3 text-sm sm:text-base rounded-full bg-[var(--accent)] text-white font-semibold hover:bg-[var(--accent-hover)] transition-all hover:-translate-y-1 duration-300 shadow-md flex items-center justify-center gap-2"
      aria-label="Toggle Theme"
    >
      {isDark ? <Sun className="w-4 h-4 sm:w-5 sm:h-5" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5" />} 
      <span className="font-semibold">
        {isDark ? "Modo Claro" : "Modo Oscuro"}
      </span>
    </button>
  );
}
