"use client";
import React, { useEffect, useState } from "react";
import anime from "animejs";
import Image from "next/image";
import Loading from "@/components/ui/Loading";
import { SPLASH_SCREEN_DURATION } from "@/constant/home";
type Props = {
  finishLoading: () => void;
};
export default function SplashScreen({ finishLoading }: Props) {
  const [isMounted, setIsMounted] = useState(false);
  const animate = () => {
    const loader = anime.timeline({
      complete: () => {
        finishLoading();
      },
    });
    loader.add({
      targets: "#logo",
      duration: SPLASH_SCREEN_DURATION,
      easing: "easeInOutQuart",
      opacity: 1,
      scale: [1],
    });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);

  if (isMounted) {
    return (
      <div className="flex items-center justify-center w-full h-full bg-white">
        <Loading />
      </div>
    );
  }
  return null;
}
