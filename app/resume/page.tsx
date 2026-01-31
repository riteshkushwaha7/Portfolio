export default function Resume() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Ritesh Kushwaha</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">Software Developer</p>
        </header>

        <div className="mb-10 relative mt-6 border-2 border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <iframe
            src="/assets/resume.pdf"
            width="100%"
            height="800px"
            className="border-0 w-full h-[800px] sm:h-[900px] lg:h-[1000px]"
            title="Ritesh's Resume"
          ></iframe>
        </div>

        <div className="text-center mt-10">
          <a
            href="/assets/resume.pdf"
            download="Ritesh's resume.pdf"
            className="inline-block px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-md hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

