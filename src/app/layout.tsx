"use client";

import SplashScreen from "@/components/ui/SplashScreen";
import { cn } from "@/lib/utils";
import { fontSans } from "@/utils/fonts";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useRef } from "react";
// styles
import "./assets/globals.scss";
import "aos/dist/aos.css";
// plugins (effects)
import "@/components/plugins/pointer";

import ProgressBarProviders from "@/components/ui/progress-bar-provider";
import SakuraEffect from "@/components/ui/Sakura";
import Aos from "aos";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const containerRef = useRef();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) {
      return;
    }
  }, [isLoading]);

  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <html lang="en">
      <body
        className={cn(
          "bg-background font-sans antialiased w-full",
          fontSans.variable
        )}
      >
        <SakuraEffect />
        <ProgressBarProviders>
          {isLoading && isHome ? (
            <SplashScreen
              finishLoading={() => {
                setIsLoading(false);
              }}
            />
          ) : (
            <>{children}</>
          )}
        </ProgressBarProviders>
      </body>
    </html>
  );
}
