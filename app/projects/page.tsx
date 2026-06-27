const projectsData = [
  {
    id: 8,
    demoLink: "https://gridmind-umber.vercel.app/",
    githubRepo: "https://github.com/riteshkushwaha7/Gridmind",
    title: "GRIDMIND",
    dateRange: "Apr 2026 – May 2026",
    features:
      "100% vibe-coded AI-powered EV charging optimization hackathon project for grid operators, with microservices, LSTM demand forecasting, PPO reinforcement learning scheduling, and K-Means/DBSCAN clustering.",
    technologies: ["Next.js", "FastAPI", "PyTorch", "LSTM", "PPO RL", "InfluxDB", "Redis", "PostgreSQL", "MLflow"],
  },
  {
    id: 7,
    demoLink: "https://stoqintelli.streamlit.app/",
    githubRepo: "https://github.com/riteshkushwaha7/StoqIntelli",
    title: "StoqIntelli",
    dateRange: "May 2026",
    features:
      "60 percent vibe-coded AI-powered NSE stock forecasting tool with a resilient LSTM pipeline, multi-timeframe predictions, 8 pre-trained stock models, confidence/direction metadata, and live Yahoo Finance ingestion.",
    technologies: ["Python", "Streamlit", "PyTorch", "LSTM", "yfinance", "scikit-learn", "Pandas", "NumPy"],
  },
  {
    id: 6,
    demoLink: "https://air-cast.vercel.app/",
    githubRepo: "https://github.com/riteshkushwaha7/AirCast",
    title: "AirWise",
    dateRange: "Feb 2026 – May 2026",
    features:
      "6th semester minor project: an AWS-deployed AQI forecasting platform with 1d/2d/3d/7d predictions, health-based recommendations, alert preferences, activity planner, and stable mock demo mode.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React Native", "Expo", "FastAPI", "PostgreSQL", "InfluxDB", "LSTM"],
  },
  {
    id: 4,
    demoLink: null,
    githubRepo: "https://github.com/riteshkushwaha7/herblink",
    title: "HerbLink",
    dateRange: "Oct 2025 - Dec 2025",
    features:
      "Built as a herbal supply-chain traceability platform connecting farmers, labs, processors, and manufacturers with role-based workflows, verification flows, and inventory movement tracking.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zustand", "Leaflet", "Express.js", "Prisma", "PostgreSQL", "Twilio"],
  },
  {
    id: 5,
    demoLink: "https://github.com/riteshkushwaha7/PaisaTrace",
    githubRepo: "https://github.com/riteshkushwaha7/PaisaTrace",
    title: "PaisaTrace",
    dateRange: "Mar 2026",
    features:
      "Vibe-coded for the UBI Idea 2.0 hackathon as a banking fraud monitoring prototype with fraud alerts, fund-flow graph tracing, anomaly scoring, explainability panels, investigator workflow, and report-style evidence views.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "FastAPI", "Python", "NetworkX", "Pandas", "scikit-learn", "Recharts", "Cytoscape.js"],
  },
  {
    id: 3,
    demoLink: "https://loan-default-risk-model.streamlit.app/",
    githubRepo: "https://github.com/riteshkushwaha7/Default-predictor",
    title: "Loan Default Risk Predictor Webapp",
    dateRange: "Aug 2025",
    features: "Accuracy of 88.57 %, with AUC of 0.831",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-Learn", "XGBoost"],
  },
  {
    id: 1,
    demoLink: "https://swasth-verify.vercel.app/",
    githubRepo: "https://github.com/riteshkushwaha7/SwasthVerify-main",
    title: "Swasth Verify - Harmful Chemical Detector",
    dateRange: "Apr 2025",
    features: "Detect Harmful Chemicals, LLM Response, Report Generator, OCR Technology",
    technologies: ["React", "Node.js", "Tailwind CSS", "Express.js", "Tesseract-OCR", "MongoDB"],
  },
  {
    id: 2,
    demoLink: "https://www.linkedin.com/posts/riteshkushwaha7_mern-shorturl-backenddevelopment-activity-7309170217618673664-9WUR",
    githubRepo: "https://github.com/riteshkushwaha7/Trimly",
    title: "Trimly - URL Shortener & QR Code Generator",
    dateRange: "Mar 2025",
    features: "ShortURL Generate, QR Code Generate, User Authentication, Session Management",
    technologies: ["JavaScript", "MongoDB", "EJS", "Node.js", "bcryptjs", "JWT", "cookie-parser"],
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="inline-block font-bold text-black dark:text-white text-2xl md:text-3xl tracking-widest border-2 border-black dark:border-white px-8 py-2 mb-6 uppercase">
            Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="soft-card soft-card-hover overflow-hidden flex flex-col"
            >
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{project.dateRange}</p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Features:</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {project.features}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-4 p-5 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium rounded-md hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors shadow-sm"
                  >
                    Demo
                  </a>
                )}
                <a
                  href={project.githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white text-sm font-medium rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
