"use client";

import React, { useEffect, useRef } from "react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <video
        ref={videoRef}
        loop
        muted
        playsInline // Important for mobile playback
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Optional: Add content overlayed on the video */}
      {/* <div className="relative z-10 flex flex-col items-center justify-center h-full text-white bg-black bg-opacity-50">
        <h1 className="text-4xl font-pixel">Welcome to Nyangiverse</h1>
      </div> */}
    </main>
  );
}
