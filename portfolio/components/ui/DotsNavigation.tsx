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
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
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
