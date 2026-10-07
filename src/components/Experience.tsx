import React, { useState } from 'react';
import { EXPERIENCES, ExperienceItem } from '../data/portfolioData.ts';
import { Calendar, Building2, ChevronRight, CheckCircle } from 'lucide-react';

export const Experience: React.FC = () => {
  const [activeExp, setActiveExp] = useState<string>(EXPERIENCES[0].id);

  return (
    <section id="experience" className="relative py-32 px-6 sm:px-10 lg:px-16 bg-[#090708] border-t border-[#E7DCD3]/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8">
          <span className="text-xs tracking-[0.2em] uppercase font-mono text-[#9B2946]">04 · CAREER TRAJECTORY</span>
          <div className="h-[1px] flex-1 max-w-[120px] bg-[#9B2946]/30" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl text-[#F5F0EA] font-normal leading-[0.98] max-w-2xl">
              MEASURED <span className="italic text-[#E7DCD3]">EXPERIENCE</span>.
            </h2>
            <p className="font-mono text-xs uppercase tracking-widest text-[#AAA0A3] mt-3">
              Agency Internships &amp; Freelance Brand Direction
            </p>
          </div>

          <p className="font-sans-clean text-sm sm:text-base text-[#AAA0A3] font-light max-w-md leading-relaxed">
            Hands-on agency and brand execution spanning performance advertising funnels, organic SEO architecture, and visual creative assets.
          </p>
        </div>

        {/* Timeline Architecture */}
        <div className="relative">
          {/* Vertical Drawing Line with Burgundy Gradient */}
          <div
            className="absolute left-6 sm:left-12 top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#9B2946] via-[#4A0E1C] to-transparent hidden md:block"
            aria-hidden="true"
          />

          <div className="space-y-12 sm:space-y-16">
            {EXPERIENCES.map((exp, idx) => {
              const isSelected = activeExp === exp.id;
              return (
                <div
                  key={exp.id}
                  onClick={() => setActiveExp(exp.id)}
                  className={`relative md:pl-28 transition-all duration-300 group cursor-pointer`}
                >
                  {/* Timeline Index Node */}
                  <div
                    className={`hidden md:flex absolute left-8 top-8 -translate-x-1/2 w-8 h-8 rounded-full items-center justify-center border font-mono text-xs font-semibold transition-all duration-300 ${
                      isSelected
                        ? 'bg-[#9B2946] border-[#F5F0EA] text-[#F5F0EA] shadow-[0_0_20px_rgba(155,41,70,0.6)]'
                        : 'bg-[#12090D] border-[#67152A] text-[#AAA0A3] group-hover:border-[#9B2946]'
                    }`}
                  >
                    {idx + 1}
                  </div>

                  {/* Experience Card Container */}
                  <div
                    className={`rounded-2xl p-8 sm:p-10 border transition-all duration-300 ${
                      isSelected
                        ? 'bg-gradient-to-br from-[#25070E]/80 via-[#12090D]/90 to-[#090708] border-[#9B2946] shadow-[0_20px_50px_rgba(37,7,14,0.7)]'
                        : 'bg-[#12090D]/50 border-[#E7DCD3]/10 hover:border-[#9B2946]/40 hover:bg-[#12090D]/80'
                    }`}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#E7DCD3]/10">
                      <div>
                        <div className="flex items-center gap-3 text-xs font-mono text-[#9B2946] uppercase tracking-wider mb-2">
                          <span>{exp.number}</span>
                          <span>·</span>
                          <span>{exp.type}</span>
                        </div>
                        <h3 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#F5F0EA] tracking-wide">
                          {exp.company}
                        </h3>
                        <p className="font-sans-clean text-base text-[#E7DCD3] font-medium mt-1">
                          {exp.role}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-xs font-mono text-[#AAA0A3] bg-[#25070E]/60 px-4 py-2 rounded-lg border border-[#67152A]/40 self-start lg:self-auto">
                        <Calendar className="w-3.5 h-3.5 text-[#9B2946]" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Detailed Highlights */}
                    <div className="py-6 space-y-3.5">
                      {exp.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-3 text-sm sm:text-base text-[#AAA0A3] font-light leading-relaxed">
                          <CheckCircle className="w-4 h-4 text-[#9B2946] shrink-0 mt-1" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Unboxed Applied Skills (Zero-Pill Discipline) */}
                    <div className="pt-6 border-t border-[#E7DCD3]/10 flex flex-wrap items-center gap-x-2 gap-y-1.5 text-xs text-[#E7DCD3]">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-[#AAA0A3]/70 mr-2">
                        COMPETENCIES:
                      </span>
                      {exp.skillsApplied.map((skill, sIdx) => (
                        <React.Fragment key={skill}>
                          <span className="hover:text-[#F5F0EA] transition-colors font-medium">
                            {skill}
                          </span>
                          {sIdx < exp.skillsApplied.length - 1 && (
                            <span className="text-[#9B2946]" aria-hidden="true">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
