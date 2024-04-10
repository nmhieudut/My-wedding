"use client";

import "@/app/assets/globals.scss";
import Footer from "@/components/main/footer";
import { Header } from "@/components/main/header";
import SakuraEffect from "@/components/ui/Sakura";
import { cn } from "@/lib/utils";
import { fontSans } from "@/utils/fonts";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [breadcrumbs, setBreadcrumbs] = useState<
    {
      name: string;
      path: string;
    }[]
  >([]);
  useEffect(() => {
    const path = window.location.pathname;
    const paths = path.split("/");
    paths.shift();
    const breadcrumbs = paths.map((path, index) => {
      return {
        name: path.charAt(0).toUpperCase() + path.slice(1),
        path: paths.slice(0, index + 1).join("/"),
      };
    });
    setBreadcrumbs(breadcrumbs);
  }, []);
  return (
    <html lang="en" data-theme="cupcake">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased w-full",
          fontSans.variable
        )}
      >
        <SakuraEffect>
          <div className="flex min-h-screen flex-col">
            <Header />
            <div className="container">
              <div className="text-sm breadcrumbs">
                <ul>
                  {breadcrumbs.map((breadcrumb, index) => {
                    return (
                      <li key={index}>
                        <a
                          className="flex items-center gap-4"
                          href={`/${breadcrumb.path}`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="w-4 h-4 stroke-current"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                            ></path>
                          </svg>
                          {breadcrumb.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <main className="flex-1">{children}</main>
            <Footer />
          </div>{" "}
        </SakuraEffect>
      </body>
    </html>
  );
}
