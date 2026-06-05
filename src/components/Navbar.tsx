import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-navy-900/95 shadow-2xl shadow-black/30 backdrop-blur-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center group-hover:bg-orange-400 transition-colors duration-200 shadow-lg shadow-orange-500/25">
                <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
                  <path d="M16 4L4 14h4v12h6v-7h4v7h6V14h4L16 4z" fill="white" />
                </svg>
              </div>
              <div className="leading-none">
                <span className="text-white font-heading font-bold text-xl tracking-tight block">
                  APEX RIDGE
                </span>
                <span className="text-orange-400 text-[10px] font-bold tracking-[0.28em] uppercase block mt-0.5">
                  Roofing
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(link.path)
                      ? 'text-orange-400 bg-white/5'
                      : 'text-white/75 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-orange-400 rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <Link
                to="/contact"
                className="bg-orange-500 hover:bg-orange-400 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/30 hover:scale-[1.02]"
              >
                Free Estimate
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
              aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden animate-fade-in"
            onClick={() => setIsMobileOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-72 bg-navy-900 z-50 lg:hidden animate-slide-down shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-6 h-20 border-b border-white/10">
              <span className="text-white font-heading font-bold text-lg">Menu</span>
              <button
                onClick={() => setIsMobileOpen(false)}
                className="w-9 h-9 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    isActive(link.path)
                      ? 'text-orange-400 bg-orange-500/10 border border-orange-500/20'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-orange-400" />
                  )}
                </Link>
              ))}
            </nav>

            <div className="px-4 pb-8 pt-4 border-t border-white/10">
              <Link
                to="/contact"
                className="block bg-orange-500 hover:bg-orange-400 text-white px-4 py-3.5 rounded-xl text-sm font-bold text-center transition-colors shadow-lg shadow-orange-500/25"
              >
                Get a Free Estimate
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}