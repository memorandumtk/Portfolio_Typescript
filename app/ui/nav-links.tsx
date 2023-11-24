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

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "About Me", href: "/me/about", icon: UserCircleIcon },
  { name: "Study & Work", href: "/me/background", icon: BuildingOffice2Icon },
  {
    name: "Projects",
    href: "/me/projects",
    icon: DocumentDuplicateIcon,
  }
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex grow text-emerald-600 items-center justify-center gap-2  bg-sky-200 backdrop-blur-xl dark:border-neutral-800 dark:bg-teal-950 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600  md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="flex-none w-8" />
            <p className="hidden md:block text-lg flex-1 text-center">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
