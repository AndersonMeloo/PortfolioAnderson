"use client";

const links = [
  { label: "Sobre", id: "sobre" },
  { label: "Stacks", id: "stacks" },
  { label: "Open", id: "open" },
  { label: "Projetos", id: "projetos" },
  { label: "Experiência", id: "experiencia" },
];

export default function NavMenu() {
  const scrollTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b border-white/10">
      <nav className="flex justify-center gap-6 p-4 text-sm">
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollTo(link.id)}
            className="text-white/50 hover:text-white transition"
          >
            {link.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
