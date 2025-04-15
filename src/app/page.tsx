"use client";

import React, { useEffect, useRef } from "react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  console.log("Rendering Home page");

  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/background.mp4"
        muted
        loop
        playsInline
      />
    </main>
  );
}
