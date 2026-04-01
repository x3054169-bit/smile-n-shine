import { motion } from 'motion/react';
import { ShieldCheck, Sparkles, Wallet, Award, Users, Microscope } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: <Award className="text-primary" />, label: '5.0 Rating', value: 'Highest Rated' },
    { icon: <Users className="text-secondary" />, label: 'Happy Patients', value: '87+' },
    { icon: <Microscope className="text-primary" />, label: 'Technology', value: 'Modern' },
  ];

  const features = [
    { icon: <ShieldCheck className="text-primary" />, title: 'Skilled Dentist', desc: 'Expert care from highly qualified professionals.' },
    { icon: <Sparkles className="text-secondary" />, title: 'Hygienic Environment', desc: 'Clean and sanitized clinic for your safety.' },
    { icon: <Wallet className="text-primary" />, title: 'Affordable Treatment', desc: 'Quality dental care that fits your budget.' },
  ];

  return (
    <section id="about" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden border-8 border-slate-50 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000"
              alt="Smile N Shine Dental Clinic Interior Indore"
              className="w-full h-[500px] object-cover"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8"
        >
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl md:text-5xl text-slate-900 leading-tight">
              A Trusted Name in <br />
              <span className="text-primary">Dental Excellence</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              At Smile N Shine Dental Clinic, we believe everyone deserves a healthy, beautiful smile. Our mission is to provide expert dental care in a comfortable and hygienic environment.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="p-4 bg-accent rounded-2xl border border-primary/10 flex flex-col items-center text-center gap-2">
                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center">
                  {stat.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-slate-900">{stat.value}</span>
                  <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            {features.map((feature, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-md flex items-center justify-center shrink-0 border border-slate-50">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{feature.title}</h3>
                  <p className="text-slate-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
