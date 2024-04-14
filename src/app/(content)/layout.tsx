"use client";

import "@/app/assets/globals.scss";
import Footer from "@/components/main/footer";
import { Header } from "@/components/main/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />

      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
