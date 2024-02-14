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
import HorizontalLine from "./ui/horizontal-line";
import { ThemeSwitcher } from "@/app/ui/theme-switcher";
import BackGround from "@/app/back-ground-image";

export default function Home() {
  return (
    <main
      className="p-20 pt-28 lg:pt-8 grid grid-cols-1 lg:grid-cols-2 justify-items-center
    text-slate-700 dark:text-gray-300"
    >
      {/* // Header (Left)  Panel */}
      <div className="text-xl italic lg:sticky lg:top-0 lg:max-h-screen lg:flex-none flex flex-col gap-4 justify-center items-center text-center ">
        <h1 className="text-5xl pb-8 break-words font-bold">Kosuke Takagi</h1>
        <p className="break-words">
          Since I started being presented by Javascript and seeking to be a good Web Developer,
        </p>
        <p className="">It has been...</p>
        <Suspense fallback={<Loading />}>
          <Timer />
        </Suspense>
        <div
          className="z-50 fixed top-0 w-screen h-16
        lg:pt-4 lg:relative lg:top-auto lg:w-full lg:h-auto lg:order-last"
        >
          <NavLinks />
        </div>
        <div className="px-8 text-base">
          <p>
            * This portfolio is written by React, Tailwind CSS, and Typescript and built with Next.js.
          </p>
        </div>
        <div>
          <ThemeSwitcher />
        </div>
        <div className="block lg:hidden">
          <HorizontalLine />
        </div>
      </div>

      {/* // AboutMe (Right) Panel */}
      <div
        id="right-panel"
        className="pt-8 lg:pt-16 gap-8 lg:flex-none flex flex-col"
      >
        <div id="introduction" className="">
          <About />
        </div>
        <HorizontalLine />
        <div id="background">
          <Back />
        </div>
        <HorizontalLine />
        <div id="projects">
          <Projects />
        </div>
        <HorizontalLine />
      </div>
    </main>
  );
}
