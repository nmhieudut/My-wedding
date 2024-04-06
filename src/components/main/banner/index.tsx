"use client";
import { useCountdown } from "@/hooks/useCountdown";
import { cn } from "@/lib/utils";
import { titleFont } from "@/utils/fonts";
import Link from "next/link";
import React, { useEffect } from "react";

const NUMBER_OF_BANNERS = 3;

export default function Banner() {
  const [currentImage, setCurrentImage] = React.useState(1);
  const [days, hours, minutes, seconds] = useCountdown(
    `${process.env.NEXT_PUBLIC_WEDDING_DATE} 11:00:00`
  );
  console.log("days", process.env.NEXT_PUBLIC_WEDDING_DATE);
  const isOver = days + hours + minutes + seconds <= 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev < NUMBER_OF_BANNERS ? prev + 1 : 1));
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <main
      className="h-screen w-full transition-all duration-300 ease-in-out bg-cover bg-center"
      style={{
        backgroundImage: `url(/images/banner${currentImage}.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "50%",
      }}
    >
      <div className="flex items-center justify-center w-full h-full bg-[rgba(0,0,0,.5)] text-white">
        <div className="max-w-3xl justify-center items-center flex flex-col my-20 rounded-xl p-12 gap-4">
          <h1 className={cn("text-5xl md:text-8xl", titleFont.className)}>
            Hieu & Trang
          </h1>
          <h2>Da Nang, 20 March 2025</h2>
          {isOver ? (
            <div className="text-xl md:text-3xl text-center">
              Wedding is over! Thank you for coming! 🎉
            </div>
          ) : (
            <div className="flex flex-col items-center gap-8">
              <h3 className="text-lg md:text-3xl">
                Ready up! The wedding is coming on
              </h3>
              <div className="flex flex-wrap gap-8 justify-center">
                <div className="flex gap-2 items-end">
                  <b className="text-5xl">{days}</b>
                  <span>Days</span>
                </div>
                <div className="flex gap-2 items-end">
                  <b className="text-5xl">{hours}</b>
                  <span>Hours</span>
                </div>
                <div className="flex gap-2 items-end">
                  <b className="text-5xl">{minutes}</b>
                  <span>Minutes</span>
                </div>
                <div className="flex gap-2 items-end">
                  <b className="text-5xl">{seconds}</b>
                  <span>Seconds</span>
                </div>
              </div>
            </div>
          )}
          <button className="btn btn-neutral">
            <Link href="/invitation">Open Invitation</Link>
          </button>
        </div>
      </div>
    </main>
  );
}
