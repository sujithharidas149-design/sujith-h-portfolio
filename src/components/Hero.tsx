import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { Hero3DCanvas } from './Hero3DCanvas.tsx';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-6 sm:px-10 lg:px-16 overflow-hidden bg-[#090708]"
    >
      {/* Interactive 3D Digital Marketing Ecosystem */}
      <Hero3DCanvas />

      {/* Subtle Radial Burgundy Ambient Glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-[#4A0E1C]/25 via-[#25070E]/10 to-transparent rounded-full blur-3xl pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Top Eyebrow */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-6">
        <div className="inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-[#AAA0A3] font-medium animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-[#9B2946] animate-pulse" />
          <span>{PERSONAL_INFO.name} / DIGITAL MARKETING</span>
          <span className="text-[#9B2946]/40 hidden sm:inline">|</span>
          <span className="hidden sm:inline text-[#AAA0A3]/80">PALAKKAD, INDIA</span>
        </div>
      </div>

      {/* Main Editorial Hero Headline */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12">
        <div className="max-w-5xl">
          <h1 className="font-editorial text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal tracking-tight text-[#F5F0EA] leading-[0.92] text-balance mb-8">
            I BUILD <span className="italic font-light text-[#E7DCD3]">DIGITAL</span> EXPERIENCES THAT GET NOTICED.
          </h1>

          <p className="font-sans-clean text-lg sm:text-xl md:text-2xl text-[#AAA0A3] font-light max-w-2xl leading-relaxed mb-10">
            {PERSONAL_INFO.subTagline}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#4A0E1C] hover:bg-[#67152A] text-[#F5F0EA] text-sm uppercase tracking-widest font-semibold rounded-full border border-[#9B2946] transition-all duration-300 shadow-[0_10px_30px_rgba(74,14,28,0.4)] hover:shadow-[0_15px_40px_rgba(155,41,70,0.5)] transform hover:-translate-y-0.5"
            >
              <span>Explore My Work</span>
              <ArrowDown className="w-4 h-4 text-[#E7DCD3] group-hover:translate-y-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-transparent hover:bg-[#12090D] text-[#E7DCD3] hover:text-[#F5F0EA] text-sm uppercase tracking-widest font-semibold rounded-full border border-[#E7DCD3]/20 hover:border-[#9B2946]/80 transition-all duration-300"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-4 h-4 text-[#AAA0A3]" />
            </a>
          </div>
        </div>
      </div>

      {/* Hero Footnotes / Bottom Meta Row */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-8 border-t border-[#E7DCD3]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#AAA0A3] font-sans-clean">
        <div className="flex items-center gap-6">
          <span>Meta Ads &amp; Performance</span>
          <span className="text-[#9B2946]">·</span>
          <span>SEO &amp; Content Architecture</span>
          <span className="text-[#9B2946]">·</span>
          <span>Motion &amp; Video Editing</span>
        </div>

        <div className="flex items-center gap-2 text-[#E7DCD3]/80">
          <Sparkles className="w-3.5 h-3.5 text-[#9B2946]" />
          <span>Available for Roles &amp; Selected Projects</span>
        </div>
      </div>
    </section>
  );
};
