import React from 'react';

export const PersonalStatement: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-32 px-6 sm:px-10 lg:px-16 bg-[#090708] border-t border-[#E7DCD3]/10 overflow-hidden">
      {/* Cinematic Ambient Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#4A0E1C]/20 via-[#25070E]/10 to-transparent rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full text-center">
        {/* Subtle Eyebrow */}
        <span className="text-xs uppercase font-mono tracking-[0.3em] text-[#9B2946] block mb-12">
          08 · CORE CREED
        </span>

        {/* Large Cinematic Three-Line Statement */}
        <div className="space-y-4 sm:space-y-6 md:space-y-8 font-editorial text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold leading-[0.95] tracking-tight">
          <div className="text-[#F5F0EA] transition-all duration-700 hover:text-[#9B2946] hover:translate-x-2">
            CREATIVE IDEAS.
          </div>

          <div className="text-[#E7DCD3] italic font-light transition-all duration-700 hover:text-[#F5F0EA] hover:-translate-x-2">
            SMART STRATEGY.
          </div>

          <div className="text-[#9B2946] transition-all duration-700 hover:text-[#F5F0EA] hover:translate-x-2">
            REAL EXECUTION.
          </div>
        </div>

        {/* Quiet Subtext */}
        <p className="mt-16 font-sans-clean text-base sm:text-lg text-[#AAA0A3] font-light max-w-xl mx-auto leading-relaxed">
          Crafting digital identities where visual storytelling meets measurable business performance.
        </p>
      </div>
    </section>
  );
};
