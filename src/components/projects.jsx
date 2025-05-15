import pro1 from '../assets/pro-1.png';
import pro2 from '../assets/pro-2.jpg';
import pro3 from '../assets/pro-3.jpg';

const projectsData = [
  {
    id: 1,
    image: pro1,
    demoLink: "https://swasth-verify.vercel.app/",
    githubRepo: "https://github.com/riteshkushwaha7/SwasthVerify-main",
    title: "Swasth Verify - Harmful Chemical Detector",
    creationDate: "April 2025", 
    features: "Detect Harmful Chemicals, LLM Response, Report Generator, OCR Technology",
    technologies: "React, Node.js, Tailwind CSS, Express.js, Tesseract-OCR, MongoDB"
  },
  {
    id: 2,
    image: pro2, 
    demoLink: "https://www.linkedin.com/posts/riteshkushwaha7_mern-shorturl-backenddevelopment-activity-7309170217618673664-9WUR",
    githubRepo: "https://github.com/riteshkushwaha7/Trimly",
    title: "Trimly - URL Shortener & QR Code Generator",
    creationDate: "March 2025",
    features: "ShortURL Generate, QR Code Generate, User Authentication, Session Management",
    technologies: "JavaScript, MongoDB, EJS, Node.js, bycryptjs, jwt, cookie-parser"
  },
  {
    id: 3,
    image: pro3, 
    demoLink: "/",
    githubRepo: "https://github.com/riteshkushwaha497/Frontend-projects/tree/main/Memory_Game",
    title: "Memory Game",
    creationDate: "March 2024",
    features: "Fun, Interactive, Brain-Training",
    technologies: "Javascript, CSS, HTML"
  },
];

const Projects = () => {
  return (
    <div id="projects" className='bg-gradient-to-b from-gray-300 via-white to-gray-300 '>
              <h2 className="inline-block font-montserrat font-bold text-black text-xl md:text-2xl tracking-widest border-2 border-black px-8 py-2 mb-6">
            PROJECTS
          </h2>
    <div 
      
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4 md:p-8 min-h-[80-vh]"
    >
        
      {projectsData.map((project) => (
        <div
          key={project.id}
          className="w-full max-w-sm min-h-96 h-auto bg-gray-800 border border-gray-700 rounded-lg shadow-xl overflow-hidden flex flex-col"
        >
          <div className="p-6 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
            <img
              className="w-full h-40 object-contain rounded-md mb-4 mx-auto" 
              src={project.image === pro1 ? pro1 : project.image} 
              alt={project.title}
            />
            <span className="block text-md text-gray-300">{project.creationDate}</span>
          </div>

          <div className="flex-grow overflow-y-auto px-6 pb-4 space-y-3">
            <div>
              <h4 className="text-md font-semibold text-gray-200">Features:</h4>
              <p className="text-sm text-gray-300 break-words max-h-28 overflow-y-auto custom-scrollbar pr-2"> 
                {project.features}
              </p>
            </div>

            <div>
              <h4 className="text-md font-semibold text-gray-200">Technologies:</h4>
              <p className="text-sm text-gray-300 break-words max-h-24 overflow-y-auto custom-scrollbar pr-2"> 
                {project.technologies}
              </p>
            </div>
          </div>
          
          <div className="flex justify-center gap-4 p-5 border-t border-gray-600">
            <a
              href={project.demoLink}
              className="bg-gray-500 hover:bg-gray-400 text-black font-semibold py-2 px-4 rounded-md shadow-md hover:shadow-lg transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
            <a
              href={project.githubRepo}
              className="bg-gray-900 hover:bg-black text-white font-semibold py-2 px-4 rounded-md shadow-md hover:shadow-lg transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
    
    
</div>
  );
};

export default Projects;

