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
} from "react-icons/si";


export default function Skills() {
  const sectionClasses = "mb-12";
  const titleClasses =
    "title-font font-bold text-sm tracking-widest mb-6 text-left"; 
  const gridClasses = "grid grid-cols-4 gap-y-6 gap-x-10 justify-items-center";
  const itemClasses = "flex flex-col items-center text-sm"; 

  const usingNow = [
    { name: "HTML5", icon: <FaHtml5 size={48} /> },
    { name: "CSS3", icon: <FaCss3Alt size={48} /> },
    { name: "JAVASCRIPT", icon: <FaJsSquare size={48} /> },
    { name: "REACT", icon: <FaReact size={48} /> },
    { name: "BOOTSTRAP", icon: <FaBootstrap size={48} /> },
    { name: "GIT", icon: <FaGitAlt size={48} /> },
    { name: "NODEJS", icon: <FaNodeJs size={48} /> },
    { name: "MONGODB", icon: <SiMongodb size={48} /> },
    { name: "EXPRESS", icon: <SiExpress size={48} /> },
    { name: "TAILWIND", icon: <SiTailwindcss size={48} /> },
  ];

  const learning = [
    { name: "TYPESCRIPT", icon: <SiTypescript size={48} /> },
    { name: "NEXT.JS", icon: <SiNextdotjs size={48} /> },
    { name: "GRAPHQL", icon: <SiGraphql size={48} /> },
    { name: "NGINX", icon: <SiNginx size={48} /> },
    { name: "PYTHON", icon: <FaPython size={48} /> },
  ];

  const otherSkills = [
    { name: "C++", icon: <SiCplusplus size={48} /> },
    { name: "FIREBASE", icon: <SiFirebase size={48} /> },
    { name: "POSTGRESQL", icon: <SiPostgresql size={48} /> },
    { name: "DBMS", icon: <FaDatabase size={48} /> },
    { name: "OOPS", icon: <FaCode size={48} /> },
    { name: "DSA", icon: <FaProjectDiagram size={48} /> },
  ];

  return (
    <div id="skills">
      <div
        className="bg-gradient-to-b from-gray-300 via-white to-gray-300 min-h-screen flex items-center justify-center p-6"
      >
        <div className="max-w-md w-full text-center">
          <div className="inline-block mb-10">
            <h1
              className="inline-block font-montserrat font-bold text-black text-xl md:text-2xl tracking-widest border-2 border-black px-8 py-2 mb-6"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                letterSpacing: "0.2em",
              }}
            >
              SKILLS
            </h1>
          </div>

          <section className={sectionClasses}>
            <h2
              className={titleClasses}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                letterSpacing: "0.2em",
              }}
            >
              USING NOW:
            </h2>
            <div className={gridClasses}>
              {usingNow.map(({ name, icon }) => (
                <div className={itemClasses} key={name}>
                  {icon}
                  <p className="mt-2">{name}</p>
                </div>
              ))}
            </div>
          </section>

          <section className={sectionClasses}>
            <h2
              className={titleClasses}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                letterSpacing: "0.2em",
              }}
            >
              LEARNING:
            </h2>
            <div className={gridClasses}>
              {learning.map(({ name, icon }) => (
                <div className={itemClasses} key={name}>
                  {icon}
                  <p className="mt-2">{name}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2
              className={titleClasses}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                letterSpacing: "0.2em",
              }}
            >
              OTHER SKILLS:
            </h2>
            <div className={gridClasses}>
              {otherSkills.map(({ name, icon }) => (
                <div className={itemClasses} key={name}>
                  {icon}
                  <p className="mt-2 whitespace-pre-line leading-4">{name}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
