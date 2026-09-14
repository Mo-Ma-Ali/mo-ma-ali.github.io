import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-content px-6 py-20 md:px-10">
      <div className="mb-10 flex items-baseline justify-between gap-6">
        <h2 className="font-display text-3xl italic text-paper">Projects</h2>
        <a
          href="https://github.com/Mo-Ma-Ali?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-muted hover:text-violet transition-colors"
        >
          All 13 repositories
        </a>
      </div>

      <div className="border-t border-hairline">
        {projects.map((project) => (
          <a
            key={project.slug}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="group grid gap-3 border-b border-hairline py-8 transition-colors hover:bg-panel/40 md:grid-cols-[1fr_1.6fr] md:gap-10 md:px-2"
          >
            <div>
              <p className="text-xs text-gold">{project.field}</p>
              <h3 className="mt-2 font-display text-2xl text-paper group-hover:text-violet transition-colors">
                {project.title}
              </h3>
            </div>
            <div>
              <p className="text-muted leading-relaxed">{project.detail}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded border border-hairline px-2.5 py-1 font-mono text-xs text-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
