"use client";

import SplashScreen from "@/components/ui/SplashScreen";
import { cn } from "@/lib/utils";
import { fontSans } from "@/utils/fonts";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import "./assets/globals.scss";
import SakuraEffect from "@/components/ui/Sakura";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) {
      return;
    }
  }, [isLoading]);
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased w-full",
          fontSans.variable
        )}
      >
        <SakuraEffect>
          {isLoading && isHome ? (
            <SplashScreen
              finishLoading={() => {
                setIsLoading(false);
              }}
            />
          ) : (
            <>{children}</>
          )}
        </SakuraEffect>
      </body>
    </html>
  );
}
