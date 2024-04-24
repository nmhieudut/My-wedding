"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Words = ({ value }: { value: string }) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start center"],
  });
  const words = value.split(" ");

  return (
    <motion.p className="flex flex-wrap" ref={element}>
      {words.map((word, index) => {
        const start = index / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={index} range={[start, end]} progress={scrollYProgress}>
            {word}&nbsp;
          </Word>
        );
      })}
    </motion.p>
  );
};

const Word = ({ children, range, progress }: any) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative">
      <span className="absolute opacity-10">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};
