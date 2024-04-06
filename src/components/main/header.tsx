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
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            Logo
          </a>
          <nav className="flex items-center gap-4 text-sm lg:gap-6">
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/docs"
            >
              Docs
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/docs/components"
            >
              Components
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/themes"
            >
              Themes
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/examples"
            >
              Examples
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground"
              href="/blocks"
            >
              Blocks
            </a>
            <a
              className="hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block"
              href="https://github.com/shadcn-ui/ui"
            >
              GitHub
            </a>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
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
