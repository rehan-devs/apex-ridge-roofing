import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail, MapPin, Clock,
  Shield, Award,
  Facebook, Instagram, Linkedin,
  ChevronUp
} from 'lucide-react';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Our Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
  { name: 'Free Estimate', path: '/contact' },
];

const services = [
  'Residential Roofing',
  'Commercial Roofing',
  'Roof Repair',
  'Storm Damage Restoration',
  'Roof Inspection',
  'Gutter Installation',
];

const certifications = [
  { icon: Shield, label: 'Licensed & Insured' },
  { icon: Award, label: 'GAF Certified' },
  { icon: Shield, label: 'BBB A+ Rated' },
  { icon: Award, label: 'Owens Corning Preferred' },
];

const socials = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
];

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <footer className="bg-navy-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Company info */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center gap-3 mb-5 group">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center group-hover:bg-orange-400 transition-colors shadow-lg shadow-orange-500/20">
                  <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
                    <path d="M16 4L4 14h4v12h6v-7h4v7h6V14h4L16 4z" fill="white" />
                  </svg>
                </div>
                <div className="leading-none">
                  <span className="text-white font-heading font-bold text-lg tracking-tight block">
                    APEX RIDGE
                  </span>
                  <span className="text-orange-400 text-[9px] font-bold tracking-[0.28em] block mt-0.5">
                    ROOFING
                  </span>
                </div>
              </Link>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                Professional roofing for residential and commercial properties.
                Licensed, insured, and committed to excellence since 2008.
              </p>
              <div className="flex items-center gap-2">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="group w-9 h-9 rounded-lg bg-white/5 hover:bg-orange-500/20 border border-white/5 hover:border-orange-500/30 flex items-center justify-center transition-all duration-200"
                  >
                    <Icon className="w-4 h-4 text-white/50 group-hover:text-orange-400 transition-colors duration-200" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-bold text-xs tracking-widest uppercase mb-6 text-white/70">
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-white/50 hover:text-orange-400 transition-colors duration-200 text-sm inline-flex items-center gap-1.5 group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-orange-400 transition-all duration-200 inline-block" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-heading font-bold text-xs tracking-widest uppercase mb-6 text-white/70">
                Services
              </h4>
              <ul className="space-y-2.5">
                {services.map((service) => (
                  <li key={service}>
                    <Link
                      to="/services"
                      className="text-white/50 hover:text-orange-400 transition-colors duration-200 text-sm inline-flex items-center gap-1.5 group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-orange-400 transition-all duration-200 inline-block" />
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading font-bold text-xs tracking-widest uppercase mb-6 text-white/70">
                Contact Us
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                  <span className="text-white/50 text-sm leading-relaxed">
                    1234 Ridge Parkway, Suite 200<br />Austin, TX 78701
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-orange-400 flex-shrink-0" />
                  <a
                    href="mailto:info@apexridgeroofing.com"
                    className="text-white/50 hover:text-orange-400 transition-colors text-sm break-all"
                  >
                    info@apexridgeroofing.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                  <span className="text-white/50 text-sm leading-relaxed">
                    Mon–Fri: 7AM – 6PM<br />
                    Sat: 8AM – 2PM<br />
                    <span className="text-orange-400/80 font-medium">24/7 Emergency</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-16 pt-8 border-t border-white/8">
            <p className="text-center text-white/30 text-xs uppercase tracking-widest mb-6 font-semibold">
              Certifications & Accreditations
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
              {certifications.map(({ icon: Icon, label }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-white/35 hover:text-white/60 transition-colors duration-200"
                >
                  <Icon className="w-4 h-4 text-orange-400/50" />
                  <span className="text-xs font-semibold tracking-wide uppercase">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/35 text-xs">
              © {new Date().getFullYear()} Apex Ridge Roofing. All rights reserved.
            </p>
            <div className="flex items-center gap-5 text-white/35 text-xs">
              {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item) => (
                <a key={item} href="#" className="hover:text-orange-400 transition-colors duration-200">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 bg-orange-500 hover:bg-orange-400 text-white rounded-full shadow-xl shadow-orange-500/30 flex items-center justify-center transition-all duration-200 hover:scale-110 z-40 animate-slide-up"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}