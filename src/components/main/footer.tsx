import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="py-6 md:px-8 md:py-0 border shadow-xl">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{/* */}{" "}
          <Link
            href="https://facebook.com/hieumaxnho"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            nmhieudut - Pro Front-end Developer.
          </Link>
        </p>
      </div>
    </footer>
  );
}
