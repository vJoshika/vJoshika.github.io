import { useEffect, useRef, useState } from "react";
import { ExternalLink, Code2 } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Smart CNG: Live Availability",
      category: "Full Stack Web",
      description: "A smart web-based system providing real-time CNG station availability, vehicle queue status monitoring, waiting time estimation, and nearest station routing.",
      techStack: ["HTML", "CSS", "Spring Boot", "SQL"],
      image: "/project1.jpg",
    },
    {
      title: "Pressure Transducer Well Management",
      category: "Embedded Systems",
      description: "A sensor-based system utilizing Arduino to monitor and process real-time pressure data, ensuring efficient and safe well management.",
      techStack: ["Arduino", "Embedded Systems", "Pressure Sensors"],
      image: "/project2.jpg",
    },
    {
      title: "Face Recognition Attendance System",
      category: "AI & Computer Vision",
      description: "An automated attendance system that identifies individuals using facial recognition and records attendance digitally.",
      techStack: ["Python", "AI", "Computer Vision", "MySQL"],
      image: "/project3.jpg",
    },
    {
      title: "Smart Mining Helmet",
      category: "IoT & Safety",
      description: "A smart safety system designed to improve the safety of mining workers by continuously monitoring environmental and worker-related conditions.",
      techStack: ["IoT", "Embedded Systems", "Sensors"],
      image: "/project4.jpg",
    }
  ];

  return (
    <section id="project" className="relative w-full min-h-screen pt-24 bg-[#fdf2f8] font-sans -mb-48 lg:-mb-[45vh] z-10 flex flex-col justify-center">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 w-full">
        
        {/* Header */}
        <div className="text-center mb-24 animate-fade-in-up delay-200">
          <h2 className="text-sm font-bold tracking-widest text-pink-500 uppercase mb-3">
            Portfolio
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A9C] to-[#FF5E85]">Projects</span>
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FF7A9C] to-[#FF5E85] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Project Banner */}
        <div className="w-full rounded-[40px] bg-neutral-900 text-white p-10 md:p-16 mb-12 flex flex-col md:flex-row items-center justify-between shadow-[0_20px_40px_rgba(0,0,0,0.2)] overflow-hidden relative group">
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
          
          <div className="relative z-10 max-w-xl">
            <h4 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
              Crafting Digital <br/> Experiences
            </h4>
            <p className="text-neutral-400 text-lg leading-relaxed">
              Explore my latest projects where I combine hardware, software, and innovative design to solve real-world problems.
            </p>
          </div>
          <div className="relative z-10 mt-8 md:mt-0 flex shrink-0">
            <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center animate-spin-slow">
              <svg viewBox="0 0 100 100" className="w-full h-full p-2">
                <path id="textPath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                <text className="text-[14px] font-bold fill-white uppercase tracking-widest">
                  <textPath href="#textPath" startOffset="0%">
                    Scroll to Explore • Scroll to Explore •
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* Vertically Stacking Cards */}
        <div className="relative flex flex-col pb-12 mt-12">
          {projects.map((project, idx) => (
            <AnimatedProjectCard key={idx} project={project} idx={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}

const AnimatedProjectCard = ({ project, idx }: { project: any; idx: number }) => {
  return (
    <div 
      className="sticky w-full rounded-[40px] bg-white border border-neutral-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col lg:flex-row group mb-48 lg:mb-[45vh] transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(255,122,156,0.15)]"
      style={{ top: `calc(10vh + ${idx * 1.5}rem)` }}
    >
      {/* Image Section */}
      <div className="w-full lg:w-[60%] relative overflow-hidden bg-[#fdf2f8] p-4 lg:p-8 flex items-center justify-center">
        <div className="w-full h-full rounded-[24px] overflow-hidden relative shadow-lg bg-white flex items-center justify-center">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-contain p-2 transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.33,1,0.68,1)]" 
          />
        </div>
      </div>

      {/* Content Section (Right) */}
      <div className="w-full lg:w-[40%] p-10 lg:p-16 flex flex-col justify-center bg-white">
        <div className="flex items-center gap-3 mb-6">
          <span className="px-3 py-1 bg-neutral-100 text-neutral-600 text-xs font-bold uppercase tracking-widest rounded-full">
            {project.category}
          </span>
        </div>
        
        <h4 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 leading-[1.1] tracking-tight group-hover:text-pink-500 transition-colors duration-300">
          {project.title}
        </h4>
        
        <p className="text-neutral-500 text-[16px] leading-relaxed mb-10">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-10">
          {project.techStack.map((tech: string, tIdx: number) => (
            <span key={tIdx} className="px-4 py-1.5 bg-white border border-neutral-200 text-neutral-600 text-xs font-semibold rounded-full hover:border-pink-300 hover:text-pink-500 transition-colors cursor-default">
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 mt-auto">
          <a href="#" className="flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white text-sm font-semibold rounded-full hover:bg-pink-500 transition-colors duration-300">
            <ExternalLink size={18} />
            View Project
          </a>
          <a href="#" className="flex items-center justify-center w-12 h-12 bg-white border border-neutral-200 text-neutral-600 rounded-full hover:border-pink-500 hover:text-pink-500 transition-colors duration-300">
            <Code2 size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};
