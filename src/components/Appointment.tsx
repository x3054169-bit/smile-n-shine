import { motion } from 'motion/react';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Appointment() {
  return (
    <section id="contact" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8"
        >
          <div className="flex flex-col gap-4">
            <div className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest w-fit">
              Contact Us
            </div>
            <h2 className="text-4xl md:text-5xl text-slate-900 leading-tight">
              Book Your <br />
              <span className="text-primary">Appointment Today</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Have questions or ready to schedule your visit? Fill out the form below or contact us directly.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shrink-0 border border-slate-50">
                <Phone className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Call Us</h3>
                <a href="tel:9770572047" className="text-sm text-slate-600 hover:text-primary transition-colors">
                  +91 9770572047
                </a>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shrink-0 border border-slate-50">
                <Mail className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Email Us</h3>
                <a href="mailto:info@smilenshine.com" className="text-sm text-slate-600 hover:text-primary transition-colors">
                  info@smilenshine.com
                </a>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shrink-0 border border-slate-50">
                <MapPin className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Visit Us</h3>
                <p className="text-sm text-slate-600">
                  14-A, Manik Bagh Rd, Indore, MP 452007
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shrink-0 border border-slate-50">
                <Clock className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Timings</h3>
                <p className="text-sm text-slate-600">
                  Mon-Sat: 10AM-1PM, 5PM-8PM
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="card shadow-2xl border-primary/10"
        >
          <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-6">
            <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
            <input type="hidden" name="subject" value="New Appointment Request - Smile N Shine" />
            <input type="checkbox" name="botcheck" id="" style={{ display: 'none' }} />

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-bold text-slate-900">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="John Doe"
                  aria-label="Full Name"
                  className="px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm font-bold text-slate-900">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  placeholder="+91 98765 43210"
                  aria-label="Phone Number"
                  className="px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-bold text-slate-900">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="john@example.com"
                aria-label="Email Address"
                className="px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-bold text-slate-900">Message</label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                placeholder="Tell us about your dental needs..."
                aria-label="Message"
                className="px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all resize-none"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary gap-2 text-lg py-4" aria-label="Submit appointment request">
              <Send size={20} />
              Send Request
            </button>
            <p className="text-xs text-center text-slate-500">
              By submitting this form, you agree to our privacy policy.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
