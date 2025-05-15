import { FaDesktop, FaLightbulb, FaTrophy } from "react-icons/fa";

const About = () => {
  return (
    <div id="about">
    <div className="bg-gradient-to-b from-gray-300 via-white to-gray-300 min-h-screen flex items-center justify-center px-4 py-10">
      <section className="w-full max-w-5xl text-center space-y-16">
        <div>
          <h2 className="inline-block font-montserrat font-bold text-black text-xl md:text-2xl tracking-widest border-2 border-black px-8 py-2 mb-6">
            ABOUT ME
          </h2>
          <p className="text-sm md:text-base text-black leading-relaxed max-w-full mx-auto text-justify">
            I’m Ritesh Kushwaha, a passionate Web Developer currently pursuing
            B.Tech in Information Technology at the University Institute of
            Technology UIT RGPV Bhopal, graduating in 2027. With hands-on
            experience in full-stack development, I focus on creating dynamic,
            scalable web solutions that deliver great user experiences. I’m
            dedicated to continuous learning, always staying up-to-date with the
            latest tech trends and best practices.
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-center space-x-6 text-sm font-semibold">
            <div className="border-l border-black h-5"></div>
            <button className="uppercase tracking-widest">Explore</button>
            <div className="border-r border-black h-5"></div>
          </div>
          <div className="flex justify-center">
            <div className="w-16 border-t border-black"></div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-around gap-y-12 gap-x-8 text-left text-sm text-black">
          <div className="flex flex-col items-center justify-center relative w-full md:w-1/3 text-center">
            <FaLightbulb size={40} color="#4B5563" />
            <h3 className="font-montserrat font-bold tracking-widest mb-2 text-lg">
              Problem Solving
            </h3>
            <p className="text-base text-justify">
              With a solid foundation in data structures and algorithms (DSA), I
              participate in various coding contests and hackathons to
              continuously sharpen my problem-solving skills.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center relative w-full md:w-1/3 text-center">
            <FaDesktop size={40} color="#4B5563" />
            <h3 className="font-montserrat font-bold tracking-widest mb-2 text-lg">
              Development (MERN Stack)
            </h3>
            <p className="text-base text-justify">
              I specialize in full-stack web development using the MERN stack
              (MongoDB, Express.js, React.js, Node.js), creating interactive and
              responsive websites that provide seamless user experiences and
              optimal performance.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center relative w-full md:w-1/3 text-center">
            <FaTrophy size={40} color="#4B5563" />
            <h3 className="font-montserrat font-bold tracking-widest mb-2 text-lg">
              Contest & Hackathons
            </h3>
            <p className="text-base text-justify">
              I actively participate in coding competitions and hackathons,
              staying competitive while learning new techniques, collaborating
              with others, and solving complex challenges.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-16 border-t border-black"></div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default About;
