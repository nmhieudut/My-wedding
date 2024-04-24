import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
interface LeftSideProps {
  children: React.ReactNode;
}

export const LeftSide = ({ children }: LeftSideProps) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "1.33 end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  return (
    <motion.div ref={element} style={{ opacity }} className="flex-1">
      {children}
    </motion.div>
  );
};
