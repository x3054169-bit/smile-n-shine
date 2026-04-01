import { motion } from 'motion/react';
import { Sparkles, Activity, ShieldPlus, Zap, Smile, CheckCircle2 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Sparkles className="text-primary" />,
      title: 'Teeth Cleaning',
      desc: 'Professional cleaning to remove plaque and tartar, ensuring a fresh smile.',
    },
    {
      icon: <Activity className="text-secondary" />,
      title: 'Root Canal Treatment',
      desc: 'Expert care to save your natural teeth and relieve pain effectively.',
    },
    {
      icon: <ShieldPlus className="text-primary" />,
      title: 'Dental Implants',
      desc: 'Permanent and natural-looking replacement for missing teeth.',
    },
    {
      icon: <Zap className="text-secondary" />,
      title: 'Teeth Whitening',
      desc: 'Brighten your smile with our safe and effective whitening treatments.',
    },
    {
      icon: <Smile className="text-primary" />,
      title: 'Braces & Aligners',
      desc: 'Straighten your teeth with modern braces or invisible aligners.',
    },
    {
      icon: <CheckCircle2 className="text-secondary" />,
      title: 'General Checkup',
      desc: 'Comprehensive dental exams to maintain your oral health.',
    },
  ];

  return (
    <section id="services" className="section-padding bg-accent/30 relative">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <div className="flex flex-col items-center text-center gap-4 max-w-2xl mx-auto">
          <div className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl text-slate-900">
            Comprehensive Dental Care <br />
            <span className="text-primary">For All Ages</span>
          </h2>
          <p className="text-lg text-slate-600">
            We offer a wide range of dental services using the latest technology and techniques to ensure the best possible care for our patients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
              className="card group cursor-default"
            >
              <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center mb-6 transition-colors group-hover:bg-primary/10">
                <div className="w-8 h-8 transition-transform group-hover:scale-110">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              <button 
                className="mt-6 flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all"
                aria-label={`Learn more about ${service.title}`}
              >
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
