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
import { HashLink } from "react-router-hash-link";
// import useHash from "../lib/getHash";
import { useParams } from "next/navigation";
import React, { useEffect, useState, RefObject, useRef } from "react";
// import { useVisibility } from '../lib/visibilityContext'; // Adjust the import path as needed
import { useInView } from "framer-motion";

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
  
  const [visibleEleId, setvisibleEleId]= useState(links[0].href);

  useEffect(() => {
    // get elements
    const el1 = document.getElementById(links[0].href);
    const el2 = document.getElementById(links[1].href);
    const el3 = document.getElementById(links[2].href);

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting == true){
          console.log(entry.target.getAttribute("id"));
          console.log(visibleEleId);
          setvisibleEleId(entry.target.getAttribute("id") || links[0].href);
          console.log(visibleEleId);
        }
      })
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
  },[]);

  return (
    <ul className="flex flex-col">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <a
            key={link.name}
            href={'#' + link.href}
            className={`
            ${visibleEleId == link.href ? "active" : "nonactive"}
                    flex flex-row gap-2`}
          >
            <LinkIcon className="flex-none h-6 w-6" />
            <p className="text-lg">{link.name}</p>
          </a>
        );
      })}
    </ul>
  );
};
