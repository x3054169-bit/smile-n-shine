import { motion } from 'motion/react';
import { Phone, Calendar } from 'lucide-react';
import WhatsAppIcon from './icons/WhatsAppIcon';

export default function MobileStickyCTA() {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-[60] md:hidden px-4 pb-6 pt-4 bg-white/80 backdrop-blur-xl border-t border-slate-100 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]"
    >
      <div className="flex gap-3">
        <a
          href="tel:9770572047"
          className="flex-1 btn btn-outline py-3 px-4 gap-2 text-sm font-bold"
          aria-label="Call Smile N Shine Dental Clinic"
        >
          <Phone size={18} />
          Call
        </a>
        <a
          href="https://wa.me/919770572047"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 btn bg-green-500 text-white hover:bg-green-600 py-3 px-4 gap-2 text-sm font-bold shadow-lg shadow-green-500/20"
          aria-label="Chat on WhatsApp"
        >
          <WhatsAppIcon size={18} />
          WhatsApp
        </a>
        <a
          href="#contact"
          className="flex-1 btn btn-primary py-3 px-4 gap-2 text-sm font-bold"
          aria-label="Book an Appointment"
        >
          <Calendar size={18} />
          Book
        </a>
      </div>
    </motion.div>
  );
}
