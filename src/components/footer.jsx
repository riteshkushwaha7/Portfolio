import { FaXTwitter, FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-700 z-50 text-white py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="flex gap-6 text-2xl">
          <a
            href="https://x.com/cyberrk_"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="hover:text-gray-300"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://linkedin.com/in/riteshkushwaha7"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-gray-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:riteshkushwaha497@gmail.com"
            aria-label="Gmail"
            className="hover:text-gray-300"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/riteshkushwaha7"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-300"
          >
            <FaGithub />
          </a>
        </div>

        <div className="text-sm text-center md:text-right">
          © 2025 Ritesh Kushwaha · Bhopal
        </div>
      </div>
    </footer>
  );
};

export default Footer;
