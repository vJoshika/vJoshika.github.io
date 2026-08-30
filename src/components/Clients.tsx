import React from "react";

export default function Clients() {
  // Using the actual tools and technologies from the Skillset section
  const techLogos = [
    { name: "Java", icon: "https://api.iconify.design/logos:java.svg" },
    { name: "Python", icon: "https://api.iconify.design/logos:python.svg" },
    { name: "C", icon: "https://api.iconify.design/logos:c.svg" },
    { name: "HTML5", icon: "https://api.iconify.design/logos:html-5.svg" },
    { name: "CSS3", icon: "https://api.iconify.design/logos:css-3.svg" },
    { name: "JavaScript", icon: "https://api.iconify.design/logos:javascript.svg" },
    { name: "MySQL", icon: "https://api.iconify.design/logos:mysql.svg" },
    { name: "Postman", icon: "https://api.iconify.design/logos:postman-icon.svg" },
    { name: "Arduino", icon: "https://api.iconify.design/logos:arduino.svg" },
    { name: "Git", icon: "https://api.iconify.design/logos:git-icon.svg" },
    { name: "GitHub", icon: "https://api.iconify.design/logos:github-icon.svg" },
    { name: "VS Code", icon: "https://api.iconify.design/logos:visual-studio-code.svg" },
  ];

  const marqueeItems = [...techLogos, ...techLogos];

  return (
    <section className="w-full min-h-screen py-16 bg-[#fdf2f8] overflow-hidden flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center animate-fade-in-up">
        <h3 className="text-[13px] md:text-[14px] font-bold tracking-[0.2em] text-neutral-500 uppercase">
          Technologies & Tools I Work With
        </h3>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-x-hidden group w-full max-w-[1400px] mx-auto mask-image-gradient">
        <div className="flex w-max animate-marquee space-x-8 md:space-x-12 px-8 items-center">
          {marqueeItems.map((tech, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-4 bg-white/70 backdrop-blur-md px-8 py-5 rounded-2xl border border-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] opacity-80 hover:opacity-100 hover:-translate-y-1 transition-all duration-300 grayscale hover:grayscale-0 cursor-default group"
            >
              <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
              <span className="text-[18px] font-bold text-neutral-600 tracking-tight group-hover:text-neutral-900 transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
