import { motion } from 'motion/react';
import { Phone, Calendar } from 'lucide-react';
import WhatsAppIcon from './icons/WhatsAppIcon';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-gradient-to-br from-white via-accent to-white">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-8"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold w-fit">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            Top Rated Dental Clinic in Indore
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-slate-900">
            Your Smile, <br />
            <span className="text-primary">Our Priority</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed">
            High-quality, affordable dental care with expert treatment. We use modern equipment to ensure your comfort and the best results.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <a href="#contact" className="btn btn-primary gap-2 text-lg px-8" aria-label="Book an appointment">
              <Calendar size={20} />
              Book Appointment
            </a>
            <div className="flex gap-4">
              <a href="tel:9770572047" className="btn btn-outline p-3 rounded-full" title="Call Now" aria-label="Call Smile N Shine Dental Clinic">
                <Phone size={24} />
              </a>
              <a
                href="https://wa.me/919770572047"
                target="_blank"
                rel="noopener noreferrer"
                className="btn border-2 border-green-500 text-green-500 hover:bg-green-50 p-3 rounded-full"
                title="WhatsApp Now"
                aria-label="Chat with us on WhatsApp"
              >
                <WhatsAppIcon size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-6 pt-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/100?img=${i + 10}`}
                  alt={`Patient Reviewer ${i}`}
                  className="w-12 h-12 rounded-full border-2 border-white object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              ))}
            </div>
            <div>
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm font-medium text-slate-600">
                <span className="font-bold text-slate-900">5.0 Rating</span> (87+ Reviews)
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden border-8 border-white shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000"
              alt="Modern Dental Clinic Interior Indore"
              className="w-full h-[600px] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating Cards */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-6 -left-6 z-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Hygienic Environment</p>
              <p className="text-sm font-bold">100% Safe</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute -bottom-6 -right-6 z-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
              87+
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Happy Patients</p>
              <p className="text-sm font-bold">Expert Care</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
