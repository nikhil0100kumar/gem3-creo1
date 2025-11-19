import React from 'react';
import { motion } from 'framer-motion';
import { RevealText } from './ui/RevealText';
import { MagneticButton } from './ui/MagneticButton';

const projects = [
  {
    id: 1,
    title: "Villa Nova",
    location: "Copenhagen, Denmark",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
    className: "col-span-1 md:col-span-2 aspect-[4/3]"
  },
  {
    id: 2,
    title: "The Obsidian",
    location: "Kyoto, Japan",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop",
    className: "col-span-1 aspect-[3/4] mt-0 md:mt-32"
  },
  {
    id: 3,
    title: "Concrete Solace",
    location: "Portland, USA",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop",
    className: "col-span-1 aspect-square"
  }
];

export const Projects: React.FC = () => {
  return (
    <section className="w-full bg-primary py-32 px-6 md:px-10">
      <div className="flex flex-col items-center text-center mb-24">
        <RevealText>
          <h2 className="font-display text-8xl md:text-[10rem] leading-[0.8] font-bold uppercase text-secondary">
            Selected
          </h2>
        </RevealText>
        <RevealText delay={0.1}>
          <h2 className="font-display text-8xl md:text-[10rem] leading-[0.8] font-bold uppercase text-transparent stroke-text-black">
            Projects
          </h2>
        </RevealText>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20">
        {projects.map((project) => (
          <div key={project.id} className={`relative group cursor-pointer overflow-hidden ${project.className}`}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="w-full h-full"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
              <h3 className="font-display text-4xl uppercase font-bold">{project.title}</h3>
              <p className="font-sans text-sm tracking-widest mt-2">{project.location}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <MagneticButton>
          <button className="px-10 py-4 border border-secondary rounded-full text-secondary uppercase tracking-widest text-xs font-bold hover:bg-secondary hover:text-white transition-all duration-300">
            View All Projects
          </button>
        </MagneticButton>
      </div>

      <style>{`
        .stroke-text-black {
          -webkit-text-stroke: 2px black;
          color: transparent;
        }
      `}</style>
    </section>
  );
};