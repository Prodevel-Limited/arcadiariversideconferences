import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [0.4, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={ref} className="relative h-[95vh] flex items-center justify-center overflow-hidden bg-brand-primary">
      {/* Background Parallax Effect */}
      <motion.div 
        style={{ y, scale, opacity }}
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 z-0 bg-[url('https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg')] bg-cover bg-center"
      />
      
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-brand-primary/10 via-brand-primary/40 to-brand-primary" />

      <motion.div 
        style={{ y: textY }}
        className="container-premium relative z-20 text-center"
      >
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-brand-accent/30"></div>
            <span className="text-brand-accent text-xs font-bold uppercase tracking-[0.6em]">
              Barking Riverside, East London
            </span>
            <div className="h-[1px] w-12 bg-brand-accent/30"></div>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-display font-bold mb-10 leading-[0.85] tracking-tighter uppercase">
            WHERE EAST LONDON <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-white to-brand-accent bg-[length:200%_auto] animate-gradient-x">
              MEANS BUSINESS
            </span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-white/50 mb-16 font-light leading-relaxed">
            Premier conference and event spaces in Barking Riverside—for organisations that demand more than a room.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <a 
              href="/venues" 
              className="group relative px-12 py-5 bg-brand-accent text-brand-primary font-bold uppercase tracking-[0.2em] text-xs overflow-hidden transition-all duration-500 w-full sm:w-auto"
            >
              <span className="relative z-10">Explore Our Spaces</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </a>
            <a 
              href="/enquire" 
              className="group px-12 py-5 border border-white/10 text-white font-bold uppercase tracking-[0.2em] text-xs hover:border-brand-accent hover:text-brand-accent transition-all duration-500 w-full sm:w-auto"
            >
              Book a Viewing
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Industrial Grid Overlay */}
      <div className="absolute inset-0 z-10 bg-grid pointer-events-none opacity-20" />
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 hidden md:block"
      >
        <div className="flex flex-col items-center gap-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20 vertical-rl">Scroll</span>
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-16 bg-gradient-to-b from-brand-accent to-transparent" 
          />
        </div>
      </motion.div>
    </section>
  );
}
