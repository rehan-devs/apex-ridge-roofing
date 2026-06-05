import { Link } from 'react-router-dom';
import {
  Home, Building2, Wrench, CloudLightning, Search, Droplets,
  Shield, Award, ChevronRight, CheckCircle2, ArrowRight,
  ClipboardList, HardHat, FileSearch, ThumbsUp
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const services = [
  {
    icon: Home,
    title: 'Residential Roofing',
    desc: 'Complete roof installations, replacements, and upgrades for homes of every size and architectural style.',
    features: ['Asphalt Shingle Roofs', 'Metal Roofing Systems', 'Tile & Slate Installation', 'Cedar Shake Roofs', 'Flat & Low-Slope Roofs', 'Energy-Efficient Options'],
    image: '/residential-roof.jpg',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    desc: 'Engineered roofing systems for commercial and industrial buildings, designed for longevity and performance.',
    features: ['TPO Roofing Systems', 'EPDM Rubber Roofing', 'Modified Bitumen', 'Built-Up Roofing (BUR)', 'Metal Roof Panels', 'Green Roof Systems'],
    image: '/commercial-roofing.jpg',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    desc: 'Fast, reliable repairs for all types of damage. We restore your roof to peak condition with lasting solutions.',
    features: ['Leak Detection & Repair', 'Shingle Replacement', 'Flashing Repair', 'Ventilation Fixes', 'Plywood & Deck Repair', 'Emergency Patching'],
    image: '/hero-roofing.jpg',
  },
  {
    icon: CloudLightning,
    title: 'Storm Damage Restoration',
    desc: 'Rapid emergency response and comprehensive restoration after severe weather events. We work directly with your insurance.',
    features: ['Emergency Tarping', 'Hail Damage Assessment', 'Wind Damage Repair', 'Insurance Claim Assistance', 'Full Storm Restoration', 'Preventive Reinforcement'],
    image: '/commercial-roofing.jpg',
  },
  {
    icon: Search,
    title: 'Roof Inspection',
    desc: 'Thorough inspections with detailed reports for real estate transactions, warranty claims, and maintenance planning.',
    features: ['Comprehensive Visual Inspection', 'Infrared Moisture Detection', 'Structural Assessment', 'Detailed Photo Reports', 'Maintenance Recommendations', 'Real Estate Certifications'],
    image: '/residential-roof.jpg',
  },
  {
    icon: Droplets,
    title: 'Gutter Installation',
    desc: 'Seamless gutters and drainage systems designed to protect your property from water damage and foundation issues.',
    features: ['Seamless Aluminum Gutters', 'Copper Gutter Systems', 'Gutter Guards & Screens', 'Downspout Extensions', 'French Drains', 'Underground Drainage'],
    image: '/hero-roofing.jpg',
  },
];

const process = [
  {
    step: '01',
    icon: FileSearch,
    title: 'Free Inspection',
    desc: 'We assess your roof condition and provide an honest evaluation with no obligation.',
  },
  {
    step: '02',
    icon: ClipboardList,
    title: 'Detailed Proposal',
    desc: 'Receive a comprehensive quote with transparent pricing, timeline, and material options.',
  },
  {
    step: '03',
    icon: HardHat,
    title: 'Expert Installation',
    desc: 'Our certified crew completes your project with precision, safety, and minimal disruption.',
  },
  {
    step: '04',
    icon: ThumbsUp,
    title: 'Final Walkthrough',
    desc: 'We conduct a thorough review with you to ensure every detail meets our high standards.',
  },
];

export default function Services() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative py-32 lg:py-44 overflow-hidden">
        <div className="absolute inset-0 bg-navy-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(232,117,26,0.12)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(29,53,87,0.5)_0%,_transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 rounded-full px-4 py-1.5 text-sm font-semibold tracking-wide uppercase mb-6">
              <Wrench className="w-3.5 h-3.5" />
              Our Services
            </span>
            <h1 className="font-heading text-5xl lg:text-7xl font-bold text-white mt-4 mb-6 leading-[1.05]">
              Expert Solutions for
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                Every Roof
              </span>
            </h1>
            <p className="text-white/60 text-lg lg:text-xl max-w-2xl leading-relaxed">
              From emergency repairs to complete installations, our certified team delivers
              premium craftsmanship backed by industry-leading warranties.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Services Detail ── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, i) => (
            <ScrollReveal key={i}>
              <div
                className={`flex flex-col ${
                  i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 lg:gap-20 items-center mb-28 last:mb-0`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-navy-900/10 group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-72 lg:h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <div className="inline-flex items-center gap-2 bg-orange-500 text-white text-sm font-bold px-4 py-2 rounded-xl">
                        <service.icon className="w-4 h-4" />
                        {service.title}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-1/2">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-orange-500/10 mb-6">
                    <service.icon className="w-7 h-7 text-orange-500" />
                  </div>
                  <h2 className="font-heading text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-charcoal-600 text-lg leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, j) => (
                      <div
                        key={j}
                        className="flex items-center gap-2 bg-stone-50 rounded-lg px-3 py-2.5 border border-stone-200/80"
                      >
                        <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" />
                        <span className="text-charcoal-700 text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white px-7 py-3.5 rounded-xl font-bold transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/25 hover:scale-[1.02]"
                  >
                    Get a Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-24 lg:py-32 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(232,117,26,0.07)_0%,_transparent_55%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-orange-400 font-semibold text-sm tracking-wider uppercase">
                Our Process
              </span>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white mt-3">
                How We Work
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.12}>
                <div className="relative bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 hover:border-orange-500/20 transition-all duration-300 hover:-translate-y-1">
                  <span className="text-orange-400/20 font-heading font-bold text-7xl absolute -top-2 right-4 select-none">
                    {step.step}
                  </span>
                  <div className="relative">
                    <div className="w-11 h-11 rounded-lg bg-orange-500/10 flex items-center justify-center mb-5">
                      <step.icon className="w-5 h-5 text-orange-400" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Warranty ── */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">
                Our Guarantee
              </span>
              <h2 className="font-heading text-4xl font-bold text-navy-900 mt-3 mb-6">
                Warranties That Mean Something
              </h2>
              <p className="text-charcoal-600 text-lg leading-relaxed mb-8">
                We stand behind our work with some of the strongest warranties in the industry.
                When we say "Built to Last," we mean it.
              </p>
              <div className="space-y-3.5">
                {[
                  'Up to 50-year manufacturer warranties on select materials',
                  '10-year workmanship guarantee on all installations',
                  'Transferable warranties for added home value',
                  'Direct manufacturer support — no runaround',
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-stone-50 border border-stone-200/80 hover:border-orange-500/20 rounded-lg px-4 py-3 transition-all"
                  >
                    <Shield className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-charcoal-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="bg-navy-900 rounded-2xl p-10 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(232,117,26,0.1)_0%,_transparent_70%)]" />
                <div className="relative">
                  <Award className="w-16 h-16 text-orange-400 mx-auto mb-6" />
                  <h3 className="font-heading font-bold text-2xl text-white mb-3">
                    GAF Golden Pledge® Warranty
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-sm mx-auto">
                    Our highest level of warranty coverage includes a 25-year workmanship
                    warranty and up to 50 years of material coverage — backed by GAF, North
                    America's largest roofing manufacturer.
                  </p>
                  <div className="text-6xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500 mb-2">
                    50 Years
                  </div>
                  <div className="text-white/40 text-sm">Maximum Material Coverage</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 lg:py-32 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(232,117,26,0.12)_0%,_transparent_70%)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-6">
              Need a Roofing Solution?
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
              Our experts are ready to assess your needs and provide a free,
              no-obligation estimate.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white px-10 py-4 rounded-xl font-bold transition-all duration-200 hover:shadow-2xl hover:shadow-orange-500/30 hover:scale-[1.03]"
            >
              Get a Free Estimate <ChevronRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}