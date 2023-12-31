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
import { ThemeSwitcher } from "@/app/ui/theme-switcher"

export default function Home() {
  return (
    <main className="p-20 pt-28 lg:pt-12 grid grid-cols-1 lg:grid-cols-2 justify-items-center
   bg-gradient-to-r from-teal-500 via-zinc-100 to-teal-500
    dark:bg-gradient-radial dark:from-blue-950 dark:to-sky-900 dark:text-gray-300">
      {/* // Header (Left)  Panel */}
      <div className="italic lg:sticky lg:top-0 lg:max-h-screen lg:flex-none flex flex-col gap-4 justify-center items-center text-center ">
        <h1 className="text-5xl pb-8 break-words font-bold">Kosuke Takagi</h1>
        <p className="break-words text-lg">
          Since I started being resonated by Javascript
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
        <div>
          <ThemeSwitcher />
        </div>
        <div className="block lg:hidden">
          <HorizontalLine />
        </div>
      </div>

      {/* // AboutMe (Right) Panel */}
      <div id="right-panel" className="pt-8 lg:pt-16 gap-8 lg:flex-none flex flex-col">
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
