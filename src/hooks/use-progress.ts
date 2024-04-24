import { useEffect, useState } from "react";

const useProgress = (duration: number) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + (1000 / duration) * 100;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return { progress };
};

export { useProgress };
