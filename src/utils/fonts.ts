import { Nunito_Sans as FontSans, Sacramento } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const titleFont = Sacramento({
  weight: "400",
  subsets: ["latin"],
});
