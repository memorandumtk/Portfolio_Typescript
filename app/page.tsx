import Link from "next/link";
import Timer from "@/app/ui/timer";
import { Suspense } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Loading from "./loading";
import About from "@/app/ui/me/about";
import Back from "@/app/ui/me/back-ground";
import Projects from "@/app/ui/me/projects/projects";
import Social from "@/app/ui/social-icon";
import { NavLinks } from "@/app/ui/nav-links";
// import { BrowserRouter } from "react-router-dom";

import { useVisibility } from './lib/visibilityContext'; // Adjust the import path as needed
import { useOnScreen } from './lib/useOnscreen'; // Adjust the import path as needed



export default function Home() {
  return (
    <main className="p-8">
        <div className="flex flex-row">
          {/* // Header (Left)  Panel */}
          <div className="sticky top-0 max-h-screen flex-none w-1/2 flex flex-col justify-center items-center text-center ">
            <h1 className="break-words text-5xl sm:text-6xl font-bold">
              Kosuke Takagi
            </h1>
            <div className="flex flex-col gap-4">
              <p className="break-words text-xl italic">
                Since I started being resonated by javascript
              </p>
              <p className="text-xl italic">It has been...</p>
              <Suspense fallback={<Loading />}>
                <Timer />
              </Suspense>
              <NavLinks />
              <Social />
            </div>
          </div>
          {/* // AboutMe (Right) Panel */}
          <div className="flex-none w-1/2">
            <About />
            <Back />
            <Projects />
          </div>
        </div>
    </main>
  );
}

{
  /* <p className="fixed left-0 top-0 flex w-full justify-center py-10 border-b border-gray-300 bg-sky-200 backdrop-blur-xl dark:border-neutral-800 dark:bg-teal-950 dark:from-inherit lg:fixed lg:left-0 lg:top-0 lg:justify-center lg:w-full lg:border">
  This is my portfolio site,&nbsp;by using Next.js, Typescript, React,
  Tailwind.
</p> */
}
