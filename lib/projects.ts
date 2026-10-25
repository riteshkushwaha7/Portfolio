export type Project = {
  title: string;
  date: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  status?: string;
  context?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "SmartForm",
    date: "October 2026",
    context: "7th-semester major project · Group project",
    description:
      "A privacy-first Manifest V3 browser extension that scans and fills web forms without submitting them. It keeps profiles, documents, job results, and application history in browser storage, with optional OpenRouter-assisted field and job matching.",
    technologies: ["Manifest V3", "JavaScript", "Chrome Storage", "React", "Vite", "OpenRouter API"],
    github: "https://github.com/riteshkushwaha7/SmartForm",
    featured: true,
  },
  {
    title: "Stencil",
    date: "September 2026",
    context: "MP Online Hackathon · Group project · AI-assisted development",
    status: "Under maintenance",
    description:
      "A university examination workspace combining a Tauri/React desktop client, FastAPI examination and authentication services, an API gateway, PostgreSQL persistence, and an optional local OpenCV sheet scanner.",
    technologies: ["React", "Tauri", "TypeScript", "FastAPI", "OpenCV", "PostgreSQL", "Turborepo"],
    github: "https://github.com/riteshkushwaha7/Stencil",
    demo: "https://stencil-three-rho.vercel.app/",
    featured: true,
  },
  {
    title: "HoneyChain",
    date: "September 2026",
    context: "Smart India Hackathon · PS SIH26021 · Team Optimisers",
    status: "Under development",
    description:
      "A group-built prototype for KVIC's Honey Mission. It records honey events in a SHA-256 hash-chained audit log, supports QR batch verification, and evaluates submitted hive readings with a rule-based health and productivity engine.",
    technologies: ["Next.js", "TypeScript", "FastAPI", "SQLAlchemy", "PostgreSQL", "JWT", "Recharts"],
    featured: true,
  },
  {
    title: "GRIDMIND",
    date: "April - May 2026",
    description:
      "AI-assisted EV charging optimization hackathon project for grid operators, with microservices, LSTM demand forecasting, PPO reinforcement-learning scheduling, and K-Means/DBSCAN clustering.",
    technologies: ["Next.js", "FastAPI", "PyTorch", "LSTM", "PPO RL", "InfluxDB", "Redis", "PostgreSQL", "MLflow"],
    github: "https://github.com/riteshkushwaha7/Gridmind",
  },
  {
    title: "StoqIntelli",
    date: "May 2026",
    description:
      "AI-assisted NSE stock forecasting tool with a resilient LSTM pipeline, multi-timeframe predictions, eight pre-trained stock models, confidence and direction metadata, and live Yahoo Finance ingestion.",
    technologies: ["Python", "Streamlit", "PyTorch", "LSTM", "yfinance", "scikit-learn", "Pandas", "NumPy"],
    github: "https://github.com/riteshkushwaha7/StoqIntelli",
    demo: "https://stoqintelli.streamlit.app/",
  },
  {
    title: "AirWise",
    date: "February - May 2026",
    context: "6th-semester minor project",
    description:
      "An AWS-deployed AQI forecasting platform with one-to-seven-day predictions, health-based recommendations, alert preferences, an activity planner, and a stable mock demo mode.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React Native", "Expo", "FastAPI", "PostgreSQL", "InfluxDB", "LSTM"],
    github: "https://github.com/riteshkushwaha7/AirCast",
    demo: "https://air-cast.vercel.app/",
  },
  {
    title: "HerbLink",
    date: "October - December 2025",
    description:
      "A herbal supply-chain traceability platform connecting farmers, labs, processors, and manufacturers through role-based workflows, verification flows, and inventory movement tracking.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zustand", "Leaflet", "Express.js", "Prisma", "PostgreSQL", "Twilio"],
    github: "https://github.com/riteshkushwaha7/herblink",
  },
  {
    title: "PaisaTrace",
    date: "March 2026",
    context: "UBI Idea 2.0 hackathon · AI-assisted development",
    description:
      "A banking fraud-monitoring prototype with fraud alerts, fund-flow graph tracing, anomaly scoring, explainability panels, investigator workflows, and report-style evidence views.",
    technologies: ["Next.js", "TypeScript", "FastAPI", "Python", "NetworkX", "Pandas", "scikit-learn", "Recharts", "Cytoscape.js"],
    github: "https://github.com/riteshkushwaha7/PaisaTrace",
  },
  {
    title: "Loan Default Risk Predictor",
    date: "August 2025",
    description: "A Streamlit machine-learning app for estimating loan-default risk with an XGBoost model, feature engineering, and class-imbalance handling.",
    technologies: ["Python", "Pandas", "NumPy", "scikit-learn", "XGBoost", "Streamlit"],
    github: "https://github.com/riteshkushwaha7/Default-predictor",
    demo: "https://loan-default-risk-model.streamlit.app/",
  },
  {
    title: "Swasth Verify",
    date: "April 2025",
    description:
      "A full-stack ingredient safety checker that extracts label text with OCR, checks it against a MongoDB-backed harmful-chemical database, and generates an explanatory report.",
    technologies: ["React", "Node.js", "Express.js", "Tailwind CSS", "Tesseract OCR", "MongoDB"],
    github: "https://github.com/riteshkushwaha7/SwasthVerify-main",
    demo: "https://swasth-verify.vercel.app/",
  },
  {
    title: "Trimly",
    date: "March 2025",
    description: "A URL shortener and QR-code generator with user authentication and session management.",
    technologies: ["JavaScript", "Node.js", "EJS", "MongoDB", "bcryptjs", "JWT"],
    github: "https://github.com/riteshkushwaha7/Trimly",
    demo: "https://www.linkedin.com/posts/riteshkushwaha7_mern-shorturl-backenddevelopment-activity-7309170217618673664-9WUR",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const archivedProjects = projects.filter((project) => !project.featured);
