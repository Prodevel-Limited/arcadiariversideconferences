import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-brand-primary">
      {/* Background Parallax Effect */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-[url('https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg')] bg-cover bg-center"
      />
      
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-brand-primary/20 via-brand-primary/60 to-brand-primary" />

      <div className="container-premium relative z-20 text-center">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className="text-brand-accent text-xs font-bold uppercase tracking-[0.4em] mb-4 block">
            Barking Riverside, London
          </span>
          <h1 className="text-5xl md:text-8xl font-display font-bold mb-8 leading-[0.9] tracking-tighter">
            WHERE INDUSTRIAL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-amber-500">
              MEETS ELEGANCE
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 mb-12 font-light leading-relaxed">
            The premier destination for corporate leaders, innovators, and creators in the heart of East London's regeneration.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="/venues" 
              className="px-10 py-4 bg-white text-brand-primary font-bold uppercase tracking-widest text-sm hover:bg-brand-accent hover:text-white transition-all duration-300 w-full sm:w-auto"
            >
              Explore Venues
            </a>
            <a 
              href="/about" 
              className="px-10 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-sm hover:border-white transition-all duration-300 w-full sm:w-auto"
            >
              Our Vision
            </a>
          </div>
        </motion.div>
      </div>

      {/* Industrial Grid Overlay */}
      <div className="absolute inset-0 z-10 bg-grid pointer-events-none opacity-30" />
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-brand-accent to-transparent" />
      </motion.div>
    </section>
  );
}
