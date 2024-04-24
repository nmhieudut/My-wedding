import { SPLASH_SCREEN_DURATION } from "@/constant/home";
import { useProgress } from "@/hooks/use-progress";
import Image from "next/image";

export default function Loading() {
  const { progress } = useProgress(SPLASH_SCREEN_DURATION);
  return (
    <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
      <div id="logo" className="w-24 h-24 rounded-2xl overflow-hidden">
        <Image
          src="/images/loader.gif"
          alt="Logo"
          width={96}
          height={96}
          layout={"responsive"}
          unoptimized={true}
        />
      </div>
      <progress className="progress w-56" value={progress} max="100" />
    </div>
  );
}
