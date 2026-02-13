'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const raf = useRef<number | null>(null);

  const [enabled] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(pointer: fine)').matches;
  });

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const move = (e: MouseEvent) => {
      if (!cursorRef.current) return;

      if (raf.current) return;

      raf.current = requestAnimationFrame(() => {
        cursorRef.current!.style.transform = `
          translate(${e.clientX}px, ${e.clientY}px)
          translate(-50%, -50%)
        `;
        raf.current = null;
      });
    };

    const addHover = () => setIsHovering(true);
    const removeHover = () => setIsHovering(false);

    window.addEventListener('mousemove', move);

    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    return () => {
      window.removeEventListener('mousemove', move);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      className={`
        pointer-events-none
        fixed
        left-0
        top-0
        z-[9999]
        rounded-full
        border
        border-white
        will-change-transform
        transition-[width,height]
        duration-150
        ease-out
        ${isHovering ? 'w-7 h-7' : 'w-3 h-3'}
      `}
      style={{
        boxShadow: '0 0 4px 2px rgba(255,255,255,0.8)',
      }}
    />
  );
}
