import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import WhatsAppIcon from './icons/WhatsAppIcon';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <a href="#" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl">
                S
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                Smile N Shine
              </span>
            </a>
            <p className="text-sm leading-relaxed text-slate-400">
              Providing high-quality, affordable dental care with expert treatment in Indore. Your smile is our top priority.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all" aria-label="Follow us on Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all" aria-label="Follow us on Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all" aria-label="Follow us on Twitter">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-lg font-bold text-white">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Our Services</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h4 className="text-lg font-bold text-white">Contact Info</h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex gap-3 items-start">
                <MapPin size={18} className="text-primary shrink-0" />
                <span>14-A, Manik Bagh Rd, Nai Duniya, Prem Nagar, Indore, MP 452007</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={18} className="text-primary shrink-0" />
                <a href="tel:9770572047" className="hover:text-primary transition-colors">+91 9770572047</a>
              </li>
              <li className="flex gap-3 items-center">
                <WhatsAppIcon size={18} className="text-primary shrink-0" />
                <a href="https://wa.me/919770572047" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">WhatsApp Now</a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:info@smilenshine.com" className="hover:text-primary transition-colors">info@smilenshine.com</a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="flex flex-col gap-6">
            <h4 className="text-lg font-bold text-white">Opening Hours</h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex justify-between items-center pb-2 border-b border-slate-800">
                <span>Mon - Sat (Morning)</span>
                <span className="text-white">10 AM - 1 PM</span>
              </li>
              <li className="flex justify-between items-center pb-2 border-b border-slate-800">
                <span>Mon - Sat (Evening)</span>
                <span className="text-white">5 PM - 8 PM</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Sunday</span>
                <span className="text-red-400">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 uppercase tracking-widest font-bold">
          <p>© {currentYear} Smile N Shine Dental Clinic. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
