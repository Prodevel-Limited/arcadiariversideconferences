import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  duration?: number;
}

export const Reveal = ({ 
  children, 
  width = "100%", 
  delay = 0.2,
  direction = "up",
  distance = 30,
  duration = 0.8
}: RevealProps) => {
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  return (
    <div className="relative overflow-hidden w-full" style={{ width }}>
      <motion.div
        variants={{
          hidden: { 
            opacity: 0, 
            ...directions[direction] 
          },
          visible: { 
            opacity: 1, 
            x: 0, 
            y: 0 
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ 
          duration, 
          delay, 
          ease: [0.22, 1, 0.36, 1] 
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
