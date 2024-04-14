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
    offset: ["start 0.9", "start 0.3"],
  });

  return (
    <motion.section
      className="relative min-h-[150vh] h-full flex items-center justify-center w-full"
      ref={ref}
      style={{ opacity: scrollYProgress }}
      {...rest}
    >
      <motion.div className="sticky top-0 left-0 h-full">{children}</motion.div>
    </motion.section>
  );
}
