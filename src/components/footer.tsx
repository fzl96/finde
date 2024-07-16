import Link from "next/link";
import { ScanSearch } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-footer text-footer-foreground border border-footer-border">
      <div className="p-5 grid place-items-center gap-4">
        <div className="flex items-center gap-2">
          <ScanSearch size={30} />
          <p className="font-medium text-2xl">Finde</p>
        </div>
        <div>
          <ul className="flex gap-7 text-base">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/#about">About</Link>
            </li>
            <li>
              <Link href="/find">Find</Link>
            </li>
          </ul>
        </div>
        <div className="flex">
          <span>&copy; 2024 Finde, Designed by Naufal</span>
        </div>
      </div>
    </footer>
  );
}
