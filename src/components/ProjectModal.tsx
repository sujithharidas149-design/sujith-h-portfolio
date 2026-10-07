import React, { useEffect } from 'react';
import { X, ArrowUpRight, Check, Sparkles, Layers } from 'lucide-react';
import { Project } from '../data/portfolioData.ts';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#090708]/90 backdrop-blur-2xl animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-b from-[#25070E] via-[#12090D] to-[#090708] border border-[#9B2946]/50 rounded-2xl shadow-[0_25px_80px_rgba(0,0,0,0.9)] p-6 sm:p-10 z-10">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-[#12090D] border border-[#E7DCD3]/20 hover:border-[#9B2946] text-[#E7DCD3] hover:text-[#F5F0EA] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9B2946]"
          aria-label="Close project view"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pb-6 border-b border-[#E7DCD3]/10 pr-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#9B2946] mb-3">
            <span>PROJECT CASE STUDY</span>
            <span>·</span>
            <span>{project.category}</span>
          </div>

          <h3 className="font-editorial text-3xl sm:text-5xl font-semibold text-[#F5F0EA] tracking-wide leading-tight mb-2">
            {project.title}
          </h3>

          <p className="font-sans-clean text-base text-[#E7DCD3] font-light">
            {project.subtitle}
          </p>
        </div>

        {/* Context & Outcome Highlight Box */}
        <div className="my-8 p-5 rounded-xl bg-[#4A0E1C]/30 border border-[#9B2946]/40 flex items-start gap-4">
          <Sparkles className="w-5 h-5 text-[#9B2946] shrink-0 mt-0.5" />
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#E7DCD3] font-semibold block mb-1">
              STRATEGIC OUTCOME
            </span>
            <p className="text-sm text-[#F5F0EA] font-light leading-relaxed">
              {project.metricsContext}
            </p>
          </div>
        </div>

        {/* Full Overview Section */}
        <div className="space-y-6 text-sm sm:text-base text-[#AAA0A3] font-light leading-relaxed">
          <div>
            <h4 className="font-editorial text-2xl text-[#F5F0EA] font-semibold mb-3">
              Overview &amp; Approach
            </h4>
            <p>{project.fullOverview}</p>
          </div>

          {/* Key Deliverables Grid */}
          <div className="pt-6 border-t border-[#E7DCD3]/10">
            <h4 className="font-editorial text-2xl text-[#F5F0EA] font-semibold mb-4">
              Key Deliverables
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.deliverables.map((del, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#E7DCD3]">
                  <Check className="w-4 h-4 text-[#9B2946] shrink-0" />
                  <span>{del}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Workflow (Zero-Pill Discipline) */}
          <div className="pt-6 border-t border-[#E7DCD3]/10">
            <h4 className="font-editorial text-2xl text-[#F5F0EA] font-semibold mb-3">
              Execution Stack
            </h4>
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs text-[#E7DCD3] font-mono">
              {project.toolsUsed.map((tool, idx) => (
                <React.Fragment key={tool}>
                  <span>{tool}</span>
                  {idx < project.toolsUsed.length - 1 && (
                    <span className="text-[#9B2946]" aria-hidden="true">/</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="mt-10 pt-6 border-t border-[#E7DCD3]/10 flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs text-[#AAA0A3] font-mono">
            Designed &amp; Strategized by Sujith H
          </span>
          <a
            href="#contact"
            onClick={onClose}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#4A0E1C] hover:bg-[#67152A] text-xs uppercase tracking-wider font-semibold text-[#F5F0EA] rounded-full border border-[#9B2946] transition-colors"
          >
            <span>Inquire About Similar Work</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#E7DCD3]" />
          </a>
        </div>
      </div>
    </div>
  );
};
