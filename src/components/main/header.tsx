"use client";
import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";

export const Header: React.FC = () => {
  const browserTheme =
    typeof window !== "undefined" ? localStorage.getItem("theme") : "light";
  const [theme, setTheme] = useState(
    browserTheme === "light" ? "light" : "dark"
  );
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      document.querySelector("html")?.setAttribute("data-theme", localTheme);
    }
  }, [theme]);

  const handleToggle = (e: any) => {
    setTheme(e.target.checked ? "dark" : "light");
  };
  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                  href="/discover"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                  href="/contact"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                  href="/albums"
                >
                  Albums
                </a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl" href="/">
            TH
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <nav className="flex items-center gap-4 text-sm lg:gap-6"></nav>
          <ul className="menu menu-horizontal px-1">
            <li>
              <a
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="/invitations"
              >
                Home
              </a>
            </li>

            <li>
              <a
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="/contact"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="/albums"
              >
                Albums
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              onChange={handleToggle}
              checked={theme === "dark"}
            />

            {/* sun icon */}

            <Sun className="swap-on h-[1.2rem] w-[1.2rem] " />

            {/* moon icon */}

            <Moon className="swap-off" />
          </label>
        </div>
      </div>
    </header>
  );
};
