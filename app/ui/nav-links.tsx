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
import React, { useEffect, useState, RefObject } from "react";
// import { useVisibility } from '../lib/visibilityContext'; // Adjust the import path as needed


// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "About Me", href: "#introduction", icon: UserCircleIcon },
  { name: "Study & Work", href: "#background", icon: BuildingOffice2Icon },
  {
    name: "Projects",
    href: "#projects",
    icon: DocumentDuplicateIcon,
  },
];

// export default function NavLinks() {
export const NavLinks: React.FC = () => {
    // const { isVisible } = useVisibility();

    // const anchorStyle = isVisible ? "active" : "notactive";

  return (
    <ul className="flex flex-col">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <a
            key={link.name}
            href={link.href}
            className={`flex flex-row gap-2`}
          >
            <LinkIcon className="flex-none h-6 w-6" />
            <p className="text-lg">{link.name}</p>
          </a>
        );
      })}
    </ul>
  );
}
