import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface RevealTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
}

export const RevealText: React.FC<RevealTextProps> = ({ 
  children, 
  className = "", 
  delay = 0, 
  duration = 0.8,
  tag = 'div' 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const Tag = tag as any;

  return (
    <Tag ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        animate={isInView ? { y: "0%" } : { y: "100%" }}
        transition={{ 
          duration: duration, 
          ease: [0.33, 1, 0.68, 1], // Custom ease similar to easeOutCubic/Quart
          delay: delay 
        }}
      >
        {children}
      </motion.div>
    </Tag>
  );
};