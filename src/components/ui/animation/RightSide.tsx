import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
interface RightSideProps {
  children: React.ReactNode;
}

export const RightSide = ({ children }: RightSideProps) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.3"],
  });
  const translateX = useTransform(scrollYProgress, [0, 1], [300, 0]);
  return (
    <motion.div
      ref={element}
      style={{
        opacity: scrollYProgress,
        translateX,
      }}
    >
      {children}
    </motion.div>
  );
};
