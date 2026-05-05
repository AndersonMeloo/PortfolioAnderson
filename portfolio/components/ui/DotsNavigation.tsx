"use client";

import React, { useEffect, useState } from "react";

const sections = [
  { id: "sobre", label: "Sobre" },
  { id: "stacks", label: "Stacks" },
  { id: "open", label: "Open" },
  { id: "projetos", label: "Projetos" },
  { id: "experiencia", label: "Experiência" },
];

export default function DotsNavigation() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    let rafId: number | null = null;

    const updateActiveSection = () => {
      if (rafId !== null) return;

      rafId = window.requestAnimationFrame(() => {
        rafId = null;

        const marker = window.innerHeight * 0.35;
        let nextSection = sections[0]?.id ?? "";

        for (const { id } of sections) {
          const element = document.getElementById(id);
          if (!element) continue;

          const rect = element.getBoundingClientRect();

          if (rect.top <= marker) {
            nextSection = id;
          }
        }

        setActiveSection((currentSection) => (
          currentSection === nextSection ? currentSection : nextSection
        ));
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);

      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      if (id !== activeSection) {
        setActiveSection(id);
      }
    }
  };

  return (
    <nav className="fixed top-1/2 right-4 -translate-y-1/2 flex flex-col gap-4 z-50">
      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          className={`w-3 h-3 rounded-full border border-white transition-all
            ${activeSection === id
              ? "bg-white scale-125"
              : "bg-white/20 hover:bg-white/50"
            }
          `}
          aria-label={`Ir para seção ${label}`}
          title={label}
        />
      ))}
    </nav>
  );
}
