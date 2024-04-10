import { SPLASH_SCREEN_DURATION } from "@/constant/home";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Loading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + (1000 / SPLASH_SCREEN_DURATION) * 100;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
      <div id="logo" className="w-24 h-24 rounded-2xl overflow-hidden">
        <Image
          src="/images/loader.gif"
          alt="Logo"
          width={96}
          height={96}
          layout={"responsive"}
          unoptimized={true}
        />
      </div>
      <progress className="progress w-56" value={progress} max="100" />
    </div>
  );
}
