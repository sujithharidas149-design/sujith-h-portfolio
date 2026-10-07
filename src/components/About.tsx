import React, { useState } from 'react';
import { MapPin, Mail, Phone, Compass, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

export const About: React.FC = () => {
  // 3D Tilt Card state
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <section id="about" className="relative py-32 px-6 sm:px-10 lg:px-16 bg-[#090708] border-t border-[#E7DCD3]/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Index Marker */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs tracking-[0.2em] uppercase font-mono text-[#9B2946]">02 · PHILOSOPHY &amp; PROFILE</span>
          <div className="h-[1px] flex-1 max-w-[120px] bg-[#9B2946]/30" />
        </div>

        {/* Large Editorial Statement */}
        <div className="mb-20">
          <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F5F0EA] font-normal leading-[0.98] text-balance max-w-5xl">
            MARKETING ISN'T JUST ABOUT REACH. IT'S ABOUT <span className="italic text-[#E7DCD3]">BEING REMEMBERED</span>.
          </h2>
        </div>

        {/* Two-Column Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Authentic Professional Summary */}
          <div className="lg:col-span-7 space-y-8 font-sans-clean">
            <p className="text-xl sm:text-2xl text-[#E7DCD3] font-light leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>

            <div className="text-base sm:text-lg text-[#AAA0A3] font-light leading-relaxed space-y-4">
              <p>
                In a digital landscape flooded with interchangeable noise and templated ads, true performance stems from creative distinction. Every campaign, search cluster, and video cut should carry a decisive reason to stop someone from scrolling.
              </p>
              <p>
                From coordinating multi-channel Meta ad testing at agencies to authoring targeted search frameworks and editing viral-pace reels, my approach bridges creative instinct with commercial discipline.
              </p>
            </div>

            {/* Core Working Principles */}
            <div className="pt-6 border-t border-[#E7DCD3]/10 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#9B2946] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-[#F5F0EA] mb-1">Performance-Driven Craft</h4>
                  <p className="text-[#AAA0A3] text-xs leading-relaxed">
                    Visual aesthetics engineered specifically for conversion, click-through, and retention.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#9B2946] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-[#F5F0EA] mb-1">Multi-Disciplinary Execution</h4>
                  <p className="text-[#AAA0A3] text-xs leading-relaxed">
                    Seamlessly moving from ad metrics to Photoshop compositions, video timelines, and copy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Floating 3D Interactive Profile / Info Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                transition: 'transform 0.15s ease-out'
              }}
              className="relative w-full max-w-md bg-gradient-to-b from-[#25070E]/80 via-[#12090D]/90 to-[#090708] border border-[#9B2946]/40 rounded-2xl p-8 shadow-[0_25px_60px_rgba(0,0,0,0.7)] backdrop-blur-xl group"
            >
              {/* Subtle Ambient Rim Light inside card */}
              <div
                className="absolute top-0 right-0 w-32 h-32 bg-[#9B2946]/20 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10"
                aria-hidden="true"
              />

              {/* Card Header & Avatar Badge */}
              <div className="flex items-center justify-between pb-6 border-b border-[#E7DCD3]/10">
                <div className="w-12 h-12 rounded-xl bg-[#4A0E1C] border border-[#9B2946]/60 flex items-center justify-center text-[#F5F0EA] font-editorial text-2xl font-bold">
                  S
                </div>
                <div className="text-right">
                  <span className="text-[10px] tracking-widest uppercase font-mono text-[#AAA0A3] block">IDENTITY</span>
                  <span className="text-xs text-[#E7DCD3] font-medium">Digital Marketer</span>
                </div>
              </div>

              {/* Profile Details */}
              <div className="py-6 space-y-4">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#AAA0A3] font-mono block mb-1">NAME</span>
                  <h3 className="font-editorial text-3xl font-semibold text-[#F5F0EA] tracking-wide">
                    {PERSONAL_INFO.name}
                  </h3>
                </div>

                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#AAA0A3] font-mono block mb-1">ROLE</span>
                  <p className="text-sm font-medium text-[#E7DCD3]">
                    {PERSONAL_INFO.role}
                  </p>
                </div>

                <div className="pt-2">
                  <span className="text-[11px] uppercase tracking-wider text-[#AAA0A3] font-mono block mb-2">LOCATION &amp; REACH</span>
                  <div className="flex items-center gap-2 text-xs text-[#AAA0A3]">
                    <MapPin className="w-3.5 h-3.5 text-[#9B2946]" />
                    <span>{PERSONAL_INFO.location}</span>
                  </div>
                </div>
              </div>

              {/* Direct Quick Connection Channels */}
              <div className="pt-6 border-t border-[#E7DCD3]/10 space-y-2.5">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center justify-between text-xs text-[#AAA0A3] hover:text-[#F5F0EA] transition-colors p-2 rounded-lg hover:bg-[#4A0E1C]/30 border border-transparent hover:border-[#9B2946]/30"
                >
                  <span className="flex items-center gap-2 truncate">
                    <Mail className="w-3.5 h-3.5 text-[#9B2946]" />
                    <span className="truncate">{PERSONAL_INFO.email}</span>
                  </span>
                  <span className="text-[10px] uppercase font-mono text-[#9B2946]">Send</span>
                </a>

                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex items-center justify-between text-xs text-[#AAA0A3] hover:text-[#F5F0EA] transition-colors p-2 rounded-lg hover:bg-[#4A0E1C]/30 border border-transparent hover:border-[#9B2946]/30"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#9B2946]" />
                    <span>+91 {PERSONAL_INFO.phone}</span>
                  </span>
                  <span className="text-[10px] uppercase font-mono text-[#9B2946]">Call</span>
                </a>
              </div>

              {/* Footer status inside card */}
              <div className="mt-6 pt-4 border-t border-[#E7DCD3]/10 flex items-center justify-between text-[11px] text-[#AAA0A3]">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Open for Opportunities</span>
                </span>
                <span className="font-mono text-[#AAA0A3]/60">2026 ACTIVE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
