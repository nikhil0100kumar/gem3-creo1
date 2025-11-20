import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RevealText } from './ui/RevealText';

const steps = [
  { 
    id: "01", 
    title: "DISCOVERY & VISION", 
    desc: "We begin by listening. Understanding your needs, your site, and your dreams.",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop"
  },
  { 
    id: "02", 
    title: "CONCEPT & DESIGN", 
    desc: "Translating ideas into form. Sketches, 3D models, and material selection.",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2000&auto=format&fit=crop"
  },
  { 
    id: "03", 
    title: "COLLABORATION & BUILD", 
    desc: "Working closely with engineers and builders to ensure precision.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop"
  },
  { 
    id: "04", 
    title: "DELIVERY & IMPACT", 
    desc: "The final walkthrough. Handing over the keys to your new reality.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2000&auto=format&fit=crop"
  },
];

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative w-full bg-secondary text-white py-20">
      <div className="flex flex-col md:flex-row">
        {/* Left Sticky Header & Dynamic Image */}
        <div className="w-full md:w-1/2 h-auto md:h-screen sticky top-0 flex flex-col justify-center px-6 md:px-10 py-20 md:py-0 z-10 bg-secondary overflow-hidden">
          
          {/* Background Image Layer */}
          <div className="absolute inset-0 z-0 opacity-20">
            {steps.map((step, index) => (
              <motion.img
                key={step.id}
                src={step.image}
                alt={step.title}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ 
                  opacity: activeStep === index ? 1 : 0,
                  scale: activeStep === index ? 1 : 1.1
                }}
                transition={{ duration: 0.7 }}
              />
            ))}
            <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply" />
          </div>

          <div className="relative z-10">
            <RevealText>
              <h2 className="font-display text-6xl md:text-8xl font-bold uppercase leading-none mb-8">
                From Vision<br />To Reality
              </h2>
            </RevealText>
            <p className="text-gray-400 max-w-xs leading-relaxed">
              Our proven methodology ensures that every detail is considered, from the first sketch to the final stone.
            </p>
          </div>
        </div>

        {/* Right Scrolling List */}
        <div className="w-full md:w-1/2 px-6 md:px-10 pb-20 md:pb-0 bg-secondary/50 backdrop-blur-sm z-10">
          {steps.map((step, index) => (
            <div key={step.id} className="min-h-[50vh] md:min-h-screen flex flex-col justify-center border-b border-white/10 last:border-none group">
              <motion.div
                initial={{ opacity: 0.3 }}
                whileInView={{ opacity: 1 }}
                viewport={{ margin: "-50% 0px -50% 0px" }}
                onViewportEnter={() => setActiveStep(index)}
                transition={{ duration: 0.5 }}
              >
                <span className={`font-display text-4xl md:text-6xl font-bold mb-4 block transition-colors duration-500 ${activeStep === index ? 'text-white' : 'text-white/20'}`}>
                  {step.id}/
                </span>
                <h3 className={`font-display text-4xl md:text-6xl font-bold uppercase mb-6 transition-colors duration-500 ${activeStep === index ? 'text-white' : 'text-white/40'}`}>
                  {step.title}
                </h3>
                <p className={`font-sans text-xl max-w-md leading-relaxed transition-colors duration-500 ${activeStep === index ? 'text-gray-400' : 'text-gray-700'}`}>
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