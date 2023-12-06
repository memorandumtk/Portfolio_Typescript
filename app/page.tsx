"use client";
import Link from "next/link";
import Timer from "@/app/ui/timer";
import { Suspense } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Loading from "./loading";
import About from "@/app/ui/me/about";
import Back from "@/app/ui/me/back-ground";
import Projects  from "@/app/ui/me/projects/projects";
import Social from "@/app/ui/social-icon";
import { NavLinks } from "@/app/ui/nav-links";
import { useVisibility } from "./lib/visibilityContext"; // Adjust the import path as needed
import { useOnScreen } from "./lib/useOnscreen"; // Adjust the import path as needed
// import { useEffect, useRef, useCallback, useState } from "react";
import {
  DocumentDuplicateIcon,
  UserCircleIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";
import { useInView } from "./lib/useInView";
import React, { useRef } from "react";

const links = [
  { name: "About Me", href: "#introduction", icon: UserCircleIcon },
  { name: "Study & Work", href: "#background", icon: BuildingOffice2Icon },
  {
    name: "Projects",
    href: "#projects",
    icon: DocumentDuplicateIcon,
  },
];

export default function Home() {
  const firstParagraphRef = useRef(null);
  const secondParagraphRef = useRef(null);
  const thirdParagraphRef = useRef(null);

  const observedElements = useInView([
    firstParagraphRef,
    secondParagraphRef,
    thirdParagraphRef,
  ]);

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
            <ul className="flex flex-col">
              {links.map((link, index) => {
                const LinkIcon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`
                    ${
                      observedElements[link.href]?.isInView
                        ? "active"
                        : "nonactive"
                    }
                    flex flex-row gap-2`}
                  >
                    <LinkIcon className="flex-none h-6 w-6" />
                    <p className="text-lg">{link.name}</p>
                  </a>
                );
              })}
            </ul>

            <Social />
          </div>
        </div>

        {/* // AboutMe (Right) Panel */}
        <div className="flex-none w-1/2">
          <div ref={firstParagraphRef} data-myproperty={links[0].href}>
            <About />
          </div>
          <div ref={secondParagraphRef} data-myproperty={links[1].href}>
            <Back />
          </div>
          <div ref={thirdParagraphRef} data-myroperty={links[2].href}>
            {/* <Projects /> */}
          </div>
        </div>
      </div>
    </main>
  );
}


