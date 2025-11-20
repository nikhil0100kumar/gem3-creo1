import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main Dot - Force 3D Transform for GPU Layer */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block will-change-transform"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          x: "-50%",
          y: "-50%",
          transform: "translateZ(0)"
        }}
      />
      
      {/* Trailing Ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-white rounded-full pointer-events-none z-[9998] mix-blend-difference hidden md:block will-change-transform"
        style={{
          translateX: useSpring(cursorX, { damping: 20, stiffness: 300 }),
          translateY: useSpring(cursorY, { damping: 20, stiffness: 300 }),
          x: "-50%",
          y: "-50%",
          transform: "translateZ(0)"
        }}
      />
    </>
  );
};