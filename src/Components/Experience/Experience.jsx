import React from "react";
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";

// Data arrays for skills and education for easier management
const skills = [
  { name: "HTML5", icon: <FaHtml5 size={50} className="text-[#E34F26]" /> },
  { name: "CSS3", icon: <FaCss3 size={50} className="text-[#1572B6]" /> },
  { name: "JavaScript", icon: <FaJs size={50} className="text-[#F7DF1E]" /> },
  { name: "React", icon: <FaReact size={50} className="text-[#61DAFB]" /> },
];

const Experience = () => {
  return (
    // Main container to center the content
    <div id="Experience" className="flex items-center justify-center min-h-screen p-4 sm:p-8">
      {/* The main card with the semi-transparent background and padding */}
      <div className="max-w-4xl w-full bg-black shadow-2xl bg-opacity-30 rounded-2xl p-8 md:p-12">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-12">
          Skills & Journey
        </h2>

        {/* Skills Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center text-gray-200 mb-8">
            Core Technologies
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center gap-3 p-4 bg-black bg-opacity-20 rounded-lg transition-all duration-300 ease-in-out hover:bg-white/10 hover:scale-105 cursor-pointer"
              >
                {skill.icon}
                <p className="text-gray-300 font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-2xl font-semibold text-center text-gray-200 mb-8">
            Education
          </h3>
          <div className="bg-slate-900 bg-opacity-50 rounded-xl p-6 shadow-lg">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div>
                <h4 className="font-bold text-xl text-white">
                  Bachelor of Technology, Computer Science
                </h4>
                {/* --- IMPORTANT: Change this to your university name --- */}
                <p className="text-teal-300 font-medium">
                  XYZ University of Engineering
                </p>
              </div>
              <p className="text-gray-400 font-medium mt-2 sm:mt-0 bg-gray-700/50 px-3 py-1 rounded-full">
                2021 - 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;