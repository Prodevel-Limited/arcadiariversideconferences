import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function HeroSovereign() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const blur = useTransform(scrollYProgress, [0, 0.5], [0, 15]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section ref={containerRef} className="relative h-[100vh] bg-brand-primary overflow-hidden flex items-center justify-center">
      {/* Background Cinematic Layer */}
      <motion.div 
        style={{ scale, opacity, filter: `blur(${blur}px)` }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-brand-primary/50 z-10" />
        <img 
          src="https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg" 
          alt="Arcadia Riverside" 
          className="w-full h-full object-cover grayscale"
        />
      </motion.div>

      {/* Structural Elements */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="container-premium h-full relative">
          <motion.div 
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-8 md:left-16 top-0 bottom-0 w-px bg-white/5 origin-top"
          />
          <motion.div 
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-8 md:right-16 top-0 bottom-0 w-px bg-white/5 origin-bottom"
          />
        </div>
      </div>

      {/* Center Narrative */}
      <motion.div 
        style={{ y: textY }}
        className="container-premium relative z-30 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto"
        >
          <div className="mb-12 flex justify-center items-center gap-6">
            <div className="h-px w-12 bg-brand-accent/30"></div>
            <span className="text-brand-accent text-[10px] font-bold uppercase tracking-[0.6em]">Barking Riverside, East London</span>
            <div className="h-px w-12 bg-brand-accent/30"></div>
          </div>

          <h1 className="text-6xl md:text-9xl font-display font-bold text-white leading-[0.8] tracking-tighter uppercase mb-16">
            ELEVATE <br />
            <span className="text-white/20 italic">YOUR EVENT.</span>
          </h1>

          <p className="text-white/40 text-xl md:text-2xl font-premium leading-relaxed mb-20 max-w-2xl mx-auto">
            Premier conference and event spaces in East London.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-16">
            <a 
              href="/enquire" 
              className="group relative flex flex-col items-center"
            >
              <span className="text-[11px] font-bold uppercase tracking-[0.5em] text-white mb-4 group-hover:text-brand-accent transition-colors mr-[-0.5em]">Book a Viewing</span>
              <div className="h-px w-full bg-white/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-accent -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
              </div>
            </a>
            
            <a 
              href="/venues" 
              className="group relative flex flex-col items-center"
            >
              <span className="text-[11px] font-bold uppercase tracking-[0.5em] text-white/40 mb-4 group-hover:text-white transition-colors mr-[-0.5em]">Explore Our Spaces</span>
              <div className="h-px w-full bg-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
              </div>
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Info Bar */}
      <div className="absolute bottom-12 left-0 w-full z-40">
        <div className="container-premium flex justify-between items-end border-t border-white/5 pt-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-pulse"></div>
              <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-brand-accent">Now Accepting Bookings</span>
            </div>
            <div className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em]">Conferences • Events • Meetings</div>
          </div>
          
          <div className="hidden md:block">
            <div className="text-[9px] font-bold text-white/10 uppercase tracking-[0.5em] text-right">
              Arcadia Riverside <br />
              East London's Premier Venue
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
