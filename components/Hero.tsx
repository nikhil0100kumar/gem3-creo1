import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { RevealText } from './ui/RevealText';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 800], [1, 0]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-secondary text-white">
      <motion.div 
        style={{ y, opacity, scale: 1.1 }} 
        className="absolute inset-0 w-full h-full z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2574&auto=format&fit=crop"
          alt="Brutalist Architecture"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay to ensure text contrast */}
        <div className="absolute inset-0 bg-black/20" />
        {/* Bottom gradient for seamless transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-transparent opacity-90" />
      </motion.div>

      <div className="relative z-10 w-full h-full flex flex-col justify-end pb-20 px-6 md:px-10 pointer-events-none">
        <div className="flex justify-between items-end w-full border-t border-white/20 pt-6">
          <div className="hidden md:block pointer-events-auto">
             <RevealText delay={0.5} className="text-sm tracking-widest text-gray-400 font-medium">
               EST. 1998
             </RevealText>
          </div>
          
          <div className="flex flex-col items-end md:items-center w-full md:w-auto text-right md:text-center">
             <RevealText delay={0.2} className="w-full">
               <h1 className="font-display text-[15vw] md:text-[12rem] leading-[0.85] font-bold uppercase tracking-tighter text-white">
                 Built
               </h1>
             </RevealText>
             <RevealText delay={0.35} className="w-full">
               <h1 className="font-display text-[15vw] md:text-[12rem] leading-[0.85] font-bold uppercase tracking-tighter text-transparent stroke-text-white md:ml-32">
                 Different
               </h1>
             </RevealText>
          </div>
          
          <div className="hidden md:block w-32 pointer-events-auto">
            {/* Spacer for layout balance */}
          </div>
        </div>
      </div>

      <style>{`
        .stroke-text-white {
          -webkit-text-stroke: 2px white;
          color: transparent;
        }
        @media (max-width: 768px) {
          .stroke-text-white {
            -webkit-text-stroke: 1px white;
          }
        }
      `}</style>
    </section>
  );
};