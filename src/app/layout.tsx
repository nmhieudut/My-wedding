"use client";

import { cn } from "@/lib/utils";
import { fontSans } from "@/utils/fonts";
import "./assets/globals.css";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SplashScreen from "@/components/ui/SplashScreen";

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
        {isLoading && isHome ? (
          <SplashScreen
            finishLoading={() => {
              setIsLoading(false);
            }}
          />
        ) : (
          <>{children}</>
        )}
      </body>
    </html>
  );
}
