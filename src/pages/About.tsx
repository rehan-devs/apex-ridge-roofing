import { Link } from 'react-router-dom';
import {
  Shield, Award, Users, CheckCircle2,
  ChevronRight, Hammer, Eye
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    desc: 'We stand behind every nail, every shingle, every project. Honest assessments and transparent pricing — always.',
  },
  {
    icon: Hammer,
    title: 'Craftsmanship',
    desc: 'Meticulous attention to detail and time-tested techniques that deliver roofs built to endure decades of weather.',
  },
  {
    icon: Users,
    title: 'Community',
    desc: 'We roof the neighborhoods we live in. Our reputation is built one satisfied customer at a time.',
  },
  {
    icon: Eye,
    title: 'Safety',
    desc: 'Rigorous safety protocols protect our crew and your property. OSHA-compliant on every job site, every day.',
  },
];

const certifications = [
  { name: 'GAF Master Elite®', desc: 'Top 2% of roofing contractors nationwide', badge: 'Master Elite' },
  { name: 'Owens Corning Preferred', desc: 'Preferred contractor with extended warranty access', badge: 'Preferred' },
  { name: 'BBB A+ Rating', desc: 'Better Business Bureau highest accreditation', badge: 'A+ Rated' },
  { name: 'CertainTeed SELECT ShingleMaster', desc: 'Highest credential in residential roofing', badge: 'SELECT' },
  { name: 'HAAG Certified Inspector', desc: 'Storm damage assessment expertise', badge: 'HAAG' },
  { name: 'OSHA 30 Certified', desc: 'Advanced workplace safety training', badge: 'OSHA 30' },
];

const team = [
  { name: 'James Walker', role: 'Founder & CEO', years: '25+' },
  { name: 'Elena Torres', role: 'Operations Director', years: '15+' },
  { name: 'Marcus Johnson', role: 'Lead Project Manager', years: '12+' },
  { name: 'Rachel Kim', role: 'Head of Quality Assurance', years: '10+' },
];

const timeline = [
  { year: '2008', event: 'Founded in Austin, TX with a 3-person crew and a commitment to quality.' },
  { year: '2012', event: 'Earned GAF Master Elite® certification — joining the top 2% of roofers nationwide.' },
  { year: '2015', event: 'Expanded to commercial roofing, serving businesses across Central Texas.' },
  { year: '2018', event: 'Reached 1,000 completed projects milestone with a 99% satisfaction rate.' },
  { year: '2021', event: 'Opened second office in Dallas to serve North Texas region.' },
  { year: '2024', event: 'Surpassed 2,500 projects. Named "Best Roofer" by Austin Home Magazine.' },
];

