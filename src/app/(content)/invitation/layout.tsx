"use client";

import "@/app/assets/globals.css";
import Footer from "@/components/main/footer";
import { Header } from "@/components/main/header";
import { cn } from "@/lib/utils";
import { fontSans } from "@/utils/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // use next/navigation
  return (
    <html lang="en" data-theme="cupcake">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased w-full",
          fontSans.variable
        )}
      >
        <div className="relative flex min-h-screen flex-col bg-background">
          <Header />
          <main className="flex-1">
            <div className="container">{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
