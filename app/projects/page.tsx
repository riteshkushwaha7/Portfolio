import PageHeader from "@/components/PageHeader";
import { archivedProjects, featuredProjects, type Project } from "@/lib/projects";

function Links({project}:{project:Project}) { return <div className="flex flex-wrap gap-5">{project.demo&&<a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-link">Live demo ↗</a>}{project.github&&<a href={project.github} target="_blank" rel="noopener noreferrer" className="text-link">GitHub ↗</a>}</div>; }

export default function Projects(){return <div className="page-shell">
  <PageHeader eyebrow="Projects" title="Things I’ve designed, built, and learned from." description="A mix of full-stack systems, applied machine-learning work, browser tooling, and team hackathon prototypes. Every status and technology listed here reflects the current implementation." />

  <section aria-labelledby="featured"><div className="mb-7 flex items-end justify-between"><div><p className="eyebrow">Recent work</p><h2 id="featured" className="section-title mt-3">Featured projects</h2></div><p className="muted hidden text-sm sm:block">2026</p></div>
    <div className="grid gap-5 lg:grid-cols-2">
      {featuredProjects.map((project,index)=><article key={project.title} className={`soft-card soft-card-hover flex flex-col p-6 sm:p-8 ${index===0?"lg:col-span-2 lg:grid lg:grid-cols-[.8fr_1.2fr] lg:gap-12":""}`}>
        <div><div className="flex flex-wrap items-center gap-3"><span className="eyebrow">Featured · 0{index+1}</span>{project.status&&<span className="tag border-[var(--accent)] text-[var(--accent)]">{project.status}</span>}</div><h3 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">{project.title}</h3><p className="muted mt-2 font-mono text-xs uppercase tracking-wider">{project.date}</p></div>
        <div className={index===0?"mt-7 lg:mt-0":"mt-7"}><p className="muted text-sm leading-6">{project.context}</p><p className="mt-4 leading-7">{project.description}</p><div className="mt-6 flex flex-wrap gap-2">{project.technologies.map(tech=><span className="tag" key={tech}>{tech}</span>)}</div><div className="mt-7"><Links project={project}/></div></div>
      </article>)}
    </div>
  </section>

  <section className="mt-20" aria-labelledby="archive"><div className="mb-7"><p className="eyebrow">Archive</p><h2 id="archive" className="section-title mt-3">More projects</h2></div><div className="overflow-hidden border"><div className="hidden grid-cols-[8rem_1fr_10rem_8rem] gap-5 border-b bg-[var(--surface-raised)] px-5 py-3 font-mono text-[11px] uppercase tracking-wider text-[var(--muted)] md:grid"><span>Date</span><span>Project</span><span>Built with</span><span>Links</span></div>{archivedProjects.map(project=><article key={project.title} className="grid gap-4 border-b p-5 last:border-0 md:grid-cols-[8rem_1fr_10rem_8rem] md:gap-5"><p className="muted font-mono text-xs">{project.date}</p><div><h3 className="font-semibold">{project.title}</h3>{project.context&&<p className="muted mt-1 text-xs">{project.context}</p>}<p className="muted mt-2 text-sm leading-6">{project.description}</p></div><p className="muted text-xs leading-5">{project.technologies.slice(0,4).join(" · ")}</p><Links project={project}/></article>)}</div></section>
 </div>}
