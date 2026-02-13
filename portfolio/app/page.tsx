'use client';

import Link from "next/link";
import { useState } from "react";

export default function NavMenu() {
  const [active, setActive] = useState<string>("Início");

  const linkClass = (name: string) =>
    `transition hover:text-white ${active === name
      ? "text-white border-b border-white/50"
      : "text-white/50"
    }`;

  const links = ["Início", "Sobre", "Projetos", "Experiências", "Contato"];

  return (

    <div className="fixed top-0 left-0 right-0 z-40 border-b border-white/10 backdrop-blur-md p-4 w-full">
      <div className="w-[80%] m-auto">

        <nav className="flex items-center justify-center gap-6 text-[14px] font-montserrat">
          {links.map((link) => (
            <Link
              key={link}
              href="#"
              onClick={() => setActive(link)}
              className={linkClass(link)}
            >
              {link}
            </Link>
          ))}
        </nav>

      </div>
    </div>
  );
}
