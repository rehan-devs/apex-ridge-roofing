import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, ChevronRight, MapPin, Calendar, Ruler } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

type Category = 'all' | 'residential' | 'commercial' | 'repair' | 'storm';

const categoryStyle: Record<string, string> = {
  residential: 'bg-blue-500/90 text-white',
  commercial: 'bg-purple-500/90 text-white',
  repair: 'bg-amber-500/90 text-white',
  storm: 'bg-teal-500/90 text-white',
};

const projects = [
  {
    id: 1,
    title: 'Hamilton Residence — Full Roof Replacement',
    category: 'residential' as Category,
    location: 'Westlake Hills, Austin TX',
    material: 'GAF Timberline HDZ Shingles',
    area: '3,200 sq ft',
    completed: 'Nov 2025',
    image: '/residential-roof.jpg',
  },
  {
    id: 2,
    title: 'Metro Office Complex — TPO Installation',
    category: 'commercial' as Category,
    location: 'Domain, Austin TX',
    material: 'Firestone TPO 60-mil',
    area: '28,000 sq ft',
    completed: 'Sep 2025',
    image: '/commercial-roofing.jpg',
  },
  {
    id: 3,
    title: 'Chen Residence — Storm Damage Restoration',
    category: 'storm' as Category,
    location: 'Round Rock, TX',
    material: 'Owens Corning Duration Shingles',
    area: '2,800 sq ft',
    completed: 'Aug 2025',
    image: '/hero-roofing.jpg',
  },
  {
    id: 4,
    title: 'Lakewood Shopping Center — EPDM Replacement',
    category: 'commercial' as Category,
    location: 'Lakeway, TX',
    material: 'Carlisle EPDM 90-mil',
    area: '15,500 sq ft',
    completed: 'Jul 2025',
    image: '/commercial-roofing.jpg',
  },
  {
    id: 5,
    title: 'Patel Residence — Emergency Leak Repair',
    category: 'repair' as Category,
    location: 'Cedar Park, TX',
    material: 'Asphalt Shingle Patch',
    area: '400 sq ft',
    completed: 'Oct 2025',
    image: '/residential-roof.jpg',
  },
  {
    id: 6,
    title: 'Garcia Residence — Metal Roof Installation',
    category: 'residential' as Category,
    location: 'Dripping Springs, TX',
    material: 'Standing Seam Metal Roof',
    area: '4,100 sq ft',
    completed: 'Jun 2025',
    image: '/hero-roofing.jpg',
  },
];

const filters: { label: string; value: Category }[] = [
  { label: 'All Projects', value: 'all' },
  { label: 'Residential', value: 'residential' },
  { label: 'Commercial', value: 'commercial' },
  { label: 'Repair', value: 'repair' },
  { label: 'Storm Damage', value: 'storm' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Category>('all');

  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative py-32 lg:py-44 overflow-hidden">
        <div className="absolute inset-0 bg-navy-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(232,117,26,0.12)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(29,53,87,0.5)_0%,_transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 rounded-full px-4 py-1.5 text-sm font-semibold tracking-wide uppercase mb-6">
              <Filter className="w-3.5 h-3.5" />
              Our Work
            </span>
            <h1 className="font-heading text-5xl lg:text-7xl font-bold text-white mt-4 mb-6 leading-[1.05]">
              Projects That
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                Speak for Themselves
              </span>
            </h1>
            <p className="text-white/60 text-lg lg:text-xl max-w-2xl leading-relaxed">
              Browse our portfolio of completed residential and commercial roofing
              projects across Central Texas.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Before / After ── */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">
                Transformations
              </span>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-navy-900 mt-3 mb-4">
                Before &amp; After
              </h2>
              <p className="text-charcoal-600 text-lg max-w-2xl mx-auto">
                See the dramatic difference our work makes. Drag the slider to compare.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {[
              {
                before: '/before-roof.jpg',
                after: '/after-roof.jpg',
                name: 'Hamilton Residence',
                desc: 'Complete shingle replacement — Westlake Hills, Austin TX',
                delay: 0.1,
              },
              {
                before: '/before-roof.jpg',
                after: '/residential-roof.jpg',
                name: 'Chen Residence',
                desc: 'Storm damage restoration — Round Rock, TX',
                delay: 0.2,
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={item.delay}>
                <div>
                  <BeforeAfterSlider
                    beforeSrc={item.before}
                    afterSrc={item.after}
                    beforeLabel="Before"
                    afterLabel="After"
                    className="shadow-2xl shadow-navy-900/15 rounded-2xl overflow-hidden"
                  />
                  <div className="mt-4 pl-1">
                    <h3 className="font-heading font-bold text-lg text-navy-900">
                      {item.name}
                    </h3>
                    <p className="text-charcoal-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Portfolio Grid ── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">
                Portfolio
              </span>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-navy-900 mt-3">
                Recent Projects
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
              {filters.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setActiveFilter(f.value)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    activeFilter === f.value
                      ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25 scale-[1.03]'
                      : 'bg-stone-100 text-charcoal-700 hover:bg-stone-200 hover:scale-[1.01]'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((project, i) => (
                <ScrollReveal key={project.id} delay={i * 0.08}>
                  <div className="group bg-white rounded-2xl border border-stone-200/80 overflow-hidden hover:shadow-2xl hover:shadow-navy-900/10 hover:border-orange-500/20 transition-all duration-300 hover:-translate-y-1.5">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span
                          className={`text-xs font-bold px-3 py-1.5 rounded-full ${
                            categoryStyle[project.category] ?? 'bg-white/20 text-white'
                          }`}
                        >
                          {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-heading font-bold text-navy-900 mb-4 group-hover:text-orange-500 transition-colors leading-snug">
                        {project.title}
                      </h3>
                      <div className="space-y-2.5">
                        <div className="flex items-center gap-2 text-charcoal-600 text-sm">
                          <MapPin className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />
                          {project.location}
                        </div>
                        <div className="flex items-center gap-2 text-charcoal-600 text-sm">
                          <Ruler className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />
                          {project.area} · {project.material}
                        </div>
                        <div className="flex items-center gap-2 text-charcoal-600 text-sm">
                          <Calendar className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />
                          Completed {project.completed}
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">🔍</div>
              <p className="text-charcoal-600 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 lg:py-32 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(232,117,26,0.12)_0%,_transparent_70%)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
              Join our list of satisfied clients. Get a free estimate and see the Apex Ridge difference.
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