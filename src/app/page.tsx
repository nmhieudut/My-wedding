import Banner from "@/components/main/banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hieu & Trang's Wedding",
};

export default function Home() {
  return (
    <div className="h-screen w-full">
      <Banner />
    </div>
  );
}
