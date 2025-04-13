import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";

export const metadata: Metadata = {
  title: "Nyangiverse - Meet Hasom & Haron",
  description:
    "Discover whether you're more like Hasom, the energetic explorer, or Haron, the calm and gentle soul",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className="min-h-screen bg-gray-50">{children}</main>
        <footer className="bg-white border-t">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-500">
              © 2024 Nyangiverse. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
