const projectsData = [
  {
    id: 3,
    demoLink: "https://loan-default-risk-model.streamlit.app/",
    githubRepo: "https://github.com/riteshkushwaha7/Default-predictor",
    title: "Loan Default Risk Predictor Webapp",
    creationDate: "August 2025",
    features: "Accuracy of 88.57 %, with AUC of 0.831",
    technologies: "Python, Pandas, NumPy, Scikit-Learn, XGBoost"
  },
  {
    id: 1,
    demoLink: "https://swasth-verify.vercel.app/",
    githubRepo: "https://github.com/riteshkushwaha7/SwasthVerify-main",
    title: "Swasth Verify - Harmful Chemical Detector",
    creationDate: "April 2025",
    features: "Detect Harmful Chemicals, LLM Response, Report Generator, OCR Technology",
    technologies: "React, Node.js, Tailwind CSS, Express.js, Tesseract-OCR, MongoDB"
  },
  {
    id: 2,
    demoLink: "https://www.linkedin.com/posts/riteshkushwaha7_mern-shorturl-backenddevelopment-activity-7309170217618673664-9WUR",
    githubRepo: "https://github.com/riteshkushwaha7/Trimly",
    title: "Trimly - URL Shortener & QR Code Generator",
    creationDate: "March 2025",
    features: "ShortURL Generate, QR Code Generate, User Authentication, Session Management",
    technologies: "JavaScript, MongoDB, EJS, Node.js, bycryptjs, jwt, cookie-parser"
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
              className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden flex flex-col"
            >
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{project.creationDate}</p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Features:</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {project.features}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Technologies:</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {project.technologies}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-4 p-5 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium rounded-md hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
                >
                  Demo
                </a>
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

