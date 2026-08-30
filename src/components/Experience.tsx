import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      role: "Web Development Intern",
      company: "iNETZ Technologies",
      date: "Internship",
      description: "Worked on web development concepts, including frontend and backend fundamentals, gaining hands-on experience in developing responsive web applications using CSS and HTML.",
      skills: ["HTML", "CSS", "Frontend", "Backend"]
    },
    {
      role: "Full Stack Development Using Python",
      company: "Extazee Software Solutions",
      date: "Internship",
      description: "Designed and developed a real-time temperature and humidity control system, implementing efficient data handling techniques to minimize latency and ensure reliable system performance.",
      skills: ["Python", "Full Stack", "Data Handling", "System Design"]
    }
  ];

  const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Start filling the line when the top of the container hits the middle of the screen
      const startTrigger = windowHeight * 0.6;
      // The scrollable distance is the height of the container
      const totalDistance = rect.height;
      
      // Calculate progress between 0 and 1
      const progress = Math.max(0, Math.min(1, (startTrigger - rect.top) / totalDistance));
      
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="experience" className="relative z-20 w-full py-24 bg-white font-sans overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 w-full">
        
        {/* Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-bold tracking-widest text-pink-500 uppercase mb-3">
            My Journey
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A9C] to-[#FF5E85]">Experience</span>
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FF7A9C] to-[#FF5E85] mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative" ref={containerRef}>
          {/* Vertical Line Background */}
          <div className="absolute left-0 md:left-[23px] lg:left-1/2 transform lg:-translate-x-1/2 top-0 bottom-0 w-1 bg-neutral-100 rounded-full"></div>
          
          {/* Animated Vertical Line Fill */}
          <div 
            className="absolute left-0 md:left-[23px] lg:left-1/2 transform lg:-translate-x-1/2 top-0 w-1 bg-gradient-to-b from-[#FF7A9C] to-[#FF5E85] rounded-full"
            style={{ height: `${scrollProgress * 100}%` }}
          ></div>

          <div className="flex flex-col gap-12">
            {experiences.map((exp, idx) => {
              // Calculate if this specific dot should be "lit up" based on the progress
              const activationPoint = (idx + 0.5) / experiences.length;
              const isLit = scrollProgress >= activationPoint;

              return (
                <div key={idx} className={`relative flex flex-col lg:flex-row items-center ${idx % 2 === 0 ? 'lg:flex-row-reverse' : ''} group`}>
                  
                  {/* Timeline Dot */}
                  <div className={`absolute left-0 lg:left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white border-[4px] shadow-sm flex items-center justify-center z-10 transition-all duration-500 ${isLit ? 'border-pink-200 scale-110' : 'border-[#fdf2f8] scale-100'}`}>
                    <div className={`w-4 h-4 rounded-full transition-all duration-500 ${isLit ? 'bg-gradient-to-r from-[#FF7A9C] to-[#FF5E85] scale-100' : 'bg-neutral-200 scale-50'}`}></div>
                  </div>

                  {/* Content Box */}
                  <motion.div 
                    initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className={`w-full lg:w-1/2 pl-16 lg:pl-0 ${idx % 2 === 0 ? 'lg:pr-16 text-left lg:text-right' : 'lg:pl-16 text-left'}`}
                  >
                    <div className="bg-white p-8 rounded-[32px] border border-neutral-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(255,122,156,0.1)] transition-all duration-700 relative transform hover:-translate-y-1">
                      <div className={`flex items-center gap-2 mb-4 text-pink-500 ${idx % 2 === 0 ? 'lg:justify-end' : 'justify-start'}`}>
                        <Calendar size={16} />
                        <span className="text-sm font-semibold tracking-wide uppercase">{exp.date}</span>
                      </div>
                      
                      <h4 className="text-2xl font-bold text-neutral-900 mb-2">{exp.role}</h4>
                      
                      <div className={`flex items-center gap-2 mb-6 text-neutral-500 ${idx % 2 === 0 ? 'lg:justify-end' : 'justify-start'}`}>
                        <Briefcase size={16} />
                        <span className="font-medium text-lg">{exp.company}</span>
                      </div>

                      <p className="text-neutral-500 leading-relaxed mb-8">
                        {exp.description}
                      </p>

                      <div className={`flex flex-wrap gap-2 ${idx % 2 === 0 ? 'lg:justify-end' : 'justify-start'}`}>
                        {exp.skills.map((skill, sIdx) => (
                          <span key={sIdx} className="px-4 py-1.5 bg-[#fdf2f8] text-pink-600 text-xs font-semibold rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
