import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

export default function EnquiryForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [step, setStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="bg-brand-secondary border border-white/5 p-8 md:p-12">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.form 
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit} 
            className="space-y-8"
          >
            <div className="flex items-center gap-4 mb-8">
              {[1, 2, 3].map((s) => (
                <div 
                  key={s}
                  className={`h-1 flex-1 transition-colors duration-500 ${s <= step ? 'bg-brand-accent' : 'bg-white/10'}`}
                />
              ))}
            </div>

            {step === 1 && (
              <motion.div 
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-bold uppercase tracking-widest text-white/90">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Full Name</label>
                    <input required type="text" className="w-full bg-brand-primary border border-white/10 px-4 py-3 text-white focus:border-brand-accent outline-none transition-colors" placeholder="e.g. John Smith" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Email Address</label>
                    <input required type="email" className="w-full bg-brand-primary border border-white/10 px-4 py-3 text-white focus:border-brand-accent outline-none transition-colors" placeholder="john@company.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Organisation</label>
                  <input required type="text" className="w-full bg-brand-primary border border-white/10 px-4 py-3 text-white focus:border-brand-accent outline-none transition-colors" placeholder="Company, Agency or Institution" />
                </div>
                <button 
                  type="button" 
                  onClick={() => setStep(2)}
                  className="w-full py-4 bg-brand-accent text-white font-bold uppercase tracking-widest text-xs hover:bg-brand-accent/90 transition-all"
                >
                  Next Step
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-bold uppercase tracking-widest text-white/90">Event Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Event Type</label>
                    <select className="w-full bg-brand-primary border border-white/10 px-4 py-3 text-white focus:border-brand-accent outline-none transition-colors appearance-none">
                      <option>Conference</option>
                      <option>Meeting / Boardroom</option>
                      <option>Product Launch</option>
                      <option>Training / Workshop</option>
                      <option>Banquet / Social</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Estimated Guests</label>
                    <input type="number" className="w-full bg-brand-primary border border-white/10 px-4 py-3 text-white focus:border-brand-accent outline-none transition-colors" placeholder="0" />
                  </div>
                </div>
                <div className="flex gap-4">
                  <button 
                    type="button" 
                    onClick={() => setStep(1)}
                    className="flex-1 py-4 border border-white/10 text-white font-bold uppercase tracking-widest text-xs hover:bg-white/5 transition-all"
                  >
                    Back
                  </button>
                  <button 
                    type="button" 
                    onClick={() => setStep(3)}
                    className="flex-[2] py-4 bg-brand-accent text-white font-bold uppercase tracking-widest text-xs hover:bg-brand-accent/90 transition-all"
                  >
                    Continue
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-bold uppercase tracking-widest text-white/90">Final Details</h3>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">How can we help?</label>
                  <textarea rows={4} className="w-full bg-brand-primary border border-white/10 px-4 py-3 text-white focus:border-brand-accent outline-none transition-colors" placeholder="Tell us about your event goals..." />
                </div>
                <div className="flex gap-4">
                  <button 
                    type="button" 
                    onClick={() => setStep(2)}
                    className="flex-1 py-4 border border-white/10 text-white font-bold uppercase tracking-widest text-xs hover:bg-white/5 transition-all"
                  >
                    Back
                  </button>
                  <button 
                    type="submit" 
                    className="flex-[2] py-4 bg-brand-accent text-white font-bold uppercase tracking-widest text-xs hover:bg-brand-accent/90 transition-all flex items-center justify-center gap-2"
                  >
                    Send Enquiry <Send size={14} />
                  </button>
                </div>
              </motion.div>
            )}
          </motion.form>
        ) : (
          <motion.div 
            key="success"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="py-12 text-center space-y-6"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-accent/20 text-brand-accent mb-4">
              <CheckCircle2 size={40} />
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-bold">ENQUIRY RECEIVED</h3>
            <p className="text-white/50 max-w-sm mx-auto leading-relaxed">
              Our event architects have received your request. Expect a formal consultation within 4 business hours.
            </p>
            <button 
              onClick={() => { setIsSubmitted(false); setStep(1); }}
              className="px-8 py-3 border border-white/10 text-white font-bold uppercase tracking-widest text-xs hover:bg-white/5 transition-all"
            >
              Send another enquiry
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
