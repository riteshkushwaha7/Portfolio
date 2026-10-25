import PageHeader from "@/components/PageHeader";

const groups = [
  { name:"Programming languages", note:"Languages I use for products, automation, and problem solving.", skills:["JavaScript","TypeScript","Python","C++"] },
  { name:"Frontend", note:"Accessible, responsive interfaces and application UI.", skills:["HTML5","CSS3","React","Next.js","Tailwind CSS","Bootstrap"] },
  { name:"Backend and APIs", note:"Application services, data access, and API design.", skills:["Node.js","Express","FastAPI","GraphQL","REST APIs","Prisma"] },
  { name:"Databases", note:"Relational, document, and managed data stores.", skills:["PostgreSQL","MongoDB","Firebase"] },
  { name:"Machine learning and data", note:"Applied modeling, data workflows, and retrieval systems.", skills:["scikit-learn","Machine Learning","Deep Learning","RAG","LangChain","Data Preprocessing","Jupyter Notebook","Streamlit"] },
  { name:"Developer tools", note:"Tools used to build, ship, and operate projects.", skills:["Git","GitHub","Nginx"] },
  { name:"Computer science", note:"Foundations that guide implementation choices.", skills:["Data Structures & Algorithms","Object-Oriented Programming","DBMS","Computer Networks","Operating Systems"] },
];

export default function Skills() {
  return <div className="page-shell">
    <PageHeader eyebrow="Technical toolkit" title="A practical stack, organized by how I use it." description="The technologies below come from coursework, internships, competitive programming, and shipped projects. I keep the list focused on tools I have actually used." />
    <div className="border-t">{groups.map((group,index)=><section key={group.name} className="grid gap-6 border-b py-9 md:grid-cols-[3rem_16rem_1fr] md:gap-8"><span className="muted font-mono text-xs">{String(index+1).padStart(2,"0")}</span><div><h2 className="text-lg font-semibold">{group.name}</h2><p className="muted mt-2 text-sm leading-6">{group.note}</p></div><ul className="grid grid-cols-2 gap-x-5 gap-y-3 sm:grid-cols-3"><>{group.skills.map(skill=><li key={skill} className="border-b pb-3 text-sm font-medium">{skill}</li>)}</></ul></section>)}</div>
  </div>;
}
