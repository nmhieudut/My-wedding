"use client";
import { useCountdown } from "@/hooks/use-countdown";
import { cn } from "@/lib/utils";
import { titleFont } from "@/utils/fonts";
import { format } from "date-fns";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const NUMBER_OF_BANNERS = 3;

export default function Banner() {
  const bannerRef = useRef(null);
  const weddingDate = process.env.NEXT_PUBLIC_WEDDING_DATE || "2024-12-31";
  const weddingLocation = process.env.NEXT_PUBLIC_WEDDING_LOCATION || "Da Nang";
  const [currentImage, setCurrentImage] = React.useState(1);

  const [days, hours, minutes, seconds] = useCountdown(
    `${weddingDate} 11:00:00`
  );
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
      ref={bannerRef}
      className="h-screen w-full transition-all duration-300 ease-in-out bg-cover bg-center bg-[`]"
      style={{
        backgroundImage: `url(/images/banner${currentImage}.jpg)`,
      }}
    >
      <div className="flex items-center justify-center w-full h-full bg-[rgba(0,0,0,.5)] text-white">
        <div className="max-w-3xl justify-center items-center flex flex-col my-20 rounded-xl p-12 gap-4">
          <h1 className={cn("text-5xl md:text-8xl", titleFont.className)}>
            Hieu & Trang
          </h1>
          <h2>{weddingLocation}</h2>
          <h2>{format(new Date(weddingDate), "dd MMMM yyyy")}</h2>
          {isOver ? (
            <div className="text-xl md:text-3xl text-center">
              Wedding is over! Thank you for coming! 🎉
            </div>
          ) : (
            <div className="flex flex-col items-center gap-8">
              <h3 className="text-lg md:text-3xl">
                Ready up! The wedding is coming on
              </h3>
              <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                  <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": days }}></span>
                  </span>
                  days
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                  <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": hours }}></span>
                  </span>
                  hours
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                  <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": minutes }}></span>
                  </span>
                  min
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                  <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": seconds }}></span>
                  </span>
                  sec
                </div>
              </div>
            </div>
          )}
          <button className="btn btn-primary">
            <Link href="/discover">Discover</Link>
          </button>
        </div>
      </div>
    </main>
  );
}
