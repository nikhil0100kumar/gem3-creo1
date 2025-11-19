import React from 'react';
import { motion } from 'framer-motion';
import { RevealText } from './ui/RevealText';
import { MagneticButton } from './ui/MagneticButton';
import { ArrowRight } from 'lucide-react';

export const Manifesto: React.FC = () => {
  return (
    <section className="relative w-full bg-primary text-secondary py-32 px-6 md:px-10 rounded-t-[3rem] -mt-10 z-20">
      <div className="flex flex-col md:flex-row gap-20 md:gap-0">
        {/* Left */}
        <div className="w-full md:w-1/2">
          <RevealText className="w-full">
            <h2 className="font-display text-7xl md:text-9xl font-bold uppercase leading-[0.9] tracking-tighter">
              Design You<br />Can Feel
            </h2>
          </RevealText>
        </div>

        {/* Right */}
        <div className="w-full md:w-1/2 flex flex-col gap-12 pt-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="font-serif text-3xl md:text-4xl leading-tight font-light text-secondary">
              We keep exploring, work together, grow brilliance, and shape tomorrow.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="max-w-md"
          >
            <p className="text-accent text-lg leading-relaxed mb-8">
              We partner with clients from day one to build homes that are not just structures, but extensions of the human spirit. Our philosophy is rooted in the belief that true luxury lies in simplicity and purpose.
            </p>
            
            <MagneticButton>
              <button className="group flex items-center gap-4 px-8 py-4 bg-secondary text-white rounded-full uppercase tracking-widest text-xs font-bold hover:bg-secondary/90 transition-colors">
                Explore More About Us
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};