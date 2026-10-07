import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 px-6 sm:px-10 lg:px-16 bg-[#090708] border-t border-[#E7DCD3]/10 font-sans-clean">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <span className="font-editorial text-2xl sm:text-3xl font-semibold text-[#F5F0EA] block tracking-wide">
            {PERSONAL_INFO.name}
          </span>
          <p className="text-xs text-[#AAA0A3] mt-1 font-mono">
            {PERSONAL_INFO.role} · {PERSONAL_INFO.location}
          </p>
        </div>

        {/* Core Pillars Unboxed List */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#E7DCD3] font-medium">
          <span>Performance Marketing</span>
          <span className="text-[#9B2946]">·</span>
          <span>Social Media</span>
          <span className="text-[#9B2946]">·</span>
          <span>Content &amp; SEO</span>
          <span className="text-[#9B2946]">·</span>
          <span>Creative Production</span>
        </div>

        {/* Back to Top & Copyright */}
        <div className="flex items-center gap-6">
          <span className="text-xs text-[#AAA0A3] font-mono">
            © 2026 Sujith H
          </span>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-[#12090D] border border-[#E7DCD3]/20 hover:border-[#9B2946] text-[#E7DCD3] hover:text-[#F5F0EA] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9B2946]"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
