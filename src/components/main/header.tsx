"use client";
import React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
          <nav className="flex items-center">
            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                if (theme === "dark") {
                  setTheme("light");
                } else {
                  setTheme("dark");
                }
              }}
            >
              {theme === "dark" ? (
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              ) : (
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
