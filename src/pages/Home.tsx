import { Link } from 'react-router-dom';
import {
  Shield, Star, ChevronRight, CheckCircle2,
  Home as HomeIcon, Building2, Wrench, CloudLightning, Search, Droplets
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const services = [
  {
    icon: HomeIcon,
    title: 'Residential Roofing',
    desc: 'Complete roof installations, replacements, and upgrades for homes of every size and style.',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    desc: 'TPO, EPDM, and metal roofing systems engineered for commercial and industrial buildings.',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    desc: 'Fast, reliable repairs for leaks, missing shingles, flashing failures, and structural damage.',
  },
  {
    icon: CloudLightning,
    title: 'Storm Damage Restoration',
    desc: 'Emergency response and full restoration after hurricanes, hail, wind, and severe weather.',
  },
  {
    icon: Search,
    title: 'Roof Inspection',
    desc: 'Comprehensive inspections with detailed reports for real estate transactions and maintenance.',
  },
  {
    icon: Droplets,
    title: 'Gutter Installation',
    desc: 'Seamless gutters and drainage systems to protect your property from water damage.',
  },
];

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Homeowner, Austin TX',
    text: 'Apex Ridge replaced our entire roof after the hailstorm. They were fast, professional, and the quality of work exceeded our expectations. Highly recommend!',
    rating: 5,
  },
  {
    name: 'David Chen',
    role: 'Property Manager, Dallas TX',
    text: "We've used Apex Ridge for three commercial properties now. Their attention to detail and project management is second to none. A trusted partner.",
    rating: 5,
  },
  {
    name: 'Maria Rodriguez',
    role: 'Homeowner, San Antonio TX',
    text: 'From the initial inspection to the final walkthrough, everything was transparent and professional. They truly care about doing the job right.',
    rating: 5,
  },
];

const stats = [
  { value: '2,500+', label: 'Projects Completed' },
  { value: '18+', label: 'Years Experience' },
  { value: '4.9/5', label: 'Customer Rating' },
  { value: '100%', label: 'Licensed & Insured' },
];

export default function Home() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-roofing.jpg"
            alt="Professional roofing work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/97 via-navy-900/88 to-navy-900/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="max-w-2xl">
            <ScrollReveal delay={0.1}>
              <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 rounded-full px-4 py-1.5 text-sm font-semibold mb-8">
                <Shield className="w-4 h-4" />
                Licensed &amp; Insured Since 2008
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6">
                Built Strong.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                  Built to Last.
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-10 max-w-lg">
                Premium roofing solutions for residential and commercial properties.
                Craftsmanship you can trust, protection you can count on.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-white px-8 py-4 rounded-xl text-base font-bold transition-all duration-200 hover:shadow-2xl hover:shadow-orange-500/30 hover:scale-[1.03]"
                >
                  Get a Free Estimate
                  <ChevronRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center gap-2 bg-white/8 hover:bg-white/15 text-white border border-white/15 hover:border-white/30 px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200 backdrop-blur-sm"
                >
                  View Our Work
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="relative z-10 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-900 rounded-2xl shadow-2xl shadow-black/40 border border-white/5 p-10 lg:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className={`text-center py-4 ${i < stats.length - 1 ? 'lg:border-r border-white/10' : ''}`}>
                    <div className="text-3xl lg:text-4xl font-heading font-bold text-orange-400 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-white/50 text-sm font-medium">{stat.label}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(232,117,26,0.08)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(29,53,87,0.3)_0%,_transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-orange-400 font-semibold text-sm tracking-wider uppercase">
                What We Do
              </span>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
                Comprehensive Roofing Services
              </h2>
              <p className="text-white/50 text-lg max-w-2xl mx-auto">
                From emergency repairs to full installations, we deliver exceptional results
                backed by industry-leading warranties.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-1.5 flex flex-col backdrop-blur-sm">
                  <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-orange-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-5 flex-1">
                    {service.desc}
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1 text-orange-400 text-sm font-semibold group-hover:gap-2.5 transition-all duration-200"
                  >
                    Learn More <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <ScrollReveal>
                <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">
                  Why Apex Ridge
                </span>
                <h2 className="font-heading text-4xl lg:text-5xl font-bold text-navy-900 mt-3 mb-6">
                  The Roof Over Your Head
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
                    Deserves the Best
                  </span>
                </h2>
                <p className="text-charcoal-600 text-lg leading-relaxed mb-8">
                  We don't cut corners — we reinforce them. Every project is backed by
                  certified expertise, premium materials, and an unwavering commitment to
                  structural integrity.
                </p>
              </ScrollReveal>

              <div className="space-y-3.5">
                {[
                  'GAF Master Elite® Certified — Top 2% of roofers nationwide',
                  'Fully licensed, bonded, and insured for your protection',
                  'Manufacturer warranties up to 50 years on materials',
                  '24/7 emergency response for storm damage',
                  'Transparent pricing with no hidden fees',
                ].map((item, i) => (
                  <ScrollReveal key={i} delay={i * 0.08}>
                    <div className="flex items-start gap-3 bg-stone-50 rounded-lg px-4 py-3 border border-stone-200/80 hover:border-orange-500/20 hover:bg-orange-500/5 transition-all duration-200">
                      <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-charcoal-700 text-sm leading-relaxed">{item}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal delay={0.5}>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white px-8 py-4 rounded-xl font-bold transition-all duration-200 hover:shadow-2xl hover:shadow-orange-500/30 mt-8"
                >
                  Learn About Us <ChevronRight className="w-5 h-5" />
                </Link>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative">
                <img
                  src="/about-team.jpg"
                  alt="Professional roofing team"
                  className="rounded-2xl shadow-2xl shadow-black/15 w-full object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white rounded-2xl p-6 shadow-xl shadow-orange-500/30">
                  <div className="text-3xl font-heading font-bold">18+</div>
                  <div className="text-sm font-medium text-white/80 leading-tight">
                    Years of<br />Excellence
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-white rounded-xl px-4 py-3 shadow-xl">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-orange-400 text-orange-400" />
                      ))}
                    </div>
                    <span className="text-navy-900 font-bold text-sm">4.9</span>
                  </div>
                  <div className="text-charcoal-600 text-xs mt-0.5">2,500+ reviews</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">
                Testimonials
              </span>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-navy-900 mt-3">
                Trusted by Homeowners &amp; Businesses
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-stone-200/80 shadow-sm hover:shadow-xl hover:border-orange-500/15 transition-all duration-300 hover:-translate-y-1 flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                  <p className="text-charcoal-700 text-sm leading-relaxed mb-6 flex-1">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-stone-100">
                    <div className="w-10 h-10 rounded-full bg-navy-900 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {t.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-navy-900">{t.name}</div>
                      <div className="text-xs text-charcoal-600">{t.role}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 lg:py-32 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(232,117,26,0.12)_0%,_transparent_70%)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Protect Your Property?
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
              Get a free, no-obligation estimate from our certified roofing experts.
              We'll inspect your roof, provide honest recommendations, and deliver a detailed quote.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-white px-10 py-4 rounded-xl text-base font-bold transition-all duration-200 hover:shadow-2xl hover:shadow-orange-500/30 hover:scale-[1.03]"
            >
              Get a Free Estimate
              <ChevronRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}