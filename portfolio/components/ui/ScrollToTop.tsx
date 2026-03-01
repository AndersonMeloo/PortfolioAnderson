"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollTop = window.scrollY;
      
      const totalScrollable = scrollHeight - clientHeight;
      
      if (totalScrollable <= 0) return;

      const currentProgress = (scrollTop / totalScrollable) * 100;
      
      // Arredonda para não mostrar casas decimais
      setProgress(Math.round(currentProgress));
      setIsVisible(currentProgress > 5);
    };

    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);
    updateScroll();

    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const circumference = 2 * Math.PI * 20;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-10 right-10 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-black/80 backdrop-blur-xl  transition-all duration-500 hover:scale-110 active:scale-95 ${
        isVisible 
          ? "translate-y-0 opacity-100 scale-100" 
          : "translate-y-20 opacity-0 scale-50 pointer-events-none"
      }`}
      aria-label="Voltar ao topo"
    >
      {/* Círculo de Progresso */}
      <svg className="absolute h-full w-full -rotate-90" viewBox="0 0 56 56">
        <circle
          cx="28"
          cy="28"
          r="20"
          stroke="currentColor"
          strokeWidth="3"
          fill="transparent"
          className="text-white/10"
        />
        <circle
          cx="28"
          cy="28"
          r="20"
          stroke="currentColor"
          strokeWidth="3"
          fill="transparent"
          strokeDasharray={circumference}
          style={{ 
            strokeDashoffset: offset,
            transition: "stroke-dashoffset 0.1s ease-out" 
          }}
          className="text-white"
        />
      </svg>

      {/* Porcentagem Centralizada */}
      <div className="flex flex-col items-center justify-center relative z-10">
        <span className="font-numbers text-[10px] font-bold text-white leading-none">
          {progress}%
        </span>
      </div>
    </button>
  );
}