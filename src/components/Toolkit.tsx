import React, { useState } from 'react';
import { TOOLKIT, ToolItem } from '../data/portfolioData.ts';
import { Wrench, Layers, Sparkles, Cpu } from 'lucide-react';

export const Toolkit: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Creative', 'Performance', 'Distribution', 'AI'];

  const filteredTools =
    activeCategory === 'All'
      ? TOOLKIT
      : TOOLKIT.filter((tool) => tool.category === activeCategory);

  return (
    <section id="toolkit" className="relative py-32 px-6 sm:px-10 lg:px-16 bg-[#090708] border-t border-[#E7DCD3]/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8">
          <span className="text-xs tracking-[0.2em] uppercase font-mono text-[#9B2946]">06 · ARSENAL</span>
          <div className="h-[1px] flex-1 max-w-[120px] bg-[#9B2946]/30" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl text-[#F5F0EA] font-normal leading-[0.98]">
              THE TOOLS BEHIND <span className="italic text-[#E7DCD3]">THE WORK</span>.
            </h2>
            <p className="font-mono text-xs uppercase tracking-widest text-[#AAA0A3] mt-3">
              Spatial Execution Stack Across Design, Video &amp; Distribution
            </p>
          </div>

          {/* Interactive Category Filter Buttons (Functional Buttons allowed per skill) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#12090D] border border-[#E7DCD3]/10 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-lg transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#4A0E1C] text-[#F5F0EA] shadow-md border border-[#9B2946]/50'
                    : 'text-[#AAA0A3] hover:text-[#F5F0EA] hover:bg-[#25070E]/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Spatial Grid with Depth & Hover States */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTools.map((tool, idx) => (
            <div
              key={tool.name}
              className="group relative rounded-2xl p-7 bg-gradient-to-b from-[#1E070D]/70 via-[#12090D] to-[#090708] border border-[#E7DCD3]/10 hover:border-[#9B2946]/60 transition-all duration-300 hover:-translate-y-1.5 shadow-[0_15px_30px_rgba(0,0,0,0.6)] flex flex-col justify-between"
              style={{
                transitionDelay: `${idx * 25}ms`
              }}
            >
              {/* Subtle top corner ambient glow */}
              <div
                className="absolute top-0 right-0 w-24 h-24 bg-[#9B2946]/10 rounded-full blur-xl pointer-events-none group-hover:bg-[#9B2946]/25 transition-all duration-500"
                aria-hidden="true"
              />

              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#E7DCD3]/10 mb-5">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#9B2946]">
                    {tool.category}
                  </span>
                  <span className="text-xs font-mono text-[#E7DCD3]/80">
                    {tool.proficiency}
                  </span>
                </div>

                <h3 className="font-editorial text-2xl font-semibold text-[#F5F0EA] mb-3 group-hover:text-[#E7DCD3] transition-colors">
                  {tool.name}
                </h3>

                <p className="font-sans-clean text-xs sm:text-sm text-[#AAA0A3] font-light leading-relaxed mb-6">
                  {tool.description}
                </p>
              </div>

              {/* Bottom Subtle Bar */}
              <div className="pt-4 border-t border-[#E7DCD3]/10 flex items-center justify-between text-[11px] text-[#AAA0A3] font-mono">
                <span>Active Stack</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#9B2946] group-hover:scale-150 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
