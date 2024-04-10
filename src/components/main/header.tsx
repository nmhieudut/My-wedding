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
          </div>
          <a className="btn btn-ghost text-xl" href="/">
            TH
          </a>
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
