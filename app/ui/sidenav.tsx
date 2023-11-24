import Link from "next/link";
import NavLinks from "@/app/ui/nav-links";
import KosukeLogo from "@/app/ui/kosuke-logo";
import { PowerIcon } from "@heroicons/react/24/outline";

export default function SideNav() {
  return (
    <div className="lg:fixed lg:w-64 flex lg:h-full flex-col w-full h-40 lg:flex-none lg:border lg:border-r-2 bg-sky-200 backdrop-blur-xl dark:border-neutral-800 dark:bg-teal-950 ">
      <Link
        className="flex border-b-2 border-emerald-500 h-20 items-center justify-center md:h-32 "
        href="/"
      >
        <div className="">
          <KosukeLogo />
        </div>
      </Link>
      <div className="flex h-full flex-row divide-x-2 lg:divide-y-2 lg:divide-x-0 divide-emerald-800 justify-between lg:flex-col">
        <NavLinks />
      </div>
    </div>
  );
}
