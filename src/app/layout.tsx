"use client";

import { cn } from "@/lib/utils";
import { fontSans } from "@/utils/fonts";
import "./assets/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased w-full",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
