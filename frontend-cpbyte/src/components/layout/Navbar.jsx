import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Button from '../common/Button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [search, setSearch] = useState('');

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
          ? 'bg-[#060a12]/80 backdrop-blur-md border-cyan-500/20 py-4'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-1">
            <span className="text-2xl font-bold text-white">
              CP<span className="text-cyan-400">BYTE</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  isActive ? 'text-cyan-400' : 'text-slate-400 hover:text-white'
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* 🔍 Search (your feature added) */}
          <div className="hidden md:flex items-center bg-slate-800 px-2 py-1 rounded">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent outline-none text-sm text-white"
            />
          </div>

          {/* 🔔 Bell (your feature added) */}
          <button className="hidden md:block text-white ml-3">
            🔔
          </button>

          {/* CTA */}
          <div className="hidden md:block">
            <Button>JOIN US</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;