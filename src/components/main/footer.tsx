"use client";
import { BookImage, Headset, Home } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();
  const handleNavigate = (path: string) => {
    router.push(path);
  };
  return (
    <div className="btm-nav">
      <button
        onClick={() => handleNavigate("/discover")}
        className={`${
          pathname === "/discover" ? "active" : ""
        } bg-pink-200 text-pink-600 border-pink-600`}
      >
        <Home />
        <b className="btm-nav-label">Discover</b>
      </button>
      <button
        onClick={() => handleNavigate("/albums")}
        className={`${
          pathname === "/albums" ? "active" : ""
        } bg-blue-200 text-blue-600 border-blue-600`}
      >
        <BookImage />
        <b className="btm-nav-label">Albums</b>
      </button>
      <button
        onClick={() => handleNavigate("/contact")}
        className={`${
          pathname === "/contact" ? "active" : ""
        } bg-teal-200 text-teal-600 border-teal-600`}
      >
        <Headset />
        <b className="btm-nav-label">Contact</b>
      </button>
    </div>
  );
}
