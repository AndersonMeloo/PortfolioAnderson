import { featuredProjects } from "@/data/projects";
import { ProjectFolder } from "@/components/projects/ProjectFolder";

/** Pilha de pastas sticky com os projetos em destaque. */
export function ProjectStack() {
  return (
    <section id="projetos" aria-label="Projetos" className="relative scroll-mt-4 bg-[#fafafa] max-md:px-0 max-md:pb-4">
      {featuredProjects.map((p, i) => (
        <ProjectFolder key={p.slug} project={p} index={i} />
      ))}
    </section>
  );
}
