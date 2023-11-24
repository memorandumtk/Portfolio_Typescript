import Link from "next/link";
import Timer from "@/app/ui/timer";
import { Suspense } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Loading from "./loading";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-32 sm:pt-40 italic overflow-x-hidden">
      <p className="fixed left-0 top-0 flex w-full justify-center py-10 border-b border-gray-300 bg-sky-200 backdrop-blur-xl dark:border-neutral-800 dark:bg-teal-950 dark:from-inherit lg:fixed lg:left-0 lg:top-0 lg:justify-center lg:w-full lg:border">
        This is my portfolio site,&nbsp;by using Next.js, Typescript, React,
        Tailwind.
      </p>

      <div className="max-w-[360px] sm:max-w-none absolute grid grid-col-1 text-center gap-6 ">
        <h1 className="break-words text-5xl sm:text-6xl font-bold">
          Kosuke Takagi
        </h1>
        <div className="grid grid-cols-1 gap-4">
          <p className="break-words text-xl italic">
            Since I started being resonated by javascript
          </p>
          <p className="text-xl italic">It has been...</p>
          <Suspense fallback={<Loading />}>
            <Timer />
          </Suspense>
        </div>
        <div className="w-full grid grid-col-1 gap-0 pt-0 ">
          <Link
            key="about"
            href="/me/about"
            className="font-semibold italic group rounded-lg border border-transparent text-2xl py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            About Me&nbsp;
            <span className="font-bold inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </Link>
          <Link
            key="projects"
            href="/me/projects"
            className="font-semibold italic group rounded-lg border border-transparent text-2xl py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            My Projects&nbsp;
            <span className="font-bold inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
