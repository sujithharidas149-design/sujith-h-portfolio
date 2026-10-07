import React, { useEffect, useState, useRef } from 'react';
import { TrendingUp, BarChart3, Eye, Layers } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

export const PerformanceStat: React.FC = () => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Smooth Count-Up Animation when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const target = 343;
          const duration = 2000;
          const stepTime = 20;
          const totalSteps = duration / stepTime;
          const increment = target / totalSteps;

          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, stepTime);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  // Subtle Interactive Canvas Data Visualization (Waves, Grid & Floating Nodes)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Nodes
    const nodes = Array.from({ length: 28 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1,
    }));

    let animId: number;
    let time = 0;

    const render = () => {
      animId = requestAnimationFrame(render);
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Draw subtle grid lines
      ctx.strokeStyle = 'rgba(74, 14, 28, 0.12)';
      ctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw undulating bezier analytics trend line
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(155, 41, 70, 0.4)';
      ctx.lineWidth = 2;
      for (let x = 0; x < width; x += 10) {
        const y =
          height * 0.55 +
          Math.sin(x * 0.005 + time) * 45 +
          Math.cos(x * 0.01 - time * 0.5) * 25;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Draw second supporting trend line
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(103, 21, 42, 0.25)';
      ctx.lineWidth = 1.5;
      for (let x = 0; x < width; x += 10) {
        const y =
          height * 0.65 +
          Math.sin(x * 0.006 - time * 0.8) * 35 +
          Math.sin(x * 0.015 + time) * 20;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Render floating nodes and connections
      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        ctx.fillStyle = 'rgba(245, 240, 234, 0.35)';
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dist = Math.hypot(node.x - other.x, node.y - other.y);
          if (dist < 120) {
            ctx.strokeStyle = `rgba(155, 41, 70, ${0.25 * (1 - dist / 120)})`;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }
      });
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[85vh] flex items-center justify-center py-28 px-6 sm:px-10 lg:px-16 bg-[#090708] border-t border-[#E7DCD3]/10 overflow-hidden"
    >
      {/* Background Interactive Data Visualization Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-60 z-0"
        aria-hidden="true"
      />

      {/* Atmospheric Central Radiance */}
      <div
        className="absolute w-[500px] h-[500px] bg-[#4A0E1C]/30 rounded-full blur-[140px] pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Main Metric Presentation */}
      <div className="relative z-10 max-w-5xl mx-auto w-full text-center">
        {/* Metric Kicker */}
        <div className="inline-flex items-center gap-2 mb-6 text-xs uppercase tracking-[0.25em] font-mono text-[#9B2946]">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>PERFORMANCE HIGHLIGHT</span>
        </div>

        {/* The Huge Metric */}
        <div className="flex items-center justify-center font-editorial leading-none tracking-tight my-4">
          <span className="text-8xl sm:text-9xl md:text-[13rem] lg:text-[15rem] font-bold text-[#F5F0EA] drop-shadow-[0_20px_50px_rgba(74,14,28,0.5)] tabular-nums">
            {count}K+
          </span>
        </div>

        {/* Label */}
        <div className="text-sm sm:text-base font-mono uppercase tracking-[0.3em] text-[#E7DCD3] mb-8 font-semibold">
          {PERSONAL_INFO.highlightLabel}
        </div>

        {/* Strictly Accurate Supporting Attribution */}
        <div className="max-w-xl mx-auto px-6 py-4 rounded-xl bg-[#25070E]/50 border border-[#9B2946]/30 backdrop-blur-md">
          <p className="text-base sm:text-lg text-[#F5F0EA] font-light leading-relaxed">
            "{PERSONAL_INFO.highlightText}"
          </p>
          <p className="text-xs text-[#AAA0A3] mt-2 font-mono">
            Organic distribution, short-form viral pacing, and multi-channel creative execution.
          </p>
        </div>

        {/* Qualitative Metric Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mt-16 text-left">
          <div className="p-5 rounded-xl border border-[#E7DCD3]/10 bg-[#12090D]/60 backdrop-blur-sm">
            <Eye className="w-5 h-5 text-[#9B2946] mb-3" />
            <h4 className="text-sm font-semibold text-[#F5F0EA] mb-1">Attention Retention</h4>
            <p className="text-xs text-[#AAA0A3] leading-relaxed">
              Crafting visual hooks in the opening 2 seconds to curb feed bounce.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-[#E7DCD3]/10 bg-[#12090D]/60 backdrop-blur-sm">
            <BarChart3 className="w-5 h-5 text-[#9B2946] mb-3" />
            <h4 className="text-sm font-semibold text-[#F5F0EA] mb-1">Iterative Testing</h4>
            <p className="text-xs text-[#AAA0A3] leading-relaxed">
              A/B testing typography styles, pacing, and hooks against distinct demographics.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-[#E7DCD3]/10 bg-[#12090D]/60 backdrop-blur-sm">
            <Layers className="w-5 h-5 text-[#9B2946] mb-3" />
            <h4 className="text-sm font-semibold text-[#F5F0EA] mb-1">Asset Production</h4>
            <p className="text-xs text-[#AAA0A3] leading-relaxed">
              Translating brand directives into high-tempo reels and graphic layouts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
