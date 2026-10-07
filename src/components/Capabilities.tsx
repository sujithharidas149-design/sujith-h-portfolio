import React, { useState } from 'react';
import { Target, Share2, Search, Palette, Sparkles, Globe } from 'lucide-react';
import { CAPABILITIES, CapabilityItem } from '../data/portfolioData.ts';

// Capability card with bespoke 3D tilt, cursor tracking, and layer displacement
const CapabilityCard: React.FC<{ capability: CapabilityItem; index: number }> = ({ capability, index }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const icons = [
    <Target className="w-6 h-6 text-[#9B2946]" />,
    <Share2 className="w-6 h-6 text-[#9B2946]" />,
    <Search className="w-6 h-6 text-[#9B2946]" />,
    <Palette className="w-6 h-6 text-[#9B2946]" />,
    <Sparkles className="w-6 h-6 text-[#9B2946]" />,
    <Globe className="w-6 h-6 text-[#9B2946]" />
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Tilt angle
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;
    setCoords({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${coords.x}deg) rotateY(${coords.y}deg)`,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out'
      }}
      className="relative group rounded-2xl bg-gradient-to-b from-[#25070E]/60 via-[#12090D]/80 to-[#090708] border border-[#E7DCD3]/10 hover:border-[#9B2946]/50 p-8 sm:p-10 flex flex-col justify-between transition-colors duration-300 shadow-[0_15px_35px_rgba(0,0,0,0.6)] overflow-hidden"
    >
      {/* Dynamic burgundy glow follow-spot on hover */}
      <div
        className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
        style={{
          background: `radial-gradient(400px circle at 50% 50%, rgba(155, 41, 70, 0.15), transparent 70%)`
        }}
        aria-hidden="true"
      />

      {/* Card Header */}
      <div>
        <div className="flex items-center justify-between pb-6 border-b border-[#E7DCD3]/10 mb-8">
          <span className="font-mono text-sm tracking-widest text-[#9B2946] font-semibold">
            {capability.number}
          </span>
          <div className="p-2.5 rounded-xl bg-[#25070E] border border-[#9B2946]/30 group-hover:border-[#9B2946] transition-colors">
            {icons[index % icons.length]}
          </div>
        </div>

        <h3 className="font-editorial text-3xl sm:text-4xl text-[#F5F0EA] font-semibold tracking-wide mb-3 group-hover:text-[#E7DCD3] transition-colors">
          {capability.title}
        </h3>

        <div className="text-xs uppercase font-mono tracking-widest text-[#9B2946] mb-4">
          {capability.subtitle}
        </div>

        <p className="font-sans-clean text-sm sm:text-base text-[#AAA0A3] font-light leading-relaxed mb-8">
          {capability.description}
        </p>
      </div>

      {/* Unboxed Metadata List with Typographic Separators (Zero-Pill Discipline) */}
      <div className="pt-6 border-t border-[#E7DCD3]/10">
        <span className="text-[11px] font-mono uppercase tracking-widest text-[#AAA0A3]/70 block mb-3">
          KEY DISCIPLINES
        </span>
        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs text-[#E7DCD3] font-medium">
          {capability.items.map((item, i) => (
            <React.Fragment key={item}>
              <span className="hover:text-[#F5F0EA] transition-colors">{item}</span>
              {i < capability.items.length - 1 && (
                <span className="text-[#9B2946]" aria-hidden="true">·</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Capabilities: React.FC = () => {
  return (
    <section id="capabilities" className="relative py-32 px-6 sm:px-10 lg:px-16 bg-[#090708] border-t border-[#E7DCD3]/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8">
          <span className="text-xs tracking-[0.2em] uppercase font-mono text-[#9B2946]">03 · CAPABILITIES</span>
          <div className="h-[1px] flex-1 max-w-[120px] bg-[#9B2946]/30" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl text-[#F5F0EA] font-normal leading-[0.98] max-w-2xl">
            WHAT I BRING TO THE <span className="italic text-[#E7DCD3]">TABLE</span>.
          </h2>

          <p className="font-sans-clean text-sm sm:text-base text-[#AAA0A3] font-light max-w-md leading-relaxed">
            A synthesized skill stack uniting paid performance arithmetic with editorial creative production and modern generative tools.
          </p>
        </div>

        {/* 6 Interactive 3D Tilt Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CAPABILITIES.map((cap, idx) => (
            <CapabilityCard key={cap.id} capability={cap} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
