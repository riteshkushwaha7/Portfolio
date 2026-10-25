import Link from "next/link";
import { featuredProjects } from "@/lib/projects";
import { site } from "@/lib/site";

const personSchema={"@context":"https://schema.org","@type":"Person",name:"Ritesh Kushwaha",url:site.url,image:`${site.url}/assets/photo.jpeg`,jobTitle:"Software Engineer",alumniOf:{"@type":"CollegeOrUniversity",name:"University Institute of Technology, RGPV Bhopal"},sameAs:[site.github,site.linkedin,site.x],knowsAbout:["Software Engineering","Full Stack Development","Machine Learning","Data Structures and Algorithms"]};

export default function Home(){return <div className="page-shell !pb-16">
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(personSchema)}}/>
  <section className="chess-panel mx-auto flex min-h-[calc(100vh-9rem)] max-w-5xl flex-col justify-center px-1 py-16 sm:px-8 sm:py-24" aria-labelledby="intro-title">
    <div className="mx-auto w-full max-w-3xl">
      <p className="eyebrow">Hi there, I&apos;m Ritesh.</p>
      <h1 id="intro-title" className="mt-6 max-w-2xl text-4xl font-semibold leading-[1.16] tracking-[-0.03em] sm:text-5xl">I build full-stack and machine-learning products that solve practical problems.</h1>
      <p className="muted mt-6 max-w-2xl text-base leading-7">I&apos;m an Information Technology undergraduate at UIT RGPV, Bhopal, graduating in 2027. My work spans browser tools, web platforms, applied ML, and team hackathon projects—with a focus on clear interfaces and dependable implementation.</p>
      <div className="mt-9 flex flex-wrap gap-3"><Link href="/projects" className="button-primary min-w-36">Projects</Link><Link href="/contact" className="button-secondary min-w-36">Get in touch</Link><Link href="/resume" className="text-link ml-1 px-3 py-3">View résumé →</Link></div>
      <dl className="mt-12 grid max-w-xl grid-cols-3 border-y py-4"><div><dt className="muted text-[11px] uppercase tracking-wider">Experience</dt><dd className="mt-1 text-sm font-semibold">2 internships</dd></div><div className="border-x px-4 sm:px-6"><dt className="muted text-[11px] uppercase tracking-wider">Practice</dt><dd className="mt-1 text-sm font-semibold">1000+ DSA</dd></div><div className="pl-4 sm:pl-6"><dt className="muted text-[11px] uppercase tracking-wider">Graduating</dt><dd className="mt-1 text-sm font-semibold">2027</dd></div></dl>
    </div>
    <div className="mx-auto mt-20 w-full max-w-4xl border-t pt-8"><p className="muted text-center text-xs">Recent projects I&apos;m proud to have worked on</p><div className="mt-7 grid grid-cols-1 gap-px overflow-hidden border bg-[var(--border)] sm:grid-cols-3">{featuredProjects.map(project=><Link key={project.title} href="/projects" className="group bg-[var(--background)] px-5 py-5 text-center"><span className="font-medium transition group-hover:text-[var(--accent)]">{project.title}</span><span className="muted ml-2" aria-hidden="true">↗</span></Link>)}</div></div>
  </section>
 </div>}
