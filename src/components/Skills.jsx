import React from "react";

// Clean categorized skills without icons
const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
     { name: "JavaScript", dotColor: "bg-yellow-500", hoverTextColor: "hover:text-yellow-600" },
      { name: "HTML5", dotColor: "bg-orange-500", hoverTextColor: "hover:text-orange-600" },
      { name: "CSS3", dotColor: "bg-blue-500", hoverTextColor: "hover:text-blue-600" },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", dotColor: "bg-green-600", hoverTextColor: "hover:text-green-700" },
      { name: "Java", dotColor: "bg-red-500", hoverTextColor: "hover:text-red-600" },
      { name: "C Language", dotColor: "bg-indigo-500", hoverTextColor: "hover:text-indigo-600" },
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="py-28 px-6 bg-[#FAF6F0] relative overflow-hidden"
    >
      {/* Consistent Tech-Grid Matrix Background */}
      <div className="absolute inset-0 opacity-[0.2] bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] [background-size:32px_32px] pointer-events-none animate-gridPan"></div>

      {/* Section Title */}
      <div className="relative z-10 text-center mb-20 animate-popIn opacity-0">
        <h2 className="text-4xl md:text-5xl font-black text-[#2D2219] tracking-tight mb-2">
          TECHNICAL SKILLS
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full animate-pulse"></div>
      </div>

      {/* Two-Column Minimalist Layout */}
      <div className="relative z-10 grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {skillCategories.map((category, catIndex) => (
          <div
            key={catIndex}
            style={{ animationDelay: `${catIndex * 0.2}s` }}
            className="bg-white/40 border border-orange-200/20 p-8 rounded-2xl backdrop-blur-md shadow-[0_8px_32px_rgba(45,34,25,0.02)] animate-superReveal opacity-0 flex flex-col justify-between"
          >
            {/* Category Header */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-[#2D2219] uppercase tracking-wider border-b border-orange-200/40 pb-3 flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                {category.title}
              </h3>
            </div>

            {/* Inner Grid for Minimalist Text Tags */}
            <div className="grid grid-cols-2 gap-4">
              {category.skills.map((skill, index) => (
                <div
                  key={index}
                  className={`bg-white/60 border border-orange-200/10 px-4 py-3.5 rounded-xl flex items-center gap-3 transition-all duration-300 hover:bg-white hover:border-orange-400/50 hover:shadow-sm transform hover:-translate-y-0.5 group cursor-pointer font-bold text-[#4A3E3D] text-sm md:text-base tracking-tight ${skill.hoverTextColor}`}
                >
                  {/* Minimal Subtle Color Indicator Dot */}
                  <span className={`w-1.5 h-1.5 rounded-full ${skill.dotColor} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></span>
                  
                  <span>
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;