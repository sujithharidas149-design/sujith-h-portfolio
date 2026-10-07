import React, { useState, useRef } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { SELECTED_PROJECTS, Project } from '../data/portfolioData.ts';
import { ProjectModal } from './ProjectModal.tsx';

export const SelectedWork: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = window.innerWidth * 0.7;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section id="work" className="relative py-32 px-6 sm:px-10 lg:px-16 bg-[#090708] border-t border-[#E7DCD3]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-16">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8">
          <span className="text-xs tracking-[0.2em] uppercase font-mono text-[#9B2946]">05 · PORTFOLIO</span>
          <div className="h-[1px] flex-1 max-w-[120px] bg-[#9B2946]/30" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F5F0EA] font-normal leading-[0.98]">
              SELECTED <span className="italic text-[#E7DCD3]">WORK</span>.
            </h2>
            <p className="font-mono text-xs uppercase tracking-widest text-[#AAA0A3] mt-3">
              Strategic Campaigns, Creative Assets &amp; Performance Frameworks
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="p-4 rounded-full border border-[#E7DCD3]/20 hover:border-[#9B2946] text-[#E7DCD3] hover:text-[#F5F0EA] hover:bg-[#25070E] transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9B2946]"
              aria-label="Previous project"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-4 rounded-full border border-[#E7DCD3]/20 hover:border-[#9B2946] text-[#E7DCD3] hover:text-[#F5F0EA] hover:bg-[#25070E] transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9B2946]"
              aria-label="Next project"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontally Scrolling Gallery Showcase */}
      <div
        ref={scrollContainerRef}
        className="flex gap-8 overflow-x-auto pb-12 pt-4 snap-x snap-mandatory scrollbar-none scroll-smooth px-4 sm:px-8 max-w-[100vw]"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {SELECTED_PROJECTS.map((project, idx) => (
          <div
            key={project.id}
            data-cursor-text="VIEW"
            onClick={() => setSelectedProject(project)}
            className="shrink-0 w-[88vw] sm:w-[75vw] lg:w-[62vw] max-w-4xl snap-center group cursor-pointer"
          >
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#25070E]/80 via-[#12090D] to-[#090708] border border-[#E7DCD3]/10 group-hover:border-[#9B2946] transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              {/* Visual Showcase Frame with Editorial Artwork */}
              <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden bg-[#18080E] flex items-center justify-center">
                {/* Abstract Visual Composition */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-[#4A0E1C]/40 via-[#25070E]/70 to-[#090708] group-hover:scale-105 transition-transform duration-700 ease-out"
                  aria-hidden="true"
                />

                {/* Fine Graphic Watermark & Line Art */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-20 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern id={`grid-${project.id}`} width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#F5F0EA" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#grid-${project.id})`} />
                </svg>

                {/* Editorial Visual Focus Center */}
                <div className="relative z-10 text-center p-6 max-w-lg">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#4A0E1C]/80 border border-[#9B2946] flex items-center justify-center text-[#F5F0EA] font-mono text-sm shadow-xl group-hover:scale-110 transition-transform">
                    0{idx + 1}
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#E7DCD3] block mb-2">
                    {project.category}
                  </span>
                  <div className="font-editorial text-2xl sm:text-3xl font-medium text-[#F5F0EA] tracking-wide">
                    {project.subtitle}
                  </div>
                </div>

                {/* Corner Project Badge */}
                <div className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-[#090708]/80 backdrop-blur-md border border-[#E7DCD3]/20 group-hover:border-[#9B2946] transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-[#F5F0EA] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-8 sm:p-10">
                <div className="flex items-center gap-3 text-xs font-mono text-[#9B2946] uppercase tracking-wider mb-2">
                  <span>{project.category}</span>
                  <span>·</span>
                  <span>CASE 0{idx + 1}</span>
                </div>

                <h3 className="font-editorial text-2xl sm:text-4xl font-semibold text-[#F5F0EA] mb-3 group-hover:text-[#E7DCD3] transition-colors">
                  {project.title}
                </h3>

                <p className="font-sans-clean text-sm sm:text-base text-[#AAA0A3] font-light leading-relaxed mb-6 line-clamp-2">
                  {project.description}
                </p>

                {/* Unboxed Deliverables Preview (Zero-Pill Discipline) */}
                <div className="pt-6 border-t border-[#E7DCD3]/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-x-2.5 text-xs text-[#E7DCD3] font-mono">
                    {project.deliverables.slice(0, 3).map((d, dIdx) => (
                      <React.Fragment key={d}>
                        <span>{d}</span>
                        {dIdx < 2 && <span className="text-[#9B2946]">/</span>}
                      </React.Fragment>
                    ))}
                  </div>

                  <span className="text-xs uppercase tracking-widest font-semibold text-[#9B2946] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Inspect Case</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
