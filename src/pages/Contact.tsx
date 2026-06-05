import { useState } from 'react';
import {
  Mail, MapPin, Clock, Send, Shield, CheckCircle2,
  MessageSquare, AlertCircle, ChevronRight
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { Link } from 'react-router-dom';

const serviceAreas = [
  { city: 'Austin', region: 'Central TX' },
  { city: 'Round Rock', region: 'Central TX' },
  { city: 'Cedar Park', region: 'Central TX' },
  { city: 'Georgetown', region: 'Central TX' },
  { city: 'Pflugerville', region: 'Central TX' },
  { city: 'Leander', region: 'Central TX' },
  { city: 'Dripping Springs', region: 'Hill Country' },
  { city: 'Bee Cave', region: 'Hill Country' },
  { city: 'Lakeway', region: 'Hill Country' },
  { city: 'Westlake Hills', region: 'Hill Country' },
  { city: 'Dallas', region: 'North TX' },
  { city: 'Plano', region: 'North TX' },
  { city: 'Frisco', region: 'North TX' },
  { city: 'San Antonio', region: 'South TX' },
  { city: 'New Braunfels', region: 'South TX' },
];

const contactInfo = [
  {
    icon: Mail,
    label: 'Email Us',
    value: 'info@apexridgeroofing.com',
    href: 'mailto:info@apexridgeroofing.com',
    sub: 'Response within 2 hours',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: '1234 Ridge Parkway, Suite 200',
    href: '#',
    sub: 'Austin, TX 78701',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon–Fri: 7AM–6PM',
    href: '#',
    sub: 'Sat: 8AM–2PM | 24/7 Emergency',
  },
];

const regionColors: Record<string, string> = {
  'Central TX': 'bg-blue-50 border-blue-200/80 text-blue-700',
  'Hill Country': 'bg-green-50 border-green-200/80 text-green-700',
  'North TX': 'bg-purple-50 border-purple-200/80 text-purple-700',
  'South TX': 'bg-amber-50 border-amber-200/80 text-amber-700',
};

const regions = [
  {
    name: 'Austin Metro',
    desc: 'Central Texas coverage including Austin, Round Rock, Cedar Park, Georgetown, Pflugerville, and Leander.',
    color: 'border-blue-500/30 bg-blue-500/5',
    dotColor: 'bg-blue-500',
  },
  {
    name: 'Hill Country',
    desc: 'Serving Dripping Springs, Bee Cave, Lakeway, and Westlake Hills communities.',
    color: 'border-green-500/30 bg-green-500/5',
    dotColor: 'bg-green-500',
  },
  {
    name: 'Dallas Metro',
    desc: 'North Texas coverage including Dallas, Plano, and Frisco regions.',
    color: 'border-purple-500/30 bg-purple-500/5',
    dotColor: 'bg-purple-500',
  },
  {
    name: 'San Antonio',
    desc: 'South Texas coverage including San Antonio and New Braunfels areas.',
    color: 'border-amber-500/30 bg-amber-500/5',
    dotColor: 'bg-amber-500',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    property: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass = (name: string) =>
    `w-full px-4 py-3 rounded-lg border text-sm outline-none transition-all duration-200 ${
      focused === name
        ? 'border-orange-500 ring-2 ring-orange-500/15 bg-white'
        : 'border-stone-300 bg-stone-50 hover:border-stone-400'
    }`;

  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative py-32 lg:py-44 overflow-hidden">
        <div className="absolute inset-0 bg-navy-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(232,117,26,0.12)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(29,53,87,0.5)_0%,_transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 rounded-full px-4 py-1.5 text-sm font-semibold tracking-wide uppercase mb-6">
              <MessageSquare className="w-3.5 h-3.5" />
              Contact Us
            </span>
            <h1 className="font-heading text-5xl lg:text-7xl font-bold text-white mt-4 mb-6 leading-[1.05]">
              Let's Build
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                Something Strong
              </span>
            </h1>
            <p className="text-white/60 text-lg lg:text-xl max-w-2xl leading-relaxed">
              Ready for a free estimate? Have questions? Our team is here to help.
              Reach out today and experience the Apex Ridge difference.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Form + Sidebar ── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="bg-white rounded-2xl border border-stone-200/80 p-8 lg:p-10 shadow-sm">
                  <h2 className="font-heading text-2xl font-bold text-navy-900 mb-1">
                    Request a Free Estimate
                  </h2>
                  <p className="text-charcoal-600 text-sm mb-8">
                    Fill out the form below and we'll get back to you within 2 hours.
                  </p>

                  {submitted ? (
                    <div className="text-center py-16">
                      <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-green-600" />
                      </div>
                      <h3 className="font-heading font-bold text-2xl text-navy-900 mb-2">
                        Thank You!
                      </h3>
                      <p className="text-charcoal-600 max-w-sm mx-auto">
                        Your request has been submitted. We'll contact you within 2 hours during business hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-charcoal-700 mb-2">
                            Full Name <span className="text-orange-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => setFocused('name')}
                            onBlur={() => setFocused(null)}
                            className={inputClass('name')}
                            placeholder="John Smith"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-charcoal-700 mb-2">
                            Email <span className="text-orange-500">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => setFocused('email')}
                            onBlur={() => setFocused(null)}
                            className={inputClass('email')}
                            placeholder="john@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-charcoal-700 mb-2">
                            Phone <span className="text-orange-500">*</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            onFocus={() => setFocused('phone')}
                            onBlur={() => setFocused(null)}
                            className={inputClass('phone')}
                            placeholder="(512) 555-1234"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-charcoal-700 mb-2">
                            Service Needed
                          </label>
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            onFocus={() => setFocused('service')}
                            onBlur={() => setFocused(null)}
                            className={inputClass('service') + ' bg-white cursor-pointer'}
                          >
                            <option value="">Select a service</option>
                            <option value="residential">Residential Roofing</option>
                            <option value="commercial">Commercial Roofing</option>
                            <option value="repair">Roof Repair</option>
                            <option value="storm">Storm Damage</option>
                            <option value="inspection">Roof Inspection</option>
                            <option value="gutter">Gutter Installation</option>
                            <option value="emergency">Emergency Service</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-charcoal-700 mb-3">
                          Property Type
                        </label>
                        <div className="flex gap-3">
                          {['Residential', 'Commercial'].map((type) => (
                            <label
                              key={type}
                              className={`flex items-center gap-2.5 cursor-pointer flex-1 border rounded-lg px-4 py-3 transition-all duration-200 ${
                                formData.property === type.toLowerCase()
                                  ? 'border-orange-500 bg-orange-500/5 text-navy-900'
                                  : 'border-stone-300 bg-stone-50 text-charcoal-600 hover:border-stone-400'
                              }`}
                            >
                              <input
                                type="radio"
                                name="property"
                                value={type.toLowerCase()}
                                checked={formData.property === type.toLowerCase()}
                                onChange={handleChange}
                                className="w-4 h-4 accent-orange-500"
                              />
                              <span className="text-sm font-medium">{type}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-charcoal-700 mb-2">
                          Message
                        </label>
                        <textarea
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setFocused('message')}
                          onBlur={() => setFocused(null)}
                          className={inputClass('message') + ' resize-none'}
                          placeholder="Tell us about your roofing needs..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-orange-500 hover:bg-orange-400 text-white py-4 rounded-lg font-bold transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/25 hover:scale-[1.01] flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        Submit Request
                      </button>

                      <p className="text-xs text-charcoal-500 text-center">
                        By submitting, you agree to our privacy policy. We'll never share your information.
                      </p>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <ScrollReveal direction="right" delay={0.2}>
                <div className="space-y-4">
                  {contactInfo.map((info, i) => (
                    <div
                      key={i}
                      className="group bg-stone-50 rounded-xl p-5 border border-stone-200/80 hover:border-orange-500/20 hover:bg-white hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-11 h-11 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/20 transition-colors">
                          <info.icon className="w-5 h-5 text-orange-500" />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-charcoal-500 uppercase tracking-widest mb-1">
                            {info.label}
                          </div>
                          {info.href !== '#' ? (
                            <a
                              href={info.href}
                              className="text-navy-900 font-semibold text-sm hover:text-orange-500 transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <div className="text-navy-900 font-semibold text-sm">{info.value}</div>
                          )}
                          <div className="text-charcoal-500 text-xs mt-0.5">{info.sub}</div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Emergency card */}
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 shadow-xl shadow-orange-500/20">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                        <AlertCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-heading font-bold text-white mb-1">
                          24/7 Emergency Service
                        </div>
                        <p className="text-white/80 text-sm mb-3">
                          Storm damage? Active leak? Contact us immediately for rapid response.
                        </p>
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-1.5 bg-white text-orange-600 font-bold text-sm px-3 py-1.5 rounded-lg hover:bg-orange-50 transition-colors"
                        >
                          Get Emergency Help
                          <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Service Area ── */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">
                Service Area
              </span>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-navy-900 mt-3 mb-4">
                Proudly Serving Texas
              </h2>
              <p className="text-charcoal-600 text-lg max-w-2xl mx-auto">
                From the Hill Country to the Metroplex, expert roofing services across the region.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Region cards — replaces the old map placeholder */}
            <ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {regions.map((region, i) => (
                  <div
                    key={i}
                    className={`rounded-xl border p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${region.color}`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-3 h-3 rounded-full ${region.dotColor}`} />
                      <h3 className="font-heading font-bold text-navy-900 text-lg">
                        {region.name}
                      </h3>
                    </div>
                    <p className="text-charcoal-600 text-sm leading-relaxed">
                      {region.desc}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* City list */}
            <ScrollReveal direction="right" delay={0.2}>
              <div>
                <h3 className="font-heading font-bold text-2xl text-navy-900 mb-6">
                  All Service Locations
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {serviceAreas.map((area, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-2 rounded-lg px-3 py-2.5 border transition-all hover:-translate-y-0.5 hover:shadow-sm ${
                        regionColors[area.region] ?? 'bg-stone-50 border-stone-200/80'
                      }`}
                    >
                      <MapPin className="w-3.5 h-3.5 flex-shrink-0 opacity-60" />
                      <div>
                        <div className="text-sm font-semibold">{area.city}</div>
                        <div className="text-[10px] opacity-70">{area.region}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-charcoal-600 text-sm mt-6">
                  Don't see your area?{' '}
                  <Link
                    to="/contact"
                    className="text-orange-500 font-semibold hover:text-orange-600 underline underline-offset-2"
                  >
                    Send us a message
                  </Link>{' '}
                  — we may still be able to help!
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Trust Section ── */}
      <section className="py-24 lg:py-32 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(232,117,26,0.07)_0%,_transparent_55%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-orange-400 font-semibold text-sm tracking-wider uppercase">
                Why Trust Us
              </span>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white mt-3">
                Your Roof, Our Reputation
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'Licensed & Insured',
                desc: 'Full liability insurance and workers comp coverage. Your property is always protected.',
              },
              {
                icon: CheckCircle2,
                title: 'Written Guarantees',
                desc: 'Every project comes with written warranties on both materials and workmanship.',
              },
              {
                icon: MessageSquare,
                title: 'Transparent Communication',
                desc: 'No surprises. Clear timelines, honest pricing, and regular updates throughout.',
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 hover:border-orange-500/20 transition-all duration-300 text-center hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-orange-500/20 transition-colors">
                    <item.icon className="w-7 h-7 text-orange-400" />
                  </div>
                  <h3 className="font-heading font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}