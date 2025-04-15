import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Logo Section */}
      <section className="h-screen flex flex-col items-center justify-center">
        <div className="w-[800px] h-[800px] relative mb-12">
          <Image
            src="/logo.svg"
            alt="Nyangiverse Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Explore Button */}
        <a href="#explore" className="group flex flex-col items-center gap-2">
          <span className="text-2xl font-pixel text-gray-600 group-hover:text-main-600 transition-colors">
            Click to Explore
          </span>
          <div className="text-4xl animate-bounce group-hover:text-main-600">
            ↓
          </div>
        </a>
      </section>

      {/* Grid Sections */}
      <section
        id="explore"
        className="min-h-screen grid grid-cols-2 grid-rows-2"
      >
        {/* About Section */}
        <Link
          href="/about"
          className="group relative flex items-center justify-center border-r border-b border-gray-100 hover:bg-gray-50 transition-all"
        >
          <div className="text-center p-8">
            <h2 className="text-6xl font-pixel mb-4">About Us</h2>
            <p className="text-xl text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
              Meet our cats and learn our story
            </p>
          </div>
        </Link>

        {/* Cartoons Section */}
        <Link
          href="/cartoons"
          className="group relative flex items-center justify-center border-b border-gray-100 hover:bg-gray-50 transition-all"
        >
          <div className="text-center p-8">
            <h2 className="text-6xl font-pixel mb-4">Cartoons</h2>
            <p className="text-xl text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
              Explore our pixel cartoons
            </p>
          </div>
        </Link>

        {/* Quiz Section */}
        <Link
          href="/quiz/intro"
          className="group relative flex items-center justify-center border-r border-gray-100 hover:bg-gray-50 transition-all"
        >
          <div className="text-center p-8">
            <h2 className="text-6xl font-pixel mb-4">Quiz</h2>
            <p className="text-xl text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
              Are you close to Hasom or Haron?
            </p>
          </div>
        </Link>

        {/* Shop Section */}
        <Link
          href="/shop"
          className="group relative flex items-center justify-center hover:bg-gray-50 transition-all"
        >
          <div className="text-center p-8">
            <h2 className="text-6xl font-pixel mb-4">Shop</h2>
            <p className="text-xl text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
              Get our merchandise
            </p>
          </div>
        </Link>
      </section>
    </main>
  );
}
