export default function Resume() {
  return (
    <div id="resume" className="min-h-screen bg-[#27324a] mt-10 text-gray-100 px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-100">Ritesh Kushwaha</h1>
          <p className="text-lg text-gray-300">Software Developer</p>
        </header>

        <div className="mb-10 relative mt-6">
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
            className="bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}
