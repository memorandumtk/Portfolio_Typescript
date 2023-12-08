// "use client";
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
import {NavLinks} from "@/app/ui/nav-links";
import { useVisibility } from "./lib/visibilityContext"; // Adjust the import path as needed
import { useOnScreen } from "./lib/useOnscreen"; // Adjust the import path as needed
// import { useEffect, useRef, useCallback, useState } from "react";


export default function Home() {
  return (
    <main className="p-8">
      <div className="flex flex-row">
        {/* // Header (Left)  Panel */}
        <div className="sticky top-0 max-h-screen flex-none w-1/2 flex flex-col justify-center items-center text-center ">
          <h1 className="break-words font-bold">
            Kosuke Takagi
          </h1>
          <div className="flex flex-col gap-4">
            <p className="break-words italic">
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
