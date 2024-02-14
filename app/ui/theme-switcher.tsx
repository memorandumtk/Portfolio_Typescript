"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { CgDarkMode } from "react-icons/cg";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      {
        theme ? (
          <div className="pt-2 flex items-center gap-2">
            <span>Your in {theme[0].toUpperCase() + theme.slice(1)} Mode</span>
            <button
              className="text-lg hover:text-xl"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <CgDarkMode />
            </button>
          </div>
        ) : null // Or handle the undefined case differently
      }
    </div>
  );
}
