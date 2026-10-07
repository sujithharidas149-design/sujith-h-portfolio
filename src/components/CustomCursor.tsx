import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only enable on fine pointer devices (desktop mouse)
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Check hovered element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, [role="button"], input, textarea, select');
      setIsPointer(!!interactive);

      // Check for custom cursor label attribute
      const customCursorElem = target.closest('[data-cursor-text]') as HTMLElement | null;
      if (customCursorElem) {
        setCursorText(customCursorElem.getAttribute('data-cursor-text') || '');
        setIsHovered(true);
      } else {
        setCursorText('');
        setIsHovered(!!interactive);
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Smooth trailing ring animation loop
    let animId: number;
    const updateRing = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.15;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }
      animId = requestAnimationFrame(updateRing);
    };
    animId = requestAnimationFrame(updateRing);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* High-precision inner center point */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 rounded-full bg-[#F5F0EA] pointer-events-none z-[9999] transition-opacity duration-300"
        style={{ willChange: 'transform' }}
      />

      {/* Trailing smooth magnetic ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 -ml-4 -mt-4 pointer-events-none z-[9998] rounded-full flex items-center justify-center transition-all duration-200 ease-out ${
          cursorText
            ? 'w-20 h-20 -ml-10 -mt-10 bg-[#4A0E1C]/90 backdrop-blur-md border border-[#9B2946] text-[#F5F0EA] text-[10px] tracking-widest font-semibold uppercase shadow-xl'
            : isHovered || isPointer
            ? 'w-12 h-12 -ml-6 -mt-6 border border-[#9B2946] bg-[#9B2946]/15'
            : 'w-8 h-8 border border-[#E7DCD3]/30'
        }`}
        style={{ willChange: 'transform' }}
      >
        {cursorText && (
          <span className="select-none animate-pulse">{cursorText}</span>
        )}
      </div>
    </>
  );
};
