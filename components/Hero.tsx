import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const revealVariants = {
  hidden: { y: "100%" },
  visible: (i: number) => ({
    y: "0%",
    transition: {
      duration: 1.2,
      ease: [0.25, 1, 0.5, 1],
      delay: 0.5 + i * 0.1,
    },
  }),
};

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  // Parallax + Zoom Out effect
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const scale = useTransform(scrollY, [0, 1000], [1.1, 1.2]); 
  // Adjusted opacity to stay visible longer
  const opacity = useTransform(scrollY, [0, 1000], [1, 0.5]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-secondary text-white">
      {/* Background Image Container - Explicit Z-Index 0 */}
      <motion.div 
        style={{ y, scale, opacity }} 
        className="absolute inset-0 w-full h-full z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=2674&auto=format&fit=crop"
          alt="Brutalist Architecture"
          className="w-full h-full object-cover"
        />
        {/* Dark Gradient Overlays for text readability */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-black/50 opacity-90" />
      </motion.div>

      <div className="relative z-10 w-full h-full flex flex-col justify-between pb-12 px-6 md:px-12 pt-32">
        {/* Top details */}
        <motion.div 
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 1.5, duration: 1 }}
           className="flex justify-between items-start w-full border-t border-white/20 pt-6"
        >
          <span className="text-xs font-bold tracking-widest uppercase">Bangalore, IN</span>
          <span className="text-xs font-bold tracking-widest uppercase text-right">Architecture &<br/>Construction</span>
        </motion.div>

        {/* Main Title */}
        <div className="flex flex-col items-center md:items-start w-full pointer-events-none">
           {/* Line 1 */}
           <div className="overflow-hidden">
             <motion.h1 
               custom={0}
               variants={revealVariants}
               initial="hidden"
               animate="visible"
               className="font-display text-[18vw] md:text-[14rem] leading-[0.8] font-bold uppercase tracking-tighter text-white mix-blend-overlay"
             >
               Built
             </motion.h1>
           </div>
           
           {/* Line 2 - Indented */}
           <div className="overflow-hidden self-center md:self-end md:mr-20">
             <motion.h1 
                custom={1}
                variants={revealVariants}
                initial="hidden"
                animate="visible"
                className="font-display text-[18vw] md:text-[14rem] leading-[0.8] font-bold uppercase tracking-tighter text-transparent stroke-text-white"
             >
               Different
             </motion.h1>
           </div>
        </div>

        {/* Bottom Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="w-full flex justify-between items-end"
        >
            <div className="text-xs font-medium tracking-widest">EST. 1998</div>
            <div className="flex flex-col items-center gap-2">
              <div className="text-[10px] uppercase tracking-widest writing-mode-vertical">Scroll</div>
              <div className="w-[1px] h-12 bg-white/50 overflow-hidden">
                <motion.div 
                  animate={{ y: ["-100%", "100%"] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                  className="w-full h-1/2 bg-white"
                />
              </div>
            </div>
        </motion.div>
      </div>

      <style>{`
        .stroke-text-white {
          -webkit-text-stroke: 2px rgba(255,255,255,0.8);
          color: transparent;
        }
        .writing-mode-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
        @media (max-width: 768px) {
          .stroke-text-white {
            -webkit-text-stroke: 1px rgba(255,255,255,0.8);
          }
        }
      `}</style>
    </section>
  );
};