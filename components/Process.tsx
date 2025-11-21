import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  {
    id: "01",
    title: "DISCOVERY & VISION",
    desc: "We begin by listening. Understanding your needs, your site, and your dreams. Every great structure starts with a conversation.",
    image: "https://images.unsplash.com/photo-1517581177697-a533d8d55178?q=80&w=2000&auto=format&fit=crop" // Meeting/Sketching
  },
  {
    id: "02",
    title: "CONCEPT & DESIGN",
    desc: "Translating ideas into form. Sketches, 3D models, and material selection. We iterate until the design speaks to the soul.",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop" // Architectural Model/Draft
  },
  {
    id: "03",
    title: "COLLABORATION & BUILD",
    desc: "Working closely with engineers and builders to ensure precision. We manage the chaos of construction to deliver peace of mind.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000&auto=format&fit=crop" // Construction/Site
  },
  {
    id: "04",
    title: "DELIVERY & IMPACT",
    desc: "The final walkthrough. Handing over the keys to your new reality. We ensure every detail is perfect before you step inside.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2000&auto=format&fit=crop" // Finished Luxury Home
  },
];

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative w-full bg-secondary text-white py-20">
      {/* Desktop View */}
      <div className="hidden md:flex flex-col md:flex-row">
        {/* Left Sticky Header & Dynamic Image */}
        <div className="w-full md:w-1/2 h-[40vh] md:h-screen sticky top-0 flex flex-col justify-center z-10 bg-secondary overflow-hidden">

          {/* Dynamic Background Image Layer */}
          <div className="absolute inset-0 z-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <img
                  src={steps[activeStep].image}
                  alt={steps[activeStep].title}
                  className="w-full h-full object-cover opacity-50"
                />
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent" />
                <div className="absolute inset-0 bg-secondary/20" />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative z-10 px-6 md:px-10 pointer-events-none">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              key={`label-${activeStep}`}
              className="block text-accent font-bold tracking-widest uppercase text-xs md:text-sm mb-2 md:mb-4"
            >
              ● Step {steps[activeStep].id}
            </motion.span>

            <h2 className="font-display text-3xl md:text-8xl font-bold uppercase leading-[0.9] mb-4 md:mb-8 drop-shadow-2xl">
              From Vision<br />To Reality
            </h2>

            <p className="text-white/90 max-w-sm leading-relaxed font-medium drop-shadow-lg text-sm md:text-lg">
              Our proven methodology ensures that every detail is considered, from the first sketch to the final stone.
            </p>
          </div>
        </div>

        {/* Right Scrolling List */}
        <div className="w-full md:w-1/2 px-6 md:px-10 pb-20 md:pb-0 bg-secondary/90 backdrop-blur-sm z-20">
          {steps.map((step, index) => (
            <div key={step.id} className="min-h-[50vh] md:min-h-screen flex flex-col justify-center border-b border-white/10 last:border-none group py-10 md:py-0">
              <motion.div
                initial={{ opacity: 0.2, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ margin: "-50% 0px -50% 0px" }}
                onViewportEnter={() => setActiveStep(index)}
                transition={{ duration: 0.6 }}
                className="cursor-default"
              >
                <span className={`font-display text-4xl md:text-6xl font-bold mb-4 block transition-colors duration-500 ${activeStep === index ? 'text-white' : 'text-white/20'}`}>
                  {step.id}/
                </span>
                <h3 className={`font-display text-3xl md:text-5xl font-bold uppercase mb-6 transition-colors duration-500 ${activeStep === index ? 'text-white' : 'text-white/40'}`}>
                  {step.title}
                </h3>
                <p className={`font-sans text-lg md:text-xl max-w-md leading-relaxed transition-colors duration-500 ${activeStep === index ? 'text-gray-200' : 'text-gray-600'}`}>
                  {step.desc}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex flex-col gap-16 px-6">
        <div className="mb-8">
          <span className="text-xs font-bold tracking-widest uppercase text-accent mb-2 block">● Our Process</span>
          <h2 className="font-display text-5xl font-bold uppercase leading-[0.9]">
            From Vision<br />To Reality
          </h2>
        </div>

        {steps.map((step) => (
          <div key={step.id} className="flex flex-col gap-6">
            <div className="w-full h-[300px] overflow-hidden relative">
              <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                <span className="text-xs font-bold text-white">{step.id}</span>
              </div>
            </div>
            <div>
              <h3 className="font-display text-3xl font-bold uppercase mb-3">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};