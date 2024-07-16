"use client";

import { ScanSearch } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./mode-toggle";

const routes = [
  {
    label: "HOME",
    path: "/",
  },
  {
    label: "ABOUT",
    path: "/#about",
  },
  {
    label: "FIND",
    path: "/find",
  },
];

export function Nav() {
  const pathName = usePathname();

  return (
    <header className="sticky flex justify-between items-center w-full top-0 bg-black/0 backdrop-blur py-4 mt-7 px-4 md:px-[10rem] z-[1000]">
      <Link href="/">
        <div className="flex items-center gap-2">
          <ScanSearch size={30} />
          <p className="font-semibold text-2xl">FINDE</p>
        </div>
      </Link>
      <nav className="md:flex hidden items-center relative">
        <ul className="flex items-center gap-3 mr-3">
          {routes.map((route) => (
            <li key={route.path}>
              <Link href={route.path}>
                <p
                  className={`${
                    pathName === route.path
                      ? "text-foreground border border-foreground rounded-full"
                      : "text-foreground/50 hover:text-foreground"
                  } text-sm font-semibold px-5 py-2`}
                >
                  {route.label}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <ModeToggle />
      </nav>
    </header>
  );
}
