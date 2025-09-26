import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    // Main container to center the content on the page
    <div id="About" className="flex items-center justify-center min-h-screen p-4 sm:p-8">
      {/* The "card" with the semi-transparent background */}
      <div className="max-w-6xl w-full bg-black shadow-2xl bg-opacity-30 rounded-2xl p-8 md:p-12">
        {/* Responsive grid: 1 column on mobile, 2 on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Column 1: Image */}
          <div className="flex justify-center">
            <img 
              className="w-full max-w-2xl rounded-lg" 
              src="https://ik.imagekit.io/vckkcrf8c/boy-developer-or-software-engineer-mascot-cartoon-character-template-vector-removebg-preview%20(1).png?updatedAt=1758887068156"
              alt="A creative illustration representing software development" 
            />
          </div>

          {/* Column 2: Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Me
            </h2>
            
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300">
              Frontend Developer
            </h3>

            <p className="text-gray-300 mb-8 leading-relaxed">
              I am a passionate Frontend Developer dedicated to building intuitive, responsive, and performant web applications. With a keen eye for design and a deep understanding of modern web technologies, I transform complex ideas into seamless and engaging user experiences. My goal is to write clean, maintainable code that brings digital visions to life.
            </p>

            {/* Skills List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              <div className="flex items-center gap-3">
                <IoArrowForward size={20} className="text-teal-400 flex-shrink-0" />
                <span className="text-white">React.js</span>
              </div>
              {/* <div className="flex items-center gap-3">
                <IoArrowForward size={20} className="text-teal-400 flex-shrink-0" />
                <span className="text-white">TypeScript</span>
              </div> */}
              <div className="flex items-center gap-3">
                <IoArrowForward size={20} className="text-teal-400 flex-shrink-0" />
                <span className="text-white">Tailwind CSS</span>
              </div>
              <div className="flex items-center gap-3">
                <IoArrowForward size={20} className="text-teal-400 flex-shrink-0" />
                <span className="text-white">HTML</span>
              </div>
              <div className="flex items-center gap-3">
                <IoArrowForward size={20} className="text-teal-400 flex-shrink-0" />
                <span className="text-white">Javascript</span>
              </div>
               <div className="flex items-center gap-3">
                <IoArrowForward size={20} className="text-teal-400 flex-shrink-0" />
                <span className="text-white">UI/UX Principles</span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;