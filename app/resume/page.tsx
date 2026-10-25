import PageHeader from "@/components/PageHeader";

export default function Resume() {
  return <div className="page-shell">
    <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-end"><PageHeader eyebrow="Résumé" title="Experience, projects, and technical work." description="View the current one-page résumé below or download a copy for offline review." /><a href="/assets/resume.pdf" download="Ritesh_Kushwaha_Resume.pdf" className="button-primary mb-14 shrink-0">Download PDF ↓</a></div>
    <section className="panel overflow-hidden" aria-label="Resume preview"><object data="/assets/resume.pdf#view=FitH" type="application/pdf" className="h-[75vh] min-h-[700px] w-full"><div className="p-10 text-center"><p className="muted">Your browser cannot display the PDF preview.</p><a href="/assets/resume.pdf" className="text-link mt-4">Open the résumé directly ↗</a></div></object></section>
  </div>;
}