export default function About() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative py-32 lg:py-44 overflow-hidden">
        <div className="absolute inset-0 bg-navy-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(232,117,26,0.12)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(29,53,87,0.5)_0%,_transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 rounded-full px-4 py-1.5 text-sm font-semibold tracking-wide uppercase mb-6">
              <Shield className="w-3.5 h-3.5" />
              About Us
            </span>
            <h1 className="font-heading text-5xl lg:text-7xl font-bold text-white mt-4 mb-6 leading-[1.05]">
              More Than Roofers.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                We're Protectors.
              </span>
            </h1>
            <p className="text-white/60 text-lg lg:text-xl max-w-2xl leading-relaxed">
              Since 2008, Apex Ridge Roofing has been safeguarding homes and businesses
              across Texas with uncompromising quality, certified expertise, and a
              relentless commitment to doing the job right.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="relative">
                <img
                  src="/about-team.jpg"
                  alt="Apex Ridge Roofing team"
                  className="rounded-2xl shadow-2xl shadow-navy-900/10 w-full object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white rounded-2xl px-6 py-4 shadow-xl shadow-orange-500/30">
                  <div className="text-3xl font-heading font-bold">18+</div>
                  <div className="text-sm font-medium text-white/80 leading-tight">Years of<br />Excellence</div>
                </div>
              </div>
            </ScrollReveal>

            <div>
              <ScrollReveal>
                <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">
                  Our Mission
                </span>
                <h2 className="font-heading text-4xl lg:text-5xl font-bold text-navy-900 mt-3 mb-6">
                  Protecting What
                  <br />Matters Most
                </h2>
                <p className="text-charcoal-700 text-lg leading-relaxed mb-6">
                  Every roof we install is a promise — a promise of safety, durability, and
                  peace of mind. We believe that the structure over your head deserves the
                  same care and attention as the life beneath it.
                </p>
                <p className="text-charcoal-600 leading-relaxed mb-8">
                  Our team of certified professionals approaches every project with the
                  understanding that we're not just installing materials — we're building
                  long-term protection for families, businesses, and communities.
                </p>
                <div className="flex flex-wrap gap-4">
                  {['GAF Master Elite®', 'BBB A+ Rated', 'OSHA Certified'].map((badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center gap-1.5 bg-stone-100 border border-stone-200 text-navy-900 text-xs font-semibold px-3 py-1.5 rounded-full"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-orange-500" />
                      {badge}
                    </span>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">
                Our Values
              </span>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-navy-900 mt-3">
                What Drives Us
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group text-center p-8 rounded-2xl bg-white border border-stone-200/80 hover:border-orange-500/30 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                    <v.icon className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-navy-900 mb-3">{v.title}</h3>
                  <p className="text-charcoal-600 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="py-24 lg:py-32 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(232,117,26,0.08)_0%,_transparent_55%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-orange-400 font-semibold text-sm tracking-wider uppercase">
                Certifications
              </span>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white mt-3">
                Industry-Leading Credentials
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/20 transition-colors">
                      <Award className="w-6 h-6 text-orange-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className="font-heading font-bold text-white text-sm leading-tight">
                          {cert.name}
                        </h3>
                        <span className="bg-orange-500/20 text-orange-400 text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                          {cert.badge}
                        </span>
                      </div>
                      <p className="text-white/50 text-sm">{cert.desc}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">
                Our Journey
              </span>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-navy-900 mt-3">
                Building Trust Since 2008
              </h2>
            </div>
          </ScrollReveal>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500/60 via-stone-200 to-transparent" />

            {timeline.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="relative flex gap-8 mb-10 last:mb-0">
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/30 z-10">
                      <span className="text-white text-xs font-bold">{item.year.slice(-2)}</span>
                    </div>
                  </div>
                  <div className="flex-1 pb-2">
                    <div className="bg-stone-50 border border-stone-200/80 hover:border-orange-500/20 hover:bg-orange-500/5 rounded-xl p-5 transition-all duration-300">
                      <span className="font-heading font-bold text-orange-500 text-sm">
                        {item.year}
                      </span>
                      <p className="text-charcoal-700 text-sm leading-relaxed mt-1">
                        {item.event}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">
                Our Team
              </span>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-navy-900 mt-3">
                Leadership That Delivers
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group text-center p-6 rounded-2xl bg-white border border-stone-200/80 hover:border-orange-500/30 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-24 h-24 rounded-full bg-navy-900 mx-auto mb-5 flex items-center justify-center ring-4 ring-transparent group-hover:ring-orange-500/20 transition-all duration-300 shadow-lg">
                    <span className="text-white font-heading font-bold text-2xl">
                      {member.name.split(' ').map((n) => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-navy-900 mb-1">{member.name}</h3>
                  <p className="text-orange-500 text-sm font-semibold mb-2">{member.role}</p>
                  <span className="inline-block bg-stone-100 text-charcoal-600 text-xs font-medium px-3 py-1 rounded-full">
                    {member.years} years exp.
                  </span>
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
              Work With the Best
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
              Experience the Apex Ridge difference. Certified, insured, and committed to excellence on every project.
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