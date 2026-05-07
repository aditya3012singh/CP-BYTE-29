import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'EVENTS', path: '/events' },
    { name: 'RESOURCES', path: '/resources' },
    { name: 'TEAM', path: '/team' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-[#060a12]/80 backdrop-blur-md border-cyan-500/20 shadow-[0_4px_30px_rgba(0,240,255,0.05)] py-4'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <Link 
            to="/" 
            className="flex items-center gap-1 group relative z-10"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="text-2xl font-bold tracking-tighter text-white uppercase">
              CP<span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">BYTE</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `group relative text-xs font-semibold tracking-[0.15em] transition-colors duration-300 py-2 ${
                    isActive ? 'text-cyan-400' : 'text-slate-400 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {/* Hover & Active underline effect */}
                    <span 
                      className={`absolute -bottom-1 left-0 h-[2px] bg-cyan-400 transition-all duration-300 ease-out ${
                        isActive ? 'w-full shadow-[0_0_10px_rgba(34,211,238,0.7)]' : 'w-0 group-hover:w-full shadow-none group-hover:shadow-[0_0_10px_rgba(34,211,238,0.5)]'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="relative inline-flex items-center justify-center px-6 py-2.5 text-xs font-bold tracking-[0.1em] text-[#060a12] bg-cyan-400 uppercase transition-all duration-300 rounded overflow-hidden hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-[#060a12]">
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black" />
              <span className="relative">JOIN US</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center z-10">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-300 hover:text-cyan-400 transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-[100%] left-0 w-full bg-[#060a12]/95 backdrop-blur-xl border-b border-cyan-500/20 transition-all duration-300 ease-in-out overflow-hidden z-40 ${
          mobileMenuOpen ? 'max-h-[400px] opacity-100 border-b' : 'max-h-0 opacity-0 border-transparent'
        }`}
      >
        <nav className="flex flex-col px-6 pt-2 pb-6 gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `text-sm font-semibold tracking-[0.1em] transition-colors py-3 border-b border-white/5 ${
                  isActive ? 'text-cyan-400' : 'text-slate-400 hover:text-white'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <button className="mt-4 w-full px-6 py-3 text-sm font-bold tracking-[0.1em] text-[#060a12] bg-cyan-400 uppercase transition-all duration-300 rounded hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]">
            JOIN US
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
