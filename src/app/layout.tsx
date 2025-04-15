"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <html lang="en">
      <body className={inter.className}>
        {!isHomePage && <Navigation />}
        {children}
        <footer className="bg-white border-t">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm text-gray-500">
              © 2025 Nyangiverse. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
