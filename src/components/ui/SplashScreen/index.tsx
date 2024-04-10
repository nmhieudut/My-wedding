"use client";
import React, { useEffect, useState } from "react";
import anime from "animejs";
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
      duration: 2000,
      easing: "easeInOutQuart",
      opacity: 1,
      scale: [0.5, 1],
    });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div id="logo" isMounted={isMounted}>
      SplashScreen
    </div>
  );
}
