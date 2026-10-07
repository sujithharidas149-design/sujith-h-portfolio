import React, { useState } from 'react';
import { Award, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

export const Education: React.FC = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  const curriculumHighlights = [
    "Meta Ads Architecture & Funnel Optimisation",
    "Search Engine Optimization & Google Search Console",
    "Multi-channel Content Planning & Calendars",
    "Creative Direction for Video & High-Retention Reels",
    "Analytical Campaign Audits & Attribution",
    "Generative AI Workflows for Content Production"
  ];

  return (
    <section id="education" className="relative py-32 px-6 sm:px-10 lg:px-16 bg-[#090708] border-t border-[#E7DCD3]/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8">
          <span className="text-xs tracking-[0.2em] uppercase font-mono text-[#9B2946]">07 · CREDENTIALS</span>
          <div className="h-[1px] flex-1 max-w-[120px] bg-[#9B2946]/30" />
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
          <div className="lg:max-w-md">
            <h2 className="font-editorial text-4xl sm:text-6xl text-[#F5F0EA] font-normal leading-[0.98] mb-6">
              FOUNDATIONAL <span className="italic text-[#E7DCD3]">RIGOR</span>.
            </h2>

            <p className="font-sans-clean text-sm sm:text-base text-[#AAA0A3] font-light leading-relaxed mb-8">
              A comprehensive academic and practical curriculum uniting technical marketing foundations with rapid creative development.
            </p>

            <div className="space-y-3 font-sans-clean text-xs sm:text-sm text-[#E7DCD3]">
              {curriculumHighlights.map((curr, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#9B2946] shrink-0" />
                  <span>{curr}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certificate-Inspired 3D Interactive Card */}
          <div className="w-full lg:max-w-2xl">
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                transition: 'transform 0.15s ease-out'
              }}
              className="relative rounded-2xl p-8 sm:p-12 bg-gradient-to-br from-[#25070E] via-[#12090D] to-[#090708] border border-[#9B2946]/40 shadow-[0_25px_60px_rgba(37,7,14,0.6)] backdrop-blur-xl group"
            >
              {/* Subtle Guilloche / Watermark Seal */}
              <div className="flex items-start justify-between pb-8 border-b border-[#E7DCD3]/10">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#4A0E1C] border border-[#9B2946] flex items-center justify-center text-[#F5F0EA] shadow-lg">
                    <GraduationCap className="w-7 h-7 text-[#E7DCD3]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#9B2946] block">
                      CREDENTIAL ACCREDITATION
                    </span>
                    <span className="font-editorial text-lg text-[#F5F0EA] font-medium">
                      IPCS Global Certified
                    </span>
                  </div>
                </div>

                <div className="text-right font-mono text-xs text-[#AAA0A3]">
                  <span className="block text-[#E7DCD3] font-semibold">CLASS OF 2026</span>
                  <span>PALAKKAD, KERALA</span>
                </div>
              </div>

              {/* Central Title */}
              <div className="py-8">
                <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#AAA0A3] block mb-2">
                  CONFERRED PROGRAMME
                </span>
                <h3 className="font-editorial text-3xl sm:text-5xl font-semibold text-[#F5F0EA] tracking-wide leading-tight mb-4">
                  {PERSONAL_INFO.education.title}
                </h3>
                <p className="font-sans-clean text-sm sm:text-base text-[#AAA0A3] font-light leading-relaxed">
                  {PERSONAL_INFO.education.focus}
                </p>
              </div>

              {/* Certificate Bottom Meta */}
              <div className="pt-6 border-t border-[#E7DCD3]/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#AAA0A3]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#9B2946]" />
                  <span>{PERSONAL_INFO.education.institution} · {PERSONAL_INFO.education.location}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#E7DCD3]">
                  <Award className="w-4 h-4 text-[#9B2946]" />
                  <span>Verified Completion</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
