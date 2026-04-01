import { motion } from 'motion/react';
import WhatsAppIcon from './icons/WhatsAppIcon';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/919770572047"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 cursor-pointer group"
      title="WhatsApp Now"
    >
      <WhatsAppIcon size={32} />
      <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-xl text-sm font-bold shadow-xl border border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us!
      </span>
    </motion.a>
  );
}
