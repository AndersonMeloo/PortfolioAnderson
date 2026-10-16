import { Hero } from "@/components/hero/Hero";
import { Dock } from "@/components/layout/Dock";
import { Footer } from "@/components/layout/Footer";
import { Skills } from "@/components/sections/Skills";
import { Practice } from "@/components/sections/Practice";
import { ProjectStack } from "@/components/sections/ProjectStack";
import { Experience } from "@/components/sections/Experience";
import { GithubShowcase } from "@/components/sections/GithubShowcase";
import { AboutWindow } from "@/components/sections/AboutWindow";
import { FolderIconDefs } from "@/components/ui/FolderIcon";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <a
        href="#habilidades"
        className="sr-only z-100 rounded-md bg-black px-3 py-2 text-sm text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Pular para o conteúdo
      </a>
      <FolderIconDefs />
      <Hero />
      <Dock />
      <main>
        <Skills />
        <Practice />
        <ProjectStack />
        <Experience />
        <GithubShowcase />
        <AboutWindow />
      </main>
      <Footer />
    </div>
  );
}
