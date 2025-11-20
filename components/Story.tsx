import React from 'react';
import { motion } from 'framer-motion';
import { RevealText } from './ui/RevealText';

export const Story: React.FC = () => {
  return (
    <section className="w-full bg-primary py-20 px-6 md:px-10">
      <div className="flex flex-col md:flex-row h-full gap-10 md:gap-0">
        {/* Left Image - Explicit height constraints */}
        <div className="w-full md:w-1/2 h-[60vh] md:h-[90vh] overflow-hidden relative rounded-lg md:rounded-none">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1518005052357-e9847508d4ee?q=80&w=2552&auto=format&fit=crop"
            alt="Modern Architecture"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center md:pl-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-widest uppercase text-accent mb-8 block"
          >
            ● Our Story
          </motion.span>
          
          <div className="mb-10">
             <RevealText tag="h3" className="font-display text-5xl md:text-8xl leading-[0.9] font-medium text-secondary">
              Timeless<br />Architecture
            </RevealText>
          </div>

          <div className="space-y-8 text-lg md:text-xl text-secondary/80 max-w-md leading-relaxed font-light">
            <RevealText delay={0.2} tag="p">
              Founded in 1998, CREO Constructions has grown to become a global leader in minimalist luxury. We believe that a home should be a sanctuary, a place that breathes with its inhabitants.
            </RevealText>
            <RevealText delay={0.3} tag="p">
              Our work is characterized by clean lines, raw materials, and an unwavering dedication to the natural environment. Every project is a dialogue between the land and the structure.
            </RevealText>
          </div>
        </div>
      </div>
    </section>
  );
};