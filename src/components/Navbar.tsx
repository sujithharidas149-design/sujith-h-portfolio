import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Experience', href: '#experience' },
    { name: 'Toolkit', href: '#toolkit' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center px-4 sm:px-6 lg:px-8 ${
          scrolled ? 'py-3' : 'py-6'
        }`}
      >
        <div
          className={`w-full max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 rounded-full px-5 sm:px-7 py-3 ${
            scrolled
              ? 'bg-[#12090D]/80 backdrop-blur-xl border border-[#9B2946]/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
              : 'bg-transparent border border-transparent'
          }`}
        >
          {/* Zone 1: Brand Wordmark (Single text element) */}
          <a
            href="#hero"
            className="font-editorial text-xl sm:text-2xl font-semibold tracking-wider text-[#F5F0EA] hover:text-[#9B2946] transition-colors whitespace-nowrap"
          >
            {PERSONAL_INFO.name}
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-xs uppercase tracking-widest font-medium text-[#AAA0A3]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#F5F0EA] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#9B2946] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs uppercase tracking-wider font-semibold text-[#F5F0EA] bg-[#4A0E1C]/80 hover:bg-[#67152A] border border-[#9B2946]/50 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(155,41,70,0.3)] whitespace-nowrap"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#E7DCD3]" />
            </a>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#F5F0EA] hover:text-[#9B2946] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9B2946]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#090708]/95 backdrop-blur-2xl md:hidden flex flex-col justify-center px-8">
          <nav className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-editorial text-3xl font-medium text-[#F5F0EA] hover:text-[#9B2946] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-6 border-t border-[#9B2946]/20 mt-4">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold tracking-wider text-[#F5F0EA] bg-[#4A0E1C] rounded-full border border-[#9B2946]"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};
