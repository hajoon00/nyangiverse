"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path
      ? "text-main-500 font-medium"
      : "text-gray-800 hover:text-main-300";
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-pixel font-bold text-main-500">
                Nyangiverse
              </span>
            </Link>
          </div>

          {/* Navigation links on the right */}
          <div className="flex space-x-8">
            <Link
              href="/quiz/intro"
              className={`inline-flex items-center px-3 py-2 text-sm font-pixel font-medium ${isActive(
                "/quiz/intro"
              )}`}
            >
              Quiz
            </Link>
            <Link
              href="/cartoons"
              className={`inline-flex items-center px-3 py-2 text-sm font-pixel font-medium ${isActive(
                "/cartoons"
              )}`}
            >
              Cartoons
            </Link>
            <Link
              href="/merch"
              className={`inline-flex items-center px-3 py-2 text-sm font-pixel font-medium ${isActive(
                "/merch"
              )}`}
            >
              Merch
            </Link>
            <Link
              href="/about"
              className={`inline-flex items-center px-3 py-2 text-sm font-pixel font-medium ${isActive(
                "/about"
              )}`}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
