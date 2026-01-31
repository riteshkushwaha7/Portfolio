import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6 animate-fade-in">
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">
              Hi, I am
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Ritesh Kushwaha
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 font-medium">
              Software Engineer | MERN Developer | ML Developer
            </p>
            <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
              I&apos;m a passionate Web Developer currently pursuing B.Tech in Information Technology 
              at the University Institute of Technology UIT RGPV Bhopal, graduating in 2027. 
              With hands-on experience in full-stack development, I focus on creating dynamic, 
              scalable web solutions that deliver great user experiences.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a
                href="mailto:riteshkushwaha497@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="w-10 h-10 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-md flex items-center justify-center hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a
                href="https://github.com/riteshkushwaha7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-md flex items-center justify-center hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/riteshkushwaha7/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-md flex items-center justify-center hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <Link
                href="/projects"
                className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-md font-medium hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
              >
                View Projects
              </Link>
              <Link
                href="/resume"
                className="px-6 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-md font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                View Resume
              </Link>
            </div>
          </div>

          {/* Right side - Abstract shape/illustration */}
          <div className="hidden lg:block animate-slide-up">
            <div className="relative w-full h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 dark:from-gray-800 to-gray-200 dark:to-gray-700 rounded-lg transform rotate-3"></div>
              <div className="absolute inset-0 bg-gray-900 dark:bg-white rounded-lg transform -rotate-3 flex items-center justify-center">
                <div className="text-white dark:text-gray-900 text-center space-y-4">
                  <div className="text-6xl font-mono font-bold">RK</div>
                  <div className="text-sm uppercase tracking-widest">Developer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

