import { motion } from 'motion/react';
import { ShieldCheck, Wallet, Sparkles, Microscope, HeartHandshake, CheckCircle2 } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    { icon: <ShieldCheck className="text-primary" />, title: 'Experienced Dentist', desc: 'Highly skilled and experienced dental professionals.' },
    { icon: <Wallet className="text-secondary" />, title: 'Affordable Pricing', desc: 'Quality dental care that fits your budget.' },
    { icon: <Sparkles className="text-primary" />, title: 'Clean & Hygienic Clinic', desc: 'Sanitized environment for your safety.' },
    { icon: <Microscope className="text-secondary" />, title: 'Modern Equipment', desc: 'Latest technology for precise treatments.' },
    { icon: <HeartHandshake className="text-primary" />, title: 'Friendly Staff', desc: 'Warm and pleasant personnel to assist you.' },
    { icon: <CheckCircle2 className="text-secondary" />, title: 'Patient Satisfaction', desc: 'We prioritize your comfort and results.' },
  ];

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8"
        >
          <div className="flex flex-col gap-4">
            <div className="px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-xs font-bold uppercase tracking-widest w-fit">
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl text-slate-900 leading-tight">
              Experience the Best <br />
              <span className="text-secondary">Dental Care</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We are committed to providing the highest standard of dental care. Our team is dedicated to making your visit as comfortable and stress-free as possible.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {points.map((point, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shrink-0 border border-slate-50">
                  {point.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{point.title}</h3>
                  <p className="text-sm text-slate-600">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden border-8 border-slate-50 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=1000"
              alt="Happy Patient at Smile N Shine Dental Clinic Indore"
              className="w-full h-[500px] object-cover"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10" />
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
