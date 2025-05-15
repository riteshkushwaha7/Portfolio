import React from "react";
import { FaGithub, FaLinkedinIn, FaAt } from "react-icons/fa";
import "../App.css";
import homegif from "/assets/Home-gif.gif";

const Home = () => {
  return (
    <div className="flex flex-col sm:flex-row min-h-screen bg-[#27324a]">
      {" "}

      <div
        className="w-full sm:w-1/2 flex flex-col justify-center relative sm:order-1 order-2 bg-gray-200 sm:bg-gray-300"
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%)" }}
      >
        <div className="hidden sm:flex sm:flex-col sm:justify-center sm:pl-10 md:pl-20 sm:max-w-md lg:max-w-lg xl:max-w-xl h-full">
          <p className="font-semibold text-black text-sm mb-2 animate-fadeIn typing-effect">
            Hi, I am
          </p>
          <h1 className="font-bold text-black text-3xl lg:text-4xl mb-1 animate-fadeIn typing-effect">
            Ritesh Kushwaha
          </h1>
          <p className="text-gray-600 text-xs sm:text-sm font-semibold mb-6 animate-fadeIn typing-effect">
            Software Developer | MERN Stack Developer | Competitive Programmer
          </p>
          <div className="flex space-x-10 ml-[9vw]">
            <a
              className="bg-gray-400 hover:bg-gray-500 text-black p-2 text-center rounded-sm w-8 h-8 flex items-center justify-center"
              target="_blank"
              href="mailto:riteshkushwaha497@gmail.com"
              aria-label="Email"
            >
              <FaAt />
            </a>
            <a
              className="bg-gray-400 hover:bg-gray-500 text-black p-2 text-center rounded-sm w-8 h-8 flex items-center justify-center"
              target="_blank"
              href="https://github.com/riteshkushwaha7"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              className="bg-gray-400 hover:bg-gray-500 text-black p-2 text-center rounded-sm w-8 h-8 flex items-center justify-center"
              target="_blank"
              href="https://www.linkedin.com/in/riteshkushwaha7/"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 relative order-1 sm:order-2">
        <img
          alt="Portrait of Tomasz Gajda"
          className="object-cover w-full h-screen sm:max-h-screen"
          src={homegif}
        />
        <div
          className="sm:hidden absolute bottom-0 left-0 w-full bg-black bg-opacity-70 backdrop-blur-sm text-white px-6 py-5"
          style={{
            clipPath: "polygon(10% 50%, 100% -180%, 100% 100%, -150% 100%)",
          }}
        >
          <div className="flex justify-between items-center">
            <div className="text-right w-full">
              <p className="text-sm font-normal mb-0.5">Hi, I am</p>
              <h1 className="text-2xl font-bold leading-tight mb-0.5">
                Ritesh Kushwaha
              </h1>
              <p className="text-xs font-light">Software Developer</p>
              <p className="text-xs font-light">MERN Stack Developer</p>
            </div>
            <div className="flex flex-col space-y-4 text-white text-lg pl-4">
              <a
                aria-label="Email"
                className="hover:text-gray-300"
                target="_blank"
                href="mailto:riteshkushwaha497@gmail.com"
              >
                <FaAt />
              </a>
              <a
                aria-label="GitHub"
                className="hover:text-gray-300"
                target="_blank"
                href="https://github.com/riteshkushwaha7"
              >
                <FaGithub />
              </a>
              <a
                aria-label="LinkedIn"
                className="hover:text-gray-300"
                target="_blank"
                href="https://www.linkedin.com/in/riteshkushwaha7/"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
