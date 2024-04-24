"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

type Props = {
  children: React.ReactNode;
};

export default function Section({ children, ...rest }: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.section
      className="relative min-h-[250vh] h-full flex justify-center w-full border"
      ref={ref}
      style={{ opacity }}
      {...rest}
    >
      <div className="sticky top-0 left-0 h-full">{children}</div>
    </motion.section>
  );
}
