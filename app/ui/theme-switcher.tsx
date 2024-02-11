// // app/components/ThemeSwitcher.tsx
// "use client";
//
// import { useTheme } from "next-themes";
// import { useEffect, useState } from "react";
//
// export function ThemeSwitcher() {
//   const [mounted, setMounted] = useState(false);
//   const { theme, setTheme } = useTheme();
//
//   useEffect(() => {
//     setMounted(true);
//   }, []);
//
//   if (!mounted) return null;
//
//   return (
//     <div>
//       The current theme is: {theme}
//       <button
//         className="w-16 h-12 flex items-cente justify-center"
//         onClick={() => {
//           if (theme == "dark") {
//             setTheme("light");
//           } else {
//             setTheme("dark");
//           }
//         }}
//       >
//         <svg
//           className="moon flex-grow "
//           aria-hidden="true"
//           width="32"
//           height="32"
//           viewBox="0 0 24 24"
//         >
//           <circle
//             className="fill-gray-500 dark:fill-slate-400"
//             cx="12"
//             cy="12"
//             r="6"
//             mask="url(#moon-mask)"
//             fill="currentColor"
//           />
//           <mask className="moon" id="moon-mask">
//             <rect x="0" y="0" width="100%" height="100%" fill="white" />
//             <circle cx="18" cy="4" r="10" fill="black" />
//           </mask>
//         </svg>
//       </button>
//     </div>
//   );
// }
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
      The current theme is: {theme}
      <button onClick={() => setTheme("light")}>Light Mode</button>
      <button onClick={() => setTheme("dark")}>Dark Mode</button>
    </div>
  );
}
