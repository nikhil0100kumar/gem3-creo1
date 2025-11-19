import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { Vista } from './components/Vista';
import { Story } from './components/Story';
import { Projects } from './components/Projects';
import { Process } from './components/Process';
import { Collection } from './components/Collection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureDirection: 'vertical',
      smoothWheel: true,
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
    <div className="w-full min-h-screen bg-secondary font-sans antialiased selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <Vista />
        <Story />
        <Projects />
        <Process />
        <Collection />
      </main>
      <Footer />
    </div>
  );
};

export default App;