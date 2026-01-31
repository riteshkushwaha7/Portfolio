'use client';

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaNodeJs,
  FaDatabase,
  FaPython,
  FaCode,
  FaProjectDiagram,
  FaNetworkWired,
  FaServer,
  FaBrain,
  FaBook,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiGraphql,
  SiNginx,
  SiFirebase,
  SiPostgresql,
  SiCplusplus,
  SiJupyter,
  SiScikitlearn,
} from "react-icons/si";

const skillsData = {
  programmingLanguages: [
    { name: "JavaScript", icon: <FaJsSquare size={32} /> },
    { name: "TypeScript", icon: <SiTypescript size={32} /> },
    { name: "Python", icon: <FaPython size={32} /> },
    { name: "C++", icon: <SiCplusplus size={32} /> },
  ],
  frameworksLibraries: [
    { name: "React", icon: <FaReact size={32} /> },
    { name: "Next.js", icon: <SiNextdotjs size={32} /> },
    { name: "Node.js", icon: <FaNodeJs size={32} /> },
    { name: "Express", icon: <SiExpress size={32} /> },
    { name: "Bootstrap", icon: <FaBootstrap size={32} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={32} /> },
    { name: "GraphQL", icon: <SiGraphql size={32} /> },
    { name: "scikit-learn", icon: <SiScikitlearn size={32} /> },
  ],
  databases: [
    { name: "MongoDB", icon: <SiMongodb size={32} /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={32} /> },
    { name: "Firebase", icon: <SiFirebase size={32} /> },
  ],
  toolsPlatforms: [
    { name: "Git", icon: <FaGitAlt size={32} /> },
    { name: "Nginx", icon: <SiNginx size={32} /> },
    { name: "Jupyter Notebook", icon: <SiJupyter size={32} /> },
  ],
  csFundamentals: [
    { name: "DSA", icon: <FaProjectDiagram size={32} /> },
    { name: "OOPS", icon: <FaCode size={32} /> },
    { name: "DBMS", icon: <FaDatabase size={32} /> },
    { name: "CN", icon: <FaNetworkWired size={32} /> },
    { name: "OS", icon: <FaServer size={32} /> },
    { name: "ML", icon: <FaBrain size={32} /> },
  ],
  frontendBasics: [
    { name: "HTML5", icon: <FaHtml5 size={32} /> },
    { name: "CSS3", icon: <FaCss3Alt size={32} /> },
  ],
};

export default function Skills() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="inline-block font-bold text-black dark:text-white text-2xl md:text-3xl tracking-widest border-2 border-black dark:border-white px-8 py-2 mb-6 uppercase">
            Skills
          </h2>
        </div>

        <div className="space-y-12">
          {/* Programming Languages */}
          <section>
            <h3 className="text-left font-bold text-sm tracking-widest mb-6 uppercase text-gray-900 dark:text-white">
              Programming Languages
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {skillsData.programmingLanguages.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center text-center p-4 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-900 dark:hover:border-white transition-colors bg-white dark:bg-gray-800"
                >
                  <div className="text-gray-900 dark:text-white mb-2">
                    {skill.icon}
                  </div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{skill.name}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Frontend Basics */}
          <section>
            <h3 className="text-left font-bold text-sm tracking-widest mb-6 uppercase text-gray-900 dark:text-white">
              Frontend Basics
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {skillsData.frontendBasics.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center text-center p-4 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-900 dark:hover:border-white transition-colors bg-white dark:bg-gray-800"
                >
                  <div className="text-gray-900 dark:text-white mb-2">
                    {skill.icon}
                  </div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{skill.name}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Frameworks / Libraries */}
          <section>
            <h3 className="text-left font-bold text-sm tracking-widest mb-6 uppercase text-gray-900 dark:text-white">
              Frameworks / Libraries
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {skillsData.frameworksLibraries.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center text-center p-4 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-900 dark:hover:border-white transition-colors bg-white dark:bg-gray-800"
                >
                  <div className="text-gray-900 dark:text-white mb-2">
                    {skill.icon}
                  </div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{skill.name}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Databases */}
          <section>
            <h3 className="text-left font-bold text-sm tracking-widest mb-6 uppercase text-gray-900 dark:text-white">
              Databases
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {skillsData.databases.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center text-center p-4 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-900 dark:hover:border-white transition-colors bg-white dark:bg-gray-800"
                >
                  <div className="text-gray-900 dark:text-white mb-2">
                    {skill.icon}
                  </div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{skill.name}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Tools & Platforms */}
          <section>
            <h3 className="text-left font-bold text-sm tracking-widest mb-6 uppercase text-gray-900 dark:text-white">
              Tools & Platforms
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {skillsData.toolsPlatforms.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center text-center p-4 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-900 dark:hover:border-white transition-colors bg-white dark:bg-gray-800"
                >
                  <div className="text-gray-900 dark:text-white mb-2">
                    {skill.icon}
                  </div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{skill.name}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CS Fundamentals */}
          <section>
            <h3 className="text-left font-bold text-sm tracking-widest mb-6 uppercase text-gray-900 dark:text-white">
              CS Fundamentals
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {skillsData.csFundamentals.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center text-center p-4 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-900 dark:hover:border-white transition-colors bg-white dark:bg-gray-800"
                >
                  <div className="text-gray-900 dark:text-white mb-2">
                    {skill.icon}
                  </div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{skill.name}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
