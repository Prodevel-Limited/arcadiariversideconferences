import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ArrowUpRight, Wifi, Video, Utensils, Zap, Users } from 'lucide-react';

const features = [
  {
    id: "01",
    title: "Ultra-Fast WiFi",
    tag: "CONNECTIVITY",
    description: "Dedicated 1Gbps fibre ensures seamless video calls, live streaming, and hybrid events without interruption.",
    icon: Wifi,
    image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg"
  },
  {
    id: "02",
    title: "Professional AV",
    description: "4K projection, quality sound systems, and recording capabilities—everything your presentations need to shine.",
    tag: "TECHNOLOGY",
    icon: Video,
    image: "https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg"
  },
  {
    id: "03",
    title: "Bespoke Catering",
    description: "From working lunches to gala dinners, our catering partners create menus tailored to your event and budget.",
    tag: "HOSPITALITY",
    icon: Utensils,
    image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
  },
  {
    id: "04",
    title: "Hybrid Ready",
    description: "Reach audiences anywhere. Our spaces are equipped to broadcast your event to remote attendees worldwide.",
    tag: "FLEXIBILITY",
    icon: Zap,
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
  },
  {
    id: "05",
    title: "Dedicated Support",
    description: "Our events team handles the logistics so you can focus on your guests. From setup to breakdown, we've got you covered.",
    tag: "SERVICE",
    icon: Users,
    image: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg"
  }
];

export default function CommandCenter() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="py-40 bg-brand-primary relative overflow-hidden">
      {/* Structural Grid Backdrop */}
      <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
      
      <div className="container-premium relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-32 gap-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8 text-brand-accent">
              <div className="h-px w-12 bg-current opacity-30"></div>
              <span className="text-[10px] font-bold uppercase tracking-[0.5em]">What We Offer</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-display font-bold text-white uppercase leading-[0.85] tracking-tighter">
              EVERYTHING <br />
              <span className="text-white/20 italic">YOU NEED.</span>
            </h2>
          </div>
          <div className="lg:text-right">
            <p className="text-brand-accent text-[9px] font-bold uppercase tracking-[0.4em] mb-4">Full-Service Venue</p>
            <p className="text-white/30 max-w-xs lg:ml-auto text-sm font-light leading-relaxed">
              From technology to catering to on-the-day support, we take care of the details.
            </p>
          </div>
        </div>

        {/* Matrix Layout */}
        <div className="relative border-t border-white/5">
          {features.map((feature, idx) => (
            <div 
              key={feature.id}
              onMouseEnter={() => setActiveId(feature.id)}
              onMouseLeave={() => setActiveId(null)}
              className="group relative border-b border-white/5 transition-all duration-700 hover:bg-white/[0.02]"
            >
              <div className="flex flex-col lg:flex-row lg:items-center py-12 lg:py-16 relative z-10">
                {/* Meta Info */}
                <div className="lg:w-1/6 mb-6 lg:mb-0">
                  <span className="text-[10px] font-bold text-white/20 group-hover:text-brand-accent transition-colors">
                    {feature.id}
                  </span>
                </div>

                {/* Primary Content */}
                <div className="lg:w-2/6 mb-6 lg:mb-0">
                  <h3 className="text-3xl lg:text-4xl font-display font-bold text-white uppercase tracking-tight group-hover:translate-x-4 transition-transform duration-500">
                    {feature.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="lg:w-2/6 mb-8 lg:mb-0">
                  <p className="text-sm text-white/40 font-light leading-relaxed max-w-md group-hover:text-white/60 transition-colors">
                    {feature.description}
                  </p>
                </div>

                {/* Action & Tag */}
                <div className="lg:w-1/6 lg:text-right flex items-center justify-between lg:justify-end gap-8">
                  <span className="text-[9px] font-bold text-white/10 uppercase tracking-[0.3em]">
                    {feature.tag}
                  </span>
                  <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-white/20 group-hover:border-brand-accent group-hover:text-brand-accent group-hover:rotate-45 transition-all duration-500">
                    <ArrowUpRight size={20} strokeWidth={1.5} />
                  </div>
                </div>
              </div>

              {/* Dynamic Image Reveal (Desktop only) */}
              <AnimatePresence>
                {activeId === feature.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.9, x: 20 }}
                    className="absolute right-32 top-1/2 -translate-y-1/2 w-64 h-80 z-20 pointer-events-none hidden xl:block overflow-hidden border border-white/10 shadow-2xl"
                  >
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover grayscale brightness-75 scale-110"
                    />
                    <div className="absolute inset-0 bg-brand-accent/10 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-transparent to-transparent opacity-60" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Footer Label */}
        <div className="mt-20 flex justify-between items-center text-[9px] font-bold uppercase tracking-[0.6em] text-white/10">
          <span>Arcadia Riverside</span>
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></div>
            <span>Now Accepting Bookings</span>
          </div>
        </div>
      </div>
    </section>
  );
}
