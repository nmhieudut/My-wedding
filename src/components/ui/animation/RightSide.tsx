import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
interface RightSideProps {
  children: React.ReactNode;
}

export const RightSide = ({ children }: RightSideProps) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "1.5 end"],
  });
  return (
    <motion.div
      ref={element}
      style={{
        opacity: scrollYProgress,
      }}
      className="flex-1"
    >
      {children}
    </motion.div>
  );
};
