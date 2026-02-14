'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const raf = useRef<number | null>(null);

  const [enabled] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(pointer: fine)').matches;
  });

  const [isHovering, setIsHovering] = useState(false);
  const pathname = usePathname();

  const recentClick = useRef(false);
  const clickTimeout = useRef<number | null>(null);

  useEffect(() => {
    // Reset hover state on route change (Next.js navigation)
    setIsHovering(false);
  }, [pathname]);

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

    const onOver = (e: Event) => {
      const target = e.target as Element | null;
      if (!target) return;
      if (recentClick.current) return;
      const el = target.closest('a, button');
      if (el) addHover();
    };

    const onOut = (e: Event) => {
      const target = e.target as Element | null;
      if (!target) return;

      const from = target.closest('a, button');
      // If we didn't come from an interactive element, ignore
      if (!from) return;

      const related = (e as MouseEvent).relatedTarget as Element | null;
      // If the related target is still inside the same interactive element, don't remove hover
      if (related && related.closest && related.closest('a, button') === from) return;

      removeHover();
    };

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);
    document.addEventListener('mousedown', removeHover);
    document.addEventListener('touchstart', removeHover, { passive: true });
    const onClick = () => {
      removeHover();
      recentClick.current = true;
      if (clickTimeout.current) window.clearTimeout(clickTimeout.current);
      clickTimeout.current = window.setTimeout(() => {
        recentClick.current = false;
        clickTimeout.current = null;
      }, 250);
    };
    document.addEventListener('click', onClick);
    document.addEventListener('pointerdown', onClick);

    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      document.removeEventListener('mousedown', removeHover);
      document.removeEventListener('touchstart', removeHover);
      document.removeEventListener('click', onClick);
      document.removeEventListener('pointerdown', onClick);
      if (clickTimeout.current) window.clearTimeout(clickTimeout.current);
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
