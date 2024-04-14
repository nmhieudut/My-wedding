import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
interface LeftSideProps {
  children: React.ReactNode;
}

export const LeftSide = ({ children }: LeftSideProps) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.3"],
  });
  const opacity = useTransform(scrollYProgress, [0.7, 1], [0.8, 1]);
  const translateX = useTransform(scrollYProgress, [0, 1], [-300, 0]);
  return (
    <motion.div
      ref={element}
      style={{
        opacity,
        translateX,
      }}
    >
      {children}
    </motion.div>
  );
};
