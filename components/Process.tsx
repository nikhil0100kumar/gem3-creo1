import React from 'react';
import { motion } from 'framer-motion';
import { RevealText } from './ui/RevealText';

const steps = [
  { id: "01", title: "DISCOVERY & VISION", desc: "We begin by listening. Understanding your needs, your site, and your dreams." },
  { id: "02", title: "CONCEPT & DESIGN", desc: "Translating ideas into form. Sketches, 3D models, and material selection." },
  { id: "03", title: "COLLABORATION & BUILD", desc: "Working closely with engineers and builders to ensure precision." },
  { id: "04", title: "DELIVERY & IMPACT", desc: "The final walkthrough. Handing over the keys to your new reality." },
];

export const Process: React.FC = () => {
  return (
    <section className="relative w-full bg-secondary text-white py-20">
      <div className="flex flex-col md:flex-row">
        {/* Left Sticky Header */}
        <div className="w-full md:w-1/2 h-auto md:h-screen sticky top-0 flex flex-col justify-center px-6 md:px-10 py-20 md:py-0 z-10 bg-secondary">
          <RevealText>
            <h2 className="font-display text-6xl md:text-8xl font-bold uppercase leading-none mb-8">
              From Vision<br />To Reality
            </h2>
          </RevealText>
          <p className="text-gray-400 max-w-xs leading-relaxed">
            Our proven methodology ensures that every detail is considered, from the first sketch to the final stone.
          </p>
        </div>

        {/* Right Scrolling List */}
        <div className="w-full md:w-1/2 px-6 md:px-10 pb-20 md:pb-0">
          {steps.map((step) => (
            <div key={step.id} className="min-h-[50vh] md:min-h-screen flex flex-col justify-center border-b border-white/10 last:border-none group">
              <motion.div
                initial={{ opacity: 0.3 }}
                whileInView={{ opacity: 1 }}
                viewport={{ margin: "-20% 0px -20% 0px" }}
                transition={{ duration: 0.5 }}
              >
                <span className="font-display text-4xl md:text-6xl text-white/20 font-bold mb-4 block">
                  {step.id}/
                </span>
                <h3 className="font-display text-4xl md:text-6xl font-bold uppercase mb-6 group-hover:text-white transition-colors">
                  {step.title}
                </h3>
                <p className="font-sans text-xl text-gray-400 max-w-md leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};