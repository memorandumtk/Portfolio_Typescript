// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <button
        className="w-16 h-12 flex items-cente justify-centerr"
        onClick={() => {
          if (theme == "dark") {
            setTheme("light");
          } else {
            setTheme("dark");
          }
        }}
      >
        <svg
          className="moon hidden flex-grow dark:block"
          aria-hidden="true"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <circle
            className="fill-yellow-400"
            cx="12"
            cy="12"
            r="6"
            mask="url(#moon-mask)"
            fill="currentColor"
          />
          <mask className="moon" id="moon-mask">
            <rect x="0" y="0" width="100%" height="100%" fill="white" />
            <circle cx="18" cy="4" r="10" fill="black" />
          </mask>
        </svg>
        <svg
          className="sun flex-grow dark:hidden"
          aria-hidden="true"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <circle
            className="sun fill-orange-500"
            cx="12"
            cy="12"
            r="6"
            fill="currentColor"
          />
          <g className="sun-beams" stroke="currentColor">
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </g>
        </svg>
      </button>
    </div>
  );
}
