"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lotus:theme");
      const dark = saved ? saved === "dark" : document.documentElement.classList.contains("dark");
      if (dark) document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
      setIsDark(dark);
    } catch {
      setIsDark(document.documentElement.classList.contains("dark"));
    }
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    try { localStorage.setItem("lotus:theme", next ? "dark" : "light"); } catch {}
    if (next) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Basculer le thème"
      aria-pressed={isDark ?? false}
      className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/20 px-3 py-1.5 text-sm text-brand-gray dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition"
    >
      {isDark ? (
        // Sun icon
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.364-7.364-1.414 1.414M7.05 16.95l-1.414 1.414m12.728 0-1.414-1.414M7.05 7.05 5.636 5.636" />
        </svg>
      ) : (
        // Moon icon
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      )}
      <span className="hidden sm:inline">{isDark ? "Clair" : "Sombre"}</span>
    </button>
  );
}
