"use client";
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  UserCircleIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useParams } from "next/navigation";
import React, { useEffect, useState, RefObject, useRef } from "react";
// import hasHtmlDark from "@/app/lib/checkDark";

const links = [
  { name: "About Me", href: "introduction", icon: UserCircleIcon },
  { name: "Study & Work", href: "background", icon: BuildingOffice2Icon },
  {
    name: "Projects",
    href: "projects",
    icon: DocumentDuplicateIcon,
  },
];

// export default function NavLinks() {
export const NavLinks: React.FC = () => {
  const [visibleFieId, setVisibleFieId] = useState(links[0].href);

  useEffect(() => {
    // get elements
    const el1 = document.getElementById(links[0].href);
    const el2 = document.getElementById(links[1].href);
    const el3 = document.getElementById(links[2].href);
    const options = {
      root: document.querySelector("#right-panel"),
      rootMargin: "0px",
      threshold: [0, 1.0],
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // console.log(entry.target);
          setVisibleFieId(entry.target.getAttribute("id") || links[0].href);
        }
      }, options);
    });

    // observe each element if it was found
    if (!!el1) observer.observe(el1);
    if (!!el2) observer.observe(el2);
    if (!!el3) observer.observe(el3);

    // stop observing when your component unmounts
    return () => {
      if (!!el1) observer.unobserve(el1);
      if (!!el2) observer.unobserve(el2);
      if (!!el3) observer.unobserve(el3);
    };
  }, []);

  return (
    <ul
      className="text-xl flex flex-row w-full justify-evenly h-full items-center
    border-b border-gray-500 dark:border-gray-300 lg:flex-col lg:gap-2 dark:text-gray-300
    bg-gray-50 opacity-90 dark:bg-slate-900 lg:bg-none lg:bg-transparent lg:dark:bg-none lg:dark:bg-transparent lg:border-0
   "
    >
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <a
            key={link.name}
            href={"#" + link.href}
            className={`
            ${visibleFieId == link.href ? "observer-active" : "nonactive"} 
            flex flex-row flex-nowrap hover:underline`}
          >
            <p className="">{link.name}</p>
            <span
              className={`
            ${visibleFieId == link.href ? "observer-active-span" : "nonactive"}
            hidden lg:block`}
            >
              &nbsp;-&gt;
            </span>
          </a>
        );
      })}
    </ul>
  );
};
