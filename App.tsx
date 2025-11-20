import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { Vista } from './components/Vista';
import { Story } from './components/Story';
import { Projects } from './components/Projects';
import { Process } from './components/Process';
import { Collection } from './components/Collection';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/ui/CustomCursor';

const App: React.FC = () => {
  
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureDirection: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-secondary font-sans antialiased selection:bg-white selection:text-black cursor-none relative overflow-x-hidden">
      <CustomCursor />
      
      {/* PERFORMANCE OPTIMIZED OVERLAYS */}
      {/* 1. Hardware Accelerated Noise (TranslateZ forces GPU layer) */}
      <div className="fixed inset-0 z-[99] pointer-events-none opacity-[0.05] mix-blend-overlay will-change-transform translate-z-0" 
           style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
             transform: 'translateZ(0)' 
           }}>
      </div>

      {/* 2. Dotted Grid Texture - CSS Gradient (High Performance) */}
      <div className="fixed inset-0 z-[1] pointer-events-none opacity-[0.15] will-change-transform translate-z-0"
           style={{
             backgroundImage: 'radial-gradient(#555 1px, transparent 1px)',
             backgroundSize: '40px 40px',
             transform: 'translateZ(0)'
           }}>
      </div>

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Manifesto />
        <Vista />
        <Story />
        <Projects />
        <Process />
        <Collection />
      </main>
      <Footer />
      
      <style>{`
        .translate-z-0 {
          transform: translateZ(0);
        }
        .will-change-transform {
          will-change: transform;
        }
      `}</style>
    </div>
  );
};

export default App;