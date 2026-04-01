import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Amit Sharma',
      role: 'Patient',
      content: 'The clinic was hygienic and well-maintained, and the personnel was warm and pleasant.',
      rating: 5,
    },
    {
      name: 'Priya Verma',
      role: 'Patient',
      content: 'Doctor is highly skilled and explains everything clearly. Very satisfied with the treatment.',
      rating: 5,
    },
    {
      name: 'Rahul Gupta',
      role: 'Patient',
      content: 'Good treatment at affordable price. Highly recommend Smile N Shine for any dental issues.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-accent/30 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <div className="flex flex-col items-center text-center gap-4 max-w-2xl mx-auto">
          <div className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl text-slate-900">
            What Our <br />
            <span className="text-primary">Patients Say</span>
          </h2>
          <p className="text-lg text-slate-600">
            Read real reviews from our happy patients who have experienced our expert dental care.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card relative"
            >
              <Quote className="absolute top-6 right-6 text-primary/10 w-12 h-12" />
              <div className="flex text-yellow-400 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-slate-600 italic mb-8 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
